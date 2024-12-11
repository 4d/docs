---
id: menu-selected
title: Menu selected
slug: /commands/menu-selected
displayed_sidebar: docs
---

<!--REF #_command_.Menu selected.Syntax-->**Menu selected** {( *subMenu* )} : Integer<!-- END REF-->
<!--REF #_command_.Menu selected.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| subMenu | Text | &#8592; | Referencia del menú que contiene la línea seleccionada |
| Resultado | Integer | &#8592; | Comando de menú seleccionado Palabra superior: Número de menú Palabra inferior: Número de comando de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Menu selected.Summary-->Menu selected se utiliza sólo cuando se muestran formularios.<!-- END REF--> Esta función detecta el comando de menú elegido en un menú y en el caso de un submenú jerárquico, devuelve la referencia del submenú. 

**Consejo:** siempre que sea posible, utilice métodos asociados con comandos de menú en una barra asociada (con un número de barra negativo) en lugar de utilizar Menu selected. Las barras de menús asociadas son más fáciles de administrar, ya que no es necesario probar su selección. Sin embargo, si utiliza los comandos [APPEND MENU ITEM](append-menu-item.md "APPEND MENU ITEM") o [INSERT MENU ITEM](insert-menu-item.md "INSERT MENU ITEM"), debe utilizar Menu selected porque las líneas de menús añadidas por estos comandos no tienen métodos asociados. 

El comando Menu selected puede utilizarse para trabajar con submenús jerárquicos. Cuando se selecciona una línea de un menú jerárquico más allá del primer nivel, el comando devuelve, en el parámetro opcional submenú, la referencia (tipo [MenuRef](# "Unique ID (16-character alphanumeric) of a menu"), cadena de 16 caracteres) del submenú al cual pertenece la línea seleccionada. Si el comando de menú no contiene un submenú jerárquico, este parámetro recibe una cadena vacía. 

Menu selected devuelve el número del menú seleccionado, un entero largo. Para encontrar el número de menú, divida Menu selected por 65,536 y convierta el resultado en un entero. Para obtener el número del comando de menú, calcule el módulo de Menu selected con el coeficiente 65,536\. Utilice las siguientes fórmulas para calcular el número de menú y del comando de menú:

```4d
 Menu:=Menu selected\ 65536
 comando de menu:=Menu selected% 65536
```

Igualmente puede extraer estos valores utilizando los Operadores bitwise como en el siguiente ejemplo:

```4d
 Menu:=(Menu selected & 0xFFFF0000)>>16
 comando de menu:=Menu selected & 0xFFFF
```

Si ningún comando de menú está seleccionado, Menu selected devuelve 0.

#### Ejemplo 

El siguiente método de formulario utiliza Menu selected para proporcionar los argumentos menú y línea de menú a [SET MENU ITEM MARK](set-menu-item-mark.md "SET MENU ITEM MARK"): 

```4d
 Case of
    :(FORM Event=On Menu Selected)
       C_STRING(16;$MenuRefIncludingItem)
       var $ref;$MenuNum;$MenuItemNum : Integer
       $ref:=Menu selected($MenuRefIncludingItem)
       $MenuNum:=$ref\65536
       $MenuItemNum:=$ref%65536
       SET MENU ITEM MARK(MenuRefIncludingItem;$MenuItemNum;Char(18))
 End case
```

**Nota:** el evento de formulario On Menu Selected no es activado si ninguna línea está seleccionada, *$MenuRefIncludingItem* siempre es dado y *$MenuNum* vale 0 si el menú no es uno de los menús de la barra.

#### Ver también 

*Gestión de menús*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 152 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


