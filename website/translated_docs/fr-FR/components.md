---
id: components
title: Compsants
---

Un composant 4D est un ensemble d’objets 4D représentant une ou plusieurs fonctionnalité(s), qu’il est possible d’installer dans différentes bases. Par exemple, vous pouvez développer un composant 4D de courrier électronique gérant tous les aspects de l’envoi, la réception et le stockage d’emails au sein des bases 4D.

La création et l’installation des composants 4D s’effectuent directement depuis 4D. Schématiquement, les composants sont gérés comme des [plug-ins](Concepts/plug-ins.md). Les principes sont les suivants :

- Un composant est un simple fichier de structure (compilé ou non compilé) d’architecture standard ou sous forme de package (cf. paragraphe Extension .4dbase).
- Pour installer un composant dans une base, il suffit de le copier dans le dossier “Components” de la base, placé à côté du fichier de structure ou à côté de l'application 4D exécutable.
- Un composant peut appeler la plupart des éléments 4D : des méthodes projet, des formulaires projet, des barres de menus, des listes à choix multiples, des images issues de la bibliothèque, etc. Il ne peut pas appeler des méthodes base et des triggers.
- Il n’est pas possible d’exploiter des tables standard ou des fichiers de données dans les composants 4D. En revanche, un composant peut créer et/ou utiliser des tables, des champs et des fichiers de données via les mécanismes des bases externes. Les bases externes sont des bases 4D indépendantes manipulées via les commandes SQL. 

## Définitions

Les mécanismes de gestion des composants dans 4D nécessitent la mise en oeuvre des concepts et de la terminologie suivants :

- **Base matrice :** base de données 4D utilisée pour développer le composant. La base matrice est une base standard, sans attribut spécifique. Une base matrice constitue un seul composant. La base matrice est destinée à être copiée, compilée ou non, dans le dossier Components de l'application 4D ou de la base devant utiliser le composant (la base hôte).
- **Base hôte :** base dans laquelle est installé et utilisé un composant.
- **Composant :** base matrice, compilée ou non, copiée dans le dossier Components de l'application 4D ou de la base hôte et dont le contenu est utilisé dans les bases hôtes. 

Il est à noter qu’une base peut donc être à la fois “matrice” et “hôte”, c’est-à-dire qu’une base matrice peut elle-même utiliser un ou plusieurs composants. En revanche, une base utilisée comme composant ne peut pas elle-même utiliser un composant : un seul niveau de composant est chargé.

### Protection des composants : la compilation

Par défaut, toutes les méthodes projet d’une base matrice installée comme composant sont virtuellement visibles depuis la base hôte. En particulier :

- Les méthodes projet partagées sont accessibles dans la Page Méthodes de l’Explorateur et peuvent être appelées dans les méthodes de la base hôte. Leur contenu peut être sélectionné et copié dans la zone de prévisualisation de l’Explorateur. Elles peuvent également être visualisées dans le débogueur. Il n’est toutefois pas possible de les ouvrir dans l’éditeur de méthodes ni de les modifier.
- Les autres méthodes projet de la base matrice n’apparaissent pas dans l’Explorateur mais peuvent également être visualisées dans le débogueur de la base hôte. 

Pour protéger efficacement les méthodes projet d’un composant, il vous suffit simplement de compiler la base matrice et de la fournir sous forme de fichier .4dc (base compilée ne contenant pas le code interprété). Lorsqu’une base matrice compilée est installée comme composant :

- Les méthodes projet partagées sont accessibles dans la Page Méthodes de l’Explorateur et peuvent être appelées dans les méthodes de la base hôte. En revanche, leur contenu n’apparaît pas dans la zone de prévisualisation ni dans le débogueur.
- Les autres méthodes projet de la base matrice n’apparaissent jamais. 

## Sharing of project methods

All the project methods of a matrix database are by definition included in the component (the database is the component), which means that they can be called and executed by the component.

On the other hand, by default these project methods will not be visible, nor can they be called in the host database. In the matrix database, you must explicitly designate the methods that you want to share with the host database. These project methods can be called in the code of the host database (but they cannot be modified in the Method editor of the host database). These methods form **entry points** in the component.

**Note:** Conversely, for security reasons, by default a component cannot execute project methods belonging to the host database. In certain cases, you may need to allow a component to access the project methods of your host database. To do this, you must explicitly designate the project methods of the host database that you want to make accessible to the components.

![](assets/en/Concepts/pict516563.en.png)

## Passing variables

The local, process and interprocess variables are not shared between components and host databases. The only way to access component variables from the host database and vice versa is using pointers.

Example using an array:

```code4d
//In the host database:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
```

Examples using variables:

```code4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```

When you use pointers to allow components and the host database to communicate, you need to take the following specificities into account:

- The `Get pointer` command will not return a pointer to a variable of the host database if it is called from a component and vice versa.

- The component architecture allows the coexistence, within the same interpreted database, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled database). In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode. Let’s illustrate this principle with the following example: given two components, C (compiled) and I (interpreted), installed in the same host database.
    
    - If component C defines the `myCvar` variable, component I can access the value of this variable by using the pointer `->myCvar`.
    - If component I defines the `myIvar` variable, component C cannot access this variable by using the pointer `->myIvar`. This syntax causes an execution error. 

- The comparison of pointers using the `RESOLVE POINTER` command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host database (or another component). The type of the variable can even be different in both contexts. If the `myptr1` and `myptr2` pointers each point to a variable, the following comparison will produce an incorrect result:

```code4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      //This test returns True even though the variables are different
```

In this case, it is necessary to use the comparison of pointers:

