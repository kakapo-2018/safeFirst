import React from 'react'

const Statistics = (props) => (

    <div>
        <div className="block">
            <h1 className="title">Statistics</h1>
        </div>
        <div id="container" style="width:100%; height:400px;">
            <script src="https://code.highcharts.com/highcharts.js"></script>
            <script>
                $(function () { 
                    var myChart = Highcharts.chart('container', {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Fruit Consumption'
                        },
                        xAxis: {
                            categories: ['Apples', 'Bananas', 'Oranges']
                        },
                        yAxis: {
                            title: {
                            text: 'Fruit eaten'
                        }
                        },
                        series: [{
                            name: 'Jane',
                            data: [1, 0, 4]
                        }, {
                        name: 'John',
                            data: [5, 7, 3]
                        }]
                    });
                });
           </script>
        </div>
    </div>
)

export default Statistics