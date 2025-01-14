---
id: stylesheets
title: Feuilles de style (style sheets)
---


Une feuille de style regroupe une combinaison d’attributs d'objets formulaire —  allant des attributs de texte à quasiment tous les attributs d'objet disponibles.

Outre l’harmonisation de l’interface de vos applications, l’usage de feuilles de style a trois avantages majeurs :

* Gain de temps en développement : pour chaque objet, vous définissez en une seule opération un ensemble de paramétrages.
* Facilité de maintenance : les feuilles de styles ont la propriété de modifier l’apparence de tous les objets qui les utilisent. Changer, par exemple, la taille de la police dans une feuille de style changera la taille de la police pour tous les objets qui utilisent cette feuille de style.
* Contrôle du développement multi-plate-forme : les feuilles de style peuvent s'appliquer aux deux plate-formes macOS et Windows, ou bien à l'une d'elles uniquement. Lorsqu'une feuille de style est appliquée, 4D utilise automatiquement la feuille de style appropriée.

## Fichiers feuilles de style

4D accepte trois fichiers feuilles de style spécifiques :

| Feuille de style        | Plate-forme                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| styleSheets.css         | Feuille de style globale par défaut pour macOS et Windows               |
| styleSheets_mac.css     | Pour définir des styles d'attributs spécifiques de macOS uniquement     |
| styleSheets_windows.css | Pour définir des styles d'attributs spécifiques pour Windows uniquement |

