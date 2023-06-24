let main__cup__fill = document.getElementById("main__cup__fill");
const main__cup__empty = document.getElementById("main__cup__empty");
let cupsContainer = document.getElementById("cups");
let cups = document.querySelectorAll(".cup");
let currentActiveCup = 0;

cupsContainer.addEventListener("click", (e) => {
    console.log("inside cups container");

    if (e.target.dataset.index) {
        currentActiveCup = parseInt(e.target.dataset.index);
        updateDOMCups();
        updateDOMMainCup();
    } else {
        currentActiveCup = 0;
        updateDOMCupsClear();
        updateDOMMainCupClear();
    }
})


function updateDOMCups() {
    console.log("inside cups container");
    for (let index = 0; index < cups.length; index++) {
        if (index < currentActiveCup) {
            cups[index].classList.add("active");
        } else {
            cups[index].classList.remove("active");
        }

    }
}


function updateDOMCupsClear() {
    for (let index = 0; index < cups.length; index++) {
        cups[index].classList.remove("active");
    }
}

function updateDOMMainCup() {
    let percentage = (currentActiveCup / cups.length) * 100;
    main__cup__empty.style.height = `${100 - percentage}%`;
    main__cup__empty.style.opacity = 1;

    main__cup__fill.style.height = `${percentage}%`;
    main__cup__fill.innerText = `${percentage}%`;
    main__cup__empty.innerText = `${(100 - percentage) / 100 * 2}L`;
    


}

function updateDOMMainCupClear() {
    main__cup__fill.style.height = '0%';
    main__cup__empty.style.height = '0%';
}