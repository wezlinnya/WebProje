const content = document.getElementById('quoteContent');
const author = document.getElementById('quoteAuthor');
const tag = document.getElementById('quoteTags');

// connect to an api and send a request, pull result then change the p tag's content.

axios.get('https://api.quotable.io/random')
    .then(response => {
        content.textContent = response.data.content;
        author.textContent = response.data.author;
        tag.textContent = response.data.tag;
    })
    .catch(error => {
        // Handle the error
        console.error(error);
    });

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/imdb/imdbSearchById?movieId=tt1375666");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey your_token");

xhr.send(data);
