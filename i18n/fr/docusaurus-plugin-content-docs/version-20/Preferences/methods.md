---
id: methods
title: Page Méthodes
---

Cette page contient des paramètres définissant l'interface de l'éditeur de code et son affichage par défaut, ainsi que des options concernant son fonctionnement. Elle est divisée en deux parties, accessibles via les onglets Thèmes et Options.

## Thèmes

Cette page permet de sélectionner, de créer ou de configurer les thèmes de l'éditeur de code. Un thème définit la police, la taille de la police, les couleurs et les styles des éléments de l'éditeur de code.

![](../assets/en/Preferences/themes.png)

### Liste des thèmes

Sélectionnez, dans cette liste, le thème à appliquer à l'éditeur de code. Tous les thèmes disponibles sont affichés, y compris les thèmes personnalisés (le cas échéant). 4D propose deux thèmes par défaut :

*   **Default Light Theme**
*   **Default Dark Theme**

> Les thèmes par défaut ne peuvent être ni modifiés ni supprimés.

Un thème **myTheme** est automatiquement ajouté si vous avez déjà personnalisé les styles de l'éditeur de code dans des versions précédentes de 4D.

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

Les menus **Police** et **Taille de police** vous permettent de sélectionner le nom et la taille de la police utilisée dans la zone de saisie de l'éditeur de code pour toutes les catégories.

### Langage 4D et langage SQL

Vous pouvez définir différents styles et couleurs de police (couleur de police ou couleur de fond) pour chaque type d'élément de langage. Vous pouvez sélectionner le ou les éléments à personnaliser dans la liste Catégorie.


### Autres styles

Ces options permettent de configurer les différentes couleurs utilisées dans l'interface de l'éditeur de code et du débogueur.

![](../assets/en/Preferences/categories.png)


