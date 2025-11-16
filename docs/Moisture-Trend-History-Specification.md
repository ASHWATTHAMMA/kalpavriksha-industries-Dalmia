# Moisture Trend History Component - Technical Specification

## Document Version: 1.0
## Date: 2024
## Component: Smart Drip Irrigation Dashboard - Moisture Trend History Card

---

## 1. COMPONENT OVERVIEW

### 1.1 Purpose
The Moisture Trend History component provides a visual time-series representation of soil moisture behavior over 24-72 hours. It serves as the historical reference for the real-time moisture gauge and helps users understand:
- Soil drying rates after irrigation
- Water-holding capacity performance
- Irrigation schedule effectiveness
- Environmental impact (ET Index) on moisture decay
- Critical moisture threshold crossings

### 1.2 Integration Context
This component is part of the Smart Drip Irrigation Dashboard and must integrate with:
- Soil Composition Analysis (pie chart)
- Real-time Moisture Gauge
- Water Usage & Efficiency Card
- ET Index Card
- Nutrient Warning System
- Next Watering Prediction

---

## 2. DATA REQUIREMENTS

### 2.1 Input Data Structure

```javascript
// Soil Parameters (from existing dashboard)
const soilData = {
  composition: [
    { type: 'Alluvial Soil', percentage: 30 },
    { type: 'Red & Yellow Soil', percentage: 25 },
    { type: 'Forest/Mountain Soil', percentage: 45 }
  ],
  weightedWHC: 0.65,        // Calculated from composition
  fieldCapacity: 75,         // % (optimal max)
  wiltingPoint: 15,          // % (critical min)
  optimalRange: { min: 60, max: 80 }
};

// Environmental Data
const environmentalData = {
  etIndex: 6,                // 1-10 scale
  etMmPerDay: 4.5,          // Calculated from ET Index
  temperature: 28,           // °C (optional)
  humidity: 65               // % (optional)
};

// Time-Series Moisture Data (generated or from sensors)
const moistureHistory = [
  { timestamp: '2024-01-15T00:00:00', moisture: 72, event: null },
  { timestamp: '2024-01-15T03:00:00', moisture: 68, event: null },
  { timestamp: '2024-01-15T06:00:00', moisture: 85, event: { type: 'irrigation', amount: 25 } },
  { timestamp: '2024-01-15T09:00:00', moisture: 78, event: null },
  // ... continues for 48-72 hours
];

// Current Status (from real-time gauge)
const currentStatus = {
  moisture: 65,
  status: 'optimal',         // optimal | caution | low | critical
  color: '#2e7d32',
  nextWateringHours: 18
};
```

### 2.2 Data Generation Logic

```javascript
function generateMoistureHistory(hours, soilData, etIndex, currentMoisture) {
  const dataPoints = [];
  const intervalsPerHour = 1; // One reading per hour
  const totalPoints = hours * intervalsPerHour;
  
  // Calculate decay rate based on soil WHC and ET
  const baseDecayRate = 0.8; // % per hour
  const whcMultiplier = (1 - soilData.weightedWHC);
  const etMultiplier = 1 + (etIndex / 10);
  const effectiveDecayRate = baseDecayRate * whcMultiplier * etMultiplier;
  
  // Generate irrigation events (1-3 random events)
  const irrigationEvents = generateIrrigationEvents(hours);
  
  // Start from current moisture and work backwards
  let moisture = currentMoisture;
  
  for (let i = totalPoints - 1; i >= 0; i--) {
    const hoursAgo = totalPoints - i;
    const timestamp = new Date(Date.now() - hoursAgo * 3600000);
    
    // Check for irrigation event at this time
    const event = irrigationEvents.find(e => e.hoursAgo === hoursAgo);
    
    if (event) {
      // Sharp drop before irrigation (simulate dry soil)
      moisture = Math.max(20, moisture - 15);
      dataPoints.unshift({
        timestamp: timestamp.toISOString(),
        moisture: moisture,
        event: null
      });
      
      // Sharp rise after irrigation
      moisture = Math.min(90, moisture + event.amount);
      dataPoints.unshift({
        timestamp: timestamp.toISOString(),
        moisture: moisture,
        event: { type: 'irrigation', amount: event.amount }
      });
    } else {
      // Normal decay
      moisture += effectiveDecayRate;
      moisture = Math.min(95, Math.max(10, moisture));
      
      dataPoints.unshift({
        timestamp: timestamp.toISOString(),
        moisture: Math.round(moisture),
        event: null
      });
    }
  }
  
  return dataPoints;
}

function generateIrrigationEvents(hours) {
  const numEvents = Math.floor(Math.random() * 2) + 1; // 1-2 events
  const events = [];
  
  for (let i = 0; i < numEvents; i++) {
    events.push({
      hoursAgo: Math.floor(Math.random() * (hours - 6)) + 6,
      amount: Math.floor(Math.random() * 20) + 15 // 15-35% increase
    });
  }
  
  return events.sort((a, b) => b.hoursAgo - a.hoursAgo);
}
```

