---
id: creating
title: Créer un projet 4D
---

## Conditions requises

Les nouveaux projets 4D ne peuvent être créés uniquement à partir de **4D Developer** (reportez-vous à la section [Développer un projet](developing.md)).

**Note :** 4D Server peut ouvrir des fichiers .4DProject en mode lecture seule, à des fins de test uniquement. Pour le déploiement, les projets 4D sont fournis sous forme de fichiers .4dz (fichiers zippés). Pour plus d'informations, reportez-vous à la section [Générer un package de projet](building.md).

> Vous pouvez créer des bases projet en exportant les bases binaires existantes. Voir "Exporter depuis une base 4D" sur [doc.4d.com](https://doc.4d.com).

## Créer des fichiers de projet

Pour créer un nouveau projet de base de données :

1. Lancez une application 4D Developer.
2. Select **New > Database Project...** from the **File** menu: ![](../assets/en/Project/project-create1.png) OR Select **Database Project...** from the **New** toolbar button: ![](../assets/en/Project/projectCreate2.png) A standard **Save** dialog box appears so that you can choose the name and location of the 4D database project main folder.
1. Saisissez le nom du dossier de projet et cliquez sur **Sauvegarder**. Ce nom sera utilisé :
 - comme nom du dossier principal du projet (nommé "MyFirstProject" dans l'exemple de la section [Architecture d'un projet 4D](Project/architecture.md)),
 - comme nom du fichier .4DProject au premier niveau du dossier "Project". Vous pouvez choisir n'importe quel nom autorisé par votre système d'exploitation. *Attention :* si votre base projet est destinée à fonctionner sur d'autres systèmes ou à être enregistrée via un outil de contrôle de version, vous devez tenir compte de leurs recommandations de dénomination spécifiques.

Lorsque vous validez la boîte de dialogue, 4D ferme la base de données courante (le cas échéant), crée un dossier "Project" à l'emplacement indiqué et y place tous les fichiers nécessaires au bon fonctionnement de la base projet. Pour plus d'informations, voir [Architecture d'un projet 4D](Project/architecture.md).

La fenêtre de l’application 4D s’affiche ensuite avec l’Explorateur au premier plan. Vous pouvez alors, par exemple, créer des formulaires de projet ou afficher l'éditeur de structure et ajouter des tables, des champs, etc.
