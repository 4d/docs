---
id: radiobuttonOverview
title: Botão rádio
---

Radio buttons are objects that allow the user to select one of a group of buttons.

Um botão radio aparece na forma de um texto seguido de um círculo. Entretanto, os botões de rádio podem ter <a href=“#button-styles”>aparências diferentes</a>.

![](../assets/en/FormObjects/radio1.png)

É selecionado um botão rádio:
- quando o usuário clica nele
- quando tem o foco e o usuário pressiona a tecla **Barra de Espaço**.



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

The Regular radio button style is a standard system button (*i.e.*, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_regular.png)

In addition to initiating code execution, the Regular radio button style changes bullsey color when being hovered.


### Plano

The Flat radio button style is a standard system button (*i.e.*, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_flat.png)

Por padrão, o estilo Plano tem um aspeto minimalista. A natureza gráfica do estilo Plano é especialmente útil para os formulários que vão ser impressos.


### Barra de ferramentas

O estilo de botão rádio está pensado principalmente para sua integração em uma barra de ferramentas.

Por padrão, o estilo da barra de ferramentas tem um fundo transparente com um rótulo no centro. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

 - *Windows* - o botão é realçado.

![](../assets/en/FormObjects/radio_toolbar.png)

 - *macOS* - o destaque do botão nunca aparece.



### Bevel

The Bevel radio button style is similar to the [Toolbar](#toolbar) style's behavior, except that it has a light gray background and a gray outline. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

 - *Windows* - o botão é realçado.

  ![](../assets/en/FormObjects/radio_bevel.png)

 - *macOS* - o destaque do botão nunca aparece.


### Bevel arredondado

O estilo de botão Bevel arredondado é quase idêntico ao estilo [Bevel](#bevel), exceto que, dependendo do sistema operativo, as esquinas do botão podem ser arredondadas.

 - *Windows* - o botão é idêntico ao estilo [Bevel](#bevel).

 - *macOS* - os cantos do botão são arredondados. ![](../assets/en/FormObjects/roundedBevel.png)


### OS X Gradient

O estilo de botão OS X Gradient é quase idêntico ao estilo [Bevel](#bevel), exceto pelo fato de que, dependendo do sistema operacional, ele pode ter uma aparência de dois tons.

 - *Windows* - o botão é idêntico ao estilo [Bevel](#bevel).

 - *macOS* - o botão é exibido como um botão de sistema de dois tons.



### OS X Texturizado

O estilo de botão rádio OS X Textured é quase idêntico ao estilo [Barra de ferramentas](#toolbar), exceto, dependendo do SO, ele pode ter uma aparência diferente e não mostra o mouse.

Como padrão, o estilo OS X Textured aparece como:

 - *Windows* - um botão como uma barra de ferramentas com um rótulo no centro e o plano de fundo é sempre exibido.

 - *macOS* - - um botão sistema padrão que mostra uma mudança de cor cinza claro a cinza escuro. Sua altura está predefinida: não é possível ampliar ou reduzir.

  ![](../assets/en/FormObjects/OSXTextured.png)



### Office XP

O estilo de botão Office XP combina a aparência de estilo [Clássico](#regular) com o comportamento de estilo [Barra de ferramentas](#toolbar).

As cores (ressaltado e fundo) de um botão com o estilo Office XP são baseadas nos sistemas de cores. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

 - *Windows* - seu fundo só aparece quando o mouse passa por cima.

  ![](../assets/en/FormObjects/radio_xp.png)

 - *macOS* - seu fundo é sempre mostrado.



### Contrair/expandir

Este estilo de botão pode ser utilizado para adicionar um ícone padrão contracter/déployer. Esses botões são usados nativamente em listas hierárquicas. Esses botões são usados nativamente em listas hierárquicas.

![](../assets/en/FormObjects/checkbox_collapse.png)

:::info

O estilo Contrair/Expandir tem o nome "disclosure" na [gramática JSON do estilo de botão](properties_TextAndPicture.md#button-style).

:::


### Botão disclosure

O estilo do botão radio disclosure exibe o botão de opção como um botão disclosure padrão, normalmente usado para mostrar/ocultar informações adicionais. O símbolo do botão aponta para baixo com o valor 0 e para cima com o valor 1.

![](../assets/en/FormObjects/checkbox_disclosure.png)

:::info

O estilo Disclosure tem o nome "roundedDisclosure" na [gramática JSON do estilo de botão](properties_TextAndPicture.md#button-style).

:::


### Personalizado

The Custom radio button style accepts a personalized background picture and allows managing additional parameters such as [icon offset](properties_TextAndPicture.md#icon-offset) and [margins](properties_TextAndPicture.md#horizontal-margin).


## Propriedades compatíveis

Todos os botões rádio partilham o mesmo conjunto de propriedades básicas:

[Negrito](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo do botão](properties_TextAndPicture.md#button-style) - [Classe](properties_Object.md#css-class) - [Tipo de expressão](properties_Object.md#expression-type) - [Focalizável](properties_Entry.md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Alinhamento horizontal](properties_Text.md#horizontal-alignment)(1) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Título dos abraços da imagem](properties_TextAndPicture.md#image-hugs-title)(2) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Número de estados](properties_TextAndPicture.md#number-of-states)(2) - [Método](properties_Action.md#method) - [Nome do objeto](properties_Object.md#object-name) - [Grupo de rádios](properties_Object.md#radio-group) - [Nome do caminho da imagem](properties_TextAndPicture.md#picture-pathname)(2) - [Direita](properties_CoordinatesAndSizing.md#right) - [Salvar valor](properties_Object.md#save-value) - [Atalho](properties_Entry.md#shortcut) - [Título](properties_Object.md#title) - [Posição do título/da imagem](properties_TextAndPicture.md#titlepicture-position)(2) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)

> (1) Not supported by the [Regular](#regular) and [Flat](#flat) styles.<br/> (2) Not supported by the [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) and [Collapse/Expand](#collapseexpand) styles.

Propriedades específicas adicionais estão disponíveis dependendo do [estilo botão](#button-styles):

- Personalizado: [Nome do caminho do plano de fundo](properties_TextAndPicture.md#background-pathname) - [Margem horizontal](properties_TextAndPicture.md#horizontal-margin) - [Deslocamento do ícone](properties_TextAndPicture.md#icon-offset) - [Margem vertical](properties_TextAndPicture.md#vertical-margin)