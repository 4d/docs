---
id: form-get-properties
title: FORM GET PROPERTIES
slug: /commands/form-get-properties
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET PROPERTIES.Syntax-->**FORM GET PROPERTIES** ( {*tabela* ;} *nomeForm* ; *largura* ; *altura* {; *numPags* {; *larguraFixa* {; *alturaFixa* {; *titulo*}}}} )<!-- END REF-->
<!--REF #_command_.FORM GET PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela do formulário ou tabela por padrão, se for omitido |
| nomeForm | Text | &#8594;  | Nome do formulário |
| largura | Integer | &#8592; | Largura do formulário (em pixels) |
| altura | Integer | &#8592; | Altura do formulário (em pixels) |
| numPags | Integer | &#8592; | Número de páginas no formulário |
| larguraFixa | Boolean | &#8592; | Verdadeiro = Largura fixo, Falso = Largura variável |
| alturaFixa | Boolean | &#8592; | Verdadeiro = Altura fixa, Falso = Altura variável |
| titulo | Text | &#8592; | Título da janela do formulário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FORM GET PROPERTIES.Summary-->O comando FORM GET PROPERTIES retorna as propriedades do formulário *nomForm*.<!-- END REF-->

Os parâmetros *largura* e *altura* retornam a largura e a altura do formulário em píxels. Estes valores são determinados nas propriedades de tamanho da janela padrão do formulário:

* Se o tamanho do formulário é **automático**, sua larguro e altura são calculadas de maneira que todos os objetos do formulário sejam visíveis, considerando as margens horizontal e vertical que foram definidas.
* Se o tamanho do formulário é **fixo**, sua largura e altura são introduzidos manualmente nas áreas correspondentes.
* Se o tamanho do formulário está **baseado em um objeto,** sua largura e altura são calculados com relação a posição de este objeto.

O parâmetro *numPags* retorna o número de páginas em um formulário, excluindo a página 0 (zero).

Os parâmetros *larguraFixo* e *alturaFixo* indicam se a largura e a altura do formulário são redimensionáveis (o parâmetro retorna [False](false.md "False")) ou fixos (o parâmetro retorna [True](true.md "True")).

O parâmetro *título* retorna o título da janela do formulário, tal como foi definido na Lista de propriedades do editor de formulários.. Se não foi definido nenhum nome, o parâmetro *título* retorna uma string vazia.

#### Ver também 

[FORM GET OBJECTS](form-get-objects.md)  
[FORM SET SIZE](form-set-size.md)  
[Open form window](open-form-window.md)  