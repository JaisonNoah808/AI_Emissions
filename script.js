// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initializeEmissionsChart();
    initializeComparisonChart();
    initializeWaterChart();
    
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// AI Model Emissions Chart
function initializeEmissionsChart() {
    const ctx = document.getElementById('emissionsChart').getContext('2d');
    
    const emissionsData = {
        labels: ['GPT-3', 'GPT-4', 'BERT', 'T5', 'PaLM', 'LLaMA'],
        datasets: [{
            label: 'CO2 Emissions (tons)',
            data: [552, 780, 1.2, 86, 1200, 630],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: emissionsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            layout: {
                padding: {
                    top: 20,
                    bottom: 20
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `CO2 Emissions: ${context.parsed.y} tons`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'CO2 Emissions (tons)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'AI Models'
                    }
                }
            }
        }
    });
}

// Comparison Chart
function initializeComparisonChart() {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    const rawData = [780, 4.6, 0.986, 0.85, 0.022];
    const logData = rawData.map(x => Math.log10(x + 1)); // log scale

    const comparisonData = {
        labels: ['GPT-4 Training', 'Car (1 year)', 'Flight (NYC-London)', 'Home (1 month)', 'Smartphone (1 year)'],
        datasets: [{
            label: 'CO2 Emissions (log scale)',
            data: logData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
        }]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: comparisonData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            // Show both log and original value
                            const original = rawData[context.dataIndex];
                            return `${context.label}: ${original} tons CO2`;
                        }
                    }
                }
            }
        }
    });
}

// Water Usage Chart
function initializeWaterChart() {
    const canvas = document.getElementById('waterChart');
    const ctx = canvas.getContext('2d');
    
    // Set fixed height to prevent growing
    canvas.style.height = '320px';
    canvas.style.maxHeight = '320px';
    
    const waterData = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024 (est)'],
        datasets: [{
            label: 'Data Center Water Usage (billion gallons)',
            data: [165, 180, 200, 230, 280, 320, 380],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }, {
            label: 'AI Training Water Usage (billion gallons)',
            data: [15, 25, 40, 65, 95, 140, 200],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: waterData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            layout: {
                padding: {
                    top: 20,
                    bottom: 20
                }
            },
            aspectRatio: 2,
            maxHeight: 320,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Water Usage (billion gallons)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add click handlers for interactive elements
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some statistics that update in real-time
function updateStats() {
    const stats = [
        { label: 'AI Models Trained Today', value: Math.floor(Math.random() * 50) + 10 },
        { label: 'CO2 Emitted (tons)', value: Math.floor(Math.random() * 1000) + 500 },
        { label: 'Water Used (gallons)', value: Math.floor(Math.random() * 1000000) + 500000 }
    ];
    
    // You could add a stats section to display these
    console.log('Real-time stats:', stats);
}

// Update stats every 30 seconds
setInterval(updateStats, 30000); 