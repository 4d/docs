---
id: pluginAreaOverview
title: Área Plug-in
---

A plug-in area is an area on the form that is completely controlled by a plug-in. The ability to incorporate plug-ins into forms gives you unlimited possibilities when creating custom applications. A plug-in can perform a simple task such as displaying a digital clock on a form, or a complex task such as providing full-featured word processing, spreadsheet, or graphics capabilities.

Ao abrir uma aplicação, 4D cria uma lista interna dos plug-ins [instalados em sua aplicação](#installing-plug-ins). Quando tiver inserido uma área Plug-in em um formulário, pode atribuir um plug-in para a área diretamente na lista **Tipo** na Lista de propriedades:

![](../assets/en/FormObjects/pluginArea.png)

> Some plug-ins, such as 4D Internet Commands, cannot be used in forms or external windows. When a plug-in cannot be used in a form, it does not appear in the plug-in list of the Property List.

If you draw a plug-in area that is too small, 4D will display it as a button whose title is the name of the variable associated with the area. During execution, the user can click on this button in order to open a specific window displaying the plug-in.

## Advanced properties

Se opções avançadas são fornecidas pelo autor do plug-in, um tema **Plug-in** contendo uma [**Propriedades Avançadas**](properties_Plugins.md) botão pode ser ativado na lista de propriedades. In this case, you can click this button to set these options, usually through a custom dialog box.

## Instalação de plug-ins

Para adicionar um plug-in no seu ambiente 4D, primeiro precisa de sair do 4D. Os plug-ins são carregados quando se inicia 4D. Para obter mais informações sobre a instalação de plug-ins, consulte [Instalando plugins ou componentes](https://doc.4d.com/4Dv17R6/4D/17-R6/Installing-plugins-or-components.300-4354866.en.html).

## Criação de plug-ins

If you are interested in designing your own plug-ins, you can receive extensive information about writing and implementing plug-ins. 4D fornece um [kit completo (no github)](https://github.com/4d/4D-Plugin-SDK) para ajudá-lo a escrever plugins personalizados.

## Propriedades compatíveis

[Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Propriedades Avançadas](properties_Plugins.md) - [Clase](properties_Object.md#css-class) - [Arrastável](properties_Action.md#draggable-and-droppable) - [Droppable](propriedades_Action.md#draggable-and-droppable) - [Tipo de Expressão](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Altura](propriedades_CoordinatesAndSizing.md#height) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Ezquerda](propriedades_Coordinates_AndSizing.md#left) - [Método](properties_Action.md#method) - [Nome do objeto](properties_Object.md#object-name) - [Tipo de plug-in](properties_Object.md#plug-in-kind) - [Direita](properties_CoordinatesAndSizing.md#right) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](propriedades_Object.md#type) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - [Tamanho Vertical](properties_ResizingOps.md#vertical-sizing) - [Visibilidade](propriedades_Display.md#visibiliity) - [Largura](properties_CoordinatesAndSizing.md#width)
