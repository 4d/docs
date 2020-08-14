---
id: components
title: Composants
---

A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.

La création et l’installation des composants 4D s’effectuent directement depuis 4D. Schématiquement, les composants sont gérés comme des [plug-ins](Concepts/plug-ins.md). Les principes sont les suivants :

- Un composant est un simple fichier de structure (compilé ou non compilé) d’architecture standard ou sous forme de package (cf. paragraphe Extension .4dbase).
- To install a component in an application project, you simply need to copy it into the "Components" folder of the project, at the same level as the Project folder.
- Un composant peut appeler la plupart des éléments 4D : des méthodes projet, des formulaires projet, des barres de menus, des listes à choix multiples, des images issues de la bibliothèque, etc. Il ne peut pas appeler des méthodes base et des triggers.
- Il n’est pas possible d’exploiter des tables standard ou des fichiers de données dans les composants 4D. En revanche, un composant peut créer et/ou utiliser des tables, des champs et des fichiers de données via les mécanismes des bases externes. Les bases externes sont des bases 4D indépendantes manipulées via les commandes SQL.


## Définitions

Les mécanismes de gestion des composants dans 4D nécessitent la mise en oeuvre des concepts et de la terminologie suivants :

- **Matrix Project**: 4D project used for developing the component. The matrix project is a standard project with no specific attributes. A matrix project forms a single component. The matrix project is intended to be copied, compiled or not, into the Components folder of the project that will be using the component (host application project).
- **Host Project**: Application project in which a component is installed and used.
- **Component**: Matrix project, compiled or not, copied into the Components folder of the host application and whose contents are used in the host applications.

It should be noted that a project can be both a “matrix” and a “host,” in other words, a matrix project can itself use one or more components. En revanche, une base utilisée comme composant ne peut pas elle-même utiliser un composant : un seul niveau de composant est chargé.


### Protection des composants : la compilation

By default, all the project methods of a matrix project installed as a component are potentially visible from the host project. En particulier :

- The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host project. Leur contenu peut être sélectionné et copié dans la zone de prévisualisation de l’Explorateur. Elles peuvent également être visualisées dans le débogueur. Il n’est toutefois pas possible de les ouvrir dans l’éditeur de méthodes ni de les modifier.
- The other project methods of the matrix project do not appear in the Explorer but they too can be viewed in the debugger of the host project.

To protect the project methods of a component effectively, simply compile the matrix project and provide it in the form of a .4dz file. When a compiled matrix project is installed as a component:

- The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host project. En revanche, leur contenu n’apparaît pas dans la zone de prévisualisation ni dans le débogueur.
- The other project methods of the matrix project will never appear.


## Partage des méthodes projet
All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed by the component.

On the other hand, by default these project methods will not be visible, nor can they be called in the host projects. In the matrix project, you must explicitly designate the methods that you want to share with the host project. These project methods can be called in the code of the host project (but they cannot be modified in the Method editor of the host database). Ces méthodes constituent les **points d’entrée** dans le composant.

**Note:** Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In certain cases, you may need to allow a component to access the project methods of your host project. To do this, you must explicitly designate the project methods of the host project that you want to make accessible to the components.

![](assets/en/Concepts/pict516563.en.png)

## Passage de variables

The local, process and interprocess variables are not shared between components and host projects. The only way to access component variables from the host project and vice versa is using pointers.

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
 C_POINTER($p)
 $p:=component_method2(...)
