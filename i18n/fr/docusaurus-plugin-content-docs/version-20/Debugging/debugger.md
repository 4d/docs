---
id: debugger
title: Débogueur
---

Le débogueur est utile lorsque vous devez repérer des erreurs ou surveiller l'exécution de méthodes. Il vous permet d'avancer pas à pas dans le code et d'examiner les informations. Ce processus est appelé le "traçage".

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

## Appeler le débogueur

Il existe plusieurs façons d'afficher le débogueur :

* En cliquant sur le bouton **Trace** dans [la fenêtre des erreurs de syntaxe](basics.md#syntax-error-window)
* En utilisant la commande [`TRACE`](https://doc.4d.com/4dv19/help/command/en/page157.html)
* En cliquant sur le bouton **Debug** dans la fenêtre d'exécution de méthode ou en sélectionnant le bouton **Run and debug...** dans l'éditeur de code
* En utilisant **Alt+Shift+Clic** droit (Windows) ou **Ctrl+Option+Cmd+Clic (macOS)** pendant l'exécution d'une méthode, puis en sélectionnant le processus à suivre dans le menu contextuel :

![open-debugger](../assets/en/Debugging/openDebugger.png)

* En cliquant sur le bouton **Trace** lorsqu'un process est sélectionné dans la page Process de l'Explorateur d'exécution.
* En ajoutant un point d'arrêt dans la fenêtre de l'éditeur de code ou dans les pages Break et Catch de l'explorateur d'exécution.

Lorsqu'il est appelé, la fenêtre du débogueur fournit le nom de la méthode ou de la fonction de classe que vous êtes en train de tracer, ainsi que l'action qui a provoqué l'apparition initiale de la fenêtre du débogueur. Par exemple, dans la fenêtre du débogueur ci-dessus :

* *Clients_BuildLogo* est la méthode en cours de traçage
* La fenêtre du débogueur s'est affichée parce qu'elle a détecté un appel à la commande `C_PICTURE`, qui faisait partie des commandes à identifier

L'affichage d'une nouvelle fenêtre de débogage utilise la même configuration que la dernière fenêtre affichée dans la même session. Si vous exécutez plusieurs process utilisateur, vous pouvez les tracer indépendamment et avoir une fenêtre de débogage ouverte pour chaque process.

La fenêtre du débogueur est généralement affichée sur la machine où le code est exécuté. Avec une application mono-utilisateur, elle est toujours affichée sur la machine qui exécute l'application. Avec une application client/serveur, elle est affichée :

* sur le 4D distant pour le code s'exécutant localement
* sur la machine du serveur pour le code exécuté sur le serveur (par exemple, une méthode avec l'option **Exécuter sur serveur**).

> Si le serveur fonctionne en mode headless, aucune fenêtre de débogage ne peut être affichée sur le serveur, vous devez utiliser le débogueur distant. Voir [Débogage depuis des machines distantes](./debugging-remote.md).

## Boutons de la barre d'outils

La barre d'outils du débogueur comprend plusieurs boutons, associés aux raccourcis par défaut :

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

> Les raccourcis par défaut peuvent être personnalisés dans la page Raccourcis de la boîte de dialogue Préférences.

#### Reprendre exécution

Arrêt du mode Trace et reprise du cours normal de l’exécution de la méthode.

> La combinaison **Maj**+**F5** ou **Maj**+clic sur le bouton **Reprendre exécution** provoque la reprise de l’exécution avec désactivation de tous les appels à TRACE suivants dans le process courant. avec désactivation de tous les appels à TRACE suivants dans le process courant.

#### Exécuter pas à pas

The yellow arrow in the left margin of the Source Code pane is called the program counter. et le débogueur passe à la ligne suivante.

Le bouton Exécuter pas à pas ne passe pas dans les sous-routines et les fonctions. Il reste au niveau de la méthode que vous êtes en train de tracer. Si vous souhaitez également tracer les appels aux sous-routines et aux fonctions, utilisez le bouton **Pas à pas détaillé**.

Dans le débogage distant, lors de l'exécution de la méthode sur le serveur, la méthode parente est appelée après l'exécution de la dernière ligne de méthode enfant. Si la méthode parente est exécutée du côté distant, le bouton agit de la même manière que le bouton **Reprendre exécution**.

#### Exécuter pas à pas détaillé

Lors de l’exécution d’une ligne qui appelle une autre méthode (sous-routine ou fonction), ce bouton provoque l’affichage de la méthode appelée dans la fenêtre du débogueur, et permet au développeur de passer pas à pas dans cette méthode.

La nouvelle méthode devient la méthode courante (en haut) dans la sous-fenêtre Fenêtre de [chaîne d'appel](#call-chain-pane) de la fenêtre du débogueur.

Lors de l’exécution d’une ligne qui n’appelle pas une autre méthode, ce bouton se comporte comme le bouton **Exécuter pas à pas**.

#### Stopper exécution

La méthode s’arrête et vous retournez là où vous étiez avant son exécution :

* Si vous tracez une méthode formulaire ou une méthode objet s’exécutant en réponse à un événement, elle s’arrête et vous retournez au formulaire.
* Si vous tracez une méthode s’exécutant à partir du mode Application, vous retournez à ce mode.

#### Stopper et éditer

Suspend l'exécution de la méthode. The method that is executing when you click the **Abort and Edit** button opens in the Code Editor.
> **Conseil** : Utilisez ce bouton lorsque vous connaissez les modifications à apporter à votre code, et le moment où elles doivent être effectuées pour pouvoir poursuivre le test de vos méthodes. Une fois vos modifications effectuées, ré-exécutez la méthode.

#### Editer méthode

Suspend l'exécution de la méthode. La méthode qui s'exécute au moment où vous cliquez sur le bouton Éditer s'ouvre dans l'éditeur de méthode.

Si vous utilisez ce bouton pour modifier une méthode, les modifications ne seront effectives que la prochaine fois qu'elle sera exécutée.

> **Tip:** Use this button when you know which changes are required in your code and when they don't interfere with the rest of the code to be executed or traced.

#### Bouton 'Enregistrer paramètres'

Ce bouton permet de sauvegarder la configuration courante de la fenêtre du débogueur (taille et position de la fenêtre, emplacement des lignes de division et contenu de la zone d’évaluation des expressions). Elle sera alors utilisée par défaut à chaque ouverture de la base. Cela inclus :

* la taille et la position de la fenêtre
* la position des lignes de division et le contenu de la zone qui évalue les expressions

Ces paramétrages sont stockés dans le projet.

Cette action n'est pas disponible en mode débogueur distant (voir [Débogage depuis des machines distantes](./debugging-remote)).

## Fenêtre d'expression

The **Watch pane** is displayed in the top left corner of the Debugger window, below the Execution Control Tool Bar. Voici un exemple :

![watch-pane](../assets/en/Debugging/watchPane.png)

> Ce volet n'est pas disponible en mode débogage à distance.

The **Watch Pane** displays useful general information about the system, the 4D environment, and the execution environment.

The **Expression** column displays the names of the objects and expressions. The **Value** column displays their current corresponding values. Cliquer sur n'importe quelle valeur sur le côté droit du panneau vous permet de modifier la valeur de l'objet, si cela est autorisé pour cet objet.

At any point, you can drag and drop themes, theme sublists (if any), and theme items to the [Custom Watch Pane](#custom-watch-pane).

### Liste Expression

#### Objets courants

Ce thème vous permet de garder une trace des valeurs des objets ou des expressions :

* used in the line of code to be executed (the one marked with the program counter—the yellow arrow in the [Source Code Pane](#source-code-pane)),
* utilisé(e) s dans la ligne de code précédente

Comme la ligne de code précédente est celle qui a été exécutée avant, ce thème montre donc les objets ou expressions de la ligne courante avant et après que la ligne ait été exécutée.  Imaginons que vous exécutiez la méthode suivante :

```4d
TRACE
$a:=1
$b:=a+1
$c:=a+b
```

1. A Debugger window opens with the program counter set to the line with `a:=1`. At this point the **Line Objects** theme displays:

    | $a | Undefined |
    | -- | --------- |
    |    |           |

    The `$a` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

2. You click the **Step Over** button. The program counter is now set to the line `b:=a+1`. À ce stade, le thème Objets courants affiche :

    | $a | 1         |
    | -- | --------- |
    | $b | Undefined |

    The value of the `$a` variable is now 1. The `$b` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

3. You click the **Step Over** button again. Le compteur du programme est maintenant défini sur la ligne $c:=a+b. À ce stade, le thème **Objets courants** affiche :

    | $c | Undefined |
    | -- | --------- |
    | $a | 1         |
    | $b | 2         |

    The value of the `$b` variable is now 2. The `$c` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

#### Variables

Ce thème est composé des sous-thèmes suivants :

| Sous-thème   | Description                                                              | Peut-on modifier les valeurs ? |
| ------------ | ------------------------------------------------------------------------ | ------------------------------ |
| Interprocess | Liste des variables interprocess utilisées à ce stade                    | Oui                            |
| Process      | Liste des variables process utilisées par le process courant             | Oui                            |
| Local        | Liste des variables locales utilisées par la méthode en cours de traçage | Oui                            |
| Paramètres   | Liste des paramètres reçus par la méthode                                | Oui                            |
| Self         | Pointeur vers l'objet courant, lors du traçage d'une méthode objet       | Non                            |

Les tableaux, comme les autres variables, apparaissent dans les sous-thèmes interprocess, process et local, selon leur portée. Le débogueur affiche les 100 premiers éléments. Inside the **Value** column, you can modify the values of array elements, but not the size of the arrays.

To display the variable types and their internal names, right click and check the **Show Types** option in the context menu:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

Voici le résultat :

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### Valeurs du formulaire courant

Ce thème contient le nom de chaque objet dynamique inclus dans le formulaire courant, ainsi que la valeur de sa variable associée :

![current-form-value](../assets/en/Debugging/current-form-values.png)

Certains objets, tels que les list box tableaux, peuvent être présentés comme deux objets distincts, la variable de l'objet lui-même et sa source de données.

#### Constantes

Comme la page Constantes de la fenêtre de l'Explorateur, ce thème affiche des constantes prédéfinies fournies par 4D. Les expressions de ce thème ne peuvent pas être modifiées.

#### Sémaphores

Ce thème liste les sémaphores locaux définis. Pour chaque sémaphore, la colonne Valeur fournit le nom du process qui a posé le sémaphore. Les expressions de ce thème ne peuvent pas être modifiées. Les sémaphores globaux ne sont pas affichés.

#### Process

Ce thème liste les process démarrés depuis le début de la session de travail. La colonne de valeur affiche le temps utilisé et l'état courant pour chaque process (Exécution, Pause, etc.). Les expressions de ce thème ne peuvent pas être modifiées.

#### Tables et champs

Ce thème répertorie les tables et les champs dans la base de données 4D. For each Table item, the Value column displays the size of the current selection for the current process as well as the number of **locked records**.

Pour chaque champ, la colonne Valeur affiche la valeur du champ pour l'enregistrement courant (sauf image et BLOB). Vous pouvez modifier les valeurs des champs, mais pas les informations des tables.

#### Ensembles

Ce thème liste les ensembles définis dans le process courant (celui que vous tracez actuellement) et les ensembles interprocess. Pour chaque ensemble, la colonne Valeur affiche le nombre d'enregistrements et le nom de la table. Les expressions de ce thème ne peuvent pas être modifiées.

#### Sélections temporaires

Ce thème répertorie les sélections temporaires qui sont définies dans le process courant (celui que vous tracez actuellement) ; il répertorie également les sélections temporaires interprocess. Pour chaque sélection temporaire, la colonne Valeur affiche le nombre d'enregistrements et le nom de la table. Les expressions de ce thème ne peuvent pas être modifiées.

#### Informations

Ce thème contient des informations générales sur les opérations de base de données, telles que la table par défaut courante (si elle existe), l'espace de mémoire physique, virtuel, libre et utilisée, la destination des requêtes, etc.

#### Web

Ce thème affiche des informations concernant le serveur Web principal de l'application (disponible uniquement si le serveur Web est actif) :

* Fichier Web à envoyer : nom du fichier Web en attente d'envoi (le cas échéant)
* Occupation du cache Web : nombre de pages présentes dans le cache Web ainsi que le pourcentage d'utilisation
* Temps d’activité du serveur Web : durée d'utilisation du serveur Web au format heures:minutes:secondes
* Nombre de requêtes http : nombre total de requêtes HTTP reçues depuis le lancement du serveur web, ainsi que le nombre instantané de requêtes par seconde
* Nombre de process Web actifs : nombre de process Web actifs, tous process Web confondus

Les expressions contenues dans ce thème ne peuvent pas être modifiées.

### Menu contextuel de la fenêtre d'évaluation

Le menu contextuel de la fenêtre d’expression vous propose des options supplémentaires.

![context-menu](../assets/en/Debugging/contextual-menu.png)

* **Contracter** : Contracte tous les niveaux de la liste hiérarchique des expressions.
* **Déployer** : Déploie tous les niveaux de la liste hiérarchique des expressions.
* **Montrer les types** : Lorsque vous sélectionnez cette option, le type de l’objet s’affiche (lorsque cela est pertinent).
* **Show Field and Table Numbers**: Displays the number of each table or field of the **Fields**. Useful if you work with tables, field numbers or pointers using the commands such as `Table` or `Field`.
* **Montrer les icônes** : Chaque objet est précédé d'une icône qui indique son type. Vous pouvez désactiver cette option pour accélérer l’affichage, ou tout simplement parce que l’option **Montrer les types** vous convient.
* **Tables et champs triés** : Cette option force les tables et les champs à s’afficher par ordre alphabétique (dans leurs listes respectives).
* **Afficher les entiers en hexadécimal** : Les nombres s’affichent en notation décimale. Sélectionnez cette option pour les afficher en hexadécimal. Note : Pour exprimer une valeur numérique en hexadécimal, saisissez 0x (zéro + "x") puis les caractères hexadécimaux.
* **Activer le suivi d'activité** : Active le suivi d'activité (contrôle avancé de l'activité interne de l'application) et affiche les informations collectées dans des thèmes supplémentaires : **Séquenceur**, **Web** et **Réseau**.

## Chaîne d'appel

Une méthode peut appeler d'autres méthodes ou fonctions de classe, qui peuvent à leur tour appeler d'autres méthodes ou fonctions. Le volet Chaîne d'appels vous permet de suivre cette hiérarchie.

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

Chaque élément de niveau principal est le nom d'une méthode ou d'une fonction de classe. L'élément supérieur est celui que vous tracez actuellement, l'élément de niveau principal suivant est le nom de l'appelant (la méthode ou la fonction qui a appelé celle que vous tracez actuellement), le suivant est l'appelant de l'appelant, et ainsi de suite.

Dans l'image ci-dessus :

* `thirdMethod` has not received any parameter
* `$0` is currently undefined, as the method did not assign any value to `$0` (because it has not executed this assignment yet or because the method is a subroutine and not a function)
* `secondMethod` has received three parameters from `firstMethod`:
  * $1 is a pointer to the `[Employee]` table
  * $2 is a pointer to the `ID` field in the  `[Employee]` table
  * $3 est un paramètre alphanumérique dont la valeur est "Z"

You can double-click the name of any method to display its contents in the [Source Code Pane](#source-code-pane).

En cliquant sur l'icône à côté d'un nom de méthode ou de fonction, vous pouvez développer ou replier les paramètres et le résultat (le cas échéant). Les valeurs apparaissent sur le côté droit du volet. En cliquant sur n'importe quelle valeur du côté droit, vous pouvez modifier la valeur de n'importe quel paramètre ou résultat de fonction.

To display the parameter type, check the **Show types** option in the contextual menu:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

After you deploy the list of parameters, you can drag and drop parameters and function results to the [Custom Watch Pane](#custom-watch-pane).

You can also use the [Get call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) command to retrieve the call chain programmatically.

## Fenêtre d'évaluation

Le fenêtre d'évaluation sert à évaluer les expressions. It is similar to the [Watch Pane](#watch-pane), except here you decide which expressions are displayed. Tout type d'expression peut être évalué :

* champ
* variable
* pointer
* calcul
* commande 4D
* method
* et tout ce qui renvoie une valeur

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

Vous pouvez évaluer toute expression qui peut être affichée sous forme de texte. Ceci n'inclut pas les champs et les variables image et BLOB. To display BLOB contents, you can use BLOB commands, such as [BLOB to text](https://doc.4d.com/4dv19/help/command/en/page555.html).

### Gestion des expressions

Il y a plusieurs façons d'ajouter des expressions à la liste :

* Glisser et déposer un objet ou une expression depuis la fenêtre d'expression ou la fenêtre de chaîne d'appel
* Select an expression in the [Source Code pane](#source-code-pane) and press **ctrl+D**  (Windows) or **cmd+D** (macOS)
* Double-cliquer quelque part dans l'espace vide du volet (ajoute une expression avec un nom de paramètre fictif que vous pouvez modifier)

Vous pouvez entrer n'importe quelle formule qui renvoie un résultat.

To edit an expression, click on it to select it, then click again or press **Enter** on your keyboard.

To delete an expression, click on it to select it, then press **Backspace** or **Delete** on your keyboard.
> **Warning:** Be careful when you evaluate a 4D expression modifying the value of one of the System Variables (for instance, the OK variable) because the execution of the rest of the method may be altered.

### Menu contextuel de la fenêtre d'évaluation

Le menu contextuel de la fenêtre vous donne accès à l'éditeur de formule 4D et à d'autres options :

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

**New Expression**: This inserts a new expression and displays the 4D Formula Editor.

![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)

For more information on the Formula Editor, see the <a href="https://doc.4d.com/4Dv19/4D/19/4D-Design-Reference.100-5416591.en.html" target="_blank">4D Design Reference manual.</a>

* **Insert Command**: Shortcut for inserting a 4D command as a new expression.
* **Delete All**: Removes all expressions from the Custom Watch Pane.
* **Standard Expressions**: Copies the Watch Pane's list of expressions.

> This option is not available in remote debugging mode (see [Debugging from Remote Machines](https://doc.4d.com/4Dv19/4D/19/Debugging-from-Remote-Machines.300-5422483.en.html)).

* **Collapse All/Expand All**: Collapses or Expands all the hierarchical lists.
* **Show Types**: Displays the type of each item in the list (when appropriate).
* **Montrer le numéro de champ et de table** : Affiche le numéro des tables ou de champs. Utile si vous travaillez avec des numéros de table ou de champs, ou avec des pointeurs utilisant les commandes `Table` ou `Champ`.
* **Show Icons**: Displays an icon denoting the type of each item.
* **Sorted Tables and Fields**: Displays the table and fields in alphabetical order.
* **Show Integers in Hexadecimal**: Displays numbers using hexadecimal notation. Pour entrer une valeur numérique en hexadécimal, tapez 0x (zéro + "x"), suivi des chiffres hexadécimaux.

## Fenêtre d'évaluation du code

Ce panneau affiche le code source de la méthode ou de la fonction en cours de traçage.

Cette zone vous permet également d'ajouter ou de supprimer les [**points de rupture**](breakpoints.md).

### Infobulle

Passez votre pointeur sur une expression pour afficher une info-bulle qui indique :

* le type déclaré de l'expression
* la valeur courante de l'expression

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

Cela fonctionne également avec les sélections :

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### Ajout d'expressions à la fenêtre d'évaluation

Vous pouvez copier n'importe quelle expression sélectionnée de la palette de code source dans le [Custom Watch Pane](#custom-watch-pane).

1. Dans le volet Code Source, sélectionnez l'expression à évaluer
2. Effectuez l'une des opérations suivantes :
    * Glissez et déposez le texte sélectionné dans la zone d'expression
    * Press **Ctrl+D** (Windows) or **Cmd+D** (macOS)
    * Right-click the selected text **>** **Copy to Expression Pane**

### Compteur de programme

La flèche jaune située dans la marge gauche de la fenêtre du code source s'appelle le compteur de programme. Elle marque la prochaine ligne à exécuter.

Par défaut, la ligne du compteur de programme (également appelée ligne d'exécution) est mise en évidence dans le débogueur. Vous pouvez personnaliser la couleur de surbrillance dans la [page Méthodes des Préférences](Preferences/methods.md).

#### Déplacer le compteur de programme

À des fins de débogage, vous pouvez déplacer le compteur de programme de la méthode située au sommet de la chaîne d'appels (la méthode en cours d'exécution). Pour ce faire, cliquez et faites glisser la flèche jaune vers une autre ligne.

Cela indique seulement au débogueur de poursuivre le traçage ou l'exécution à partir d'un point différent. Il n'exécute pas les lignes et n'annule pas leur exécution. Tous les paramètres, champs, variables, etc. courants ne sont pas affectés.

Par exemple :

```4d
  // ...
 If(This condition)
    DO_SOMETHING
 Else
    DO_SOMETHING_ELSE
 End if
  // ...
```

Considérons que le compteur de programme est défini sur la ligne `Si (condition This)`. Lorsque vous cliquez sur le bouton **Step over** , le compteur du programme passe directement à la ligne `DO_SOMETHING_ELSE` . Pour examiner les résultats de la ligne `DO_SOMETHING` , vous pouvez déplacer le compteur de programme sur cette ligne et l'exécuter.

### Menu contexuel de la fenêtre d'évaluation du code

Le menu contextuel de la Fenêtre d'évaluation du code donne accès à plusieurs fonctions utiles en phase d’exécution du code en mode Trace :

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

* **Aller à définition** : permet d’accéder à la définition de l’objet sélectionné. Cette commande est disponible avec les objets suivants :
  * *Project methods:* displays method contents in a new window of the Code Editor
  * *Champ* : affiche les propriétés du champ dans l’inspecteur de la fenêtre de structure
  * *table* : affiche les propriétés de la table dans l’inspecteur de la fenêtre de structure
  * *formulaire* : affiche le formulaire dans l’éditeur de formulaires
  * *variable* (locale, process, interprocess ou paramètre $n) : affiche la ligne de déclaration de la variable dans la méthode courante ou parmi les méthodes compilateur
* **Search References** (also available in Code Editor): Searches all project objects (methods and forms) in which the current element of the method is referenced. L’élément courant est l’élément sélectionné ou l’élément dans lequel se trouve le curseur. Il peut s’agir d’un nom de champ, de variable, de commande, d’une chaîne, etc. Le résultat de la recherche est affiché dans une nouvelle fenêtre de résultat standard.
* **Copier** : copie standard de l'expression sélectionnée dans le conteneur de données.
* **Copier dans la fenêtre d'expression** : copie l'expression sélectionnée dans la Fenêtre d'évaluation.
* **Exécuter jusqu’au curseur** : provoque l’exécution des instructions situées entre le compteur de programme (flèche jaune) et la ligne sélectionnée de la méthode (dans laquelle se trouve le curseur).
* **Fixer prochaine instruction** : déplace le compteur de programme jusqu’à la ligne sélectionnée sans l’exécuter et sans exécuter les lignes intermédiaires. La ligne désignée ne sera exécutée que si l’utilisateur clique sur l’un des boutons d’exécution.
* **Toggle Breakpoint** (also available in Code Editor): Alternately inserts or removes the breakpoint corresponding to the selected line. Cette fonction modifie le point d’arrêt de façon permanente : par exemple, un point d’arrêt supprimé dans le débogueur n’apparaît plus dans la méthode d’origine.
* **Edit Breakpoint** (also available in Code Editor): Displays the Breakpoint Properties dialog box. Cette fonction modifie le point d’arrêt de façon permanente.

### Chercher Suivant/Précédent

Des raccourcis spécifiques permettent de trouver des chaînes de caractères identiques à celle qui est sélectionnée :

* To search for the next identical strings, press **Ctrl+E** (Windows) or **Cmd+E** (macOS)
* To search for the previous identical strings, press **Ctrl+Shift+E** (Windows) or **Cmd+Shift+E** (macOS)

La recherche s'effectue uniquement si vous sélectionnez au moins un caractère dans le volet Code source.

## Raccourcis

Cette section répertorie tous les raccourcis disponibles dans la fenêtre du débogueur.

> La barre d'outils comporte également des [raccourcis](#tool-bar-buttons).

#### Fenêtre d'évaluation & Sous-fenêtre d’évaluation

* Un **double-clic** sur un article de la fenêtre d’expression copie cet article dans la fenêtre d’évaluation
* Un **double-clic** dans la sous-fenêtre d’évaluation crée une nouvelle expression

#### Fenêtre d'évaluation du code

* Un clic dans la marge gauche place ou supprime un point d’arrêt.
* **Alt+Majuscule+clic** (Windows) ou **Option+Majuscule+clic** (macOS) pose un point d’arrêt provisoire.
* **Alt+clic** (Windows) ou **Option+clic** (macOS) affiche la fenêtre des propriétés du point d’arrêt pour un point d’arrêt nouveau ou existant.
* Une expression ou un objet sélectionné(e) peut être copié(e) dans la Fenêtre d'évaluation par glisser-déposer.
* **Ctrl+D** (Windows) ou **Commande+D** (macOS) sur un texte sélectionné le copie dans la Fenêtre d'évaluation.
* **Ctrl+E** (Windows) ou **Commande+E** (macOS) identifie les chaînes suivantes qui sont identiques à la chaîne sélectionnée.
* **Ctrl+Majuscule+E** (Windows) ou **Commande+Majuscule+E** (macOS) identifie les chaînes précédentes qui sont identiques à la chaîne sélectionnée.

#### Toutes les fenêtres

* **Ctrl** + **+/-** (Windows) ou **Commande** + **+/-** (macOS) augmente ou réduit la taille de la police pour une meilleure lisibilité. La taille de la police modifiée s'applique également à l'Editeur de code et est stockée dans les Préférences.
* **Ctrl+***(Windows) ou **Commande+*** (macOS) force la réactualisation de la Fenêtre d'expression.
* Lorsqu'aucun objet n’est sélectionné dans les fenêtres, en appuyant sur **Entrée**, vous avancez d’une ligne.
* Lorsque la valeur d’un élément est sélectionnée, utilisez les touches directionnelles pour naviguer dans la liste.
* Lorsque vous êtes en train d’éditer un élément, utilisez les touches directionnelles pour déplacer le curseur. Utilisez Ctrl+A/X/C/V (Windows) ou Commande+A/X/C/V (macOS) en raccourci des commandes du menu Edition : Tout Sélectionner/Couper/Copier/Coller.
