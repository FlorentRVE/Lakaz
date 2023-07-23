<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;

class RegistrationController extends AbstractController
{
    public function registerUser(UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
    {
        // ... e.g. get the user data from a registration form
        $user = new User();
        $user->setUsername('admin');
        $user->setRoles( ['ROLE_ADMIN'] );
        $plaintextPassword = 'admin';

        // hash the password (based on the security.yaml config for the $user class)
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setPassword($hashedPassword);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($user);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();
        
        return new Response('Saved new product with id '.$user->getId());
    }

    public function deleteUser(UserRepository $userRepository, EntityManagerInterface $entityManager): Response
    {
        $user = $userRepository->find('1');
        $entityManager->remove($user);
        $entityManager->flush();
        

        return new Response('admin delete');
    }

}
