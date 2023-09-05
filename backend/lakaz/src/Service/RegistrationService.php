<?php

namespace App\Service;

use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;
use App\Repository\UserRepository;

class RegistrationService
{    
    public function __construct()
    {
    }

    public function registerUser($username, $password, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager)
    {
        // ... e.g. get the user data from a registration form
        $user = new User();
        $user->setUsername($username);
        $user->setRoles( ['ROLE_USER'] );
        $plaintextPassword = $password;

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
        
    }

    public function deleteUser($username, $password, UserPasswordHasherInterface $passwordHasher, UserRepository $userRepository, EntityManagerInterface $entityManager)
    {
        $user = $userRepository->findOneBy(['username' => $username]);

        if(!$user) {
            throw new \Exception('Mauvais identifiant');
        }

        if($passwordHasher->isPasswordValid($user, $password)) {

            $entityManager->remove($user);
            $entityManager->flush();
        } else {
            throw new \Exception('Mauvais mot de passe');
        }
        
    }

}
