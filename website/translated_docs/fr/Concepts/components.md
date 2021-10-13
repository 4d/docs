---
id: components
title: Composants
---

Un composant 4D est un ensemble d’objets 4D représentant une ou plusieurs fonctionnalité(s), qu’il est possible d’installer dans différentes applications. Par exemple, vous pouvez développer un composant 4D de courrier électronique gérant tous les aspects de l’envoi, la réception et le stockage d’emails au sein des applications 4D.

## Presentation

### Définitions

- **Matrix Project**: 4D project used for developing the component. The matrix project is a standard project with no specific attributes. A matrix project forms a single component.
- **Host Project**: Application project in which a component is installed and used.
- **Component**: Matrix project, compiled or not, copied into the [`Components`](Project/architecture.md) folder of the host application and whose contents are used in the host application.

### Principles

La création et l’installation des composants 4D s’effectuent directement depuis 4D. Schématiquement, les composants sont gérés comme des [plug-ins](Concepts/plug-ins.md). Les principes sont les suivants :

- A component consists of a regular 4D project file.
- To install a component, you simply need to copy it into the [`Components` folder of the project](Project/architecture.md). You can use aliases or shortcuts.
- A project can be both a “matrix” and a “host,” in other words, a matrix project can itself use one or more components. En revanche, une base utilisée comme composant ne peut pas elle-même utiliser un composant : un seul niveau de composant est chargé.
- A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, and so on. Il ne peut pas appeler des méthodes base et des triggers.
- Il n’est pas possible d’exploiter des tables standard ou des fichiers de données dans les composants 4D. En revanche, un composant peut créer et/ou utiliser des tables, des champs et des fichiers de données via les mécanismes des bases externes. Les bases externes sont des bases 4D indépendantes manipulées via les commandes SQL.
- A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used.




## Portée des commandes du langage

