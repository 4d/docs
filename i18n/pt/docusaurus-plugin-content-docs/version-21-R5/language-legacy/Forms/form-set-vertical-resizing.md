---
id: form-set-vertical-resizing
title: FORM SET VERTICAL RESIZING
slug: /commands/form-set-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET VERTICAL RESIZING.Syntax-->**FORM SET VERTICAL RESIZING** ( *redimensao* : Boolean {; *alturaMin* : Integer {; *alturaMax* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM SET VERTICAL RESIZING.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| redimensao | Boolean | &#8594; | True: o formulário pode ser redimensionado verticalmente<br/>False: o formulário não pode ser redimensionado verticalmente |
| alturaMin | Integer | &#8594; | Maior altura de formulário permitida (píxels) |
| alturaMax | Integer | &#8594; | Altura máxima de formulário permitida (píxels) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|12|Renomear|
|2004|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.FORM SET VERTICAL RESIZING.Summary-->O comando FORM SET VERTICAL RESIZING lhe permite modificar por programação as propriedades de redimensionamento vertical do formulário atual.<!-- END REF--> Automaticamente estas propriedades são definidas no editor de formulários no ambiente Desenho. As novas propriedades são definidas para o processo atual; não são armazenadas com o formulário.

O parâmetro *redimensao* lhe permite definir se o formulário pode ser redimensionado verticalmente; em outras palavras, se a altura é modificável (manualmente pelo usuário ou por programação). 

Se passa [True](../commands/true), a altura do formulário pode ser modificada pelo usuario; 4D utiliza como marcadores os valores passados em *alturaMin* e *alturaMax*. 

Se passa [False](../commands/false), não pode ser modificada a largura do formulário atual; neste caso, não há necessidade de passar valores nos parâmetros *alturaMin* e *alturaMax*. 

Se passar [True](../commands/true) no primeiro parâmetro, pode passar nos parâmetros opcionais *alturaMin* e *alturaMax* as novas alturas, mínimas e máximas, do formulário (em píxels). Se omitir estes parâmetros são utilizados os valores definidos no ambiente Desenho (se os houver).

## Exemplo 

Consulte o exemplo do comando [FORM SET SIZE](form-set-size.md "FORM SET SIZE"). 

## Ver também 

[FORM GET VERTICAL RESIZING](../commands/form-get-vertical-resizing)  
[FORM SET HORIZONTAL RESIZING](../commands/form-set-horizontal-resizing)  
[FORM SET SIZE](../commands/form-set-size)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 893 |
| Thread-seguro | no |


