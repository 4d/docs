---
id: editing
title: Gestion des groupes et utilisateurs 4D
---

Dans les applications multi-utilisateurs, 4D fournit aux utilisateurs certains privilèges d'accès standard et certains pouvoirs. Une fois qu’un système d’utilisateurs et de groupes a été créé, ces privilèges standard prennent effet.

## Utilisateurs et groupes dans les projets

Dans les applications projet (fichiers .4DProject ou .4dz), les utilisateurs et groupes 4D peuvent être configurés à la fois en monoposte ou en multi-utilisateurs. Toutefois, **le contrôle des accès** est effectif uniquement avec 4D Server. Le tableau suivant liste les principales fonctionnalités des utilisateurs et groupes ainsi que leur disponibilité :

|                                                                                                      | 4D (monoposte)                                                               | 4D Server |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------- |
| Ajouter/modifier des utilisateurs et groupes                                                         | oui                                                                                             | oui       |
| Affecter l'accès des utilisateurs/groupes aux serveurs                                               | oui                                                                                             | oui       |
| Identification de l'utilisateur                                                                      | non (tous les utilisateurs sont des Super_Utilisateur)  | oui       |
| Contrôle d'accès une fois qu'un mot de passe a été affecté au Super_Utilisateur | non (tous les accès sont accordés au Super_Utilisateur) | oui       |

> Pour obtenir des informations sur l'identification des utilisateurs et le contrôle des accès pour les déploiements monoposte, reportez-vous à [ce paragraphe](overview.md#access-control-in-single-user-applications).

## Super_Utilisateur et Administrateur

L’utilisateur le plus puissant est le **Super_Utilisateur**. Aucune partie de l'application n’est inaccessible au Super_Utilisateur.
Le Super_Utilisateur peut :

- accéder à tous les serveurs de l'application sans restrictions,
- créer des utilisateurs et des groupes,
- affecter des privilèges d’accès aux groupes,
- utiliser le mode Développement.
  En monoposte, les droits d'accès du Super_Utilisateur sont toujours utilisés.
  En mode client/serveur, l'affectation d'un mot de passe au Super_Utilisateur affiche la boîte de dialogue de connexion.  L'accès au mode Développement est en lecture seule.

Après le Super_Utilisateur, le second plus puissant utilisateur est **l’Administrateur**, qui est en général responsable de la gestion du système d’accès et des fonctionnalités d'administration.

L'Administrateur peut :

- créer des utilisateurs et des groupes,
- accéder au moniteur et à la fenêtre d'administration de 4D Server
- accéder à la fenêtre CSM pour gérer les sauvegardes, restitutions ou le serveur.

L'Administrateur ne peut pas :

- modifier l'utilisateur Super_Utilisateur
- par défaut, accéder à des objets protégés de l'application. En particulier, l'Administrateur ne peut pas accéder au mode Développement s'il est restreint. En particulier, l'Administrateur ne peut pas accéder au mode Développement s'il est restreint. Il est placé dans tous les nouveaux groupes, mais vous pouvez cependant l'exclure de ces groupes.

Par défaut, le Super_Utilisateur et l'Administrateur se trouvent dans toutes les applications. Dans la [boîte de dialogue de gestion des utilisateurs](#users-and-groups-editor), les icônes du Super_Utilisateur et de l’Administrateur ont des icônes respectivement rouge et verte :

- Icône Super_Utilisateur : ![](../assets/en/Users/iconDesigner.png)
- Icône Administrateur : ![](../assets/en/Users/iconAdmin.png)

Vous pouvez renommer les utilisateurs Super_Utilisateur et Administrateur. Dans le langage, Super_Utilisateur porte toujours l'identifiant 1 et l'Administrateur l'identifiant 2.

Le Super_Utilisateur et l’Administrateur peuvent créer chacun 16 000 groupes et 16 000 utilisateurs.

## Éditeur d'utilisateurs

L'éditeur des utilisateurs se trouve dans la boîte à outils de 4D.

![](../assets/en/Users/editor.png)

