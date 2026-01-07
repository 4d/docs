---
id: search-replace
title: Rechercher et Remplacer
---

4D propose plusieurs fonctions de recherche et de remplacement d'éléments dans l'ensemble de l'environnement de développement.

- Vous pouvez rechercher une chaîne de caractères ou un type d'objet (variable, commentaire, expression, etc.) parmi une partie ou la totalité du développement sur la base de critères paramétrables ("commence par”, “contient”...). Par exemple, vous pouvez rechercher toutes les variables contenant la chaîne "MaVar", uniquement dans les méthodes dont le nom commence par "HR_".
- Les résultats sont affichés dans une fenêtre de résultat, à partir de laquelle il est possible d'effectuer des remplacements dans le contenu. Vous pouvez aussi exporter ces résultats dans un fichier texte qui peut être importé dans une feuille de calcul.
- Vous pouvez détecter les variables et les méthodes qui ne sont pas utilisées dans votre code et les supprimer pour libérer de la mémoire.
- Vous pouvez renommer une méthode projet ou une variable dans tout l'environnement de développement en une seule opération.

:::note

Vous disposez également de fonctions de recherche parmi les méthodes de votre base, accessibles via le menu contextuel de la page Méthodes de l'Explorateur : **Chercher les appelants** (également disponible dans l'[Éditeur de code](../code-editor/write-class-method.md#search-callers) et **Chercher les dépendances**. Les deux fonctions affichent les éléments trouvés dans une [fenêtre de résultat](#results-window).

:::

## Emplacements de recherche

Une recherche dans l'environnement de développement effectue par défaut une recherche parmi les objets suivants :

- Noms des méthodes projet et des classes
- Contenu de toutes les méthodes et classes
- Noms des tables, champs et formulaires
- Contenu des formulaires :
  - noms et titres des objets
  - noms des infobulles, images, variables, feuilles de style,
  - chaînes de formatage de caractères
  - expressions
- Menus (noms et éléments) et commandes associées aux éléments de menu
- Enumérations (noms et éléments)
- Infobulles (noms et contenu)
- Formats / filtres (noms et contenu)
- Commentaires dans l'Explorateur et dans le code

## Chercher dans le développement

### Lancer une recherche

Vous définissez vos critères de recherche dans la fenêtre "Chercher dans le développement" :

1. Cliquez sur le bouton de recherche (![](../assets/en/Project/search-icon.png)) dans la barre d'outils 4D.
   OU
   Sélectionnez la commande **Chercher dans le développement...** dans le menu **Edition**.

La fenêtre de recherche dans le développement apparaît :

![](../assets/en/Project/find-in-design.png)

Les zones de la "Recherche dans le développement" varient dynamiquement en fonction des sélections effectuées dans les menus. Vous pouvez déployer cette fenêtre pour que toutes les options soient visibles :

![](../assets/en/Project/find-in-design-expanded.png)

2. Construisez votre recherche en utilisant les différents menus et zones de saisie de la boîte de dialogue et, si nécessaire, saisissez la chaîne de caractères à rechercher. Ces éléments sont décrits dans les sections suivantes.

3. Définissez les [options de recherche](#search-options) (si nécessaire).

4. Cliquez sur **OK** ou appuyez sur la touche **Entrée**.
   Lorsque la recherche est terminée, la [fenêtre de résultat](#results-window) s'affiche, répertoriant les éléments trouvés.

:::note

Vous pouvez interrompre une recherche en cours en cliquant sur le bouton **x** (qui apparaît pour les recherches de longue durée uniquement) ; cela ne ferme pas la fenêtre et ne supprime pas les résultats trouvés.

:::

Une fois la recherche effectuée, la valeur saisie dans la zone de recherche est sauvegardée en mémoire. Cette valeur, ainsi que toutes les autres valeurs saisies au cours de la même session, sont sélectionnables dans la liste déroulante.

### Chercher

Vous spécifiez le type d'élément à rechercher à l'aide du menu **Chercher**. Les choix suivants sont possibles :

- **Le texte** : Dans ce cas, 4D recherche une chaîne de caractères dans tout l'environnement de developpement. La recherche est effectuée en mode texte brut, sans tenir compte du contexte. Par exemple, vous pouvez rechercher le texte "ALERT("Erreur numéro :"+" ou "bouton27". Dans ce mode, il n’est pas possible d’utiliser de caractère joker. Le "@" est considéré comme un caractère standard.
- **Le commentaire** : Une recherche de ce type équivaut à la précédente mais est restreinte au contenu des commentaires dans le code (lignes débutant par //) et dans la fenêtre de l'Explorateur. Par exemple, vous pouvez rechercher tous les commentaires contenant la chaîne "A vérifier".

:::note

Le résultat final de ces deux types de recherches dépend étroitement du paramétrage du [menu de mode de recherche (qui)](#search-mode).

:::

- **L’expression de langage** : Permet de rechercher toute expression 4D valide ; la recherche est effectuée en mode "contient". La notion de validité est importante car 4D doit pouvoir évaluer l’expression pour la rechercher. Par exemple, une recherche sur l’expression "[clients" n’aboutira pas (expression invalide) alors que "[clients]" est correct. Cette option est particulièrement adaptée aux recherches des affectations et des comparaisons de valeurs. Par exemple :
  - Recherche de "myvar:=" (affectation)
  - Recherche de "myvar=" (comparaison)
- **Un élément du langage** : Permet de rechercher précisément un élément de langage via son nom. 4D distingue les éléments suivants :
  - **N'importe quel élément du langage** : Tout élément de la liste ci-dessous.
  - **Méthode projet ou classe** : Nom d'une méthode ou d'une classe projet, par exemple "M_Add" ou "EmployeeEntity".
  - **Formulaire :** Nom de formulaire, par exemple "Saisie". La commande effectue une recherche parmi les formulaires projet et les formulaires table.
  - **Champ ou Table** : Nom d'une table ou d'un champ, par exemple "Clients".
  - **Variable** : Tout nom de variable, par exemple "$myvar".
    **constante 4D** : Toute constante, telle que "Is Picture".
    **Chaîne entre guillemets** : Constante de texte littérale, c'est-à-dire toute valeur entre guillemets dans l'éditeur de code ou insérée dans les zones de texte de l'éditeur de formulaires (texte statique ou zones de groupe). Par exemple, la recherche de "Martin" donnera des résultats si votre code contient la ligne : `ds.Customer.query("name = :1" ; "Martin")`
  - **Commande 4D** : Toute commande 4D, par exemple "Alert".
  - **Commande de plug-in** : Commande de plug-in installée dans l'application.
  - \*\*Propriété \*\* : Nom d'une propriété d'objet (y compris les noms d'attributs ORDA). Par exemple, "lastname" permet de trouver "$o.lastname" et "ds.Employee.lastname".
- **N'importe quel objet** : Cette option permet d'effectuer une recherche parmi tous les éléments de l'environnement de développement. Dans ce cas, seul le menu de date de modification est disponible. Utilisez cette option, par exemple, pour rechercher "tout ce qui a été modifié aujourd'hui".

### Mode de recherche

Le menu de mode de recherche (c'est-à-dire "qui", "qui est" ou "dont le nom") spécifie comment rechercher la valeur saisie. Le contenu de ce menu varie en fonction du type d'élément à rechercher, tel que sélectionné dans la liste déroulante **Chercher**.

- Options de recherche pour Texte ou Commentaire :
  - **contient** : recherche la chaîne parmi les textes de l'environnement de développement. La recherche de "var" trouvera "mavar", "variable1" ou "avarie".
  - **contient le mot** : recherche la chaîne en tant que mot parmi les textes de l'environnement de développement. La recherche de "var" ne trouvera que les occurrences exactes de "var". Elle ne trouvera pas "mavar", en revanche, elle trouvera "var:=10" ou "ID+var" car les symboles : ou + sont des séparateurs de mots.
  - **commence par / se termine par** : recherche la chaîne au début ou à la fin du mot (recherche de texte) ou au début ou à la fin de la ligne de commentaire (recherche de commentaire). En mode "Texte se termine par", la recherche de "var" trouvera "mavar".
- Options de recherche pour élément du langage : le menu propose des options standard (est exactement, contient, commence par, se termine par). A noter que vous pouvez utiliser le joker de recherche (@) avec l’option "est exactement" (retourne tous les objets du type défini).

### Chercher dans les composants

Lorsque votre projet courant fait référence à des [composants modifiables](../Extensions/develop-components.md#editing-components), vous pouvez désigner un ou tous vos composants comme cible(s) de la recherche. Par défaut, une recherche est exécutée dans l'hôte uniquement. Pour modifier la cible d'une recherche, déployez le menu **dans le projet** :

![](../assets/en/Project/find-components.png)

Vous pouvez sélectionner comme cible :

- le **projet hôte** (option par défaut, en haut de la liste) : la recherche ne sera exécutée que dans le code et les formulaires du projet hôte, les composants sont exclus.
- le **projet hôte et tous ses composants** : la recherche sera exécutée dans le projet hôte et dans tous ses composants chargés.
- un **composant spécifique**, parmi la liste de tous les composants pouvant faire l'objet d'une recherche : la recherche sera limitée à ce composant uniquement, l'hôte et les autres composants sont exclus.

:::note

Si aucun composant dans lequel la recherche est possible n'est trouvé, aucun menu n'est disponible.

:::

Le menu **dans le dossier** (voir ci-dessous) est mis à jour lorsque vous sélectionnez un projet, car la disponibilité des dossiers dépend de la ou des cible(s) de recherche sélectionnée(s). Le menu est caché lorsque vous sélectionnez l'option "projet hôte et tous ses composants".

### Folder

Le menu **dans le dossier** limite la recherche à un dossier spécifique du projet. Par défaut (option "Niveau supérieur"), la recherche s'effectue dans tous les dossiers.

:::note

Les dossiers sont définis dans la page Démarrage de l'Explorateur.

:::

### Date de modification du parent

Ce menu permet de restreindre la recherche en fonction de la date de création/de modification de l'élément parent (c'est-à-dire, par exemple, de la méthode contenant la chaîne recherchée). Ce menu contient des critères de date standard (est égale à, est antérieure à, est postérieure à, est différente de) ainsi que plusieurs options vous permettant de désigner en un clic une période de recherche prédéfinie :

- **est aujourd'hui** : Période commençant à minuit (00:00 h) du jour en cours.
- **est depuis hier** : Période comprenant le jour en cours et le jour précédent.
- **est cette semaine** : Période commençant le lundi de la semaine en cours.
- **est ce mois-ci** : Période commençant le 1er jour du mois en cours.

### Options de recherche

Vous pouvez sélectionner diverses options permettant d’accélérer vos recherches :

- **Chercher dans les formulaires** : Lorsque cette option est désélectionnée, la recherche est effectuée dans l'ensemble du projet, sauf dans les formulaires.
- **Chercher dans les méthodes** : Lorsque cette option est désélectionnée, la recherche est effectuée dans l'ensemble du projet, sauf dans les méthodes.
- **Sensible à la casse** : Lorsque cette option est sélectionnée, la recherche tient compte de la casse des caractères tels qu'ils ont été saisis dans la zone de recherche.

## Fenêtre de résultat

La fenêtre de résultat liste les objets répondant aux critères définis via différents types de recherches :

- [recherche standard](#starting-a-search)
- [recherche d'éléments inutilisés](#find-unused-methods-and-global-variables)
- [recherche des appelants](../code-editor/write-class-method.md#search-callers)
- recherche des dépendances
- [renommage des méthodes projet et des variables](#renaming-project-methods-and-variables)

La fenêtre de résultat présente les éléments trouvés sous forme de liste hiérarchique, regroupés par type d’objet. Vous pouvez développer ou réduire tous les éléments hiérarchiques de la liste à l'aide du menu d'options (situé en bas à gauche de la fenêtre) ou du menu contextuel.

![](../assets/en/Project/result-window.png)

You can double-click on a line in this window to view the element in its editor, such as the [code editor](../code-editor/write-class-method.md). If you do several searches, each search opens its own result window, leaving previous result windows open.

When more than one occurrence has been found, the list indicates their **count** next to the element name.

Each line can display a tip that provides additional information, for example the element property that matches the criteria, or the number of the form page that contains the occurrence.

When an element found belongs to a component, the **component name** is displayed in parenthesis at the right side of the element name:

![](../assets/en/Project/find-components-results.png)

Once a search is completed, you can use the ![](../assets/en/Project/result-window-re.png) button to perform the search again with the same criteria and options.

### Options menu

You can perform various actions using the options menu:

![](../assets/en/Project/result-window-menu.png)

- **Remove from list**: removes selected item(s) from the results window. More specifically, this lets you keep only items targeted by a replacement operation in the contents or used for drag and drop between applications.
- **Remove all items from list except selection**: clears everything from the results window except for the selected item(s).
- [**Replace in content**](#replace-in-contents): replaces a character string within the selected item(s).
- **Select >**: selects one type of item (project methods, object names, and so on) from among all the items found in the Results window. The hierarchical sub-menu also provides commands to select (All) or deselect (None) all the items at once.
- **Collapse all/Expand all**: expands or collapses all the hierarchical items in the list of results.
- **Export Results**: exports information about the search criteria and elements listed in the Results window. This text file can then be imported into a spreadsheet such as Excel, for example. For each item, the following information is exported as tab-separated values in a text file:
  - Host project or component name
  - Type (method, Class, formObject, trigger...)
  - Path
  - Property (if accurate): provides the property of the object that matches the criteria. For example, a string could be found in a variable name (variable property) and an object name (name property) within in the same form. This field is empty when the matching element is the object itself.
  - Contents (if accurate): provides the contents that actually matches the criteria; for example, the code line that contains the requested string.
  - Line number (for code) or page number (for form objects)

## Replace in content

The Replace in content function allows you to replace one character string with another within the listed objects in the Results window. It is available in the [options menu](#options-menu) of the window.

:::note

The **Replace in content** menu item is disabled if you work in a read-only database (e.g. in a .4dz file).

:::

When you select this command, a dialog box appears where you enter the character string that will replace all the occurrences found by the initial search:

![](../assets/en/Project/replace-content.png)

Replacing operations work as follows:

- Replacing is always carried out among all items found in the list and not just for a selection. However, it is possible to narrow the replacing operation by first reducing the contents of the list using the **Remove from list** or **Remove all items from list except selection** commands in the [options menu](#options-menu) or the contextual menu.
- If the Results window includes elements from components, the replacing will be done in the component(s) also.
- Only the occurrences shown in the list will be replaced and only after checking the initial search criteria for cases where objects were modified between the initial search and the replacing operation.
- Replacing is done in the code, properties of form objects, contents of help messages, entry filters, menu items (item text and method calls), choice lists, comments.
- For each object modified, 4D checks whether it is already loaded by another machine or in another window. In the case of conflict, a standard dialog box appears indicating that the object is locked. You can close the object and then try again or cancel its replacement. The replacing operation will then continue with the other objects in the list.
- If a method or form concerned by a "replace in content" operation is currently being edited by the same 4D application, it will be modified directly in the open editor (no warning appears). Forms and methods modified in this way are not saved automatically: you will need to use the **Save** or **Save All** command explicitly to validate the changes.
- After a replacement is made in a list item, it will appear in italics. A count of replacements made in real time appears at the bottom of the window.
- Elements are never renamed themselves by the **Replace in content** feature, except for form objects. Hence it is possible that certain items in the list may not be affected by the replacing operation. This can occur when only the item name corresponds to the initial search criteria. In this case, the list items do not necessarily all appear in italics and the final replacement count may be less than the number of occurrences found by the initial search.

## Renaming project methods and variables

4D provides a dedicated renaming function with distribution throughout the entire project for project methods and variables.

The **Rename...** command is available from the [Code editor] (for project methods and variables) and the Explorer context menu (for project methods).

![](../assets/en/Project/rename.png)

When you select this command, a dialog box appears where you enter the new name for the object:

![](../assets/en/Project/rename-dial.png)

The new name must comply with [naming rules](../Concepts/identifiers.md); otherwise a warning appears when you validate the dialog box. For example, you cannot rename a method with a command name such as "Alert".

Depending on the type of object you are renaming (project method or variable), the renaming dialog box may also contain a distribution option:

- Project method: The **Update callers in whole database** option renames the method in all the project code that references it. You can also uncheck this option in order, for example, to rename the method only in the Explorer itself.
- Process variable: The **Rename variable in whole database** option renames the variable in all the project code that references it. If you uncheck this option, the variable is only renamed in the current method.
- Local variable: No distribution option for this object; the variable is only renamed in the current method or class.

## Searching for unused elements

Two specific search commands allow you to detect variables and methods that are not used in the code of your host project. You can then remove them to free up memory. These commands are found in the **Edit** menu of the Design environment.

### Find Unused Methods and Global Variables

This command looks for project methods as well as "global" variables (process and interprocess variables) that are declared but not used. The search results appear in a standard [Results window](#results-window).

A project method is considered to be unused when:

- it is not in the Trash,
- it is not called anywhere in the 4D code,
- it is not called by a menu command,
- it is not called as a string constant in the 4D code (4D detects a method name in a string even when it is followed by parameters in parentheses).

A process or interprocess variable is considered to be unused when:

- it is [declared](../Concepts/variables.md#declaring-variables) in the 4D code,
- it is not used anywhere else in the 4D code,
- it is not used in any form object.

Note that certain uses cannot be detected by the function - i.e. an element considered unused may in fact be used. This is the case in the following code:

```4d
var v : Text :="method"
EXECUTE FORMULA("my"+v+String(42))
```

This code builds a method name. The *mymethod42* project method is considered unused when in fact it is called. Therefore, it is advisable to check that the elements declared as unused are in fact unnecessary before you remove them.

### Find Unused Local Variables

This command looks for local variables that are declared but not used. The search results appear in a standard [Results window](#results-window).

A local variable is considered to be unused when:

- it is [declared](../Concepts/variables.md#declaring-variables) in the 4D code,
- it is not used anywhere else within the same method.
