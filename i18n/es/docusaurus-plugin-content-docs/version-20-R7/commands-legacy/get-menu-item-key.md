---
id: get-menu-item-key
title: Get menu item key
slug: /commands/get-menu-item-key
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item key.Syntax-->**Get menu item key** ( *menu* ; *lineamenu* {; *proceso*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item key.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 por el último elemento añadido |
| proceso | Integer | &#8594;  | Número de referencia de proceso |
| Resultado | Integer | &#8592; | Código de caracter de la tecla de atajo estándar asociada a la línea de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu item key.Summary-->El comando Get menu item key devuelve el código del atajo **Ctrl** (Windows) o **Comando** (Mac OS) para el comando de menú cuyo número o referencia de menú se pasa en *menu* y cuyo número de comando se pasa en *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu.*

Si omite el parámetro *proceso*, Get menu item key se aplica a la barra de menús del proceso actual. De lo contrario, Get menu item key se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará. 

Si el comando de menú no tiene ningún atajo asociado o si el parámetro *menuItem* designa un submenú jerárquico, Get menu item key devuelve *0* (cero).

#### Ejemplo 

Para obtener un atajo asociado con un comando de menú, es útil implementar una estructura de programación del siguiente tipo:

```4d
 If(Get menu item key(mimenu;1)#0)
    $modificadores:=Get menu item modifiers(mymenu;1)
    Case of
       :($modificadores=Option key mask)
          ...
       :($modificadores=Shift key mask)
          ...
       :($modificadores=Option key mask+Shift key mask)
          ...
    End case
 End if
```

#### Ver también 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 424 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


