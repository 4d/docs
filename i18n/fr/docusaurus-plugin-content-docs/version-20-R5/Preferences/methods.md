---
id: methods
title: Page Méthodes
---

This page contains parameters defining the Code Editor interface and its default display as well as options concerning its operation. Elle est divisée en deux parties, accessibles via les onglets Thèmes et Options.

## Thèmes

This page allows selecting, creating, or configuring Code Editor themes. Un thème définit la police, la taille de la police, les couleurs et les styles des éléments de l'éditeur de code.

![](../assets/en/Preferences/themes.png)

### Liste des thèmes

Sélectionnez, dans cette liste, le thème à appliquer à l'éditeur de code. Tous les thèmes disponibles sont affichés, y compris les thèmes personnalisés (le cas échéant). 4D propose deux thèmes par défaut :

- **Default Light Theme**
- **Default Dark Theme**

> Les thèmes par défaut ne peuvent être ni modifiés ni supprimés.

A **myTheme** theme is automatically added if you already customized Code Editor styles in previous 4D releases.

### Création de thèmes personnalisés

Vous pouvez créer des thèmes à personnaliser entièrement. To create a theme, select an existing theme and click on the **+** at the bottom of the theme list. You can also add customized themes by copying theme files in the `4D Editor Themes` folder (see below).

### Fichiers de thèmes personnalisés

