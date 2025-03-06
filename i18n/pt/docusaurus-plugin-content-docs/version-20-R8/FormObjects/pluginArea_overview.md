---
id: pluginAreaOverview
title: Área Plug-in
---

A plug-in area is an area on the form that is completely controlled by a [plug-in](../Extensions/develop-plug-ins.md). A capacidade de incorporar plug-ins aos formulários oferece possibilidades ilimitadas para a criação de aplicativos personalizados.

Ao abrir uma aplicação, 4D cria uma lista interna dos plug-ins [instalados em sua aplicação](../Concepts/plug-ins.md#installing-plug-ins). Quando tiver inserido uma área Plug-in em um formulário, pode atribuir um plug-in para a área diretamente na lista **Tipo** na Lista de propriedades:

![](../assets/en/FormObjects/pluginArea.png)

> Alguns plug-ins, como 4D Internet Commands, não podem ser usados em formulários ou janelas externas. Quando um plug-in não pode ser usado em um formulário, ele não aparece na lista de plug-ins da Lista de propriedades.

Se você desenhar uma área de plug-in muito pequena, 4D irá exibi-lo como um botão cujo título é o nome da variável associada à área. Durante a execução, o usuário pode clicar nesse botão para abrir uma janela específica que exiba o plug-in.

## Propriedades avançadas

Se opções avançadas são fornecidas pelo autor do plug-in, um tema **Plug-in** contendo uma [**Propriedades Avançadas**](properties_Plugins.md) botão pode ser ativado na lista de propriedades. Nesse caso, você pode clicar nesse botão para definir essas opções, geralmente por uma caixa de diálogo personalizada.

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Advanced Properties](properties_Plugins.md) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Plug-in Kind](properties_Object.md#plug-in-kind) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)