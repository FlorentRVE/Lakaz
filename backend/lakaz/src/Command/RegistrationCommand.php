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
    name: 'app:createuser',
    description: 'Creation d"un user dans la BDD',
    hidden: false,
    aliases: ['app:create-user']
    )]
class RegistrationCommand extends Command
{

    public function __construct(
        private RegistrationService $registrationService, // Récupération du service et modules pour gestion entité
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher,
        private UserRepository $user
    ){
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int // Execution de la fonction du service

    {
        $username = $input->getArgument('username');
        $password = $input->getArgument('password');

        // appel service
        $this->registrationService->registerUser($username, $password, $this->passwordHasher, $this->entityManager);

        $output->writeln("Nouveau utilisateur " . $username . " crée avec succès dans la BDD");


        return Command::SUCCESS;

    }

    protected function configure(): void
    {
        $this
            // --help pour avoir de l'aide
            ->setHelp('Cette commande permet de créer un user dans la BDD')
            ->addArgument('username', InputArgument::REQUIRED, 'The username of the user.')
            ->addArgument('password', InputArgument::REQUIRED, 'The password of the user.')
        ;
    }
}