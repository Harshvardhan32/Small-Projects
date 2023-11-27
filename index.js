const countValue = document.querySelector('#counter');

// first way to solve this problem

// const decrement = () => {
//     // get the value from UI
//     let value = parseInt(countValue.innerText);
//     if (value == 0)
//         return;
//     // Update the value
//     value--;
//     // set the value onto UI
//     countValue.innerText = value;
// };

// const increment = () => {
//     // get the value from UI
//     let value = parseInt(countValue.innerText);
//     // Update the value
//     value++;
//     // set the value onto UI
//     countValue.innerText = value;
// };


// second way to solve this problem

const inc = document.querySelector('.inc-btn');

let incr = () => {
    let value = parseInt(countValue.innerText);
    value++;
    countValue.innerText = value;
};

inc.addEventListener('click', incr);

const dec = document.querySelector('.dec-btn');


let decr = () => {
    let value = parseInt(countValue.innerText);
    if (value == 0)
        return;
    value--;
    countValue.innerText = value;
};

dec.addEventListener('click', decr);

