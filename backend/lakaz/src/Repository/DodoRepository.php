<?php

namespace App\Repository;

use App\Entity\Dodo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Dodo>
 *
 * @method Dodo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Dodo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Dodo[]    findAll()
 * @method Dodo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DodoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Dodo::class);
    }

//    /**
//     * @return Dodo[] Returns an array of Dodo objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Dodo
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
