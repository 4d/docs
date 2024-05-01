---
id: compiler
title: Compilation
---

Vous pouvez compiler vos projets, c'est-à-dire traduire toutes vos méthodes en langage machine. La compilation d'un projet permet de vérifier la cohérence du code et d'accélérer son exécution, mais aussi de masquer le code dans son intégralité. La compilation est une étape indispensable, entre le développement de projets avec 4D et leur déploiement en tant qu'applications autonomes.

## Compilation

La compilation est gérée depuis votre application 4D et est entièrement automatique.

> On macOS, the compilation requires that you install `Xcode`. See [this section](#silicon-compiler) for more information about this requirement.

1. Open the compiler window by selecting the **Compiler...** command in the **Design** menu or the **Compiler** toolbar button.

   ![](../assets/en/Project/compilerWin1.png)

   ![](../assets/en/Project/comp1.png)

> You can also launch directly the compilation by selecting the **Start Compilation** menu item from the **Design** menu.

2. Click the **Compile** button to launch the compilation using the current [compilation settings](#compiler-settings).

Si aucune erreur n'est détectée, la compilation démarre et le message "Compilation successful" s'affiche au bas de la fenêtre lorsque la compilation est terminée :

![](../assets/en/Project/success.png)

You can immediately [run your application in compiled mode](#run-compiled) and see how faster it is.

Si des erreurs sont détectées, le process est stoppé et le message "Compilation failed" s'affiche. La zone d'information de la fenêtre affiche les noms des méthodes et les numéros de ligne concernés dans une liste hiérarchique :

![](../assets/en/Project/compilerWin2.png)

Double-cliquez sur chaque erreur détectée pour ouvrir la méthode ou la classe concernée directement dans l'éditeur de code 4D. La ligne contenant l'erreur est mise en évidence et le type d'erreur est affiché dans la zone syntaxique de la fenêtre.

Use the **Previous Error** / **Next Error** commands of the **Method** menu to navigate from one error to the next.

Le nombre d'erreurs trouvées lors de vos premières compilations peut être déconcertant, mais ne vous laissez pas décourager. Vous découvrirez rapidement qu'elles proviennent souvent de la même source, à savoir la non-conformité avec certaines conventions du projet. The compiler always provides a [precise diagnosis](#error-file) of the errors in order to help you correct them.

> La compilation nécessite une licence appropriée. Sans cette licence, il n'est pas possible d'effectuer une compilation (les boutons sont désactivés). Néanmoins, il est toujours possible de vérifier la syntaxe et de générer des méthodes de typage.

## Exécuter la compilation

Once a project is compiled, it is possible to switch from [interpreted mode to compiled mode](Concepts/interpreted.md), and vice versa, at any time and without having to quit the 4D application (except when the interpreted code has been removed). To do this, use the **Restart Interpreted** and **Restart Compiled** commands of the **Run** menu. The [Open project dialog box](GettingStarted/creating.md#options) also offers a choice between interpreted or compiled mode for database startup.

Lorsque vous passez d'un mode à l'autre, 4D ferme le mode courant et ouvre le nouveau. Cela équivaut à quitter et à rouvrir l'application. Each time you change from one mode to another, 4D executes the two following database methods (if specified) in this order: `On Exit` -> `On Startup`.

Si vous modifiez votre projet en mode interprété, vous devez le recompiler pour que vos modifications soient prises en compte en mode compilé.

## Caractéristiques de la fenêtre du compilateur

In addition to the [**Compile** button](#compile), the Compiler window provides additional features that are useful during the project development phase.

### Vérifier la syntaxe

The **Check Syntax** button starts the execution of the syntax-checking phase. À la fin du processus de vérification, les erreurs détectées sont listées dans la zone d'information. Vous pouvez double-cliquer sur une ligne d'erreur afin d'afficher la méthode correspondante.

Syntax checking can also be launched directly using the **Check Syntax** command associated with the **Compiler** toolbar button. Cette option est la seule disponible si vous ne disposez pas d'une licence adéquate pour permettre la compilation d'applications.

### Générer le typage

The **Generate Typing** button creates or updates typing compiler methods. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). Ces méthodes, lorsqu'elles existent, sont utilisées directement par le compilateur lors de la compilation du code, ce qui permet d'accélérer les durées de compilation.

The name of these methods must begin with `Compiler_`. You can set the default name for each of the 5 compiler methods in the [compiler settings window](#compiler-methods-for). The compiler methods that are generated and maintained by 4D automatically have the `Invisible` attribute:

![](../assets/en/Project/compilerWin3.png)

Seules les méthodes de compilation nécessaires (c'est-à-dire celles pour lesquelles des éléments existent déjà dans le projet) sont générées.

La zone d'information indique toute erreur trouvée lors de la création ou de la mise à jour de la méthode. Un double-clic sur une ligne d'erreur entraîne l'affichage de la méthode et de la ligne concernées dans l'éditeur de code.

### Effacer le code compilé

The **Clear compiled code** button deletes the compiled code of the project. When you click on it, all of the [code generated during compilation](#classic-compiler) is deleted, the **Restart Compiled** command of the **Run** menu is disabled and the "Compiled Project" option is not available at startup.

### Afficher/masquer les warnings

Les warnings sont des messages spécifiques générés par le compilateur lorsqu'il vérifie la syntaxe. Ces messages sont destinés à attirer votre attention sur les déclarations qui pourraient entraîner des erreurs d'exécution. Ils n'empêchent pas la compilation.

Selon les circonstances et le style de programmation utilisé, ces warnings peuvent être plus ou moins pertinents. You can toggle the warnings on or off by clicking the **Show/Hide Warnings** button:

![](../assets/en/Project/compilerWin4.png)

Lorsque cette option est cochée, les warnings (le cas échéant) sont affichés dans la fenêtre, après les autres types d'erreurs. Ils apparaissent en italique :

![](../assets/en/Project/compilerWin5.png)

Un double-clic sur un warning ouvre la méthode correspondante.

#### Désactiver les warnings pendant la compilation

Vous pouvez désactiver sélectivement certains warnings lors de la compilation en insérant le texte suivant dans le code d'une méthode 4D :

```4d
  //%W-<warning number>
```

Seuls les warnings comportant un numéro peuvent être désactivés. Les numéros de warnings sont indiqués à la fin de chaque message dans la liste des erreurs de compilation. Par exemple, pour désactiver le warning suivant :

_1 : Pointeur dans une déclaration de tableau (518.5)_

... you just need to write the following comment in a 4D method, preferably a `COMPILER_xxx` method (method compiled first):

```4d
  //%W-518.5
```

## Paramètres du compilateur

La page "Compilateur" de la boîte de dialogue de Propriétés vous permet de définir les paramètres liés à la compilation du projet. You can directly open this page from the [compiler window](#compiler-window) by clicking on the **Compiler Settings** button:

![](../assets/en/Project/compilerWin6.png)

### Options de compilation

Cette zone regroupe les options génériques utilisées lors du processus de compilation.

#### Générer le fichier de symboles

Used to generate the symbol file (see [symbol file](#symbol-file)). The symbol file is created in the in the [Logs folder](Project/architecture.md#logs) of the project with the name `ProjectName_symbols.txt`.

#### Générer le fichier d'erreurs

Used to generate the error file (see [error file](#error-file)) at the time of syntax checking. The error file is created in the [Logs folder](Project/architecture.md#logs) of the project with the name `ProjectName_errors.xml`.

#### Chemin de compilation

Permet de définir le nombre de passes (analyse du code) effectuées par le compilateur et donc la durée de la compilation.

- **Type the variables**: Check this option if you want the compiler to infer the type of variables and parameters in your code. This option requires the compiler to perform all the stages that make compilation possible, which increases the duration of compilation.
- **Process and interprocess variables are typed**: The pass for typing process and interprocess variables as well as method parameters declared outside prototypes is not carried out. Cette option peut être utilisée lorsque vous avez déjà effectué le typage de toutes vos variables process et interprocess soit vous-même, soit en utilisant la fonction de génération automatique des méthodes compilateur.
- **All variables are typed**: The pass for typing local, process and interprocess variables as well as method parameters declared outside prototypes is not carried out. Use this option when you are certain that all the local, process, and interprocess variables as well as method parameters have been clearly typed.

:::tip

You can use the [Generate Typing](#generate-typing) button then compile with one of the two last options.

:::

#### Cible de compilation

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

Ce paramètre vous permet de sélectionner la famille de processeurs pour laquelle votre projet 4D doit être compilé en mode natif. Le compilateur 4D peut générer du code natif pour deux familles de processeurs :

- **Intel/AMD** processors (all machines),
- **Apple Silicon** processors.

Deux options de cible sont proposées. Le résultat dépend du processeur de la machine sur laquelle 4D est exécuté.

| _Option_                                                                 | _sur Windows Intel/AMD_                                                              | _sur macOS Intel_                                                                      | _sur macOS Silicon_                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Tous les processeurs (Intel/AMD et Apple Silicon)** | Code for Intel/AMD<br/>_It is not possible to produce Apple Silicon code on Windows_ | Code for Apple Silicon + Code for Intel/AMD<br/>_Two compiled codes will be available_ | Code for Apple Silicon + Code for Intel/AMD<br/>_Two compiled codes will be available_ |
| **Mon processeur (processeur)**                       | Code pour Intel/AMD                                                                  | Code pour Intel/AMD                                                                    | Code pour Apple Silicon                                                                |

> Apple Silicon compiler target requires that the **Clang** application be installed on your machine. Clang est fournie avec la dernière version de Xcode. See the [Silicon compiler requirements](#requirements) for more information.

### Typage par défaut

Utilisez cette zone pour définir le type par défaut pour les objets de base de données ambigus.

- **Numeric**: Used to force numeric typing in an unambiguous manner, either in real or longint. Ceci ne remplacera pas les directives que vous avez pu définir dans votre projet. Vous pouvez optimiser le fonctionnement de votre base de données en choisissant le type Entier long.
- **Button**: Used to force button typing in an unambiguous manner, either in real or longint. Ceci ne remplacera pas les directives que vous avez pu définir dans votre projet. Ce type s'applique aux boutons ainsi qu'aux cases à cocher, aux boutons image, aux grilles de boutons, aux pop-up menus image et aux listes déroulantes.

### Méthodes Compilateur pour...

This area lets you rename the Compiler methods that are generated automatically by the compiler when you click [Generate Typing](#generate-typing).

Jusqu'à 5 méthodes de compilateur peuvent être générées ; une méthode de compilateur n'est générée que si le projet contient les éléments suivants :

- **Variables**: Groups together process variable declarations;
- **Interprocess Variables**: Groups together interprocess variable declarations;
- **Arrays**: Groups together process array declarations;
- **Interprocess Arrays**: Groups together interprocess array declarations;
- **Methods**: Groups together method parameter declarations (e.g `C_LONGINT(mymethod;$1;$2)`) for [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). For more information, see [`Compiler_Methods` method](../Concepts/parameters.md#compiler_methods-method).

You can rename each of these methods in the corresponding areas, but they will always be preceded by the label `Compiler_` (non-modifiable). Le nom de chaque méthode (préfixe compris) ne doit pas comporter plus de 31 caractères. It must also be unique and comply with [4D rules for naming methods](Concepts/identifiers.md#project-methods).

## Outils de compilation

### Fichier de symboles

If you check the [**Generate the symbol file**](#generate-the-symbol-file) option in the compiler settings, a symbol file called `ProjectName_symbols.txt` is created in the [Logs folder](Project/architecture.md#logs) of the project during compilation. Il est divisé en plusieurs parties :

#### Liste des variables process et interprocess

Ces deux listes contiennent quatre colonnes :

- Noms des variables et tableaux process et interprocess utilisés dans votre projet. Ces variables sont classées par ordre alphabétique.
- Le type de variable. Ce type a été déterminé par une directive de compilation, sinon il est déduit par le compilateur en fonction de l’utilisation de la variable. Si le type d'une variable ne peut être déterminé, la colonne est vide.
- Nombre de dimensions si la variable est un tableau.
- Référence au contexte dans lequel le compilateur a établi le type de la variable. Si la variable est utilisée dans plusieurs contextes, le contexte mentionné est celui utilisé par le compilateur pour déterminer son type.
  - Si la variable est trouvée dans une méthode base, son nom est inscrit comme il a été défini dans 4D, précédé de (M)\*.
  - Si la variable est trouvée dans une méthode projet, son nom est inscrit comme il a été défini dans 4D, précédé de (M).
  - Si la variable est trouvée dans un trigger, c’est le nom de la table qui est inscrit, précédé de (MT).
  - Si la variable est trouvée dans une méthode formulaire, le nom du formulaire est inscrit, précédé du nom de la table et de (MF).
  - Si la variable est trouvée dans une méthode objet, le nom de la méthode objet est inscrit précédé du nom du formulaire, du nom de la table et de la mention (MO).
  - Si la variable est un objet d’un formulaire, sans intervenir dans une quelconque méthode projet, méthode formulaire, trigger ou méthode objet, le nom du formulaire dans lequel elle apparaît est inscrit, précédé de la mention (F).
    En fin de liste, vous trouvez la taille des variables process et interprocess en octets.

> Au moment de la compilation, le compilateur ne peut pas déterminer dans quel process une variable process donnée est utilisée. En effet, une variable process peut avoir une valeur différente dans chaque process. Toutes les variables process sont donc systématiquement dupliquées à chaque création de process : il convient de prendre garde à la taille mémoire qu’elles vont occuper. A noter que la taille des variables process est totalement indépendante de celle de la pile des process.

#### Liste des variables locales

La liste des variables locales est triée par méthode base, méthode projet, trigger, méthode formulaire et méthode objet en suivant le même ordre que dans 4D.

Cette liste contient trois colonnes :

- la liste des variables locales utilisées dans la méthode ;
- le type de la variable ;
- le nombre de dimensions du tableau, lorsque la variable est un tableau.

#### Liste complète des méthodes

A la fin du fichier sont réunies toutes vos méthodes base et projet avec :

- leur type (procédure ou fonction retournant une valeur)
- le type de leurs paramètres et du résultat renvoyé
- le nombre d'appels
- la propriété Thread Safe ou Thread Unsafe.

Ces informations apparaissent sous la forme suivante :

```
Procedure or Function <Method name>(parameter data types):
result data type, number of calls, Thread Safe or Thread Unsafe
```

### Fichier d’erreurs

You can choose whether or not to generate an error file during compilation using the [**Generate error file**](#generate-error-file) option in the compiler settings. The error file is automatically named `projectName_errors.xml` and is placed in the [Logs folder](Project/architecture.md#logs) of the project.

Although the errors can be accessed directly via the [compiler window](#compile), it can be useful to have an error file that can be transmitted from one machine to another. Le fichier d’erreurs est généré au format XML afin de faciliter l’analyse automatique de son contenu. Il permet également la création d’interfaces personnalisées de présentation des erreurs.

Le fichier d’erreurs est plus ou moins long suivant le nombre d’erreurs et de warnings délivrés par le compilateur.

Le fichier d’erreurs est structuré ainsi :

- En tête de ce fichier se trouve la liste des erreurs et warnings, triée par méthode et dans leur ordre de création dans 4D.
- In the _**General errors**_ section, all the typing impossibilities and identity ambiguities are grouped together. Ces indications sont détaillées de la façon suivante :
  - le numéro de ligne dans la méthode (le numéro 0 est retourné pour les erreurs générales)
  - l’attribut warning indique si l’anomalie détectée est un warning (warning="true") ou une erreur (warning="false")
  - un diagnostic sur la nature de l’erreur

If your project does not have any general errors, the file will not have a _General errors_ section.

Un fichier d’erreurs peut donc comporter trois types de messages :

- **Errors linked to a specific line**: these errors are displayed in context — the line in which they were found — with an explanation. Elles apparaissent lorsque le compilateur rencontre une expression qui lui pose un problème, que ce soit de typage ou de syntaxe. Dans la fenêtre du compilateur, double-cliquez sur chaque erreur détectée afin d'ouvrir la méthode concernée directement dans l'éditeur de code 4D, la ligne contenant l'erreur étant mise en évidence.

- **General errors**: These are errors that make it impossible to compile the project. Le compilateur délivre une erreur générale dans deux cas :
  - Si le type d’une variable process ou interprocess n’a pas pu être déterminé.
  - Si deux objets de nature différente portent le même nom.

Ces erreurs sont dites générales parce qu’elles ne peuvent être rattachées à aucune méthode en particulier. En effet, le compilateur n’a pu procéder au typage nulle part dans la base pour le premier cas. Dans le second, il ne peut choisir d’associer un nom à un objet plutôt qu’à un autre.

- **Warnings**: Warnings are not errors. Ils n’empêchent pas la compilation de la base, il s’agit simplement de points sur lesquels le compilateur souhaite attirer votre attention parce qu’il y a un risque d’erreur. Dans la fenêtre de compilation, les warnings apparaissent en caractères italiques. Il vous suffit de double-cliquer sur le libellé d’un warning pour ouvrir la méthode concernée dans l'éditeur de code 4D à la ligne correspondante.

### Contrôle d’exécution

Le code généré par le compilateur de 4D vérifie automatiquement que chaque accès à un élément de tableau ou à un indice de chaîne est effectué à l'intérieur de la plage des éléments de tableau ou des caractères de la chaîne. Les accès hors plage (out of range) provoqueront des erreurs d'exécution.

Dans certains cas, vous pouvez souhaiter que le contrôle d’exécution ne s’applique pas sur des parties fiabilisées du code. En effet, notamment dans le cas de boucles répétées de nombreuses fois et lors de l’exécution de la base compilée sur des machines anciennes, ce contrôle peut ralentir sensiblement les traitements. Dans la mesure où vous avez la certitude que le code en question est fiable et ne peut provoquer d’erreur système, vous pouvez désactiver localement le contrôle d’exécution.

To do this, you must surround the code to be excluded from range checking with the special comments `//%R-` and `//%R+`. The `//%R-` comment disables range checking and `//%R+` enables it again:

```4d
  // %R-   to disable range checking
 
 ... //Place the code to be excluded from range checking here
 
  // %R+   to enable range checking again for the rest
```

## A propos des compilateurs

4D inclut deux compilateurs :

- un compilateur "classique", permettant de compiler du code natif pour les processeurs Intel/AMD ;
- un compilateur Silicon, permettant de compiler du code natif pour les processeurs Apple Silicon.

Le compilateur classique peut être utilisé sur n'importe quelle plate-forme, tandis que le compilateur Silicon peut uniquement être utilisé sur une machine Mac :

|                  |   Compilation pour Windows  |  Compilation pour Mac Intel | Compilation pour Mac Silicon |
| ---------------- | :-------------------------: | :-------------------------: | :--------------------------: |
| Sous Windows     | &#10003 | &#10003 |  &#10007 |
| Sous Mac Intel   | &#10003 | &#10003 |  &#10003 |
| Sous Mac Silicon | &#10003 | &#10003 |  &#10003 |

Les deux compilateurs sont intégrés dans 4D. The appropriate compiler is automatically selected depending on the [compilation target](#compilation-target) option.

### Compilateur classique

Le compilateur classique génère du code compilé natif pour les processeurs Intel/AMD sur n'importe quelle machine. Il ne nécessite aucune configuration particulière.

Resulting compiled code is stored in the [DerivedData](architecture.md#deriveddata) folder of the project.

### Compilateur Silicon

The Silicon compiler generates native compiled code for Apple Silicon processors, such as _Apple M1_.

Resulting compiled code is stored in the [Libraries](architecture.md#libraries) folder of the project.

#### Conditions requises

- **Apple machine**: The Silicon compiler can only be run from an Apple machine.
- **4D Project architecture**: The Silicon compiler is only available for 4D developments using [project architecture](architecture.md).
- **Xcode or Developer Tools**: The Silicon compiler calls the **Clang** open-source macOS compiler to compile the project from C++ code at the [second step](#incremental-compiler) of compilation. _clang_ requires Apple native libraries, which are provided by either the **Xcode** or **Developer Tools** package.
  - **If you already have** Xcode or Developer Tools installed on your computer, you only need to make sure that its version is compliant with 4D requirements.
  - **If you do not have** any of these tools installed on your computer, you will need to download one of them from the Apple Developer web site.

> We recommend to install **Xcode**, which is quite simple to install. You can decide to install **Developer Tools** which is more compact, however its installation is a little more complex.

Dans tous les cas, le compilateur Silicon de 4D vous avertira si votre configuration ne correspond pas aux conditions requises.

#### Compilation incrémentale

Le compilateur Silicon est incrémental, ce qui signifie que :

- During the very first compilation, **all 4D methods** are compiled. Cette étape peut prendre un certain temps. Cependant, elle n'est nécessaire qu'une fois.
- During all subsequent compilations, only **new or modified methods** are processed, thus reducing drastically the compilation time.
