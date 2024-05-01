---
id: debugger
title: Débogueur
---

Le débogueur est utile lorsque vous devez repérer des erreurs ou surveiller l'exécution de méthodes. Il vous permet d'avancer pas à pas dans le code et d'examiner les informations. Ce processus est appelé le "traçage".

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

## Appeler le débogueur

Il existe plusieurs façons d'afficher le débogueur :

- Clicking the **Trace** button in the [Syntax Error window](basics.md#syntax-error-window)
- Using the [`TRACE`](https://doc.4d.com/4dv19/help/command/en/page157.html) command
- Clicking the **Debug** button in the Execute Method window or selecting **Run and debug...** button in the Code Editor
- Using **Alt+Shift+Right click** (Windows) or **Ctrl+Option+Cmd+Click** (macOS) while a method is executing, then selecting the process to trace in the pop-up menu:

![open-debugger](../assets/en/Debugging/openDebugger.png)

- Clicking the **Trace** button when a process is selected in the Process page of the Runtime Explorer.
- En ajoutant un point d'arrêt dans la fenêtre de l'éditeur de code ou dans les pages Break et Catch de l'explorateur d'exécution.

Lorsqu'il est appelé, la fenêtre du débogueur fournit le nom de la méthode ou de la fonction de classe que vous êtes en train de tracer, ainsi que l'action qui a provoqué l'apparition initiale de la fenêtre du débogueur. Par exemple, dans la fenêtre du débogueur ci-dessus :

- _Clients_BuildLogo_ is the method being traced
- The debugger window appeared because it detected a call to the `C_PICTURE` command and this command was one of the commands to be caught

L'affichage d'une nouvelle fenêtre de débogage utilise la même configuration que la dernière fenêtre affichée dans la même session. Si vous exécutez plusieurs process utilisateur, vous pouvez les tracer indépendamment et avoir une fenêtre de débogage ouverte pour chaque process.

La fenêtre du débogueur est généralement affichée sur la machine où le code est exécuté. Avec une application mono-utilisateur, elle est toujours affichée sur la machine qui exécute l'application. Avec une application client/serveur, elle est affichée :

- sur le 4D distant pour le code s'exécutant localement
- on the server machine for code running on the server (for example, a method with the **execute on server** option).

> Si le serveur fonctionne en mode headless, aucune fenêtre de débogage ne peut être affichée sur le serveur, vous devez utiliser le débogueur distant. See [Debugging from remote machines](./debugging-remote.md).

## Boutons de la barre d'outils

La barre d'outils du débogueur comprend plusieurs boutons, associés aux raccourcis par défaut :

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

> Les raccourcis par défaut peuvent être personnalisés dans la page Raccourcis de la boîte de dialogue Préférences.

#### Bouton 'Reprendre exécution'

Arrêt du mode Trace et reprise du cours normal de l’exécution de la méthode.

> **Shift** + **F5** or **Shift** + clicking the **No Trace** button resumes execution. avec désactivation de tous les appels à TRACE suivants dans le process courant.

#### Bouton 'Exécuter pas à pas'

The yellow arrow in the left margin of the Source Code pane is called the program counter. et le débogueur passe à la ligne suivante.

Le bouton Exécuter pas à pas ne passe pas dans les sous-routines et les fonctions. Il reste au niveau de la méthode que vous êtes en train de tracer. If you want to also trace subroutines and functions calls, use the **Step Into** button.

Dans le débogage distant, lors de l'exécution de la méthode sur le serveur, la méthode parente est appelée après l'exécution de la dernière ligne de méthode enfant. If the parent method is executed on the remote side, the **Step Over** button has the same effect as the **No Trace** button.

#### Bouton 'Exécuter pas à pas détaillé'

Lors de l’exécution d’une ligne qui appelle une autre méthode (sous-routine ou fonction), ce bouton provoque l’affichage de la méthode appelée dans la fenêtre du débogueur, et permet au développeur de passer pas à pas dans cette méthode.

The new method becomes the current (top) method in the [Call Chain Pane](#call-chain-pane) of the Debugger window.

When executing a line that does not call another method, this button has the same effect as the **Step Over** button.

#### Bouton 'Exécuter et sortir'

La méthode s’arrête et vous retournez là où vous étiez avant son exécution :

- Si vous tracez une méthode formulaire ou une méthode objet s’exécutant en réponse à un événement, elle s’arrête et vous retournez au formulaire.
- Si vous tracez une méthode s’exécutant à partir du mode Application, vous retournez à ce mode.

#### Bouton 'Exécuter et sortir'

La méthode s’arrête comme lorsque vous cliquez sur Stopper exécution. The method that is executing when you click the **Abort and Edit** button opens in the Code Editor.

> **Tip**: Use this button when you know which changes are required in your code, and when these changes are required to pursue the testing of your methods. Une fois vos modifications effectuées, ré-exécutez la méthode.

#### Editer

La méthode s’arrête comme lorsque vous cliquez sur Stopper exécution. The method that is executing at the time you click the Edit button opens in the Code Editor.

Si vous utilisez ce bouton pour modifier une méthode, les modifications ne seront effectives que la prochaine fois qu'elle sera exécutée.

> **Tip:** Use this button when you know which changes are required in your code and when they don't interfere with the rest of the code to be executed or traced.

#### Bouton 'Enregistrer paramètres'

Ce bouton permet de sauvegarder la configuration courante de la fenêtre du débogueur (taille et position de la fenêtre, emplacement des lignes de division et contenu de la zone d’évaluation des expressions). Elle sera alors utilisée par défaut à chaque ouverture de la base. This includes:

- the size and position of the window
- the position of the division lines and the contents of the area that evaluates the expressions

Ces paramétrages sont stockés dans le projet.

This action is not available in remote debugging mode (see [Debugging from Remote Machines](./debugging-remote)).

## Fenêtre d'expression

The **Watch pane** is displayed in the top left corner of the Debugger window, below the Execution Control Tool Bar. Voici un exemple :

![watch-pane](../assets/en/Debugging/watchPane.png)

> This pane is not available in remote debugging mode.

The **Watch Pane** displays useful general information about the system, the 4D environment, and the execution environment.

The **Expression** column displays the names of the objects and expressions. The **Value** column displays their current corresponding values. Clicking on any value on the right side of the pane allows you to modify the value of the object, if this is permitted for that object.

At any point, you can drag and drop themes, theme sublists (if any), and theme items to the [Custom Watch Pane](#custom-watch-pane).

### Expression list

#### Line Objects

This theme lets you keep track of the values of the objects or expressions:

- used in the line of code to be executed (the one marked with the program counter—the yellow arrow in the [Source Code Pane](#source-code-pane)),
- used in the previous line of code

Since the previous line of code is the one that was just executed before, this theme therefore shows the objects or expressions of the current line before and after that the line was executed.  Let's say you execute the following method:

```4d
TRACE
$a:=1
$b:=a+1
$c:=a+b
```

1. A Debugger window opens with the program counter set to the line with `a:=1`. At this point the **Line Objects** theme displays:

   | $a | Undefined |
   | -- | --------- |

   The `$a` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

2. You click the **Step Over** button. The program counter is now set to the line `b:=a+1`. At this point, the theme displays:

   | $a | 1         |
   | -- | --------- |
   | $b | Undefined |

   The value of the `$a` variable is now 1. The `$b` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

3. You click the **Step Over** button again. The program counter is now set on the line with c:=a+b. At this point the Line Objects theme displays:

   | $c | Undefined |
   | -- | --------- |
   | $a | 1         |
   | $b | 2         |

   The value of the `$b` variable is now 2. The `$c` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

#### Variables

This theme is composed of the following subthemes:

| Subtheme     | Description                                                  | Can the values be modified? |
| ------------ | ------------------------------------------------------------ | --------------------------- |
| Interprocess | List of interprocess variables being used at this point      | Oui                         |
| Process      | List of process variables used by the current process        | Oui                         |
| Local        | List of local variables used by the method being traced      | Oui                         |
| Paramètres   | List of parameters received by the method                    | Oui                         |
| Self         | Pointer to the current object, when tracing an Object Method | Non                         |

Arrays, like other variables, appear in the Interprocess, Process, and Local subthemes, depending on their scope. The debugger displays the first 100 elements. Inside the **Value** column, you can modify the values of array elements, but not the size of the arrays.

To display the variable types and their internal names, right click and check the **Show Types** option in the context menu:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

Voici le résultat :

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### Current Form Values

This theme contains the name of each dynamic object included in the current form, as well as the value of its associated variable:

![current-form-value](../assets/en/Debugging/current-form-values.png)

Some objects, such as list box arrays, can be presented as two distinct objects, the variable of the object itself and its data source.

#### Constantes

Like the Constants page of the Explorer window, this theme displays predefined constants provided by 4D. The expressions from this theme cannot be modified.

#### Semaphores

This theme lists the local semaphores currently being set. For each semaphore, the Value column provides the name of the process that sets the semaphore. The expressions from this theme cannot be modified. The expressions from this theme cannot be modified.

#### Process

This theme lists the processes started since the beginning of the working session. The value column displays the time used and the current state for each process (i.e., Executing, Paused, and so on). The expressions from this theme cannot be modified.

#### Tables et champs

This theme lists the tables and fields in the 4D database. For each Table item, the Value column displays the size of the current selection for the current process as well as the number of **locked records**.

For each Field item, the Value column displays the value of the field for the current record (except picture and BLOB). You can modify the field values but not the the tables' information.

#### Ensembles

This theme lists the sets defined in the current process (the one you're currently tracing) and the interprocess sets. For each set, the Value column displays the number of records and the table name. The expressions from this theme cannot be modified.

#### Sélections temporaires

This theme lists the named selections that are defined in the current process (the one you’re currently tracing); it also lists the interprocess named selections. For each named selection, the Value column displays the number of records and the table name. The expressions from this theme cannot be modified.

#### Informations

This theme contains general information regarding database operation, such as the current default table (if one exists), physical, virtual, free and used memory space, query destination, etc.

#### Web

This theme displays information regarding the main Web server of the application (only available if the Web server is active):

- Web File To Send: name of Web file waiting to be sent (if any)
- Web Cache Usage: number of pages present in Web cache as well as its use percentage
- Web Server Elapsed Time: duration of Web server use in hours:minutes:seconds format
- Web Hits Count: total number of HTTP requests received since Web server launch, as well as the instantaneous number of requests per second
- Number of active Web processes: number of active Web processes, all Web processes together

The expressions contained within this theme cannot be modified.

### Menu contextuel de la fenêtre d’expression

Le menu contextuel de la fenêtre d’expression vous propose des options supplémentaires.

![context-menu](../assets/en/Debugging/contextual-menu.png)

- **Collapse All**: Collapses all levels of the hierarchical list.
- **Expand All**: Expand all levels of the hierarchical list.
- **Show Types**: Displays the type of each item (when appropriate).
- **Show Field and Table Numbers**: Displays the number of each table or field. Useful if you work with table or field numbers, or with pointers using commands such as `Table` or `Field`.
- **Show Icons**: Displays an icon denoting the object type for each object. You can turn this option off in order to speed up the display, or just because you prefer to use only the **Show Types** option.
- **Sorted Tables and Fields**: Sorts the tables and fields in alphabetical order within their respective lists.
- **Show Integers in Hexadecimal**: Numbers are usually displayed in decimal notation. Sélectionnez cette option pour les afficher en hexadécimal. Note : Pour exprimer une valeur numérique en hexadécimal, saisissez 0x (zéro + "x") puis les caractères hexadécimaux.
- **Enable activity monitoring**: Activates the monitoring of activity (advanced checking of internal activity of the application) and displays the information retrieved in the additional themes: **Scheduler**, **Web** and **Network**.

## Call Chain Pane

A method may call other methods or class functions, which may call other methods or functions. The Call Chain pane lets you keep track of that hierarchy.

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

Each main level item is the name of a method or class function. The top item is the one you are currently tracing, the next main level item is the name of the caller (the method or function that called the one you are currently tracing), the next one is the caller's caller, and so on.

In the image above:

- `thirdMethod` has not received any parameter
- `$0` is currently undefined, as the method did not assign any value to `$0` (because it has not executed this assignment yet or because the method is a subroutine and not a function)
- `secondMethod` has received three parameters from `firstMethod`:
  - $1 is a pointer to the `[Employee]` table
  - $2 is a pointer to the `ID` field in the  `[Employee]` table
  - $3 is an alphanumeric parameter whose value is "Z"

You can double-click the name of any method to display its contents in the [Source Code Pane](#source-code-pane).

Clicking the icon next to a method or function name expands or collapses the parameters and the result (if any). Values appear on the right side of the pane. Clicking on any value on the right side allows you to change the value of any parameter or function result.

To display the parameter type, check the **Show types** option in the contextual menu:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

After you deploy the list of parameters, you can drag and drop parameters and function results to the [Custom Watch Pane](#custom-watch-pane).

You can also use the [Get call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) command to retrieve the call chain programmatically.

## Custom Watch Pane

The Custom Watch Pane is useful for evaluating expressions. It is similar to the [Watch Pane](#watch-pane), except here you decide which expressions are displayed. Any type of expression can be evaluated:

- champ
- variable
- pointer
- calculation
- 4D command
- method
- and anything else that returns a value

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

You can evaluate any expression that can be shown in text form. This does not cover picture and BLOB fields or variables. To display BLOB contents, you can use BLOB commands, such as [BLOB to text](https://doc.4d.com/4dv19/help/command/en/page555.html).

### Handling expressions

There are several ways to add expressions to the list:

- Drag and drop an object or expression from the Watch Pane or the Call Chain Pane
- Select an expression in the [Source Code pane](#source-code-pane) and press **ctrl+D**  (Windows) or **cmd+D** (macOS)
- Double-click somewhere in the empty space of the Custom Watch Pane (adds an expression with a placeholder name that you can edit)

You can enter any formula that returns a result.

To edit an expression, click on it to select it, then click again or press **Enter** on your keyboard.

To delete an expression, click on it to select it, then press **Backspace** or **Delete** on your keyboard.

> **Warning:** Be careful when you evaluate a 4D expression modifying the value of one of the System Variables (for instance, the OK variable) because the execution of the rest of the method may be altered.

### Menu contextuel de la fenêtre d’expression

The Custom Watch Pane’s context menu gives you access the 4D formula editor and other options:

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

**New Expression**: This inserts a new expression and displays the 4D Formula Editor.

![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)

For more information on the Formula Editor, see the <a href="https://doc.4d.com/4Dv19/4D/19/4D-Design-Reference.100-5416591.en.html" target="_blank">4D Design Reference manual.</a>

- **Insert Command**: Shortcut for inserting a 4D command as a new expression.
- **Delete All**: Removes all expressions from the Custom Watch Pane.
- **Standard Expressions**: Copies the Watch Pane's list of expressions.

> This option is not available in remote debugging mode (see [Debugging from Remote Machines](https://doc.4d.com/4Dv19/4D/19/Debugging-from-Remote-Machines.300-5422483.en.html)).

- **Collapse All/Expand All**: Collapses or Expands all the hierarchical lists.
- **Show Types**: Displays the type of each item in the list (when appropriate).
- **Show Field and Table Numbers**: Displays the number of each table or field of the **Fields**. Useful if you work with tables, field numbers or pointers using the commands such as `Table` or `Field`.
- **Show Icons**: Displays an icon denoting the type of each item.
- **Sorted Tables and Fields**: Displays the table and fields in alphabetical order.
- **Show Integers in Hexadecimal**: Displays numbers using hexadecimal notation. To enter a numeric value in hexadecimal, type 0x (zero + "x"), followed by the hexadecimal digits.

## Source Code Pane

Ce panneau affiche le code source de la méthode ou de la fonction en cours de traçage.

This area also allows you to add or remove [**break points**](breakpoints.md).

### Tool tip

Passez votre pointeur sur une expression pour afficher une info-bulle qui indique :

- the declared type of the expression
- the current value of the expression

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

Cela fonctionne également avec les sélections :

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### Adding expressions to the Custom Watch Pane

You can copy any selected expression from the Source Code Pane to the [Custom Watch Pane](#custom-watch-pane).

1. In the Source code pane, select the expression to evaluate
2. Effectuez l'une des opérations suivantes :
   - Drag and drop the selected text to the Expression area of the Custom Watch Pane
   - Press **Ctrl+D** (Windows) or **Cmd+D** (macOS)
   - Right-click the selected text **>** **Copy to Expression Pane**

### Program Counter

La flèche jaune située dans la marge gauche du Code Source s'appelle le compteur de programme. Elle marque la prochaine ligne à exécuter.

Par défaut, la ligne du compteur de programme (également appelée ligne d'exécution) est mise en évidence dans le débogueur. You can customize the highlight color in the [Methods page of the Preferences](Preferences/methods.md).

#### Moving the program counter

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

Say the program counter is set to the line `If (This condition)`.
When you click the **Step over** button, the program counter moves directly to the `DO_SOMETHING_ELSE` line.
To examine the results of the `DO_SOMETHING` line, you can move the program counter to that line and execute it.

### Menu contexuel de la fenêtre d'évaluation des méthodes

Le menu contextuel de la Fenêtre d'évaluation des méthodes donne accès à plusieurs fonctions utiles en phase d’exécution des méthodes en mode Trace :

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

- **Goto Definition**: Goes to where the selected object is defined. Cette commande est disponible avec les objets suivants :
  - _Project methods:_ displays method contents in a new window of the Code Editor
  - _Fields:_ Displays field properties in the inspector of the Structure window
  - _Tables:_ Displays table properties in the inspector of the Structure window
  - _Forms:_ Displays form in the Form editor
  - _Variables_ (local, process, interprocess or $n parameter): displays the line in the current method or among the compiler methods where the variable is declared
- **Search References** (also available in Code Editor): Searches all project objects (methods and forms) in which the current element of the method is referenced. L’élément courant est l’élément sélectionné ou l’élément dans lequel se trouve le curseur. Il peut s’agir d’un nom de champ, de variable, de commande, d’une chaîne, etc. Le résultat de la recherche est affiché dans une nouvelle fenêtre de résultat standard.
- **Copy**: Standard copy of the selected expression to the pasteboard.
- **Copy to Expression Pane**: Copy the selected expression to the Custom Watch Pane.
- **Run to Cursor**:Executes statements found between the program counter and the selected line of the method (where the cursor is found).
- **Set Next Statement**:Moves program counter to the selected line without executing this line or any intermediate ones. La ligne désignée ne sera exécutée que si l’utilisateur clique sur l’un des boutons d’exécution.
- **Toggle Breakpoint** (also available in Code Editor): Alternately inserts or removes the breakpoint corresponding to the selected line. Cette fonction modifie le point d’arrêt de façon permanente : par exemple, un point d’arrêt supprimé dans le débogueur n’apparaît plus dans la méthode d’origine.
- **Edit Breakpoint** (also available in Code Editor): Displays the Breakpoint Properties dialog box. Cette fonction modifie le point d’arrêt de façon permanente.

### Find Next/Previous

Des raccourcis spécifiques permettent de trouver des chaînes de caractères identiques à celle qui est sélectionnée :

- To search for the next identical strings, press **Ctrl+E** (Windows) or **Cmd+E** (macOS)
- To search for the previous identical strings, press **Ctrl+Shift+E** (Windows) or **Cmd+Shift+E** (macOS)

La recherche s'effectue uniquement si vous sélectionnez au moins un caractère dans le volet Code source.

## Raccourcis

Cette section répertorie tous les raccourcis disponibles dans la fenêtre du débogueur.

> The tool bar also has [shortcuts](#tool-bar-buttons).

#### Watch Pane & Custom Watch Pane

- **Double-click** an item in the Watch Pane to copy it to the Custom Watch Pane
- **Double-Click** in the Custom Watch Pane to create a new expression

#### Source Code Pane

- Un clic dans la marge gauche place ou supprime un point d’arrêt.
- **Alt+Shift+Click** (Windows) or **Option+Shift+Click** (macOS) sets a temporary break point.
- **Alt-Click** (Windows) or **Option-Click** displays the Edit Break window for a new or existing break point.
- Une expression ou un objet sélectionné(e) peut être copié(e) dans la Fenêtre d'évaluation par glisser-déposer.
- **Ctrl+D** (Windows) or **Cmd+D** (macOS) key combinations copy the selected text to the Custom Watch Pane.
- **Ctrl+E** (Windows) or **Cmd+E** (macOS) key combinations find the next strings identical to the one selected.
- **Ctrl+Shift+E** (Windows) or **Cmd+Shift+E** (macOS) key combinations find the previous strings identical to the one selected.

#### Toutes les fenêtres

- **Ctrl** + **+/-** (Windows) or **Command** + **+/-** (macOS) increases or decreases the font size for a better readability. The modified font size is also applied to the Code Editor and is stored in the Preferences.
- **Ctrl + \*** (Windows) or **Command + \*** (macOS) forces the updating of the Watch Pane.
- When no item is selected in any pane, press **Enter** to step over.
- Lorsque la valeur d’un élément est sélectionnée, utilisez les touches directionnelles pour naviguer dans la liste.
- Lorsque vous êtes en train d’éditer un élément, utilisez les touches directionnelles pour déplacer le curseur. Utilisez Ctrl+A/X/C/V (Windows) ou Commande+A/X/C/V (macOS) en raccourci des commandes du menu Edition : Tout Sélectionner/Couper/Copier/Coller.
