---
id: method-get-code
title: METHOD GET CODE
slug: /commands/method-get-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET CODE.Syntax-->**METHOD GET CODE** ( *ruta* ; *codigo* {; *opcion*} {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET CODE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text, Text array | &#8594;  | Texto o array de texto que contiene una o varias rutas de método |
| codigo | Text, Text array | &#8592; | Código de los métodos designados |
| opcion | Integer | &#8594;  | 0 o si se omite = exportación simple (sin tokens), 1 = exportación con tokens |
| * | Operador | &#8594;  | Si se pasa = comando se aplica a la base de datos de host cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD GET CODE.Summary-->El comando **METHOD GET CODE** devuelve en el parámetro *codigo*, el contenido de los métodos designados por el parámetro *ruta*.<!-- END REF--> Este comando puede devolver el código de todos los tipos de métodos: métodos base, definiciones de clases, triggers, métodos proyecto, métodos formulario y métodos objeto.  
  
Puede utilizar dos tipos de sintaxis, basadas en arrays texto o variables texto:  

```4d
 var tVpath : Text // variables texto
 var tVcode : Text
 METHOD GET CODE(tVpath;tVcode) // código de un solo método
```

  
```4d
 ARRAY TEXT(arrPaths;0) // arrays texto
 ARRAY TEXT(arrCodes;0)
 METHOD GET CODE(arrPaths;arrCodes) // códigos de varios métodos
```
  
  
No se pueden combinar las dos sintaxis.  
  
Si pasa una ruta de acceso no válida, el parámetro *codigo* se deja vacío y se genera un error.   
  
En el texto del *codigo* generado por este comando: 
* Los nombres de los comandos se escriben en inglés, excepto si utiliza una versión francesa de 4D y si tiene seleccionada la preferencia "Utilizar lenguaje francés y parámetros regionales sistema" (ver [Is a list](is-a-list.md)). Cuando se utiliza el parámetro *opcion*, el código puede contener tokens del lenguaje con el fin de que sea independiente del lenguaje de programación 4D y de la versión  (ver más adelante).
* Para aumentar la legibilidad del código, el texto es indentado con los caracteres de tabulación en función de las estructuras de programación, al igual que en el editor de métodos.
* Una línea se añade en el encabezado del código generado que contiene los metadatos utilizados para la importación del código, por ejemplo:  
```4d  
  // %attributes = {"lang":"fr","invisible":true,"folder":"Web3"}  
```  
    
    
Durante una importación, esta línea no se importa, se utiliza para definir los atributos correspondientes (los atributos no especificados se reinicializan a su valor por defecto). El atributo "lang" define el lenguaje de exportación e impide una importación en una aplicación en lenguaje diferente (en este caso, se genera un error). El atributo "folder" contiene el nombre de la carpeta padre del método; no se muestra cuando el método no tiene una carpeta padre.  
Pueden definirse atributos adicionales. Para mayor información, consulte la descripción del comando [METHOD SET ATTRIBUTES](method-set-attributes.md).

El parámetro *opcion* le permite seleccionar el modo de exportación del código con respecto a los elementos del lenguaje tokenizados de los métodos: 

* Si pasa 0 u omite el parámetro *opcion*, el código del método se exporta sin tokens, es decir, al igual que se muestra en el editor de métodos.
* Si pasa 1 o la constante Code with tokens, el código del método se exporta con tokens, es decir, los elementos tokenizados son seguidos por su referencia interna en el contenido del *código* exportado. Por ejemplo, la expresión "[String](string.md)(a)" se exporta "[String](string.md):C10(a)",  donde "C10" es la referencia interna del comando [String](string.md).

Los elementos tokenizados del lenguaje incluyen:

* los comandos y constantes 4D,
* los nombres de tablas y campos,
* los comandos de plug-ins 4D.

El código exportado con sus tokens es independiente de todo cambio de nombre posterior de los elementos del lenguaje. Gracias a los tokens, el código suministrado en forma de texto siempre será interpretado correctamente por 4D, por ejemplo utilizando el comando [METHOD SET CODE](method-set-code.md) o copiar/pegar. Para más información sobre la sintaxis tokens 4D, consulte la sección *Utilizar tokens en fórmulas*.

Si el comando se ejecuta desde un componente, se aplica por defecto a los métodos del componente. Si pasa el parámetro *\**, accede a los métodos de la base local.

  
#### Ejemplo 1 

Consulte el ejemplo del comando [METHOD SET CODE](method-set-code.md).

#### Ejemplo 2 

Este ejemplo ilustra el efecto del parámetro *opcion*.  
  
Usted desea exportar el siguiente método "simple\_init":

```4d
 Case of
    :(Form event code=On Load)
       ALL RECORDS([Customer])
 End case
```

Si se ejecuta el siguiente código:

```4d
 var $path : Text
 var $contents : Text
 $path:=METHOD Get path(Path project method;"simple_init")
 METHOD GET CODE($path;$contents;0) //sin tokens
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

El documento resultante contendrá:

```RAW
  //%attributes = {"lang":"en"} comentario añadido y reservado por 4DCase of    : (Form event code=On Load)        ALL RECORDS([Customer])End case
```

Si se ejecuta el siguiente código:

```4d
 var $path : Text
 var $contents : Text
 $path:=METHOD Get path(Path project method;"simple_init")
 METHOD GET CODE($path;$contents;Code with tokens) //usa tokens
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

El documento resultante contendrá:

```RAW
  //%attributes = {"lang":"en"} comentario añadido y reservado por 4DCase of    : (Form event code:C388=On Load:K2:1)        ALL RECORDS:C47([Customer:1])End case
```

#### Ver también 

[METHOD SET CODE](method-set-code.md)  
*Utilizar tokens en fórmulas*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1190 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


