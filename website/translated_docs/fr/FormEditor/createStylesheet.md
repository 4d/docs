---
id: stylesheets
title: Feuilles de style (style sheets)
---

## Présentation

Une feuille de style regroupe une combinaison d’attributs d'objets formulaire —  allant des attributs de texte à quasiment tous les attributs d'objet disponibles.

Outre l’harmonisation de l’interface de vos applications, l’usage de feuilles de style a trois avantages majeurs :

*   Gain de temps en développement : pour chaque objet, vous définissez en une seule opération un ensemble de paramétrages.
*   Facilité de maintenance : les feuilles de styles ont la propriété de modifier l’apparence de tous les objets qui les utilisent. Changer, par exemple, la taille de la police dans une feuille de style changera la taille de la police pour tous les objets qui utilisent cette feuille de style.
*   Contrôle du développement multi-plate-forme : les feuilles de style peuvent s'appliquer aux deux plate-formes macOS et Windows, ou bien à l'une d'elles uniquement. Lorsqu'une feuille de style est appliquée, 4D utilise automatiquement la feuille de style appropriée.

### Fichiers feuilles de style

4D accepte trois fichiers feuilles de style spécifiques :

| Feuille de style        | Plateforme                                                              |
| ----------------------- | ----------------------------------------------------------------------- |
| styleSheets.css         | Feuille de style globale par défaut pour macOS et Windows               |
| styleSheets_mac.css     | Pour définir des styles d'attributs spécifiques de macOS uniquement     |
| styleSheets_windows.css | Pour définir des styles d'attributs spécifiques pour Windows uniquement |

Ces fichiers sont stockés dans le dossier "/SOURCES" du projet.


### Architecture des feuilles de style

Bien qu'elle soient adaptées aux besoins spécifiques des formulaires 4D, les feuilles de style des bases projet respectent généralement la syntaxe et la grammaire [CSS](https://www.w3schools.com/css/).

Chaque règle de style d'une feuille de style contient deux parties :

*   un *sélecteur* - Un sélecteur définit où appliquer le style. 4D prend en charge les sélecteurs "object type", "object name", "class", "all objects", et "attribute value".

*   une *déclaration* - La déclaration définit le style à appliquer. Plusieurs lignes de déclaration peuvent être regroupées pour former un bloc de déclaration. Chaque ligne d'un bloc de déclaration CSS doit se terminer par un point-virgule et l'intégralité du bloc doit être entourée d'accolades.



## Sélecteurs de feuilles de style


### Type d'objet

Corresponding to the CSS element selector, the object type defines the type of object to style.

Specify the object, then in curly braces, declare the style(s) to apply.

In the following example, all objects of the *button* type will display text in the Helvetica Neue font, with a size of 20 pixels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

To apply the same style to multiple types of objects, specify the objects separated by a "," then in curly braces, declare the style(s) to apply:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Nom d'objet

Corresponding to the CSS ID selector, the object name defines a specific object to style since the object's name is unique within the form.

Designate the object with a "#" character before the object's name, then in curly braces, declare the style(s) to apply.

In the following example, the text of the object with the name "okButton" will be displayed in Helvetica Neue font, with a size of 20 pixels:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```



### Class

Corresponding to the CSS class selector, the class defines the style for all form objects with the `class` attribute.

You can specify the classes to use with a "." character followed by the name of the class, and in curly braces, declare the style(s) to apply.

In the following example, the text of all objects with the `okButtons` class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

To designate that a style should be applied only to objects of a distinct type, specify the type followed by "." and the name of the class, then in curly braces, declare the style(s) to apply.

```
text.center {
  text-align: center;
  stroke: red;
}
```

In the 4D form description, you associate a class name to an object using the `class` attribute. This attribute contains one or several class names, separated by a space character:

```
class: "okButtons important"             
```


### Tous les objets

Corresponding to the CSS universal selector, the "*" character indicates that the following style will be applied to all objects on the form.

Designate that a style should apply to all form objects with the "*" character, then in curly braces, declare the style(s) to apply.

In the following example, all objects will have a gray fill:

```
* {
  fill: gray;
}
```


### Attributs spécifiques

Corresponding to the CSS attribute selector, styles can be applied to all form objects with a specific attribute.

Specify the attribute within brackets, then in curly braces, declare the style(s) to apply.

In the following example, all objects with the `borderStyle` attribute will have purple lines:

```
[borderStyle]
{
     stroke: purple;
}
```

To designate that a style should be applied to all objects that have a specific attribute and word, use the `[attribute~="value"]` syntax:

```
[text~=Hello]
{
     stroke: blue;
}

