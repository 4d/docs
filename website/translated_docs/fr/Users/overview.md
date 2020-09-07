---
id: overview
title: Aperçu
---

If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. Il peut être également essentiel de protéger des données importantes. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the application or to application operations.

> Consultez le document [4D Security guide](https://blog.4d.com/4d-security-guide/) pour une vue d'ensemble des fonctions de sécurité de 4D.





## Définition des accès aux groupes

Le système de gestion des accès de 4D est basé sur les notions d’utilisateurs et de groupes. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the application.

Groups can then be assigned access privileges to specific parts or features of the application (Design access, HTTP server, SQL server, etc.), or any custom part.

L'exemple suivant présente les droits d'accès à l'explorateur d'exécution et au Développement assignés au groupe "Devs" :

![](assets/en/Users/Access1.png)



## Activer le contrôle des accès

Le contrôle effectif des accès par mots de passe de 4D est activé par **l’affectation d’un mot de passe au Super_Utilisateur**.

Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have set up users and groups (when the application opens, no ID is required). Any part of the application can be opened.

Lorsqu’un mot de passe est affecté au Super_Utilisateur, tous les privilèges d’accès que vous avez affectés prennent effet. In order to connect to the application, remote users must enter a password.

Pour désactiver le système de restriction d’accès, il suffit de supprimer (mettre à blanc) le mot de passe du Super_Utilisateur.


## Utilisateurs et groupes dans l'architecture projet

In project applications (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective with 4D Server. Le tableau suivant liste les principales fonctionnalités des utilisateurs et groupes ainsi que leur disponibilité :

|                                                                                 | 4D (single-user)                                        | 4D Server |
| ------------------------------------------------------------------------------- | ------------------------------------------------------- | --------- |
| Ajouter/modifier des utilisateurs et groupes                                    | oui                                                     | oui       |
| Affecter l'accès des utilisateurs/groupes aux serveurs                          | oui                                                     | oui       |
| Identification de l'utilisateur                                                 | non (tous les utilisateurs sont des Super_Utilisateur)  | oui       |
| Contrôle d'accès une fois qu'un mot de passe a été affecté au Super_Utilisateur | non (tous les accès sont accordés au Super_Utilisateur) | oui       |





## Éditeur de boîte à outils

Les éditeurs des utilisateurs et groupes sont placés dans la boîte à outils de 4D. Ces éditeurs peuvent être utilisés pour la création d'utilisateurs et de groupes, l'affectation de mots de passe aux utilisateurs, le placement d'utilisateurs dans des groupes, etc.

![](assets/en/Users/editor.png)

> L'éditeur d'utilisateurs et de groupes peut s'afficher à l'exécution à l'aide de la commande [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html). L'éditeur d'utilisateurs et de groupes peut s'afficher à l'exécution à l'aide de la commande [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html).



## Fichier directory.json

Users, groups, as well as their access rights are stored in a specific project file named **directory.json**.

Ce fichier peut être stocké dans les emplacements suivants :

- in the user settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the application.
- dans le dossier de propriétés des données, c'est-à-dire dans le dossier "Settings" du dossier "Data". If a **directory.json** file is present at this location, it takes priority over the file in the user settings folder. Cette fonctionnalité vous permet de définir des configurations Utilisateurs et Groupes personnalisées/locales. The custom configuration will left untouched by an application upgrade.

> If users and groups management is not active, the **directory.json** is not created.

