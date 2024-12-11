---
id: method-set-code
title: METHOD SET CODE
slug: /commands/method-set-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET CODE.Syntax-->**METHOD SET CODE** ( *ruta* ; *codigo* {; *operador*} )<!-- END REF-->
<!--REF #_command_.METHOD SET CODE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text, Text array | &#8594;  | Texto o array texto que contiene una o varias rutas de métodos |
| codigo | Text, Text array | &#8594;  | Código de los métodos designados |
| operador | * | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD SET CODE.Summary-->El comando **METHOD SET CODE** modifica el código de los métodos designados por el parámetro *ruta* con el contenido pasado en el parámetro *codigo*.<!-- END REF-->

El comando puede acceder al código existente de todos los tipos de métodos: métodos base, definiciones de clases, triggers, métodos proyecto, métodos formulario y métodos objeto.

Si un método no existe, se crea con el contenidos de *codigo*.

**Nota para proyectos:** 

* La creación de un nuevo método con este comandos solo es posible para los métodos base, triggers y métodos proyecto.
* El código se guarda con o sin tokens en proyectos recién creados según la opción *Incluir tokens en los archivos fuente del proyecto* en las Preferencias.

Puede utilizar dos tipos de sintaxis, basadas en arrays texto o en variables texto:

```4d
 var tVpath : Text // variables texto
 var tVcode : Text
 METHOD SET CODE(tVpath;tVcode) // código de un sólo método
```

```4d
 ARRAY TEXT(arrPaths;0) // arrays texto
 ARRAY TEXT(arrCodes;0)
 METHOD SET CODE(arrPaths;arrCodes) // código de varios métodos
```

No es posible mezclar las dos sintaxis.

Si pasa una ruta de acceso invalida, el comando no hace nada.

Cuando se llama **METHOD SET CODE**, los atributos de los métodos se reinicializan por defecto. Sin embargo, si la primera línea del codigo de un método contiene metadatos validos (expresados en JSON), se utilizan para definir los atributos del método y no se inserta la primera línea. Ejemplo de metadatos:

```4d
  // %attributes = {"invisible":true,"lang":"fr","folder":"Security"}
```

**Nota:** estos metadatos son generados automáticamente por el comando [METHOD GET CODE](method-get-code.md). Para más información sobre los atributos soportados, consulte la descripción del comando [METHOD SET ATTRIBUTES](method-set-attributes.md).

Concerniente a la propiedad "folder" de los metadatos:

* si esta propiedad está presente y corresponde a una carpeta válida, el método se ubica en su carpeta padre,
* si esta propiedad no está presente o si la carpeta ya no existe, el comando no cambia a nivel de la carpeta padre,
* cuando esta propiedad contiene una cadena vacía, el método se coloca a nivel raíz.

Puede ejecutar el comando desde un componente, en este caso, debe pasar el parámetro *\** por el acceso al código del componente en modo sólo lectura. Si omite el parámetro *\** en este contexto, se genera el error -9763.

#### Ejemplo 

Este ejemplo exporta e importa la totalidad de los métodos proyecto de una aplicación:

```4d
 $root_t:=Get 4D folder(Database folder)+"methods"+Folder separator
 ARRAY TEXT($fileNames_at;0)
 CONFIRM("Import or export methods?";"Import";"Export")
 
 If(OK=1)
    DOCUMENT LIST($root_t;$fileNames_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       DOCUMENT TO BLOB($root_t+$filename_t;$blob_x)
       METHOD SET CODE($filename_t;BLOB to text($blob_x;UTF8 text without length))
    End for
 Else
    If(Test path name($root_t)#Is a folder)
       CREATE FOLDER($root_t;*)
    End if
    METHOD GET PATHS(Path project method;$fileNames_at)
    METHOD GET CODE($fileNames_at;$code_at)
    For($loop_l;1;Size of array($fileNames_at))
       $filename_t:=$fileNames_at{$loop_l}
       SET BLOB SIZE($blob_x;0)
       TEXT TO BLOB($code_at{$loop_l};$blob_x;UTF8 text without length)
       BLOB TO DOCUMENT($root_t+$filename_t;$blob_x)
    End for
 End if
 SHOW ON DISK($root_t)
```

#### Ver también 

[METHOD GET CODE](method-get-code.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1194 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


