---
id: get-list-properties
title: GET LIST PROPERTIES
slug: /commands/get-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST PROPERTIES.Syntax-->**GET LIST PROPERTIES** ( *lista* ; *aparencia* {; *icone* {; *alturaLinha* {; *duploClique* {; *multiSeleçao* {; *editavel*}}}}} )<!-- END REF-->
<!--REF #_command_.GET LIST PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Integer | &rarr; | Número de referência da lista |
| aparencia | Integer | &larr; | Estilo gráfico da lista 1 = Lista hierárquica à Macintosh 2 = Lista hierárquica à Windows |
| icone | Integer | &larr; | Referência de recurso Mac OS ‘cicn’ |
| alturaLinha | Integer | &larr; | Altura mínima de la linha expressada em pixels |
| duploClique | Integer | &larr; | Expandir/Contrair sub-lista com duplo-clique? 0 = Sim, 1= Não |
| multiSeleçao | Integer | &larr; | Seleções múltiplas: 0 = Não, 1 = Sim |
| editavel | Integer | &larr; | Lista editável pelo usuário: 0 = Não, 1 = Sim |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET LIST PROPERTIES.Summary-->O comando GET LIST PROPERTIES  retorna informação sobre a lista cujo número de referência se passa em *lista*.<!-- END REF-->

O parâmetro *aparencia* retorna o estilo gráfico da lista.  
O parâmetro *icone* é obsoleto, retorna sempre 0.  
O parâmetro *alturaLinha* retorna a altura de linha mínima.  
Se *duploClique* vale 1, fazer duplo-clique em um elemento pai da lista não faz com que sua lista filho se expanda ou se contraia. Se *duploclique* vale 0, este comportamento é ativado (valor normal).  
Se o parâmetro *multiSeleçao* vale 0, as seleções múltiplas de elementos (manualmente ou por programação) não são possíveis na lista. Se valer 1, são permitidas as seleções múltiplas.   
Se o parâmetro *editavel* vale 1, a lista é editável quando se mostra em forma de lista de seleção nos registros. Se vale 0, a lista não é editável. 

Estas propriedades podem ser definidas com a ajuda do comando [SET LIST PROPERTIES](set-list-properties.md) ou no editor de listas no ambiente Desenho, se a lista foi criada no editor ou guardada utilizando o comando [SAVE LIST](save-list.md).

Para uma completa descrição da aparência, ícones de knots, altura de linha mínima e administração de uma lista com duplo clique, consulte o comando [SET LIST PROPERTIES](set-list-properties.md).

#### Ver também 

[SET LIST PROPERTIES](set-list-properties.md)  