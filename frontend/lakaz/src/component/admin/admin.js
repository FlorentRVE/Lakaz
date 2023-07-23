import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [recipes, setRecipes] = useState([]);
  const [tokenValidated, setTokenValidated] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier le token JWT (à remplacer par l'appel à votre API de validation de token)
    const validateToken = async () => {
      const token = localStorage.getItem('jwtToken'); // Supposons que vous stockez le token JWT dans le localStorage après la connexion réussie

      try {
        // Envoyez la requête à votre API pour valider le token
        await axios.post('https://example.com/api/validate-token', { token });
        setTokenValidated(true); // Le token est valide, affichez la page d'administration
      } catch (error) {
        console.error(error);
        // Si le token est invalide, redirigez vers la page de connexion par exemple
        // Utilisez history.push('/login') si vous utilisez React Router
      }
    };

    validateToken();
  }, []);

  const fetchRecipes = async () => {
    try {
      // Envoyez une requête GET à votre API pour récupérer la liste des recettes
      const response = await axios.get('https://example.com/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (tokenValidated) {
      fetchRecipes();
    }
  }, [tokenValidated]);

  // Ici, vous pouvez définir les fonctions pour créer, modifier et supprimer des recettes
  // Utilisez axios.post, axios.put et axios.delete pour envoyer les requêtes appropriées à votre API
  // Assurez-vous d'appeler fetchRecipes après chaque opération pour mettre à jour la liste des recettes

  function Admin() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleIngredientsChange = (e) => {
      setIngredients(e.target.value);
    };
  
    const handleStepsChange = (e) => {
      setSteps(e.target.value);
    };
  
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('ingredients', ingredients);
      formData.append('steps', steps);
      formData.append('category', category);
      formData.append('image', image);
  
      try {
        // Envoyez la requête POST à votre API pour créer la recette
        await axios.post('https://example.com/api/recipes', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Réinitialisez les valeurs des champs après la soumission réussie
        setTitle('');
        setIngredients('');
        setSteps('');
        setCategory('');
        setImage(null);
  
        alert('La recette a été créée avec succès !');
      } catch (error) {
        console.error(error);
        alert('Erreur lors de la création de la recette.');
      }
    };
  
    return (
      <div>
        <h1>Page d'administration - Créer une recette</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Titre :</label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <label>Ingrédients :</label>
            <textarea value={ingredients} onChange={handleIngredientsChange} />
          </div>
          <div>
            <label>Étapes :</label>
            <textarea value={steps} onChange={handleStepsChange} />
          </div>
          <div>
            <label>Catégorie :</label>
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Sélectionnez une catégorie</option>
              <option value="entrée">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div>
            <label>Image :</label>
            <input type="file" onChange={handleImageChange} />
          </div>
          <button type="submit">Créer la recette</button>
        </form>
      </div>
    );
  }
}

export default Admin;
