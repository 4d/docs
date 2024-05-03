---
id: radiobuttonOverview
title: Botão rádio
---

Radio buttons are objects that allow the user to select one of a group of buttons.

Um botão radio aparece na forma de um texto seguido de um círculo. However, radio buttons can have [various appearances](#button-styles).

![](../assets/en/FormObjects/radio1.png)

É selecionado um botão rádio:

- quando o usuário clica nele
- when it has the focus and the user presses the **Space bar** key.

## Configuração de botões radio

Radio buttons are used in coordinated sets: only one button at a time can be selected in the set. In order to operate in a coordinated manner, a set of radio buttons must share the same [Radio Group](properties_Object.md#radio-group) property.

Os botões rádio são controlados com métodos. Como todos os botões, um botão de rádio é definido como 0 quando o formulário é aberto pela primeira vez. Um método associado a um botão de rádio é executado quando o botão é selecionado. The following is an example of a group of radio buttons used in a video collection database to enter the speed of the recording (SP, LP, or EP):

![](../assets/en/FormObjects/radio2.png)

Selecting one radio button in a group sets that button to 1 and all of the others in the group to 0. Só pode ser selecionado um botão rádio de cada vez.

> You can associate [Boolean type expressions](properties_Object.md#variable-or-expression) with radio buttons. In this case, when a radio button in a group is selected, its variable is True and the variables for the group's other radio buttons are False.

The value contained in a radio button object is not saved automatically (except if it is the representation of a Boolean field); radio button values must be stored in their variables and managed with methods.

## Estilos de botões

Radio [button styles](properties_TextAndPicture.md#button-style) control radio button's general appearance as well as its available properties. É possível aplicar diferentes estilos predefinidos aos botões rádio. However, the same button style must be applied to all radio buttons in a group so that they work as expected.

4D fornece botões rádio nos seguintes estilos predefinidos:

### Clássico

The Regular radio button style is a standard system button (_i.e._, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_regular.png)

In addition to initiating code execution, the Regular radio button style changes bullsey color when being hovered.

### Plano

The Flat radio button style is a standard system button (_i.e._, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_flat.png)

Por padrão, o estilo Plano tem um aspeto minimalista. The Flat button style's graphic nature is particularly useful for forms that will be printed.

### Barra de ferramentas

O estilo de botão rádio está pensado principalmente para sua integração em uma barra de ferramentas.

By default, the Toolbar style has a transparent background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - the button is highlighted.

![](../assets/en/FormObjects/radio_toolbar.png)

- _macOS_ - the highlight of the button never appears.

### Bevel

The Bevel radio button style is similar to the [Toolbar](#toolbar) style's behavior, except that it has a light gray background and a gray outline. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - the button is highlighted.

![](../assets/en/FormObjects/radio_bevel.png)

- _macOS_ - the highlight of the button never appears.

### Bevel arredondado

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

Como padrão, o estilo OS X Textured aparece como:

- _Windows_ - a toolbar-like button with a label in the center and the background is always displayed.

- _macOS_ - a standard system button displaying a color change from light to dark gray. Sua altura está predefinida: não é possível ampliar ou reduzir.

![](../assets/en/FormObjects/OSXTextured.png)

### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style (standard system button) with the [Toolbar](#toolbar) style's behavior.

As cores (ressaltado e fundo) de um botão com o estilo Office XP são baseadas nos sistemas de cores. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - its background only appears when the mouse rolls over it.

![](../assets/en/FormObjects/radio_xp.png)

- _macOS_ - its background is always displayed.

### Contrair/expandir

Este estilo de botão pode ser utilizado para adicionar um ícone padrão contracter/déployer. Esses botões são usados nativamente em listas hierárquicas. Esses botões são usados nativamente em listas hierárquicas.

![](../assets/en/FormObjects/checkbox_collapse.png)

:::info

The Collapse/Expand style is named "disclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

### Botão disclosure

The disclosure radio button style displays the radio button as a standard disclosure button, usually used to show/hide additional information. O símbolo do botão aponta para baixo com o valor 0 e para cima com o valor 1.

![](../assets/en/FormObjects/checkbox_disclosure.png)

:::info

The Disclosure style is named "roundedDisclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

### Personalizado

The Custom radio button style accepts a personalized background picture and allows managing additional parameters such as [icon offset](properties_TextAndPicture.md#icon-offset) and [margins](properties_TextAndPicture.md#horizontalMargin).

## Propriedades compatíveis

Todos os botões rádio partilham o mesmo conjunto de propriedades básicas:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment)(1) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(2) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Number of States](properties_TextAndPicture.md#number-of-states)(2) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(2) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(2) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Not supported by the [Regular](#regular) and [Flat](#flat) styles.<br/>
> (2) Not supported by the [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) and [Collapse/Expand](#collapseexpand) styles.

Additional specific properties are available depending on the [button style](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin)
