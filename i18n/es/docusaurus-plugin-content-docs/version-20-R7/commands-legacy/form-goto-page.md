---
id: form-goto-page
title: FORM GOTO PAGE
slug: /commands/form-goto-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM GOTO PAGE.Syntax-->**FORM GOTO PAGE** ( *numPag* {; *} )<!-- END REF-->
<!--REF #_command_.FORM GOTO PAGE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numPag | Integer | &#8594;  | Número de la página a mostrar |
| * | Operador | &#8594;  | Cambia la página del subformulario actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM GOTO PAGE.Summary-->**FORM GOTO PAGE** cambia la página actual de un formulario para mostrar la página especificada por *numPag*.<!-- END REF-->

Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](form-load.md) o si *numPag* corresponde a la página actual del formulario, **FORM GOTO PAGE** no hace nada. Si *numPag* es superior que el número de páginas del formulario, se muestra la última página. Si *numPag* es menor que uno, se muestra la primera página.

El parámetro *\** es útil cuando el comando se llama en el contexto de un subformulario en página que contiene varias páginas. En este caso, cuando pase este parámetro, el comando cambia la página del subformulario actual (el que llamó al comando). Por defecto, si se omite el parámetro *\**, el comando se aplica siempre al formulario padre.

##### Acerca de los comandos de gestión de páginas 

Los botones de acción automática realizan las mismas tareas que los comandos [FORM FIRST PAGE](form-first-page.md), [FORM LAST PAGE](form-last-page.md), [FORM NEXT PAGE](form-next-page.md), [FORM PREVIOUS PAGE](form-previous-page.md) y [FORM GOTO PAGE](form-goto-page.md) que puede asociar a los objetos tales como pestañas, list box desplegables, etc. Siempre que sea posible, utilice botones de acción automática en lugar de los comandos. 

Los comandos de gestión de página pueden utilizarse con formularios de entrada o con formularios de salida en cajas de diálogo. Los formularios de salida utilizan sólo la primera página. Un formulario siempre tiene por lo menos una página, la primera página. Recuerde que sin importar el número de páginas que tenga un formulario, sólo existe un método de formulario para cada formulario. 

* Utilice el comando [FORM Get current page](form-get-current-page.md) para saber que página se está mostrando.
* Utilice [Form event code](form-event-code.md) On Page Change que se genera cada vez que la página actual del formulario cambia.

**Nota:** cuando diseñaun formulario, puede trabajar con las páginas de la 1 a la X, como también con la página 0, en la cual pone los objetos que aparecen en todas las páginas. Cuando **utiliza** un formulario, y llama los comandos de página, usted trabaja con las páginas de la 1 a la X; la página 0 se combina automáticamente con la página que está siendo mostrada.

#### Ejemplo 

El siguiente ejemplo es un método de objeto para un botón que muestra una página específica, la página 3: 

```4d
 FORM GOTO PAGE(3)
```

#### Ver también 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 247 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


