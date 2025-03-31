---
id: process-4d-tags
title: PROCESS 4D TAGS
slug: /commands/process-4d-tags
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS 4D TAGS.Syntax-->**PROCESS 4D TAGS** ( *plantillaEntrada* ; *datosSalida* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.PROCESS 4D TAGS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| plantillaEntrada | Text | &#8594;  | Datos que contiene las etiquetas a tratar |
| datosSalida | Text | &#8592; | Datos procesados |
| param | Expression | &#8594;  | Parámetros pasados a la plantilla en ejecución |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PROCESS 4D TAGS.Summary-->El comando **PROCESS 4D TAGS** provoca el procesamiento de las etiquetas de transformación 4D contenidas en el parámetro *plantillaEntrada* mientras opcionalmente inserta valores utilizando los valores vía los parámetros *param* y devuelve los datos resultantes en *datosSalida*.<!-- END REF-->Para una descripción completa de estas etiquetas, consulte la sección *Etiquetas de transformación 4D*.  
  
Este comando permite ejecutar un texto de tipo "template" que contiene las etiquetas y las referencias a las expresiones o variables 4D y produce un resultado dependiendo del contexto de ejecución y/o de los valores pasados en parámetro.   

Por ejemplo, puede utilizar este comando para generar y guardar las páginas HTML basadas en **páginas** **semi-dinámicas** que contienen las etiquetas de transformación 4D (sin que sea necesario que el servidor Web de 4D se inicie). Puede utilizarlas para enviar mensajes de correo electrónico en formato HTML que contengan procesamientos y/o referencias a los datos contenidos en la base a través de 4D Internet Commands. Es posible procesar cualquier tipo de datos basados ​​en texto, tales como XML, SVG o texto multi-estilo.

Pase los datos que contienen las etiquetas a procesar en el parámetro *plantillaEntrada*. Este parámetro puede ser un campo o una variable de tipo Texto.   
  
Todas las etiquetas de transformación de 4D son soportadas (*4DTEXT*, *4DHTML*, *4DSCRIPT*, *4DLOOP*, *4DEVAL,* etc.),

**Nota:** en caso de utilizar la etiqueta *4DINCLUDE* fuera del marco del servidor web (proceso web):

* Con 4D en modo local o 4D Server, la carpeta por defecto es la carpeta que contiene el archivo de estructura de la base,
* Con 4D en modo remoto, la carpeta por defecto es la carpeta que contiene la aplicación 4D.

El comando **PROCESS 4D TAGS** soporta un número indefinido de parámetros *param* que se pueden insertar en el código que se ejecuta. Al igual que con los métodos proyecto, dichos parámetros pueden contener valores escalares de tipos variados (texto, fecha, hora, entero largo, real, etc), así como también objetos o colecciones. También puede utilizar los arrays, por intermedio de punteros de arrays. Dentro del código procesado por las etiquetas 4D, estos parámetros son accesibles por medio de argumentos estándar ($1, $2, etc.), al igual que en los métodos 4D (ver ejemplo).   
Un conjunto dedicado de variables locales se define en el contexto de ejecución del comando **PROCESS 4D TAGS**. Estas variables pueden ser escritas o leídas durante el procesamiento.

Después de la ejecución del comando, el parámetro *datosSalida* recibe el resultado de la ejecución del parámetro *plantillaEntrada*, junto con el resultado del proceso de las etiquetas 4D que contiene, cuando aplica. Si *datosEntrada* no contiene las etiquetas 4D o produce una cadena vacía, el contenido de *datosSalida* es idéntico al de *plantillaEntrada*.  
El parámetro *datosSalida* puede ser un campo o una variable de tipo Texto.

**Nota**: este comando nunca llama al [Método base On Web Authentication](metodo-base-on-web-authentication.md).

#### Ejemplo 1 

Este ejemplo carga un documento de tipo "plantilla", procesa las etiquetas que contiene y luego lo almacena:

```4d
 var $inputText_t : Text
 var $outputText_t : Text
 
 $inputText_t:=Document to text(File("/PACKAGE/mytemplate.txt").platformPath)
 PROCESS 4D TAGS($inputText_t;$outputText_t)
 TEXT TO DOCUMENT(File("/PACKAGE/myfile.txt").platformPath;$outputText_t)
```

#### Ejemplo 2 

Este ejemplo genera un texto utilizando los datos de los arrays:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:=""
 $input:=$input+""
 $input:=$input+" "
 $input:=$input+""
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world"
```

#### Ver también 

*Etiquetas de transformación 4D*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 816 |
| Hilo seguro | &check; |


