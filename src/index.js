const Box = document.getElementById("box");
const UpcomingBox = document.getElementById("upcomingBox");
const NavBurger = document.getElementById("navBurger");
const Burger = document.getElementById("burger")

let array = [];
let upcomingArray = [];

Burger.addEventListener('click',() => {
  NavBurger.classList.toggle("add_navBurger");
})








array.push(
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  }
);

upcomingArray.push(
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  },
  {
    text: "Ethermon",
    minAllocation: "0",
    maxAllocation: "TBH",
    Account: "pols",
    Rate: "5000",
  }
);

FormatHandler = (i) => {
  var layout = `
  <div class="container__feature__fluid__projects">
  <div class="container__feature__fluid__projects__filed">
                            <div class="container__feature__fluid__projects__filed__icon"><span>in 2 days</span></div>
                            <div class="container__feature__fluid__projects__filed__heading">
                                <h1>${array[i].text}</h1>
                                <p class="container__feature__fluid__projects__filed__para">Total rate <span>$${array[i].Rate}</span></p>
                                <table class="container__feature__fluid__projects__filed__table">
                                    <tr>
                                        <td>min. allocation</td>
                                        <td>max. allocation</td>
                                        <td>Account</td>
                                    </tr>
                                  <tbody>
                                      <th>${array[i].minAllocation}</th>
                                      <th>${array[i].maxAllocation}</th>
                                      <th>${array[i].Account}</th>
                                  </tbody>
                                </table>                            
                            </div>
                        </div> 
  </div>
    
    `;
  Box.insertAdjacentHTML("afterbegin", layout);
};

upcomingHandler = (i) => {
  var layout = `
  <div class="container__upcoming__fluid__projects">
  <div class="container__upcoming__fluid__projects__filed">
                            <div class="container__upcoming__fluid__projects__filed__icon"><span>in 2 days</span></div>
                            <div class="container__upcoming__fluid__projects__filed__heading">
                                <h1>${upcomingArray[i].text}</h1>
                                <p class="container__upcoming__fluid__projects__filed__para">Total rate <span>$${upcomingArray[i].Rate}</span></p>
                                <table class="container__upcoming__fluid__projects__filed__table">
                                    <tr>
                                        <td>min. allocation</td>
                                        <td>max. allocation</td>
                                        <td>Account</td>
                                    </tr>
                                  <tbody>
                                      <th>${upcomingArray[i].minAllocation}</th>
                                      <th>${upcomingArray[i].maxAllocation}</th>
                                      <th>${upcomingArray[i].Account}</th>
                                  </tbody>
                                </table>                            
                            </div>
                        </div> 
  </div>
    
    `;

  UpcomingBox.insertAdjacentHTML("afterbegin", layout);
};

layoutHandler = () => {
  for (let i = 0; i < array.length; i++) {
    FormatHandler(i);
  }
};

layoutHandler();

upcomingBoxHandler = () => {
  for (let i = 0; i < upcomingArray.length; i++) {
    upcomingHandler(i);
  }
};

upcomingBoxHandler();
