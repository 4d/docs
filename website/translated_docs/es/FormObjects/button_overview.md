---
id: buttonOverview
title: Botón
---

Un botón es un objeto activo al que se le puede asignar una acción (*por ejemplo*, una tarea de base de datos o una función de interfaz) para que la realice cuando un usuario haga clic en él.

![](assets/en/FormObjects/button_regular.png)

Los botones pueden cumplir diversas funciones, según su estilo y la acción que se les asigne. Por ejemplo, los botones pueden guiar al usuario a través de un cuestionario o formulario para que lo llene, o para que tome decisiones. Dependiendo de sus propiedades, un botón puede estar diseñado para ser presionado una sola vez y ejecutar un comando, mientras que otros pueden requerir que el usuario haga clic más de una vez para recibir el resultado deseado.

## Handling buttons

The actions assigned to buttons can originate from predefined [standard actions](properties_Action.md#standard-action) or from custom object methods. Examples of typical actions include letting the user accept, cancel, or delete records, copy or paste data, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc.

Buttons with standard actions are dimmed when appropriate during form execution. For example, if the first record of a table is displayed, a button with the `firstRecord` standard action would appear dimmed.

If you want a button to perform an action that's not available as a standard action, leave the standard action field empty and write an object method to specify the button’s action. For more information about object methods and how to create and associate them, see [Using object methods](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html). Normally, you would activate the `On Clicked` event and the method would run only when the button is clicked. You can associate a method with any button.

The [variable](properties_Object.md#variable-or-expression) associated with a button is automatically set to **0** when the form is executed for the first time in Design or Application mode. When the user clicks a button, its variable is set to **1**.



> A button can be assigned both a standard action and a method. In this case, if the button is not disabled by the standard action, the method is executed before the standard action.



## Button Styles

Button styles control a button's general appearance as well as its available properties. It is possible to apply different predefined styles to buttons or to associate pop-up menus with them. Se puede obtener un gran número de variaciones combinando estas propiedades/comportamientos.

With the exception of the [available properties](#supported-properties), many button objects are *structurally* identical. La diferencia está en el tratamiento de sus variables asociadas.

4D provides buttons in the following predefined styles:



### Regular

The Regular button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/button_regular.png)

By default, the Regular style has a light gray background with a label in the center. When the cursor hovers over the Regular button style, the border and background color change to demonstrate that it has the focus. In addition to initiating code execution, the Regular button style mimics a mechanical button by quickly changing background color when being clicked.

#### JSON Example:

```4d

    "myButton": {
        "type": "button",   //define the type of object
        "style":"regular",  //define the style of the button
        "defaultButton":"true"  //define button as the default choice
        "text": "OK",   //text to appear on the button
        "action": "Cancel", //action to be be performed 
        "left": 60,  //left position on the form  
        "top": 160, //top position on the form 
        "width": 100,  //width of the button
        "height": 20 //height of the button
        }
```


Only the Regular and Flat styles offer the [Default Button](properties_Appearance.md#default-button) property.


### Flat

The Flat button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/button_flat.png)

By default, the Flat style has a white background with a label in the center, rounded corners, and a minimalist appearance. The Flat button style's graphic nature is particularly useful for forms that will be printed.

#### JSON Example:

```4d

    "myButton": {
                "type": "button",   
                "style":"flat", 
                "defaultButton":"true"  
                "text": "OK",   
                "action": "Cancel", 
                "left": 60,         
                "top": 160,         
                "width": 100,   
                "height": 20    
                }
```


Only the Regular and Flat styles offer the [Default Button](properties_Appearance.md#default-button) property.

### Barra de herramientas

The Toolbar button style is primarily intended for integration in a toolbar. It includes the option to add a pop-up menu (indicated by an inverted triangle) which is generally used to display additional choices for the user to select.

By default, the Toolbar style has a transparent background with a label in the center. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

 - *Windows* - the button is highlighted when it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](assets/en/FormObjects/button_toolbar.png)

 - *macOS* - the highlight of the button never appears. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Example:

```4d
    "myButton": {
                "type": "button",   
                "style":"toolbar",  
                "text": "OK",       
                "popupPlacement":"separated"    
                "action": "Cancel",     
                "left": 60,             
                "top": 160,             
                "width": 100,           
                "height": 20        
                }
```



### Bevel

The Bevel button style combines the appearance of the [Regular](#regular) (*i.e.*, a rectangle with a descriptive label) style with the [Toolbar](#toolbar) style's pop-up menu property option.

By default, the Bevel style has a light gray background with a label in the center. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

 - *Windows* - the button is highlighted. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](assets/en/FormObjects/button_bevel.png)

 - *macOS* - the highlight of the button never appears. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Example:

```4d
    "myButton": {
                "type": "button",
                "style":"bevel",    
                "text": "OK",       
                "popupPlacement":"linked"   
                "action": "Cancel", 
                "left": 60,     
                "top": 160,     
                "width": 100,   
                "height": 20    
                }
```



### Bevel redondeado

The Rounded Bevel button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel style, the Rounded Bevel style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's pop-up menu property option.

By default, the Rounded Bevel style has a light gray background with a label in the center. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

 - *Windows* - the button is identical to the Bevel style. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

  ![](assets/en/FormObjects/button_roundedbevel.png)

 - *macOS* - the corners of the button are rounded. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Example:

```4d
    "myButton": {
                "type": "button",
                "style":"roundedBevel", 
                "text": "OK",   
                "popupPlacement":"none" /
                "action": "Cancel", 
                "left": 60,         
                "top": 160, 
                "width": 100,   
                "height": 20    
                }
```



### OS X Gradient

El estilo del botón OS X Gradient es casi idéntico al estilo [Bevel](#bevel). Al igual que el estilo Bevel, el estilo OS X Gradient combina la apariencia del estilo [Clásico](#regular) y del estilo [Barra de herramientas](#toolbar).

Por defecto, el estilo OS X Gradient tiene un fondo gris claro con una etiqueta en el centro. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

 - *Windows* - the button is identical to the Bevel style. Cuando utiliza la propiedad "Con menú emergente", aparece un triángulo a la derecha del botón.

![](assets/en/FormObjects/button_osxgradient.png)

 - *macOS* - el botón se muestra como un botón de dos tonos. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Example:

```4d
    "myButton": {
                "type": "button",   
                "style":"gradientBevel",
                "text": "OK",   
                "popupPlacement":"linked"
                "action": "Cancel",     
                "left": 60,     
                "top": 160, 
                "width": 100,   
                "height": 20    
                }
```


### OS X Texturizado

The OS X Textured button style is nearly identical to the [Bevel](#bevel) style but with a smaller size (maximum size is the size of a standard macOS system button). Al igual que el estilo Bevel, el estilo OS X Textured combina la apariencia del estilo [Clásico](#regular) y del estilo [Barra de herramientas](#toolbar).

By default, the OS X Textured style appears as:

 - *Windows* - un botón sistema estándar con un fondo gris claro con una etiqueta en el centro. Tiene la particularidad de ser transparente en Vista.

 ![](assets/en/FormObjects/button_osxtextured.png)

 - *macOS* - - un botón sistema estándar que muestra un cambio de color de gris claro a gris oscuro. Su altura está predefinida: no es posible ampliarla o reducirla.

#### JSON Example:

```4d
    "myButton": {
                "type": "button",   
                "style":"texturedBevel",    
                "text": "OK",   
                "popupPlacement":"separated"    
                "action": "Cancel", 
                "left": 60,         
                "top": 160,     
                "width": 100,   
                "height": 20    
                }
```



### Office XP

El estilo de botón Office XP combina la apariencia del estilo [Clásico](#regular) y del estilo [Barra de herramientas](#toolbar).

The colors (highlight and background) of a button with the Office XP style are based on the system colors. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

 - *Windows* - su fondo sólo aparece cuando el ratón pasa por encima.

![](assets/en/FormObjects/button_officexp.png)

 - *macOS* - su fondo se muestra siempre.

#### JSON Example:

```4d
    "myButton": {
                "type": "button",   
                "style":"office",
                "text": "OK",
                "popupPlacement":"none" 
                "action": "Cancel", 
                "left": 60,     
                "top": 160, 
                "width": 100,
                "height": 20    
                }
```



### Ayuda


El estilo del botón Ayuda puede utilizarse para mostrar un botón de ayuda estándar del sistema. Por defecto, el estilo Ayuda se muestra como un signo de interrogación dentro de un círculo.

![](assets/en/FormObjects/button_help.png)

#### JSON Example:

```4d
    "myButton": {
                "type": "button",
                "style":"help",     
                "text": "OK",   
                "dropping": "custom", 
                "left": 60, 
                "top": 160,     
                "width": 100,   
                "height": 20    
                }
```

> El estilo Ayuda no soporta las propiedades básicas [Número de estados](properties_TextAndPicture.md#number-of-states), [ruta de acceso imagen](properties_TextAndPicture.md#picture-pathname) y la [posición Título/Imagen](properties_TextAndPicture.md#title-picture-position).


### Círculo

El estilo de botón Círculo aparece como un botón sistema circular. Este estilo de botón está diseñado para macOS.

![](assets/en/FormObjects/button_circleM.png)

En Windows, es idéntico al estilo "Ninguno" (no se tiene en cuenta el círculo del fondo).


#### JSON Example:

```
    "myButton": {
                "type": "button",   
                "style":"circular", 
                "text": "OK",   
                "dropping": "custom", 
                "left": 60, 
                "top": 160,     
                "width": 100,
                "height": 20    
                }
```



### Personalizado

El estilo de botón Personalizado acepta una imagen de fondo personalizada y permite gestionar parámetros adicionales como el margen y el desplazamiento del icono.

![](assets/en/FormObjects/button_custom.png)


#### JSON Example:

```code
    "myButton": {
                "type": "button",   
                "style":"custom",   
                "text": "", 
                "customBackgroundPicture": "/RESOURCES/bkgnd.png",
                "icon": "/RESOURCES/custom.png",  
                "textPlacement": "center",
                "left": 60, 
                "top": 160,     
                "width": 100,   
                "height": 20
                }
```




## Propiedades soportadas

Todos los botones comparten el mismo conjunto de propiedades básicas:


[Negrita](properties_Text.md#bold) - [Estilo del borde](properties_BackgroundAndBorder.md#border-line-style) - [Abajo](properties_CoordinatesAndSizing.md#bottom) - [Estilo del botón](properties_TextAndPicture.md#button-style) - [Clase](properties_Object.md#css-class) - [Soltable](properties_Action.md#droppable) - [Enfocable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Alto](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Tam. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [No representado](properties_Display.md#not-rendered) - [Número de estados](properties_TextAndPicture.md#number-of-states)(1) - [Nombre de objeto](properties_Object.md#object-name) - [Ruta imagen](properties_TextAndPicture.md#picture-pathname)(1) - [Derecho](properties_CoordinatesAndSizing.md#right) - [Atajo](properties_Entry.md#shortcut) - [Acción estándar](properties_Action.md#standard-action) - [Título](properties_Object.md#title) - [Posición Imagen/Título](properties_TextAndPicture.md#title-picture-position)(1) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) No soportado por el estilo [Ayuda](#ayuda).


Additional specific properties are available, depending on the [button style](#button-styles):

- [Ruta de acceso fondo](properties_TextAndPicture.md#backgroundPathname) - [Margen horizontal](properties_TextAndPicture.md#horizontalMargin) - [Desplazamiento icono](properties_TextAndPicture.md#icon-offset) - [Margen vertical](properties_TextAndPicture.md#verticalMargin) (Personalizado)
- [Botón por defecto](properties_Appearance.md#default-button) (Plano, Clásico)
- [Con menú emergente](properties_TextAndPicture.md#with-pop-up-menu) (Barra de herramientas, Bisel, Bisel redondeado, OS X Gradient, OS X Textured, Office XP, Círculo, Personalizado)

