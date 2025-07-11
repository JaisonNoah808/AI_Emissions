# 🌍 AI Emissions Dashboard

A modern, interactive web application that visualizes the environmental impact of artificial intelligence, including carbon emissions, water usage, and comparisons with everyday activities.

## 🚀 Features

### 📊 Interactive Data Visualizations
- **AI Model Emissions Chart**: Bar chart showing CO2 emissions from popular AI models (GPT-3, GPT-4, BERT, T5, PaLM, LLaMA)
- **Comparison Chart**: Doughnut chart comparing AI training emissions to daily activities
- **Water Usage Trends**: Line chart showing data center and AI training water consumption over time

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, scroll animations, and interactive elements
- **Beautiful Gradients**: Modern color schemes and visual appeal
- **TailwindCSS**: Clean, utility-first CSS framework

### 📚 Educational Content
- **Overview Section**: Explains the hidden costs of AI
- **Responsible AI Tips**: 6 practical tips for reducing AI carbon footprint
- **Real-time Statistics**: Simulated live data updates

## 🛠️ Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with TailwindCSS
- **JavaScript (ES6+)**: Interactive functionality
- **Chart.js**: Beautiful, responsive charts
- **Google Fonts**: Inter font family for clean typography

## 📁 Project Structure

```
ai-emissions-dashboard/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality and charts
└── README.md          # Project documentation
```

## 🚀 How to Run

### Option 1: Direct Browser Opening
1. Simply double-click on `index.html` to open it in your default web browser
2. The application will load immediately with all features working

### Option 2: Local Server (Recommended)
1. **Using Python** (if you have Python installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js** (if you have Node.js installed):
   ```bash
   npx serve .
   ```

3. **Using Live Server** (VS Code extension):
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

Then open your browser and navigate to `http://localhost:8000`

## 📊 Data Sources

The dashboard uses realistic estimates based on research papers and industry reports:

- **AI Model Emissions**: Based on studies from Stanford, MIT, and other research institutions
- **Water Usage**: Data from Google, Microsoft, and other tech companies' sustainability reports
- **Comparisons**: EPA and other environmental agencies' data

## 🎯 Key Features Explained

### 1. Emissions Visualization
- Shows the carbon footprint of training different AI models
- Compares AI emissions to everyday activities like driving a car or flying
- Helps users understand the scale of AI's environmental impact

### 2. Water Usage Tracking
- Displays trends in data center water consumption
- Separates general data center usage from AI-specific training
- Shows the growing water footprint of AI development

### 3. Responsible AI Tips
- **Choose Efficient Models**: Use smaller models when possible
- **Green Computing**: Select renewable energy providers
- **Batch Processing**: Reduce API call overhead
- **Monitor Usage**: Track and limit AI usage
- **Reuse Results**: Cache responses to avoid regeneration
- **Support Green AI**: Advocate for sustainable AI development

## 🔧 Customization

### Adding New Data
To add new AI models or update emissions data, edit the `script.js` file:

```javascript
// In initializeEmissionsChart()
const emissionsData = {
    labels: ['GPT-3', 'GPT-4', 'BERT', 'T5', 'PaLM', 'LLaMA', 'Your New Model'],
    datasets: [{
        data: [552, 780, 1.2, 86, 1200, 630, 450], // Add your data here
        // ... rest of configuration
    }]
};
```

### Changing Colors
Modify the color schemes in the chart configurations:

```javascript
backgroundColor: [
    'rgba(255, 99, 132, 0.8)',  // Red
    'rgba(54, 162, 235, 0.8)',   // Blue
    // Add your custom colors
]
```

## 🌟 Future Enhancements

- [ ] Real-time API integration for live emissions data
- [ ] User input for personal AI usage tracking
- [ ] Carbon offset calculator
- [ ] Interactive model comparison tool
- [ ] Mobile app version
- [ ] Multi-language support

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new data sources
- Improving visualizations
- Enhancing the UI/UX
- Adding new features

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

For questions or suggestions about this AI emissions dashboard, feel free to reach out!

---

**Note**: This dashboard is designed for educational purposes to raise awareness about AI's environmental impact. The data presented is based on research estimates and should be used for informational purposes only. 