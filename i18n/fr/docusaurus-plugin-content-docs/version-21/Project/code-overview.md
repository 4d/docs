---
id: code-overview
title: Creating Methods and classes
---

Le code 4D utilisé dans votre projet est écrit dans des [méthodes](../Concepts/methods.md) et des [classes](../Concepts/classes.md).

L'IDE de 4D vous offre diverses fonctionnalités pour créer, modifier, exporter ou supprimer votre code. Vous utiliserez généralement l'[éditeur intégré de code 4D](../code-editor/write-class-method.md) pour travailler avec votre code. Vous pouvez également utiliser d'autres éditeurs tels que **VS Code**, pour lesquels l'extension [4D-Analyzer](https://github.com/4d/4D-Analyzer-VSCode) est disponible.

## Créer des méthodes

Une méthode dans 4D est stockée dans un fichier **.4dm** situé dans le dossier approprié du dossier [`/Project/Sources/`](../Project/architecture.md#sources).

Vous pouvez créer [plusieurs types de méthodes](../Concepts/methods.md) :

- Tous les types de méthodes peuvent être créés ou ouverts à partir de la fenêtre de l'**Explorateur** (à l'exception des méthodes objet qui sont gérées à partir de l'[éditeur de formulaires](../FormEditor/formEditor.md)).
- Les méthodes projet peuvent également être créées ou ouvertes à partir du menu **Fichier** ou de la barre d'outils (**Nouveau/Méthode...** ou **Ouvrir/Méthode...**) ou à l'aide de raccourcis dans la [fenêtre de l'éditeur de code](../code-editor/write-class-method.md#shortcuts).
- Les triggers peuvent également être créés ou ouverts à partir de l'éditeur de Structure.
- Les méthodes formulaire peuvent également être créées ou ouvertes à partir de l'[éditeur de formulaires](../FormEditor/formEditor.md).

## Créer des classes

Une classe utilisateur dans 4D est définie par un fichier de méthode spécifique (**.4dm**), stocké dans le dossier [`/Project/Sources/Classes/`](../Project/architecture.md#sources). Le nom du fichier est le nom de la classe.

Vous pouvez créer un fichier de classe à partir du menu ou de la barre d'outils **Fichier** (**Nouveau/Classe...**) ou dans la page **Méthodes** de la fenêtre de l'**Explorateur** .

Pour plus d'informations, reportez-vous à la section [Classes](../Concepts/classes.md).

## Supprimer des méthodes ou des classes

Pour supprimer une méthode ou une classe existante, vous pouvez :

- sur votre disque, supprimer le fichier *.4dm* du dossier "Sources",
- dans l'explorateur de 4D, sélectionnez la méthode ou la classe et cliquez sur ![](../assets/en/Users/MinussNew.png) ou choisissez **Déplacer vers la corbeille** dans le menu contextuel.

> Pour supprimer une méthode objet, choisissez **Supprimer la méthode objet** dans l'[éditeur de formulaires](../FormEditor/formEditor.md) (menu **Objet** ou menu contextuel).

