import fetchQuote from '../utils/fetchQuote.js';

async function updateQuoteOfTheDay() {
  const data = await fetchQuote();
  
  if (data) {   
    document.getElementById('quote-text').textContent = data.quote || 'No quote available';
    document.getElementById('quote-author').textContent = data.author || 'Unknown';
  }
}

document.addEventListener('DOMContentLoaded', updateQuoteOfTheDay);