|                                                                | Description                                                                                                                                                                                                   |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Couleur de fond**                                            | Couleur d'arrière-plan de la fenêtre de l'éditeur de code.                                                                                                                                                    |
| **Bordure de la ligne en cours d'exécution dans le débogueur** | Couleur de la bordure entourant la ligne en cours d'exécution dans le débogueur lorsque l'option "Surligner la ligne en cours d'exécution" est activée dans la page [Options](#options).                      |
| **Couleur de fond de la ligne du curseur**                     | Couleur de fond de la ligne contenant le curseur.                                                                                                                                                             |
| **Couleur de fond de la ligne en cours d'exécution**           | Couleur de fond de la ligne en cours d'exécution dans le débogueur.                                                                                                                                           |
| **Mise en évidence des mots trouvés**                          | Couleur de surlignage des mots trouvés à l'issue d'une recherche.                                                                                                                                             |
| **Mise en évidence des parenthèses**                           | Couleur de mise en évidence des parenthèses correspondantes (utilisée lorsque des paires de parenthèses sont signalées par la mise en évidence, voir [Options](#options)).                                    |
| **Mise en évidence des blocs**                                 | Couleur de mise en évidence des blocs logiques sélectionnés lorsque l'option "Mise en évidence des blocs logiques" est activée dans les [Options](#options).                                                  |
| **Mise en évidence de la même variable ou du même champ**      | Couleur de mise en évidence pour les autres occurrences de la même variable ou du même texte de champ lorsque l'option "Mise en évidence des variables et du texte" est activée dans les [Options](#options). |
| **Mise en évidence de la ligne courante dans le débogueur**    | Couleur de mise en évidence de la ligne courante dans le débogueur lorsque l'option "Surlignage de la ligne en cours" est activée dans les [Options](#options).                                               |
| **Couleur de fond de la sélection**                            | Couleur de fond de la sélection.                                                                                                                                                                              |
| **Texte suggéré**                                              | Couleur du texte d'autocomplétion suggéré par l'éditeur de code.                                                                                                                                              |



## Options


Cette page configure les options d'affichage de l'éditeur de code.

![](../assets/en/Preferences/options.png)


### Options



#### Langage de programmation 4D (Utiliser les paramètres régionaux du système)

Permet de désactiver/activer les paramètres du code "international" pour l'application 4D locale.
- **non coché (par défaut)** : Les paramètres Anglais-US et la langue de programmation anglaise sont utilisés dans les méthodes 4D.
- **coché** : Les paramètres régionaux sont utilisés dans les méthodes 4D.

> Si vous modifiez cette option, vous devez redémarrer l'application 4D pour que le changement soit pris en compte.

#### Indentation

Modifie la valeur d'indentation du code 4D dans l'éditeur de code. La largeur doit être définie en points (10 par défaut).

Le code 4D est automatiquement indenté afin de faire apparaître sa structure :

![](../assets/en/Preferences/optionsIndent.png)

Modifier cette valeur par défaut peut être utile si vos méthodes contiennent des algorithmes complexes avec de nombreux niveaux d'intégration. Une indentation plus étroite peut être utilisée afin de limiter le défilement horizontal.

#### Afficher les numéros de ligne

Vous permet d'afficher les numéros de ligne par défaut dans chaque fenêtre de l'éditeur de code. Vous pouvez également afficher/masquer les numéros de ligne pour la fenêtre courante directement depuis l'éditeur de code.

#### Afficher les listes

Vous permet de choisir d'afficher ou non les listes d'objets (Commandes, Tables et champs, etc.). par défaut à l'ouverture de la fenêtre de l'éditeur de code. Vous pouvez également afficher ou masquer chaque liste directement à partir de l'éditeur de code.

#### Afficher les presse-papiers

Vous permet de choisir d'afficher ou non les multiples presse-papiers dans l'éditeur de code.

![](../assets/en/Preferences/show-clipboards.png)

Les [raccourcis du presse-papiers](https://doc.4d.com/4Dv19R3/4D/19-R3/Writing-a-method.300-5612559.en.html#3977166) correspondants demeurent actifs lorsque ces presse-papiers sont masqués.

#### Surbrillance des blocs logiques

Lorsque vous cochez l'option, tout le code correspondant à un bloc logique (Si/Fin de si par exemple) est surligné lorsque la souris est placée au-dessus de l'icône plier/déplier :

![](../assets/en/Preferences/optionsLogicalBlocks.png)

La couleur de surlignage peut être modifiée dans la page [Définition d'un thème](#définition-dun-thème).

#### Toujours afficher les lignes de blocs

Permet de cacher de façon permanente les lignes verticales de blocs. Les lignes de blocs sont conçues pour visualiser les blocs logiques. Par défaut, elles sont toujours affichées, excepté lorsque les icônes plier/déplier sont masquées (voir ci-dessous).

![](../assets/en/Preferences/optionsBlockLines.png)

#### Masquer les icônes plier/déplier

Permet de masquer, par défaut, toutes les icônes plier/déplier lorsque vous affichez le code. Lorsque cette option est cochée, les icônes plier/déplier (ainsi que les lignes de blocs locales, voir ci-dessus) sont affichées temporairement lorsque la souris survole une icône :

![](../assets/en/Preferences/optionsHideIcons.png)

#### Insérer () et ajouter } ) ] " fermants

Active l'insertion automatique de () et de caractères fermants lors de la saisie du code. Cette option contrôle deux fonctionnalités automatiques :

- **paire de parenthèses ()** : Ajoutée après une commande 4D, un mot-clé ou une méthode projet insérée à partir d'une liste de suggestions ou de complétion, si l'élément inséré nécessite un ou plusieurs arguments obligatoires. Par exemple, si vous tapez "C_OB" et vous appuyez sur la touche Tab, 4D écrit "C_OBJECT()" et place le point d'insertion à l'intérieur du ().

- **fermeture }, ), ] ou "** : caractère ajouté lorsque vous tapez respectivement une ouverture {, (, ] ou ". Cette fonction permet d'insérer des paires de symboles correspondants au point d'insertion ou autour d'un texte sélectionné. Par exemple, si vous mettez en surbrillance une chaîne de caractères et que vous tapez un simple caractère ", toute la chaîne sélectionnée sera entourée de "" :

![](../assets/en/Preferences/optionsClosing.png)  
![](../assets/en/Preferences/optionsClosing2.png)

#### Correspondance \[]\(){}

Permet de modifier la signalisation graphique des caractères d'encadrement correspondants dans le code. Cette signalisation apparaît lorsqu’un crochet, une parenthèse ou une accolade est sélectionné(e). Les options suivantes sont disponibles :

- **Aucun** : Aucun signal
- **Rectangle** (défaut): Caractères encadrés par un filet noir  
  ![](../assets/en/Preferences/optionsRectangle.png)
- **Couleur de fond** : Caractères mis en surbrillance (la couleur est définie dans la page [Thème](thèmes)).
- **Gras** : caractères affichés en gras.

#### Surbrillance des variables et champs

Permet de mettre en surbrillance toutes les occurrences d'un(e) même variable ou champ dans une fenêtre de méthode ouverte.

![](../assets/en/Preferences/optionsVariables.png)

- **Non** (par défaut) : Pas de surbrillance
- **Sur curseur** : Toutes les occurrences sont mises en évidence lorsque le texte est cliqué
- **Sur sélection** : Toutes les occurrences sont mises en évidence lorsque le texte est sélectionné

La couleur de surlignage peut être modifiée dans la page [Définition d'un thème](#définition-dun-thème).

#### Mode trace (Surbrillance de la ligne en exécution)

Permet de mettre en surbrillance la ligne en exécution dans le Débogueur, en plus de la flèche jaune.

![](../assets/en/Preferences/optionsLine.png)

Si vous désélectionnez cette option, seule la flèche jaune est affichée.

### Suggestions

Cette zone vous permet de configurer les mécanismes d'autocomplétion de l'éditeur de code afin de l'adapter à vos propres habitudes de travail.

|                                     | Description                                                                                                                                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Affichage automatique de la fenêtre | Ouverture automatique de la fenêtre de suggestion pour :<ul><li>Constantes</li><li>Variables (locales et interprocess) et attributs d'objets</li><li>Tables</li><li>Prototypes (c'est-à-dire les fonctions de classe)</li></ul><p>Par exemple, lorsque l'option "Variables (locales ou interprocess) et attributs d'objets" est cochée, une liste de suggestions apparaît lorsque vous tapez le caractère $ :</p><p>![](../assets/en/Preferences/suggestionsAutoOpen.png)</p> Vous pouvez désactiver ce fonctionnement pour certains éléments du langage en décochant leur option correspondante. |
| Validation d'une suggestion         | Définit le contexte de saisie qui permet à l'éditeur de code de valider automatiquement la suggestion courante affichée dans la fenêtre d'autocomplétion.<ul><li>**Tabulation et délimiteurs**<br/> Lorsque cette option est cochée, vous pouvez valider la sélection courante à l'aide de la touche Tab ou de tout autre délimiteur pertinent. Par exemple, si vous entrez "ALE" et ensuite "(", 4D écrit automatiquement "ALERT(" dans l'éditeur. Voici la liste des délimiteurs qui sont pris en compte :<br/> ( ; : = < [ {</li><li>**Tabulation uniquement**<br/> Lorsque cette option est cochée, vous pouvez utiliser uniquement la touche Tab pour insérer la suggestion courante. Ceci peut être utilisé plus particulièrement pour faciliter la saisie de caractères délimiteurs dans les noms d'éléments, tels que ${1}.**Note** : Vous pouvez également double-cliquer dans la fenêtre ou appuyer sur la touche Retour chariot pour valider une suggestion.</li></ul>                                                                     |
	

