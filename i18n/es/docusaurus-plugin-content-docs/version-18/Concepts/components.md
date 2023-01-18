---
id: components
title: Componentes
---

Un componente 4D es un conjunto de métodos y formularios 4D que representan una o varias funcionalidades que pueden instalarse en diferentes bases. Por ejemplo, puede desarrollar un componente 4D de correo electrónico que gestione todos los aspectos del envío, la recepción y el almacenamiento de correos electrónicos en bases 4D.

La creación e instalación de componentes 4D se realiza directamente desde 4D. Básicamente, los componentes se gestionan como [plug-ins](Concepts/plug-ins.md) según los siguientes principios:

- Un componente consiste en un archivo de estructura clásica (compilado o no) con la arquitectura estándar o en forma de paquete (ver Extensión .4dbase).
- Para instalar un componente en una base, basta con copiarlo en la carpeta "Componentes" de la base, situada junto al archivo de estructura o junto a la aplicación 4D ejecutable.
- Un componente puede llamar a la mayoría de los elementos de 4D: métodos proyecto, formularios proyecto, barras de menú, listas de selección, imágenes de la librería, etc. No puede llamar a los métodos base ni a los triggers.
- No se pueden utilizar tablas o archivos de datos estándar en los componentes 4D. Sin embargo, un componente puede crear y/o utilizar tablas, campos y archivos de datos utilizando mecanismos de bases externas. Se trata de bases 4D independientes con las que se trabaja utilizando comandos SQL.

## Definiciones

Los mecanismos de gestión de componentes en 4D requieren la aplicación de los siguientes términos y conceptos:

- **Base matriz**: base de datos 4D utilizada para desarrollar el componente. La base matriz es una base estándar sin atributos específicos. Una base matricial forma un único componente. La base matriz debe copiarse, compilada o no, en la carpeta Components de la aplicación 4D o en la base que utilizará el componente (base local).
- **Base local**: base en la que se instala y utiliza un componente.
- **Componente**: base matricial, compilada o no, copiada en la carpeta Components de la aplicación 4D o de la base local y cuyo contenido se utiliza en las bases locales.

Hay que tener en cuenta que una base puede ser a la vez "matriz" y "local", es decir, que una base matriz puede utilizar a su vez uno o varios componentes. Sin embargo, un componente no puede utilizar "subcomponentes" por sí mismo.

### Protección de los componentes: compilación

Por defecto, todos los métodos proyecto de una base matriz instalada como componente son potencialmente visibles desde la base local. En particular:

- Los métodos proyecto compartido se encuentran en la Página Métodos del Explorador y pueden ser llamados en los métodos de la base local. Su contenido puede ser seleccionado y copiado en el área de vista previa del Explorador. También se pueden ver en el depurador. Sin embargo, no es posible abrirlos en el editor de métodos ni modificarlos.
- Los otros métodos proyecto de la base matriz no aparecen en el Explorador, pero también pueden verse en el depurador de la base local.

Para proteger eficazmente los métodos proyecto de un componente, basta con compilar la base matriz y entregarla en forma de archivo .4dc (base compilada que no contiene el código interpretado). Cuando se instala una base matricial compilada como componente:

- Los métodos proyecto compartidos se muestran en la Página Métodos del Explorador y pueden ser llamados en los métodos de la base local. Sin embargo, su contenido no aparecerá en el área de vista previa ni en el depurador.
- Los otros métodos proyecto de la base matriz nunca aparecerán.

## Compartir métodos proyecto

Todos los métodos proyecto de una base matricial son por definición incluidos en el componente (la base es el componente), lo que significa que pueden ser llamados y ejecutados por el componente.

Por otro lado, por defecto estos métodos proyecto no serán visibles, ni podrán ser llamados por la base local. En la base matriz, debe designar explícitamente los métodos que desea compartir con la base local. Estos métodos proyecto se pueden llamar en el código de la base local (pero no se pueden modificar en el editor de métodos de la base local). Estos métodos forman los **puntos de entrada** en el componente.

**Nota:** por el contrario, por razones de seguridad, por defecto un componente no puede ejecutar métodos proyecto que pertenezcan a la base local. En algunos casos, puede ser necesario permitir que un componente acceda a los métodos proyecto de su base local. Para ello, debe designar explícitamente los métodos proyecto de la base local que desea hacer accesibles a los componentes.

![](../assets/en/Concepts/pict516563.en.png)

## Paso de variables

Las variables locales, proceso e interproceso no se comparten entre los componentes y las bases locales. La única forma de acceder a las variables del componente desde la base local y viceversa es utilizando punteros.

Ejemplo utilizando un array:

```4d
//In the host database: ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
```

