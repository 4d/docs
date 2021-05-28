---
id: components
title: Componentes
---

A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.

Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like [plug-ins](Concepts/plug-ins.md) according to the following principles:

- A component consists of a regular structure file (compiled or not) having the standard architecture or in the form of a package (see .4dbase Extension).
- To install a component in an application project, you simply need to copy it into the "Components" folder of the project, at the same level as the Project folder.
- A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, pictures from the library, and so on. It cannot call database methods and triggers.
- You cannot use standard tables or data files in 4D components. However, a component can create and/or use tables, fields and data files using mechanisms of external databases. These are separate 4D databases that you work with using SQL commands.


## Definiciones

Los mecanismos de gestión de componentes en 4D requieren la aplicación de los siguientes términos y conceptos:

- **Base proyecto**: proyecto 4D utilizado para desarrollar el componente. El proyecto matriz es una base estándar sin atributos específicos. Un proyecto matricial forma un único componente. El proyecto matriz debe copiarse, compilado o no, en la carpeta Components de la aplicación 4D o en el proyecto que utilizará el componente (proyecto aplicación local).
- **Proyecto local**: proyecto aplicación en la que se instala y utiliza un componente.
- **Componente**: proyecto matricial, compilado o no, copiado en la carpeta Components de la aplicación local y cuyo contenido se utiliza en las aplicaciones locales.

Hay que tener en cuenta que un proyecto puede ser a la vez "matriz" y "local", es decir, que un proyecto matriz puede utilizar a su vez uno o varios componentes. Sin embargo, un componente no puede utilizar "subcomponentes" por sí mismo.


### Protección de los componentes: compilación

Por defecto, todos los métodos proyecto de un proyecto matriz instalado como componente son potencialmente visibles desde el proyecto local. En particular:

- Los métodos proyecto compartido se encuentran en la Página Métodos del Explorador y pueden ser llamados en los métodos del proyecto local. Su contenido puede ser seleccionado y copiado en el área de vista previa del Explorador. También se pueden ver en el depurador. Sin embargo, no es posible abrirlos en el editor de métodos ni modificarlos.
- Los otros métodos proyecto del proyecto matriz no aparecen en el Explorador, pero también pueden verse en el depurador del proyecto local.

Para proteger eficazmente los métodos proyecto de un componente, basta con compilar el proyecto de la matriz y entregarlo en forma de archivo .4dz. Cuando se instala un proyecto matricial compilado como un componente:

- Los métodos proyecto compartidos se muestran en la Página Métodos del Explorador y pueden ser llamados en los métodos del proyecto local. Sin embargo, su contenido no aparecerá en el área de vista previa ni en el depurador.
- Los otros métodos proyecto del proyecto matriz nunca aparecerán.


## Compartir métodos proyecto
Todos los métodos proyecto de un proyecto matricial son por definición incluidos en el componente (el proyecto es el componente), lo que significa que pueden ser llamados y ejecutados por el componente.

Por otro lado, por defecto estos métodos proyecto no serán visibles, ni podrán ser llamados por los proyectos locales. En el proyecto matriz, debe designar explícitamente los métodos que desea compartir con el proyecto local. Estos métodos proyecto se pueden llamar en el código del proyecto local (pero no se pueden modificar en el editor de métodos de la base local). Estos métodos forman los **puntos de entrada** en el componente.

**Nota:** por el contrario, por razones de seguridad, por defecto un componente no puede ejecutar métodos proyecto que pertenezcan al proyecto local. En algunos casos, puede ser necesario permitir que un componente acceda a los métodos proyecto de su proyecto local. Para ello, debe designar explícitamente los métodos proyecto del proyecto local que desea hacer accesibles a los componentes.

![](assets/en/Concepts/pict516563.en.png)

## Paso de variables

Las variables locales, proceso e interproceso no se comparten entre los componentes y los proyectos locales. La única forma de acceder a las variables del componente desde el proyecto local y viceversa es utilizando punteros.

Ejemplo utilizando un array:

```4d
//En el proyecto local:
     ARRAY INTEGER( MyArray;10)
     AMethod(-> MyArray)

//En el componente, el método proyecto AMethod contiene:
     APPEND TO ARRAY($1->;2)
```

