---
id: get-menu-item-style
title: Get menu item style
slug: /commands/get-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item style.Syntax-->**Get menu item style** ( *menu* ; *lineamenu* {; *proceso*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item style.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido |
| proceso | Integer | &#8594;  | Process reference number |
| Resultado | Integer | &#8592; | Estilo del comando de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu item style.Summary-->El comando Get menu item style devuelve el estilo de fuente de la línea de menú cuyo número o referencia se pasa en *menu* y cuyo número de elemento se pasa en *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu.*

Si omite el parámetro proceso, Get menu item style se aplica a la barra de menús del proceso actual. De lo contrario, Get menu item style se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará. 

Get menu item style devuelve una combinación (uno o una suma) de las siguientes constantes predefinidas:

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Plain     | Entero largo | 0     |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Underline | Entero largo | 4     |

#### Ejemplo 

Para probar si un elemento de menú se muestra en negrita, escribe:

```4d
 If((Get menu item style($vlMenu;$vlItem)&Bold)#0)
  //...
 End if
```

#### Ver también 

[SET MENU ITEM STYLE](set-menu-item-style.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 426 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


