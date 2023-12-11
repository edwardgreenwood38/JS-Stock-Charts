

async function main() {
    //apikey  a0e2fca97e044c11acb86f89c5cf6b3c
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    // const response = fetch('https://api.twelvedata.com/time_series?symbol=BNTX,DIS,GME,MSFTX&interval=1day&apikey=a0e2fca97e044c11acb86f89c5cf6b3c');
    // let jsonData = response.json();
    // console.log(jsonData);
    //****************************** note: not getting expect joson formatted data back ******************************/

    
    //========  example code
    let result = mockData;
    let GME = result.GME
    let MSFT = result.MSFT
    let DIS = result.DIS
    let BNTX = result.BNTX

    const stocks = [GME, MSFT, DIS, BNTX];

    // Bonus Note: 
    // Another way to write the above lines would to refactor it as:
    // const {GME, MSFT, DIS, BTNX} = result 
    // This is an example of "destructuring" an object
    // "Destructuring" creates new variables from an object or an array

    console.log(GME)
}

main()