---
id: form-set-vertical-resizing
title: FORM SET VERTICAL RESIZING
slug: /commands/form-set-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET VERTICAL RESIZING.Syntax-->**FORM SET VERTICAL RESIZING** ( *redimensao* {; *alturaMin* {; *alturaMax*}} )<!-- END REF-->
<!--REF #_command_.FORM SET VERTICAL RESIZING.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| redimensao | Boolean | &#8594;  | True: o formulário pode ser redimensionado verticalmente<br/>False: o formulário não pode ser redimensionado verticalmente |
| alturaMin | Integer | &#8594;  | Maior altura de formulário permitida (píxels) |
| alturaMax | Integer | &#8594;  | Altura máxima de formulário permitida (píxels) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM SET VERTICAL RESIZING.Summary-->O comando FORM SET VERTICAL RESIZING lhe permite modificar por programação as propriedades de redimensionamento vertical do formulário atual.<!-- END REF--> Automaticamente estas propriedades são definidas no editor de formulários no ambiente Desenho. As novas propriedades são definidas para o processo atual; não são armazenadas com o formulário.

O parâmetro *redimensao* lhe permite definir se o formulário pode ser redimensionado verticalmente; em outras palavras, se a altura é modificável (manualmente pelo usuário ou por programação). 

Se passa [True](true.md "True"), a altura do formulário pode ser modificada pelo usuario; 4D utiliza como marcadores os valores passados em *alturaMin* e *alturaMax*. 

Se passa [False](false.md "False"), não pode ser modificada a largura do formulário atual; neste caso, não há necessidade de passar valores nos parâmetros *alturaMin* e *alturaMax*. 

Se passar [True](true.md "True") no primeiro parâmetro, pode passar nos parâmetros opcionais *alturaMin* e *alturaMax* as novas alturas, mínimas e máximas, do formulário (em píxels). Se omitir estes parâmetros são utilizados os valores definidos no ambiente Desenho (se os houver).

#### Exemplo 

Consulte o exemplo do comando [FORM SET SIZE](form-set-size.md "FORM SET SIZE"). 

#### Ver também 

[FORM GET VERTICAL RESIZING](form-get-vertical-resizing.md)  
[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 893 |
| Thread-seguro | &cross; |


