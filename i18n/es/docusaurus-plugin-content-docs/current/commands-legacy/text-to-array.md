---
id: text-to-array
title: TEXT TO ARRAY
slug: /commands/text-to-array
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO ARRAY.Syntax-->**TEXT TO ARRAY** ( *varText* ; *arrText* ; *ancho* ; *nomFuente* ; *tamFuente* {; *estiloFuente* {; *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| varText | Text | &#8594;  | Texto original a dividir |
| arrText | Text array | &#8592; | Array que contiene el texto dividido en palabras o líneas |
| ancho | Integer | &#8594;  | Ancho máximo de la cadena(en píxeles) |
| nomFuente | Text | &#8594;  | Nombre de la fuente |
| tamFuente | Integer | &#8594;  | Tamaño de la fuente |
| estiloFuente | Integer | &#8594;  | Estilo de fuente |
| * | Operador | &#8594;  | Si se pasa = interpretar el texto como multistyle |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.TEXT TO ARRAY.Summary-->El comando **TEXT TO ARRAY** transforma una variable texto en un array texto.<!-- END REF--> El texto original (con estilo o no) se divide y cada parte se convierte en un elemento del array *arrText* que es devuelto por el comando. Este comando se puede utilizar por ejemplo para llenar las páginas o las columnas con texto de un tamaño fijo.  
  
El texto original se divide en "palabras", basado en un tamaño de línea definido por los parámetros del comando y teniendo en cuenta todos los estilos utilizados.  
  
En el parámetro *varText*, pase el texto a dividir en elementos de array. Este texto puede ser o no multiestilo. Algunos parámetros se ignoran cuando el texto es multiestilo.  
  
Pase en el parámetro *arrText* el nombre del array a llenar con el texto dividido.  
  
En el parámetro *ancho*, pase un tamaño en píxeles que indique la longitud máxima de línea a medir para dividir el texto. Para todo el texto, el comando evaluara el número máximo de palabras que pueden "encajar" en este ancho en función de los atributos gráficos del texto (fuente, estilo).

* Si el texto es multiestilo, los estilos del texto original se tienen en cuenta y los siguientes parámetros se ignoran si se pasan. En este caso, las líneas de texto en el array resultante conservan su estilo original (de manera que se puede imprimir una por una vía una variable texto o alfa por ejemplo).
* Si se trata de texto plano (sin estilos), debe pasar todos los parámetros para que el comando pueda calcular la longitud de las líneas.

Cada elemento del array debe contener al menos una palabra. Si el ancho pasado es demasiado pequeño para que la regla de división se respete estrictamente, el array se llena lo más aproximadamente posible de acuerdo a los parámetros y la variable OK toma el valor 0\. Por ejemplo, si pasa un ancho de 3 píxeles, es probable que la mayoría de las palabras sean más grandes que esta longitud. En este caso, la variable OK toma el valor 0.  
Esto también significa que el tamaño máximo teórico del array devuelto es igual al número de palabras presentes en *varText*.  
  
En los parámetros *nomFuente* y *tamFuente*, pase el nombre y el tamaño de la fuente con la cual *varText* debe ser evaluado por el comando para hacer la división. Estos parámetros son obligatorios en el caso de texto sin formato.   
  
En el parámetro *estiloFuente*, pase una o más constantes del tema *Estilos de fuente*.  
  
| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Plain     | Entero largo | 0     |
| Underline | Entero largo | 4     |
  
  
Este parámetro es opcional; cuando se omite, se utiliza el estilo Normal.   
  
El parámetro opcional *\**, si se pasa, permite forzar el que se tenga en cuenta los parámetros *nomFuente*, *tamFuente* y/o *estiloFuente* para los textos multiestilos cuando estos parámetros no están definidos en el texto original. Sin embargo, si estos parámetros están definidos en el texto original, los parámetros pasados al comando se ignoran en todos los casos.

#### Ejemplo 1 

Queremos dividir un texto multistyle en líneas con un tamaño máximo de 200 píxeles:

```4d
 TEXT TO ARRAY(theText;TextArray;200;"Arial";20;Normal;*)
  // los atributos Arial, 20 y Normal sólo se tienen en cuenta si no están definidos en el texto
```

#### Ejemplo 2 

Queremos dividir un texto en líneas de un tamaño máximo de 350 píxeles en fuente Bodoni negrita 14\. Como el comando no funciona correctamente si la fuente no está disponible, es útil verificar su presencia:

```4d
 ARRAY TEXT($FontList;0)
 FONT LIST($FontList)
 $Font:="Bodoni"
 $p:=Find in array($FontList;$Font)
 If($p>0)
    TEXT TO ARRAY(theText;TextArray;350;"Bodoni";14;Bold)
 Else
  // utilizar otra fuente
 End if
```

#### Ejemplo 3 

Un texto multiestilo debe imprimirse sin estilo en la fuente Arial normal 12 con un ancho máximo de 600 píxeles:

```4d
  // transformamos el texto multiestilo en texto bruto
 $RawText:=OBJECT Get plain text(vText)
  // llenamos el array
 TEXT TO ARRAY($RawText;TextArray;600;"Arial";12)
```

#### Ejemplo 4 

Debe imprimir en un área de 400 píxeles de largo un texto de un máximo de 80 líneas con la fuente más grande posible (sin exceder los 24 puntos). Puede escribir:

```4d
 ARRAY TEXT(TextArray;0)
 $Size:=24
 Repeat
    TEXT TO ARRAY($RawText;TextArray;400;"Arial";$Size)
    $Size:=$Size-1
    $n:=Size of array(TextArray)
 Until($n<=80)
```

#### Ver también 

[Split string](split-string.md)  
[ST Get plain text](st-get-plain-text.md)  
[ST Get text](st-get-text.md)  