<?php

namespace App\DataFixtures;

use App\Entity\Recette;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RecetteFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $recette = new Recette();
        $recette->setCategorie('Entrée'); 
        $recette->setNom('Couscous');
        $recette->setDescription('Recette couscous');
        $recette->setIngredient(['1kg de couscous', '1kg de pois']);
        $recette->setEtapes(['Faire cuire le couscous', 'Faire cuire le pois']);
        $recette->setMacros(['1500Calories', '1500Calories']);

        $manager->persist($recette);

        $manager->flush();
    }
}
