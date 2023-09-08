<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RecetteControllerTest extends WebTestCase
{
    public function testShowRecettes()
    {
        $client = static::createClient();
        $client->request('GET', 'http://127.0.0.1:8000/recette'); // Effectuer une requête à l'URL

        // Vérifier le statut de la réponse est égal à 200
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        
        // Vérifier le type de la réponse est égale à application/json
        $this->assertEquals('application/json', $client->getResponse()->headers->get('Content-Type')); 
        
        $responseData = json_decode($client->getResponse()->getContent(), true); // Récupérer le contenu de la réponse
        dump($responseData);
        
        // Vérifier que le contenu de la réponse est bien un tableau avec les données de la BDD Test
        $this->assertEquals( [
            0 => [
              "id" => 1,
              "Categorie" => "Entrée",
              "Nom" => "Couscous",
              "Description" => "Recette couscous",
              "Ingrédient" => [
                0 => "1kg de couscous",
                1 => "1kg de pois"
              ],
              "Etapes" => [
                0 => "Faire cuire le couscous",
                1 => "Faire cuire le pois"
              ],
              "Macros" => [
                0 => "1500Calories",
                1 => "1500Calories"
              ],
              "Image" => "http://127.0.0.1:8000/images/default.jpg"
            ]
          ], $responseData);
    }

}
