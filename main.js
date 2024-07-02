window.addEventListener("load", countriesAPI);

const filter = document.querySelector(".filter")
const filterMenu = document.querySelector(".drop-down-menu")

// Dark Theme

// Elements
const darkThemeBtn = document.querySelector(".dark-theme")
const nav = document.querySelector(".nav")
const search = document.querySelector(".search")
const countryInfo = document.querySelectorAll(".country-info")
const card = document.querySelectorAll(".card")
const searchBar = document.querySelector(".search-bar")
const svg = document.querySelector(".svg")
const magnifyingGlass = document.querySelector(".magnifying-glass")
const downArrow = document.querySelector(".down-arrow")
const main = document.querySelector(".main")
const regionList = document.querySelector(".region-list")
const regionListItems = document.querySelectorAll(".region-list > li")
const filterSpan = document.querySelector(".filter-span")
const searchBtn = document.querySelector(".search-btn")

// Background

const body = document.body;

let darkModeSwitch = localStorage.getItem("darkMode");

filter.addEventListener('click', () => {
    filterMenu.classList.toggle("hidden");
})

let click = 1;

darkThemeBtn.addEventListener('click', () => {

    darkTheme();
})

let users = [];
let countryNames = [];
let counties = new Map();
// let countries = new Object();
let randomArray = [];

searchBar.addEventListener("input", (e) => {
    const value = e.target.value.toUpperCase();
    randomArray.forEach(country => {
        // const isVisible = counties.entries().next().value[0][0][1].includes(value);
        // counties.entries().next().value[0][0][0].classList.toggle("hidden", !isVisible);
        //const isVisible = ;
        if(!country.name.toUpperCase().includes(value)) {
            country.element.classList.add("hidden");
        } else if(country.name.toUpperCase().includes(value)) {
            country.element.classList.remove("hidden");
        }
    })
})

function darkTheme() {
    darkThemeBtn.classList.toggle("active")

    const countryInfo = document.querySelectorAll(".country-info")
    const card = document.querySelectorAll(".card")

    nav.classList.toggle("dark-elements")
    search.classList.toggle("dark-elements")
    searchBar.classList.toggle("search-dark")
    for(let i=0;i<countryInfo.length;i++) {
        countryInfo[i].classList.toggle("dark-elements")
        card[i].classList.toggle("dark-elements")
    }
    filter.classList.toggle("dark-elements")
    filterMenu.classList.toggle("dark-elements")

    body.classList.toggle("dark-bg")
    body.classList.toggle("dark-text")

    if(click === 1) {
        svg.innerHTML = `<svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFF" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
        click = 0;
    } else if(click === 0) {
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="moon-icon">
                    <path fill="#000" d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
                </svg>`;
        click = 1;
    }

    magnifyingGlass.classList.toggle("magnifying-glass-dark")
    downArrow.classList.toggle("down-arrow-dark")
}

function darkThemeLul() {

    const countryInfo = document.querySelectorAll(".country-info")
    const card = document.querySelectorAll(".card")

    nav.classList.toggle("dark-elements")
    search.classList.toggle("dark-elements")
    searchBar.classList.toggle("search-dark")
    for(let i=0;i<countryInfo.length;i++) {
        countryInfo[i].classList.toggle("dark-elements")
        card[i].classList.toggle("dark-elements")
    }
    filter.classList.toggle("dark-elements")
    filterMenu.classList.toggle("dark-elements")

    body.classList.toggle("dark-bg")
    body.classList.toggle("dark-text")

    if(click === 1) {
        svg.innerHTML = `<svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFF" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
        click = 0;
    } else if(click === 0) {
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="moon-icon">
                    <path fill="#000" d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
                </svg>`;
        click = 1;
    }

    magnifyingGlass.classList.toggle("magnifying-glass-dark")
    downArrow.classList.toggle("down-arrow-dark")
}

let cardName = "";
main.addEventListener('click', (e) => {
    if (e.target.closest(".card")) {
        const randomlul = e.target.closest(".card")
        cardName = randomlul.childNodes[3].childNodes[1].innerText;
        localStorage.setItem('cardName', cardName)
        if(darkThemeBtn.classList.contains("active")) {
            localStorage.setItem('darkMode', true)
        } else if(!darkThemeBtn.classList.contains("active")) {
            localStorage.setItem('darkMode', false)
        }
        location.href = "details.html";
    }
})
async function countriesAPI() {

    const main = document.querySelector(".main")

    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();


    let countryCard = "";
    let capital = "";

    for(let item of data) {
    if(!item.capital) {
        capital = `<p class="capital"><span class="bold-span">Capital:</span> </p>`;
    } else {
        capital = `<p class="capital"><span class="bold-span">Capital:</span> ${item.capital[0]}</p>`;
    }

    countryCard += `
        <div class="card flag">
            <div class="country-flag">
                <img src=${item.flags.png} alt="">
            </div>
            <div class="country-info">
                <h4 class="country-name">${item.name.common}</h4>
                <p class="population"><span class="bold-span">Population:</span> ${item.population.toLocaleString()}</p>
                <p class="region"><span class="bold-span">Region:</span> ${item.region}</p>
                ${capital}
            </div>
        </div>
    `;
    }

    main.innerHTML = countryCard;
    if(darkModeSwitch === "true") {
        darkThemeBtn.classList.add("active");
        darkThemeLul();
    } else if(darkModeSwitch === "false") {
        darkThemeBtn.classList.remove("active"); 
    }

    const cards = document.querySelectorAll(".card")
    for(let i=0;i<cards.length;i++) {
        users.push(cards[i]);
        countryNames.push(cards[i].childNodes[3].childNodes[1].innerText);
        counties.set([
            [cards[i], cards[i].childNodes[3].childNodes[1].innerText]
        ])
    }
    randomArray = users.map( function(x, i){
        return {"element": x, "name": countryNames[i]}        
    }.bind(this));
}

