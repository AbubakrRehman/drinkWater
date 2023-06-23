let main__cup__fill = document.getElementById("main__cup__fill");
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
    main__cup__fill.style.height = `${percentage}%`;

}

function updateDOMMainCupClear() {
    let percentage = (currentActiveCup / cups.length) * 100;
    main__cup__fill.style.height = `${percentage}%`;
}