Ejemplos utilizando variables:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```

Cuando se utilizan punteros para que los componentes y la base local se comuniquen, hay que tener en cuenta las siguientes particularidades:

- El comando `Get pointer` no devolverá un puntero a una variable de la base local si se llama desde un componente y viceversa.

- La arquitectura de componentes permite la coexistencia, dentro de la misma base interpretada, de componentes interpretados y compilados (a la inversa, en una base compilada sólo pueden utilizarse componentes compilados). Para utilizar punteros en este caso, debe respetar el siguiente principio: el intérprete puede desanclar un puntero construido en modo compilado; sin embargo, en modo compilado, no puede desanclar un puntero construido en modo interpretado. In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.
- Si el componente C define la variable `myCvar`, el componente I puede acceder al valor de esta variable utilizando el puntero `->myCvar`.
- Si el componente C define la variable `myIvar`, el componente C no puede acceder a esta variable utilizando el puntero `->myIvar`. Esta sintaxis provoca un error de ejecución.

- La comparación de punteros utilizando el comando `RESOLVE POINTER` no se recomienda con los componentes, ya que el principio de partición de variables permite la coexistencia de variables con el mismo nombre pero con contenidos radicalmente diferentes en un componente y en la base local (u otro componente). El tipo de la variable puede incluso ser diferente en ambos contextos. Si los punteros `myptr1` y `myptr2` apuntan cada uno a una variable, la siguiente comparación producirá un resultado incorrecto:

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

## Acceso a las tablas de la base local

Aunque los componentes no pueden utilizar tablas, los punteros pueden permitir que las bases locales y los componentes se comuniquen entre sí. Por ejemplo, este es un método que podría ser llamado desde un componente:

```4d
// llamar a un método componente
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Dentro del componente, el código del método `methCreateRec`:

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

## Alcance de los comandos del lenguaje

A excepción de los [comandos no utilizables](#comandos-inutilizables), un componente puede utilizar cualquier comando del lenguaje 4D.

Cuando se llaman comandos desde un componente, se ejecutan en el contexto del componente, excepto el comando `EXECUTE METHOD` que utiliza el contexto del método especificado por el comando. También hay que tener en cuenta que los comandos de lectura del tema "Usuarios y grupos" se pueden utilizar desde un componente, pero leerán los usuarios y grupos de la base local (un componente no tiene sus propios usuarios y grupos).

Los comandos `SET DATABASE PARAMETER` y `Get database parameter` son una excepción: su alcance es global a la base. Cuando estos comandos se llaman desde un componente, se aplican a la base local.

Además, se han especificado medidas específicas para los comandos `Structure file` y `Get 4D folder` cuando se utilizan en el marco de los componentes.

El comando `COMPONENT LIST` puede utilizarse para obtener la lista de componentes que carga la base local.

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
- Los comandos SQL de definición de datos (`CREATE TABLE`, `DROP TABLE`, etc.) no pueden utilizarse en la base del componente. Sin embargo, se soportan con bases de datos externas (ver el comando SQL `CREATE DATABASE`).

## Gestión de errores

Un [método de gestión de errores](Concepts/error-handling.md) instalado por el comando `ON ERR CALL` sólo se aplica a la base en ejecución. En el caso de un error generado por un componente, no se llama al método de gestión de errores `ON ERR CALL` de la base local, y viceversa.

## Utilización de formularios

- Sólo los "formularios de proyecto" (formularios que no están asociados a ninguna tabla específica) pueden utilizarse en un componente. Only “project forms” (forms that are not associated with any specific table) can be used in a component.
- Un componente puede llamar a formularios tabla de la base local. Tenga en cuenta que en este caso es necesario utilizar punteros en lugar de nombres de tablas entre paréntesis [] para especificar los formularios en el código del componente.

**Nota:** si un componente utiliza el comando `ADD RECORD`, se mostrará el formulario de entrada actual de la base local, en el contexto de ésta. Por consiguiente, si el formulario incluye variables, el componente no tendrá acceso a ellas.

- Puede publicar formularios de componentes como subformularios en las bases locales. Esto significa que puede, más concretamente, desarrollar componentes que ofrezcan objetos gráficos. Por ejemplo, los Widgets que ofrece 4D se basan en el uso de subformularios en los componentes.

## Uso de tablas y campos

Un componente no puede utilizar las tablas y campos definidos en la estructura 4D de la base matriz. Sin embargo, puede crear y utilizar bases externas, y luego utilizar sus tablas y campos según sus necesidades. Puede crear y gestionar bases externas utilizando SQL. However, you can create and use external databases, and then use their tables and fields according to your needs. Utilizar una base externa significa designar temporalmente esta base como base actual, es decir, como la base de destino para las consultas SQL ejecutadas por 4D. Las bases externas se crean con el comando SQL `CREATE DATABASE`.

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

Lectura en una base de datos externa:

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

## Utilización de recursos

Los componentes pueden utilizar recursos. De acuerdo con el principio de gestión de recursos, si el componente es de arquitectura .4dbase (arquitectura recomendada), la carpeta Resources debe colocarse dentro de esta carpeta.

Los mecanismos automáticos son operacionales: los archivos XLIFF encontrados en la carpeta Resources de un componente serán cargados por este componente.

En una base de datos local que contiene uno o más componentes, cada componente, así como las bases de datos locales, tiene su propia "cadena de recursos." Los recursos están divididos entre las diferentes bases de datos: no es posible acceder a los recursos del componente A desde el componente B o la base de datos local.

## Ayuda en línea para los componentes

Se ha implementado un mecanismo específico para que los desarrolladores puedan añadir ayuda en línea a sus componentes. El principio es el mismo que el previsto para las bases de datos 4D:

- La ayuda del componente debe suministrarse como un archivo con el sufijo .htm, .html o (sólo en Windows) .chm,
- El archivo de ayuda debe colocarse junto al archivo de estructura del componente y tener el mismo nombre que el archivo de estructura,
- Este archivo se carga automáticamente en el menú de ayuda de la aplicación con el título "Ayuda para..." seguido del nombre del archivo de ayuda.
