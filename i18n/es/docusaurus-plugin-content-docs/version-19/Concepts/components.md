---
id: components
title: Componentes
---

Un componente 4D es un conjunto de métodos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes aplicaciones. Por ejemplo, puede desarrollar un componente 4D de correo electrónico que gestione todos los aspectos del envío, la recepción y el almacenamiento de correos electrónicos en aplicaciones 4D.

## Presentación

### Definiciones

- **Base proyecto**: proyecto 4D utilizado para desarrollar el componente. El proyecto matriz es una base estándar sin atributos específicos. Un proyecto matricial forma un único componente.
- **Proyecto local**: proyecto aplicación en la que se instala y utiliza un componente.
- **Componente**: proyecto matricial, compilado o no, copiado en la carpeta [`Components`](Project/architecture.md) de la aplicación local y cuyo contenido se utiliza en la aplicación local.

### Principios

La creación e instalación de componentes 4D se realiza directamente desde 4D. Básicamente, los componentes se gestionan como [plug-ins](Concepts/plug-ins.md) según los siguientes principios:

- Un componente consiste en un archivo de proyecto 4D clásico.
- Para instalar un componente, basta con copiarlo en la carpeta [`Components` del proyecto](Project/architecture.md). Puede utilizar alias o atajos.
- Un proyecto puede ser a la vez "matriz" y "local", es decir, que un proyecto matriz puede utilizar a su vez uno o varios componentes. Sin embargo, un componente no puede utilizar "subcomponentes" por sí mismo.
- Un componente puede llamar a la mayoría de los elementos de 4D: métodos proyecto, formularios proyecto, barras de menú, listas de selección, etc. No puede llamar a los métodos base ni a los triggers.
- No se pueden utilizar tablas o archivos de datos estándar en los componentes 4D. Sin embargo, un componente puede crear y/o utilizar tablas, campos y archivos de datos utilizando mecanismos de bases externas. Se trata de bases 4D independientes con las que se trabaja utilizando comandos SQL.
- Un proyecto local que se ejecuta en modo interpretado puede utilizar componentes interpretados o compilados. Un proyecto local que se ejecuta en modo compilado no puede utilizar componentes interpretados. En este caso, sólo se pueden utilizar componentes compilados.

## Alcance de los comandos del lenguaje

