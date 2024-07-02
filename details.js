window.addEventListener("load", countryData);

// Dark Theme

// Elements
const darkThemeBtn = document.querySelector(".dark-theme")
const nav = document.querySelector(".nav")
const body = document.body;
const svg = document.querySelector(".svg")
const backBtn = document.querySelector(".back-btn")
const arrowLeft = document.querySelector(".arrow-left")
const borderList = document.querySelectorAll(".border-list > li")
const countryDetails = document.querySelector(".country-details")

let darkModeSwitch = localStorage.getItem("darkMode");


let click = 1;

let countryName = localStorage.getItem("cardName");

darkThemeBtn.addEventListener('click', () => {
    darkMode();
})

function darkMode() {
    darkThemeBtn.classList.toggle("active")

    nav.classList.toggle("dark-elements")
    const borderList = document.querySelectorAll(".border-list > li")

    if(click === 1) {
        svg.innerHTML = `<svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFF" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
        click = 0;
    } else if(click === 0) {
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="moon-icon">
                    <path fill="#000" d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
                </svg>`;
        click = 1;
    }

    body.classList.toggle("dark-bg")
    body.classList.toggle("dark-text")

    backBtn.classList.toggle("dark-elements")
    arrowLeft.classList.toggle("arrow-left-dark")

    for(let i=0;i<borderList.length;i++) {
        borderList[i].classList.toggle("dark-elements");
    }
}

function darkModeLul() {

    nav.classList.toggle("dark-elements")
    const borderList = document.querySelectorAll(".border-list > li")

    if(click === 1) {
        svg.innerHTML = `<svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFF" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
        click = 0;
    } else if(click === 0) {
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="moon-icon">
                    <path fill="#000" d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
                </svg>`;
        click = 1;
    }

    body.classList.toggle("dark-bg")
    body.classList.toggle("dark-text")

    backBtn.classList.toggle("dark-elements")
    arrowLeft.classList.toggle("arrow-left-dark")

    for(let i=0;i<borderList.length;i++) {
        borderList[i].classList.toggle("dark-elements");
    }
}

function darkModeBordersTrue() {

    const borderList = document.querySelectorAll(".border-list > li")

    for(let i=0;i<borderList.length;i++) {
        borderList[i].classList.add("dark-elements");
    }
}

function darkModeBordersFalse() {

    const borderList = document.querySelectorAll(".border-list > li")

    for(let i=0;i<borderList.length;i++) {
        borderList[i].classList.remove("dark-elements");
    }
}

backBtn.addEventListener('click', () => {
    if(darkThemeBtn.classList.contains("active")) {
        localStorage.setItem('darkMode', true)
    } else if(!darkThemeBtn.classList.contains("active")) {
        localStorage.setItem('darkMode', false)
    }
    location.href = "index.html";
})

async function countryData() {

    const countryDetails = document.querySelector(".country-details")

    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    //fetch('https://restcountries.com/v3.1/all').then(response => response.json()).then(countries => console.log(countries.map(c => { return {name: c.name.common, ...Object.values(c.name.nativeName || {})[0]}})));
    
    const countries = data.map(c => { return {name: c.name.common, ...Object.values(c.name.nativeName || {})[0]}});
    const currencies = data.map(c => { return {...Object.values(c.currencies || {})}});
    const languages = data.map(c => { return {...Object.values(c.languages || {})}});


    let countryCard = "";
    let capital = "";
    let borders = "";
    let currencyNames = "";
    let countryLangauges = "";
    //let commonName = "";
        for(let item of data) {
            if(item.name.common === countryName) {
                if(!item.capital) {
                    capital = `<p class="info  capital"><span class="bold-span">Capital:</span> Brussels</p>`;
                } else {
                    capital = `<p class="info  capital"><span class="bold-span">Capital:</span> ${item.capital[0]}</p>`;
                }
                if(!item.borders) {
                    borders = ``;
                } else {
                    for (let bord of item.borders) {
                    const responses = await fetch(`https://restcountries.com/v3.1/alpha/${bord}`);
                    const datas = await responses.json();  

                        for (let names of datas) {
                            borders += ` <li class="border-link"><a href="#">${names.name.common}</a></li>
                            `;
                        }
                    }
                }
                let i = data.indexOf(item);
                if(Object.keys(currencies[i]).length > 1) {
                    for(let currency in currencies[i]) {
                        if (currencies[i].hasOwnProperty(currency)) {
                            value = currencies[i][currency];
                            currencyNames += `${value.name}, `;
                        }
                    }
                } else if(Object.keys(currencies[i]).length < 2) {
                    currencyNames = currencies[i][0].name;
                }
                if(Object.keys(languages[i]).length > 1) {
                    for(let lang in languages[i]) {
                        if (languages[i].hasOwnProperty(lang)) {
                            value = languages[i][lang];
                            countryLangauges += `${value}, `;
                        }
                    }
                } else if(Object.keys(languages[i]).length < 2) {
                    countryLangauges = languages[i][0];
                }
                countryCard = `
                        <div class="country-flag-big">
                            <img src=${item.flags.png} alt="">
                        </div>
                        <div class="country-details-big">
                            <h2 class="country-name-big">${item.name.common}</h2>
                            <div class="country-info-big">
                                <div class="left-info">
                                    <p class="info  native-name"><span class="bold-span">Native name:</span> ${countries[i].common}</p>
                                    <p class="info  population"><span class="bold-span">Population:</span> ${item.population.toLocaleString()}</p>
                                    <p class="info  region"><span class="bold-span">Region:</span> ${item.region}</p>
                                    <p class="info  sub-region"><span class="bold-span">Sub Region:</span> ${item.subregion}</p>
                                    ${capital}
                                </div>
                                <div class="right-info">
                                    <p class="info top-level-domain"><span class="bold-span">Top Level Domain:</span> ${item.tld[0]}</p>
                                    <p class="info currencies"><span class="bold-span">Currencies:</span> ${currencyNames}</p>
                                    <p class="info languages"><span class="bold-span">Languages:</span> ${countryLangauges}</p>
                                </div>
                            </div>
                            <div class="border-countries">
                                <p class="border-counties-names">Border Countries:</p>
                                <ul class="border-list">
                                    ${borders}
                                </ul>
                            </div>
                        </div>
                    `;
            }
        }
    countryDetails.innerHTML = countryCard;
    if(darkModeSwitch === "true") {
        darkThemeBtn.classList.add("active");
        darkModeLul();
    } else if(darkModeSwitch === "false") {
        darkThemeBtn.classList.remove("active"); 
    }
}

