---
id: staticPicture
title: Imagem estática
---

Las imágenes estáticas son [objetos estáticos](formObjects_overview.md#active-and-static-objects) que pueden ser utilizados para varios propósitos en los formularios 4D, incluyendo la decoración, el fondo o la interfaz de usuario:

![](../assets/en/FormObjects/StaticPict.png)

As imagens estáticas são armazenadas fora dos formulários e inseridas por referência. No editor de formulários, os objetos de imagem estática são criados por operações de copiar/colar ou arrastar e soltar.

> Se você colocar uma imagem estática na página 0 de um formulário de várias páginas, ela aparecerá automaticamente como um elemento de plano de fundo em todas as páginas. Você também pode incluí-lo em um formulário herdado, aplicado no plano de fundo de outros formulários diferentes. De qualquer maneira, seu banco de dados roda mais rápido se a imagem for colada em cada página.

## Formato e localização

A imagem original deve ser armazenada em um formato gerenciado nativamente por 4D (4D reconhece os principais formatos de imagem: JPEG, PNG, BMP, SVG, GIF, etc.).

Podem ser utilizadas duas localizações principais para o percurso da imagem estática:

- na pasta **Resources** do projeto. Apropriado quando quiser compartir imagens estáticas entre vários formulários do banco de dados. En este caso, el nombre de la ruta es en "/RESOURCES/\<picture path\>".
- numa pasta de imagens (por exemplo, **Images**) na pasta do formulário. Adequado quando as imagens estáticas forem utilizadas apenas no formulário ou se pretende poder mover ou duplicar todo o formulário no projeto ou em projetos diferentes. Nesse caso, o nome do caminho é "<\picture path\>" sendo resolvido a partir da raiz da pasta do formulário.

## Propriedades compatíveis

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [CSS Class](properties_Object.md#css-class) - [Display](properties_Picture.md#display) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility)  - [Width](properties_CoordinatesAndSizing.md#width)
