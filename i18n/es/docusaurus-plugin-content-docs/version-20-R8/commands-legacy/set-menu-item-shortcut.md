---
id: set-menu-item-shortcut
title: SET MENU ITEM SHORTCUT
slug: /commands/set-menu-item-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM SHORTCUT.Syntax-->**SET MENU ITEM SHORTCUT** ( *menu* ; *lineamenu* ; *tecla* ; *modificadores* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM SHORTCUT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia de menú o número de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 para la última línea añadida al menú |
| tecla | Text, Integer | &#8594;  | Código del carácter de atajo de teclado o letra del atajo de teclado |
| modificadores | Integer | &#8594;  | Modificador(es) a asociar al atajo (se ignora si se pasa el código de tecla) |
| proceso | Integer | &#8594;  | Número de referencia del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET MENU ITEM SHORTCUT.Summary-->El comando **SET MENU ITEM SHORTCUT** asigna un nuevo acceso directo a un elemento del menú.<!-- END REF--> 

El elemento de menú se define a través de los parámetros *menu* y *lineamenu*. Puede pasar -1 en *lineamenu* para apuntar al último elemento añadido a *menu*. 

En *itemKey*, pase una cadena que indique la tecla de acceso directo. El nuevo atajo incluirá automáticamente el modificador **Ctrl** (Windows) o **Cmd** (macOS) por defecto. Por ejemplo, si pasa "U" en *itemKey* el atajo será **Ctrl + U** (Windows) o **Cmd + U** (macOS).

**Nota:** puede designar una tecla F pasando "\[Fx\]" a *itemKey*, por ejemplo "\[F4\]". En este caso, no se añade ningún modificador por defecto.

En *modificadores*, puede pasar modificadores adicionales al atajo, como la tecla **Mayús**. De este modo, puede definir atajos como **Ctrl+Alt+Mayús+Z** (Windows) o **Cmd+Opción+Mayús+Z** (macOS). Pase 0 si no quiere añadir ningún modificador. Las siguientes constantes están disponibles:

* Command key mask para la tecla **Command** (macOS) o **Ctrl** (Windows)
* Shift key mask para la tecla **Mayús**
* Option key mask para la tecla **Opción** (Mac OS) o **Alt** (Windows)

Para definir un acceso directo con varios modificadores, basta con combinar las constantes anteriores.

Si omite el parámetro *proceso*, **SET MENU ITEM SHORTCUT** se aplica a la barra de menús del proceso actual. En caso contrario, el comando se aplica a la barra de menús del proceso cuyo número de referencia se pasa en *proceso*.

**Nota:** si se pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* no sirve para nada y se ignora.

##### Compatibility 

Por razones de compatibilidad, el comando también acepta un código carácter en el parámetro *itemKey* (sintaxis anterior). En este caso, el atajo incluye automáticamente la tecla **Ctrl** (Windows) o **Cmd** (macOS) y no se tiene en cuenta el parámetro modificadores. 

  
Si se pasa 0 (cero) en *itemKey*, se elimina cualquier acceso directo del elemento de menú.

#### Ejemplo 1 

Definición del atajo Ctrl+Mayús+U (Windows) y Cmd+Mayús+U (Mac OS) para la línea "Subrayado": 

```4d
 SET MENU ITEM(MenuRef;1;"Subrayado")
 SET MENU ITEM SHORTCUT(MenuRef;1;"U";Shift key mask)
```

#### Ejemplo 2 

Definición del atajo Ctrl+R (Windows) y Cmd+R (Mac OS) para el elemento de menú "Reiniciar":

```4d
 INSERT MENU ITEM(FileMenu;-1;"Reiniciar")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"R";Command key mask)
```

#### Ejemplo 3 

Definición del atajo de teclado F4 para la opción de menú "Cerrar":

```4d
 INSERT MENU ITEM(FileMenu;-1;"Cerrar")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"[F4]";0)
```

#### Ver también 

[Get menu item key](get-menu-item-key.md)  
[Get menu item modifiers](get-menu-item-modifiers.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 423 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


