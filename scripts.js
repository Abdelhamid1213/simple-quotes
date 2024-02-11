const generateBtn = document.getElementById('quoteBtn');
generateBtn.addEventListener('click', displayQuote);

async function displayQuote() {
  const quote = await randomQuote();
  document.querySelector("body > div > div > div:nth-child(4)").style.display = 'none';
  document.querySelector("body > div > div > h1").innerHTML = quote.content;
  document.querySelector("body > div > div > p").innerHTML = `- ${quote.author}`;
  const container = document.querySelector("body > div > div");
  container.style.backgroundColor = '#fff';
  container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  container.style.padding = '20px';
  container.style.borderRadius = '8px';
}


async function randomQuote() {
  const response = await fetch('http://api.quotable.io/random')
  const quote = await response.json()
  return quote
}