Each custom theme is stored in a single JSON file named _themeName.json_ The JSON files for custom themes are stored in the `4D Editor Themes` folder located at the same level as the 4D [preferences file](overview.md#storage).

If key values are not defined in a custom theme, they default to the values from the _Default Light Theme_. If a JSON theme file is invalid, the _Default Light Theme_ is loaded and an error is generated.

> Lorsqu'un fichier de thème est modifié par un éditeur externe, 4D doit être redémarré pour prendre en compte la ou les modifications.

## Définition d'un thème

Définir un thème signifie :

- définir une police et une taille de police pour l'ensemble de l'éditeur de code,
- attribuer des styles et des couleurs spécifiques à chaque élément de langage 4D (champs, tables, variables, paramètres, SQL, etc.), à chaque élément de langage SQL (mots-clés, fonctions, etc.) et aux fonds de couleur.

La combinaison de couleurs et de styles différents est particulièrement utile à des fins de maintenance du code.

### Police et taille de police

The **font** and **font size** menus allows you to select the font name and size used in the Code Editor entry area for all categories.

### Langage 4D et langage SQL

Vous pouvez définir différents styles et couleurs de police (couleur de police ou couleur de fond) pour chaque type d'élément de langage. Vous pouvez sélectionner le ou les éléments à personnaliser dans la liste Catégorie.

### Autres styles

These options configure the various colors used in the Code Editor and debugger interfaces.

![](../assets/en/Preferences/categories.png)

|                                                                | Description                                                                                                                                                                              |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Couleur de la police**                                       | Background color of Code Editor window.                                                                                                                                  |
| **Bordure de la ligne en cours d'exécution dans le débogueur** | Color of the border surrounding the line currently running in the debugger when the "Highlight line running" option is enabled in the [Options](#options) page.          |
| **Couleur de fond de la ligne du curseur**                     | Couleur de fond de la ligne contenant le curseur.                                                                                                                        |
| **Couleur de fond de la ligne en cours d'exécution**           | Couleur de fond de la ligne en cours d'exécution dans le débogueur.                                                                                                      |
| **Mise en évidence des mots trouvés**                          | Couleur de surlignage des mots trouvés à l'issue d'une recherche.                                                                                                        |
| **Mise en évidence des parenthèses**                           | Highlight color of corresponding parentheses (used when pairs of parentheses are signaled by highlighting, see [Options](#options)).                  |
| **Mise en évidence des blocs**                                 | Highlight color for selected logical blocks when the "Highlight logical blocks" option is enabled in the [Options](#options).                                            |
| **Mise en évidence de la même variable ou du même champ**      | Highlight color for other occurrences of the same variable or field text when one of the "Highlighting variables and text" option is enabled in the [Options](#options). |
| **Mise en évidence de la ligne courante dans le débogueur**    | Highlight color of the line currently running in the debugger when the "Highlight line running" option is enabled in the [Options](#options).                            |
| **Couleur de fond de la sélection**                            | Couleur de fond de la sélection.                                                                                                                                         |
| **Texte suggéré**                                              | Color of autocomplete text suggested by the Code Editor.                                                                                                                 |

## Options

This page configures Code Editor display options.

![](../assets/en/Preferences/options.png)

### Options

#### Langage de programmation 4D (Utiliser les paramètres régionaux du système)

Permet de désactiver/activer les paramètres du code "international" pour l'application 4D locale.

- **unchecked** (default): English-US settings and the English programming language are used in 4D methods.
- **checked**: Regional settings are used in 4D methods.

> Si vous modifiez cette option, vous devez redémarrer l'application 4D pour que le changement soit pris en compte.

#### Indentation

Changes the indentation value for the 4D code in the Code Editor. La largeur doit être définie en points (10 par défaut).

Le code 4D est automatiquement indenté afin de faire apparaître sa structure :

![](../assets/en/Preferences/optionsIndent.png)

Modifier cette valeur par défaut peut être utile si vos méthodes contiennent des algorithmes complexes avec de nombreux niveaux d'intégration. Une indentation plus étroite peut être utilisée afin de limiter le défilement horizontal.

#### Afficher les numéros de ligne

Lets you display the line numbers by default in each window of the Code Editor. You can also show/hide line numbers for the current window directly from the Code Editor.

#### Afficher les listes

Lets you choose whether or not to show the lists of objects (Commands, Tables and fields, etc.) by default when the Code Editor window is opened. You can also show or hide each list directly from the Code Editor.

#### Afficher les presse-papiers

Vous permet de choisir d'afficher ou non les multiples presse-papiers dans l'éditeur de code.

![](../assets/en/Preferences/show-clipboards.png)

The corresponding [clipboard shorcuts](https://doc.4d.com/4Dv19R3/4D/19-R3/Writing-a-method.300-5612559.en.html#3977166) are still active when these clipboards are hidden.

#### Surbrillance des blocs logiques

Lorsque vous cochez l'option, tout le code correspondant à un bloc logique (Si/Fin de si par exemple) est surligné lorsque la souris est placée au-dessus de l'icône plier/déplier :

![](../assets/en/Preferences/optionsLogicalBlocks.png)

The highlight color can be set in the [Theme](#theme-definition) page.

#### Toujours afficher les lignes de blocs

Permet de cacher de façon permanente les lignes verticales de blocs. Les lignes de blocs sont conçues pour visualiser les blocs logiques. Par défaut, elles sont toujours affichées, excepté lorsque les icônes plier/déplier sont masquées (voir ci-dessous).

![](../assets/en/Preferences/optionsBlockLines.png)

#### Masquer les icônes plier/déplier

Permet de masquer, par défaut, toutes les icônes plier/déplier lorsque vous affichez le code. Lorsque cette option est cochée, les icônes plier/déplier (ainsi que les lignes de blocs locales, voir ci-dessus) sont affichées temporairement lorsque la souris survole une icône :

![](../assets/en/Preferences/optionsHideIcons.png)

#### Insérer () et ajouter } ) ] " fermants

Active l'insertion automatique de () et de caractères fermants lors de la saisie du code. Cette option contrôle deux fonctionnalités automatiques :

- **parentheses pair ()**: Added after a 4D command, keyword or project method inserted from a suggestion or completion list, if the inserted element requires one or more mandatory arguments. Par exemple, si vous tapez "C_OB" et vous appuyez sur la touche Tab, 4D écrit "C_OBJECT()" et place le point d'insertion à l'intérieur du ().

- **closing }, ), ], or "**: Character added when you type respectively an opening {, (, ], or ". Cette fonction permet d'insérer des paires de symboles correspondants au point d'insertion ou autour d'un texte sélectionné. Par exemple, si vous mettez en surbrillance une chaîne de caractères et que vous tapez un simple caractère ", toute la chaîne sélectionnée sera entourée de "" :

![](../assets/en/Preferences/optionsClosing.png)\
![](../assets/en/Preferences/optionsClosing2.png)

#### Correspondance \[]\(){}

Permet de modifier la signalisation graphique des caractères d'encadrement correspondants dans le code. Cette signalisation apparaît lorsqu’un crochet, une parenthèse ou une accolade est sélectionné(e).
Les options suivantes sont disponibles :

- **None**: No signaling
- **Rectangle** (default): Braces surrounded by a black line\
  ![](../assets/en/Preferences/optionsRectangle.png)
- **Background Color**: Braces highlighted (the color is set in the [Theme](#theme-definition) page).
- **Bold**: Braces displayed in bold.

#### Surbrillance des variables et champs

Permet de mettre en surbrillance toutes les occurrences d'un(e) même variable ou champ dans une fenêtre de méthode ouverte.

![](../assets/en/Preferences/optionsVariables.png)

- **No**(default): No highlight
- **On cursor**: All occurrences are highlighted when the text is clicked
- **On selection**: All occurrences are highlighted when the text is selected

The highlight color can be set in the [Theme](#theme-definition) page.

#### Mode trace (Surbrillance de la ligne en exécution)

Permet de mettre en surbrillance la ligne en exécution dans le Débogueur, en plus de la flèche jaune.

![](../assets/en/Preferences/optionsLine.png)

Si vous désélectionnez cette option, seule la flèche jaune est affichée.

### Suggestions

This area lets you configure autocomplete mechanisms in the Code Editor to adapt it to your own work habits.

|                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Affichage automatique de la fenêtre | Triggers the automatic display of the suggestion window for:<ul><li>Constants</li><li>Variables (local and interprocess) and object attributes</li><li>Tables</li><li>Prototypes (_i.e._, class functions)</li></ul><p>For example, when the "Variables (local or interprocess) and object attributes" option is checked, a list of suggestions appears when you type the $ character:</p><p>![](../assets/en/Preferences/suggestionsAutoOpen.png)</p> You can disable this functioning for certain elements of the language by deselecting their corresponding option.                                                                                                                                                                                                                                                                                                                                                                                         |
| Validation d'une suggestion         | Sets the entry context that allows the Code Editor to validate automatically the current suggestion displayed in the autocomplete window.<ul><li>**Tab and delimiters**<br/>When this option is selected, you can validate the current selection with the Tab key or any delimiter that is relevant to the context. Par exemple, si vous entrez "ALE" et ensuite "(", 4D écrit automatiquement "ALERT(" dans l'éditeur. Here is the list of delimiters that are taken into account:<br/> ( ; : = < [ {</li><li>**Tab only**<br/>When this option is selected, you can only use the Tab key to insert the current suggestion. This can be used more particularly to facilitate the entry of delimiter characters in element names, such as ${1}.**Note**: You can also double-click in the window or press the Carriage return key to validate a suggestion.</li></ul> |