---

## 3. VISUALIZATION SPECIFICATIONS

### 3.1 Chart Configuration (Chart.js)

```javascript
const chartConfig = {
  type: 'line',
  data: {
    labels: moistureHistory.map(d => formatTime(d.timestamp)),
    datasets: [
      {
        label: 'Soil Moisture',
        data: moistureHistory.map(d => d.moisture),
        borderColor: '#0277bd',
        backgroundColor: 'rgba(2, 119, 189, 0.1)',
        borderWidth: 3,
        tension: 0.4,           // Smooth curves
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: moistureHistory.map((d, i) => 
          i === moistureHistory.length - 1 ? currentStatus.color : '#0277bd'
        ),
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            const dataPoint = moistureHistory[context.dataIndex];
            let label = `Moisture: ${context.parsed.y}%`;
            if (dataPoint.event) {
              label += `\n${dataPoint.event.type}: +${dataPoint.event.amount}%`;
            }
            return label;
          }
        }
      },
      annotation: {
        annotations: {
          optimalZone: {
            type: 'box',
            yMin: soilData.optimalRange.min,
            yMax: soilData.optimalRange.max,
            backgroundColor: 'rgba(46, 125, 50, 0.1)',
            borderWidth: 0
          },
          ...generateEventMarkers(moistureHistory)
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 8
        }
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    }
  }
};

function generateEventMarkers(history) {
  const markers = {};
  history.forEach((point, index) => {
    if (point.event) {
      markers[`event_${index}`] = {
        type: 'line',
        xMin: index,
        xMax: index,
        borderColor: point.event.type === 'irrigation' ? '#0277bd' : '#4caf50',
        borderWidth: 2,
        borderDash: [5, 5],
        label: {
          content: point.event.type === 'irrigation' ? '💧' : '🌧️',
          enabled: true,
          position: 'top'
        }
      };
    }
  });
  return markers;
}
```

### 3.2 Trend Analysis Algorithm

```javascript
function analyzeTrend(moistureHistory, soilData, etIndex) {
  const recentPoints = moistureHistory.slice(-12); // Last 12 hours
  const slopes = [];
  
  // Calculate slopes between consecutive points
  for (let i = 1; i < recentPoints.length; i++) {
    const slope = recentPoints[i].moisture - recentPoints[i-1].moisture;
    if (!recentPoints[i].event) { // Ignore irrigation spikes
      slopes.push(slope);
    }
  }
  
  const avgSlope = slopes.reduce((a, b) => a + b, 0) / slopes.length;
  const currentMoisture = recentPoints[recentPoints.length - 1].moisture;
  
  // Determine trend status
  if (currentMoisture < soilData.wiltingPoint) {
    return {
      status: 'Critical Dryness — Immediate Irrigation Required',
      color: '#d32f2f',
      icon: 'fa-triangle-exclamation'
    };
  }
  
  if (avgSlope < -2 && etIndex >= 7) {
    return {
      status: 'Rapid Decline (High ET Influence)',
      color: '#e65100',
      icon: 'fa-arrow-trend-down'
    };
  }
  
  if (avgSlope < -1) {
    return {
      status: 'Dropping Steadily',
      color: '#f57c00',
      icon: 'fa-arrow-down'
    };
  }
  
  if (Math.abs(avgSlope) < 0.5) {
    return {
      status: 'Stable Moisture Level',
      color: '#2e7d32',
      icon: 'fa-minus'
    };
  }
  
  if (avgSlope > 1) {
    return {
      status: 'Recovering After Irrigation',
      color: '#0277bd',
      icon: 'fa-arrow-up'
    };
  }
  
  return {
    status: 'Normal Variation',
    color: '#666',
    icon: 'fa-wave-square'
  };
}
```

---

## 4. UI/UX SPECIFICATIONS

### 4.1 HTML Structure

