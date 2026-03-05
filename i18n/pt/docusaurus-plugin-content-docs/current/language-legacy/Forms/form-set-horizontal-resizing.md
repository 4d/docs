---
id: form-set-horizontal-resizing
title: FORM SET HORIZONTAL RESIZING
slug: /commands/form-set-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Syntax-->**FORM SET HORIZONTAL RESIZING** ( *redimensao* : Boolean {; *larguraMin* : Integer {; *larguraMax* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| redimensao | Boolean | &#8594; | True: o formulário pode ser redimensionado horizontalmente; False - o formulário não pode ser redimensionado horizontalmente |
| larguraMin | Integer | &#8594; | Melhor largura de formulário permitida (píxels) |
| larguraMax | Integer | &#8594; | Maior largura de formulário permitida (píxels) |
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

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Summary-->O comando FORM SET HORIZONTAL RESIZING permite modificar por programação as propriedades de redimensionamento horizontal do formulário atual.<!-- END REF--> Automaticamente, estas propriedades são definidas no editor de formulários no ambiente Desenho. As novas propriedades são definidas para o processo atual; não são armazenadas com o formulário. 

O parâmetro *redimensao* lhe permite definir se o formulário pode ser redimensionado horizontalmente; em outras palavras, se a largura é modificável (manualmente pelo usuário ou por programação).  
  
Se passa [True](../commands/true), a largura do formulário pode ser modificado pelo usuário; 4D utiliza como marcadores os valores passados em *larguraMin* e *larguraMax*.

Se passa [False](../commands/false), não é possível modificar a largura do formulário atual; neste caso, não há necessidade de passar valores nos parâmetros *larguraMin* e *larguraMax* . 

Se passar [True](../commands/true) no primeiro parâmetro, pode passar nos parâmetros opcionais *larguraMin* e *larguraMax* as novas larguras, mínimas e máximas, do formulário (em pixels). Se omitir estes parâmetros são utilizados os valores definidos no ambiente Desenho (se os houver).

## Exemplo 

Consulte o exemplo do comando [FORM SET SIZE](form-set-size.md "FORM SET SIZE"). 

## Ver também 

[FORM GET HORIZONTAL RESIZING](../commands/form-get-horizontal-resizing)  
[FORM SET SIZE](../commands/form-set-size)  
[FORM SET VERTICAL RESIZING](../commands/form-set-vertical-resizing)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 892 |
| Thread-seguro | no |


