---
id: staticPicture
title: Static picture
---


Static pictures are [static objects](formObjects_overview.md#active-and-static-objects) that can be used for various purposes in 4D forms, including decoration, background, or user interface:

![](../assets/en/FormObjects/StaticPict.png)


As imagens estáticas são armazenadas fora dos formulários e inseridas por referência. In the form editor, static picture objects are created by copy/paste or drag and drop operations.

> If you place a static picture on page 0 of a multi-page form, it will appear automatically as a background element on all pages. You can also include it in an inherited form, applied in the background of other different forms. De qualquer maneira, seu banco de dados roda mais rápido se a imagem for colada em cada página.



## Formato e localização

The original picture must be stored in a format managed natively by 4D (4D recognizes the main picture formats: JPEG, PNG, BMP, SVG, GIF, etc.).

Podem ser utilizadas duas localizações principais para o percurso da imagem estática:

- na pasta **Resources** do banco de dados projeto. Apropriado quando quiser compartir imagens estáticas entre vários formulários do banco de dados. Neste caso, o nome do caminho está em "/RESOURCES/\<picture path\>".
- numa pasta de imagens (por exemplo, **Images**) dentro da pasta do formulário. Appropriate when the static pictures are used only in the form and/or yon want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "<\picture path\>" and is resolved from the root of the form folder.


## Propriedades compatíveis

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [CSS Class](properties_Object.md#css-class) - [Display](properties_Picture.md#display) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility)  - [Width](properties_CoordinatesAndSizing.md#width)
