---
id: exporting
title: Exporter à partir d'une base 4D
---

Vous pouvez convertir une base de données binaire 4D (fichier .4db) en projet 4D. Etant donné que l'export crée uniquement une nouvelle version de la base de données existante, les fichiers d'origine ne sont jamais touchés. Ainsi, vous pouvez convertir votre base de données autant de fois que nécessaire.

A noter qu'un export est une opération à sens unique :

- une fois qu'une base de données 4D a été exportée en tant que projet, les deux versions deviennent indépendantes l'une de l'autre. 
- un projet 4D ne peut pas être exporté en un fichier .4db

## Convertir une base de données

Lorsque vous convertissez une base de données 4D existante en projet, le fichier .4db reste inchangé : un dossier nommé "Project" est créé à côté de votre fichier .4db et contient tous les fichiers nécessaires.

**Note :** Si un dossier nommé "Project" existe déjà au même niveau que votre fichier .4db (par exemple, si une conversion a déjà été effectuée), il sera remplacé par le processus de conversion.

Pour convertir une base de données en projet :

1. Ouvrez la base de données à convertir.
2. Sélectionnez **Fichier > Exporter > Structure vers projet**.  
    ![](assets/en/Project/exportProj.png) **Notes :** 

- Cette commande est disponible uniquement si une base de données binaire est ouverte - elle est désactivée dans les bases projet.
- Vous pouvez également utiliser la commande **Export structure file**.

Si la conversion aboutit et qu'aucune erreur de blocage n'est rencontrée, la boîte de dialogue suivante s'affiche : ![](assets/en/Project/exportProj2.png)

- **Afficher log** : met en évidence le fichier journal de conversion sur votre disque. La lecture de ce fichier est vivement recommandée, car le processus de conversion pourrait avoir modifié certaines parties de l’application (voir [Vérifier la conversion](#check-the-conversion)).

- **Ouvrir projet** : redémarre l'application 4D et charge le projet converti.

### A propos du fichier de données

Le fichier de données reste inchangé. Seuls les éléments de développement sont convertis. Vous pouvez toujours ouvrir le fichier de données avec le fichier de structure .4db après une conversion.

## Projet résultant

Au cours de la conversion, un nouveau dossier "Project" est créé au même niveau que votre fichier de structure .4db. Il contient tous les développements de votre application sous forme de fichiers texte : formulaires, structure, méthodes, triggers, menus, aide, listes. Il contient également un fichier .4DProject, qui est le fichier principal de votre projet 4D converti :

![](assets/en/Project/exportProj3.png)

Lorsque vous ouvrez le fichier .4DProject avec votre application 4D, le projet utilise le même dossier de ressources et le même dossier Web que le fichier .4db existant, ce qui facilite le test du projet.

Vous pouvez toujours ouvrir la base de données .4db, apporter des modifications si nécessaire (voir ci-dessous), puis l'exporter à nouveau et la tester. Vous pouvez répéter cette opération jusqu'à ce que vous soyez satisfait de la conversion.

## Vérifier la conversion

Un fichier journal au format JSON est créé par défaut pendant le processus de conversion pour référencer tous les problèmes ayant nécessité une action du convertisseur. Dans ce fichier, les messages sont classés en trois catégories (propriété "severity"), par exemple :

```codejs
    {
       "message": "Exporting picture id:1, name:logo.png, types:.png to <...>:Resources:Images:library:logo.png",
       "severity": "info"
    }
```

- **info** : décrit une action nécessaire exécutée automatiquement par le convertisseur qui n'aura aucun impact sur l'interface ou les fonctionnalités de l'application. Par exemple, si vous bibliothèque d'images contient des images, 4D les exporte dans le dossier **Resources** de la base de données (voir exemple ci-dessus).

- **avertissement** : décrit une action nécessaire exécutée automatiquement par le convertisseur et qui pourrait entraîner des différences dans les fonctionnalités ou l'interface de l'application, sans toutefois empêcher la base de données de s'exécuter. Les avertissements vous demandent généralement de contrôler l'impact de la conversion sur votre code. Par exemple, des avertissements sont renvoyés lorsque des paramètres de compatibilité non pris en charge, tels que "Mode Unicode" ou "Boutons radio regroupés par nom" sont automatiquement activés.

- **erreur **: décrit un problème nécessitant la correction de votre intervention. Cela peut empêcher la base de données de fonctionner correctement. Par exemple, certains objets formulaire hérités ne sont plus pris en charge, tels que les boutons inversés. Dans ce cas, vous devez convertir vous-même le bouton en un bouton 3D dans le fichier .4db avant de relancer la conversion.

Lorsque des modifications sont requises dans la base de données .4db, modifiez simplement le code ou le formulaire en conséquence et exportez à nouveau la structure. Répétez l'opération autant de fois que nécessaire jusqu'à ce que vous soyez satisfait du résultat.

## Problèmes de compatibilité

Lors de la conversion, certaines technologies 4D héritées sont converties en implémentations plus modernes, tandis que d'autres sont temporairement ignorées.

En particulier :

- La bibliothèque d'images n'existe plus. Lors de la conversion, 4D exporte toutes vos images dans le dossier **Resources** de la base de données.
- Les objets formulaire et les propriétés d'objet formulaire ont été mis à jour (ils utilisent désormais la même grammaire que les formulaires dynamiques). Les pièces obsolètes ne sont pas prises en charge. 
- Les paramètres de compatibilité sont réinitialisés comme pour une nouvelle base de données. Consultez le fichier journal de conversion pour vérifier l'état des paramètres de compatibilité de votre base de données. 

Pour obtenir une liste détaillée des problèmes de compatibilité, veuillez vous reporter à la section [Anciennes technologies](https://doc.4d.com/4Dv17R5/4D/17-R5/Deprecated-or-removed-features-in-v17-product-range.200-4245348.en.html#4020272) du Doc Center.

## Et maintenant?

Une fois que vous êtes satisfait de votre base de données convertie et que vous souhaitez commencer à travailler sur votre projet, vous pouvez nettoyer votre répertoire de travail :

1. Supprimez vos fichiers .4db et .4dindy du dossier de l’application (par exemple, déplacez-les dans un répertoire de sauvegarde).
2. Sur macOS, supprimez l’extension de dossier .4dbase pendant toute la phase de développement. Puisque vous allez travailler avec des fichiers texte et que vous les placerez dans un outil de contrôle de version, vous aurez besoin d'un accès direct. 

Si vous souhaitez que le fichier de données s'ouvre automatiquement une fois le projet déplacé vers d'autres machines, vous pouvez le rendre conforme à [l'architecture du projet](architecture.md) :

1. Renommez votre fichier de données "data.4dd".
2. Créez un dossier nommé "Data" et déplacez le fichier *data.4dd* dans ce dossier
3. Stockez le dossier *Data* au même niveau que le dossier Project.