> L'éditeur des utilisateurs et des groupes peut être affiché au moment de l'exécution à l'aide de la commande [EDIT ACCESS](https://doc.4d.com/4dv19R/help/command/en/page281.html).
> Toute la configuration des utilisateurs et des groupes peut également être modifiée pendant l'exécution de l'application à l'aide des commandes du langage 4D du thème `Utilisateurs et groupes`.

### Ajouter et modifier des utilisateurs

Vous utilisez l’éditeur d’utilisateurs pour créer des comptes utilisateurs, définir leurs propriétés et leur appartenance aux différents groupes.

Pour ajouter un utilisateur depuis la boite à outils :

1. Sélectionnez **Boîte à outils > Utilisateurs** dans le menu **Développement** ou cliquez sur le bouton **Boîte outils** de la barre d’outils de 4D.
   4D affiche la fenêtre d’édition des utilisateurs.

La liste des utilisateurs affiche tous les utilisateurs, y compris [le Super_Utilisateur et l'l’Administrateur](#designer-and-administrator).

2. Cliquez sur le bouton ![](../assets/en/Users/PlussNew.png) situé au-dessous de la liste des utilisateurs.
   OU
   Cliquez avec le bouton droit de la souris dans la Liste des utilisateurs et choisissez la commande **Ajouter** ou **Dupliquer** dans le menu contextuel.

> La commande **Dupliquer** permet de créer rapidement plusieurs utilisateurs ayant des caractéristiques communes.

4D ajoute un nouvel utilisateur à la liste, nommé par défaut "Nouvel utilisateurN".

3. Saisissez le nom du nouvel utilisateur.
   Saisissez le nom du nouvel utilisateur. Vous pouvez renommer un utilisateur à tout moment en utilisant la commande **Renommer** du menu contextuel, ou en utilisant la combinaison Alt+clic (Windows) ou Option+clic (macOS) ou en cliquant deux fois sur un nom.

4. Pour saisir le mot de passe de l’utilisateur, cliquez sur le bouton **Modifier...** dans la zone des propriétés de l’utilisateur et saisissez deux fois le mot de passe dans la boite de dialogue.
   Vous pouvez saisir jusqu’à 15 caractères alphanumériques. L’éditeur de mots de passe tient compte de la casse des caractères (majuscules ou minuscules).

> Les utilisateurs peuvent modifier leur mot de passe à tout moment en fonction des options de la page Sécurité des propriétés de la structure, ou à l'aide de la commande `CHANGE PASSWORD`.

5. Définissez le ou les groupe(s) d’appartenance de l’utilisateur à l’aide du tableau “Membre des groupes”.
   Vous pouvez ajouter l’utilisateur sélectionné à un groupe en cochant l’option correspondante dans la colonne Membre.

L’appartenance des utilisateurs aux groupes peut également être définie par groupe dans la [page Groupes](#configuring-access-groups).

### Supprimer un utilisateur

Pour supprimer un utilisateur, sélectionnez-le puis cliquez sur le bouton de suppression ou utilisez la commande **Supprimer** du menu contextuel.
![](../assets/en/Users/MinussNew.png)

Les utilisateurs supprimés n'apparaissent plus dans la liste de l'éditeur d'utilisateurs. A noter que les numéros des utilisateurs supprimés peuvent être réattribués lors de la création de nouveaux comptes.

### Propriétés des utilisateurs

- Le champ **Type d’utilisateur** : le champ Type d’utilisateur contient "Super_Utilisateur", "Administrateur", ou (pour tous les autres utilisateurs) "Utilisateur".

- **Méthodes de démarrage** : Nom d'une méthode associée qui sera automatiquement associée lorsque l'utilisateur ouvre l'application (facultatif). Cette méthode peut être utilisée par exemple pour charger les préférences utilisateur.

## Éditeur de groupes

L'éditeur de groupes se trouve dans la boîte à outils de 4D.

### Configurer des groupes

Vous utilisez l’éditeur de groupes pour définir les éléments qu’ils contiennent (utilisateurs et/ou autres groupes) et pour répartir les accès aux plug-ins.

Attention, une fois créé, un groupe ne peut pas être supprimé. Si vous souhaitez désactiver un groupe, il vous suffit de retirer tous les utilisateurs qu’il contient.

Pour créer un groupe :

1. Sélectionnez **Boîte à outils > Groupes** dans le menu **Développement** ou cliquez sur le bouton **Boîte outils** de la barre d’outils de 4D puis cliquez sur le bouton **Groupes**.
   4D affiche la fenêtre d’édition des groupes. La liste des groupes affiche tous les groupes du projet d'application.

2. Cliquez sur le bouton ![](../assets/en/Users/PlussNew.png) situé au-dessous de la liste des groupes.\
   OU
   Cliquez avec le bouton droit de la souris dans la liste des groupes et choisissez la commande **Ajouter** ou **Dupliquer** dans le menu contextuel.

> La commande Dupliquer permet de créer rapidement plusieurs groupes ayant des caractéristiques communes.

4D ajoute un nouveau groupe à la liste, nommé par défaut "Nouveau groupe1".

3. Saisissez le nom du nouveau groupe.
   Le nom du groupe peut avoir une longueur maximale de 15 caractères.
   Vous pouvez renommer un groupe à tout moment en utilisant la commande **Renommer** du menu contextuel, ou en utilisant la combinaison Alt+clic (Windows) ou Option+clic (macOS) ou en cliquant deux fois sur un nom.

### Placer des utilisateurs ou des groupes dans des groupes

Vous pouvez placer tout utilisateur ou tout groupe dans un groupe et vous pouvez aussi le placer dans plusieurs groupes. Il n’est pas obligatoire de placer un utilisateur dans un groupe.

Pour placer un utilisateur ou un groupe dans un groupe, il suffit de sélectionner le groupe dans la liste puis de cocher l’option "Membre" pour chaque utilisateur ou groupe dans la zone d’attribution des membres :

![](../assets/en/Users/groups.png)

Si vous cochez le nom d’un utilisateur, l’utilisateur est ajouté au groupe. Si vous cochez un nom de groupe, tous les utilisateurs du groupe sont ajoutés au nouveau groupe.
L’utilisateur ou le groupe affilié dispose alors des privilèges d’accès affectés au nouveau groupe.

Placer des groupes dans d’autres groupes permet de créer une hiérarchie d’utilisateurs. Les utilisateurs d’un groupe placé dans un autre groupe disposent des autorisations d’accès des deux groupes. Reportez-vous au paragraphe [Un schéma d’accès hiérarchique](#an-access-hierarchy-scheme) ci-dessous.

Pour supprimer un utilisateur ou un groupe d’un autre groupe, il suffit de désélectionner l’option correspondante dans la liste des membres.

### Affecter un groupe à un plug-in ou à un serveur

Pour affecter un groupe à un plug-in, il suffit de cocher l’option correspondante. Les plug-ins comprennent tous les plug-ins de 4D ainsi que tout plug-in développés par une société tierce.

Répartir les accès aux plug-ins vous permet de contrôler l’utilisation des licences dont vous disposez pour ces plug-ins. Tout utilisateur n’appartenant pas au groupe d’accès à un plug-in ne pourra pas charger ce plug-in.

> Les licences utilisées demeurent associées aux comptes utilisateurs 4D dans le groupe, durant toute la session 4D.

La zone “Plug-ins” de la page Groupes de la boîte à outils liste tous les plug-ins chargés par l’application 4D. Pour affecter un groupe à un plug-in, il suffit de cocher l’option correspondante.

![](../assets/en/Users/plugins.png)

Les lignes **4D Client Web Server** et **4D Client SOAP Server** permettent contrôler la possibilité de publication Web et SOAP (Web Services) de chaque 4D en mode distant. En effet, ces licences sont considérées par 4D Server comme des licences de plug-ins. Ainsi, comme pour un plug-in, vous pouvez restreindre le droit d’utiliser ces licences à un groupe d’utilisateurs spécifique.

### Un schéma d’accès hiérarchique

Le meilleur moyen d’assurer la sécurité de votre application et de proposer différents niveaux d’accès aux utilisateurs est d’utiliser un schéma hiérarchique des accès. Les utilisateurs peuvent être affectés à différents groupes et les groupes peuvent être hiérarchisés pour créer des niveaux de droits d’accès. Cette section décrit différentes approches de ce thème.

Dans cet exemple, un utilisateur appartient à l’un des trois groupes définis suivant son niveau de responsabilité. Les utilisateurs du groupe Comptabilité sont responsables de la saisie de données. Les utilisateurs du groupe Dir. finance sont responsables de la mise à jour des données, comme la mise à jour d’enregistrements ou la suppression d’enregistrements obsolètes. Les utilisateurs du groupe Direction générale sont responsables de l’analyse de données, ce qui inclut la réalisation de recherches et l’impression d’états.

Les groupes sont hiérarchisés afin que les privilèges soient correctement affectés aux utilisateurs de chacun des groupes.

- Le groupe Direction générale ne contient que les utilisateurs de “haut niveau”.
  ![](../assets/en/Users/schema1.png)

- Le groupe Dir. finance contient les utilisateurs du groupe Direction générale.
  ![](../assets/en/Users/schema2.png)

- Le groupe Comptabilité contient des opérateurs de saisie mais aussi les utilisateurs des groupes Dir. finance et donc Direction générale.
  ![](../assets/en/Users/schema3.png)

Vous pouvez ensuite décider des privilèges affectés à chaque groupe suivant le niveau de responsabilité des utilisateurs qu’il contient.

Un tel système hiérarchique rend aisée l’affectation d’un utilisateur à un groupe. Il suffit de placer chaque utilisateur dans un groupe et d’utiliser la hiérarchie des groupes pour déterminer les accès.

## Définition des accès aux groupes

Les groupes se voient attribuer des privilèges d'accès à des parties ou des fonctionnalités spécifiques de l'application :

- Accès à l'environnement de Développement et à l'Explorateur d'exécution,
- Serveur HTTP,
- Serveur REST,
- Serveur SQL.

Ces accès sont définis dans la boîte de dialogue Paramètres. L'exemple suivant présente les droits d'accès à l'explorateur d'exécution et au Développement assignés au groupe "Devs" :

![](../assets/en/Users/Access1.png)

Vous utilisez également des groupes pour [distribuer les licences disponibles](#assigning-a-group-to-a-plug-in-or-to-a-server). Cette distribution est définie dans l'éditeur Groupes.

## Fichier directory.json

Les utilisateurs, les groupes ainsi que leurs droits d'accès sont stockés dans un fichier spécifique du projet nommé **directory.json**.

Ce fichier peut être stocké aux emplacements suivants, en fonction de vos besoins :

- Si vous souhaitez utiliser le même répertoire pour tous les fichiers de données (ou si vous utilisez un seul fichier de données), stockez le fichier **directory.json** dans le dossier des paramètres de l'utilisateur, c'est-à-dire dans le dossier "Settings" au [même niveau que le dossier "Project"](Project/architecture.md#project-folder) (emplacement par défaut).
- Si vous souhaitez utiliser un fichier répertoire spécifique par fichier de données, stockez le fichier **directory.json** dans le dossier des paramètres des données, c'est-à-dire dans le dossier ["Settings" du dossier "Data"](Project/architecture.md#setti Si un fichier **directory.json** se trouve à cet emplacement, il est prioritaire par rapport au fichier du dossier Settings utilisateur. Cette configuration personnalisée/locale des utilisateurs et des groupes ne sera pas modifiée par une mise à niveau de l'application.

> Pour permettre des changements sûrs de mots de passe et d'appartenance à des groupes dans un environnement déployé, vous pouvez inclure votre fichier **directory.json** dans l'application serveur pendant le build, en utilisant l'[option correspondante du build application](../Desktop/building.md#incorporer-les-utilisateurs-et-les-groupes-du-projet-dans-l'application-serveur-construite).