Ejemplos utilizando variables:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```


Cuando se utilizan punteros para que los componentes y el proyecto local se comuniquen, hay que tener en cuenta las siguientes particularidades:

- El comando `Get pointer` no devolverá un puntero a una variable del proyecto local si se llama desde un componente y viceversa.

- La arquitectura de componentes permite la coexistencia, dentro del mismo proyecto interpretado, de componentes interpretados y compilados (a la inversa, en un proyecto compilado sólo pueden utilizarse componentes compilados). Para utilizar punteros en este caso, debe respetar el siguiente principio: el intérprete puede desanclar un puntero construido en modo compilado; sin embargo, en modo compilado, no puede desanclar un puntero construido en modo interpretado. Ilustremos este principio con el siguiente ejemplo: dados dos componentes, C (compilado) e I (interpretado), instalados en el mismo proyecto local.
 - Si el componente C define la variable `myCvar`, el componente I puede acceder al valor de esta variable utilizando el puntero `->myCvar`.
 - Si el componente C define la variable `myIvar`, el componente C no puede acceder a esta variable utilizando el puntero `->myIvar`. Esta sintaxis provoca un error de ejecución.

- La comparación de punteros utilizando el comando `RESOLVE POINTER` no se recomienda con los componentes, ya que el principio de partición de variables permite la coexistencia de variables con el mismo nombre pero con contenidos radicalmente diferentes en un componente y en el proyecto local (u otro componente). El tipo de la variable puede incluso ser diferente en ambos contextos. Si los punteros `myptr1` y `myptr2` apuntan cada uno a una variable, la siguiente comparación producirá un resultado incorrecto:

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

## Access to tables of the host project

Although components cannot use tables, pointers can permit host projects and components to communicate with each other. For example, here is a method that could be called from a component:

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

## Scope of language commands

Except for [Unusable commands](#unusable-commands), a component can use any command of the 4D language.

When commands are called from a component, they are executed in the context of the component, except for the `EXECUTE METHOD` command that uses the context of the method specified by the command. Also note that the read commands of the “Users and Groups” theme can be used from a component but will read the users and groups of the host project (a component does not have its own users and groups).

The `SET DATABASE PARAMETER` and `Get database parameter` commands are an exception: their scope is global to the application. When these commands are called from a component, they are applied to the host application project.

Furthermore, specific measures have been specified for the `Structure file` and `Get 4D folder` commands when they are used in the framework of components.

The `COMPONENT LIST` command can be used to obtain the list of components that are loaded by the host project.


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
- SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used on the component project. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## Gestión de errores

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running application. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host project is not called, and vice versa.

## Use of forms

- Only “project forms” (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix project can be used by the component.
- A component can call table forms of the host project. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.

**Note:** If a component uses the `ADD RECORD` command, the current Input form of the host project will be displayed, in the context of the host project. Consequently, if the form includes variables, the component will not have access to it.

- Puede publicar formularios de componentes como subformularios en los proyectos locales. Esto significa que puede, más concretamente, desarrollar componentes que ofrezcan objetos gráficos. Por ejemplo, los Widgets que ofrece 4D se basan en el uso de subformularios en los componentes.

## Uso de tablas y campos

Un componente no puede utilizar las tablas y campos definidos en la estructura 4D del proyecto matriz. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos según sus necesidades. Puede crear y gestionar bases externas utilizando SQL. Una base externa es un proyecto 4D independiente del proyecto 4D principal, pero con la que se puede trabajar desde el proyecto 4D principal. Utilizar una base externa significa designar temporalmente esta base como base actual, es decir, como la base de destino para las consultas SQL ejecutadas por 4D. Las bases externas se crean con el comando SQL `CREATE DATABASE`.

### Example

El siguiente código se incluye en un componente y realiza tres acciones básicas con una base de datos externa:

- creación de la base de datos externa si aún no existe,
- añade datos a la base de datos externa,
- lectura de datos desde la base de datos externa.

Creación de la base de datos externa:

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) almacena los datos en un directorio autorizado
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

Escritura en la base de datos externa:

```4d
 $Ptr_1:=$2 // recupera datos del proyecto local mediante punteros
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

Lectura en una base de datos externa:

```4d
 $Ptr_1:=$2 // accede a los datos del proyecto local a través de punteros
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

## Utilización de recursos

Los componentes pueden utilizar recursos. De acuerdo con el principio de gestión de recursos, si el componente es de arquitectura .4dbase (arquitectura recomendada), la carpeta Resources debe colocarse dentro de esta carpeta.

Los mecanismos automáticos son operacionales: los archivos XLIFF encontrados en la carpeta Resources de un componente serán cargados por este componente.

En un proyecto local que contiene uno o más componentes, cada componente, así como los proyectos locales, tiene su propia "cadena de recursos." Los recursos están divididos entre las diferentes proyectos: no es posible acceder a los recursos del componente A desde el componente B o desde el proyecto local.

## Ayuda en línea para los componentes
Se ha implementado un mecanismo específico para que los desarrolladores puedan añadir ayuda en línea a sus componentes. El principio es el mismo que el previsto para los proyectos 4D:

- La ayuda del componente debe suministrarse como un archivo con el sufijo .htm, .html o (sólo en Windows) .chm,
- El archivo de ayuda debe colocarse junto al archivo de estructura del componente y tener el mismo nombre que el archivo de estructura,
- Este archivo se carga automáticamente en el menú de ayuda de la aplicación con el título "Ayuda para..." seguido del nombre del archivo de ayuda. 