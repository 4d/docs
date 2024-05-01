---
id: radiobuttonOverview
title: Botón radio
---

Los botones radio son objetos que permiten al usuario seleccionar uno de un grupo de botones.

Normalmente, un botón radio muestra una pequeña diana con texto. However, radio buttons can have [various appearances](#button-styles).

![](../assets/en/FormObjects/radio1.png)

Se selecciona un botón radio:

- cuando el usuario hace clic en él
- when it has the focus and the user presses the **Space bar** key.

## Configuración de botones radio

Los botones radio se utilizan en conjuntos coordinados: sólo se puede seleccionar un botón a la vez en el conjunto. In order to operate in a coordinated manner, a set of radio buttons must share the same [Radio Group](properties_Object.md#radio-group) property.

Los botones radio se controlan con métodos. Como todos los botones, la variable asociada al botón radio se inicializa en 0 cuando se abre el formulario por primera vez. Un método asociado a un botón radio se ejecuta cuando se selecciona el botón. A continuación se muestra un ejemplo de un grupo de botones radio utilizados en una base de datos de registro de vídeos para introducir la velocidad del registro (SP, LP o EP):

![](../assets/en/FormObjects/radio2.png)

Al seleccionar un botón radio de un grupo, ese botón se pone en 1 y todos los demás del grupo en 0. Sólo se puede seleccionar un botón de radio a la vez.

> You can associate [Boolean type expressions](properties_Object.md#variable-or-expression) with radio buttons. En este caso, cuando se selecciona un botón radio de un grupo, su variable es True y las variables de los demás botones radio del grupo son False.

El valor contenido en un objeto botón radio no se guarda automáticamente (excepto si es la representación de un campo booleano); los valores de los botones radio deben almacenarse en sus variables y gestionarse con métodos.

## Estilos de botón

Radio [button styles](properties_TextAndPicture.md#button-style) control radio button's general appearance as well as its available properties. Es posible aplicar diferentes estilos predefinidos a los botones radio. Sin embargo, debe aplicarse el mismo estilo de botón a todos los botones de radio de un grupo para que funcionen como se espera.

4D ofrece botones radio en los siguientes estilos predefinidos:

### Clásico

The Regular radio button style is a standard system button (_i.e._, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_regular.png)

Además de iniciar la ejecución del código, el estilo del botón radio Clásico cambia el color de esfera cuando se pasa por encima.

### Plano

The Flat radio button style is a standard system button (_i.e._, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_flat.png)

Por defecto, el estilo Plano tiene una apariencia minimalista. El estilo gráfico del botón Flat es especialmente útil para los formularios a imprimir.

### Toolbar (Barra de herramientas)

El estilo del botón radio Barra de herramientas está pensado principalmente para su integración en una barra de herramientas.

Por defecto, el estilo Barra de herramientas tiene un fondo transparente con una etiqueta en el centro. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

- _Windows_ - the button is highlighted.

![](../assets/en/FormObjects/radio_toolbar.png)

- _macOS_ - the highlight of the button never appears.

### Bevel

The Bevel radio button style is similar to the [Toolbar](#toolbar) style's behavior, except that it has a light gray background and a gray outline. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

- _Windows_ - the button is highlighted.

![](../assets/en/FormObjects/radio_bevel.png)

- _macOS_ - the highlight of the button never appears.

### Bevel redondeado

The Rounded Bevel button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded.

- _Windows_ - the button is identical to the [Bevel](#bevel) style.

- _macOS_ - the corners of the button are rounded.
  ![](../assets/en/FormObjects/roundedBevel.png)

### OS X Gradient

The OS X Gradient button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a two-toned appearance.

- _Windows_ - the button is identical to the [Bevel](#bevel) style.

- _macOS_ - the button is displayed as a two-tone system button.

### OS X Texturizado

The OS X Textured radio button style is nearly identical to the [Toolbar](#toolbar) style except, depending on the OS, it may have a different appearance and does not display hover.

Por defecto, el estilo OS X Textured aparece como:

- _Windows_ - a toolbar-like button with a label in the center and the background is always displayed.

- _macOS_ - a standard system button displaying a color change from light to dark gray. Su altura está predefinida: no es posible ampliarla o reducirla.

![](../assets/en/FormObjects/OSXTextured.png)

### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style (standard system button) with the [Toolbar](#toolbar) style's behavior.

Los colores (resaltado y fondo) de un botón con el estilo Office XP se basan en los colores del sistema. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

- _Windows_ - its background only appears when the mouse rolls over it.

![](../assets/en/FormObjects/radio_xp.png)

- _macOS_ - its background is always displayed.

### Contraer/Desplegar

Este estilo de botón se puede utilizar para añadir un icono estándar contraer/desplegar. Estos botones se utilizan de forma nativa en las listas jerárquicas. Estos botones se utilizan de forma nativa en las listas jerárquicas.

![](../assets/en/FormObjects/checkbox_collapse.png)

:::info

The Collapse/Expand style is named "disclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

### Divulgación

El estilo de botón radio de divulgación muestra el botón radio como un botón de divulgación estándar, normalmente utilizado para mostrar/ocultar información adicional. El símbolo del botón apunta hacia abajo con el valor 0 y hacia arriba con el valor 1.

![](../assets/en/FormObjects/checkbox_disclosure.png)

:::info

The Disclosure style is named "roundedDisclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

### Personalizado

The Custom radio button style accepts a personalized background picture and allows managing additional parameters such as [icon offset](properties_TextAndPicture.md#icon-offset) and [margins](properties_TextAndPicture.md#horizontalMargin).

## Propiedades soportadas

Todos los botones radio comparten el mismo conjunto de propiedades básicas:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment)(1) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(2) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Number of States](properties_TextAndPicture.md#number-of-states)(2) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(2) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(2) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Not supported by the [Regular](#regular) and [Flat](#flat) styles.<br/>
> (2) Not supported by the [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) and [Collapse/Expand](#collapseexpand) styles.

Additional specific properties are available depending on the [button style](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin)
