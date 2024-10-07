---
id: picture-properties
title: PICTURE PROPERTIES
slug: /commands/picture-properties
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE PROPERTIES.Syntax-->**PICTURE PROPERTIES** ( *imagem* ; *largura* ; *altura* {; *hDesp* {; *vDesp* {; *modo*}}} )<!-- END REF-->
<!--REF #_command_.PICTURE PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#x1F852; | Imagem para a qual conseguir informação |
| largura | Real | &#x1F858; | Largura da imagem expressa em pixels |
| altura | Real | &#x1F858; | Altura da imagem expressa em pixels |
| hDesp | Integer | &#x1F858; | Offset horizontal quando a imagem é exibida no segundo plano |
| vDesp | Integer | &#x1F858; | Offset vertical quando a imagem é exibida no segundo plano |
| modo | Integer | &#x1F858; | Modo de transferência quando a imagem é exibida no segundo plano |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PICTURE PROPERTIES.Summary-->O comando PICTURE PROPERTIES devolve a informação sobre a imagem que passa no parâmetro *imagem*.<!-- END REF-->

Os parâmetros *largura* e *altura* devolvem a largura e altura da imagem.

Os parâmetros *hDesp*, *vDesp*, e *modo* devolvem as posições horizontal e vertical e o modo de transferência da imagem quando se mostra no fundo em um formulário (“Imagem de fundo”).

#### Ver também 

[Picture size](picture-size.md)  