---
id: svg-show-element
title: SVG SHOW ELEMENT
slug: /commands/svg-show-element
displayed_sidebar: docs
---

<!--REF #_command_.SVG SHOW ELEMENT.Syntax-->**SVG SHOW ELEMENT** ( {* ;} *objetoImagen* ; *id* {; *margen*} )<!-- END REF-->
<!--REF #_command_.SVG SHOW ELEMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica objetoImagen es un nombre de objeto (cadena). Si se omite, objetoImagen es una variable |
| objetoPicture | Picture | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| id | Text | &#8594;  | Atributo id del elemento a visualizar |
| margen | Integer | &#8594;  | Margen de visibilidad (en píxeles por defecto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SVG SHOW ELEMENT.Summary-->El comando SVG SHOW ELEMENT mueve el documento SVG *objetoImagen* para mostrar el elemento cuyo atributo "id" es especificado por el parámetro *id*.<!-- END REF-->   
  
 Si pasa el parámetro opcional *\**, indica que el parámetro *objetoImagen* es un nombre de objeto (cadena). En este caso, el comando se aplica a la imagen renderizada adjunta al objeto. Si no pasa este parámetro, indica que el parámetro *objetoImagen* es un campo o una variable y se pasa una referencia de variable (variable objeto únicamente) o de campo en lugar de una cadena. En este caso, el comando se aplica a las imágenes renderizadas de todos los objetos que utilizan la variable o el campo (pero no a la imagen renderizada inicial).   
  
 El comando mueve el documento SVG para que todo el objeto, cuyos límites están definidos por su rectángulo de delimitación, sea visible. El parámetro *margen* se utiliza para configurar la amplitud del movimiento al especificar la distancia que debe separar el objeto que se muestra desde los bordes del documento. En otras palabras, el rectángulo aumentará en *margen* píxeles de ancho y de altura. Por defecto, el valor de desplazamiento es de 4 píxeles.   
  
 Este comando sólo tiene efecto en modo de visualización "top left" (con barras de desplazamiento).  
  
 Si este comando no se ejecuta en el contexto de un formulario o si se pasa un *objetoImagen* inválido, la variable OK toma el valor 0\. Si el comando se ejecuta correctamente, toma el valor 1.


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1108 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


