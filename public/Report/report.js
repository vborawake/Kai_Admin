const area = document.getElementById('area');
const areaCtx = area ? area.getContext('2d') : null;
const area2 = document.getElementById('area2');
const area2Ctx = area2 ? area2.getContext('2d') : null;
const doughnut = document.getElementById('doughnut');
const doughnutCtx = doughnut ? doughnut.getContext('2d') : null;
const line = document.getElementById('line');
const lineCtx = line ? line.getContext('2d') : null;
const bar = document.getElementById('bar');
const barCtx = bar ? bar.getContext('2d') : null;
const summary = document.getElementById('summary');
const popup = document.querySelector('.popup.flex_column');

function showDetails(e) {
    popup.style.display = 'flex';
    popup.style.top = `${ window.scrollY }px`;
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
    });
}

const placeText = {
    id: 'centerText',
    afterDatasetsDraw(chart, args, pluginOptions) {
        const {ctx} = chart;
        const text = 'Total 212';
        ctx.save();

        const x = chart.getDatasetMeta(0).data[0].x;
        const y = chart.getDatasetMeta(0).data[0].y;

        ctx.textAlign = 'center';

        ctx.font = 'bold 16px sans-serif';

        ctx.fillText(text, x, y);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (areaCtx) {
        new Chart(areaCtx, {
            type: 'line',
            data: {
                labels: ['4/05', '8/05', '12/05', '16/05', '20/05', '24/05', '28/05'],
                datasets: [
                    {
                        label: 'Male',
                        data: [40, 54, 58, 42, 56, 40, 56, 35, 42],
                        fill: true,
                        backgroundColor: '#19214F'
                    },
                    {
                        label: 'Female',
                        data: [50, 64, 68, 52, 66, 50, 66, 45, 52],
                        fill: true,
                        backgroundColor: '#00A962'
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            boxWidth: 10
                        }
                    }
                }
            }
        });
    }

    if (doughnutCtx) {
        doughnut.width = 300;
        doughnut.height = 300;
        new Chart(doughnutCtx, {
            type: 'pie',
            data: {
                labels: ['Athlete', 'Training', 'Clinic'],
                datasets: [{
                    data: [20, 37, 43],
                    backgroundColor: ['#19214F', '#F54A4A', '#00A962']
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 10
                        }
                    }
                }
            },
            plugins: [{
                afterInit (chart, args, options) {
                    console.log(chart.legend);
                    chart.legend.right = 100;
                }
            }]
        })
        // setSummary();
    }

    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['4/05', '8/05', '12/05', '16/05', '20/05', '24/05', '28/05'],
                datasets: [
                    {
                        label: 'Male',
                        data: [40, 54, 58, 42, 56, 40, 56, 35, 42],
                        borderColor: '#19214F',
                        cubicInterpolationMode: 'monotone'
                    },
                    {
                        label: 'Female',
                        data: [50, 64, 68, 52, 66, 50, 66, 45, 52],
                        borderColor: '#00A962',
                        cubicInterpolationMode: 'monotone'
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        suggestedMax: 100
                    }
                },
                plugins: [{
                    legend: {
                        labels: {
                            usePointStyle: true,
                            boxWidth: 10
                        }
                    }
                }, placeText]
            }
        });
    }

    if (barCtx) {
        const gradient = barCtx.createLinearGradient(bar.width / 2, 0, bar.width / 2, bar.height * 2);
        gradient.addColorStop(0, '#19214F');
        gradient.addColorStop(1, '#00A962');
        
        const data = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40, 81, 65, 80, 59, 40, 56, 55, 65, 59, 80, 81, 56, 55, 40, 81, 65, 80, 59, 40, 56, 55],
                backgroundColor: [
                gradient
                ],
                borderRadius: ['50'],
                borderWidth: 1,
                barThickness: 20
            }],
        };
    
        new Chart(barCtx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: '#FFF'
                            }
                        }
                    ]
                }
            }
        });
    }

    if (area2Ctx) {
        new Chart(area2Ctx, {
            type: 'line',
            data: {
                labels: ['4/05', '8/05', '12/05', '16/05', '20/05', '24/05', '28/05'],
                datasets: [
                    {
                        label: 'Male',
                        data: [40, 54, 58, 42, 56, 40, 56, 35, 42],
                        fill: true,
                        backgroundColor: '#DFE0E0',
                        borderColor: '#19214F'
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            boxWidth: 10
                        }
                    }
                }
            }
        });
    }
});

// function setSummary() {
//     summary.style.top = `${ doughnut.getBoundingClientRect().height / 2 + 10 }px`;
//     summary.style.left = `${ doughnut.getBoundingClientRect().width / 2 - doughnut.getBoundingClientRect().width * 0.165 }px`;
//     summary.style.textAlign = 'center';
// }

window.addEventListener('resize', () => {
    // setSummary();
});

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function showPopup(e) {
    e.stopPropagation();
    if (e.target.classList.contains('profile_img') || e.target.classList.contains('username')) {
        if (e.currentTarget.nextElementSibling.style.transform === 'scaleY(0)' || e.currentTarget.nextElementSibling.style.transform === '') e.currentTarget.nextElementSibling.style.transform = 'scaleY(1)';
        else e.currentTarget.nextElementSibling.style.transform = 'scaleY(0)';
    }
}