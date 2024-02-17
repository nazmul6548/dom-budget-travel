const myName = document.getElementsByClassName("add-btn");
// console.log(myName);
let count = 0;
for (let i = 0; i < myName.length; i++) {
  const element = myName[i];
  // console.log(element.innerText);
  element.addEventListener("click", (e) => {
    count = count + 1;
    const placeName = e.target.parentNode.childNodes[1].innerText;
    // console.log(placeName);

    const priceName = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    // console.log(priceName);

    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    p1.innerText = placeName;
    const p2 = document.createElement("p");
    p2.innerText = priceName;

    li.appendChild(p1);
    li.appendChild(p2);

    const budget = document.getElementById("budget").innerText;
    const convertedBudget = parseInt(budget);
    if (convertedBudget-parseInt(priceName) < 0) {
        alert("low budget earn more")
        return;
        
    }
    document.getElementById("budget").innerText = convertedBudget - parseInt(priceName
    )
        
    
    selectedContainer.appendChild(li);

   
    // const grandTotal = document.getElementById("grand-total").innerText;
    // const convertedGrandTotalCost = parseInt(grandTotal);
    // const sum2 = convertedGrandTotalCost + parseInt(priceName);

    

    totalCost("total-cost", parseInt(priceName));
    grandTotal("others");
    changeInnerText("cart-count", priceName);
  });
}

function changeInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
function totalCost(id,value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedToTotalCost = parseInt(totalCost);

  const sum = convertedToTotalCost + parseInt(value);
  
  changeInnerText("total-cost", sum);
//   changeInnerText("grand-total", sum);
}

function grandTotal(c) {
    const totalCost =document.getElementById("total-cost").innerText;
    const convertedToTotalCost = parseInt(totalCost);
    if (c == "bus") {
        changeInnerText("grand-total", convertedToTotalCost+100);
    }else if (c == "train"){
        changeInnerText("grand-total", convertedToTotalCost)-200;
    }else if(c =="flight"){
        changeInnerText("grand-total", convertedToTotalCost)+500;
    }else{
        changeInnerText("grand-total", convertedToTotalCost);
    }
}