```html
<div class="moisture-trend-card">
  <div class="trend-header">
    <h3 class="trend-title">
      <i class="fa-solid fa-chart-line"></i>
      Moisture Trend History
    </h3>
    <div class="time-range-selector">
      <button class="range-btn active" data-hours="24">24h</button>
      <button class="range-btn" data-hours="48">48h</button>
      <button class="range-btn" data-hours="72">72h</button>
    </div>
  </div>
  
  <div class="chart-container">
    <canvas id="moistureTrendChart"></canvas>
  </div>
  
  <div class="trend-analysis">
    <div class="trend-status">
      <i class="fa-solid fa-arrow-trend-down" id="trendIcon"></i>
      <span id="trendText">Dropping Steadily</span>
    </div>
    <div class="trend-metrics">
      <div class="metric">
        <span class="metric-label">Avg Decline Rate:</span>
        <span class="metric-value" id="declineRate">1.2% / hour</span>
      </div>
      <div class="metric">
        <span class="metric-label">Next Watering:</span>
        <span class="metric-value" id="nextWatering">18 hours</span>
      </div>
    </div>
  </div>
  
  <div class="chart-legend">
    <div class="legend-item">
      <div class="legend-color" style="background: rgba(46, 125, 50, 0.2);"></div>
      <span>Optimal Zone (60-80%)</span>
    </div>
    <div class="legend-item">
      <span>💧 Irrigation Event</span>
    </div>
    <div class="legend-item">
      <span>🌧️ Rainfall Event</span>
    </div>
  </div>
</div>
```

### 4.2 CSS Styling

```css
.moisture-trend-card {
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: 30px;
}

.trend-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.trend-title {
  font-size: 18px;
  font-weight: 600;
  color: #1d5b34;
  margin: 0;
  font-family: 'Poppins', 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
}

.time-range-selector {
  display: flex;
  gap: 8px;
  background: #f5f5f5;
  padding: 4px;
  border-radius: 8px;
}

.range-btn {
  padding: 6px 16px;
  border: none;
  background: transparent;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', 'Inter', sans-serif;
}

.range-btn.active {
  background: #ffffff;
  color: #1d5b34;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.range-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.5);
}

.chart-container {
  height: 300px;
  margin-bottom: 20px;
  position: relative;
}

.trend-analysis {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  border-radius: 10px;
  margin-bottom: 15px;
}

.trend-status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #f57c00;
  font-family: 'Poppins', 'Inter', sans-serif;
}

.trend-status i {
  font-size: 18px;
}

.trend-metrics {
  display: flex;
  gap: 20px;
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.metric-label {
  font-size: 11px;
  color: #666;
  font-family: 'Poppins', 'Inter', sans-serif;
}

.metric-value {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  font-family: 'Poppins', 'Inter', sans-serif;
}

.chart-legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
  font-family: 'Poppins', 'Inter', sans-serif;
}

.legend-color {
  width: 20px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .trend-header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  
  .chart-container {
    height: 250px;
  }
  
  .trend-analysis {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  
  .trend-metrics {
    width: 100%;
    justify-content: space-between;
  }
}
```

---

## 5. INTEGRATION LOGIC

### 5.1 Component Initialization

```javascript
class MoistureTrendHistory {
  constructor(containerId, soilData, environmentalData, currentStatus) {
    this.container = document.getElementById(containerId);
    this.soilData = soilData;
    this.environmentalData = environmentalData;
    this.currentStatus = currentStatus;
    this.chart = null;
    this.currentRange = 48; // Default 48 hours
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.generateData();
    this.renderChart();
    this.updateAnalysis();
  }
  
  setupEventListeners() {
    const rangeBtns = this.container.querySelectorAll('.range-btn');
    rangeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        rangeBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.currentRange = parseInt(e.target.dataset.hours);
        this.refresh();
      });
    });
  }
  
  generateData() {
    this.moistureHistory = generateMoistureHistory(
      this.currentRange,
      this.soilData,
      this.environmentalData.etIndex,
      this.currentStatus.moisture
    );
  }
  
  renderChart() {
    const ctx = document.getElementById('moistureTrendChart').getContext('2d');
    
    if (this.chart) {
      this.chart.destroy();
    }
    
    this.chart = new Chart(ctx, this.getChartConfig());
  }
  
  updateAnalysis() {
    const trend = analyzeTrend(
      this.moistureHistory,
      this.soilData,
      this.environmentalData.etIndex
    );
    
    document.getElementById('trendIcon').className = `fa-solid ${trend.icon}`;
    document.getElementById('trendText').textContent = trend.status;
    document.getElementById('trendText').style.color = trend.color;
    
    // Calculate decline rate
    const recentPoints = this.moistureHistory.slice(-6);
    const totalChange = recentPoints[recentPoints.length-1].moisture - recentPoints[0].moisture;
    const avgDecline = Math.abs(totalChange / 6).toFixed(1);
    document.getElementById('declineRate').textContent = `${avgDecline}% / hour`;
    
    document.getElementById('nextWatering').textContent = `${this.currentStatus.nextWateringHours} hours`;
  }
  
  refresh() {
    this.generateData();
    this.renderChart();
    this.updateAnalysis();
  }
  
  getChartConfig() {
    // Returns the chartConfig object from section 3.1
    // (Implementation details omitted for brevity)
  }
}

// Initialize component
window.addEventListener('load', function() {
  const trendHistory = new MoistureTrendHistory(
    'moistureTrendCard',
    soilData,
    environmentalData,
    currentStatus
  );
});
```

