import axios from 'axios';

async function fetchFilters({ filter, page = 1, limit = 12 }) {
  try {
    const params = {};

    if (filter) params.filter = filter;
    params.page = page;
    params.limit = limit;

    const response = await axios.get('/filters', { params });

    return response.data;
  } catch (error) {
    console.error("Error fetching filters:", error);
    throw error;
  }
}

export default fetchFilters;
