---
id: compiler
title: Compilation
---

Vous pouvez compiler vos projets, c'est-à-dire traduire toutes vos méthodes en langage machine. La compilation d'un projet permet de vérifier la cohérence du code et d'accélérer son exécution, mais aussi de masquer le code dans son intégralité. La compilation est une étape indispensable, entre le développement de projets avec 4D et leur déploiement en tant qu'applications autonomes.

## Compilation

La compilation est gérée depuis votre application 4D et est entièrement automatique.

> Sur macOS, la compilation nécessite l'installation d'`Xcode`. Consultez [cette section](#silicon-compiler) pour plus d'informations sur ce pré-requis.

1. Ouvrez la fenêtre de compilation en sélectionnant la commande **Compilateur...** dans le menu **Développement** ou le bouton **Compilateur** de la barre d'outils.

   ![](../assets/en/Project/compilerWin1.png)

   ![](../assets/en/Project/comp1.png)

> Vous pouvez également lancer directement la compilation en sélectionnant l'élément de menu **Lancer la compilation** dans le menu **Développement**.

2. Cliquez sur le bouton **Compiler** pour lancer la compilation à l'aide des [paramètres de compilation](#compiler-settings) courants.

Si aucune erreur n'est détectée, la compilation démarre et le message "Compilation successful" s'affiche au bas de la fenêtre lorsque la compilation est terminée :

![](../assets/en/Project/success.png)

Vous pouvez immédiatement [exécuter votre application en mode compilé](#run-compiled) et identifier sa rapidité.

Si des erreurs sont détectées, le process est stoppé et le message "Compilation failed" s'affiche. La zone d'information de la fenêtre affiche les noms des méthodes et les numéros de ligne concernés dans une liste hiérarchique :

![](../assets/en/Project/compilerWin2.png)

Double-cliquez sur chaque erreur détectée pour ouvrir la méthode ou la classe concernée directement dans l'éditeur de code 4D. La ligne contenant l'erreur est mise en évidence et le type d'erreur est affiché dans la zone syntaxique de la fenêtre.

Utilisez les commandes **Erreur précédente** / **Erreur suivante** du menu **Méthode** pour naviguer d'une erreur à l'autre.

Le nombre d'erreurs trouvées lors de vos premières compilations peut être déconcertant, mais ne vous laissez pas décourager. Vous découvrirez rapidement qu'elles proviennent souvent de la même source, à savoir la non-conformité avec certaines conventions du projet. The compiler always provides a [precise diagnosis](#error-file) of the errors in order to help you correct them.

> La compilation nécessite une licence appropriée. Sans cette licence, il n'est pas possible d'effectuer une compilation (les boutons sont désactivés). Néanmoins, il est toujours possible de vérifier la syntaxe et de générer des méthodes de typage.

## Exécuter la compilation

Une fois le projet compilé, il est possible de passer du [mode interprété au mode compilé](Concepts/interpreted.md), et vice versa, à tout moment et sans avoir à quitter l'application 4D (sauf si le code interprété a été supprimé). To do this, use the **Restart Interpreted** and **Restart Compiled** commands of the **Run** menu. La [boîte de dialogue d'ouverture de projet ](GettingStarted/creating.md#options) de 4D permet également de choisir le mode interprété ou compilé au lancement du projet.

Lorsque vous passez d'un mode à l'autre, 4D ferme le mode courant et ouvre le nouveau. Cela équivaut à quitter et à rouvrir l'application. Chaque fois que vous passez d'un mode à l'autre, 4D exécute les deux méthodes base suivantes (si elles sont spécifiées) dans cet ordre : `On Exit` -> `On Startup`.

Si vous modifiez votre projet en mode interprété, vous devez le recompiler pour que vos modifications soient prises en compte en mode compilé.

## Caractéristiques de la fenêtre du compilateur

In addition to the [**Compile** button](#compile), the Compiler window provides additional features that are useful during the project development phase.

### Vérifier la syntaxe

Le bouton **Vérifier la syntaxe** lance l'exécution de la phase de vérification de la syntaxe. À la fin du processus de vérification, les erreurs détectées sont listées dans la zone d'information. Vous pouvez double-cliquer sur une ligne d'erreur afin d'afficher la méthode correspondante.

Le contrôle syntaxique peut également être lancé directement à l'aide de la commande **Check Syntax** associée au bouton de la barre d'outils **Compiler**. Cette option est la seule disponible si vous ne disposez pas d'une licence adéquate pour permettre la compilation d'applications.

### Générer le typage

Le bouton **Générer le typage** crée ou met à jour les méthodes de compilation du typage. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). Ces méthodes, lorsqu'elles existent, sont utilisées directement par le compilateur lors de la compilation du code, ce qui permet d'accélérer les durées de compilation.

Le nom de ces méthodes doit commencer par `Compiler_`. Vous pouvez définir le nom par défaut de chacune des 5 méthodes du compilateur dans [la fenêtre des paramètres du compilateur](#compiler-methods-for). Les méthodes de compilation qui sont générées et gérées par 4D ont automatiquement l'attribut `Invisible` :

![](../assets/en/Project/compilerWin3.png)

Seules les méthodes de compilation nécessaires (c'est-à-dire celles pour lesquelles des éléments existent déjà dans le projet) sont générées.

La zone d'information indique toute erreur trouvée lors de la création ou de la mise à jour de la méthode. Un double-clic sur une ligne d'erreur entraîne l'affichage de la méthode et de la ligne concernées dans l'éditeur de code.

### Effacer le code compilé

Le bouton **Effacer le code compilé** permet de supprimer le code compilé du projet. Lorsque vous cliquez dessus, tout le [code généré lors de la compilation](#classic-compiler) est supprimé, la commande **Restart Compiled** du menu **Run** est désactivée et l'option "Compiled Project" n'est pas disponible au démarrage.

### Afficher/masquer les warnings

You can toggle the [warnings](#warnings) display in the Compiler window by clicking the **Show/Hide Warnings** button:

![](../assets/en/Project/compilerWin4.png)

Lorsque cette option est cochée, les warnings (le cas échéant) sont affichés dans la fenêtre, après les autres types d'erreurs. Ils apparaissent en italique :

![](../assets/en/Project/compilerWin5.png)

Un double-clic sur un warning ouvre la méthode correspondante.

## Paramètres du compilateur

The "Compiler" tab of the Settings dialog box lets you set parameters related to project compilation. Vous pouvez ouvrir directement cette page à partir de la [fenêtre du compilateur](#compiler-window) en cliquant sur le bouton **Paramètres du compilateur** :

![](../assets/en/Project/compilerWin6.png)

### Options de compilation

Cette zone regroupe les options génériques utilisées lors du processus de compilation.

#### Générer le fichier de symboles

Permet de générer le fichier de symboles (voir [fichier de symboles](#symbol-file)). Le fichier de symboles est créé dans le [dossier Logs](Project/architecture.md#logs) du projet et est nommé `ProjectName_symbols.xml`.

#### Générer le fichier d'erreurs

Permet de générer le fichier d'erreurs (voir [fichier d'erreurs](#fichier-derreurs)) au moment du contrôle syntaxique. Le fichier d'erreur est créé dans le [dossier Logs](Project/architecture.md#logs) du projet et est nommé `ProjectName_errors.xml`.

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

- Les processeurs **Intel/AMD** (toutes les machines),
- les processeurs **Apple Silicon**.

Deux options de cible sont proposées. Le résultat dépend du processeur de la machine sur laquelle 4D est exécuté.

| *Option*                                                                 | *sur Windows Intel/AMD*                                                                       | *sur macOS Intel*                                                                          | *sur macOS Silicon*                                                                        |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **Tous les processeurs (Intel/AMD et Apple Silicon)** | Code pour Intel/AMD<br/>*Il n'est pas possible de produire du code Apple Silicon sur Windows* | Code pour Apple Silicon + Code pour Intel/AMD<br/>*Deux codes compilés seront disponibles* | Code pour Apple Silicon + Code pour Intel/AMD<br/>*Deux codes compilés seront disponibles* |
| **Mon processeur (processeur)**                       | Code pour Intel/AMD                                                                           | Code pour Intel/AMD                                                                        | Code pour Apple Silicon                                                                    |

> La cible de compilation Apple Silicon nécessite que l'application **Clang** soit installée sur votre machine. Clang est fournie avec la dernière version de Xcode. Voir les [pré-requis du compilateur Silicon](#requirements) pour plus d'informations.

### Typage par défaut

Utilisez cette zone pour définir le type par défaut pour les objets de base de données ambigus.

- **Numérique** : Permet de forcer le typage numérique de manière non ambiguë, soit en Réel, soit en Entier long. Ceci ne remplacera pas les directives que vous avez pu définir dans votre projet. Vous pouvez optimiser le fonctionnement de votre base de données en choisissant le type Entier long.
- **Bouton** : Utilisé pour forcer le typage d'un bouton de manière non ambiguë, soit en Réel, soit en Entier long. Ceci ne remplacera pas les directives que vous avez pu définir dans votre projet. Ce type s'applique aux boutons ainsi qu'aux cases à cocher, aux boutons image, aux grilles de boutons, aux pop-up menus image et aux listes déroulantes.

### Méthodes Compilateur pour...

Cette zone vous permet de renommer les méthodes du compilateur qui sont générées automatiquement par le compilateur lorsque vous cliquez sur [Générer le typage](#générer-le-typage).

Jusqu'à 5 méthodes de compilateur peuvent être générées ; une méthode de compilateur n'est générée que si le projet contient les éléments suivants :

- **Variables** : Regroupe les déclarations de variables process ;
- **Variables interprocess** : Regroupe les déclarations de variables interprocess ;
- **Tableaux** : Regroupe les déclarations de tableaux de process ;
- **Tableaux interprocess** : Regroupe les déclarations de tableaux interprocess ;
- **Methods**: Groups together method parameter declarations (e.g `C_LONGINT(mymethod;$1;$2)`) for [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). For more information, see [`Compiler_Methods` method](../Concepts/parameters.md#compiler_methods-method).

Vous pouvez renommer chacune de ces méthodes dans les zones correspondantes, mais elles seront toujours précédées de l'étiquette `Compiler_` (non modifiable). Le nom de chaque méthode (préfixe compris) ne doit pas comporter plus de 31 caractères. Il doit également être unique et respecter les [règles 4D de nommage des méthodes](Concepts/identifiers.md#méthodes-projet).

## Warnings

Les warnings sont des messages spécifiques générés par le compilateur lorsqu'il vérifie la syntaxe. Ces messages sont destinés à attirer votre attention sur les déclarations qui pourraient entraîner des erreurs d'exécution. Ils n'empêchent pas la compilation.

Depending on circumstances and the programming style used, warnings may be more or less relevant. You can enable or disable warnings, in the compiler dialog, and in the code editors (4D code editor and VS Code), globally through the [warnings tab](#warnings-tab) or locally using [`//%W`](#disabling-and-enabling-warnings-locally).

### Warnings tab

![](../assets/en/Project/warnings-tab.png)

This tab allows you to define which warnings should be displayed globally. From the list of all possible warnings with their types, their code and their localized label, ordered by warning code.

To reduce the list, you can search words by warning labels and codes using the **Search in codes and labels** textbox or the magnifying glass icon on the left.

By default, all warning types are checked and enabled.

When you modify a warning display status, the information is stored in the "warnings.json" file, placed in the project Settings folder.

The **Reset to factory settings** button sets all the warning display status checkboxes to default values and deletes the "warnings.json" file.

### Disabling and enabling warnings locally

You can control warnings in specific parts of your code by using special comments to disable or enable them.

To disable warnings, insert the following comments before and after the code section where you want to disable warnings:

```4d
// Before the selected code part use
  //%W-<warning number>

// After the selected code part use
  //%W+<warning number>
```

To re-enable warnings in a code section, use the following comments:

```4d
// Before the selected code part use
  //%W+<warning number>

// After the selected code part use
  //%W-<warning number>
```

Only warnings with numbers can be disabled or enabled. Warning numbers are specified at the end of each message in the list of compilation errors or in the list found in the warning tab.
Par exemple, pour désactiver le warning suivant :

*1: Redefinition of variable $a (550.10)*

... you just need to write the following comments in your 4D method:

```4d
  var $a : Text
  $a:="hello world"
  
  //%W-550.10
  var $a : Text
  //%W+550.10
  
```

:::note

The special warnings comments have priority over the warnings display settings set in the warning tab.

:::

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
Procédure ou Fonction <Nom méthode>(type paramètres):
type résultat, nombre d'appels, Thread Safe ou Thread Unsafe
```

### Fichier d’erreurs

You can choose whether or not to generate an error file during compilation using the [**Generate error file**](#generate-error-file) option in the compiler settings. Le fichier d'erreur est automatiquement nommé `projectName_errors.xml` et est placé dans le [dossier Logs](Project/architecture.md#logs) du projet.

Bien que les erreurs soient directement accessibles via la [fenêtre de compilation](#compilation), il peut être intéressant de disposer d’un fichier d’erreurs qu’il est alors possible de transmettre d’un poste à l’autre. Le fichier d’erreurs est généré au format XML afin de faciliter l’analyse automatique de son contenu. Il permet également la création d’interfaces personnalisées de présentation des erreurs.

Le fichier d’erreurs est plus ou moins long suivant le nombre d’erreurs et de warnings délivrés par le compilateur.

Le fichier d’erreurs est structuré ainsi :

- En tête de ce fichier se trouve la liste des erreurs et warnings, triée par méthode et dans leur ordre de création dans 4D.
- Sous la rubrique ***Erreurs générales*** sont regroupées toutes les impossibilités de typage et les ambiguïtés d’identité. Ces indications sont détaillées de la façon suivante :
  - le numéro de ligne dans la méthode (le numéro 0 est retourné pour les erreurs générales)
  - l’attribut warning indique si l’anomalie détectée est un warning (warning="true") ou une erreur (warning="false")
  - un diagnostic sur la nature de l’erreur

Si votre projet ne présente aucune erreur générale, le fichier ne comporte pas de section *Erreurs générales*.

Un fichier d’erreurs peut donc comporter trois types de messages :

- **Erreurs attachées à une ligne précise** : Ces erreurs vous sont indiquées accompagnées de leur contexte (la ligne où elles ont été détectées) et d’un commentaire.  Elles apparaissent lorsque le compilateur rencontre une expression qui lui pose un problème, que ce soit de typage ou de syntaxe. Dans la fenêtre du compilateur, double-cliquez sur chaque erreur détectée afin d'ouvrir la méthode concernée directement dans l'éditeur de code 4D, la ligne contenant l'erreur étant mise en évidence.

- **Erreurs générales** : Il s’agit d’erreurs qui ne permettent pas le passage en passe de compilation. Le compilateur délivre une erreur générale dans deux cas :
  - Si le type d’une variable process ou interprocess n’a pas pu être déterminé.
  - Si deux objets de nature différente portent le même nom.

Ces erreurs sont dites générales parce qu’elles ne peuvent être rattachées à aucune méthode en particulier. En effet, le compilateur n’a pu procéder au typage nulle part dans la base pour le premier cas. Dans le second, il ne peut choisir d’associer un nom à un objet plutôt qu’à un autre.

- **Warnings** : Les warnings ne sont pas des erreurs. Ils n’empêchent pas la compilation de la base, il s’agit simplement de points sur lesquels le compilateur souhaite attirer votre attention parce qu’il y a un risque d’erreur. Dans la fenêtre de compilation, les warnings apparaissent en caractères italiques. Il vous suffit de double-cliquer sur le libellé d’un warning pour ouvrir la méthode concernée dans l'éditeur de code 4D à la ligne correspondante.

### Contrôle d’exécution

Le code généré par le compilateur de 4D vérifie automatiquement que chaque accès à un élément de tableau ou à un indice de chaîne est effectué à l'intérieur de la plage des éléments de tableau ou des caractères de la chaîne. Les accès hors plage (out of range) provoqueront des erreurs d'exécution.

Dans certains cas, vous pouvez souhaiter que le contrôle d’exécution ne s’applique pas sur des parties fiabilisées du code. En effet, notamment dans le cas de boucles répétées de nombreuses fois et lors de l’exécution de la base compilée sur des machines anciennes, ce contrôle peut ralentir sensiblement les traitements. Dans la mesure où vous avez la certitude que le code en question est fiable et ne peut provoquer d’erreur système, vous pouvez désactiver localement le contrôle d’exécution.

Pour cela, vous devez encadrer le code à exclure du contrôle d’exécution avec les commentaires spéciaux `//%R-` et `//%R+`. Le commentaire `//%R-` désactive le contrôle d’exécution et `//%R+` le réactive :

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

Les deux compilateurs sont intégrés dans 4D. Le compilateur adéquat est automatiquement sélectionné en fonction de l'option [Cible de compilation](#cible-de-compilation).

### Compilateur classique

Le compilateur classique génère du code compilé natif pour les processeurs Intel/AMD sur n'importe quelle machine. Il ne nécessite aucune configuration particulière.

Le code compilé qui en résulte est stocké dans le dossier [DerivedData](architecture.md#deriveddata) du projet.

### Compilateur Silicon

Le compilateur Silicon génère du code compilé natif pour les processeurs Apple Silicon tels que le *Apple M1*.

Le code compilé qui en résulte est stocké dans le dossier [Libraries](architecture.md#libraries) du projet.

#### Conditions requises

- **Ordinateur Apple** : Le compilateur Silicon peut uniquement être lancé sur une machine Apple.
- **Architecture projet de 4D** : Le compilateur Silicon est uniquement disponible pour les développements 4D utilisant l'[architecture projet](architecture.md).
- **Xcode ou Developer Tools**: Le compilateur Silicon fait appel au compilateur macOS open-source **Clang** pour compiler le projet à partir du code C++ à la [deuxième étape](#compilation-incrementale) de la compilation. *clang* nécessite des bibliothèques natives Apple, qui sont fournies soit par **Xcode** soit par **Developer Tools**.
  - **Si vous avez déjà installé** Xcode ou Developer Tools sur votre ordinateur, vous devez juste vous assurer que sa version est conforme aux spécifications de 4D.
  - **Si vous n'avez pas déjà installé** l'un de ces outils sur votre machine, il vous sera nécessaire d'en télécharger un depuis le site web Apple Developer.

> Nois recommandons **Xcode**, qui est plus simple à installer. Il est tout à fait possible d'installer **Developer Tools** qui est plus compact, mais son installation est un peu plus complexe.

Dans tous les cas, le compilateur Silicon de 4D vous avertira si votre configuration ne correspond pas aux conditions requises.

#### Compilation incrémentale

Le compilateur Silicon est incrémental, ce qui signifie que :

- Los de la compilation initiale, **toutes les méthodes 4D** sont compilées. Cette étape peut prendre un certain temps. Cependant, elle n'est nécessaire qu'une fois.
- Lors de toutes les compilations ultérieures, **seules les méthodes nouvelles ou modifiées** sont traitées, ce qui réduit considérablement la durée de compilation.
