const myName = document.getElementsByClassName('add-btn');
// console.log(myName);
let count =0
for (let i = 0; i < myName.length; i++) {
    const element = myName[i];
    // console.log(element.innerText);
    element.addEventListener('click',(e) => {
        count=count+1;
        console.log(count);

        changeInnerText("cart-count",count)
    });
}

function changeInnerText(id,value) {
    document.getElementById(id).innerText =value;
}