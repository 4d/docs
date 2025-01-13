---
id: pluginAreaOverview
title: Área Plug-in
---


A plug-in area is an area on the form that is completely controlled by a [plug-in](../Extensions/develop-plug-ins.md). The ability to incorporate plug-ins into forms gives you unlimited possibilities when creating custom applications.

When opening an application, 4D creates an internal list of the plug-ins [installed in your application](../Concepts/plug-ins.md#installing-plug-ins). Quando tiver inserido uma área Plug-in em um formulário, pode atribuir um plug-in para a área diretamente na lista de tipos da Lista de Propriedades:

![](../assets/en/FormObjects/pluginArea.png)

> Some plug-ins, such as 4D Internet Commands, cannot be used in forms or external windows. When a plug-in cannot be used in a form, it does not appear in the plug-in list of the Property List.

If you draw a plug-in area that is too small, 4D will display it as a button whose title is the name of the variable associated with the area. During execution, the user can click on this button in order to open a specific window displaying the plug-in.


## Advanced properties

If advanced options are provided by the author of the plug-in, a **Plug-in** theme containing an [**Advanced Properties**](properties_Plugins.md) button may be enabled in the Property list. In this case, you can click this button to set these options, usually through a custom dialog box.


## Propriedades compatíveis
[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Advanced Properties](properties_Plugins.md) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Plug-in Kind](properties_Object.md#plug-in-kind) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 