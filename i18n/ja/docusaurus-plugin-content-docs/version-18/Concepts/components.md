---
id: components
title: Components
---

A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different databases. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D databases.

Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like [plug-ins](Concepts/plug-ins.md) according to the following principles:

- A component consists of a regular structure file (compiled or not) having the standard architecture or in the form of a package (see .4dbase Extension).
- To install a component in a database, you simply need to copy it into the "Components" folder of the database, placed next to the structure file or next to the 4D executable application.
- A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, pictures from the library, and so on. It cannot call database methods and triggers.
- You cannot use standard tables or data files in 4D components. However, a component can create and/or use tables, fields and data files using mechanisms of external databases. These are separate 4D databases that you work with using SQL commands.

## Definitions

The component management mechanisms in 4D require the implementation of the following terms and concepts:

- **Matrix Database**: 4D database used for developing the component. The matrix database is a standard database with no specific attributes. A matrix database forms a single component. The matrix database is intended to be copied, compiled or not, into the Components folder of the 4D application or the database that will be using the component (host database).
- **Host Database**: Database in which a component is installed and used.
- **Component**: Matrix database, compiled or not, copied into the Components folder of the 4D application or the host database and whose contents are used in the host databases.

It should be noted that a database can be both a “matrix” and a “host,” in other words, a matrix database can itself use one or more components. However, a component cannot use “sub-components” itself.

### Protection of components: compilation

By default, all the project methods of a matrix database installed as a component are potentially visible from the host database. In particular:

- The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host database. Their contents can be selected and copied in the preview area of the Explorer. They can also be viewed in the debugger. However, it is not possible to open them in the Method editor nor to modify them.
- The other project methods of the matrix database do not appear in the Explorer but they too can be viewed in the debugger of the host database.

To protect the project methods of a component effectively, simply compile the matrix database and provide it in the form of a .4dc file (compiled database that does not contain the interpreted code). When a compiled matrix database is installed as a component:

- The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host database. However, their contents will not appear in the preview area nor in the debugger.
- The other project methods of the matrix database will never appear.

## Sharing of project methods

All the project methods of a matrix database are by definition included in the component (the database is the component), which means that they can be called and executed by the component.

On the other hand, by default these project methods will not be visible, nor can they be called in the host database. In the matrix database, you must explicitly designate the methods that you want to share with the host database. These project methods can be called in the code of the host database (but they cannot be modified in the Method editor of the host database). These methods form **entry points** in the component.

**Note:** Conversely, for security reasons, by default a component cannot execute project methods belonging to the host database. In certain cases, you may need to allow a component to access the project methods of your host database. To do this, you must explicitly designate the project methods of the host database that you want to make accessible to the components.

![](../assets/en/Concepts/pict516563.en.png)

## Passing variables

The local, process and interprocess variables are not shared between components and host databases. The only way to access component variables from the host database and vice versa is using pointers.

Example using an array:

```4d
//In the host database:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
```

Examples using variables:

```4d
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

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      //This test returns True even though the variables are different
```

In this case, it is necessary to use the comparison of pointers:

```4d
     If(myptr1=myptr2) //This test returns False
```

## Access to tables of the host database

Although components cannot use tables, pointers can permit host databases and components to communicate with each other. For example, here is a method that could be called from a component:

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Within the component, the code of the `methCreateRec` method:

```4d
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

- The `Current form table` command returns `Nil` when it is called in the context of a project form. Consequently, it cannot be used in a component.
- SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used on the component database. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## Error handling

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running database. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host database is not called, and vice versa.

## Use of forms

- Only “project forms” (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix database can be used by the component.
- A component can call table forms of the host database. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.

**Note:** If a component uses the `ADD RECORD` command, the current Input form of the host database will be displayed, in the context of the host database. Consequently, if the form includes variables, the component will not have access to it.

- You can publish component forms as subforms in the host databases. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components.

## Use of tables and fields

A component cannot use the tables and fields defined in the 4D structure of the matrix database. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. An external database is a 4D database that is independent from the main 4D database, but that you can work with from the main 4D database. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL `CREATE DATABASE` command.

### Example

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
 $Ptr_1:=$2 // retrieves data from the host database through pointers
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
 $Ptr_1:=$2 // accesses data of the host database through pointers
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

In a host database containing one or more components, each component as well as the host databases has its own “resources string.” Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database.

## On-line help for components

A specific mechanism has been implemented in order to allow developers to add on-line help to their components. The principle is the same as that provided for 4D databases:

- The component help must be provided as a file suffixed .htm, .html or (Windows only) .chm,
- The help file must be put next to the structure file of the component and have the same name as the structure file,
- This file is then automatically loaded into the Help menu of the application with the title “Help for...” followed by the name of the help file.
