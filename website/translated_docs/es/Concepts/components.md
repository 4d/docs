---
id: components
title: Componentes
---

Un componente 4D es un conjunto de métodos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes bases. Por ejemplo, puede desarrollar un componente 4D de correo electrónico que gestione todos los aspectos del envío, la recepción y el almacenamiento de correos electrónicos en bases 4D.

Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like [plug-ins](Concepts/plug-ins.md) according to the following principles:

- A component consists of a regular structure file (compiled or not) having the standard architecture or in the form of a package (see .4dbase Extension).
- Para instalar un componente en una base, basta con copiarlo en la carpeta "Componentes" de la base, situada junto al archivo de estructura o junto a la aplicación 4D ejecutable.
- A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, pictures from the library, and so on. It cannot call database methods and triggers.
- You cannot use standard tables or data files in 4D components. However, a component can create and/or use tables, fields and data files using mechanisms of external databases. These are separate 4D databases that you work with using SQL commands.


## Definitions

The component management mechanisms in 4D require the implementation of the following terms and concepts:

- **Base matriz**: base de datos 4D utilizada para desarrollar el componente. La base matriz es una base estándar sin atributos específicos. Una base matricial forma un único componente. La base matriz debe copiarse, compilada o no, en la carpeta Components de la aplicación 4D o en la base que utilizará el componente (base local).
- **Base local**: base en la que se instala y utiliza un componente.
- **Componente**: base matricial, compilada o no, copiada en la carpeta Components de la aplicación 4D o de la base local y cuyo contenido se utiliza en las bases locales.

Hay que tener en cuenta que una base puede ser a la vez "matriz" y "local", es decir, que una base matriz puede utilizar a su vez uno o varios componentes. However, a component cannot use “sub-components” itself.


### Protection of components: compilation

Por defecto, todos los métodos proyecto de una base matriz instalada como componente son potencialmente visibles desde la base local. In particular:

- Los métodos proyecto compartido se encuentran en la Página Métodos del Explorador y pueden ser llamados en los métodos de la base local. Their contents can be selected and copied in the preview area of the Explorer. They can also be viewed in the debugger. However, it is not possible to open them in the Method editor nor to modify them.
- Los otros métodos proyecto de la base matriz no aparecen en el Explorador, pero también pueden verse en el depurador de la base local.

Para proteger eficazmente los métodos proyecto de un componente, basta con compilar la base matriz y entregarla en forma de archivo .4dc (base compilada que no contiene el código interpretado). Cuando se instala una base matricial compilada como componente:

- Los métodos proyecto compartidos se muestran en la Página Métodos del Explorador y pueden ser llamados en los métodos de la base local. However, their contents will not appear in the preview area nor in the debugger.
- Los otros métodos proyecto de la base matriz nunca aparecerán.


## Sharing of project methods
Todos los métodos proyecto de una base matricial son por definición incluidos en el componente (la base es el componente), lo que significa que pueden ser llamados y ejecutados por el componente.

Por otro lado, por defecto estos métodos proyecto no serán visibles, ni podrán ser llamados por la base local. En la base matriz, debe designar explícitamente los métodos que desea compartir con la base local. Estos métodos proyecto se pueden llamar en el código de la base local (pero no se pueden modificar en el editor de métodos de la base local). These methods form **entry points** in the component.

**Nota:** por el contrario, por razones de seguridad, por defecto un componente no puede ejecutar métodos proyecto que pertenezcan a la base local. En algunos casos, puede ser necesario permitir que un componente acceda a los métodos proyecto de su base local. Para ello, debe designar explícitamente los métodos proyecto de la base local que desea hacer accesibles a los componentes.

![](assets/en/Concepts/pict516563.en.png)

## Passing variables

Las variables locales, proceso e interproceso no se comparten entre los componentes y las bases locales. La única forma de acceder a las variables del componente desde la base local y viceversa es utilizando punteros.

Example using an array:

```4d
//En la base local:
     ARRAY INTEGER( MyArray;10)
     AMethod(-> MyArray)

//En el componente, el método proyecto AMethod contiene:
     APPEND TO ARRAY($1->;2)
```

