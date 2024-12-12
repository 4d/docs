---
id: listbox-get-table-source
title: LISTBOX GET TABLE SOURCE
slug: /commands/listbox-get-table-source
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Syntax-->**LISTBOX GET TABLE SOURCE** ( {* ;} *objeto* ; *numTabela* {; *nome* {; *highlightName*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET TABLE SOURCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| numTabela | Integer | &#8592; | número da tabela selecionada |
| nome | Text | &#8592; | Nome da seleção ou ** para seleção atual |
| highlightName | Text | &#8592; | Nome do set destacado. |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX GET TABLE SOURCE.Summary-->O comando LISTBOX GET TABLE SOURCE permite conhecer a fonte atual de dados mostrados no list box designado pelos parâmetros *\** e *objeto*.<!-- END REF-->

Se passa o parâmetro opcional \*, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

O comando devolve no parâmetro *numTabela* o número da tabela principal associada a list box e no parâmetro opcional *tempo* o nome da seleção temporária eventualmente utilizada.

Se as linhas do list box estão vinculadas com a seleção atual da tabela, o parâmetro *nome*, se for passado, devolve uma string vazia. Se as linhas do list box estão vinculadas com uma seleção temporária, o parâmetro *nome* devolve o nome de esta seleção temporária.

Se o list box está associado com arrays, *numTabela* devolve -1 e *tempo*, se é passada, devolve uma string vazia.

#### Ver também 

[LISTBOX SET TABLE SOURCE](listbox-set-table-source.md)  