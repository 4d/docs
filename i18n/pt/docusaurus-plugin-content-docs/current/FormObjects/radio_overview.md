---
id: radiobuttonOverview
title: Botão rádio
---

Radio buttons are objects that allow the user to select one of a group of buttons.

Um botão radio aparece na forma de um texto seguido de um círculo. Sin embargo, los botones radio pueden tener [diferentes apariencias](#button-styles).

![](../assets/en/FormObjects/radio1.png)

É selecionado um botão rádio:

- quando o usuário clica nele
- cuando tiene el foco y el usuario presiona la tecla **Barra espaciadora**.

## Configuração de botões radio

Radio buttons are used in coordinated sets: only one button at a time can be selected in the set. Para funcionar de forma coordinada, un conjunto de botones radio debe compartir la misma propiedad [Grupo radio](properties_Object.md#radio-group).

Os botões rádio são controlados com métodos. Como todos os botões, um botão de rádio é definido como 0 quando o formulário é aberto pela primeira vez. Um método associado a um botão de rádio é executado quando o botão é selecionado. The following is an example of a group of radio buttons used in a video collection database to enter the speed of the recording (SP, LP, or EP):

![](../assets/en/FormObjects/radio2.png)

Selecting one radio button in a group sets that button to 1 and all of the others in the group to 0. Só pode ser selecionado um botão rádio de cada vez.

> Puede asociar [expresiones de tipo booleano](properties_Object.md#variable-or-expression) a botones radio. In this case, when a radio button in a group is selected, its variable is True and the variables for the group's other radio buttons are False.

The value contained in a radio button object is not saved automatically (except if it is the representation of a Boolean field); radio button values must be stored in their variables and managed with methods.

## Estilos de botões

[Los estilos de botón](properties_TextAndPicture.md#button-style) controlan la apariencia general del botón de radio y sus propiedades disponibles. É possível aplicar diferentes estilos predefinidos aos botões rádio. However, the same button style must be applied to all radio buttons in a group so that they work as expected.

4D fornece botões rádio nos seguintes estilos predefinidos:

### Clássico

El estilo de botón radio Clásico es un botón sistema estándar (\*es decir, \*, una pequeña diana con texto) que ejecuta código cuando el usuario hace clic en él.

![](../assets/en/FormObjects/radio_regular.png)

In addition to initiating code execution, the Regular radio button style changes bullsey color when being hovered.

### Plano

El estilo de botón radio Plano es un botón sistema estándar (\*es decir, \*, una pequeña diana con texto) que ejecuta código cuando el usuario hace clic en él.

![](../assets/en/FormObjects/radio_flat.png)

Por padrão, o estilo Plano tem um aspeto minimalista. The Flat button style's graphic nature is particularly useful for forms that will be printed.

### Barra de ferramentas

O estilo de botão rádio está pensado principalmente para sua integração em uma barra de ferramentas.

By default, the Toolbar style has a transparent background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - o botão é destacado.

![](../assets/en/FormObjects/radio_toolbar.png)

- _macOS_ - o destaque do botão nunca aparece.

### Bevel

El estilo de botón radio Bevel es similar al comportamiento del estilo [Barra de herramientas](#toolbar), excepto que tiene un fondo gris claro y un contorno gris. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - o botão é destacado.

![](../assets/en/FormObjects/radio_bevel.png)

- _macOS_ - o destaque do botão nunca aparece.

### Bevel arredondado

O estilo de botão Bevel arredondado é quase idêntico ao estilo [Bevel](#bevel), exceto que dependendo do sistema operacional, as esquinas do botão podem ser arredondadas.

- _Windows_ - el botón es idéntico al estilo [Bevel](#bevel).

- _macOS_ - las esquinas del botón están redondeadas.
  ![](../assets/en/FormObjects/roundedBevel.png)

### OS X Gradient

El estilol botón OS X Gradient es casi idéntico al estilo [Bevel](#bevel), excepto que, dependiendo del sistema operativo, puede tener una apariencia de dos tonos.

- _Windows_ - el botón es idéntico al estilo [Bevel](#bevel).

- _macOS_ - el botón se muestra como un botón de dos tonos.

### OS X Texturizado

El estilo del botón radio OS X Textured es casi idéntico al estilo [Barra de herramientas](#toolbar) excepto que, dependiendo del sistema operativo, puede tener una apariencia diferente y no mostrar cuando el cursor pasa por encima.

Como padrão, o estilo OS X Textured aparece como:

- _Windows_ -un botón en forma de barra de herramientas con una etiqueta en el centro y el fondo se muestra siempre.

- _macOS_ - um botão sistema padrão que mostra uma mudança de cor cinza-claro a cinza-escuro. Sua altura está predefinida: não é possível ampliar ou reduzir.

![](../assets/en/FormObjects/OSXTextured.png)

### Office XP

El estilo de botón Office XP combina la apariencia del estilo [Clásico](#regular) (botón sistema estándar) con el comportamiento del estilo [Barra de herramientas](#toolbar).

As cores (ressaltado e fundo) de um botão com o estilo Office XP são baseadas nos sistemas de cores. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - seu fundo só aparece quando o mouse passa por cima.

![](../assets/en/FormObjects/radio_xp.png)

- _macOS_ - its background is always displayed.

### Contrair/expandir

Este estilo de botão pode ser utilizado para adicionar um ícone padrão contracter/déployer. Esses botões são usados nativamente em listas hierárquicas. Esses botões são usados nativamente em listas hierárquicas.

![](../assets/en/FormObjects/checkbox_collapse.png)

:::info

O estilo Recolher/Expandir é denominado "disclosure" na [gramática JSON de estilo de botão](properties_TextAndPicture.md#button-style).

:::

### Botão disclosure

The disclosure radio button style displays the radio button as a standard disclosure button, usually used to show/hide additional information. O símbolo do botão aponta para baixo com o valor 0 e para cima com o valor 1.

![](../assets/en/FormObjects/checkbox_disclosure.png)

:::info

O estilo Disclosure é denominado "roundedDisclosure" na [gramática JSON do estilo de botão](properties_TextAndPicture.md#button-style).

:::

### Personalizado

The Custom radio button style accepts a personalized background picture and allows managing additional parameters such as [icon offset](properties_TextAndPicture.md#icon-offset) and [margins](properties_TextAndPicture.md#horizontal-margin).

## Propriedades compatíveis

Todos os botões rádio partilham o mesmo conjunto de propriedades básicas:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment)(1) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(2) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Number of States](properties_TextAndPicture.md#number-of-states)(2) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(2) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#titlepicture-position)(2) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Não compatível com os estilos [Regular](#regular) e [Flat](#flat).<br/>
> (2) Não é compatível com os estilos [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) e [Collapse/Expand](#collapseexpand).

Propiedades específicas adicionales están disponibles en función del [estilo de botón](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#background-pathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontal-margin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#vertical-margin)
