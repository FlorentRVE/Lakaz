<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\RecetteRepository;
use App\Entity\Recette;
use PhpParser\Node\Name;
use Symfony\Component\HttpFoundation\Request;

class RecetteController extends AbstractController
{

    // Afficher toutes les recettes
    public function show(RecetteRepository $productRepository): Response
    {
        $product = $productRepository->findAll();

        if (!$product) {
            throw $this->createNotFoundException('Recette inconnue');
    
            // the above is just a shortcut for:
            // throw new NotFoundHttpException('The product does not exist');
        }

        $data = [];
   
        foreach ($product as $product) {
           $data[] = [
                'id'=>$product->getId(),
                'Categorie'=>$product->getCategorie(),
                'Nom'=>$product->getNom(),
                'Description'=>$product->getDescription(),
                'Ingrédient'=>$product->getIngredient(),
                'Etapes'=>$product->getEtapes()
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
    
            // the above is just a shortcut for:
            // throw new NotFoundHttpException('The product does not exist');
        }

        $data =[
            'id'=>$recette->getId(),
            'Categorie'=>$recette->getCategorie(),
            'Nom'=>$recette->getNom(),
            'Description'=>$recette->getDescription(),
            'Ingredients'=>$recette->getIngredient(),
            'Etapes'=>$recette->getEtapes()
        ];

        return new JsonResponse($data);
    }

    //==================================== CRUD =============================================

    // Creer une recette
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer une recette')]
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
        $recette->setImage($data['image']);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($recette);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        // return new Response('Saved new product with id '.$recette->getId());
        return new Response('La recette suivante a bien été crée: '. $data['nom'], 200);
    }    

    // Supprimer une recette
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer une recette')]
    public function deleteRecette(Request $request, RecetteRepository $recetteRepository, EntityManagerInterface $entityManager): Response
    {

        $data = json_decode($request->getContent(), true);

        $recette = $recetteRepository->find($data['id']);

        $entityManager->remove($recette);
        $entityManager->flush();
        

        return new Response('Recette supprimée', 200);
    }

    // Modifier une recette
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier une recette')]
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
        $recette->setImage($data['image']);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($recette);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('La recette suivante a bien été modifié: '. $data['nom'], 200);
    } 
}
