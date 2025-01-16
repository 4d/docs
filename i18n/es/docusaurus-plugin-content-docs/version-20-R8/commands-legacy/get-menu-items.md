---
id: get-menu-items
title: GET MENU ITEMS
slug: /commands/get-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEMS.Syntax-->**GET MENU ITEMS** ( *menu* ; *arrayTitMenus* ; *arraysRefMenus* )<!-- END REF-->
<!--REF #_command_.GET MENU ITEMS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia de menú o número de menú |
| arrayTitMenus | Text array | &#8592; | Array de títulos de menú |
| arraysRefMenus | Text array | &#8592; | Array de referencias de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET MENU ITEMS.Summary-->El comando GET MENU ITEMS devuelve, en los arrays *arrayTitMenus* y *arraysRefMenus*, los títulos e identificadores de todas las líneas de menú o de la barra de menús designada por el parámetro *menu*.<!-- END REF--> 

En el parámetro *menu*, puede pasar una referencia de menú (MenuRef), un número de barra de menús o una referencia de barra de menú obtenida utilizando el comando [Get menu bar reference](get-menu-bar-reference.md "Get menu bar reference").

Si ninguna referencia de menú está asociada a un elemento, una cadena vacía se devuelve en el elemento de array correspondiente.

#### Ejemplo 

Usted quiere conocer el contenido de la barra de menú del proceso actual: 

```4d
 ARRAY STRING(32;arrayTitMenus;0)
 ARRAY STRING(16;arraysRefMenus;0)
 RefBarMenu:=Get menu bar reference(Frontmost process)
 GET MENU ITEMS(RefBarMenu;arrayTitMenus;arraysRefMenus)
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 977 |
| Hilo seguro | &cross; |


