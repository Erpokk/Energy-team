import axios from 'axios';

async function fetchExerciseById(id) {
  try {
    const response = await axios.get(`/exercises/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exercise by ID:', error);
    throw error;
  }
}

export default fetchExerciseById;