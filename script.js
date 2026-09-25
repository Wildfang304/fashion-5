const produktliste = document.querySelector("#produktliste");

if (produktliste) {
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
