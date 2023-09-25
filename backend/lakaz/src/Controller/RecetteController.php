<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\RecetteRepository;
use App\Entity\Recette;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class RecetteController extends AbstractController
{

    // Afficher toutes les recettes
    public function show(RecetteRepository $recetteRepository): Response
    {
        $recette = $recetteRepository->findAll();
        $data = [];

        // Récupération de l'URL de l'image 
        $cheminImage = 'http://127.0.0.1:8000/images/'; // URL du chemin fournissant Image
   
        foreach ($recette as $recette) {
           $data[] = [
                'id'=>$recette->getId(),
                'Categorie'=>$recette->getCategorie(),
                'Nom'=>$recette->getNom(),
                'Description'=>$recette->getDescription(),
                'Ingrédient'=>$recette->getIngredient(),
                'Etapes'=>$recette->getEtapes(),
                'Macros'=>$recette->getMacros(),
                'Image'=>$recette->getImage() == null ? $cheminImage . 'default.jpg' : $cheminImage . $recette->getImage()
           ];
        }


        return new JsonResponse($data);
    }
       
    // Afficher une recette selon id
    
    public function showById(int $id, RecetteRepository $recetteRepository): Response
    {
        $recette = $recetteRepository->find($id);

        if (!$recette) {
            throw $this->createNotFoundException('Recette inconnue');
    
        }

        // Récupération de l'URL de l'image 
        $cheminImage = 'http://127.0.0.1:8000/images/'; // URL du chemin fournissant Image
        $image = $recette->getImage(); // Nom de l'image dans la BDD
        if($image == null) {
            $image = 'default.jpg';
        }
        $imageUrl = $cheminImage . $image;

        $data =[
            'id'=>$recette->getId(),
            'Categorie'=>$recette->getCategorie(),
            'Nom'=>$recette->getNom(),
            'Description'=>$recette->getDescription(),
            'Ingredients'=>$recette->getIngredient(),
            'Etapes'=>$recette->getEtapes(),
            'Macros'=>$recette->getMacros(),
            'Image'=>$imageUrl
        ];

        return new JsonResponse($data);
    }

    // Afficher image
    public function showImage($filename)
    {
        // Construction du chemin absolu vers le fichier image dans le dossier public
        $filePath = $this->getParameter('kernel.project_dir') . '/public/images/' . $filename;

        // Vérification si le fichier image existe
        if (file_exists($filePath)) {
            // Créez une réponse HTTP pour renvoyer le fichier image
            $response = new Response();
            $response->headers->set('Content-Type', 'image/jpeg'); // Définissez le type de contenu approprié (peut varier selon le type d'image)
            $response->setContent(file_get_contents($filePath));

            return $response;
        } else {
            // Gérez le cas où le fichier image n'existe pas
            throw $this->createNotFoundException('Image not found');
        }
    }

    //==================================== CRUD =============================================

    // Creer une recette
    public function createRecette(Request $request, EntityManagerInterface $entityManager): Response
    {

        // Gestion de la requête
        $data = json_decode($request->getContent(), true);

        $recette = new Recette();
        $recette->setCategorie($data['categorie']); 
        $recette->setNom($data['nom']);
        $recette->setDescription($data['description']);
        $recette->setIngredient($data['ingredients']);
        $recette->setEtapes($data['etapes']);
        $recette->setMacros($data['macros']);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($recette);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        // return new Response('Saved new product with id '.$recette->getId());
        return new Response('La recette suivante a bien été crée: '. $data['nom'], 200);
    }    

    // Supprimer une recette
    public function deleteRecette(Request $request, RecetteRepository $recetteRepository, EntityManagerInterface $entityManager): Response
    {

        $data = json_decode($request->getContent(), true); // Récupération du contenu de la requête

        $recette = $recetteRepository->find($data['id']); // Récupération de la recette par l'id

        // Récupération de l'URL de l'image 
        $image = $recette->getImage(); // Nom de l'image dans la BDD

        if($image != null) {

            // Chemin complet de l'image
            $filePath = $this->getParameter('kernel.project_dir') . '/public/images/' . $image;
            
            unlink($filePath); // Suppression de l'image dans le dossier   
            
        }

        $entityManager->remove($recette);
        $entityManager->flush();

        
        

        return new Response('Recette supprimée', 200);
    }

    // Modifier une recette
    public function modifyRecette(Request $request, RecetteRepository $recetteRepository, EntityManagerInterface $entityManager): Response
    {
        // Gestion de la requête
        $data = json_decode($request->getContent(), true);

        $recette = $recetteRepository->find($data['id']);

        $recette->setCategorie($data['categorie']); 
        $recette->setNom($data['nom']);
        $recette->setDescription($data['description']);
        $recette->setIngredient($data['ingredients']);
        $recette->setEtapes($data['etapes']);
        $recette->setMacros($data['macros']);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($recette);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('La recette suivante a bien été modifié: '. $data['nom'], 200);
    } 

    // Modifier une image
    public function modifyImage(Request $request, RecetteRepository $recetteRepository, EntityManagerInterface $entityManager): Response
    {
        
        $id = $request->get('id'); // Récupération de l'id de la requête

        $recette = $recetteRepository->find($id); // Récupération de la recette dans la BDD

        //===================== Supression image existante ===================
        
        // Récupération de l'URL de l'image 
        $image = $recette->getImage(); // Nom de l'image dans la BDD
        
        if($image != null) {

            // Chemin complet de l'image
            $filePath = $this->getParameter('kernel.project_dir') . '/public/images/' . $image;
            
            unlink($filePath);       
            
        }        
        
        // ============== Gestion de l'image téléchargé  ==============================

        // Récupérez le fichier téléchargé du champ "image"
        $imageFile = $request->files->get('image');

        if ($imageFile instanceof UploadedFile) {
            // Spécifiez le répertoire de destination dans le dossier "public/images"
            $destinationDirectory = $this->getParameter('kernel.project_dir') . '/public/images';

            // Générez un nom de fichier unique
            $newFileName = uniqid() . '.' . $imageFile->getClientOriginalExtension();

            // Déplacez le fichier dans le répertoire de destination
            $imageFile->move($destinationDirectory, $newFileName);
        }

        // Maintenant, $newFileName contient le nom du fichier téléchargé
        // Vous pouvez le stocker en base de données ou effectuer d'autres opérations ici

        $recette->setImage($newFileName);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($recette);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response("L'image a bien été modifié: ", 200);
    }
}
