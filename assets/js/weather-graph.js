// Sample

var csvData = `Time (by hour),Temp (F),Avg Wind Speed (mph)
0:00,43,12
1:00,42,14
2:00,41,10
3:00,41,15
4:00,41,20
5:00,42,10
6:00,44,10
7:00,45,8
8:00,47,5
9:00,48,8
10:00,49,9
11:00,50,10
12:00,50,8
13:00,50,20
14:00,50,14
15:00,50,12
16:00,50,15
17:00,48,25
18:00,46,18
19:00,43,15
20:00,42,25
21:00,41,20
22:00,41,25
23:00,41,30`;

var data = d3.csvParse(csvData);
makeChart(data);

function makeChart(data) {
    let labels = data.map(d => d['Time (by hour)']);
    labels = labels.map(d => {
        let [hour, minute] = d.split(':');
        if (d === '0:00') {
            return '12:00 AM';
        }
        let ampm = (hour >= 12) ? 'PM' : 'AM';
        hour = (hour > 12) ? hour - 12 : hour;
        return `${hour}:${minute} ${ampm}`;
    });
    let tempData = data.map(d => d['Temp (F)']);
    let windData = data.map(d => d['Avg Wind Speed (mph)']);

    var ctx = document.getElementById("chart").getContext('2d');
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (F)',
                data: tempData,
                borderColor: 'rgb(255, 99, 132)',
                fill: false
            }, {
                label: 'Avg Wind Speed (mph)',
                data: windData,
                borderColor: 'rgb(75, 192, 192)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Weather Data'
            },
            scales: {
                x: {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time (by hour)'
                    }
                },
                y: {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }
            }
        }
    });
}