```code4d
     If(myptr1=myptr2) //This test returns False
```

## Access to tables of the host database

Although components cannot use tables, pointers can permit host databases and components to communicate with each other. For example, here is a method that could be called from a component:

```code4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Within the component, the code of the `methCreateRec` method:

```code4d
C_POINTER($1) //Pointer on a table in host database
C_POINTER($2) //Pointer on a field in host database
C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## Scope of language commands

Except for [Unusable commands](#unusable-commands), a component can use any command of the 4D language.

When commands are called from a component, they are executed in the context of the component, except for the `EXECUTE METHOD` command that uses the context of the method specified by the command. Also note that the read commands of the “Users and Groups” theme can be used from a component but will read the users and groups of the host database (a component does not have its own users and groups).

The `SET DATABASE PARAMETER` and `Get database parameter` commands are an exception: their scope is global to the database. When these commands are called from a component, they are applied to the host database.

Furthermore, specific measures have been specified for the `Structure file` and `Get 4D folder` commands when they are used in the framework of components.

The `COMPONENT LIST` command can be used to obtain the list of components that are loaded by the host database.

### Unusable commands

The following commands are not compatible for use within a component because they modify the structure file — which is open in read-only. Their execution in a component will generate the error -10511, “The CommandName command cannot be called from a component”:

- `ON EVENT CALL`
- `Method called on event`
- `SET PICTURE TO LIBRARY|`
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

- The `Current form table` command returns `Nil` when it is called in the context of a project form. Consequently, it cannot be used in a component.
- Obviously, SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used in the framework of components. 

## Gestion des erreurs

Une [méthode de gestion d'erreurs](Concepts/error-handling.md) installée par la commande `APPELER SUR ERREUR` s'applique à la base en cours d'exécution uniquement. En cas d'erreur générée par un composant, la méthode d'appel sur erreur de la base hôte n'est pas appelée, et inversement.

## Utilisation de formulaires

- Seuls les "formulaires projet" (formulaires non associés à une table en particulier) peuvent être exploités directement dans un composant. Tous les formulaires projet présents dans la base matrice peuvent être utilisés par le composant. 
- Un composant peut faire appel à des formulaires table de la base hôte. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.

**Note:** If a component uses the `ADD RECORD` command, the current Input form of the host database will be displayed, in the context of the host database. Consequently, if the form includes variables, the component will not have access to it.

- You can publish component forms as subforms in the host databases. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components. This is described in Sharing of forms.

## Utilisation de tables et de champs

Un composant ne peut pas utiliser les tables et les champs définis dans la structure 4D de la base matrice. En revanche, il peut créer et utiliser des bases externes, et donc utiliser des tables et des champs en fonction de ses besoins. Les bases externes sont créées et gérées via le langage SQL. Une base externe est une base 4D indépendante de la base 4D principale, mais qui est manipulée depuis la base 4D principale. Utiliser une base externe signifie désigner temporairement cette base comme base courante, c’est-à-dire comme base cible des requêtes SQL exécutées par 4D. Les bases externes sont créées à l'aide de la commande SQL `CREATE DATABASE`.

### Exemple

Le code suivant est inclus dans un composant et effectue trois actions élémentaires avec une base de données externe :

- création de la base de données externe si elle n'existe pas déjà,
- ajout de données dans la base de données externe,
- lecture de données depuis la base de données externe.

Création de la base de données externe :

```code4d
<>MyDatabase:=Dossier 4D+"\MyDB" // (Windows) stocker les données dans un répertoire autorisé
 Debut SQL
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
 
 Fin SQL
```

Ecriture dans la base de données externe :

```code4d
 $Ptr_1:=$2 // récupération des données de la base hôte via des pointeurs
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Debut SQL
 
        USE DATABASE DATAFILE :[<>MyDatabase];
 
        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);
 
        USE DATABASE SQL_INTERNAL;
 
 Fin SQL
```

Lecture dans une base de données externe :

```code4d
 $Ptr_1:=$2 // accès aux données de la base hôte via des pointeurs
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 
 Debut SQL
 
    USE DATABASE DATAFILE :[<>MyDatabase];
 
    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;
 
    USE DATABASE SQL_INTERNAL;
 
 Fin SQL
```

## Utilisation de ressources

Les composants peuvent utiliser des ressources. Conformément aux principes de gestion des ressources, les fichiers de ressources des composants doivent être placés dans un dossier Resources, situé à côté du fichier .4db ou .4dc du composant. Si le composant est d’architecture .4dbase (architecture conseillée), le dossier Resources doit être placé à l’intérieur de ce dossier.

Les mécanismes automatiques sont opérationnels : les fichiers XLIFF présents dans le dossier Resources d’un composant seront chargés par ce composant.

Dans une base hôte contenant un ou plusieurs composant(s), chaque composant ainsi que la base hôte dispose de sa propre “chaîne de ressources”. Les ressources sont cloisonnées entre les différentes bases : il n’est pas possible d’accéder aux ressources du composant A depuis le composant B ou la base hôte.

## Aide en ligne des composants

Un mécanisme spécifique a été mis en place afin de permettre aux développeurs d’ajouter des aides en ligne à leurs composants. Le principe est semblable à celui proposé pour les bases de données 4D :

- L’aide du composant doit être fournie sous le forme d’un fichier suffixé .htm, .html ou (Windows uniquement) .chm,
- Le fichier d’aide doit être placé à côté du fichier de structure du composant et porter le même nom que le fichier de structure,
- L’aide est alors automatiquement chargée dans le menu Aide de l’application avec le libellé “Aide de...” suivi du nom du fichier d’aide.