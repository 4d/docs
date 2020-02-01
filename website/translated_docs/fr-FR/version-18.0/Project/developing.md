---
id: version-18.0-developing
title: Développer un projet
original_id: developing
---

## Outils de développement


4D database projects are created locally, using the **4D Developer** application. To open a project from 4D Developer, select the project's main file, named *databaseName.4DProject* (see [Architecture of a 4D project](architecture.md)). Notez que vous pouvez également travailler avec n'importe quel éditeur de texte car la plupart des fichiers du projet 4D sont des fichiers texte. L'accès simultané aux fichiers est géré via un gestionnaire d'accès aux fichiers (voir ci-dessous).

4D Server can open *databaseName.4DProject* files for testing purposes: remote 4D machines can connect and use the database, but all database structure files are read-only.

Le développement multi-utilisateur est géré via des outils de contrôle de version standard, qui permettent aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.



## Accès au fichier de projet

Lorsque vous travaillez sur un projet dans 4D Developer, vous pouvez utiliser les éditeurs intégrés de 4D pour créer, modifier ou sauvegarder des éléments de la structure, des méthodes, des formulaires, etc. Les éditeurs utilisant des fichiers sur le disque, d'éventuels conflits peuvent se produire si le même fichier est modifié voire supprimé de différents endroits. For example, if the same method is edited in a method editor window *and* in a text editor, saving both modifications will result in a conflict.

4D Developer comprend un gestionnaire d’accès aux fichiers permettant de contrôler les accès simultanés :

- if an open file which is read-only at the OS level, a locked icon is displayed in the editor: ![](assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes: ![](assets/en/Project/projectReload.png)
    - **Yes**: discard editor changes and reload
    - **No**: save changes and overwrite the other version
    - **Cancel**: do not save

Cette fonctionnalité est activée pour tous les éditeurs intégrés :

- Éditeur de structure
- Éditeur de formulaire
- Éditeur de méthode
- Éditeur de paramètres
- Éditeur de boîte à outils