A excepción de los [comandos no utilizables](#comandos-inutilizables), un componente puede utilizar cualquier comando del lenguaje 4D.

Cuando se llaman comandos desde un componente, se ejecutan en el contexto del componente, excepto el comando `EXECUTE METHOD` o `EXECUTE FORMULA` que utilizan el contexto del método especificado por el comando. También hay que tener en cuenta que los comandos de lectura del tema "Usuarios y grupos" se pueden utilizar desde un componente, pero leerán los usuarios y grupos del proyecto local (un componente no tiene sus propios usuarios y grupos).

Los comandos `SET DATABASE PARAMETER` y `Get database parameter` son una excepción: su alcance es global a la aplicación. Cuando estos comandos se llaman desde un componente, se aplican al proyecto de la aplicación local.

Además, se han especificado medidas específicas para los comandos `Structure file` y `Get 4D folder` cuando se utilizan en el marco de los componentes.

El comando `COMPONENT LIST` puede utilizarse para obtener la lista de componentes cargados por el proyecto local.

### Comandos no utilizables

Los siguientes comandos no son compatibles para su uso dentro de un componente porque modifican el archivo de estructura - que está abierto en sólo lectura. Su ejecución en un componente generará el error -10511, "El comando NomComando no puede ser llamado desde un componente":

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

**Notas:**

- El comando `Current form table` devuelve `Nil` cuando se llama en el contexto de un formulario proyecto. Por consiguiente, no puede utilizarse en un componente.
- Los comandos SQL de definición de datos (`CREATE TABLE`, `DROP TABLE`, etc.) no pueden utilizarse en el proyecto componente. Sin embargo, se soportan con bases de datos externas (ver el comando SQL `CREATE DATABASE`).

## Compartir métodos proyecto

Todos los métodos proyecto de un proyecto matricial son por definición incluidos en el componente (el proyecto es el componente), lo que significa que pueden ser llamados y ejecutados por el componente.

Por otro lado, por defecto estos métodos proyecto no serán visibles, y no podrán ser llamados por el proyecto local. On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. Estos métodos forman los **puntos de entrada** en el componente.

Por el contrario, por razones de seguridad, por defecto un componente no puede ejecutar métodos proyecto que pertenezcan al proyecto local. En algunos casos, puede ser necesario permitir que un componente acceda a los métodos proyecto de su proyecto local. Para ello, debe designar explícitamente qué métodos proyecto del proyecto local quiere hacer accesibles a los componentes (en las propiedades del método, marque la casilla **Compartido por componentes y proyecto local**).

![](../assets/en/Concepts/pict516563.en.png)

Una vez que los métodos del proyecto anfitrión están disponibles para los componentes, se puede ejecutar un método anfitrión desde dentro de un componente utilizando los comandos `EXECUTE FORMULA` o `EXECUTE METHOD`. Por ejemplo:

```4d
// Método local
component_method("host_method_name")
```

```4d
// component_method
 C_TEXT($1)
 EXECUTE METHOD($1)
```

> Una base local interpretada que contenga componentes interpretados puede ser compilada o verificada sintácticamente si no llama a métodos del componente interpretado. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation. Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the `EXECUTE METHOD` and `EXECUTE FORMULA` commands.

## Paso de variables

Las variables locales, proceso e interproceso no se comparten entre los componentes y los proyectos locales. La única forma de modificar las variables del componente desde el proyecto local y viceversa es utilizando punteros.

Ejemplo utilizando un array:

```4d
//En el proyecto local: ARRAY INTEGER( MyArray;10)
     AMethod(-> MyArray)

//En el componente, el método proyecto AMethod contiene:
     APPEND TO ARRAY($1->;2)
```

Ejemplos utilizando variables:

```4d
C_TEXT(myvariable)
component_method1(->myvariable)
```

```4d
C_POINTER($p)
$p:=component_method2(...)
```

Sin un puntero, un componente puede seguir accediendo al valor de una variable de la base local (pero no a la propia variable) y viceversa:

```4d
//En la base local
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method obtiene "DoSomething" en $1 (pero no la variable $input_t)
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
      //Esta prueba devuelve True aunque las variables sean diferentes
```

En este caso, es necesario utilizar la comparación de punteros:

```4d
     If(myptr1=myptr2) //Esta prueba devuelve False
```

## Gestión de errores

Un [método de gestión de errores](Concepts/error-handling.md) instalado por el comando `ON ERR CALL` sólo se aplica a la aplicación en ejecución. En el caso de un error generado por un componente, no se llama al método de gestión de errores `ON ERR CALL` del proyecto local, y viceversa.

## Acceso a las tablas del proyecto local

Aunque los componentes no pueden utilizar tablas, los punteros pueden permitir que los proyectos locales y los componentes se comuniquen entre sí. Por ejemplo, este es un método que podría ser llamado desde un componente:

```4d
// llamar a un método componente
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Dentro del componente, el código del método `methCreateRec`:

```4d
C_POINTER($1) //Puntero a una tabla del proyecto local
C_POINTER($2) //Puntero a un campo del proyecto local
C_TEXT($3) // Valor a insertar

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

> En el contexto de un componente, 4D asume que una referencia a un formulario tabla es una referencia al formulario tabla local (ya que los componentes no pueden tener tablas.)

## Uso de tablas y campos

Un componente no puede utilizar las tablas y campos definidos en la estructura 4D del proyecto matriz. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos según sus necesidades. Puede crear y gestionar bases externas utilizando SQL. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos según sus necesidades. Utilizar una base externa significa designar temporalmente esta base como base actual, es decir, como la base de destino para las consultas SQL ejecutadas por 4D. Las bases externas se crean con el comando SQL `CREATE DATABASE`.

### Ejemplo

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

## Utilización de formularios

- Sólo los "formularios de proyecto" (formularios que no están asociados a ninguna tabla específica) pueden utilizarse en un componente. Sólo los "formularios de proyecto" (formularios que no están asociados a ninguna tabla específica) pueden utilizarse en un componente.
- Un componente puede llamar a formularios tabla del proyecto local. Tenga en cuenta que en este caso es necesario utilizar punteros en lugar de nombres de tablas entre paréntesis [] para especificar los formularios en el código del componente.

> Si un componente utiliza el comando `ADD RECORD`, se mostrará el formulario de entrada actual del proyecto local, en el contexto del proyecto local. Por consiguiente, si el formulario incluye variables, el componente no tendrá acceso a ellas.

- Puede publicar formularios de componentes como subformularios en los proyectos locales. Esto significa que puede, más concretamente, desarrollar componentes que ofrezcan objetos gráficos. Por ejemplo, los Widgets que ofrece 4D se basan en el uso de subformularios en los componentes.

> En el contexto de un componente, cualquier formulario de proyecto referenciado debe pertenecer al componente. Por ejemplo, dentro de un componente, hacer referencia a un formulario proyecto local utilizando `DIALOG` u `Open form window` arrojará un error.

## Utilización de recursos

Los componentes pueden utilizar recursos situados en la carpeta Resources del componente.

Los mecanismos automáticos son operacionales: los archivos XLIFF encontrados en la carpeta Resources de un componente serán cargados por este componente.

En un proyecto local que contiene uno o más componentes, cada componente, así como los proyectos locales, tiene su propia "cadena de recursos." Los recursos están divididos entre las diferentes proyectos: no es posible acceder a los recursos del componente A desde el componente B o desde el proyecto local.

## Ejecución del código de inicialización

Un componente puede ejecutar automáticamente código 4D al abrir o cerrar la base local, por ejemplo para cargar y/o guardar las preferencias o los estados usuario relacionados con el funcionamiento de la base local.

La ejecución del código de inicialización o cierre se realiza mediante el método base `On Host Database Event`.

> Por razones de seguridad, debe autorizar explícitamente la ejecución del método base `On Host Database Event` en la base local para poder llamarlo. For security reasons, you must explicitly authorize the execution of the `On Host Database Event` database method in the host database in order to be able to call it.

## Protección de los componentes: compilación

Por defecto, todos los métodos proyecto de un proyecto matriz instalado como componente son potencialmente visibles desde el proyecto local. En particular:

- Los métodos proyecto compartido se encuentran en la Página Métodos del Explorador y pueden ser llamados en los métodos del proyecto local. Su contenido puede ser seleccionado y copiado en el área de vista previa del Explorador. También se pueden ver en el depurador. Sin embargo, no es posible abrirlos en el editor de métodos o modificarlos.
- Los otros métodos proyecto del proyecto matriz no aparecen en el Explorador, pero también pueden verse en el depurador del proyecto local.

Para proteger eficazmente los métodos proyecto de un componente, basta con compilar el proyecto de la matriz y entregarlo en forma de archivo .4dz. Cuando se instala un proyecto matricial compilado como un componente:

- Los métodos proyecto compartidos se muestran en la Página Métodos del Explorador y pueden ser llamados en los métodos del proyecto local. Sin embargo, su contenido no aparecerá en el área de vista previa ni en el depurador.
- Los otros métodos proyecto del proyecto matriz nunca aparecerán.
