---
id: release-menu
title: RELEASE MENU
slug: /commands/release-menu
displayed_sidebar: docs
---

<!--REF #_command_.RELEASE MENU.Syntax-->**RELEASE MENU** ( *menu* )<!-- END REF-->
<!--REF #_command_.RELEASE MENU.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Referencia de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RELEASE MENU.Summary-->El comando RELEASE MENU borra de la memoria el menú cuya referencia se pasa en *menu*.<!-- END REF-->. La regla es la siguiente: a cada [Create menu](create-menu.md) debe corresponder un [RELEASE MENU](release-menu.md). 

El comando elimina todas las instancias de *menu* en todas las barras de menú y todos los procesos. Si el menú pertenece a una barra de menú en uso, continuará funcionando pero no podrá ser modificada. Sólo se borrará realmente de la memoria cuando la última barra de menús en la que aparezca no esté más en uso.

Este comando puede utilizarse con menús usados como barras de menús.

Los submenús utilizados por *menu* no se borran si fueron creados utilizando el comando [Create menu](create-menu.md). En este caso, debe eliminarlos individualmente (ver la regla mencionada anteriormente). Sin embargo, si los submenús vienen de la duplicación de un menú existente, no llame [RELEASE MENU](release-menu.md) con sus instancias porque 4D las borrará automáticamente.

#### Ejemplo 

Este ejemplo muestra las diferentes formas de utilizar este comando:

```4d
 newMenu:=Create menu
 APPEND MENU ITEM(newMenu;"Test1")
 subMenu:=Create menu
 APPEND MENU ITEM(subMenu;"SubTest1")
 APPEND MENU ITEM(subMenu;"SubTest2") // Creación de elementos en el submenú
 
 APPEND MENU ITEM(newMenu;"Test2";subMenu) // Asociar los submenús al menú
 
  //En este momento, el submenú se asocia al menú y si no lo necesitamos más adelante, este es el momento adecuado para borrarlo.
  //Al borrrarlo no se borra inmediatamente subMenu ya que aún está siendo utilizado por newMenu. subMenu sólo se borra cuando se borra newMenu.
  //Borrar el submenú en este momento le permite ahorrar memoria
 RELEASE MENU(subMenu)
 
 $result1:=Dynamic pop up menu(newMenu) //Uso de menú
 copyMenu:=Create menu(newMenu) // Creación de un menú por copia de newMenu (y duplicación de subMenu)
 RELEASE MENU(newMenu) // Ya no necesitamos a newMenu.
 
 $result2:=Dynamic pop up menu(copyMenu)
 RELEASE MENU(copyMenu)
  //No debe preocuparse por borrar los submenús de copyMenu ya que no se creó directamente utilizando Create menu
  //La regla a seguir es: cada Create menu debe tener un RELEASE MENU correspondiente
```

#### Ver también 

[Create menu](create-menu.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 978 |
| Hilo seguro | &cross; |


