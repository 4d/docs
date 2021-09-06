---
id: checkboxOverview
title: Check Box
---

Una casilla de selección es un tipo de botón utilizado para introducir o mostrar datos binarios (verdadero-falso). Basically, it is either checked or unchecked, but a [third state](#three-states-check-box) can be defined.

![](assets/en/FormObjects/checkbox.png)

Check boxes are controlled by methods or [standard actions](#using-a-standard-action). El método asociado a ella se ejecuta cuando se selecciona la casilla de selección. Como todos los botones, la variable de la casilla de selección se pone en 0 cuando se abre el formulario por primera vez.

Una casilla de selección muestra el texto junto a un pequeño cuadrado. Este texto se define en el área [Título](properties_Object.md#title) del tema "Objetos" de la Lista de propiedades. Para introducir en esta área un título en forma de referencia XLIFF (ver [Anexo B: arquitectura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).


## Utilizar casillas de selección

Una casilla de selección puede asociarse a una [variable o expresión](properties_Object.md#variable-or-expression) de tipo entero o booleano.

- **entero:** si la casilla está marcada, la variable tiene el valor 1. Cuando no se marca, tiene el valor 0. Si la casilla de selección está en tercer estado (ver más abajo), tiene el valor 2.
- **booleano:** si la casilla está marcada, la variable tiene el valor `True`. Cuando no se marca, toma el valor `False`.

Una parte o todas las casillas de selección de un formulario pueden estar marcadas o desmarcadas. Las casillas de selección múltiples permiten al usuario seleccionar varias opciones.


### Casilla de selección de tres estados

Check box objects with [Regular](checkbox_overview.md#regular) and [Flat](checkbox_overview.md#flat) [button style](properties_TextAndPicture.md#button-style) accept a third state. Este tercer estado es un estado intermedio, que generalmente se utiliza para fines de visualización. Por ejemplo, permite indicar que una propiedad está presente en una selección de objetos, pero no en cada objeto de la selección.

![](assets/en/FormObjects/checkbox_3states.png)

Para activar este tercer estado, debe seleccionar la propiedad [Tres estados](properties_Display.md#three-states).

Esta propiedad sólo está disponible para casillas de selección regulares y planas asociadas a [variables o expresiones](properties_Object.md#variable-or-expression) - las casillas de selección de expresiones booleanas no pueden utilizar la propiedad [Tres estados](properties_Display.md#three-states) (una expresión booleana no puede estar en un estado intermedio).

La variable asociada a la casilla de selección devuelve el valor 2 cuando la casilla está en el tercer estado.
> En el modo de entrada, las casillas de selección de los tres estados muestran cada estado de forma secuencial, en el siguiente orden: sin marcar / marcado / intermedio / sin marcar, etc. El estado intermedio no suele ser muy útil en el modo de entrada; en el código, basta con forzar el valor de la variable a 0 cuando toma el valor de 2 para pasar directamente del estado comprobado al estado no comprobado.


## Utilizar una acción estándar

Puede asignar una [acción estándar](properties_Action.md#standard-action) a una casilla de selección para manejar los atributos de las áreas de texto. Por ejemplo, si asigna la acción estándar `fontBold`, en ejecución la casilla de selección gestionará el atributo "negrita" del texto seleccionado en el área actual.

Sólo las acciones que pueden representar un estado verdadero/falso (acciones "marcables") son soportadas por este objeto:

| Acciones soportadas                 | Condiciones de uso (si las hay) |
| ----------------------------------- | ------------------------------- |
| avoidPageBreakInsideEnabled         | 4D Write Pro areas only         |
| fontItalic                          |                                 |
| fontBold                            |                                 |
| fontLinethrough                     |                                 |
| fontSubscript                       | 4D Write Pro areas only         |
| fontSuperscript                     | 4D Write Pro areas only         |
| fontUnderline                       |                                 |
| font/showDialog                     | Mac only                        |
| htmlWYSIWIGEnabled                  | 4D Write Pro areas only         |
| section/differentFirstPage          | 4D Write Pro areas only         |
| section/differentLeftRightPages     | 4D Write Pro areas only         |
| spell/autoCorrectionEnabled         |                                 |
| spell/autoDashSubstitutionsEnabled  | Mac only                        |
| spell/autoLanguageEnabled           | Mac only                        |
| spell/autoQuoteSubstitutionsEnabled | Mac only                        |
| spell/autoSubstitutionsEnabled      |                                 |
| spell/enabled                       |                                 |
| spell/grammarEnabled                | Mac only                        |
| spell/showDialog                    | Mac only                        |
| spell/visibleSubstitutions          |                                 |
| visibleBackground                   | 4D Write Pro areas only         |
| visibleFooters                      | 4D Write Pro areas only         |
| visibleHeaders                      | 4D Write Pro areas only         |
| visibleHiddenChars                  | 4D Write Pro areas only         |
| visibleHorizontalRuler              | 4D Write Pro areas only         |
| visiblePageFrames                   | 4D Write Pro areas only         |
| visibleReferences                   |                                 |
| widowAndOrphanControlEnabled        | 4D Write Pro areas only         |

For detailed information on these actions, please refer to the [Standard actions](properties_Action.md#standard-action) section.

## Estilos de botones casillas de selección

Check boxes use [button styles](properties_TextAndPicture.md#button-style) to control a check box's general appearance as well as its available properties. It is possible to apply different predefined styles to check boxes. Se puede obtener un gran número de variaciones combinando estas propiedades/comportamientos.

Con la excepción de las [propiedades-disponibles](#supported-properties), muchos objetos casilla de selección son *estructuralmente* idénticos. La diferencia está en el tratamiento de sus variables asociadas.

4D ofrece casillas de selección en los siguientes estilos de botón predefinidos:

### Clásico

El estilo Clásico de botón casilla de selección corresponde a un sistema de casilla de selección estándar (*es decir, *, un rectángulo con un título descriptivo):

![](assets/en/FormObjects/checkbox_regular.png)

#### Ejemplo JSON:

```
    "myCheckBox": {
        "type": "checkbox", 
        "style":"regular",
        "text": "Cancel",   
        "action": "Cancel",     
        "left": 60,         
        "top": 160,     
        "width": 100,           
        "height": 20        
        "dataSourceTypeHint":"boolean"
        }
```



### Plano

El estilo plano del botón casilla de selección tiene una apariencia minimalista. La naturaleza gráfica del estilo Flat es especialmente útil para los formularios que se van a imprimir.

![](assets/en/FormObjects/checkbox_flat.png)

#### Ejemplo JSON:

```
    "myCheckBox": {
            "type": "checkbox", 
            "style":"flat",
            "text": "Cancel",   
            "action": "cancel", 
            "left": 60,     
            "top": 160, 
            "width": 100,           
            "height": 20            
            }
```



### Botón barra de herramientas

El estilo del botón barra de herramientas está destinado principalmente a la integración en una barra de herramientas.

El estilo del botón Barra de herramientas tiene un fondo transparente con un título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Ejemplo con estados seleccionado / no seleccionado / subrayado:

![](assets/en/FormObjects/checkbox_toolbar.png)


#### Ejemplo JSON:

```
    "myCheckBox": {
                "type": "checkbox",
                "style":"toolbar",  
                "text": "Checkbox",
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4 
                "left": 60, 
                "top": 160, 
                "width": 100,                   
                "height": 20                    
                }
```



### Bevel

El estilo del botón casilla de selección Bevel combina la apariencia del estilo de botón [Clásico ](#regular) (*es decir*, un rectángulo con un título descriptivo) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

El botón Bevel tiene un fondo gris claro con un título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Ejemplo con estados seleccionado / no seleccionado / subrayado:

![](assets/en/FormObjects/checkbox_bevel.png)


#### Ejemplo JSON:

```
    "myCheckBox": {
                "type": "checkbox", 
                "style":"bevel",
                "text": "Checkbox",  
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4 
                "left": 60, 
                "top": 160, 
                "width": 100,               
                "height": 20                
                }
```



### Bevel redondeado

El estilo del botón de la casilla de selección Bevel redondeado es casi idéntico al estilo del botón [Bevel](#bevel), excepto que, dependiendo del sistema operativo, las esquinas del botón pueden ser redondeadas. Al igual que el estilo de botón Bevel, el estilo del botón Bevel redondeado combina la apariencia del estilo del botón [Clásico](#regular) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

El estilo de botón Bevel redondeado tiene un fondo gris claro con un título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Ejemplo en macOS:

  ![](assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> En Windows, el estilo de botón Bevel redondeado es idéntico al estilo de botón [Bevel](#bevel).


#### Ejemplo JSON:

```4d
    "myCheckBox": {
                "type": "checkbox", 
                "style":"roundedBevel",  
                "text": "Checkbox", 
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4 
                "left": 60, 
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
```



### OS X Gradient

El estilo del botón casilla de selección OS X Gradient es casi idéntico al estilo del botón [Bevel](#bevel). Al igual que el estilo de botón Bevel, el estilo del botón OS X Gradient combina la apariencia del estilo del botón [Clásico](#regular) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

El estilo del botón Gradient OS X tiene un fondo gris claro con un título y se puede mostrar como un botón de sistema de dos tonos en macOS. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

  ![](assets/en/FormObjects/checkbox_osxgradient_mac.png)

> En Windows, este estilo de botón casilla de selección es idéntico al estilo de botón [Bevel](#bevel).


#### Ejemplo JSON:

```
    "myCheckBox": {
            "type": "checkbox", 
            "style":"gradientBevel", 
            "text": "Checkbox", 
            "icon": "/RESOURCES/File.png",
            "iconFrames": 4
            "left": 60,     
            "top": 160,     
            "width": 100,               
            "height": 20                
           }
```




### OS X Texturizado

The OS X Textured button style is similar to the [Bevel](#bevel) button style but with a smaller size (maximum size is the size of a standard macOS system button). As with the Bevel button style, the OS X Textured button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

By default, the OS X Textured button style appears as:

 - *Windows* - a standard system button with a light blue background with a title in the center.

  ![](assets/en/FormObjects/checkbox_osxtextured.png)

 - *macOS* - a standard system button. Su altura está predefinida: no es posible ampliarla o reducirla.

  ![](assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### Ejemplo JSON:

```
    "myCheckBox": {
            "type": "checkbox", 
            "style":"texturedBevel", 
            "text": "Checkbox", 
            "left": 60, 
            "top": 160, 
            "width": 100,                   
            "height": 20                    
            }
```




### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

The colors (highlight and background) of a check box with the Office XP button style are based on the system colors. The appearance of the check box can be different when the cursor hovers over it, depending on the OS:

 - *Windows* - su fondo sólo aparece cuando el ratón pasa por encima. Ejemplo con estados seleccionado / no seleccionado / subrayado:

  ![](assets/en/FormObjects/checkbox_officexp.png)

 - *macOS* - su fondo se muestra siempre. Example with states unchecked / checked:

  ![](assets/en/FormObjects/checkbox_officexp_mac.png)

#### Ejemplo JSON:

```
    "myCheckBox": {
                "type": "checkbox", 
                "style":"office",
                "text": "Checkbox",  
                "action": "fontBold",
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4     
               "left": 60,  
                "top": 160,     
                "width": 100,           
                "height": 20            
                }
```



### Collapse / Expand

This check box button style can be used to add a standard collapse/expand icon. These icons are used natively in hierarchical lists.

 - *Windows* - the icon looks like a [+] or a [-]

  ![](assets/en/FormObjects/checkbox_collapse.png)

 - *macOS* - it looks like a triangle pointing right or down.

  ![](assets/en/FormObjects/checkbox_collapse_mac.png)


#### Ejemplo JSON:

```
    "myCheckBox": {
                "type": "checkbox", 
                "style":"disclosure",
                "method": "m_collapse",
                "left": 60, 
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
```



### Disclosure Button

In macOS and Windows, a check box with the "Disclosure" button style appears as a standard disclosure button, usually used to show/hide additional information. When used as a radio button, the button symbol points downwards with value 0 and upwards with value 1.

 - *Windows*

    ![](assets/en/FormObjects/checkbox_disclosure.png)

 - *macOS*

    ![](assets/en/FormObjects/checkbox_disclosure_mac.png)


#### Ejemplo JSON:

```
    "myCheckBox": {
                "type": "checkbox",     
                "style":"roundedDisclosure",    
                "method": "m_disclose",
                "left": 60,     
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
```


### Personalizado

The Custom button style accepts a personalized background picture and allows managing specific properties:

- [Background pathname](properties_TextAndPicture.md#backgroundPathname)
- [Icon Offset](properties_TextAndPicture.md#icon-offset)
- [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) and [Vertical Margin](properties_TextAndPicture.md#verticalMargin)

It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states), that can be used in conjunction with a [4-state](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#backgroundPathname).

#### Ejemplo JSON:

```
    "myCheckbox": {
        "type": "checkbox",
        "style":"custom",
        "text": "OK", 
        "icon": "/RESOURCES/smiley.jpg", 
        "iconFrame": 4, 
        "customBackgroundPicture": "/RESOURCES/paper.jpg", 
        "iconOffset": 5, //custom icon offset when clicked
        "left": 60, 
        "top": 160, 
        "width": 100,       
        "height": 20,
        "customBorderX": 20,
        "customBorderY": 5
        }
```




## Propiedades soportadas

All check boxes share the same set of basic properties:


[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)


Additional specific properties are available, depending on the [button style](#button-styles):

- [Ruta de acceso fondo](properties_TextAndPicture.md#backgroundPathname) - [Margen horizontal](properties_TextAndPicture.md#horizontalMargin) - [Desplazamiento icono](properties_TextAndPicture.md#icon-offset) - [Margen vertical](properties_TextAndPicture.md#verticalMargin) (Personalizado)
- [Three-States](properties_Display.md#three-states) (Flat, Regular)
- [Number of States](properties_TextAndPicture.md#number-of-states) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) (Toolbar button, Bevel, Rounded Bevel, OS X Gradient, OS X Textured, Office XP, Custom)
