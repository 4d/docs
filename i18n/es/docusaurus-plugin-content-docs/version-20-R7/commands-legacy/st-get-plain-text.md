---
id: st-get-plain-text
title: ST Get plain text
slug: /commands/st-get-plain-text
displayed_sidebar: docs
---

<!--REF #_command_.ST Get plain text.Syntax-->**ST Get plain text** ( {* ;} *objeto* {; *refMode*} ) : Text<!-- END REF-->
<!--REF #_command_.ST Get plain text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo. |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| refMode | Integer | &#8594;  | Modo para el manejo de las referencias presentes en el texto |
| Resultado | Text | &#8592; | Texto sin etiquetas |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ST Get plain text.Summary-->El comando ST Get plain textremueve las etiquetas de estilo de la variable o campo de texto designado por los parámetros *\** y *objeto* y devuelve el texto plano.<!-- END REF-->

##### 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Durante la ejecución, si el objeto tiene el foco, el comando devuelve información sobre el objeto que está siendo editado, sin embargo, cuando el objeto no tiene el foco, el comando devuelve información sobre la fuente de datos (campo o variable) del objeto.  
Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, pase una referencia campo o variable en lugar de una cadena y durante la ejecución, el comando devuelve información sobre este campo o variable.

##### 

El parámetro opcional *modoRef* indica la forma en que las referencias que se encuentran en *objeto* deben ser devueltas. En *modoRef*, pase una de las siguientes constantes, que se encuentran en el tema "*Texto multiestilo*" (puede pasar una sola constante o una combinación):

| Constante                                    | Tipo         | Valor | Comentario                                                                                                                                                                                                        |
| -------------------------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ST 4D Expressions as sources                 | Entero largo | 2     | Se devuelve la cadena original de las referencias de expresiones 4D                                                                                                                                               |
| ST 4D Expressions as values                  | Entero largo | 1     | Las referencias de expresiones 4D se devuelven en su forma evaluada (funcionamiento por defecto en los formularios)                                                                                               |
| ST References as spaces                      | Entero largo | 0     | Cada referencia se devuelve como un carácter espacio sin separación (funcionamiento por defecto, utilizado por los otros comandos)                                                                                |
| ST Tags as plain text                        | Entero largo | 64    | El rótulo de la etiqueta se devuelve en texto plano. Por ejemplo para el tag '<img src="test.jpg" alt="picture">my picture</img>', el texto plano es "my picture" (funcionamiento por defecto en los formularios) |
| ST Tags as XML code                          | Entero largo | 128   | El código XML de la etiqueta se devuelve en texto plano. Por ejemplo para el tag '<img src="test.jpg" alt="picture">my picture</img>', el texto plano es '<img src="test.jpg" alt="picture">my picture</img>'     |
| ST Text displayed with 4D Expression sources | Entero largo | 86    | Devuelve el texto tal y como se muestra en los formularios con la cadena de origen de las expresiones 4D.<br/>Corresponde a la combinación predefinida de las constantes 2+4+16+64.                       |
| ST Text displayed with 4D Expression values  | Entero largo | 85    | Devuelve el texto tal y como se muestra en los formularios con las expresiones 4D en su forma evaluada.<br/>Corresponde a la combinación predefinida de las constantes 1+4+16+64.                         |
| ST URL as labels                             | Entero largo | 4     | La etiqueta visible de los URLs se devuelve, por ejemplo "Visite nuestro sitio web" (funcionamiento por defecto en los formularios)                                                                               |
| ST URL as links                              | Entero largo | 8     | Se devuelve el enlace, por ejemplo "http://www.4d.com"                                                                                                                                                            |
| ST User links as labels                      | Entero largo | 16    | Se devuelve la etiqueta visible del enlace usuario (funcionamiento por defecto en los formularios)                                                                                                                |
| ST User links as links                       | Entero largo | 32    | Se devuelve el contenido del enlace usuario                                                                                                                                                                       |

  
**Notas**:

* dado que el texto plano sigue siendo el mismo, independientemente de los valores pasados ​​en el parámetro *modoRef*, el parámetro *modoRef* opcional sólo es útil cuando el texto contiene referencias.
* si un documento 4D Write Pro contiene tablas, el contenido de cada celda se trata como párrafos individuales y se devuelve como texto separado por pestañas. Las filas están separadas por retornos de carro.

#### Ejemplo 1 

Usted está buscando el texto "muy bien" entre los valores de un campo de texto multiestilo. El valor se guardó de la siguiente forma: "El clima está muy bien **hoy**".

```4d
 QUERY BY FORMULA([Comments];ST Get plain text([Comments]Weather)="@muy bien@")
```

  
**Nota:** en este contexto, la siguiente instrucción no dará el resultado deseado porque el texto está guardad con etiquetas de estilo:   

```4d
 QUERY([Comments];[Comments]Weather="@muybien@")
```

#### Ejemplo 2 

Dado el siguiente texto ubicado en el área multiestilo "MyArea":

```RAW
It is now   Go to the 4D site or Open a window
```

Este texto se muestra:

![](../assets/en/commands/pict1217332.en.png)

Si ejecuta el siguiente código:

```4d
 $txt :=ST Get plain text(*;"myArea";ST References as spaces)
  // $txt = "ahora    o " (espacios)
 $txt :=ST Get plain text(*;"myArea";ST 4D Expressions as values)
  // $txt = "actualmente 15:48:19  o  "
 $txt :=ST Get plain text(*;"myArea";ST 4D Expressions as sources)
  // $txt = "es ahora la hora actual o  "
 $txt :=ST Get plain text(*;"myArea";ST URL as links)
  //$txt = "es ahora http://www.4d.com or  "
 $txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression values)
  //$txt = "es ahora 15:48:19 ir al sitio de 4D o abrir una ventana"
 $txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression sources)
  //$txt = "es actualmente Hora actual ir al sitio de 4D o abrir una ventana"
 $txt :=ST Get plain text(*;"myArea";ST User links as labels)
  //$txt = "es ahora    o Abrir una ventana"
 $txt :=ST Get plain text(*;"myArea";ST User links as links)
  //$txt = "es ahora    u openW"
```

#### Variables y conjuntos del sistema 

Después de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ningún error; de lo contrario, toma el valor 0\. Este es el caso particularmente cuando las etiquetas de estilo no se evalúan correctamente (etiquetas incorrectas o faltantes).   

En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se está evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML.

#### Ver también 

[ST Get text](st-get-text.md)  
[ST SET PLAIN TEXT](st-set-plain-text.md)  
[ST SET TEXT](st-set-text.md)  
[TEXT TO ARRAY](text-to-array.md)  