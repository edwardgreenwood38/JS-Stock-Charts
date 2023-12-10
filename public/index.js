

async function main() {
    const apiKey = "a0e2fca97e044c11acb86f89c5cf6b3c";

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch("https://api.twelvedata.com/time_series?symbol=AAPL,DIS,MSFT,BNTX&interval=1day&apikey=a0e2fca97e044c11acb86f89c5cf6b3c");
    //   &interval=2min
    //const data = mockData;
    //const textString = response.text()
    //const data = response.json()
    //console.log(data.GME.values)

    //console.log(response);
    //console.log(`Own property names: ${Object.getOwnPropertyNames(response.json())}`);
    //console.log(response.json())
    const jsonData = await response.json()
    //console.log(jsonData.AAPL.meta.symbol)
    console.log(jsonData)

    const { AAPL, MSFT, DIS, BNTX } = jsonData;

    const stocks = [AAPL, MSFT, DIS, BNTX];


    //let symbols = [];
    // let values = [];
    // let dates = [];
    // let stockValue = [];
    // let lineColor;
   
    //let chartLine = new Chart(timeChartCanvas);
    

    // for (const [key, value] of Object.entries(jsonData)) {
    //     //console.log(`${key}: ${value}`);
    //     symbols.push(key);
    //     //values.push(value.values)
    //     //let symbol = key;
        

    //     // for (let i = 0; i < symbols.length; i++) {
    //     //     let str = 'jsonData.' + symbol + '.meta.symbol';
    //     //     //console.log(str)
    //     // }
    // }


    // let valueLength = jsonData.AAPL.values.length;
    // for (let i = 0; i < valueLength; i++) {
    //     dates.push(jsonData.AAPL.values[i].datetime);
    //     values.push(jsonData.AAPL.values[i].high);
    // }
    
    //console.log(values);

    //lineColor = 'rgb(0,0,255)'
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(v => v.datetime),
            datasets: stocks.map( s => ({
                label: s.meta.symbol,
                data: s.values.map(v => parseFloat(v.high)),
                backgroundColor: getColor(s.meta.symbol),
                borderColor: getColor(s.meta.symbol) 
                }),
            )
        }
    })       



    // for (let i = 0; i < symbols.length; i++) {
    //     //console.log(typeof values)
    //     dates = [];
    //     stockValue= [];

    //     for (const [key1, value1] of Object.entries(values[i])) {
    //         //console.log(`${key1}: ${value1.datetime}`)
    //         if (!dates.find(dt => dt === value1.datetime)) {
    //             dates.push(value1.datetime);
    //         }
            
    //     }

    //     for (const [key2, value2] of Object.entries(values[i])) {
    //         stockValue.push(value2.high);
    //     }
        
    //     switch(i) {
    //         case 0:
    //             lineColor = 'rgb(0,0,255)';
    //             break;
    //         case 1:
    //             lineColor = 'rgb(255,0,0)';
    //             break;
    //         case 2:
    //             lineColor = 'rgb(0,255,0)';
    //             break;
    //         case 3:
    //             lineColor = 'rgb(200,200,200)';
    //             break;
    //     }
        

    //     chartData.push([symbols[i], dates, stockValue, lineColor])
        
    // }

    

    //console.log(stockValue)

    //console.log(data);
}

function getColor(stock){
    if(stock === "AAPL"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}


// const timeChartCanvas = document.querySelector('#time-chart');





main()