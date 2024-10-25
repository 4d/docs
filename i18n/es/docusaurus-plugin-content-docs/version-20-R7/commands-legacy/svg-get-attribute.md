---
id: svg-get-attribute
title: SVG GET ATTRIBUTE
slug: /commands/svg-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG GET ATTRIBUTE.Syntax-->**SVG GET ATTRIBUTE** ( {* ;} *objetoImagen* ; id_Element ; *nomAtrib* ; *valorAtrib* )<!-- END REF-->
<!--REF #_command_.SVG GET ATTRIBUTE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objetoImagen es un nombre de objeto (cadena). Si se omite, objetoImagen es una variable o un campo |
| objetoPicture | Picture | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| id_Element | Text | &#8594;  | ID del elemento donde uno o más atributos se definen |
| nomAtrib | Text | &#8594;  | Atributo cuyo valor quiere obtener |
| valorAtrib | Text, Integer | &#8592; | Valor actual del atributo |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SVG GET ATTRIBUTE.Summary-->El comando SVG GET ATTRIBUTE se utiliza para obtener el valor actual del atributo *nomAtrib* en un objeto o una imagen SVG.<!-- END REF-->   
  
Si pasa el parámetro opcional *\**, indica que el parámetro objetoImagen es un nombre de objeto (cadena). En este caso, el comando devuelve el valor del atributo de la imagen renderizada adjunta al objeto. Este valor puede haber sido modificada por [SVG SET ATTRIBUTE](svg-set-attribute.md "SVG SET ATTRIBUTE"), por ejemplo.  
Si no pasa el parámetro *\**, indica que el parámetro *objetoImagen* es una variable o un campo. Por lo tanto, se pasa una referencia de variable (variable objeto únicamente) o de campo en lugar de una cadena. En este caso, el comando devuelve el valor del atributo de la imagen inicial renderizada (correspondiente a la fuente de datos de la variable).   
  
**Nota**: este principio también se aplica al comando [SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md "SVG Find element ID by coordinates").  
  
El parámetro *id\_Elem* *ent* se utiliza para definir la identificación (atributo "id" o "xml: id") del elemento cuyo valor de atributo desea obtener.   
  
Para obtener más información acerca de los atributos SVG, consulte la descripción del comando [SVG SET ATTRIBUTE](svg-set-attribute.md "SVG SET ATTRIBUTE"). Esta es una lista de atributos 4D reservados y dedicados a la animación:  
  
| **Atributos**                                 | **Acceso**        | **Comentario**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D-text                                       | lectura/escritura | Reemplaza/lee el contenido del nodo de texto. Utilizable con los elementos 'text' 'tspan' y 'textArea'                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4D-bringToFront                               | escritura         | Si 'true', mover el nodo en frente de los nodos hermanos. Sólo se puede usar con el comando [SVG SET ATTRIBUTE](svg-set-attribute.md "SVG SET ATTRIBUTE")                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4D-isOfClass-{IDENT \[\[S\|COMMA\] IDENT\]\*} | lectura           | Devuelve 'true' si el atributo de clase heredado del nodo contiene todos los nombres de clases; de lo contrario, devuelve 'false'. Devuelve por ejemplo true para "4D-isOfClass-tierra" si la clase heredada del nodo es "land department01")                                                                                                                                                                                                                                                                                                               |
| 4D-enableD2D                                  | lectura/escritura | Si 'false', desactiva Direct2D para el motor de renderización SVG. De hecho, los filtros SVG no son renderizados en Direct2D sino en GDI/GDIPlus. Esta opción le permite beneficiarse de los filtros SVG incluso si la base está en Direct2D. Note que esta opción sólo se tiene en cuenta cuando una imagen ya ha sido cargada en *objetoImagen*. Sin embargo, como esta opción se aplica d globalmente al motor, sólo debe definirse una vez por sesión (por ejemplo con un SVG simple cargado en memoria desde una variable texto al inicio de la base). |

#### Ver también 

[SVG SET ATTRIBUTE](svg-set-attribute.md)  