Examples using variables:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```


Cuando se utilizan punteros para que los componentes y la base local se comuniquen, hay que tener en cuenta las siguientes particularidades:

- El comando `Get pointer` no devolverá un puntero a una variable de la base local si se llama desde un componente y viceversa.

- La arquitectura de componentes permite la coexistencia, dentro de la misma base interpretada, de componentes interpretados y compilados (a la inversa, en una base compilada sólo pueden utilizarse componentes compilados). In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode. Ilustremos este principio con el siguiente ejemplo: dados dos componentes, C (compilado) e I (interpretado), instalados en la misma base local.
 - If component C defines the `myCvar` variable, component I can access the value of this variable by using the pointer `->myCvar`.
 - If component I defines the `myIvar` variable, component C cannot access this variable by using the pointer `->myIvar`. This syntax causes an execution error.

- La comparación de punteros utilizando el comando `RESOLVE POINTER` no se recomienda con los componentes, ya que el principio de partición de variables permite la coexistencia de variables con el mismo nombre pero con contenidos radicalmente diferentes en un componente y en la base local (u otro componente). The type of the variable can even be different in both contexts. If the `myptr1` and `myptr2` pointers each point to a variable, the following comparison will produce an incorrect result:

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

## Acceso a las tablas de la base local

Aunque los componentes no pueden utilizar tablas, los punteros pueden permitir que las bases locales y los componentes se comuniquen entre sí. For example, here is a method that could be called from a component:

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Within the component, the code of the `methCreateRec` method:

```4d
C_POINTER($1) //Puntero en una tabla de la base local
C_POINTER($2) //Indicador en un campo de la base local
C_TEXT($3) // Valor a insertar

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## Scope of language commands

Except for [Unusable commands](#unusable-commands), a component can use any command of the 4D language.

When commands are called from a component, they are executed in the context of the component, except for the `EXECUTE METHOD` command that uses the context of the method specified by the command. También hay que tener en cuenta que los comandos de lectura del tema "Usuarios y grupos" se pueden utilizar desde un componente, pero leerán los usuarios y grupos de la base local (un componente no tiene sus propios usuarios y grupos).

Los comandos `SET DATABASE PARAMETER` y `Get database parameter` son una excepción: su alcance es global a la base. Cuando estos comandos se llaman desde un componente, se aplican a la base local.

Furthermore, specific measures have been specified for the `Structure file` and `Get 4D folder` commands when they are used in the framework of components.

El comando `COMPONENT LIST` puede utilizarse para obtener la lista de componentes que carga la base local.


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
- Los comandos SQL de definición de datos (`CREATE TABLE`, `DROP TABLE`, etc.) no pueden utilizarse en la base del componente. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## Gestión de errores

Un [método de gestión de errores](Concepts/error-handling.md) instalado por el comando `ON ERR CALL` sólo se aplica a la base en ejecución. En el caso de un error generado por un componente, no se llama al método de gestión de errores `ON ERR CALL` de la base local, y viceversa.

## Use of forms

- Only “project forms” (forms that are not associated with any specific table) can be used in a component. Todos los formularios proyecto presentes en la base matriz pueden ser utilizados por el componente.
- Un componente puede llamar a formularios tabla de la base local. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.

**Nota:** si un componente utiliza el comando `ADD RECORD`, se mostrará el formulario de entrada actual de la base local, en el contexto de ésta. Consequently, if the form includes variables, the component will not have access to it.

- Puede publicar formularios de componentes como subformularios en las bases locales. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components.

## Use of tables and fields

Un componente no puede utilizar las tablas y campos definidos en la estructura 4D de la base matriz. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. Una base externa es una base 4D independiente de la base 4D principal, pero con la que se puede trabajar desde la base 4D principal. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL `CREATE DATABASE` command.

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
 $Ptr_1:=$2 // recupera datos de la base local a través de punteros
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
 $Ptr_1:=$2 // accede a los datos de la base local a través de punteros
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

En una base de datos local que contiene uno o más componentes, cada componente, así como las bases de datos locales, tiene su propia "cadena de recursos." Los recursos están divididos entre las diferentes bases de datos: no es posible acceder a los recursos del componente A desde el componente B o la base de datos local.

## On-line help for components
A specific mechanism has been implemented in order to allow developers to add on-line help to their components. El principio es el mismo que el previsto para las bases de datos 4D:

- The component help must be provided as a file suffixed .htm, .html or (Windows only) .chm,
- The help file must be put next to the structure file of the component and have the same name as the structure file,
- This file is then automatically loaded into the Help menu of the application with the title “Help for...” followed by the name of the help file.
