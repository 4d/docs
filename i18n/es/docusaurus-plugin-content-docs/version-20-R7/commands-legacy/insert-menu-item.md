---
id: insert-menu-item
title: INSERT MENU ITEM
slug: /commands/insert-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.INSERT MENU ITEM.Syntax-->**INSERT MENU ITEM** ( *menu* ; *depuesDe* ; *textoElem* {; *subMenu* {; *proceso*}}{; *} )<!-- END REF-->
<!--REF #_command_.INSERT MENU ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Número de menú o referencia de menú |
| depuesDe | Integer | &#8594;  | Número de la línea de menú |
| textoElem | Text | &#8594;  | Texto para la línea de menú a insertar |
| subMenu | Text | &#8594;  | Referencia del submenú asociado con la línea |
| proceso | Integer | &#8594;  | Número de referencia del proceso |
| * | Operador | &#8594;  | Si se pasa: considerar metacaracteres como caracteres estándar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.INSERT MENU ITEM.Summary-->El comando **INSERT MENU ITEM** inserta nuevas líneas en el menú cuyo número o referencia se pasa en *menu* y las ubica después de la línea de menú cuyo número se pasa en *despuesItem*.<!-- END REF-->

Si omite el parámetro *proceso*, **INSERT MENU ITEM** se aplica a la barra de menús del proceso actual. De lo contrario, **INSERT MENU ITEM** se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará.

Si no pasa el parámetro \* *, INSERT MENU ITEM* le permite insertar uno o varios comandos de menú en una sola llamada.

**INSERT MENU ITEM** funciona como [APPEND MENU ITEM](append-menu-item.md), excepto que le permite insertar los comandos en cualquier parte del menú, mientras que [APPEND MENU ITEM](append-menu-item.md) siempre los añade al final del menú.

Consulte la descripción del comando [APPEND MENU ITEM](append-menu-item.md) para más información sobre la definición de los comandos de menús pasados en *itemtext*.

**Nota:** la constante ak standard action title es soportada en el parámetro *itemText* (4D v16 R3 y superior).

El parámetro opcional *submenu* permite designar un menú como línea insertada y definir un submenú jerárquico. De pasar en este parámetro una referencia de menú (cadena de tipo MenuRef) especificando un menú creado, por ejemplo, utilizando el comando de menú [Create menu](create-menu.md). Si el comando añade más de una línea de menú, el submenú se asocia con la primera línea. 

**Importante:** las nuevas líneas no tienen métodos o acciones asociados. Deben asociarse utilizando los comandos [SET MENU ITEM PROPERTY](set-menu-item-property.md) o [SET MENU ITEM METHOD](set-menu-item-method.md), o los elementos también pueden ser administrados desde un método de formulario utilizando el comando [Menu selected](menu-selected.md).

#### Ejemplo 

El siguiente ejemplo crea un menú que consiste en dos comandos los cuales asignan un método:

```4d
 MenuRef:=Crear menu
 APPEND MENU ITEM(MenuRef;"Caracteres")
 SET MENU ITEM METHOD(MenuRef;1;"CarMgmtDial")
 INSERT MENU ITEM(MenuRef;1;"Parrafos")
 SET MENU ITEM METHOD(MenuRef;2;"ParaMgmtDial")
```

#### Ver también 

[APPEND MENU ITEM](append-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 412 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


