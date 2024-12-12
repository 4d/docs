---
id: object-get-font-style
title: OBJECT Get font style
slug: /commands/object-get-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font style.Syntax-->**OBJECT Get font style** ( * ; *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font style.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| Resultado | Integer | &#8592; | Estilo de la fuente |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get font style.Summary-->El comando OBJECT Get font style devuelve el estilo actual de la fuente utilizada por el objeto de formulario designado por *objeto*.<!-- END REF--> 

Si pasa el parámetro opcional *\**, indica que el parámetro objeto es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (campo o variable objeto únicamente) en lugar de una cadena. 

Puede comparar el valor devuelto por el comando con el valor de uno o más de las siguientes constantes predefinidas, ubicadas en el tema "*Estilos de fuente*":

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Plain     | Entero largo | 0     |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Underline | Entero largo | 4     |

#### Ver también 

[OBJECT SET FONT STYLE](object-set-font-style.md)  