Hormis les [Commandes non utilisables](#unusable-commands), un composant peut utiliser toute commande du langage 4D.

When commands are called from a component, they are executed in the context of the component, except for the `EXECUTE METHOD` or `EXECUTE FORMULA` command that use the context of the method specified by the command. A noter également que les commandes de lecture du thème “Utilisateurs et groupes” sont utilisables depuis un composant mais lisent les utilisateurs et les groupes du projet hôte (un composant n’a pas d’utilisateurs et groupes propres).

Les commandes `EXECUTE METHOD` et `Get database parameter` constituent aussi une exception à ce principe : leur portée est globale à l'application. Lorsque ces commandes sont appelées depuis un composant, elles s’appliquent au projet d'application hôte.

Par ailleurs, des dispositions spécifiques sont définies pour les commandes `Structure file` et `Get 4D folder` lorsqu’elles sont utilisées dans le cadre des composants.

La commande `COMPONENT LIST` permet de connaître la liste des composants chargés par le projet hôte.


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
- Les commandes SQL de définition de données (`CREATE TABLE`, `DROP TABLE`, etc.) ne peuvent pas être utilisées dans les composants. Elles sont néanmoins prises en charge avec des bases de données externes (voir la commande SQL `CREATE DATABASE`).



## Partage des méthodes projet

All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed by the component.

On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. Ces méthodes constituent les **points d’entrée** dans le composant.

Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In certain cases, you may need to allow a component to access the project methods of your host project. In certain cases, you may need to allow a component to access the project methods of your host project.

![](assets/en/Concepts/pict516563.en.png)

Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the `EXECUTE FORMULA` or `EXECUTE METHOD` commands. Par exemple :

```4d 
// Host Method
component_method("host_method_name")
```


```4d
// component_method
 C_TEXT($1)
 EXECUTE METHOD($1)
```

> An interpreted host database that contains interpreted components can be compiled or syntax checked if it does not call methods of the interpreted component. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation.   
> Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the `EXECUTE METHOD` and `EXECUTE FORMULA` commands.



## Passage de variables

The local, process and interprocess variables are not shared between components and host projects. The local, process and interprocess variables are not shared between components and host projects.

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

Without a pointer, a component can still access the value of a host database variable (but not the variable itself) and vice versa:

```4d
//In the host database
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method gets "DoSomething" in $1 (but not the $input_t variable)
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

## Gestion des erreurs

Une [méthode de gestion d'erreurs](Concepts/error-handling.md) installée par la commande `ON ERR CALL` s'applique à l'application en cours d'exécution uniquement. En cas d'erreur générée par un composant, la méthode d'appel sur erreur `ON ERR CALL` du prpjet hôte n'est pas appelée, et inversement.


## Accès aux tables du projet hôte

Although components cannot use tables, pointers can allow host projects and components to communicate with each other. Par exemple, voici une méthode pouvant être appelée depuis un composant :

```4d
// appeler une méthode composant
methCreateRec(->[PERSONNES];->[PERSONNES]Nom;"Julie Andrews")
```

Dans le composant, le code de la méthode `methCreateRec` :

```4d
C_POINTER($1) //Pointeur vers une table du projet hôte
C_POINTER($2) //Pointeur vers un champ du projet hôte
C_TEXT($3) // Valeur à insérer

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

> In the context of a component, 4D assumes that a reference to a table form is a reference to the host table form (as components can't have tables.)

## Utilisation de tables et de champs

Un composant ne peut pas utiliser les tables et les champs définis dans la structure 4D du projet matrice. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont créées et gérées via le langage SQL. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Utiliser une base externe signifie désigner temporairement cette base comme base courante, c’est-à-dire comme base cible des requêtes SQL exécutées par 4D. Les bases externes sont créées à l'aide de la commande SQL `CREATE DATABASE`.

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
 $Ptr_1:=$2 // récupère des données depuis le projet hôte via des pointeurs
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
 $Ptr_1:=$2 // accède aux données du projet hôte via des pointeurs
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

- Seuls les "formulaires projet" (formulaires non associés à une table en particulier) peuvent être exploités directement dans un composant. Un composant peut faire appel à des formulaires table du projet hôte.
- Un composant peut faire appel à des formulaires table du projet hôte. A noter qu’il est nécessaire dans ce cas d’utiliser des pointeurs plutôt que des noms de table entre [] pour désigner les formulaires dans le code du composant.

> If a component uses the `ADD RECORD` command, the current Input form of the host project will be displayed, in the context of the host project. Par conséquent, si le formulaire comporte des variables, le composant n’y aura pas accès.

- Vous pouvez publier des formulaires de composants comme sous-formulaires dans les projets hôtes. Avec ce principe, vous pouvez notamment développer des composants proposant des objets graphiques. Par exemple, les Widgets proposés par 4D sont basés sur l’emploi de sous-formulaires en composants.

> In the context of a component, any referenced project form must belong to the component. For example, inside a component, referencing a host project form using `DIALOG` or `Open form window` will throw an error.


## Utilisation de ressources

Components can use resources located in the Resources folder of the component.

Les mécanismes automatiques sont opérationnels : les fichiers XLIFF présents dans le dossier Resources d’un composant seront chargés par ce composant.

Dans un projet hôte contenant un ou plusieurs composants, chaque composant ainsi que les projets hôtes ont leur propre «chaîne de ressources» Dans un projet hôte contenant un ou plusieurs composants, chaque composant ainsi que les projets hôtes ont leur propre «chaîne de ressources» Dans un projet hôte contenant un ou plusieurs composants, chaque composant ainsi que les projets hôtes ont leur propre «chaîne de ressources» Les ressources sont divisées entre les différents projets : il n'est pas possible d'accéder aux ressources du composant A depuis le composant B ou depuis le projet hôte.


## Executing initialization code

A component can execute 4D code automatically when opening or closing the host database, for example in order to load and/or save the preferences or user states related to the operation of the host database.

Executing initialization or closing code is done by means of the `On Host Database Event` database method.

> For security reasons, you must explicitly authorize the execution of the `On Host Database Event` database method in the host database in order to be able to call it. To do this, you must check the **Execute "On Host Database Event" method of the components** option on the Security page the Settings.


## Protection des composants : la compilation

By default, all the project methods of a matrix project installed as a component are potentially visible from the host project. En particulier :

- The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host project. Leur contenu peut être sélectionné et copié dans la zone de prévisualisation de l’Explorateur. Elles peuvent également être visualisées dans le débogueur. However, it's not possible to open them in the Method editor or modify them.
- The other project methods of the matrix project do not appear in the Explorer but they too can be viewed in the debugger of the host project.

To protect the project methods of a component effectively, simply compile the matrix project and provide it in the form of a .4dz file. When a compiled matrix project is installed as a component:

- The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host project. However, their contents will not appear in the preview area and in the debugger.
- The other project methods of the matrix project will never appear. 



