import axios from 'axios';

async function fetchQuote() {
  try {
    const response = await axios.get('/quote');
    return response.data;
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
}

export default fetchQuote;