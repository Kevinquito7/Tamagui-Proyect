import axios from 'axios';

export async function fetchFilms() {
  try {
    const response = await axios.get('http://10.0.3.75:8082/film');
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function fetchScenes(filmId) {
  try {
    const response = await axios.get(`http://10.0.3.75:8082/scene?film_id=${filmId}`);
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function fetchCharacters() {
  try {
    const response = await axios.get('http://10.0.3.75:8082/characters');
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function updateFilm(id, updatedData) {
  try {
    const response = await axios.put(`http://10.0.3.75:8082/film/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating film:', error);
    throw error;
  }
}

export async function deleteFilm(id) {
  try {
    const response = await axios.delete(`http://10.0.3.75:8082/film/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting film:', error);
    throw error;
  }
}
