const btn = document.querySelector(".generate-meme");
const titleName = document.querySelector(".meme-title");
const img = document.querySelector(".meme-img");
const authorName = document.querySelector(".author");

function getMeme() {
  fetch(`https://meme-api.com/gimme/wholesomememes`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { author, title, url } = data;
      titleName.innerHTML = title;
      authorName.innerHTML = `Meme By: ${author}`;
      img.src = url;
    });
}

getMeme();

btn.addEventListener("click", () => {
  getMeme();
});
