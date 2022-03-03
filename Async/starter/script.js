'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function addCountry(data, neighbour) {
  const htmlText = `
  <article class="country ${neighbour ? 'neighbour' : null}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} Million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', htmlText);
  countriesContainer.style.opacity = 1;
}

function getXMLRequest(methodType, api) {
  const request = new XMLHttpRequest();
  request.open(methodType, api);
  request.send();
  return request;
}

///////////////////////////////////////

// // JS to JSON
// const jsonObject = JSON.stringify({
//   name: 'rahul',
//   address: 'test',
// });
// console.log(jsonObject);

// // sever send me data
// // JSON TO JS object
// const objInJavascript = JSON.parse(`{"name": "rahul","address": "test"}`);
// console.log(objInJavascript);

// function getCountry(country) {
//   const request = getXMLRequest(
//     'get',
//     `https://restcountries.com/v2/name/${country}`
//   );
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     addCountry(data, false);
//     const [neighbor] = data.borders;
//     const request = getXMLRequest(
//       'get',
//       `https://restcountries.com/v2/alpha/${neighbor}`
//     );
//     request.addEventListener('load', function () {
//       const data = JSON.parse(this.responseText);
//       addCountry(data, true);
//       const [neighbor] = data.borders;
//       const request = getXMLRequest(
//         'get',
//         `https://restcountries.com/v2/alpha/${neighbor}`
//       );
//       request.addEventListener('load', function () {
//         const data = JSON.parse(this.responseText);
//         addCountry(data, true);
//       });
//     });
//   });
// }

// getCountry('russia');
// getCountry('canada');

// promises

fetch('https://restcountries.com/v2/name/usa')
  .then(response => response.json())
  .then(([country]) => {
    addCountry(country, false);
    const [neighbor] = country.borders;
    return neighbor;
  })
  .then(neighbor => {
    return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
  })
  .then(response => response.json())
  .then(country => {
    addCountry(country, true);
  });
