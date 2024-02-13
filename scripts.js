document.getElementById('NextBtn').addEventListener('click', setQuote);
setQuote();

async function fetchQuotes() {
  try {
    const response = await fetch('quotes.json');
    const data = await response.json();
    return data.quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
}

async function getRandomQuote() {
  const quotes = await fetchQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  if (!quote.author || !quote.quote) {
    return getRandomQuote(); // Get the next quote if author or quote is empty
  }
  return quote;
}

function setQuote() {
  getRandomQuote().then(quote => {
    const quoteText = document.getElementById('quote');
    quoteText.textContent = quote.quote;
    const quoteAuthor = document.getElementById('author');
    quoteAuthor.textContent = `- ${quote.author}`;
  });
}

document.getElementById('ShareBtn').addEventListener('click', () => {
  const quote = document.getElementById('quote').textContent;
  const author = document.getElementById('author').textContent;
  const message = `${quote} ${author}`;
  const url = `https://twitter.com/intent/tweet?text=${message
    .split(' ')
    .join('%20')}`;
  window.open(url, '_blank');
});
