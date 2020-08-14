---
id: components
title: Komponenten
---

A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.

4D Komponenten werden direkt aus 4D erstellt und installiert. Komponenten werden ähnlich wie [ Plug-Ins](Concepts/plug-ins.md) verwaltet. Es gelten folgende Regeln:

- Eine Komponente besteht aus einer gängigen Strukturdatei (kompiliert oder nicht) mit der Standardarchitektur oder in Form eines Pakets (siehe .4dbase Extension).
- To install a component in an application project, you simply need to copy it into the "Components" folder of the project, at the same level as the Project folder.
- Eine Komponente kann die meisten der 4D Elemente aufrufen: Projektmethoden, Projektformulare, Menüleisten, Auswahllisten, Bilder aus der Objektbibliothiek, usw. Sie kann keine Datenbankmethoden und Trigger aufrufen.
- In 4D Komponenten können Sie weder Standardtabellen noch Datendateien verwenden. Eine Komponente kann jedoch Tabellen, Felder und Datendateien über Operationen externer Anwendungen erstellen bzw. verwenden. Dies sind separate 4D Anwendungen, in denen Sie mit SQL Befehlen arbeiten.


## Definitionen

Zur Handhabung von Komponenten in 4D sind folgende Begriffe und Konzepte von Bedeutung:

- **Matrix Project**: 4D project used for developing the component. The matrix project is a standard project with no specific attributes. A matrix project forms a single component. The matrix project is intended to be copied, compiled or not, into the Components folder of the project that will be using the component (host application project).
- **Host Project**: Application project in which a component is installed and used.
- **Component**: Matrix project, compiled or not, copied into the Components folder of the host application and whose contents are used in the host applications.

It should be noted that a project can be both a “matrix” and a “host,” in other words, a matrix project can itself use one or more components. Eine Komponente kann dagegen selbst keine untergeordneten Komponenten verwenden.


### Komponenten durch Kompilieren schützen

By default, all the project methods of a matrix project installed as a component are potentially visible from the host project. Das bedeutet im einzelnen:

- The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host project. Ihr Inhalt lässt sich auswählen und aus der Vorschau des Explorers kopieren. Sie sind auch im Debugger sichtbar. Sie lassen sich jedoch im Methodeneditor weder öffnen, noch verändern.
- The other project methods of the matrix project do not appear in the Explorer but they too can be viewed in the debugger of the host project.

To protect the project methods of a component effectively, simply compile the matrix project and provide it in the form of a .4dz file. When a compiled matrix project is installed as a component:

- The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host project. Ihr Inhalt erscheint jedoch weder in der Vorschau noch im Debugger.
- The other project methods of the matrix project will never appear.


## Projektmethoden gemeinsam nutzen
All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed by the component.

On the other hand, by default these project methods will not be visible, nor can they be called in the host projects. In the matrix project, you must explicitly designate the methods that you want to share with the host project. These project methods can be called in the code of the host project (but they cannot be modified in the Method editor of the host database). These methods form **entry points** in the component.

**Note:** Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In certain cases, you may need to allow a component to access the project methods of your host project. To do this, you must explicitly designate the project methods of the host project that you want to make accessible to the components.

![](assets/en/Concepts/pict516563.en.png)

## Variablen übergeben

The local, process and interprocess variables are not shared between components and host projects. The only way to access component variables from the host project and vice versa is using pointers.

Beispiel mit Array:

```4d
//In the host project:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
```

Beispiele mit Variablen:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```


When you use pointers to allow components and the host project to communicate, you need to take the following specificities into account:

- The `Get pointer` command will not return a pointer to a variable of the host project if it is called from a component and vice versa.

- The component architecture allows the coexistence, within the same interpreted project, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled project). Für diesen Fall gilt folgende Regelung für Zeiger: Der Interpreter kann einen im kompilierten Modus erstellten Zeiger auflösen. Er kann jedoch im kompilierten Modus keinen Zeiger auflösen, der im interpretierten Modus erstellt wurde. Let’s illustrate this principle with the following example: given two components, C (compiled) and I (interpreted), installed in the same host project.
 - Definiert Komponente C die Variable `myCvar`,  kann Komponente I über den Zeiger `->myCvar` auf diese Variable zugreifen.
 - Definiert Komponente I die Variable `myIvar` variable, kann Komponente C über den Zeiger` ->myIvar` nicht auf diese Variable zugreifen. Diese Syntax verursacht einen Ausführungsfehler.

- The comparison of pointers using the `RESOLVE POINTER` command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host project (or another component). Auch der Variablentyp kann in beiden Kontexten unterschiedlich sein. Zeigen z. B. `myptr1` und `myptr2` jeweils auf eine Variable, kann der folgende Vergleich ein inkorrektes Ergebnis zurückgeben:

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      //This test returns True even though the variables are different
```
In diesem Fall müssen Sie die Zeiger miteinander vergleichen:
```4d
     If(myptr1=myptr2) //This test returns False
```

