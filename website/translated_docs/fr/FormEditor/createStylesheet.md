---
id: stylesheets
title: Feuilles de style (style sheets)
---

## Aperçu

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

Bien qu'elle soient adaptées aux besoins spécifiques des formulaires 4D, les feuilles de style des bases projet respectent généralement la syntaxe et la grammaire CSS2.

Chaque règle de style d'une feuille de style contient deux parties :

*   a *Selector* - A selector defines where to apply the style. 4D prend en charge les sélecteurs "object type", "object name", "class", "all objects", et "attribute value".

*   a *Declaration* - The declaration defines the actual style to apply. Plusieurs lignes de déclaration peuvent être regroupées pour former un bloc de déclaration. Chaque ligne d'un bloc de déclaration CSS doit se terminer par un point-virgule et l'intégralité du bloc doit être entourée d'accolades.



## Sélecteurs de feuilles de style


### Type d'objet

Le type d'objet définit le type d'objet à styler et correspond au sélecteur d'élément CSS.

Specify the object type, then in curly braces, declare the style(s) to apply.

> The object type corresponds to the JSON [type](FormObjects/properties_Object.md#type) property of form objects.

In the following example, all objects of the *button* type will display text in the Helvetica Neue font, with a size of 20 pixels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

To apply the same style to multiple types of objects, specify the object types separated by a "," then in curly braces, declare the style(s) to apply:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Nom d'objet

Corresponding to the CSS **ID selector**, the object name defines a specific object to style since the object's name is unique within the form.

Désignez l'objet avec le caractère "#" avant le nom de l'objet, puis entre accolades, déclarez le(s) style(s) à appliquer.

Dans l'exemple suivant, le texte de l'objet portant le nom "okButton" sera affiché dans la police Helvetica Neue, avec une taille de 20 pixels :

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```



### Class

Corresponding to the CSS **class selector**, the class defines the style for all form objects with the `class` attribute.

Vous pouvez spécifier les classes à utiliser avec un caractère "." suivi du nom de la classe et, entre accolades, déclarez le(s) style(s) à appliquer.

Dans l'exemple suivant, le texte de tous les objets de la classe `okButtons` sera affiché dans la police Helvetica Neue, avec une taille de 20 pixels, alignée au centre :

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

Pour indiquer qu'un style doit être appliqué uniquement à des objets de type différent, spécifiez le type suivi de "." et du nom de la classe, puis déclarez entre accolades le(s) style(s) à appliquer.

```
text.center {
  text-align: center;
  stroke: red;
}
```

Dans la description du formulaire 4D, vous associez un nom de classe à un objet à l'aide de l'attribut `class`. Cet attribut contient un ou plusieurs noms de "class", séparés par un espace :

```
class: "okButtons important"             
```


### Tous les objets

Corresponding to the CSS **universal selector**, the "*" character indicates that the following style will be applied to all objects on the form.

Indiquez qu'un style doit s'appliquer à tous les objets de formulaire avec le caractère "*", puis, entre accolades, déclarez le(s) style(s) à appliquer.

Dans l'exemple suivant, tous les objets auront un fond gris :

```
* {
  fill: gray;
}
```


### Attributs spécifiques

Corresponding to the CSS **attribute selectors**, styles can be applied to all form objects with a specific attribute.

Spécifiez l'attribut entre parenthèses, puis entre accolades, déclarez le(s) style(s) à appliquer.

#### Syntaxes prises en charge

| Syntaxe                    | Description                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [attribute]                | les objets ayant un `attribute`                                                                                             |
| [attribute="valeur"]       | les objets dont la valeur de l'`attribute` correspond à la "valeur" indiquée                                                |
| [attribute~="valeur"]      | les objets dont la valeur de l'`attribute` correspond à la "valeur" présente dans une liste de mots séparés par des espaces |
| [attribute&#124;="valeur"] | les objets dont l'`attribute` contient une valeur qui commence par celle de "valeur"                                        |

#### Exemples

Tous les objets ayant l'attribut `borderStyle` auront des lignes violettes :

```
[borderStyle]
{
     stroke: purple;
}
```

Tous les objets de type texte ayant un attribut text dont la valeur est "Hello" auront des lettres bleues :


```
text[text=Hello]
{
     stroke: blue;
}
```

Tous les objets ayant un attribut text dont la valeur est "Hello" auront des traits bleus :

```
[text~=Hello]
{
     stroke: blue;
}

```

Tous les objets de type texte ayant un attribut text dont la valeur commence par "Hello" auront des lettres jaunes :

```
text[text|=Hello]
{
     stroke: yellow;
}
```


## Déclarations de feuilles de style

La majorité des attributs d'objet formulaire peuvent être définis dans une feuille de style, à l'exception des attributs suivants :
    - "method"
    - "type"
    - "type"
    - "class"
    - choiceList, excludedList, labels, list, requiredList (type liste)

Les attributs d'objet formulaire peuvent être déclarés avec leur nom JSON en tant qu'attributs CSS (à l'exclusion des types d'objet, méthodes, événements et listes). For more information, see the **Dynamic Forms** page in the Design Reference.

### Mappage d'attributs

Les attributs répertoriés ci-dessous peuvent accepter le nom 4D ou le nom CSS.

| 4D             | CSS              |
| -------------- | ---------------- |
| borderStyle    | border-style     |
| border-style   | background-color |
| fontFamily     | font-family      |
| fontSize       | font-size        |
| fontStyle      | font-style       |
| fontWeight     | font-weight      |
| stroke         | color            |
| textAlign      | text-align       |
| textDecoration | text-decoration  |
| verticalAlign  | vertical-align   |
> 4D-specific values (*e.g.*, "sunken") are not supported when using CSS attribute names.


### Valeurs d'attributs spécifiques

- Pour les attributs `icon`, `picture`, et `customBackgroundPicture` qui prennent en charge un chemin vers une image, la syntaxe est la suivante :

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* chemin absolu */
icon: url("edit.png"); /* chemin relatif vers le fichier du formulaire */
```

- Pour `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` et `verticalLineStroke`, trois syntaxes sont prises en charge :

    - nom de la couleur css : `fill: red;`
    - valeur valeur hexadécimale : `fill: #FF0000;`
    - fonction `rgb()` : `fill:rgb(255,0,0)`

- Si une chaîne utilise des caractères interdits en CSS, vous pouvez l'entourer de guillemets simples ou doubles. Par exemple:
    - une référence xliff : `tooltip: ":xliff:CommonMenuFile";`
    - un datasource avec l'expression de champ : `dataSource: "[Table_1:1]ID:1";`


## Ordre de priorité

Les projets 4D hiérarchisent les définitions de style en conflit, d'abord par la définition du formulaire, puis par les feuilles de style.


### JSON vs Feuille de style

Si un attribut est défini dans la description du formulaire JSON et dans une feuille de style, 4D utilisera la valeur du fichier JSON.

Pour remplacer ce comportement, la valeur du style doit être suivie d'une déclaration `! Important`.

**Exemple 1 :**

| Description du formulaire JSON | Feuille de style | 4D affiche |
| ------------------------------ | ---------------- | ---------- |
| `"text": "Button",`            | `text: Edit;`    | `"Button"` |


**Exemple 2 :**

| Description du formulaire JSON | Feuille de style         | 4D affiche |
| ------------------------------ | ------------------------ | ---------- |
| `"text": "Button",`            | `text: Edit !important;` | `"Edit"`   |



### Feuilles de style multiples

A l'exécution, 4D hiérarchise automatiquement les feuilles de style dans l'ordre suivant :

1.  Le formulaire 4D chargera d’abord le fichier CSS par défaut `/SOURCES/styleSheets.css`.
2.  Il chargera ensuite le fichier CSS pour la plate-forme courante `/SOURCES/styleSheets__mac.css` ou `/SOURCES/styleSheets_windows.css`.
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

> Les chemins de fichiers peuvent être relatifs ou absolus. * Les chemins relatifs sont résolus par rapport au fichier de description de formulaire JSON. * Pour des raisons de sécurité, seuls les chemins de système de fichiers (filesystem) sont acceptés pour les chemins absolus. (*e.g.*, "/RESOURCES", "/DATA")








## Création ou modification d'une feuille de style

Vous créez des feuilles de styles à partir d'un éditeur de feuilles de styles de votre choix, en sauvegardant le fichier sous une extension ".css" dans le dossier "/SOURCES" du projet.

The 4D Tool Box provides a **Style Sheets** page as a shortcut option to create and edit one of three platform-specific named style sheets.

1.  Open the **Style Sheets** page by choosing the **Tool Box > Style Sheet** from the Design menu or click on the **Tool Box** icon in the Form Editor toolbar.

    ![](assets/en/FormEditor/stylesheets.png)

2.  Select the type of style sheet to create and click on the **Create** or **Edit** button: ![](assets/en/FormEditor/createButton.png)

3. La feuille de style s'ouvrira dans votre éditeur de texte par défaut.  
