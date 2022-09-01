---
id: developing
title: Développer un projet
---

## Outils de développement

Les bases projets 4D sont créées localement, à l'aide de l'application **4D Developer**. Pour ouvrir un projet depuis 4D Developer, sélectionnez le fichier principal du projet, nommé *databaseName.4DProject* (voir [Architecture d'un projet 4D](architecture.md)). Notez que vous pouvez également travailler avec n'importe quel éditeur de texte car la plupart des fichiers du projet 4D sont des fichiers texte. L'accès simultané aux fichiers est géré via un gestionnaire d'accès aux fichiers (voir ci-dessous).

4D Server peut ouvrir les fichiers *databaseName.4DProject* à des fins de test : les machines 4D distantes peuvent se connecter et utiliser la base de données, mais tous les fichiers de structure de base de données sont en lecture seule.

Le développement multi-utilisateur est géré via des outils de contrôle de version standard, qui permettent aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.

## Accès au fichier de projet

Lorsque vous travaillez sur un projet dans 4D Developer, vous pouvez utiliser les éditeurs intégrés de 4D pour créer, modifier ou sauvegarder des éléments de la structure, des méthodes, des formulaires, etc. Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations.

4D Developer comprend un gestionnaire d’accès aux fichiers permettant de contrôler les accès simultanés :

- if an open file which is read-only at the OS level, a locked icon is displayed in the editor: ![](../assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes:![](../assets/en/Project/projectReload.png)
  - **Oui** : ignore les modifications de l'éditeur et recharge
  - **Non** : enregistre les modifications et écrase l'autre version
  - **Annuler** : ne pas enregistrer

Cette fonctionnalité est activée pour tous les éditeurs intégrés :

- Éditeur de structure
- Éditeur de formulaire
- Éditeur de méthode
- Éditeur de paramètres
- Éditeur de boîte à outils
