---
id: creating
title: Créer un projet 4D
---

## Basics

New 4D projects can be created from **4D Developer** or **4D Server** (see [Developing a project](developing.md)).

Development can only be done locally with 4D Developer (or any text-based tool). Projects opened by 4D Server are available in read-only mode to remote 4D Developer applications, for testing purposes only (except when the [4D Developer and the 4D Server are on the same machine](developing.md#using-4d-developer-on-the-same-machine)).

Pour le déploiement, les projets 4D sont fournis sous forme de fichiers .4dz (fichiers zippés). Pour plus d'informations, reportez-vous à la section [Générer un package de projet](building.md).

> Vous pouvez créer des bases projet en exportant les bases binaires existantes. Voir "Exporter depuis une base 4D" sur [doc.4d.com](https://doc.4d.com).

## Créer des fichiers de projet

Pour créer un nouveau projet de base de données :

1. Launch a 4D Developer or a 4D Server application.
2. Select **New > Database Project...** from the **File** menu: ![](assets/en/Project/project-create1.png) OR (4D Developer only) Select **Database Project...** from the **New** toolbar button: ![](assets/en/Project/projectCreate2.png)  
    A standard **Save** dialog box appears so that you can choose the name and location of the 4D database project main folder.
3. Saisissez le nom du dossier de projet et cliquez sur **Sauvegarder**. Ce nom sera utilisé : 
    - comme nom du dossier principal du projet (nommé "MyFirstProject" dans l'exemple de la section [Architecture d'un projet 4D](Project/architecture.md)),
    - comme nom du fichier .4DProject au premier niveau du dossier "Project". Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. *Attention :* si votre base projet est destinée à fonctionner sur d'autres systèmes ou à être enregistrée via un outil de contrôle de version, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

Lorsque vous validez la boîte de dialogue, 4D ferme la base de données courante (le cas échéant), crée un dossier "Project" à l'emplacement indiqué et y place tous les fichiers nécessaires au bon fonctionnement de la base projet. Pour plus d'informations, voir [Architecture d'un projet 4D](Project/architecture.md).