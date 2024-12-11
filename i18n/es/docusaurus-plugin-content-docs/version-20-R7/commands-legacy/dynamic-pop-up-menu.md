---
id: dynamic-pop-up-menu
title: Dynamic pop up menu
slug: /commands/dynamic-pop-up-menu
displayed_sidebar: docs
---

<!--REF #_command_.Dynamic pop up menu.Syntax-->**Dynamic pop up menu** ( *menu* {; *pordefecto* {; *CoordX* ; *CoordY*}} )  : Text<!-- END REF-->
<!--REF #_command_.Dynamic pop up menu.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Referencia de menú |
| pordefecto | Text | &#8594;  | Parámetro del elemento seleccionado por defecto |
| CoordX | Integer | &#8594;  | Coordenada X de la esquina superior izquierda |
| CoordY | Integer | &#8594;  | Coordenada Y de la esquina superior izquierda |
| Resultado | Text | &#8592; | Parámetro del elemento de menú seleccionado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Dynamic pop up menu.Summary-->El comando **Dynamic pop up menu** hace aparecer un menú desplegable jerárquico en la ubicación actual del ratón o en la ubicación definida por los parámetros opcionales *Coordx* y *Coordy*.<!-- END REF-->

El menú jerárquico utilizado debe haber sido creado con el comando [Create menu](create-menu.md). La referencia devuelta por [Create menu](create-menu.md) debe pasarse en el parámetro *menu*.

**Nota:** el comando [Pop up menu](pop-up-menu.md) (tema “Interfaz de usuario”) puede utilizarse parar crear menús pop-up menus basados en texto.

Conforme con las reglas estándar de la interfaz, este comando generalmente debe ser llamado en respuesta a un clic derecho, o cuando el botón se mantiene presionado por un cierto periodo de tiempo (menú contextual por ejemplo).

El parámetro opcional *pordefecto* puede utilizarse para definir un elemento del menú desplegable seleccionado por defecto cuando aparece el menú. En este parámetro, pase una cadena personalizada asociada a la referencia del elemento de menú. Esta cadena debe haber sido definida de antemano con la ayuda del comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md). Si no pasa este parámetro, el primer elemento del menú será seleccionado por defecto.

**Nota:** solo se puede seleccionar un elemento de menú de nivel superior de forma predeterminada.

Los parámetros opcionales *CoordX* y *CoordY* pueden ser utilizados para especificar la ubicación del menú desplegable a mostrar. En los parámetros *CoordX* y *CoordY*, pase las coordenadas horizontal y vertical respectivamente, de la esquina superior izquierda del menú. Estas coordenadas deben ser expresadas en píxeles en el sistema de coordenadas local del formulario actual. Estos dos parámetros deben pasarse juntos; si se pasa sólo uno de ellos, el otro será ignorado.

Si quiere mostrar un menú desplegable asociado a un botón 3D, no pase los parámetros opcionales *CoordX* y *CoordY*. En este caso, 4D calcula automáticamente la ubicación del menú respecto al botón en función de los estándares de interfaz de la plataforma actual (el botón 3D debe tener la propiedad "Con menú pop-up/relacionado" o "Con menú pop-up/Separado").

Si un elemento de menú ha sido seleccionado, el comando devuelve su cadena de caracteres personalizada asociada (tal como se ha definido utilizando el comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md)). De lo contrario, el comando devuelve una cadena vacía.

**A partir de 4D v16 R3:** si una acción estándar está asociada a un elemento de menú, es tenida en cuenta por el comando **Dynamic pop up menu** en varios niveles:

* Si una acción estándar asociada no está activada (es decir, no se puede invocar) en el contexto del menú emergente, el elemento se oculta automáticamente. Puede saber si una acción se activa utilizando el comando [Action info](action-info.md).
* Los elementos con una acción asociada se seleccionan automáticamente, sin marcar o "mezclados" según la selección.
* Si el título de la acción se ha ajustado al elemento usando la constante ak standard action title, el nombre localizado se mostrará en el menú.
* Cuando se selecciona el elemento, se invoca la acción estándar asociada (la ejecución es asíncrona).

#### Ejemplo 

Este código permite crear un menú emergente dinámico jerárquico basado en acciones estándar:

```4d
 var $refMainContextMenu;$refMenuEdit : Text
 $refMainContextMenu:=Create menu
 APPEND MENU ITEM($refMainContextMenu;"-")
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak select all)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak clear)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak copy)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak cut)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak paste)
 APPEND MENU ITEM($refMainContextMenu;"-")
  //sub menu text edit
 $refMenuEdit:=Create menu
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font bold)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("B"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font italic)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("I"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font linethrough)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("L"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font underline)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("U"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font show dialog)
 APPEND MENU ITEM($refMainContextMenu;"Edit";$refMenuEdit)
 
 paramRef:=Dynamic pop up menu($refMainContextMenu)
```

#### Ver también 

[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[Pop up menu](pop-up-menu.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  
[SET MENU ITEM PROPERTY](set-menu-item-property.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1006 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


