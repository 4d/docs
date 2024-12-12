---
id: users-to-blob
title: USERS TO BLOB
slug: /commands/users-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.USERS TO BLOB.Syntax-->**USERS TO BLOB** ( *utilisateurs* )<!-- END REF-->
<!--REF #_command_.USERS TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| utilisateurs | Blob | &#8594;  | BLOB devant contenir les utilisateurs |
| &#8592; | Comptes utilisateurs (crypté) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.USERS TO BLOB.Summary-->**Note de compatibilité :** Cette commande fonctionne uniquement dans les bases binaires.<!-- END REF--> Elle retourne toujours un BLOB vide dans les projets.

La commande **USERS TO BLOB** stocke dans le BLOB *utilisateurs* la liste de tous les comptes d’utilisateurs et les groupes de la base créés par l’Administrateur.

Seuls l’Administrateur et le Super\_Utilisateur de la base peuvent exécuter cette commande. Si un autre utilisateur tente de l’exécuter, la commande ne fait rien et une erreur de privilège (-9949) est générée.

Le BLOB généré est automatiquement encrypté et ne peut être lu que par la commande [BLOB TO USERS](blob-to-users.md). Vous pouvez stocker ce BLOB dans un fichier disque ou dans un champ.   
Cette commande équivaut à l’enregistrement des groupes et utilisateurs depuis la fenêtre de gestion des groupes de la Boîte à outils, à la différence près qu’elle permet de stocker les comptes utilisateurs dans un champ BLOB et non uniquement dans un fichier.

Ce principe permet de conserver une sauvegarde des utilisateurs parmi les données de la base, et ainsi de mettre en place un mécanisme de sauvegarde et de chargement automatiques des utilisateurs en cas de mise à jour de la structure de la base (en effet, les informations relatives aux comptes utilisateurs sont stockées par 4D dans le fichier de structure de la base).

#### Voir aussi 

[BLOB TO USERS](blob-to-users.md)  