```

To designate that a style should be applied to distinct object types with a specific attribute and value, use the `object type[attribute="value"]` syntax:


```
text[text=Hello]
{
     stroke: blue;
}
```


To designate that a style should be applied to certain object types with a specific attribute whose value begins with a specific value, use the `object type[attribute|="value"]` syntax:

```
text[text|=Hello]
{
     stroke: yellow;
}
```


## Déclarations de feuilles de style

The majority of form object attributes can be defined within a style sheet, except the following attributes:
    - "method"
    - "type"
    - "class"
    - "event"
    - choiceList, excludedList, labels, list, requiredList (list type)

Form object attributes can be declared with their JSON name as CSS attributes (not including object types, methods, events, and lists). For more information, see the **Dynamic Forms** page in the Design Reference.

### Attribute Mapping

The attributes listed below are able to accept either the 4D name or the CSS name.

| 4D             | CSS              |
| -------------- | ---------------- |
| borderStyle    | border-style     |
| fill           | background-color |
| fontFamily     | font-family      |
| fontSize       | font-size        |
| fontStyle      | font-style       |
| fontWeight     | font-weight      |
| stroke         | color            |
| textAlign      | text-align       |
| textDecoration | text-decoration  |
| verticalAlign  | vertical-align   |
> 4D-specific values (*e.g.*, "sunken") are not supported when using CSS attribute names.


### Specific Attribute Values

- For `icon`, `picture`, and `customBackgroundPicture` attributes that support a path to an image, the syntax is:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* absolute path */
icon: url("edit.png"); /* relative path to the form file */
```

- For `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` and `verticalLineStroke`, three syntaxes are supported:

    - css color name: `fill: red;`
    - hexa value: `fill: #FF0000;`
    - the `rgb()` function: `fill:rgb(255,0,0)`

- If a string uses forbidden characters in CSS, you can surround the string with simple or double quotes. Par exemple:
    - a xliff reference: `tooltip: ":xliff:CommonMenuFile";`
    - a datasource with a field expression: `dataSource: "[Table_1:1]ID:1";`


## Ordre de priorité

4D projects prioritizes conflicting style definitions first by the form definition, then by the style sheets.


### JSON vs Style Sheet

If an attribute is defined in the JSON form description and a style sheet, 4D will use the value in the JSON file.

To override this behavior, the style value must be followed with an `!important` declaration.

**Example 1:**

| JSON form description | Feuille de style | 4D displays |
| --------------------- | ---------------- | ----------- |
| `"text": "Button",`   | `text: Edit;`    | `"Button"`  |


**Example 2:**

| JSON form description | Feuille de style         | 4D displays |
| --------------------- | ------------------------ | ----------- |
| `"text": "Button",`   | `text: Edit !important;` | `"Edit"`    |



### Feuilles de style multiples

A l'exécution, 4D hiérarchise automatiquement les feuilles de style dans l'ordre suivant :

1.  Le formulaire 4D chargera d’abord le fichier CSS par défaut `/SOURCES/styleSheets.css`.
2.  Il chargera ensuite le fichier CSS pour la plate-forme courante `/SOURCES/styleSheets\_mac.css` ou `/SOURCES/styleSheets_windows.css`.
3.  S'il existe, il chargera alors un fichier CSS spécifique défini dans le formulaire JSON :

    *   un fichier pour les deux plateformes :

    ```
    "css": "<path>" 
    ```

    *   ou une liste de fichiers pour les deux plateformes :

    ```
    "css": [
         "<path1>",
         "<path2>" 
          ],
    ```

    *   ou une liste de fichiers par plateforme :

    ```
     "css": [
            {"path": "<path>", "media": "mac"},
            {"path": "<path>", "media": "windows"},
        ],
    ```

> Les chemins de fichiers peuvent être relatifs ou absolus. * Les chemins relatifs sont résolus par rapport au fichier de description de formulaire JSON. *  For security reasons, only filesystem paths are accepted for absolute paths. (*e.g.*, "/RESOURCES", "/DATA")








## Création ou modification d'une feuille de style

Vous créez des feuilles de styles à partir d'un éditeur de feuilles de styles de votre choix, en sauvegardant le fichier sous une extension ".css" dans le dossier "/SOURCES" du projet.

La Boîte à Outils fournit une page **Feuilles de style** sous forme de raccourci pour créer et modifier l'une des trois feuilles de style nommées en fonction de la plateforme.

1.  Ouvrez la page **Styles** en choisissant la **Boîte à outils > Styles ** dans le menu Développement ou en cliquant sur l'icône **Boîte à outils** dans la barre d'outils de l'éditeur de formulaire.

    ![](assets/en/FormEditor/stylesheets.png)

2.  Choisissez le type de feuille de style que vous souhaitez créer et cliquez sur le bouton **Créer** ou **Editer** : ![](assets/en/FormEditor/createButton.png)

3. La feuille de style s'ouvrira dans votre éditeur de texte par défaut.  
