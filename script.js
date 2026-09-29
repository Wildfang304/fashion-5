"use strict";
// lav en konstant. Vi henter vores HTML element med ID produktliste
const produktliste = document.querySelector("#produktliste");
const produkt = document.querySelector("#produktdetaljer");

// Opsætter en if-statement med vores konstant som argument
// INDEX SIDE
if (produktliste) {
  // metode fetch der henter vores API
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((produkt) => {
        produktliste.innerHTML += `
                    <article class="produkt">
                        <a href="produktdetaljer.html?id=${produkt.id}">

                            <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp">

                            <h2>${produkt.productdisplayname}</h2>

                            <p>${produkt.price} kr.</p>

                        </a>
                    </article>
                `;
      });
    });
}

if (produkt) {
  // konstant med en HTTP metode GET
  const id = new URLSearchParams(window.location.search).get("id");

  // Lav en if statement med id som argument
  if (id) {
    // henter vores data med vores id som filter 'id'
    // Se det som en mappestruktur
    fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        produkt.innerHTML = `
        <article class="produkt">
          <h1>${data.articletype}</h1>
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}">
          <h2>${data.productdisplayname}</h2>
          <p>${data.price} kr.</p>
        </article>`;
      });
  }
}

// fetch metoden henter json data. Data bliver sendt vider og dine HTML elementer bliver udfyldt.
