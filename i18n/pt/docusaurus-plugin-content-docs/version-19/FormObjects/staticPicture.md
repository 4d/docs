---
id: staticPicture
title: Imagem estática
---


As imagens estáticas são [objetos estáticos](formObjects_overview.md#active-and-static-objects) que podem ser usados para várias finalidades em formas 4D, incluindo decoração, plano de fundo ou interface de usuário:

![](../assets/en/FormObjects/StaticPict.png)

As imagens estáticas são armazenadas fora dos formulários e inseridas por referência. No editor de formulários, os objetos de imagem estática são criados por operações de copiar/colar ou arrastar e soltar.

> Se você colocar uma imagem estática na página 0 de um formulário de várias páginas, ela aparecerá automaticamente como um elemento de plano de fundo em todas as páginas. Você também pode incluí-lo em um formulário herdado, aplicado no plano de fundo de outros formulários diferentes. De qualquer maneira, seu banco de dados roda mais rápido se a imagem for colada em cada página.

## Formato e localização

A imagem original deve ser armazenada em um formato gerenciado nativamente por 4D (4D reconhece os principais formatos de imagem: JPEG, PNG, BMP, SVG, GIF, etc.).

Podem ser utilizadas duas localizações principais para o percurso da imagem estática:

- na pasta **Resources** do banco de dados projeto. Apropriado quando quiser compartir imagens estáticas entre vários formulários do banco de dados. Neste caso, o nome do caminho está em "/RESOURCES/\<picture path\>".
- numa pasta de imagens (por exemplo, **Images**) dentro da pasta do formulário. Adequado quando as imagens estáticas forem utilizadas apenas no formulário ou se pretende poder mover ou duplicar todo o formulário no projeto ou em projetos diferentes. Nesse caso, o nome do caminho é "<\picture path\>" sendo resolvido a partir da raiz da pasta do formulário.

## Propriedades compatíveis

[Inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe CSS](properties_Object.md#css-class) - [Exibição](properties_Picture.md#display) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Nome do objeto](properties_Picture.md#pathname) - [Direita](properties_CoordinatesAndSizing.md#right) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)
