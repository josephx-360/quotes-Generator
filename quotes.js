let generatedTxt = document.getElementById("quoteGenerated");
let generateBtn = document.getElementById("generateQuote");



async function getQuotes() {
    await fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => generatedTxt.innerHTML = `${data.content} <br> <br> - ${data.author}`)
        .catch(error => console.error(error));
}

setInterval(getQuotes, 3000);