const sectionArray = document.getElementsByClassName("section-array");
const reducedArray = document.getElementsByClassName("reduced-array");
const buttonReducer = document.getElementsByClassName("reducer");

// Section 1 Reduce Practice

const numbers = [117, 25, 76];

sectionArray[0].innerHTML = numbers.join(", ");

buttonReducer[0].addEventListener("click", () => {
    reducedArray[0].innerHTML = numbers.reduce((acc, value) => {
        return acc + value
    }, 0);
});

// Section 2 Reduce Practice

const fruits = [ 'Banana', 'Orange', 'Pineapple', 'Orange', 'Apple', 'Apple'];
 
sectionArray[1].innerHTML = fruits.join(", ");

buttonReducer[1].addEventListener("click", () => {
    const fruitsObj = fruits.reduce((acc, value) => {
        return {...acc, [value]: (acc[value] || 0) + 1 }
    }, {});

    reducedArray[1].innerHTML = JSON.stringify(fruitsObj);
});