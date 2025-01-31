---
id: clear-list
title: CLEAR LIST
slug: /commands/clear-list
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR LIST.Syntax-->**CLEAR LIST** ( *lista* {; *} )<!-- END REF-->
<!--REF #_command_.CLEAR LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referencia de la lista |
| * | Operator |  &#8594;  | Si se especifica, si hay sublistas las borra de la memoria, Si se omite, las sublistas no son borradas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLEAR LIST.Summary-->El comando CLEAR LIST borra de la memoria la lista jerárquica cuyo número de referencia se pasa en *lista*.<!-- END REF-->

Generalmente debe pasar el parámetro opcional *\*,* de manera que todas las sublistas, si las hay, asociadas a los elementos o subelementos de la lista también sean borradas.

No es necesario borrar una lista asociada a un objeto de formulario por medio de la ventana de la Lista de propiedades. 4D carga y borra la lista por usted. Por otra parte, cada vez que usted carga, copia, extrae de un BLOB, o crea una lista por programación, llama al comando CLEAR LIST cuando usted no necesita más la lista.

Para borrar un sublista asociada a un elemento (en cualquier nivel) de otra lista mostrada actualmente en un formulario, proceda de la siguiente forma:

1\. Llame [GET LIST ITEM](get-list-item.md "GET LIST ITEM") con el elemento padre para obtener el número de referencia de la sublista.  
2\. Llame [SET LIST ITEM](set-list-item.md "SET LIST ITEM") con el elemento padre para separar la sublista del elemento de la lista antes de borrarlos.  
3\. Llame CLEAR LIST para borrar la sublista cuyo número de referencia obtuvo con [GET LIST ITEM](get-list-item.md "GET LIST ITEM").  
4\. Llame *REDRAW LIST* para la lista mostrada en el formulario, para recalcular sus elementos y sublistas.

#### Ejemplo 1 

Dentro de una rutina de limpieza que borra todos los objetos y datos que ya no necesita (por ejemplo, cuando se cierra una ventana o un formulario), usted podría terminar borrando una lista jerárquica que ya haya sido borrada, dependiendo de las acciones del usuario en el formulario. Utilice [Is a list](is-a-list.md "Is a list") para borrar la lista sólo si es necesario:

```4d
  // Extraer de la rutina de limpieza
 If(Is a list(hlList))
    CLEAR LIST(hlList;*)
 End if
```

#### Ejemplo 2 

Ver el ejemplo del comando [Load list](load-list.md "Load list").

#### Ejemplo 3 

Ver el ejemplo del comando [BLOB to list](blob-to-list.md "BLOB to list").

#### Ver también 

[BLOB to list](blob-to-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 377 |
| Hilo seguro | &cross; |


