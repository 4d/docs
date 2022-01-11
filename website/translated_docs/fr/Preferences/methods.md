---
id: methods
title: Page Méthodes
---

Cette page contient des paramètres permettant de définir l’interface, l’affichage par défaut et les options de l’éditeur de méthodes. Elle est divisée en deux parties, accessibles via les onglets Thèmes et Options.

## Thèmes

Cette page permet de sélectionner, de créer ou de configurer les thèmes de l'éditeur de méthode. Un thème définit la police, la taille de la police, les couleurs et les styles des éléments de l'éditeur de code.

![](assets/en/Preferences/themes.png)

### Liste des thèmes

Sélectionnez, dans cette liste, le thème à appliquer à l'éditeur de code. Tous les thèmes disponibles sont affichés, y compris les thèmes personnalisés (le cas échéant). 4D propose deux thèmes par défaut :

*   **Default Light Theme**
*   **Default Dark Theme**

> Les thèmes par défaut ne peuvent être ni modifiés ni supprimés.

Un thème **myTheme** est automatiquement ajouté si vous avez déjà personnalisé les styles de l'éditeur de méthodes dans les précédentes versions de 4D.

### Création de thèmes personnalisés

Vous pouvez créer des thèmes à personnaliser entièrement. Pour créer un thème, sélectionnez un thème existant et cliquez sur le **+** en bas de la liste des thèmes. Vous pouvez également ajouter des thèmes personnalisés en copiant les fichiers de thème dans le dossier `4D Editor Themes` (voir ci-dessous).

### Fichiers de thèmes personnalisés

