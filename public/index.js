let chartData = [];

async function main() {
    const apiKey = "a0e2fca97e044c11acb86f89c5cf6b3c";

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    //const response = await fetch("https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&apikey=a0e2fca97e044c11acb86f89c5cf6b3c");
    //   &interval=2min
    const data = mockData;
    //const textString = response.text()
    //const data = response.json()
    //console.log(data.GME.values)
    //console.log(data)
    let symbols = [];
    let values = [];
    let dates = [];
    let stockValue = [];
    let lineColor;
   
    //let chartLine = new Chart(timeChartCanvas);
    

    for (const [key, value] of Object.entries(data)) {
        //console.log(`${key}: ${value}`);
        symbols.push(key);
        values.push(value.values)
    }

    for (let i = 0; i < symbols.length; i++) {
        //console.log(typeof values)
        dates = [];
        stockValue= [];

        for (const [key1, value1] of Object.entries(values[i])) {
            //console.log(`${key1}: ${value1.datetime}`)
            if (!dates.find(dt => dt === value1.datetime)) {
                dates.push(value1.datetime);
            }
            
        }

        for (const [key2, value2] of Object.entries(values[i])) {
            stockValue.push(value2.high);
        }
        
        switch(i) {
            case 0:
                lineColor = 'rgb(0,0,255)';
                break;
            case 1:
                lineColor = 'rgb(255,0,0)';
                break;
            case 2:
                lineColor = 'rgb(0,255,0)';
                break;
            case 3:
                lineColor = 'rgb(200,200,200)';
                break;
        }
        

        chartData.push([symbols[i], dates, stockValue, lineColor])
        
    }

    

    //console.log(stockValue)

    //console.log(data);
}


const timeChartCanvas = document.querySelector('#time-chart');

new Chart(timeChartCanvas, {
    type: 'line',
    data: {
        labels: chartData[0].dates,
        datasets: [{
            label: chartData[0].symbols[i],
            data: chartData[0].stockValue,
            borderWidth: 1,
            backgroundColor: chartData[0].lineColor
        }]
    },
    data: {
        labels: chartData[1].dates,
        datasets: [{
            label: chartData[1].symbols[i],
            data: chartData[1].stockValue,
            borderWidth: 1,
            backgroundColor: chartData[1].lineColor
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

main()