async function europeFilter() {

    const darkThemeBtn = document.querySelector(".dark-theme") 

    const main = document.querySelector(".main")

    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();


    let countryCard = "";
    let capital = "";
    if(!darkThemeBtn.classList.contains("active")) {
        for(let item of data) {
            if(item.region === regionName) {
                if(!item.capital) {
                    capital = `<p class="capital"><span class="bold-span">Capital:</span> </p>`;
                } else {
                    capital = `<p class="capital"><span class="bold-span">Capital:</span> ${item.capital[0]}</p>`;
                }
                countryCard += `
                    <div class="card flag">
                        <div class="country-flag">
                            <img src=${item.flags.png} alt="">
                        </div>
                        <div class="country-info">
                            <h4 class="country-name">${item.name.common}</h4>
                            <p class="population"><span class="bold-span">Population:</span> ${item.population}</p>
                            <p class="region"><span class="bold-span">Region:</span> ${item.region}</p>
                            ${capital}
                        </div>
                    </div>
                `;
            }
        }
    } else if(darkThemeBtn.classList.contains("active")) {
            for(let item of data) {
                if(item.region === regionName) {
                    if(!item.capital) {
                        capital = `<p class="capital"><span class="bold-span">Capital:</span> </p>`;
                    } else {
                        capital = `<p class="capital"><span class="bold-span">Capital:</span> ${item.capital[0]}</p>`;
                    }
                    countryCard += `
                        <div class="card flag dark-elements">
                            <div class="country-flag">
                                <img src=${item.flags.png} alt="">
                            </div>
                            <div class="country-info dark-elements">
                                <h4 class="country-name">${item.name.common}</h4>
                                <p class="population"><span class="bold-span">Population:</span> ${item.population}</p>
                                <p class="region"><span class="bold-span">Region:</span> ${item.region}</p>
                                ${capital}
                            </div>
                        </div>
                    `;
                }
            }
    }
    main.innerHTML = countryCard;

    const cards = document.querySelectorAll(".card")
    for(let i=0;i<cards.length;i++) {
        users.push(cards[i]);
        countryNames.push(cards[i].childNodes[3].childNodes[1].innerText);
        counties.set([
            [cards[i], cards[i].childNodes[3].childNodes[1].innerText]
        ])
    }
    randomArray = users.map( function(x, i){
        return {"element": x, "name": countryNames[i]}        
    }.bind(this));
}

let regionName = "";

const clickHandler = (ev) => {
    for (const item of regionListItems) {
        if (item === ev.target) {
            regionName = item.innerText;
            europeFilter();
            filterSpan.innerText = regionName;
        }
    }
}

regionList.addEventListener("click", clickHandler);

// async function searchCountry() {

//     const main = document.querySelector(".main")

//     const response = await fetch(`https://restcountries.com/v3.1/all`);
//     const data = await response.json();

//     console.log(data);

//     let countryCard = "";
//     let capital = "";

//     if(!darkThemeBtn.classList.contains("active")) {
//         for(let item of data) {
//             if((item.name.common).toUpperCase() === (searchInput).toUpperCase())   {
//                 if(!item.capital) {
//                     capital = `<p class="capital"><span class="bold-span">Capital:</span> </p>`;
//                 } else {
//                     capital = `<p class="capital"><span class="bold-span">Capital:</span> ${item.capital[0]}</p>`;
//                 }

//                 countryCard += `
//                     <div class="card flag">
//                         <div class="country-flag">
//                             <img src=${item.flags.png} alt="">
//                         </div>
//                         <div class="country-info">
//                             <h4 class="country-name">${item.name.common}</h4>
//                             <p class="population"><span class="bold-span">Population:</span> ${item.population}</p>
//                             <p class="region"><span class="bold-span">Region:</span> ${item.region}</p>
//                             ${capital}
//                         </div>
//                     </div>
//                 `;

//                 console.log(item)
//             }
//         }
//     } else if(darkThemeBtn.classList.contains("active")) {
//         for(let item of data) {
//             if((item.name.common).toUpperCase() === (searchInput).toUpperCase())   {
//                 if(!item.capital) {
//                     capital = `<p class="capital"><span class="bold-span">Capital:</span> </p>`;
//                 } else {
//                     capital = `<p class="capital"><span class="bold-span">Capital:</span> ${item.capital[0]}</p>`;
//                 }

//                 countryCard += `
//                     <div class="card flag dark-elements">
//                         <div class="country-flag">
//                             <img src=${item.flags.png} alt="">
//                         </div>
//                         <div class="country-info dark-elements">
//                             <h4 class="country-name">${item.name.common}</h4>
//                             <p class="population"><span class="bold-span">Population:</span> ${item.population}</p>
//                             <p class="region"><span class="bold-span">Region:</span> ${item.region}</p>
//                             ${capital}
//                         </div>
//                     </div>
//                 `;
//             }
//         }
//     }

//     main.innerHTML = countryCard;
// }

// let searchInput = "";

// searchBtn.addEventListener('click', () => {
//     searchInput = searchBar.value;
//     searchCountry();
// });