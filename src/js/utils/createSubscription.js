import axios from 'axios';

async function createSubscription(email) {
  try {
    const response = await axios.post('/subscription', { email });
    return response.data;
  } catch (error) {
    console.error("Error creating subscription:", error);
    throw error;
  }
}

export default createSubscription;