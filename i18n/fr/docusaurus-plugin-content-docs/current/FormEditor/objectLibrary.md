---
id: objectLibrary
title: Bibliothèques d'objets
---

Vous pouvez utiliser des bibliothèques d'objets dans vos formulaires. Une bibliothèque d'objets propose une collection d'objets préconfigurés pouvant être utilisés dans vos formulaires par simple copier-coller ou glisser-déposer.

4D propose deux types de bibliothèques d'objets :

- une bibliothèque d'objets standard préconfigurée, standard, disponible dans tous vos projets.
- des bibliothèques d’objets personnalisées, que vous pouvez utiliser pour stocker vos objets formulaires favoris ou des formulaires projets complets.

## Utilisation de la bibliothèque d'objets standard

The standard object library is available from the Form editor: click on the last button of the toolbar:\
![](../assets/en/FormEditor/library1.png)

La bibliothèque est affichée dans une fenêtre séparée :

![](../assets/en/FormEditor/library2.png)

La fenêtre présente les caractéristiques principales suivantes :

- Zone d'aperçu avec des messages d'aide : la zone centrale affiche un aperçu de chaque objet. Vous pouvez survoler un objet pour obtenir des informations sur celui-ci dans un message d'aide.
- You can filter the window contents by using the **Categories** menu:
  ![](../assets/en/FormEditor/library3.png)
- Pour utiliser un objet de la bibliothèque dans votre formulaire, vous pouvez soit :
  - right-click on an object and select **Copy** in the contextual menu
  - or drag and drop the object from the library The object is then added to the form.

Cette bibliothèque est en lecture seule. Si vous souhaitez modifier des objets par défaut ou créer votre propre bibliothèque d'objets préconfigurés ou vos formulaires projets, vous devez créer une bibliothèque d'objets personnalisée (voir ci-dessous).

All objects proposed in the standard object library are described on [this section on doc.4d.com](https://doc.4d.com/4Dv17R6/4D/17-R6/Library-objects.200-4354586.en.html).

## Créer et utiliser des bibliothèques d'objets personnalisées

4D permet de créer et d’utiliser des bibliothèques d’objets personnalisées. A custom object library is a 4D project where you can store your favorite objects (buttons, texts, pictures, etc.) You can then reuse these objects in different forms and different projects. Vous pouvez ensuite réutiliser ces objets sous différentes formes et dans différents projets.

Les objets sont stockés avec toutes leurs propriétés, y compris leurs méthodes objet. Les bibliothèques sont constituées et utilisées par simple glisser-déposer ou copier-coller.

A l’aide des bibliothèques d'objets, vous pouvez constituer des fonds d’objets de formulaires regroupés par familles graphiques, par fonctionnalités, etc.

### Créer une bibliothèque d’objets

To create an object library, select **New>Object Library...** from the 4D **File** menu or tool bar. Une boîte de dialogue standard d’enregistrement de fichiers apparaît, vous permettant de choisir le nom et l’emplacement de la bibliothèque d’objets.

Lorsque vous validez la boîte de dialogue, 4D crée sur disque une nouvelle bibliothèque d’objets et affiche sa fenêtre (vide par défaut).

![](../assets/en/FormEditor/library4.png)

Vous pouvez créer autant de bibliothèques que vous voulez par projet. Une bibliothèque créée et construite sous macOS peut être utilisée sous Windows et inversement.

### Ouvrir une bibliothèque d’objets

Une même bibliothèque d’objets ne peut être ouverte que par un seul projet à la fois. En revanche, il est possible d’ouvrir plusieurs bibliothèques différentes dans le même projet.

To open a custom object library, select **Open>Object Library...** command in the 4D **File** menu or tool bar. Une boîte de dialogue standard d’ouverture de fichiers apparaît, vous permettant de désigner la bibliothèque d’objets à ouvrir. Vous pouvez sélectionner les types de fichier suivants :

- **.4dproject**
- **.4dz**

Les bibliothèques d’objets personnalisées sont des projets 4D classiques. Seules les parties suivantes d'un projet sont exposées lorsqu'il est ouvert en tant que bibliothèque :

- formulaires projet
- pages 1 des formulaires

### Construire une bibliothèque d’objets

Les objets sont placés dans une bibliothèque d’objets par glisser-déposer ou couper/copier-coller. They can come from either a form or another object library (including the [standard library](#using-the-standard-object-library)). Aucun lien n’est conservé avec l’objet d’origine : si celui-ci est modifié, la modification ne sera pas reportée dans l’objet copié.

> In order to be able to drag and drop objects from forms to object libraries, you must make sure the **Start drag and drop** option in the 4D Preferences is selected.

Les principales opérations sont accessibles via le menu contextuel ou le menu d'options de la fenêtre :

![](../assets/en/FormEditor/library5.png)

- **Cut** or **Copy** to the pasteboard
- **Paste** an object from the pasteboard
- **Clear** - deletes the object from the library
- **Rename** - a dialog box appears allowing you to rename the item. A noter que les noms d'objets doivent être uniques dans une bibliothèque.

Vous pouvez placer dans la bibliothèque des objets individuels (y compris des sous-formulaires) ou des ensembles d’objets. Chaque objet ou ensemble d’objets est regroupé en un seul élément :

![](../assets/en/FormEditor/library6.png)

Une bibliothèque d’objets peut contenir jusqu’à 32 000 éléments.

Les objets sont copiés avec toutes leurs propriétés, graphiques et fonctionnelles, y compris leurs méthodes. Elles sont intégralement conservées lorsque l’élément est recopié dans un formulaire ou une autre bibliothèque.

#### Objets dépendants

Le copier-coller ou le glisser-déposer de certains objets dans la bibliothèque entraîne également la copie des objets dépendants. Par exemple, la copie d’un bouton entraînera obligatoirement la copie de la méthode objet qui lui est éventuellement attachée. Ces objets dépendants ne peuvent, quant à eux, être directement copiés ou glissés-déposés.

Voici la liste des objets dépendants qui seront collés dans la bibliothèque en même temps que l’objet principal qui les utilise (le cas échéant) :

- Enumérations
- Formats/Filtres
- Images
- Messages d’aide (liés à un champ)
- Méthodes objet
