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


    console.log(data);
}



main()