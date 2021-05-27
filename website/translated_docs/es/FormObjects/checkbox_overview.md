---
id: checkboxOverview
title: Check Box
---

## Generalidades

A check box is a type of button used to enter or display binary (true-false) data. Basically, it is either checked or unchecked, but a third state can be defined (see below).

![](assets/en/FormObjects/checkbox.png)

Check boxes are controlled by methods. Like all buttons, a check box variable is set to 0 when the form is first opened. The method associated with it executes when the check box is selected.

A check box displays text next to a small square. This text is set in the [Title](properties_Object.md#title) property of the check box. You can enter a title in the form of an XLIFF reference in this area (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).


## Utilizar casillas de selección

A check box can be associated to a [variable or expression](properties_Object.md#variable-or-expression) of type integer or boolean.

- **integer:** if the box is checked, the variable has the value 1. When not checked, it has the value 0. If check box is in third state (see below), it has the value 2.
- **boolean:** if the box is checked, the variable has the value `True`. When not checked, it has the value `False`.

Any or all check boxes in a form can be checked or unchecked. Multiple check boxes allow the user to select multiple options.


### Three-States check box

Los objetos casilla de selección de estilo [Clásico](checkbox_overview.md#regular) y [Plano](checkbox_overview.md#flat) aceptan un tercer estado. This third state is an intermediate status, which is generally used for display purposes. For example, it allows indicating that a property is present in a selection of objects, but not in each object of the selection.

![](assets/en/FormObjects/checkbox_3states.png)

To enable this third state, you must select the [Three-States](properties_Display.md#three-states) property.

This property is only available for regular and flat check boxes associated with numeric [variables or expressions](properties_Object.md#variable-or-expression) — check boxes for Boolean expressions cannot use the [Three-States](properties_Display.md#three-states) property (a Boolean expression cannot be in an intermediary state).

The variable associated with the check box returns the value 2 when the check box is in the third state.
> In entry mode, the Three-States check boxes display each state sequentially, in the following order: unchecked / checked / intermediary / unchecked, etc. The intermediary state is generally not very useful in entry mode; in the code, simply force the value of the variable to 0 when it takes the value of 2 in order to pass directly from the checked state to the unchecked state.


## Utilizar una acción estándar

You can assign a [standard action](properties_Action.md#standard-action) to a check box to handle attributes of text areas. For example, if you assign the `fontBold` standard action, at runtime the check box will manage the "bold" attribute of the selected text in the current area.

Only actions that can represent a true/false status ("checkable" actions) are supported by this object:

| Supported actions                   | Usage condition (if any) |
| ----------------------------------- | ------------------------ |
| avoidPageBreakInsideEnabled         | 4D Write Pro areas only  |
| fontItalic                          |                          |
| fontBold                            |                          |
| fontLinethrough                     |                          |
| fontSubscript                       | 4D Write Pro areas only  |
| fontSuperscript                     | 4D Write Pro areas only  |
| fontUnderline                       |                          |
| font/showDialog                     | Mac only                 |
| htmlWYSIWIGEnabled                  | 4D Write Pro areas only  |
| section/differentFirstPage          | 4D Write Pro areas only  |
| section/differentLeftRightPages     | 4D Write Pro areas only  |
| spell/autoCorrectionEnabled         |                          |
| spell/autoDashSubstitutionsEnabled  | Mac only                 |
| spell/autoLanguageEnabled           | Mac only                 |
| spell/autoQuoteSubstitutionsEnabled | Mac only                 |
| spell/autoSubstitutionsEnabled      |                          |
| spell/enabled                       |                          |
| spell/grammarEnabled                | Mac only                 |
| spell/showDialog                    | Mac only                 |
| spell/visibleSubstitutions          |                          |
| visibleBackground                   | 4D Write Pro areas only  |
| visibleFooters                      | 4D Write Pro areas only  |
| visibleHeaders                      | 4D Write Pro areas only  |
| visibleHiddenChars                  | 4D Write Pro areas only  |
| visibleHorizontalRuler              | 4D Write Pro areas only  |
| visiblePageFrames                   | 4D Write Pro areas only  |
| visibleReferences                   |                          |
| widowAndOrphanControlEnabled        | 4D Write Pro areas only  |

For detailed information on these actions, please refer to the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section.

## Estilos de botones casillas de selección

Los estilos de casillas de selección controlan la apariencia general de una casilla de selección, así como sus propiedades disponibles. It is possible to apply different predefined styles to check boxes. A great number of variations can be obtained by combining these properties / behaviors.

With the exception of the [available properties](#supported-properties), many check box objects are *structurally* identical. The difference is in the processing of their associated variables.

4D ofrece casillas de selección en los siguientes estilos predefinidos:

### Regular

El estilo Clásico de casilla de selección corresponde a un sistema de casilla de selección estándar (*es decir, *, un rectángulo con un título descriptivo):

![](assets/en/FormObjects/checkbox_regular.png)

#### JSON Example:

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



### Flat

El estilo de casilla de selección Plano tiene una apariencia minimalista. The Flat style's graphic nature is particularly useful for forms that will be printed.

![](assets/en/FormObjects/checkbox_flat.png)

#### JSON Example:

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

El estilo del botón barra de herramientas está pensado principalmente para su integración en una barra de herramientas.

El estilo Barra de herramientas tiene un fondo transparente con un título. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example with states unchecked / checked / highlighted:

![](assets/en/FormObjects/checkbox_toolbar.png)


#### JSON Example:

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

El estilo de casilla de selección Bevel combina la apariencia del estilo [Clásico ](#regular) (*es decir*, un rectángulo con un título descriptivo) con el comportamiento del estilo [Barra de herramientas](#toolbar).

El estilo Bevel tiene un fondo gris claro con un título. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example with states unchecked / checked / highlighted:

![](assets/en/FormObjects/checkbox_bevel.png)


#### JSON Example:

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



### Rounded Bevel

El estilo de casilla de selección Bevel redondeado es casi idéntico al estilo [Bevel](#bevel), excepto que, dependiendo del sistema operativo, las esquinas del botón pueden ser redondeadas. Al igual que el estilo Bevel, el estilo Bevel redondeado combina la apariencia del estilo [Clásico](#regular) con el comportamiento del estilo [Barra de herramientas](#toolbar).

El estilo Bevel redondeado tiene un fondo gris claro con un título. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example on macOS:

  ![](assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> en Windows, el estilo Bevel redondeado es idéntico al estilo [Bevel](#bevel).


#### JSON Example:

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

El estilo de casilla de selección OS X Gradient es casi idéntico al estilo [Bevel](#bevel), excepto que, dependiendo del sistema operativo, puede tener una apariencia de dos tonos. Al igual que el estilo Bevel, el estilo OS X Gradient combina la apariencia del estilo [Clásico](#regular) con el comportamiento del estilo [Barra de herramientas](#toolbar).

El estilo Gradient OS X tiene un fondo gris claro con un título y se muestra como un botón de sistema de dos tonos en macOS. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

  ![](assets/en/FormObjects/checkbox_osxgradient_mac.png)

> En Windows, este estilo es idéntico al estilo [Bevel](#bevel).


#### JSON Example:

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




### OS X Textured

El estilo de casilla de selección OS X Textured es similar al estilo [Bevel](#bevel), excepto que, dependiendo del sistema operativo, puede tener una apariencia diferente. Al igual que el estilo Bevel, el estilo OS X Textured combina la apariencia del estilo [Clásico](#regular) con el comportamiento del estilo [Barra de herramientas](#toolbar).

By default, the OS X Textured style appears as:

 - *Windows* - a standard system button with a light blue background with a title in the center.

  ![](assets/en/FormObjects/checkbox_osxtextured.png)

 - *macOS* - a standard system button displaying a color change from light to dark gray. Its height is predefined: it is not possible to enlarge or reduce it.

  ![](assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### JSON Example:

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

El estilo de casilla de selección Office XP combina la apariencia del estilo [Clásico](#regular) con el comportamiento del estilo [Barra de herramientas](#toolbar).

The colors (highlight and background) of a button with the Office XP style are based on the system colors. The appearance of the button can be different when the cursor hovers over it depending on the OS:

 - *Windows* - its background only appears when the mouse rolls over it. Example with states unchecked / checked / highlighted:

  ![](assets/en/FormObjects/checkbox_officexp.png)

 - *macOS* - its background is always displayed. Example with states unchecked / checked:

  ![](assets/en/FormObjects/checkbox_officexp_mac.png)

#### JSON Example:

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

Este estilo de casilla de selección se puede utilizar para añadir un icono estándar de contraer/expandir. These buttons are used natively in hierarchical lists.

 - *Windows* - el botón parece un [+] o un [-]

  ![](assets/en/FormObjects/checkbox_collapse.png)

 - *macOS* - it looks like a triangle pointing right or down.

  ![](assets/en/FormObjects/checkbox_collapse_mac.png)


#### JSON Example:

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

En macOS y Windows, una casilla de selección con el estilo "Disclosure" aparece como un botón de información estándar, normalmente utilizado para mostrar/ocultar información adicional. When used as a radio button, the button symbol points downwards with value 0 and upwards with value 1.

 - *Windows*

    ![](assets/en/FormObjects/checkbox_disclosure.png)

 - *macOS*

    ![](assets/en/FormObjects/checkbox_disclosure_mac.png)


#### JSON Example:

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


### Custom

El estilo de casilla de selección personalizado acepta una imagen de fondo personalizada y permite gestionar propiedades específicas:

-  [Background pathname](properties_TextAndPicture.md#backgroundPathname)
- [Icon Offset](properties_TextAndPicture.md#icon-offset)
- [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) and [Vertical Margin](properties_TextAndPicture.md#verticalMargin)

It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states), that can be used in conjunction with a [4-state](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#backgroundPathname).

#### JSON Example:

```
    "myCheckbox": {
        "type": "checkbox",
        "style":"custom",
        "text": "OK",
        "icon": "/RESOURCES/smiley.jpg",
        "iconFrame": 4,
        "customBackgroundPicture": "/RESOURCES/paper.jpg",
        "iconOffset": 5, //desplazamiento del icono personalizado al hacer clic
        "left": 60,
        "top": 160,
        "width": 100,       
        "height": 20,
        "customBorderX": 20,
        "customBorderY": 5
        }
```




## Supported Properties

All check boxes share the same set of basic properties:


[Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo del botón](properties_TextAndPicture.md#button-style) - [Clase](properties_Object. md#css-class) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Color de la fuente](properties_Text. md#font-color) - [Tamaño de la fuente](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Consejo de ayuda](properties_Help. md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing. md#left) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Corte](properties_Entry. md#shortcut) - [Acción estándar](properties_Action.md#standard-action) - [Título](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions. md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)


Additional specific properties are available, depending on the [button style](#button-styles):

- [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin) (Custom)
- [Three-States](properties_Display.md#three-states) (Flat, Regular)
- [Number of States](properties_TextAndPicture.md#number-of-states) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) (Toolbar button, Bevel, Rounded Bevel, OS X Gradient, OS X Textured, Office XP, Custom)