async function searchCountry() {

    const countryDetails = document.querySelector(".country-details")

    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();

    const countries = data.map(c => { return {name: c.name.common, ...Object.values(c.name.nativeName || {})[0]}});
    const currencies = data.map(c => { return {...Object.values(c.currencies || {})}});
    const languages = data.map(c => { return {...Object.values(c.languages || {})}});


    let countryCard = "";
    let capital = "";
    let borders = "";
    let currencyNames = "";
    let countryLangauges = "";
        for(let item of data) {
            if(item.name.common === countryFullName) {
                if(!item.capital) {
                    capital = `<p class="info  capital"><span class="bold-span">Capital:</span> Brussels</p>`;
                } else {
                    capital = `<p class="info  capital"><span class="bold-span">Capital:</span> ${item.capital[0]}</p>`;
                }
                if(!item.borders) {
                    borders = ``;
                } else {
                    for (let bord of item.borders) {
                    const responses = await fetch(`https://restcountries.com/v3.1/alpha/${bord}`);
                    const datas = await responses.json();  

                        for (let names of datas) {
                            borders += ` <li class="border-link"><a href="#">${names.name.common}</a></li>
                            `;
                        }
                    }
                }
                let i = data.indexOf(item);
                if(Object.keys(currencies[i]).length > 1) {
                    for(let currency in currencies[i]) {
                        if (currencies[i].hasOwnProperty(currency)) {
                            value = currencies[i][currency];
                            currencyNames += `${value.name}, `;
                        }
                    }
                } else if(Object.keys(currencies[i]).length < 2) {
                    currencyNames = currencies[i][0].name;
                }
                if(Object.keys(languages[i]).length > 1) {
                    for(let lang in languages[i]) {
                        if (languages[i].hasOwnProperty(lang)) {
                            value = languages[i][lang];
                            countryLangauges += `${value}, `;
                        }
                    }
                } else if(Object.keys(languages[i]).length < 2) {
                    countryLangauges = languages[i][0];
                }
                countryCard = `
                        <div class="country-flag-big">
                            <img src=${item.flags.png} alt="">
                        </div>
                        <div class="country-details-big">
                            <h2 class="country-name-big">${item.name.common}</h2>
                            <div class="country-info-big">
                                <div class="left-info">
                                    <p class="info  native-name"><span class="bold-span">Native name:</span> ${countries[i].common}</p>
                                    <p class="info  population"><span class="bold-span">Population:</span> ${item.population.toLocaleString()}</p>
                                    <p class="info  region"><span class="bold-span">Region:</span> ${item.region}</p>
                                    <p class="info  sub-region"><span class="bold-span">Sub Region:</span> ${item.subregion}</p>
                                    ${capital}
                                </div>
                                <div class="right-info">
                                    <p class="info top-level-domain"><span class="bold-span">Top Level Domain:</span> ${item.tld[0]}</p>
                                    <p class="info currencies"><span class="bold-span">Currencies:</span> ${currencyNames}</p>
                                    <p class="info languages"><span class="bold-span">Languages:</span> ${countryLangauges}</p>
                                </div>
                            </div>
                            <div class="border-countries">
                                <p class="border-counties-names">Border Countries:</p>
                                <ul class="border-list">
                                    ${borders}
                                </ul>
                            </div>
                        </div>
                    `;
            }
        }
    countryDetails.innerHTML = countryCard;

    if(darkThemeBtn.classList.contains("active")) {
        darkModeBordersTrue();
    } else if(!darkThemeBtn.classList.contains("active")) {
        darkModeBordersFalse();
    }
}

let countryFullName = "";

countryDetails.addEventListener('click', (e) => {
    if(e.target.closest(".border-link")) {
        countryFullName = e.target.innerText;
        searchCountry();
    }
})