### 5.2 Integration with Existing Dashboard

```javascript
// Update trend chart when real-time moisture changes
function onMoistureUpdate(newMoisture, newStatus) {
  currentStatus.moisture = newMoisture;
  currentStatus.status = newStatus.status;
  currentStatus.color = newStatus.color;
  
  // Refresh trend chart
  if (window.moistureTrendHistory) {
    window.moistureTrendHistory.refresh();
  }
}

// Link with watering prediction
function onWateringPredictionUpdate(hours) {
  currentStatus.nextWateringHours = hours;
  
  if (window.moistureTrendHistory) {
    document.getElementById('nextWatering').textContent = `${hours} hours`;
  }
}

// Link with ET Index changes
function onETIndexUpdate(newETIndex) {
  environmentalData.etIndex = newETIndex;
  environmentalData.etMmPerDay = etIndexToMmPerDay(newETIndex);
  
  if (window.moistureTrendHistory) {
    window.moistureTrendHistory.refresh();
  }
}
```

---

## 6. DEPENDENCIES

### 6.1 Required Libraries
- **Chart.js** v4.4.0 or higher
- **chartjs-plugin-annotation** v3.0.0 or higher
- **Font Awesome** 6.4.2 (already included)

### 6.2 CDN Links
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@3.0.0/dist/chartjs-plugin-annotation.min.js"></script>
```

---

## 7. TESTING REQUIREMENTS

### 7.1 Unit Tests
- Data generation produces valid time-series
- Trend analysis correctly identifies patterns
- Event markers appear at correct positions
- Color coding matches moisture status

### 7.2 Integration Tests
- Chart updates when moisture changes
- Time range selector switches data correctly
- Responsive design works on mobile
- All dashboard components remain synchronized

### 7.3 Edge Cases
- Handle missing data points gracefully
- Validate moisture values (0-100%)
- Handle rapid irrigation events
- Manage chart performance with large datasets

---

## 8. PERFORMANCE CONSIDERATIONS

### 8.1 Optimization Strategies
- Limit data points to 72 maximum (one per hour)
- Use Chart.js decimation for large datasets
- Debounce chart updates (max 1 update per second)
- Cache generated data for current time range

### 8.2 Memory Management
- Destroy chart instance before creating new one
- Clear event listeners on component unmount
- Limit history storage to current view range

---

## 9. ACCESSIBILITY

### 9.1 ARIA Labels
```html
<div class="chart-container" role="img" aria-label="Moisture trend chart showing soil moisture levels over the last 48 hours">
  <canvas id="moistureTrendChart"></canvas>
</div>
```

### 9.2 Keyboard Navigation
- Time range buttons accessible via Tab key
- Chart tooltips accessible via keyboard
- Screen reader announcements for trend changes

---

## 10. FUTURE ENHANCEMENTS

### 10.1 Phase 2 Features
- Export chart as PNG/PDF
- Compare multiple time periods
- Overlay weather data (temperature, humidity)
- Predictive moisture forecast line
- Custom time range picker
- Zoom and pan functionality

### 10.2 Advanced Analytics
- Machine learning trend prediction
- Anomaly detection
- Irrigation efficiency scoring
- Seasonal pattern analysis

---

## 11. IMPLEMENTATION CHECKLIST

- [ ] Install Chart.js and annotation plugin
- [ ] Create HTML structure for trend card
- [ ] Implement CSS styling
- [ ] Write data generation functions
- [ ] Configure Chart.js with optimal settings
- [ ] Implement trend analysis algorithm
- [ ] Add event markers for irrigation/rainfall
- [ ] Create time range selector functionality
- [ ] Integrate with existing dashboard components
- [ ] Add responsive design breakpoints
- [ ] Test on multiple devices
- [ ] Validate accessibility compliance
- [ ] Document API for future developers
- [ ] Create user guide/tooltips

---

## 12. MAINTENANCE NOTES

### 12.1 Known Limitations
- Historical data is simulated (not from actual sensors)
- Maximum 72-hour window to maintain performance
- Requires Chart.js library (adds ~200KB to page load)

### 12.2 Update Frequency
- Chart should refresh every 15-30 minutes
- Real-time updates only when user is actively viewing
- Background updates paused when tab is inactive

---

## END OF SPECIFICATION

**Document Status:** Ready for Implementation  
**Estimated Development Time:** 8-12 hours  
**Priority:** Medium (Enhancement to existing dashboard)  
**Dependencies:** Chart.js library integration required
