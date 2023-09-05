<?php

// src/Command/RegistrationCommand.php
namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Service\RegistrationService;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserRepository;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Console\Input\InputArgument;

// Le nom de la commande vient après "php bin/console"
#[AsCommand(
    name: 'app:deleteuser',
    description: 'Suppression d"un user dans la BDD',
    hidden: false,
    aliases: ['app:delete-user']
    )]
class DeleteUserCommand extends Command
{
    public function __construct(
        private RegistrationService $registrationService, // Récupération du service et modules pour gestion entité
        private EntityManagerInterface $entityManager,
        private UserRepository $user,
        private UserPasswordHasherInterface $userPasswordHasherInterface
    ){
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int // Execution de la fonction du service

    {
        $username = $input->getArgument('username');
        $password = $input->getArgument('password');

        // appel service
        $this->registrationService->deleteUser($username, $password,  $this->userPasswordHasherInterface, $this->user, $this->entityManager,);

        $output->writeln("L'utilisateur " . $username . " a été supprimé avec succès dans la BDD");


        return Command::SUCCESS;

    }

    protected function configure(): void
    {
        $this
            // --help pour avoir de l'aide
            ->setHelp('Cette commande permet de supprimer un user dans la BDD')
            ->addArgument('username', InputArgument::REQUIRED, 'The username of the user.')
            ->addArgument('password', InputArgument::REQUIRED, 'The password of the user.')
        ;
    }
}