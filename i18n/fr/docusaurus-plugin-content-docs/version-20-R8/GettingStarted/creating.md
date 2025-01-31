---
id: creating
title: Créer ou ouvrir un projet
---

Les projets 4D sont créés et développés à l'aide de l'application **4D**, qui constitue un environnement de développement intégré (IDE) complet. **4D Server** peut également créer des projets vides.

## Créer un projet

Les nouveaux projets d'application 4D peuvent être créés à partir de **4D** ou de **4D Server**. Dans les deux cas, les fichiers de projet sont stockés sur la machine locale.

Pour créer un nouveau projet :

1. Lancez 4D ou 4D Server.

2. Effectuez l'une des opérations suivantes :
   - Sélectionnez **Nouveau > Projet...** dans le menu **Fichier** : ![](../assets/en/getStart/projectCreate1.png)
   - (uniquement pour 4D) Sélectionnez **Projet...** dans le bouton de la barre d'outils **Nouveau** :<p>![](../assets/en/getStart/projectCreate2.png)</p>Une boîte de dialogue **Enregistrer** standard apparaît afin que vous puissiez choisir le nom et l'emplacement du dossier principal du projet 4D.

3. Saisissez le nom du dossier de projet et cliquez sur **Sauvegarder**. Ce nom sera utilisé :

   - comme nom du dossier du projet,
   - comme nom du fichier .4DProject au premier niveau du [dossier "Project"](../Project/architecture.md#project-folder).

Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. Toutefois, si votre projet est destiné à fonctionner sur d'autres systèmes ou à être enregistré via un outil de source control, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

Lorsque vous validez la boîte de dialogue **Nouveau projet**, 4D ferme le projet en cours (le cas échéant), crée un dossier de projet à l'emplacement indiqué et y place tous les fichiers nécessaires au projet. Pour plus d'informations, voir [Architecture d'un projet 4D](Project/architecture.md).

Vous pouvez alors commencer à développer votre projet.

## Ouvrir un projet

Pour ouvrir un projet existant depuis 4D :

1. Effectuez l'une des opérations suivantes :

   - Sélectionnez **Ouvrir > Projet local...** à partir du menu **Fichier** ou du bouton **Ouvrir** de la barre d'outils.
   - Sélectionnez **Ouvrir un projet d'application local** dans la boîte de dialogue de l'assistant de bienvenue

La boîte de dialogue standard Ouvrir apparaît.

2. Sélectionnez le fichier `.4dproject` du projet (situé dans le [dossier "Project" du projet](../Project/architecture.md#project-folder)) et cliquez sur **Ouvrir**.

   Par défaut, le projet est ouvert avec son fichier de données courant. D'autres types de fichiers sont suggérés :

   - *Fichiers Packed project* : extension `.4dz` - projets de déploiement
   - *Fichiers de raccourcis* : extension `.4DLink` - stocke des paramètres supplémentaires nécessaires à l'ouverture de projets ou d'applications (adresses, identifiants, etc.)
   - *Fichiers binaires* : extension `.4db` ou `.4dc` - anciens formats de base de données 4D

### Options

Outre les options standard du système, la boîte de dialogue *Ouvrir* de 4D propose deux menus avec des options spécifiques disponibles via le bouton **Ouvrir** et le menu **Data file**.

- **Ouvrir** - mode d'ouverture du projet :
  - **Interprété** ou **Compilé** : Ces options sont disponibles lorsque le projet sélectionné contient à la fois [du code interprété et du code compilé](Concepts/interpreted.md).
  - **[Maintenance Security Center](MSC/overview.md)**: Ouverture en mode sécurisé permettant d'accéder aux projets endommagés afin d'effectuer les réparations nécessaires.

- **Fichier de données** - spécifie le fichier de données à utiliser avec le projet. Par défaut, l'option **Fichier de données courant** est sélectionnée.

## Raccourcis d’ouverture des projets

4D offre plusieurs façons d'ouvrir des projets directement sans devoir utiliser la boîte de dialogue Ouvrir :

- via des options de menu :
  - *Barre de menus* - **Fichier** > **Ouvrir les projets récents / {project name}**
  - *Barre d'outils 4D* - Sélectionner le projet dans le menu associé au bouton **Ouvrir**

- via les préférences :
  - Placez la préférence générale **Au démarrage** sur **Ouvrir le dernier projet utilisé**.

- en utilisant un fichier `.4DLink` .

### Ouvrir un projet avec un fichier 4DLink

Vous pouvez utiliser un [fichier `.4DLink`](#about-4DLink-files) pour lancer l'application 4D et ouvrir le projet 4D cible. Il existe deux façons de procéder :

- double-cliquer ou glisser-déposer le fichier `.4DLink` sur l'application 4D
- aller sur **Fichier** > **Ouvrir projets récents** et sélectionner un projet

![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)

Un fichier .4DLink de type "projet distant" peut être copié et utilisé sur plusieurs machines.

> Il est également possible de sélectionner un fichier 4DLink dans la boîte de dialogue d'ouverture de 4D et 4D Server (ouverture de projet local uniquement).

## À propos des fichiers 4DLink

Les fichiers portant l'extension `.4DLink` sont des fichiers XML contenant des paramètres destinés à automatiser et à simplifier l'ouverture de projets 4D locaux ou distants.

Les fichiers `.4DLink` peuvent enregistrer l'adresse d'un projet 4D ainsi que ses identifiants de connexion et son mode d'ouverture, ce qui permet de gagner du temps lors de l'ouverture des projets.

4D génère automatiquement un fichier `.4DLink` lors de la première ouverture d'un projet local ou lors de la première connexion à un serveur. Le fichier est stocké dans le dossier des préférences locales à l'emplacement suivant :

- Windows: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- macOS : Users/UserName/Library/Application Support/4D/Favorites vXX/

XX représente le numéro de version de l'application. Par exemple, "Favoris v19" pour 4D v19.

Ce dossier est divisé en deux sous-dossiers :

- le dossier **Local** contient les fichiers `.4DLink` qui peuvent être utilisés pour ouvrir des projets locaux
- le dossier **Remote** contient les fichiers `.4DLink` des projets distants récents

Les fichiers `.4DLink` peuvent également être créés à l'aide d'un éditeur XML.

4D fournit une DTD décrivant les clés XML qui peuvent être utilisées pour construire un fichier `.4DLink` . Cette DTD est nommée database_link.dtd et se trouve dans le sous-dossier `\Resources\DTD\` de l'application 4D.
