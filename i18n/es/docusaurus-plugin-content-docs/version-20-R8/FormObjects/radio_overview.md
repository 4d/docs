---
id: radiobuttonOverview
title: Botón radio
---

Los botones radio son objetos que permiten al usuario seleccionar uno de un grupo de botones.

Normalmente, un botón radio muestra una pequeña diana con texto. Sin embargo, los botones radio pueden tener [diferentes apariencias](#estilos-de-botón).

![](../assets/en/FormObjects/radio1.png)

Se selecciona un botón radio:

- cuando el usuario hace clic en él
- cuando tiene el foco y el usuario presiona la tecla **Barra espaciadora**.

## Configuración de botones radio

Los botones radio se utilizan en conjuntos coordinados: sólo se puede seleccionar un botón a la vez en el conjunto. Para funcionar de forma coordinada, un conjunto de botones radio debe compartir la misma propiedad [Grupo radio](properties_Object.md#radio-group).

Los botones radio se controlan con métodos. Como todos los botones, la variable asociada al botón radio se inicializa en 0 cuando se abre el formulario por primera vez. Un método asociado a un botón radio se ejecuta cuando se selecciona el botón. A continuación se muestra un ejemplo de un grupo de botones radio utilizados en una base de datos de registro de vídeos para introducir la velocidad del registro (SP, LP o EP):

![](../assets/en/FormObjects/radio2.png)

Al seleccionar un botón radio de un grupo, ese botón se pone en 1 y todos los demás del grupo en 0. Sólo se puede seleccionar un botón de radio a la vez.

> Puede asociar [expresiones de tipo booleano](properties_Object.md#variable-or-expression) a botones radio. En este caso, cuando se selecciona un botón radio de un grupo, su variable es True y las variables de los demás botones radio del grupo son False.

El valor contenido en un objeto botón radio no se guarda automáticamente (excepto si es la representación de un campo booleano); los valores de los botones radio deben almacenarse en sus variables y gestionarse con métodos.

## Estilos de botón

[Los estilos de botón](properties_TextAndPicture.md#button-style) controlan la apariencia general del botón de radio y sus propiedades disponibles. Es posible aplicar diferentes estilos predefinidos a los botones radio. Sin embargo, debe aplicarse el mismo estilo de botón a todos los botones de radio de un grupo para que funcionen como se espera.

4D ofrece botones radio en los siguientes estilos predefinidos:

### Clásico

El estilo de botón radio Clásico es un botón sistema estándar (\*es decir, \*, una pequeña diana con texto) que ejecuta código cuando el usuario hace clic en él.

![](../assets/en/FormObjects/radio_regular.png)

Además de iniciar la ejecución del código, el estilo del botón radio Clásico cambia el color de esfera cuando se pasa por encima.

### Plano

El estilo de botón radio Plano es un botón sistema estándar (\*es decir, \*, una pequeña diana con texto) que ejecuta código cuando el usuario hace clic en él.

![](../assets/en/FormObjects/radio_flat.png)

Por defecto, el estilo Plano tiene una apariencia minimalista. El estilo gráfico del botón Flat es especialmente útil para los formularios a imprimir.

### Toolbar (Barra de herramientas)

El estilo del botón radio Barra de herramientas está pensado principalmente para su integración en una barra de herramientas.

Por defecto, el estilo Barra de herramientas tiene un fondo transparente con una etiqueta en el centro. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

- _Windows_ - el botón está resaltado.

![](../assets/en/FormObjects/radio_toolbar.png)

- _macOS_ - el resalte del botón nunca aparece.

### Bevel

El estilo de botón radio Bevel es similar al comportamiento del estilo [Barra de herramientas](#toolbar), excepto que tiene un fondo gris claro y un contorno gris. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

- _Windows_ - el botón está resaltado.

![](../assets/en/FormObjects/radio_bevel.png)

- _macOS_ - el resalte del botón nunca aparece.

### Bevel redondeado

El estilo de botón Bevel redondeado es casi idéntico al estilo [Bevel](#bevel), excepto que, dependiendo del sistema operativo, las esquinas del botón pueden ser redondeadas.

- _Windows_ - el botón es idéntico al estilo [Bevel](#bevel).

- _macOS_ - las esquinas del botón están redondeadas.
  ![](../assets/en/FormObjects/roundedBevel.png)

### OS X Gradient

El estilol botón OS X Gradient es casi idéntico al estilo [Bevel](#bevel), excepto que, dependiendo del sistema operativo, puede tener una apariencia de dos tonos.

- _Windows_ - el botón es idéntico al estilo [Bevel](#bevel).

- _macOS_ - el botón se muestra como un botón de dos tonos.

### OS X Texturizado

El estilo del botón radio OS X Textured es casi idéntico al estilo [Barra de herramientas](#toolbar) excepto que, dependiendo del sistema operativo, puede tener una apariencia diferente y no mostrar cuando el cursor pasa por encima.

Por defecto, el estilo OS X Textured aparece como:

- _Windows_ -un botón en forma de barra de herramientas con una etiqueta en el centro y el fondo se muestra siempre.

- _macOS_ - - un botón sistema estándar que muestra un cambio de color de gris claro a gris oscuro. Su altura está predefinida: no es posible ampliarla o reducirla.

![](../assets/en/FormObjects/OSXTextured.png)

### Office XP

El estilo de botón Office XP combina la apariencia del estilo [Clásico](#regular) (botón sistema estándar) con el comportamiento del estilo [Barra de herramientas](#toolbar).

Los colores (resaltado y fondo) de un botón con el estilo Office XP se basan en los colores del sistema. La apariencia del botón puede ser diferente cuando el cursor pasa por encima de él dependiendo del sistema operativo:

- _Windows_ - su fondo sólo aparece cuando el ratón pasa por encima.

![](../assets/en/FormObjects/radio_xp.png)

- _macOS_ - su fondo se muestra siempre.

### Contraer/Desplegar

Este estilo de botón se puede utilizar para añadir un icono estándar contraer/desplegar. Estos botones se utilizan de forma nativa en las listas jerárquicas. Estos botones se utilizan de forma nativa en las listas jerárquicas.

![](../assets/en/FormObjects/checkbox_collapse.png)

:::info

El estilo Contraer/Desplegar se denomina "disclosure" en la [gramática JSON del estilo de botón](properties_TextAndPicture.md#button-style).

:::

### Divulgación

El estilo de botón radio de divulgación muestra el botón radio como un botón de divulgación estándar, normalmente utilizado para mostrar/ocultar información adicional. El símbolo del botón apunta hacia abajo con el valor 0 y hacia arriba con el valor 1.

![](../assets/en/FormObjects/checkbox_disclosure.png)

:::info

El estilo Disclosure se denomina "roundedDisclosure" en la [gramática JSON del estilo de botón](properties_TextAndPicture.md#button-style).

:::

### Personalizado

El estilo de botón radio Personalizado acepta una imagen de fondo personalizada y permite gestionar parámetros adicionales como [desplazamiento del icono](properties_TextAndPicture.md#icon-offset) y las [márgenes](properties_TextAndPicture.md#horizontal-margin).

## Propiedades soportadas

Todos los botones radio comparten el mismo conjunto de propiedades básicas:

[Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botón](properties_TextAndPicture.md#button-style) - [Clase](properties_Object.md#css-class) - [Tipo de expresión](properties_Object.md#expression-type) - [Enfocable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Alto](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Alineación horizontal](properties_Text.md#horizontal-alignment)(1) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Título de la imagen](properties_TextAndPicture.md#image-hugs-title)(2) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Número de estados](properties_TextAndPicture.md#number-of-states)(2) - [Método](properties_Action.md#method) - [Nombre del objeto](properties_Object.md#object-name) - [Grupo radio](properties_Object.md#radio-group) - [Ruta de la imagen](properties_TextAndPicture.md#picture-pathname)(2) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Guardar valor](properties_Object.md#save-value) - [Acceso directo](properties_Entry.md#shortcut) - [Título](properties_Object.md#title) - [Posición del título/imagen](properties_TextAndPicture.md#titlepicture-position)(2) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o expresión](properties_Object.md#variable-o-expresión) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibilidad) - [Ancho](properties_CoordinatesAndSizing.md#ancho)

> (1) No soportado por los estilos [Regular](#regular) y [Flat](#flat).<br/>
> (2) No soportado por los estilos [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) y [Collapse/Expand](#collapseexpanded).

Propiedades específicas adicionales están disponibles en función del [estilo de botón](#button-styles):

- Personalizado: [Ruta de fondo](properties_TextAndPicture.md#background-pathname) - [Margen horizontal](properties_TextAndPicture.md#horizontalmargin) - [Desplazamiento del ícono](properties_TextAndPicture.md#icon-offset) - [Margen vertical](properties_TextAndPicture.md#verticalmargin)
