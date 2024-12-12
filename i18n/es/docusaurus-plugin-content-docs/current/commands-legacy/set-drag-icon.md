---
id: set-drag-icon
title: SET DRAG ICON
slug: /commands/set-drag-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET DRAG ICON.Syntax-->**SET DRAG ICON** ( *icono* {; *despH* {; *despV*}} )<!-- END REF-->
<!--REF #_command_.SET DRAG ICON.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| icono | Picture | &#8594;  | Icono a utilizar durante arrastrar |
| despH | Integer | &#8594;  | Desplazamiento horizontal del borde izquierdo de la imagen con respecto a la posición del cursor (> = 0, a la izquierda, <0 = a la derecha) |
| despV | Integer | &#8594;  | Desplazamiento vertical del borde superior de la imagen con respecto a la posición del cursor (> 0 = hacia arriba, <0 = hacia abajo) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET DRAG ICON.Summary-->El comando **SET DRAG ICON** asocia la imagen de icono al cursor durante las operaciones de arrastrar y soltar que se manejan por programación.<!-- END REF-->

Este comando sólo se puede llamar en el contexto del evento formulario On Begin Drag Over (ver el comando [Form event code](../commands/form-event-code.md)).  
  
En el parámetro *icono*, pase la imagen que desea utilizar. Su tamaño máximo es de 256x256 píxeles. Si una de sus dimensiones excede los 256 píxeles, se redimensiona automáticamente.  
  
En *despH* y *despV*, puede pasar valores de desplazamiento en píxeles:

* pase en *despH*, el desplazamiento horizontal del borde izquierdo del icono con respecto a la posición del cursor. Pase un valor positivo para aplicar este desplazamiento hacia la izquierda o hacia un valor negativo para aplicarlo a la derecha.
* pase en *despV*, el desplazamiento vertical desde el borde superior del icono con respecto a la posición del cursor. Pase un valor positivo para aplicar este desplazamiento hacia arriba o hacia un valor negativo para aplicarlo hacia abajo.

Si omite este parámetro, el cursor se coloca en el centro del icono.

#### Ejemplo 

En un formulario, un usuario puede generar una etiqueta por arrastrar y soltar una fila. En el método objeto del lista box, puede escribir:

```4d
 If(Form event code=On Begin Drag Over)
    READ PICTURE FILE(Get 4D folder(Current resources folder)+"splash.png";vpict)
    CREATE THUMBNAIL(vpict;vpict;48;48)
    SET DRAG ICON(vpict)
 End if
```

Al arrastrar una fila, la imagen aparecerá como se muestra aquí:

![](../assets/en/commands/pict1204050.en.png)

Note que puede modificar la posición del cursor con respecto a la imagen:

```4d
 SET DRAG ICON(vpict;0;0)
```

![](../assets/en/commands/pict1204052.fr.png)

#### Ver también 

[Form event code](../commands/form-event-code.md)  