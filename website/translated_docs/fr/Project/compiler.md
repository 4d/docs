---
id: compiler
title: Compilation
---

Vous pouvez compiler vos projets, c'est-à-dire traduire toutes vos méthodes en langage machine. La compilation d'un projet permet de vérifier la cohérence du code et d'accélérer son exécution, mais aussi de masquer le code dans son intégralité. La compilation est une étape indispensable, entre le développement de projets avec 4D et leur déploiement en tant qu'applications autonomes.


## Compilation

La compilation est gérée depuis votre application 4D et est entièrement automatique.

> Sur macOS, la compilation nécessite l'installation d'`Xcode`. Consultez [cette section](#silicon-compiler) pour plus d'informations sur ce pré-requis.

1. Ouvrez la fenêtre de compilation en sélectionnant la commande **Compiler...** dans le menu **Design** ou le bouton **Compiler** de la barre d'outils.

    ![](assets/en/Project/compilerWin1.png)

    ![](assets/en/Project/comp1.png)

> Vous pouvez également lancer directement la compilation en sélectionnant l'élément de menu **Start Compilation** dans le menu **Design**.

2. Cliquez sur le bouton **Compiler** pour lancer la compilation à l'aide des [paramètres de compilation](#compiler-settings) actuels.

Si aucune erreur n'est détectée, la compilation démarre et le message "Compilation successful" s'affiche au bas de la fenêtre lorsque la compilation est terminée :

![](assets/en/Project/success.png)

Vous pouvez immédiatement [exécuter votre application en mode compilé](#run-compiled) et identifier sa rapidité.

Si des erreurs sont détectées, le process est stoppé et le message "Compilation failed" s'affiche. La zone d'information de la fenêtre affiche les noms des méthodes et les numéros de ligne concernés dans une liste hiérarchique :

![](assets/en/Project/compilerWin2.png)

Double-cliquez sur chaque erreur détectée pour ouvrir la méthode ou la classe concernée directement dans l'éditeur de méthode 4D. La ligne contenant l'erreur est mise en évidence et le type d'erreur est affiché dans la zone syntaxique de la fenêtre.

Utilisez les commandes **Erreur précédente** / **Erreur suivante** du menu **Méthode** pour naviguer d'une erreur à l'autre.

Le nombre d'erreurs trouvées lors de vos premières compilations peut être déconcertant, mais ne vous laissez pas décourager. Vous découvrirez rapidement qu'elles proviennent souvent de la même source, à savoir la non-conformité avec certaines conventions du projet. Le compilateur fournit toujours un [diagnostic précis](#error-files) des erreurs afin de vous aider à les corriger.

> La compilation nécessite une licence appropriée. Sans cette licence, il n'est pas possible d'effectuer une compilation (les boutons sont désactivés). Néanmoins, il est toujours possible de vérifier la syntaxe et de générer des méthodes de typage.

## Exécuter la compilation

Une fois le projet compilé, il est possible de passer du [mode interprété au mode compilé](Concepts/interpreted.md), et vice versa, à tout moment et sans avoir à quitter l'application 4D (sauf si le code interprété a été supprimé). Pour ce faire, utilisez les commandes **Restart Interpreted** et **Restart Compiled** du menu **Run**. The [Open project dialog box](creating.md#options) also offers a choice between interpreted or compiled mode for database startup.

Lorsque vous passez d'un mode à l'autre, 4D ferme le mode courant et ouvre le nouveau. Cela équivaut à quitter et à rouvrir l'application. Chaque fois que vous passez d'un mode à l'autre, 4D exécute les deux méthodes base suivantes (si elles sont spécifiées) dans cet ordre : `On Exit` -> `On Startup`.

Si vous modifiez votre projet en mode interprété, vous devez le recompiler pour que vos modifications soient prises en compte en mode compilé.

## Caractéristiques de la fenêtre du compilateur

En plus du bouton [**Compiler**](#compile), la fenêtre du Compilateur offre des fonctionnalités supplémentaires qui sont utiles durant la phase de développement du projet.

### Vérifier la syntaxe

Le bouton **Vérifier la syntaxe** lance l'exécution de la phase de vérification de la syntaxe. À la fin du processus de vérification, les erreurs détectées sont listées dans la zone d'information. Vous pouvez double-cliquer sur une ligne d'erreur afin d'afficher la méthode correspondante.

Le contrôle syntaxique peut également être lancé directement à l'aide de la commande **Check Syntax** associée au bouton de la barre d'outils **Compiler**. Cette option est la seule disponible si vous ne disposez pas d'une licence adéquate pour permettre la compilation d'applications.

### Générer le typage

Le bouton **Générer le typage** crée ou met à jour les méthodes de compilation du typage. Les méthodes de compilation sont des méthodes projet qui regroupent toutes les déclarations de typage des variables et des tableaux (process et interprocess), ainsi que les paramètres des méthodes. Ces méthodes, lorsqu'elles existent, sont utilisées directement par le compilateur lors de la compilation du code, ce qui permet d'accélérer les durées de compilation.

Le nom de ces méthodes doit commencer par `Compiler_`. Vous pouvez définir le nom par défaut de chacune des 5 méthodes du compilateur dans [la fenêtre des paramètres du compilateur](#compiler-methods-for). Les méthodes de compilation qui sont générées et gérées par 4D ont automatiquement l'attribut `Invisible` :

![](assets/en/Project/compilerWin3.png)

Seules les méthodes de compilation nécessaires (c'est-à-dire celles pour lesquelles des éléments existent déjà dans le projet) sont générées.

La zone d'information indique toute erreur trouvée lors de la création ou de la mise à jour de la méthode. En double-cliquant sur une ligne d'erreur, la méthode et la ligne concernées sont affichées dans l'éditeur de méthode.


### Effacer le code compilé

Le bouton **Effacer le code compilé** permet de supprimer le code compilé du projet. Lorsque vous cliquez dessus, tout le [code généré lors de la compilation](#classic-compiler) est supprimé, la commande **Restart Compiled** du menu **Run** est désactivée et l'option "Compiled Project" n'est pas disponible au démarrage.


### Afficher/masquer les avertissements

Les avertissements sont des messages spécifiques générés par le compilateur lorsqu'il vérifie la syntaxe. Ces messages sont destinés à attirer votre attention sur les déclarations qui pourraient entraîner des erreurs d'exécution. Ils n'empêchent pas la compilation.

Selon les circonstances et le style de programmation utilisé, ces avertissements peuvent être plus ou moins pertinents. Vous pouvez activer ou désactiver les avertissements en cliquant sur le bouton **Afficher/Masquer** les avertissements :

![](assets/en/Project/compilerWin4.png)

Lorsque cette option est cochée, les avertissements (le cas échéant) sont affichés dans la fenêtre, après les autres types d'erreur. Ils apparaissent en italique :

![](assets/en/Project/compilerWin5.png)

Un double-clic sur un avertissement ouvre la méthode correspondante.

#### Désactiver les avertissements pendant la compilation

Vous pouvez désactiver sélectivement certains avertissements lors de la compilation en insérant le texte suivant dans le code d'une méthode 4D :

```4d
  //%W-<warning number>
```

Seuls les avertissements comportant un numéro peuvent être désactivés. Les numéros d'avertissement sont indiqués à la fin de chaque message dans la liste des erreurs de compilation. Par exemple, pour désactiver l'avertissement suivant :

*1 : Pointeur dans une déclaration de tableau (518.5)*

... il suffit d'écrire le commentaire suivant dans une méthode 4D, de préférence une méthode `COMPILER_xxx` (méthode compilée en premier) :

```4d
  //%W-518.5
```



## Paramètres du compilateur

La page "Compilateur" de la boîte de dialogue Paramètres vous permet de définir les paramètres liés à la compilation du projet. Vous pouvez ouvrir directement cette page à partir de la [fenêtre du compilateur](#compiler-window) en cliquant sur le bouton **Paramètres du compilateur** :

![](assets/en/Project/compilerWin6.png)


### Options de compilation

Cette zone regroupe les options génériques utilisées lors du processus de compilation.

#### Générer le fichier de symboles

Permet de générer le fichier de symboles (voir [fichier de symboles](#symbol-file)). Used to generate the symbol file (see [symbol file](#symbol-file)).

#### Générer le fichier d'erreurs

Utilisé pour générer le fichier d'erreurs (voir [fichier d'erreurs](#symbol-file)) au moment du contrôle syntaxique. The error file is created in the [Logs folder](Project/architecture.md#logs) of the project with the name `ProjectName_errors.xml`.


#### Chemin de compilation

Permet de définir le nombre de passages (analyse du code) effectués par le compilateur et donc la durée de la compilation.

- **Type the variables**: Passes by all the stages that make compilation possible.
- **Process and interprocess are typed**: The pass for typing process and interprocess variables is not carried out. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for automatic generation of compiler methods.
- **All variables are typed**: The pass for typing local, process and interprocess variables is not carried out. Use this option when you are certain that all the process, interprocess and local variables have been clearly typed.

#### Compilation Target

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

This setting allows you to select the processor family for which your 4D project must be natively compiled. The 4D compiler can build native code for two processor families:

- **Intel/AMD** processors (all machines),
- **Apple Silicon** processors.

Two target options are proposed. The result depends on the processor of the machine on which 4D is running.

| *Option*                                         | *on Windows Intel/AMD*                                                                    | *on macOS Intel*                                                                            | *on macOS Silicon*                                                                          |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **All processors (Intel/AMD and Apple Silicon)** | Code for Intel/AMD<br>*It is not possible to produce Apple Silicon code on Windows* | Code for Apple Silicon + Code for Intel/AMD<br>*Two compiled codes will be available* | Code for Apple Silicon + Code for Intel/AMD<br>*Two compiled codes will be available* |
| **My processor (processor)**                     | Code for Intel/AMD                                                                        | Code for Intel/AMD                                                                          | Code for Apple Silicon                                                                      |

> Apple Silicon compiler target requires that the **Clang** application be installed on your machine. Clang comes with the latest version of Xcode. See the [Silicon compiler requirements](#requirements) for more information.

### Default typing

Use this area to set the default type for ambiguous database objects.

- **Numeric**: Used to force numeric typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. You can optimize the running of your database by choosing the Longint type.
- **Button**: Used to force button typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. This type applies to buttons as well as check boxes, picture buttons, button grids, radio buttons, picture pop-up menus and drop-down lists.

### Compiler Methods for...

This area lets you rename the Compiler methods that are generated automatically by the compiler when you click [Generate Typing](#generate-typing).

Up to 5 compiler methods may be generated; a compiler method is only generated if the project contains the following items:

- **Variables**: Groups together process variable declarations;
- **Interprocess Variables**: Groups together interprocess variable declarations;
- **Arrays**: Groups together process array declarations;
- **Interprocess Arrays**: Groups together interprocess array declarations;
- **Methods**: Groups together method parameter declarations (for instance, `C_LONGINT(mymethod;$1;$2)`).

You can rename each of these methods in the corresponding areas, but they will always be preceded by the label `Compiler_` (non-modifiable). The name of each method (prefix included) must be no longer than 31 characters. It must also be unique and comply with [4D rules for naming methods](Concepts/identifiers.md#project-methods).


## Compilation tools

### Symbol file

If you check the [**Generate the symbol file**](#generate-the-symbol-file) option in the compiler settings, a symbol file called `ProjectName_symbols.txt` is created in the [Logs folder](Project/architecture.md#logs) of the project during compilation. It is divided into several parts:

#### List of process and interprocess variables

These two lists contain four columns:

- Names of process and interprocess variables and arrays used in your project. These variables are listed in alphabetical order.
- Type of the variable. Types are set by compiler directive commands or are determined by the compiler based on the use of the variable. If the type of a variable cannot be determined, the column is empty.
- Number of dimensions if the variable is an array.
- Reference to the context in which the compiler established the type of the variable. If the variable is used in several contexts, the context mentioned is the one used by the compiler to determine its type.
    - If the variable was found in a database method, the database method name is given, preceded by (M)*.
    - If the variable was found in a project method, the method is identified as it has been defined in 4D, preceded by (M).
    - If the variable was found in a trigger, the table name is given, preceded by (TM).
    - If the variable was found in a form method, the form name is given, preceded by the table name and (FM).
    - If the variable was found in an object method, the object method’s name is given, preceded by the form name, table name, and by (OM).
    - If the variable is an object in a form and does not appear in any project, form, object method, or trigger, the name of the form in which it appears is given, preceded by (F). At the end of each list, you can find the sizes of the process and interprocess variables in bytes.

> When compiling, the compiler cannot determine in which process a given process variable is used. A process variable can have a different value in each process. Consequently, all process variables are systematically duplicated as each new process is launched: it is thus advisable to watch out for the amount of memory that they will take up. Also, keep in mind that the space for process variables is not related to the stack size for the process.

#### List of local variables

The list of local variables is sorted by database method, project method, trigger, form method, and object method, in the same order as in 4D.

This list is divided into three columns:

- list of local variables used in the method;
- type of the variable;
- number of dimensions if the variable is an array.

#### Complete list of methods

A complete list of your database and project methods is given at the end of the file with:

- their type (procedure or function returning a value)
- the data types of their parameters and the returned result
- the number of calls
- the Thread Safe or Thread Unsafe property.

This information appears as follows:

```
Procedure or Function <Method name>(parameter data types):
result data type, number of calls, Thread Safe or Thread Unsafe
```

### Error file

You can choose whether or not to generate an error file during compilation using the [**Generate error file**](#generate-error-file) option in the compiler settings. The error file is automatically named `projectName_errors.xml` and is placed in the [Logs folder](Project/architecture.md#logs) of the project.

Although the errors can be accessed directly via the [compiler window](#compile), it can be useful to have an error file that can be transmitted from one machine to another. The error file is generated in XML format in order to facilitate automatic parsing of its contents. It also allows the creation of customized error display interfaces.

The length of the error file depends on the number of errors and warnings issued by the compiler.

The structure of the error file is as follows:

- At the top of the file is the list of errors and warnings, sorted by method and in their order of creation in 4D. In the ***General errors*** section, all the typing impossibilities and identity ambiguities are grouped together. These errors and warnings are listed using the following format:
    - line number in the method (0 indicates general errors)
    - warning attribute indicating whether the detected anomaly is a warning (warning="true") or an error (warning="false")
    - diagnostic describing the error

If your project does not have any general errors, the file will not have a *General errors* section.

An error file may contain three types of messages:

- **Errors linked to a specific line**: these errors are displayed in context — the line in which they were found — with an explanation. The compiler reports this type of error when it encounters an expression in which it sees an inconsistency related to data type or syntax. In the compiler window, double–click on each error detected in order to open the method concerned directly in the 4D Method editor, with the line containing the error highlighted.

- **General errors**: These are errors that make it impossible to compile the project. There are two cases in which the compiler reports a general error:
    - The data type of a process variable could not be determined.
    - Two different kinds of objects have the same name. General errors are so named because they cannot be linked to any specific method. In the first case, the compiler could not perform a specified typing anywhere in the project. In the second, it was unable to decide whether to associate a given name with one object rather than with another.

- **Warnings**: Warnings are not errors. In the compiler window, warnings appear in italics. They do not prevent the project from being compiled, but simply point out potential code errors. Double-click on each warning to open the method concerned directly in the 4D Method editor, with the line containing the warning highlighted.




### Range checking

The code generated by the 4D compiler automatically checks that every access to an array element or a character reference is done within the actual range of array elements or string characters. Out of range accesses will provoke runtime execution errors.

In some cases, you might prefer range checking not to apply to certain parts of the code that are considered to be reliable. More particularly, in the case of loops that are repeated a great number of times, and when running the compiled database on older machines, range checking can significantly slow down processing. If you are absolutely certain that the code concerned is reliable and cannot cause system errors, you can disable range checking locally.

To do this, you must surround the code to be excluded from range checking with the special comments `//%R-` and `//%R+`. The `//%R-` comment disables range checking and `//%R+` enables it again:

```4d
  // %R-   to disable range checking

 ... //Place the code to be excluded from range checking here

  // %R+   to enable range checking again for the rest
```

## About Compilers

4D contains two compilers:

- a "classic" compiler, used to compile native code for Intel/AMD processors;
- a Silicon compiler, used to compile native code for Apple Silicon processors.

The classic compiler can be used on any platform, while the Silicon compiler can only be used on a Mac machine:

|                | Compile for Windows | Compile for Intel Mac | Compile for Silicon Mac |
| -------------- |:-------------------:|:---------------------:|:-----------------------:|
| On Windows     |      &#10003;       |       &#10003;        |        &#10007;         |
| On Intel Mac   |      &#10003;       |       &#10003;        |        &#10003;         |
| On Silicon Mac |      &#10003;       |       &#10003;        |        &#10003;         |


Both compilers are integrated into 4D. The appropriate compiler is automatically selected depending on the [compilation target](#compilation-target) option.



### Classic Compiler

The classic compiler generates native compiled code for Intel/AMD processors on any machines. It does not require any specific configuration.

Resulting compiled code is stored in the [DerivedData](architecture.md#deriveddata-folder) folder of the project.


### Silicon Compiler

The Silicon compiler generates native compiled code for Apple Silicon processors, such as *Apple M1*.

Resulting compiled code is stored in the [Libraries](architecture.md#libraries-folder), folder of the project.


#### Pré-requis

- **Apple machine**: The Silicon compiler can only be run from an Apple machine.
- **4D Project architecture**: The Silicon compiler is only available for 4D developments using [project architecture](architecture.md).
- **Xcode or Developer Tools**: The Silicon compiler calls the **Clang** open-source macOS compiler to compile the project from C++ code at the [second step](#two-step-incremental-compiler) of compilation. *clang* requires Apple native libraries, which are provided by either the **Xcode** or **Developer Tools** package.
    - **If you already have** Xcode or Developer Tools installed on your computer, you only need to make sure that its version is compliant with 4D requirements.
    - **If you do not have** any of these tools installed on your computer, you will need to download one of them from the Apple Developer web site.

> We recommend to install **Xcode**, which is quite simple to install. You can decide to install **Developer Tools** which is more compact, however its installation is a little more complex.

In any cases, the 4D Silicon compiler will warn you if your configuration does not comply with its requirements.


#### Incremental compiler

The Silicon compiler is incremental, which means that:

- During the very first compilation, **all 4D methods** are compiled. This step could take a certain time. However it only occurs once.
- During all subsequent compilations, only **new or modified methods** are processed, thus reducing drastically the compilation time. 