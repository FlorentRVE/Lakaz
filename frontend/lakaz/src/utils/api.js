// ============================ API FETCH ========================

const API_BASE_URL = 'http://127.0.0.1:8000/api/recette/';

// Récupérer toutes les recettes
export const getData = async () => {
  return await fetch(API_BASE_URL).then((response) => response.json());
};

// Récupérer une recette en fonction du nom en paramètre
export const getRecipeByName = async (nom) => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    return data.filter(item => item.Nom === nom);
  } catch (error) {
    console.error(error);
  }
};

// Récupérer une recette en fonction de l'id
export const getRecipebyId = async (id) => {
  try {
    const response = await fetch(API_BASE_URL + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

