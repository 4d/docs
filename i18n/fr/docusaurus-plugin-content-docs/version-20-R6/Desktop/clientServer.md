---
id: clientServer
title: Gestion Client/Serveur
---

Les applications 4D Desktop peuvent être utilisées dans une configuration Client/Serveur, en tant qu'applications client/serveur fusionnées ou en tant que projets distants.

- Les **applications client/serveur fusionnées** sont générées par le [Générateur d'application](building.md#clientserver-page). Elles sont utilisées pour les déploiements d'applications.

- Les **projets distants** sont des fichiers [.4DProject](Project/architecture.md) ouverts par 4D Server et accessibles avec 4D en mode distant. Le serveur envoie une version .4dz du projet ([format compressé](building.md#build-compiled-structure)) au 4D distant, donc les fichiers de structure sont en lecture seule. Cette configuration est généralement utilisée pour les tests d'application.

![](../assets/en/getStart/localremote.png)

> La connexion à un projet distant à partir de **la même machine que 4D Server** permet de modifier les fichiers du projet. Cette [fonctionnalité spécifique](#using-4d-and-4d-server-on-the-same-machine) permet de développer une application client/serveur dans le même contexte que le contexte de déploiement.

## Ouvrir une application client/serveur fusionnée

Une application client/serveur fusionnée est personnalisée et son démarrage est simplifié :

- Pour lancer la partie serveur, l’utilisateur double-clique simplement sur l’application serveur : il n’est pas nécessaire de sélectionner le fichier projet. il n’est pas nécessaire de sélectionner le fichier projet.
- Pour lancer la partie cliente, l’utilisateur double-clique simplement sur l’application cliente, qui se connecte directement à l’application serveur : il n’est pas nécessaire de choisir un serveur dans une boîte de dialogue de connexion.

Ces principes sont détaillés dans la page du [Générateur d'application](building.md#what-is-a-clientserver-application).

## Ouvrir un projet distant

La première fois que vous vous connectez à un projet 4D Server via un 4D distant, vous utiliserez généralement la boîte de dialogue de connexion standard. Par la suite, vous pourrez vous connecter directement en utilisant le menu **Ouvrir projets récents** ou un fichier de raccourci 4DLink.

Pour vous connecter à distance à un projet 4D Server :

1. Effectuez l'une des opérations suivantes :
   - Sélectionnez **Se connecter à 4D Server** dans la boîte de dialogue de l'Assistant de bienvenue
   - Sélectionnez **Ouvrir > Projet distant...** à partir du menu **Fichier** ou du bouton **Ouvrir** de la barre d'outils.

La boîte de dialogue de connexion à 4D Server apparaît. Cette boîte de dialogue comporte trois onglets : **Récent**, **Disponible** et **Personnalisé**.

Si 4D Server est connecté au même sous-réseau que le 4D distant, sélectionnez **Disponible**. 4D Server inclut un système de diffusion intégré qui, par défaut, publie le nom des projets 4D Server disponibles sur le réseau. La liste est triée par ordre d'apparition et est mise à jour dynamiquement.

![](../assets/en/getStart/serverConnect.png)

Pour vous connecter à un serveur de la liste, double-cliquez sur son nom ou sélectionnez-le et cliquez sur le bouton **OK**.

Si le projet publié n'est pas affiché dans la liste **Disponible**, sélectionnez **Personnalisé**. La page Personnalisé vous permet de vous connecter à un serveur publié sur le réseau en utilisant son adresse réseau et en lui attribuant un nom personnalisé.

![](../assets/en/Desktop/serverConnect2.png)

- **Nom du projet** : définit le nom local du projet 4D Server. Ce nom sera utilisé dans la page **Récent** pour faire référence au projet.
- **Adresse réseau** : L'adresse IP de la machine sur laquelle le 4D Server a été lancé.
  - Si deux serveurs sont exécutés simultanément sur la même machine, l'adresse IP doit être suivie de deux points et d'un numéro de port, par exemple : `192.168.92.104:19814`.
  - Par défaut, le port de publication d'un 4D Server est 19813. Ce numéro peut être modifié dans les paramètres du projet.

> L'option **Activer le mode développement** ouvre la connexion à distance dans un mode lecture/écriture spécial et nécessite d'accéder au dossier du projet depuis le 4D distant (option de compatibilité).

Une fois que cette page attribue un serveur, cliquez sur le bouton **OK** pour vous connecter au serveur.

Une fois la connexion au serveur établie, le projet distant sera répertorié dans l'onglet **Récent**.

### Mettre à jour des fichiers de projet sur le serveur

4D Server crée et envoie automatiquement aux machines distantes une version [.4dz](building.md#build-compiled-structure) du fichier de projet *.4DProject* (non compressé) en mode interprété.

- Une version .4dz mise à jour du projet est automatiquement produite lorsque cela est nécessaire, c'est-à-dire lorsque le projet a été modifié et rechargé par 4D Server. Le projet est rechargé :
  - automatiquement, lorsque la fenêtre de l'application 4D Server arrive à l'avant de l'OS ou lorsque l'application 4D sur la même machine enregistre une modification (voir ci-dessous).
  - lorsque la commande `RELOAD PROJECT` est exécutée. L'appel de cette commande est nécessaire lorsque, par exemple, vous avez extrait une nouvelle version du projet depuis la plateforme de contrôle de version.

### Mettre à jour des fichiers de projet sur les machines distantes

Lorsqu'une version .4dz mise à jour du projet a été produite sur 4D Server, les machines 4D distantes connectées doivent se déconnecter et se reconnecter à 4D Server afin de bénéficier de la version mise à jour.

## Utiliser 4D et 4D Server sur la même machine

Lorsque 4D se connecte à un 4D Server sur la même machine, l'application se comporte comme 4D en mode monoposte et l'environnement de développement permet d'éditer les fichiers du projet. Cette fonctionnalité vous permet de développer une application client/serveur dans le même contexte que le contexte de déploiement.

> Lorsque 4D se connecte à un serveur 4D sur la même machine, le **mode développement** est automatiquement activé, quelle que soit l'[option d'ouverture](#ouverture-d-un-projet-à-distance) choisie.

A chaque fois que 4D effectue une action **Enregistrer tout** depuis l'environnement de développement (explicitement depuis le menu **Fichier** ou implicitement en passant en mode application par exemple), 4D Server recharge de manière synchrone les fichiers du projet. 4D attend que 4D Server termine le rechargement des fichiers du projet avant de continuer.

Veillez cependant aux différences de comportement suivantes, comparées à [l'architecture projet standard](Project/architecture.md) :

- the userPreferences.\{username\} folder used by 4D is not the same folder used by 4D Server in the project folder. Au lieu de cela, il s'agit d'un dossier dédié, nommé "userPreferences", stocké dans le dossier système du projet (c'est-à-dire au même emplacement que lors de l'ouverture d'un projet .4dz).
- le dossier utilisé par 4D pour les données dérivées n'est pas le dossier "DerivedData" du dossier projet. Il s'agit plutôt d'un dossier dédié nommé "DerivedDataRemote" situé dans le dossier système du projet.
- le fichier catalog.4DCatalog n'est pas édité par 4D mais par 4D Server. Les informations du catalogue sont synchronisées à l'aide des requêtes client/serveur
- le fichier directory.json n'est pas édité par 4D mais par 4D Server. Les informations du répertoire sont synchronisées à l'aide des requêtes client/serveur
- 4D utilise ses propres composants internes et plug-ins au lieu de ceux de 4D Server.

> Il n'est pas recommandé d'installer des plug-ins ou des composants au niveau de l'application 4D ou 4D Server.

## Sessions utilisateur distant

Sur le serveur, la commande [`Session`](../API/SessionClass.md#session) renvoie un objet `session` décrivant la session utilisateur courante. Cet objet est géré via les fonctions et les propriétés de la classe [`Session`](../API/SessionClass.md).

### Utilisation

L'objet `session` vous permet d'obtenir des informations sur la session de l'utilisateur distant. Vous pouvez partager des données entre tous les processus de la session utilisateur en utilisant l'objet partagé [`session.storage`](../API/SessionClass.md#storage).

Par exemple, vous pouvez lancer une procédure d'authentification et de vérification de l'utilisateur lorsqu'un client se connecte au serveur, impliquant la saisie d'un code envoyé par e-mail ou SMS dans l'application. Ensuite, vous ajoutez les informations de l'utilisateur au storage de session, ce qui permet au serveur d'identifier l'utilisateur. De cette façon, le serveur 4D peut accéder aux informations de l'utilisateur pour tous les process clients, permettant l'écriture de code personnalisé en fonction du rôle de l'utilisateur.

### Disponibilité

L'objet `session` de l'utilisateur distant est disponible depuis :

- Les méthodes projet qui ont l'attribut [Exécuter sur serveur](../Project/code-overview.md#execute-on-server) (elles sont exécutées dans le process jumeau du process client),
- Les Triggers,
- Les méthodes base `On Server Open Connection` et `On Server Shutdown Connection`.

:::info

Toutes les procédures stockées sur le serveur partagent la même session utilisateur virtuelle. Pour plus d'informations, consultez [cette page sur doc.4d.com](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html).

:::

### Voir aussi (blog post)

[Objet session distante 4D avec connexion Client/Serveur et procédure stockée](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).
