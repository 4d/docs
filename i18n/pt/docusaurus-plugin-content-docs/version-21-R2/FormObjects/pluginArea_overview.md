---
id: pluginAreaOverview
title: Área Plug-in
---

Uma área de plug-in é uma área no formulário que é totalmente controlada por um [plug-in](../Extensions/develop-plug-ins.md). A capacidade de incorporar plug-ins aos formulários oferece possibilidades ilimitadas para a criação de aplicativos personalizados.

Ao abrir uma aplicação, 4D cria uma lista interna dos plug-ins [instalados em sua aplicação](../Concepts/plug-ins.md#installing-plug-ins). Quando tiver inserido uma área Plug-in em um formulário, pode atribuir um plug-in para a área diretamente na lista **Tipo** na Lista de propriedades:

![](../assets/en/FormObjects/pluginArea.png)

> Alguns plug-ins, como 4D Internet Commands, não podem ser usados em formulários ou janelas externas. Quando um plug-in não pode ser usado em um formulário, ele não aparece na lista de plug-ins da Lista de propriedades.

Se você desenhar uma área de plug-in muito pequena, 4D irá exibi-lo como um botão cujo título é o nome da variável associada à área. Durante a execução, o usuário pode clicar nesse botão para abrir uma janela específica que exiba o plug-in.

## Propriedades avançadas

Se opções avançadas são fornecidas pelo autor do plug-in, um tema **Plug-in** contendo uma [**Propriedades Avançadas**](properties_Plugins.md) botão pode ser ativado na lista de propriedades. Nesse caso, você pode clicar nesse botão para definir essas opções, geralmente por uma caixa de diálogo personalizada.

## Propriedades compatíveis

[Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Propriedades Avançadas](properties_Plugins.md) - [Clase](properties_Object.md#css-class) - [Arrastável](properties_Action.md#draggable) - [Droppable](propriedades_Action.md#droppable) - [Tipo de Expressão](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Altura](propriedades_CoordinatesAndSizing.md#height) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Ezquerda](propriedades_Coordinates_AndSizing.md#left) - [Método](properties_Action.md#method) - [Nome do objeto](properties_Object.md#object-name) - [Tipo de plug-in](properties_Object.md#plug-in-kind) - [Direita](properties_CoordinatesAndSizing.md#right) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](propriedades_Object.md#type) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - [Tamanho Vertical](properties_ResizingOps.md#vertical-sizing) - [Visibilidade](propriedades_Display.md#visibiliity) - [Largura](properties_CoordinatesAndSizing.md#width)