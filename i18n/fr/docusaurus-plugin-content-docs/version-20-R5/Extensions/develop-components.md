---
id: develop-components
title: Développement de composants
---

A 4D component is a set of 4D functions, methods, and forms representing one or more functionalities that can be [installed and used in 4D applications](Concepts/components.md). Par exemple, vous pouvez développer un composant 4D de courrier électronique gérant tous les aspects de l’envoi, la réception et le stockage d’emails au sein des applications 4D.

Vous pouvez développer des composants 4D pour vos propres besoins et les garder privés. You can also [share your components with the 4D community](https://github.com/topics/4d-component).

## Définitions

- **Matrix Project**: 4D project used for developing the component. C'est un projet standard, sans attribut spécifique. Il constitue un seul composant.
- **Host Project**: Application project in which a component is installed and used.
- **Component**: Matrix project that can be compiled or [built](Desktop/building.md#build-component), copied into the [`Components`](Project/architecture.md) folder of the host application and whose contents are used in the host application.

## Principes de base

La création et l’installation des composants 4D s’effectuent directement depuis 4D :

- To install a component, you simply need to copy the component files into the [`Components` folder of the project](Project/architecture.md). Vous pouvez utiliser des alias ou des raccourcis.
- Un projet peut être à la fois "matrice" et "hôte", c'est-à-dire qu'un projet utilisé comme matrice peut lui-même utiliser un ou plusieurs composants. En revanche, un composant ne peut pas lui-même utiliser de "sous-composants".
- Un composant peut appeler la plupart des éléments 4D : des classes, des fonctions, des méthodes projet, des formulaires projet, des barres de menus, des listes à choix multiples, etc. Il ne peut pas appeler des méthodes base et des triggers.
- Il n’est pas possible d’exploiter le datastore, des tables standard ou des fichiers de données dans les composants 4D. En revanche, un composant peut créer et/ou utiliser des tables, des champs et des fichiers de données via les mécanismes des bases externes. Les bases externes sont des bases 4D indépendantes manipulées via les commandes SQL.
- Un projet hôte fonctionnant en mode interprété peut utiliser des composants interprétés ou compilés. Un projet hôte fonctionnant en mode compilé ne peut pas utiliser de composants interprétés. Dans ce cas, seuls les composants compilés peuvent être utilisés.

## Portée des commandes du langage

Except for [Unusable commands](#unusable-commands), a component can use any command of the 4D language.

When commands are called from a component, they are executed in the context of the component, except for the [`EXECUTE METHOD`](https://doc.4d.com/4dv20/help/command/en/page1007.html) or [`EXECUTE FORMULA`](https://doc.4d.com/4dv20/help/command/en/page63.html) command that use the context of the method specified by the command. A noter également que les commandes de lecture du thème “Utilisateurs et groupes” sont utilisables depuis un composant mais lisent les utilisateurs et les groupes du projet hôte (un composant n’a pas d’utilisateurs et groupes propres).

The [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html) and [`Get database parameter`](https://doc.4d.com/4dv20/help/command/en/page643.html) commands are an exception: their scope is global to the application. Lorsque ces commandes sont appelées depuis un composant, elles s’appliquent au projet d'application hôte.

Furthermore, specific measures have been specified for the `Structure file` and `Get 4D folder` commands when they are used in the framework of components.

The [`COMPONENT LIST`](https://doc.4d.com/4dv20/help/command/en/page1001.html) command can be used to obtain the list of components that are loaded by the host project.

### Commandes non utilisables

Les commandes suivantes ne sont pas compatibles avec une utilisation dans le cadre d’un composant car elles modifient le fichier de structure — ouvert en lecture. Leur exécution dans un composant provoque l’erreur -10511, “La commande NomCommande ne peut pas être appelée depuis un composant” :

- `ON EVENT CALL`
- `Method called on event`
- `SET PICTURE TO LIBRARY`
- `REMOVE PICTURE FROM LIBRARY`
- `SAVE LIST`
- `ARRAY TO LIST`
- `EDIT FORM`
- `CREATE USER FORM`
- `DELETE USER FORM`
- `CHANGE PASSWORD`
- `EDIT ACCESS`
- `Set group properties`
- `Set user properties`
- `DELETE USER`
- `CHANGE LICENSES`
- `BLOB TO USERS`
- `SET PLUGIN ACCESS`

**Notes:**

- The `Current form table` command returns `Nil` when it is called in the context of a project form. Par conséquent, elle ne peut pas être utilisée dans un composant.
- SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used on the component project. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## Partage des méthodes projet

Toutes les méthodes projet d’un projet utilisé comme matrice sont par définition incluses dans le composant (le projet est le composant), ce qui signifie qu’elles peuvent être appelées et exécutées dans le composant.

En revanche, par défaut ces méthodes projet ne seront ni visibles ni appelables par le projet hôte. In the matrix project, you must explicitly designate the methods that you want to share with the host project by checking the **Shared by components and host project** box in the method properties dialog box:

![](../assets/en/Concepts/shared-methods.png)

Les méthodes projet partagée peuvent être appelées dans le code du projet hôte (mais elles ne peuvent pas être modifiées dans l'éditeur de code du projet hôte). These methods are **entry points** of the component.

A l’inverse, pour des raisons de sécurité, par défaut un composant ne peut pas exécuter de méthode projet appartenant au projet hôte. Dans certains cas, vous pourrez avoir besoin d’autoriser un composant à accéder à des méthodes projet de votre projet hôte. To do this, you must explicitly designate which project methods of the host project you want to make accessible to the components (in the method properties, check the **Shared by components and host project** box).

![](../assets/en/Concepts/pict516563.en.png)

Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the [`EXECUTE FORMULA`](https://doc.4d.com/4dv20/help/command/en/page63.html) or [`EXECUTE METHOD`](https://doc.4d.com/4dv20/help/command/en/page1007.html) command. Par exemple :

```4d
// Méthode hôte
component_method("host_method_name")
```

```4d
// component_method
#DECLARE ($param : Text)
EXECUTE METHOD($param)
```

> Une base hôte interprétée qui contient des composants interprétés peut être compilée ou soumise à un contrôle syntaxique si elle n'appelle pas de méthodes du composant interprété. Dans le cas contraire, une boîte de dialogue d'avertissement apparaît lorsque vous tentez de lancer la compilation ou un contrôle syntaxique et il n'est pas possible d'effectuer l'opération.\
> Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the `EXECUTE METHOD` and `EXECUTE FORMULA` commands.

## Partage des classes et des fonctions

Par défaut, les classes et fonctions des composants ne peuvent pas être appelées depuis l'éditeur de code 4D du projet hôte. Si vous voulez que vos classes et fonctions de composants soient exposées dans les projets hôtes, vous devez déclarer un espace de nom (namespace) du composant. De plus, vous pouvez contrôler comment les classes de composants et les fonctions sont suggérées dans l'éditeur de code hôte.

### Déclaration du namespace

To allow classes and functions of your component to be exposed in the host projects, enter a value in the [**Component namespace in the class store** option in the General page](../settings/general.md#component-namespace-in-the-class-store) of the matrix project Settings. Par défaut, l'espace est vide : les classes du composant ne sont pas disponibles en dehors du contexte du composant.

![](../assets/en/settings/namespace.png)

> A _namespace_ ensures that no conflict emerges when a host project uses different components that have classes or functions with identical names. A component namespace must be compliant with [property naming rules](../Concepts/identifiers.md#object-properties).

When you enter a value, you declare that component classes and functions will be available in the [user class store (**cs**)](../Concepts/classes.md#cs) of the host project's code, through the `cs.<value>` namespace. For example, if you enter "eGeometry" as component namespace, assuming that you have created a `Rectangle` class containing a `getArea()` function, once your project is installed as a component, the developer of the host project can write:

```4d
//in host project
var $rect: cs.eGeometry.Rectangle
$rect:=cs.eGeometry.Rectangle.new(10;20)
$area:=$rect.getArea()
```

:::info

The namespace of a [compiled](#protection-of-components-compilation) component will be added between parentheses after the component name in the [Component Methods page](../Concepts/components.md#using-components) of the host projects:

![](../assets/en/settings/namesapece-explorer.png)

:::

Bien entendu, il est recommandé d'utiliser un nom distinctif pour éviter tout conflit. Si une classe utilisateur portant le même nom qu'un composant existe déjà dans le projet, la classe utilisateur est prise en compte et les classes du composant sont ignorées.

Les classes ORDA d'un composant ne sont pas disponibles dans le projet hôte. Par exemple, s'il existe une dataclass nommée Employees dans votre composant, vous ne pourrez pas utiliser une classe "cs.Mycomponent.Employee" dans le projet hôte.

### Classes cachées

Comme dans tout projet, vous pouvez créer des classes et des fonctions cachées dans le composant en préfixant les noms par un caractère de soulignement ou ("_"). When a [component namespace is defined](#declaring-the-component-namespace), hidden classes and functions of the component will not appear as suggestions when using code completion.

Notez cependant qu'elles peuvent toujours être utilisées si vous connaissez leurs noms. For example, the following syntax is valid even if the `_Rectangle` class is hidden:

```4d
$rect:=cs.eGeometry._Rectangle.new(10;20)
```

> Non-hidden functions inside a hidden class appear as suggestions when you use code completion with a class that [inherits](../Concepts/classes.md#inheritance) from it. For example, if a component has a `Teacher` class that inherits from a `_Person` class, code completion for `Teacher` suggests non-hidden functions from `_Person`.

## Complétion de code pour les composants compilés

To make your component easier to use for developers, you can check the [**Generate syntax file for code completion when compiled** option in the General page](../settings/general.md#component-namespace-in-the-class-store) of the matrix project Settings.

A syntax file (JSON format) is then automatically created during the compilation phase, filled with the syntax of your component's classes, functions, and [exposed methods](#sharing-of-project-methods), and placed in the `\Resources\en.lproj` folder of the component project. 4D utilise le contenu de ce fichier syntaxique pour générer une aide contextuelle dans l'éditeur de code, telle que la complétion de code et la syntaxe des fonctions :

![](../assets/en/settings/syntax-code-completion-2.png)
![](../assets/en/settings/syntax-code-completion-1.png)

If you don't enter a [component namespace](#declaring-the-component-namespace), the resources for the classes and exposed methods are not generated even if the syntax file option is checked.

## Passage de variables

Les composants et les projets hôtes ne partagent pas de variables locales, process ou interprocess. La seule façon de modifier les variables de composants du projet hôte et vice versa est d'utiliser des pointeurs.

Exemple utilisant un tableau :

```4d
//In the host project:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
```

Exemples utilisant des variables :

```4d
C_TEXT(myvariable)
component_method1(->myvariable)
```

```4d
C_POINTER($p)
$p:=component_method2(...)
```

Sans pointeur, un composant peut toujours accéder à la valeur d'une variable de base hôte (mais pas à la variable elle-même) et vice versa :

```4d
//Dans la base hôte
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method obtient "DoSomething" in $1 (mais pas la variable $input_t)
```

L’utilisation de pointeurs pour faire communiquer les composants et le projet hôte nécessite de prendre en compte les spécificités suivantes :

- The `Get pointer` command will not return a pointer to a variable of the host project if it is called from a component and vice versa.

- L’usage de pointeurs dans ce cas doit respecter le principe suivant : l’interpréteur peut dépointer un pointeur construit en mode compilé mais à l’inverse, en mode compilé, il n’est pas possible de dépointer un pointeur construit en mode interprété. L’usage de pointeurs dans ce cas doit respecter le principe suivant : l’interpréteur peut dépointer un pointeur construit en mode compilé mais à l’inverse, en mode compilé, il n’est pas possible de dépointer un pointeur construit en mode interprété.
  Illustrons ce principe par l’exemple suivant : soient deux composants, C (compilé) et I (interprété) installés dans le même projet hôte.

- If component C defines the `myCvar` variable, component I can access the value of this variable by using the pointer `->myCvar`.

- If component I defines the `myIvar` variable, component C cannot access this variable by using the pointer `->myIvar`. Cette syntaxe provoque une erreur d’exécution.

- The comparison of pointers using the `RESOLVE POINTER` command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host project (or another component). Le type de la variable peut même être différent dans les deux contextes. If the `myptr1` and `myptr2` pointers each point to a variable, the following comparison will produce an incorrect result:

```4d
     RESOLVE POINTER(monptr1;vNomVar1;vnumtable1;vnumchamp1)
      RESOLVE POINTER(monptr2;vNomVar2;vnumtable2;vnumchamp2)
      If(vNomVar1=vNomVar2)
       //Ce test retourne Vrai alors que les variables sont différentes
```

Dans ce cas, il est nécessaire d’utiliser la comparaison de pointeurs :

```4d
     If(monptr1=monptr2) //Ce test retourne Faux
```

## Gestion des erreurs

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running application. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host project is not called, and vice versa.

## Accès aux tables du projet hôte

Bien que les composants ne puissent pas utiliser de tables, les pointeurs permettent au projet hôte et au composant de communiquer. Par exemple, voici une méthode pouvant être appelée depuis un composant :

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Within the component, the code of the `methCreateRec` method:

```4d
C_POINTER($1) //Pointer on a table in host project
C_POINTER($2) //Pointer on a field in host project
C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

> Dans le contexte d'un composant, 4D suppose qu'une référence à un formulaire table est une référence au formulaire table hôte (car les composants ne peuvent pas avoir de tables)

## Utilisation de tables et de champs

Un composant ne peut pas utiliser les tables et les champs définis dans la structure 4D du projet utilisé comme matrice. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont créées et gérées via le langage SQL. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Utiliser une base externe signifie désigner temporairement cette base comme base courante, c’est-à-dire comme base cible des requêtes SQL exécutées par 4D. You create external databases using the SQL `CREATE DATABASE` command.

### Exemple

Le code suivant est inclus dans un composant et effectue trois actions élémentaires avec une base de données externe :

- création de la base de données externe si elle n'existe pas déjà,
- ajout de données dans la base de données externe,
- lecture de données depuis la base de données externe.

Création de la base de données externe :

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) stores the data in an authorized directory
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );

        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

Ecriture dans la base de données externe :

```4d
 $Ptr_1:=$2 // retrieves data from the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL

        USE DATABASE DATAFILE :[<>MyDatabase];

        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);

        USE DATABASE SQL_INTERNAL;


 End SQL
```

Lecture dans une base de données externe :

```4d
 $Ptr_1:=$2 // accesses data of the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Begin SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 End SQL
```

## Utilisation de formulaires

- Seuls les "formulaires projet" (formulaires non associés à une table en particulier) peuvent être exploités directement dans un composant. Tous les formulaires projet présents dans le projet matrice peuvent être utilisés par le composant.
- Un composant peut faire appel à des formulaires table du projet hôte. A noter qu’il est nécessaire dans ce cas d’utiliser des pointeurs plutôt que des noms de table entre [] pour désigner les formulaires dans le code du composant.

> If a component uses the `ADD RECORD` command, the current Input form of the host project will be displayed, in the context of the host project. Par conséquent, si le formulaire comporte des variables, le composant n’y aura pas accès.

- You can [publish component forms as subforms](../FormEditor/properties_FormProperties.md#published-as-subform) in the host projects. Avec ce principe, vous pouvez notamment développer des composants proposant des objets graphiques. Par exemple, les Widgets proposés par 4D sont basés sur l’emploi de sous-formulaires en composants.

> Dans le contexte d'un composant, tout formulaire projet référencé doit appartenir au composant. For example, inside a component, referencing a host project form using `DIALOG` or `Open form window` will throw an error.

## Utilisation de ressources

Les composants peuvent utiliser des ressources situées dans le dossier Ressources du composant.

Les mécanismes automatiques sont opérationnels : les fichiers XLIFF présents dans le dossier Resources d’un composant seront chargés par ce composant.

Dans un projet hôte contenant un ou plusieurs composants, chaque composant ainsi que les projets hôtes ont leur propre «chaîne de ressources» Les ressources sont réparties entre les différents projets : il n'est pas possible d'accéder aux ressources du composant A à partir du composant B ou du projet hôte.

## Exécution du code d'initialisation

Un composant peut exécuter automatiquement du code 4D lors de l'ouverture ou de la fermeture de la base hôte, par exemple pour charger et/ou sauvegarder les préférences ou les états utilisateur liés au fonctionnement de la base hôte.

Executing initialization or closing code is done by means of the `On Host Database Event` database method.

> For security reasons, you must explicitly authorize the execution of the `On Host Database Event` database method in the host database in order to be able to call it. To do this, you must check the [**Execute "On Host Database Event" method of the components** option](../settings/security.md#options) in the Security page of the Settings.

## Protection des composants : la compilation

Par défaut, tout le code d’un projet utilisé comme matrice installé comme composant est virtuellement visible depuis le projet hôte. En particulier :

- Les méthodes projet partagées sont accessibles dans la Page Méthodes de l’Explorateur et peuvent être appelées dans les méthodes du projet hôte. Leur contenu peut être sélectionné et copié dans la zone de prévisualisation de l’Explorateur. Elles peuvent également être visualisées dans le débogueur. Cependant, il n'est pas possible de les ouvrir dans l'éditeur de code ou de les modifier.
- Les autres méthodes projet du projet utilisé comme matrice n’apparaissent pas dans l’Explorateur mais peuvent également être visualisées dans le débogueur du projet hôte.
- The non-hidden classes and functions can be viewed in the debugger [if a namespace is declared](#declaring-the-component-namespace).

To protect the code of a component effectively, simply [compile and build](Desktop/building.md#build-component) the matrix project and provide it in the form of a .4dz file. Lorsqu’un projet compilé utilisé comme matrice est installé comme composant :

- Les méthodes projet, classes et fonctions partagées peuvent être appelées dans les méthodes du projet hôte et sont également visibles dans la page Méthodes de l'explorateur. En revanche, leur contenu n’apparaît pas dans la zone de prévisualisation ni dans le débogueur.
- Les autres méthodes projet du projet utilisé comme matrice n’apparaissent jamais.

## Partage des composants

We encourage you to support the 4D developer community by sharing your components, preferably on the [GitHub platform](https://github.com/topics/4d-component). We recommend that you use the **`4d-component`** topic to be correctly referenced.
