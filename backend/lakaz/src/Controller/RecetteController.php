<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Recette;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\RecetteRepository;

class RecetteController extends AbstractController
{

    // Creer une recette
    public function createRecette(EntityManagerInterface $entityManager): Response
    {
        $recette = new Recette();
        $recette->setCategorie('dessert');
        $recette->setNom('bonbon miel');
        $recette->setDescription('bonbon et miel');
        $recette->setIngredient('sucre et sucre');
        $recette->setEtapes('Faire ci et ça');

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($recette);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return new Response('Saved new product with id '.$recette->getId());
    }

    // Afficher toutes les recettes
    public function show(RecetteRepository $productRepository): Response
    {
        $product = $productRepository->findAll();

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
    public function showById(int $id, RecetteRepository $productRepository): Response
    {
        $product = $productRepository->find($id);

        $data =[
            'id'=>$product->getId(),
            'Categorie'=>$product->getCategorie(),
            'Nom'=>$product->getNom(),
            'Description'=>$product->getDescription(),
            'Ingrédient'=>$product->getIngredient(),
            'Etapes'=>$product->getEtapes()
        ];

        return new JsonResponse($data);
    }
}