Ces fichiers sont stockés dans le dossier "/SOURCES" du projet. Ils sont également accessibles directement via le [CSS Preview](formEditor.md#css-preview) dans la barre d'outils de l'éditeur de formulaires.

## Architecture des feuilles de style

Bien qu'elles soient adaptées pour répondre aux besoins spécifiques des formulaires 4D, les feuilles de style pour les projets d'application suivent généralement la syntaxe et la grammaire des CSS2.

Chaque règle de style d'une feuille de style contient deux parties :

* un *sélecteur* - Un sélecteur définit où appliquer le style. 4D prend en charge les sélecteurs "object type", "object name", "class", "all objects", et "attribute value".

* une *déclaration* - La déclaration définit le style à appliquer. Plusieurs lignes de déclaration peuvent être regroupées pour former un bloc de déclaration. Chaque ligne d'un bloc de déclaration CSS doit se terminer par un point-virgule et l'intégralité du bloc doit être entourée d'accolades.

## Sélecteurs de feuilles de style

### Type d'objet

Le type d'objet définit le type d'objet à styler et correspond au sélecteur d'élément CSS.

Spécifiez le type d'objet, puis entre accolades, déclarez le(s) style(s) à appliquer.

> Le type d'objet correspond à la propriété JSON [ type](FormObjects/properties_Object.md#type) des objets de formulaire.

Dans l'exemple suivant, tous les objets du type *bouton* afficheront du texte dans la police Helvetica Neue, d'une taille de 20 pixels :

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

Pour appliquer le même style à plusieurs types d’objets, spécifiez les types d'objets séparés par une "," puis, entre accolades, déclarez le(s) style(s) à appliquer :

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Nom d'objet

Le nom de l'objet correspond au **ID selector** CSS et définit un objet spécifique à styler, puisque que ce nom est unique dans le formulaire.

Désignez l'objet avec le caractère "#" avant le nom de l'objet, puis entre accolades, déclarez le(s) style(s) à appliquer.

Dans l'exemple suivant, le texte de l'objet portant le nom "okButton" sera affiché dans la police Helvetica Neue, avec une taille de 20 pixels :

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

### Class

Class correspond au **class selector** CSS et définit un objet le style de tous les objets formulaires de l'attribut `class`.

Vous pouvez spécifier les classes à utiliser avec un caractère "." suivi du nom de la classe et, entre accolades, déclarer le(s) style(s) à appliquer.

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

Le caractère "*" correspond au **universal selector** CSS et indique que le style qui suit sera appliqué à tous les objets du formulaire.

Indiquez qu'un style doit s'appliquer à tous les objets de formulaire avec le caractère "*", puis, entre accolades, déclarez le(s) style(s) à appliquer.

Dans l'exemple suivant, tous les objets auront un fond gris :

```
* {
  fill: gray;
}
```

### Attributs spécifiques

Les styles correspondent aux **sélecteurs d'attributs** et peuvent s'appliquer à tous les objets du formulaire avec un attribut spécifique.

Spécifiez l'attribut entre parenthèses, puis entre accolades, déclarez le(s) style(s) à appliquer.

#### Syntaxes prises en charge

| Syntaxe                    | Description                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [attribute]                | les objets ayant un `attribute`                                                                                           |
| [attribute="valeur"]       | les objets dont la valeur de l'`attribute` correspond à la "valeur" indiquée                                              |
| [attribute~="valeur"]      | les objets dont la valeur de `attribute` correspond à la "valeur" présente dans une liste de mots séparés par des espaces |
| [attribute&#124;="valeur"] | les objets dont `attribute` contient une valeur qui commence par celle de "valeur"                                        |

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

### Media Queries

Les Media queries sont utilisées pour appliquer des schémas de couleurs à une application.

Une media query est composée d'une fonctionnalité média et d'une valeur (par ex. `\&#060;fonctionnalité média&#062;:\&#060;value&#062;`).

Fonctionnalités média disponibles :

* `prefers-color-scheme`

Expressions de fonctionnalité média disponibles :

* **light**<br/>Pour utiliser un schéma de couleur clair
* **dark**<br/>Pour utiliser un schéma de couleur sombre

> Les schémas de couleurs sont pris en charge sur macOS uniquement.

##### Exemple

Cette CSS définit une combinaison de couleurs pour le texte et l'arrière-plan du texte dans le schéma clair (par défaut) et une autre combinaison lorsque le schéma sombre est sélectionné :

```
@media (prefers-color-scheme: light) {
 .textScheme {
   fill: LightGrey;
   stroke: Black;
  }
}

@media (prefers-color-scheme: dark) {
  .textScheme {
    fill: DarkSlateGray;
    stroke: LightGrey;
  }
}
```

### Attributs d'objets

La majorité des attributs d'objet formulaire peuvent être définis dans une feuille de style, à l'exception des attributs suivants :

* `method`
* `type`
* `class`
* `event`
* `choiceList`, `excludedList`, `labels`, `list`, `requiredList` (list type)

Les attributs d'objet formulaire peuvent être déclarés avec leur [nom JSON](FormObjects/properties_Reference.md) en tant qu'attributs CSS (à l'exclusion des types d'objet, méthodes, événements et listes).

#### Correspondance d'attributs

Les attributs répertoriés ci-dessous peuvent accepter le nom 4D ou le nom CSS.

| 4D               | CSS                |
| ---------------- | ------------------ |
| `borderStyle`    | `border-style`     |
| `fill`           | `background-color` |
| `fontFamily`     | `font-family`      |
| `fontSize`       | `font-size`        |
| `fontStyle`      | `font-style`       |
| `fontWeight`     | `font-weight`      |
| `stroke`         | `color`            |
| `textAlign`      | `text-align`       |
| `textDecoration` | `text-decoration`  |
| `verticalAlign`  | `vertical-align`   |
> Les valeurs spécifiques à 4D (par exemple `sunken`) ne sont pas prises en charge lors de l'utilisation de noms d'attribut CSS.

#### Valeurs d'attributs spécifiques

* Pour les attributs `icon`, `picture`, et `customBackgroundPicture` qui prennent en charge un chemin vers une image, la syntaxe est la suivante :

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* chemin absolu */
icon: url("edit.png"); /* chemin relatif vers le fichier du formulaire */
```

* Pour `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` et `verticalLineStroke`, trois syntaxes sont prises en charge :

  * Nom la couleur CSS : `fill: red;`
  * Valeur hexadécimale : `fill: #FF0000;`
  * fonction `rgb()` : `fill:rgb(255,0,0)`

* Si une chaîne utilise des caractères interdits en CSS, vous pouvez l'entourer de guillemets simples ou doubles. Par exemple :
  * une référence xliff : `tooltip: ":xliff:CommonMenuFile";`
  * un datasource avec l'expression de champ : `dataSource: "[Table_1:1]ID:1";`

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

1. Le formulaire 4D chargera d’abord le fichier CSS par défaut `/SOURCES/styleSheets.css`.
2. Il chargera ensuite le fichier CSS pour la plate-forme courante `/SOURCES/styleSheets__mac.css` ou `/SOURCES/styleSheets_windows.css`.
3. S'il existe, il chargera alors un fichier CSS spécifique défini dans le formulaire JSON :

* un fichier pour les deux plates-formes :

 ```
 "css": "<path>" 
 ```

* ou une liste de fichiers pour les deux plates-formes :

 ```
 "css": [
      "<path1>",
      "<path2>" 
       ],
 ```

* ou une liste de fichiers par plate-forme :

 ```
  "css": [
         {"path": "<path>", "media": "mac"},
         {"path": "<path>", "media": "windows"},
     ],
 ```

> Les chemins de fichiers peuvent être relatifs ou absolus.
> 
> * Les chemins relatifs sont résolus par rapport au fichier de description de formulaire JSON.
> * Pour des raisons de sécurité, seuls les chemins filesystem sont acceptés pour les chemins absolus. (*ex :*, "/RESOURCES", "/DATA")

## Création ou modification d'une feuille de style

Vous créez des feuilles de styles à partir d'un éditeur de feuilles de styles de votre choix, en sauvegardant le fichier sous une extension ".css" dans le dossier "/SOURCES" du projet.

La Boîte à Outils fournit une page **Feuilles de style** sous forme de raccourci pour créer et modifier l'une des trois feuilles de style nommées en fonction de la plate-forme.

1. Ouvrez la page **Style Sheets** en choisissant **Tool Box > Style Sheet** dans le menu Développement ou en cliquant sur l'icône **Tool Box** dans la barre d'outils de l'éditeur de formulaires.

 ![](../assets/en/FormEditor/stylesheets.png)

2. Choisissez le type de feuille de style que vous souhaitez créer et cliquez sur le bouton **Créer** ou **Editer** : ![](../assets/en/FormEditor/createButton.png)

3. La feuille de style s'ouvrira dans votre éditeur de texte par défaut.  