## Access to tables of the host project

Although components cannot use tables, pointers can permit host projects and components to communicate with each other. Hier sehen Sie beispielsweise eine Methode, die sich in einer Komponente aufrufen lässt:

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Der Code von `methCreateRec` in der Komponente lautet:

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

## Reichweite der Befehle der Programmiersprache

Eine Komponente kann jeden Befehl der 4D Programmiersprache verwenden, außer er gehört zur Liste der [ nicht erlaubten Befehle](#unusable-commands).

Von einer Komponente aufgerufene Befehle laufen im Kontext dieser Komponente, außer für den Befehl `EXECUTE METHOD`. Dieser verwendet den Kontext der durch den Befehl angegebenen Methode. Also note that the read commands of the “Users and Groups” theme can be used from a component but will read the users and groups of the host project (a component does not have its own users and groups).

The `SET DATABASE PARAMETER` and `Get database parameter` commands are an exception: their scope is global to the application. When these commands are called from a component, they are applied to the host application project.

Darüberhinaus wurden spezifische Maßnahmen für die 4D Funktionen `Structure file` und `Get 4D folder` definiert, wenn sie im Rahmen von Komponenten verwendet werden.

The `COMPONENT LIST` command can be used to obtain the list of components that are loaded by the host project.


### Nicht verwendbare Befehle

Die folgenden Befehle eignen sich nicht zur Verwendung in einer Komponenten, da sie die Strukturdatei verändern — die im Nur-Lesen Modus geöffnet ist. Bei Ausführen in einer Komponente wird der Fehler -10511 generiert: "Der Befehl "{command_name}" kann von einer Komponente nicht aufgerufen werden".

- `ON EVENT CALL`
- `In einem Ereignis aufgerufene Methode`
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

**Hinweise:**

- The `Current form table` command returns `Nil` when it is called in the context of a project form. Consequently, it cannot be used in a component.
- SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used on the component project. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## Error handling

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running application. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host project is not called, and vice versa.

## Use of forms

- Only “project forms” (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix project can be used by the component.
- A component can call table forms of the host project. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.

**Note:** If a component uses the `ADD RECORD` command, the current Input form of the host project will be displayed, in the context of the host project. Consequently, if the form includes variables, the component will not have access to it.

- You can publish component forms as subforms in the host projects. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components.

## Use of tables and fields

A component cannot use the tables and fields defined in the 4D structure of the matrix project. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. An external database is a 4D project that is independent from the main 4D project, but that you can work with from the main 4D project. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL `CREATE DATABASE` command.

### Beispiel

The following code is included in a component and performs three basic actions with an external database:

- creates the external database if it does not already exist,
- adds data to the external database,
- reads data from the external database.

Creating the external database:

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

Writing in the external database:

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

Reading from an external database:

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

## Use of resources

Components can use resources. In conformity with the resource management principle, if the component is of the .4dbase architecture (recommended architecture), the Resources folder must be placed inside this folder.

Automatic mechanisms are operational: the XLIFF files found in the Resources folder of a component will be loaded by this component.

In a host project containing one or more components, each component as well as the host projects has its own “resources string.” Resources are partitioned between the different projects: it is not possible to access the resources of component A from component B or the host project.

## On-line help for components
A specific mechanism has been implemented in order to allow developers to add on-line help to their components. The principle is the same as that provided for 4D projects:

- The component help must be provided as a file suffixed .htm, .html or (Windows only) .chm,
- The help file must be put next to the structure file of the component and have the same name as the structure file,
- This file is then automatically loaded into the Help menu of the application with the title “Help for...” followed by the name of the help file. 