```


When you use pointers to allow components and the host project to communicate, you need to take the following specificities into account:

- The `Get pointer` command will not return a pointer to a variable of the host project if it is called from a component and vice versa.

- The component architecture allows the coexistence, within the same interpreted project, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled project). L’usage de pointeurs dans ce cas doit respecter le principe suivant : l’interpréteur peut dépointer un pointeur construit en mode compilé mais à l’inverse, en mode compilé, il n’est pas possible de dépointer un pointeur construit en mode interprété. Let’s illustrate this principle with the following example: given two components, C (compiled) and I (interpreted), installed in the same host project.
 - Si le composant C définit la variable `mavarC`, le composant I peut accéder à la valeur de cette variable en utilisant le pointeur `->mavarC`.
 - Si le composant I définit la variable `mavarI`, le composant C ne peut pas accéder à cette variable en utilisant le pointeur `->mavarI`. Cette syntaxe provoque une erreur d’exécution.

- The comparison of pointers using the `RESOLVE POINTER` command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host project (or another component). Le type de la variable peut même être différent dans les deux contextes. Si les pointeurs `monptr1` et `monptr2` pointent chacun sur une variable, la comparaison suivante produira un résultat erroné :

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

## Access to tables of the host project

Although components cannot use tables, pointers can permit host projects and components to communicate with each other. Par exemple, voici une méthode pouvant être appelée depuis un composant :

```4d
// appeler une méthode composant
methCreateRec(->[PERSONNES];->[PERSONNES]Nom;"Julie Andrews")
```

Dans le composant, le code de la méthode `methCreateRec` :

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

## Portée des commandes du langage

Hormis les [Commandes non utilisables](#unusable-commands), un composant peut utiliser toute commande du langage 4D.

Lorsqu’elles sont appelées depuis un composant, les commandes s’exécutent dans le contexte du composant, à l’exception de la commande `EXECUTE METHOD` qui utilise le contexte de la méthode désignée par la commande. Also note that the read commands of the “Users and Groups” theme can be used from a component but will read the users and groups of the host project (a component does not have its own users and groups).

The `SET DATABASE PARAMETER` and `Get database parameter` commands are an exception: their scope is global to the application. When these commands are called from a component, they are applied to the host application project.

Par ailleurs, des dispositions spécifiques sont définies pour les commandes `Structure file` et `Get 4D folder` lorsqu’elles sont utilisées dans le cadre des composants.

The `COMPONENT LIST` command can be used to obtain the list of components that are loaded by the host project.


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

**Notes :**

- La commande `Table du formulaire courant` retourne `Nil` lorsqu’elle est appelée dans le contexte d’un formulaire projet. Par conséquent, elle ne peut pas être utilisée dans un composant.
- SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used on the component project. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## Gestion des erreurs

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running application. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host project is not called, and vice versa.

## Utilisation de formulaires

- Seuls les "formulaires projet" (formulaires non associés à une table en particulier) peuvent être exploités directement dans un composant. Any project forms present in the matrix project can be used by the component.
- A component can call table forms of the host project. A noter qu’il est nécessaire dans ce cas d’utiliser des pointeurs plutôt que des noms de table entre [] pour désigner les formulaires dans le code du composant.

**Note:** If a component uses the `ADD RECORD` command, the current Input form of the host project will be displayed, in the context of the host project. Par conséquent, si le formulaire comporte des variables, le composant n’y aura pas accès.

- You can publish component forms as subforms in the host projects. Avec ce principe, vous pouvez notamment développer des composants proposant des objets graphiques. Par exemple, les Widgets proposés par 4D sont basés sur l’emploi de sous-formulaires en composants.

## Utilisation de tables et de champs

A component cannot use the tables and fields defined in the 4D structure of the matrix project. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont créées et gérées via le langage SQL. An external database is a 4D project that is independent from the main 4D project, but that you can work with from the main 4D project. Utiliser une base externe signifie désigner temporairement cette base comme base courante, c’est-à-dire comme base cible des requêtes SQL exécutées par 4D. Les bases externes sont créées à l'aide de la commande SQL `CREATE DATABASE`.

### Exemple

Le code suivant est inclus dans un composant et effectue trois actions élémentaires avec une base de données externe :

- création de la base de données externe si elle n'existe pas déjà,
- ajout de données dans la base de données externe,
- lecture de données depuis la base de données externe.

Création de la base de données externe :

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) stocke les données dans un répertoire autorisé
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

## Utilisation de ressources

Les composants peuvent utiliser des ressources. Si le composant est d’architecture .4dbase (architecture conseillée), le dossier Resources doit être placé à l’intérieur de ce dossier.

Les mécanismes automatiques sont opérationnels : les fichiers XLIFF présents dans le dossier Resources d’un composant seront chargés par ce composant.

In a host project containing one or more components, each component as well as the host projects has its own “resources string.” Resources are partitioned between the different projects: it is not possible to access the resources of component A from component B or the host project.

## Aide en ligne des composants
Un mécanisme spécifique a été mis en place afin de permettre aux développeurs d’ajouter des aides en ligne à leurs composants. The principle is the same as that provided for 4D projects:

- L’aide du composant doit être fournie sous le forme d’un fichier suffixé .htm, .html ou (Windows uniquement) .chm,
- Le fichier d’aide doit être placé à côté du fichier de structure du composant et porter le même nom que le fichier de structure,
- L’aide est alors automatiquement chargée dans le menu Aide de l’application avec le libellé “Aide de...” suivi du nom du fichier d’aide. 