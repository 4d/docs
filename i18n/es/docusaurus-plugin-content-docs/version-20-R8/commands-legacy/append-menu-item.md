---
id: append-menu-item
title: APPEND MENU ITEM
slug: /commands/append-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.APPEND MENU ITEM.Syntax-->**APPEND MENU ITEM** ( *menu* ; *itemText* {; *subMenu* {; *proceso* {; *}}} )<!-- END REF-->
<!--REF #_command_.APPEND MENU ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Número de menú o referencia de menú |
| itemText | Text | &#8594;  | Texto para los nuevos elementos de menú |
| subMenu | Text | &#8594;  | Referencia del submenú asociado al elemento |
| proceso | Integer | &#8594;  | Número de referencia del proceso |
| * | Operador | &#8594;  | Si se pasa: considerar metacaracteres como caracteres estándar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.APPEND MENU ITEM.Summary-->El comando **APPEND MENU ITEM** añade nueva líneas de menú al menú cuyo número o referencia se pasa en *menu*.<!-- END REF-->

Si omite el parámetro *proceso*, **APPEND MENU ITEM** se aplica a la barra de menús del proceso actual. De lo contrario, **APPEND MENU ITEM** se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará.

Si no pasa el parámetro *\**, **APPEND MENU ITEM** le permite añadir una o varias líneas de menú en una sola llamada.

Las líneas a añadir se definen con el parámetro *itemText* de la siguiente manera:

* Separe cada elemento del siguiente con un punto y coma (*;*). Por ejemplo,  
*"ItemText1;ItemText2;ItemText3".*
* Para desactivar una línea: Coloque un paréntesis abierto (*(*) en el texto de la línea.
* Para definir una línea de separación: Pase "-" o "(-" como texto de la línea.
* Para especificar un estilo de fuente para una línea: en el texto de la línea, ponga un signo menor que (*<*) seguido por uno de los siguientes caracteres:

| <B | Negrita   |
| -- | --------- |
| <I | Cursiva   |
| <U | Subrayado |

* Para añadir una marca de selección a una línea: en el texto de la línea, ponga un signo de admiración (*!*) seguido por el carácter que quiere como marca de selección. En Macintosh, el carácter se muestra; en Windows, se muestra una marca de selección sin importar que carácter pase.
* Para añadir un icono a una línea: en el texto de la línea, ponga un acento circunflejo (^) seguido por un carácter cuyo código más 208 es el número del recurso del icono Mac OS.
* Para añadir un atajo a una línea: en el texto de la línea, ponga una barra oblicua (*/*) seguida por el carácter de atajo para el elemento.
* (**A partir de 4D v16 R3**) si el elemento está asociado con una acción estándar, pase la constante ak standard action title en *itemText* para utilizar automáticamente el nombre de la acción localizada y la información de contexto (si la hay), por ejemplo "Undo <previous action>".

**Nota:** utilice menús que tengan un número razonable de líneas. Por ejemplo, si quiere mostrar más de 50 elementos, considere utilizar un área de desplazamiento en un formulario en lugar de un menú.

Si pasa el parámetro *\**, los caracteres "especiales" (*; ( !*...) incluidos en el texto del elemento se considerarán como caracteres estándar y no como metacaracteres. Esto permite crear elementos de menú tales como "Copiar (especial)..." o "Buscar/Reemplazar...". Note que cuando se pasa el parámetro *\**, no puede crear varios elementos en una sola llamada ya que el carácter ";" es considerado como un carácter estándar.

**Nota:** los comandos [GET MENU ITEMS](get-menu-items.md) y [Get menu item](get-menu-item.md) devolverán o no los metacaracteres en el texto de un elemento de menú dependiendo de cómo fue creado: si fue creado con la opción *\**, los metacaracteres serán devueltos como caracteres estándar.  
  
El parámetro opcional *subMenu* permite designar un menú como elemento añadido y por lo tanto definir un submenú jerárquico. Debe pasar en este parámetro una referencia de menú (cadena de tipo [MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) especificando un menú creado por ejemplo, utilizando el comando [Create menu](create-menu.md). Si el comando añade más de un elemento de menú, el submenú se asocia a la primera línea. 

**Importante:** las nuevas líneas no tienen métodos o acciones asociados. Estos deben asociarse con los elementos utilizando los comandos [SET MENU ITEM PROPERTY](set-menu-item-property.md) o [SET MENU ITEM METHOD](set-menu-item-method.md), o los elementos también pueden ser administradas por un método de formulario utilizando el comando [Menu selected](menu-selected.md).

#### Ejemplo 

Este ejemplo añade los nombres de las fuentes disponibles en un menú Fuentes, el cual en este ejemplo es el sexto menú de la barra de menús actual:

```4d
  // En el método base On Startup
  // La lista de fuentes se carga y el texto de la línea de menú se construye
 FONT LIST(◊asFuenteDisp)
 ◊atFuenteMenuItems:=""
 For($vlFont;1;Size of array(◊asFuenteDisp))
    ◊atFuenteMenuItems:=◊atFuenteMenuItems+";"+◊asFuenteDisp{$vlFont}
 End for
```

Entonces, en todo método de formulario o de proyecto, puede escribir:

```4d
 APPEND MENU ITEM(6;◊atFuenteMenuItems)
```

#### Ver también 

[DELETE MENU ITEM](delete-menu-item.md)  
[INSERT MENU ITEM](insert-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 411 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