Chaque thème personnalisé est stocké dans un seul fichier JSON nommé *themeName.json*. Les fichiers JSON des thèmes personnalisés sont stockés dans le dossier `4D Editor Themes` situé au même niveau que le [fichier de préférences](overview.md#storage) de 4D.

Si des valeurs clés ne sont pas définies dans un thème personnalisé, elles prennent par défaut les valeurs du thème *Default Light Theme*. Si un fichier de thème JSON est invalide, le thème *Default Light Theme* est chargé et une erreur est générée.

> Lorsqu'un fichier de thème est modifié par un éditeur externe, 4D doit être redémarré pour prendre en compte la ou les modifications.

## Définition d'un thème

Définir un thème signifie :

- définir une police et une taille de police pour l'ensemble de l'éditeur de code,
- attribuer des styles et des couleurs spécifiques à chaque élément de langage 4D (champs, tables, variables, paramètres, SQL, etc.), à chaque élément de langage SQL (mots-clés, fonctions, etc.) et aux fonds de couleur.

La combinaison de couleurs et de styles différents est particulièrement utile à des fins de maintenance du code.

### Police et taille de police

Les menus **Police** et **Taille de la police** vous permettent de sélectionner le nom et la taille de la police utilisés dans la zone de saisie de l'éditeur de méthode pour toutes les catégories.

### Langage 4D et langage SQL

Vous pouvez définir différents styles et couleurs de police (couleur de police ou couleur de fond) pour chaque type d'élément de langage. Vous pouvez sélectionner le ou les éléments à personnaliser dans la liste Catégorie.


### Autres styles

Ces options permettent de configurer les différentes couleurs utilisées dans les interfaces de l'éditeur de méthode et du débogueur.

![](assets/en/Preferences/categories.png)


|                                                                | Description                                                                                                                                                                                                   |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background color**                                           | Couleur de fond de la fenêtre de l'éditeur de la méthode.                                                                                                                                                     |
| **Bordure de la ligne en cours d'exécution dans le débogueur** | Couleur de la bordure entourant la ligne en cours d'exécution dans le débogueur lorsque l'option "Surligner la ligne en cours d'exécution" est activée dans la page [Options](#options).                      |
| **Couleur de fond de la ligne du curseur**                     | Couleur de fond de la ligne contenant le curseur.                                                                                                                                                             |
| **Couleur de fond de la ligne en cours d'exécution**           | Couleur de fond de la ligne en cours d'exécution dans le débogueur.                                                                                                                                           |
| **Mise en évidence des mots trouvés**                          | Couleur de surlignage des mots trouvés à l'issue d'une recherche.                                                                                                                                             |
| **Mise en évidence des parenthèses**                           | Couleur de mise en évidence des parenthèses correspondantes (utilisée lorsque des paires de parenthèses sont signalées par la mise en évidence, voir [Options](#options)).                                    |
| **Mise en évidence des blocs**                                 | Couleur de mise en évidence des blocs logiques sélectionnés lorsque l'option "Mise en évidence des blocs logiques" est activée dans les [Options](#options).                                                  |
| **Mise en évidence de la même variable ou du même champ**      | Couleur de mise en évidence pour les autres occurrences de la même variable ou du même texte de champ lorsque l'option "Mise en évidence des variables et du texte" est activée dans les [Options](#options). |
| **Mise en évidence de la ligne courante dans le débogueur**    | Couleur de mise en évidence de la ligne courante dans le débogueur lorsque l'option "Surlignage de la ligne en cours" est activée dans les [Options](#options).                                               |
| **Couleur de fond de la sélection**                            | Couleur de fond de la sélection.                                                                                                                                                                              |
| **Texte suggéré**                                              | Couleur du texte de l'autocomplétion suggéré par l'éditeur de méthode.                                                                                                                                        |



## Options


This page configures Method editor display options.

![](assets/en/Preferences/options.png)


### Options



#### 4D Programming Language (Use regional system settings)

Allows you to disable/enable the "international" code settings for the local 4D application.
- **unchecked** (default): English-US settings and the English programming language are used in 4D methods.
- **checked**: Regional settings are used in 4D methods.

> If you modify this option, you need to restart the 4D application so that the change is taken into account.

#### Indentation

Modifie la valeur d’indentation du code 4D dans l’éditeur de méthodes. La largeur doit être définie en points (10 par défaut).

Le code 4D est automatiquement indenté afin de faire apparaître sa structure :

![](assets/en/Preferences/optionsIndent.png)

Modifying this default value can be useful if your methods contain complex algorithms with many levels of embedding. Narrower indentation can be used in order to limit horizontal scrolling.

#### Show Line Numbers

Lets you display the line numbers by default in each window of the Method editor. You can also show/hide line numbers for the current window directly from the Method editor.

#### Show Lists

Lets you choose whether or not to show the lists of objects (Commands, Tables and fields, etc.) by default when the Method editor window is opened. You can also show or hide each list directly from the Method editor.

#### Highlight the logical blocks

When checked, the whole code belonging to a logical block (If/End if for example) is highlighted when the mouse is placed over the expanded node:

![](assets/en/Preferences/optionsLogicalBlocks.png)

The highlight color can be set in the [Theme](#theme-definition) page.

#### Always show block lines

Allows to hide vertical block lines permanently. The block lines are designed to visually connect nodes. By default, they are always displayed (except when collapse/expand icons are hidden, see below).

![](assets/en/Preferences/optionsBlockLines.png)

#### Hide collapse/expand icons

Allows you to hide all expand/collapse icons by default when displaying code. When the option is checked, node icons (as well as local block lines, see above), are displayed temporarily when the mouse is placed over a node:

![](assets/en/Preferences/optionsHideIcons.png)

#### Insert () and closing } ) ] "

Enables automatic insertion of () and closing braces while typing code. This option controls two automatic features:

- **parentheses pair ()**: Added after a 4D command, keyword or project method inserted from a suggestion or completion list, if the inserted element requires one or more mandatory arguments. For example, if you type "C_OB" and press Tab, 4D writes "C_OBJECT()" and sets the insertion point inside the ().

- **closing }, ), ], or "**: Character added when you type respectively an opening {, (, ], or ". This feature allows inserting matching pairs of symbols at the insertion point or surrounding a selected text. For example, if you highlight a string and type a single ", the whole selected string will be enclosed in "":

![](assets/en/Preferences/optionsClosing.png) -> " -> ![](assets/en/Preferences/optionsClosing2.png)

#### Matching [](){}""

Sets the graphic signaling of matching braces and double quotes in the code. This signaling appears whenever a square bracket, parenthesis, curly bracket, or double quote is selected. Les options suivantes sont disponibles :

- **None**: No signaling
- **Rectangle** (default): Braces/double quotes surrounded by a black line  
  ![](assets/en/Preferences/optionsRectangle.png)
- **Background Color**: Braces/double quotes highlighted (the color is set in the [Theme](#theme-definition) page).
- **Bold**: Braces/double quotes displayed in bold.

#### Highlighted variables and fields

Allows to highlight all occurrences of the same variable or field in an open method window.

![](assets/en/Preferences/optionsVariables.png)

- **No**(default): No highlight
- **On cursor**: All occurrences are highlighted when the text is clicked
- **On selection**: All occurrences are highlighted when the text is selected

The highlight color can be set in the [Theme](#theme-definition) page.

#### Debug (Highlight the line running)

Highlights the line that is currenty running in the debugger in addition to the regular yellow arrow indicator.

![](assets/en/Preferences/optionsLine.png)

If you deselect this option, only the yellow arrow is shown.

### Suggestions

This area lets you configure autocomplete mechanisms in the Method editor to adapt it to your own work habits.

|                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automatic opening of window for | Triggers the automatic display of the suggestion window for:<p> <ul><li>Constantes</li><li>Variables (local and interprocess) and object attributes</li><li>Tables</li><li>Prototypes (*i.e.*, class functions)</li></ul><p><p>For example, when the "Variables (local or interprocess) and object attributes" option is checked, a list of suggestions appears when you type the $ character:<p><p>![](assets/en/Preferences/suggestionsAutoOpen.png)<p><p>    You can disable this functioning for certain elements of the language by deselecting their corresponding option. |
| Validation of a suggestion for  | Sets the entry context that allows the Method editor to validate automatically the current suggestion displayed in the autocomplete window.<p><p><ul><li>**Tab and delimiters**<br>When this option is selected, you can validate the current selection with the Tab key or any delimiter that is relevant to the context. For example, if you enter "ALE" and then "(", 4D automatically writes "ALERT(" in the editor. Here is the list of delimiters that are taken into account:<br> ( ; : = < [ {</li><li>**Tab only**<br>When this option is selected, you can only use the Tab key to insert the current suggestion. This can be used more particularly to facilitate the entry of delimiter characters in element names, such as ${1}.<p><p>**Note**: You can also double-click in the window or press the Carriage return key to validate a suggestion.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                    |
	

