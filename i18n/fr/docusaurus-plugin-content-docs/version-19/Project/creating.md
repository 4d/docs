---
id: creating
title: Travailler avec des projets
---

Les projets 4D sont créés et développés à l'aide de l'application **4D**, qui constitue un environnement de développement intégré (IDE) complet. **4D Server** peut également créer des projets vides.

Le développement multi-utilisateur est géré via des outils de **source control** standard (Perforce, Git, SVN, etc.), permettant aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.

## Créer un projet

Les nouveaux projets d'application 4D peuvent être créés à partir de **4D** ou de **4D Server**. Dans les deux cas, les fichiers de projet sont stockés sur la machine locale.

Pour créer un nouveau projet :

1. Lancez 4D ou 4D Server.
2. Select **New > Project...** from the **File** menu: ![](../assets/en/getStart/projectCreate1.png)OR(4D only) Select **Project...** from the **New** toolbar button:![](../assets/en/getStart/projectCreate2.png)A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

3. Saisissez le nom du dossier de projet et cliquez sur **Sauvegarder**. Ce nom sera utilisé :

- comme nom du dossier du projet,
- comme nom du fichier .4DProject au premier niveau du dossier "Project".

 Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. Toutefois, si votre projet est destiné à fonctionner sur d'autres systèmes ou à être enregistré via un outil de source control, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

Lorsque vous validez la boîte de dialogue **Nouveau projet**, 4D ferme le projet en cours (le cas échéant), crée un dossier de projet à l'emplacement indiqué et y place tous les fichiers nécessaires au projet. Pour plus d'informations, voir [Architecture d'un projet 4D](Project/architecture.md).

Vous pouvez alors commencer à développer votre projet.

## Ouvrir un projet

Pour ouvrir un projet existant depuis 4D :

1. Select **Open a local application project** in the Welcome Wizard dialog, OR Select **Open/Local Project...** from the **File** menu or the **Open** toolbar button. La boîte de dialogue standard d’ouverture de fichiers apparaît.

2. Sélectionnez le fichier `.4dproject` du projet et cliquez sur **Ouvrir**. Par défaut, le projet est ouvert avec son fichier de données courant. D'autres types de fichiers sont suggérés :

- *Fichiers de projets compressés* : extension `.4dz` - projets pour le déploiement
- *Fichiers de raccourcis* : extension `.4DLink` - stockent des paramètres supplémentaires nécessaires à l'ouverture de projets ou d'applications (adresses, identifiants, etc.)
- *Fichiers binaires* : extension `.4db` ou `.4dc` - formats de base de données 4D traditionnels

### Options

En plus des options système standard, la boîte de dialogue *Ouvrir* de 4D propose deux menus d'options spécifiques disponibles des bouton **Ouvrir** et **Fichier de données**.

- **Ouvrir** - mode d'ouverture du projet :
  - **Projet interprété** ou **Projet compilé** : ces options sont disponibles lorsque le projet sélectionné contient à la fois du [code interprété et compilé](Concepts/interpreted.md).
  - **[Centre de sécurité et de maintenance](MSC/overview.md)** : Ouverture en mode sécurisé permettant d'accéder aux projets endommagés afin d'effectuer les réparations nécessaires.

- **Fichier de données** - spécifie le fichier de données à utiliser avec le projet. Par défaut, l'option **Fichier de données courant** est sélectionnée.

## Raccourcis d’ouverture des projets

4D propose plusieurs façons d’ouvrir directement des projets, sans passer par la boîte de dialogue d’ouverture :

- via des commandes de menus :
  - *Barre de menus* - **Fichier** > **Ouvrir projets récents / {project name}**
  - *Barre d'outils 4D* -  Sélectionnez le projet à partir du menu associé au bouton **Ouvrir**

- via les préférences :
  - Fixez la préférence générale **Au démarrage** sur **Ouvrir le dernier projet utilisé**.

- via un fichier `.4DLink`.

### Ouvrir un projet avec un fichier 4DLink

Vous pouvez utiliser un [fichier `.4DLink`](#about-4DLink-files) pour lancer l'application 4D et ouvrir le projet 4D cible. Il existe deux façons de procéder :

- double-cliquez ou faites glisser et déposez le fichier `.4DLink` sur l'application 4D
- allez dans **Fichier** > **Ouvrir des projets récents** et sélectionnez un projet

![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)

Un fichier .4DLink de type "projet distant" peut être copié et utilisé sur plusieurs machines.
> Il est également possible de sélectionner un fichier 4DLink dans la boîte de dialogue d'ouverture de 4D et 4D Server (ouverture de projet local uniquement).

## À propos des fichiers 4DLink

Les fichiers portant l'extension `.4DLink` sont des fichiers XML qui contiennent des paramètres destinés à automatiser et à simplifier l'ouverture de projets 4D locaux ou distants.

Les fichiers `.4DLink` peuvent enregistrer l'adresse d'un projet 4D ainsi que ses identifiants de connexion et son mode d'ouverture, afin de vous faire gagner du temps lors de l'ouverture des projets.

4D génère automatiquement un fichier `.4DLink` lorsqu'un projet local est ouvert pour la première fois ou lors de la première connexion à un serveur. Le fichier est stocké dans le dossier des préférences locales à l'emplacement suivant :

- Windows : C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- macOS : Users/UserName/Library/Application Support/4D/Favorites vXX/

XX représente le numéro de version de l'application. Par exemple, "Favoris v19" pour 4D v19.

Ce dossier est composé de deux sous-dossiers :

- le dossier **Local** contient les fichiers `.4DLink` qui peuvent être utilisés pour ouvrir des projets locaux
- le dossier **Remote** contient les fichiers `.4DLink` des projets distants récents

Les fichiers `.4DLink` peuvent également être créés avec un éditeur XML.

4D fournit un DTD décrivant les clés XML qui peuvent être utilisées pour créer un fichier `.4DLink`. Ce DTD est nommé database_link.dtd et se trouve dans le sous-dossier \Resources\DTD\ de l'application 4D.

## Enregistrement des fichiers

Lorsque vous travaillez sur un projet dans 4D, vous pouvez utiliser les éditeurs intégrés de 4D pour créer, modifier ou sauvegarder des éléments de la structure, des méthodes, des formulaires, etc. Les modifications sont enregistrées sur disque lorsque vous sélectionnez une commande **Sauvegarde**, ou lorsque la fenêtre de l'éditeur perd ou récupère le focus.

Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations.

Le développement 4D comprend un gestionnaire d’accès aux fichiers permettant de contrôler les accès simultanés :

- if an open file is read-only at the OS level, a locked icon is displayed in the editor: ![](../assets/en/Project/lockicon.png)
- si un fichier ouvert est édité simultanément à partir de différents emplacements, 4D affichera une boîte de dialogue d'alerte lorsque vous tenterez d'enregistrer les modifications :

![](../assets/en/Project/projectReload.png)

- **Oui** : ignore les modifications de l'éditeur et recharge la version modifiée
- **Non** : enregistre les modifications et écrase l'autre version
- **Annuler** : ne pas enregistrer

Cette fonctionnalité est activée pour tous les éditeurs 4D intégrés (Structure, Formulaire, Méthode, Paramètres et Boite à outils).
