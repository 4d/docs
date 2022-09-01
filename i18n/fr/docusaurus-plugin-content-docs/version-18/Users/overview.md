---
id: overview
title: Vue d’ensemble
---

Si différentes personnes utilisent votre base de données, vous pouvez souhaiter contrôler ses accès ou proposer différentes fonctionnalités ou interfaces aux utilisateurs connectés. Il peut être également essentiel de protéger des données importantes. Vous pouvez fournir cette protection en affectant des mots de passe aux utilisateurs et en créant des groupes qui possèdent des niveaux d’accès correspondant à des degrés de confidentialité différents.

> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.

## Définition des accès aux groupes

Le système de gestion des accès de 4D est basé sur les notions d’utilisateurs et de groupes. Vous créez des noms d’utilisateurs et vous leur affectez un mot de passe, vous placez les utilisateurs dans des groupes, et vous assignez à chaque groupe les privilèges d’accès appropriés aux objets de la base.

Les groupes peuvent alors se voir affecter des privilèges d'accès à des parties spécifiques ou des fonctionnalités de la base (accès au mode Développement, serveur HTTP, serveur SQL, etc.), ou à toute partie personnalisée.

L'exemple suivant présente les droits d'accès à l'explorateur d'exécution et au Développement assignés au groupe "Devs" :

![](../assets/en/Users/Access1.png)

## Activer le contrôle des accès

Le contrôle effectif des accès par mots de passe de 4D est activé par **l’affectation d’un mot de passe au Super_Utilisateur**.

Tant que le Super_Utilisateur n’a pas de mot de passe, 4D permet à tout utilisateur d’accéder à toutes les parties de la base, même si vous avez défini des utilisateurs et des groupes (à l'ouverture de la base, aucune identification n'est requise).

Lorsqu’un mot de passe est affecté au Super_Utilisateur, tous les privilèges d’accès que vous avez affectés prennent effet. Pour pouvoir utiliser la base, les utilisateurs distants doivent alors saisir un mot de passe.

Pour désactiver le système de restriction d’accès, il suffit de supprimer (mettre à blanc) le mot de passe du Super_Utilisateur.

## Utilisateurs et groupes dans l'architecture projet

Dans les bases projet (fichiers .4DProject ou .4dz), les utilisateurs et groupes 4D peuvent être configurés à la fois en monoposte ou en client-serveur. Toutefois, le contrôle d'accès ne prend effet que dans les bases 4D Server. Le tableau suivant liste les principales fonctionnalités des utilisateurs et groupes ainsi que leur disponibilité :

|                                                                                 | 4D Developer (monoposte)                                | 4D Server |
| ------------------------------------------------------------------------------- | ------------------------------------------------------- | --------- |
| Ajouter/modifier des utilisateurs et groupes                                    | oui                                                     | oui       |
| Affecter l'accès des utilisateurs/groupes aux serveurs                          | oui                                                     | oui       |
| Identification de l'utilisateur                                                 | non (tous les utilisateurs sont des Super_Utilisateur)  | oui       |
| Contrôle d'accès une fois qu'un mot de passe a été affecté au Super_Utilisateur | non (tous les accès sont accordés au Super_Utilisateur) | oui       |

## Éditeur de boîte à outils

Les éditeurs des utilisateurs et groupes sont placés dans la boîte à outils de 4D. Ces éditeurs peuvent être utilisés pour la création d'utilisateurs et de groupes, l'affectation de mots de passe aux utilisateurs, le placement d'utilisateurs dans des groupes, etc.

![](../assets/en/Users/editor.png)

> L'éditeur d'utilisateurs et de groupes peut s'afficher à l'exécution à l'aide de la commande [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html).

## Fichier directory.json

Les utilisateurs, les groupes ainsi que leurs droits d'accès sont stockés dans un fichier spécifique de la base nommé **directory.json**.

Ce fichier peut être stocké dans les emplacements suivants :

- dans le dossier de propriétés de la base utilisateur, c'est-à-dire le dossier "Settings", au même niveau que le dossier "Project". Ces propriétés sont utilisées par défaut dans la base.
- dans le dossier de propriétés des données, c'est-à-dire dans le dossier "Settings" du dossier "Data". Si un fichier directory.json se trouve à cet emplacement, il est prioritaire par rapport au fichier du dossier Settings de la base utilisateur. Cette fonctionnalité vous permet de définir des configurations Utilisateurs et Groupes personnalisées/locales. La configuration personnalisée ne sera pas affectée par des mises à niveau de la base.

> Si la gestion des groupes et utilisateurs est inactive, le fichier directory.json n'est pas créé.
