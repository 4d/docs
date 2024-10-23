---
id: listbox-delete-column
title: LISTBOX DELETE COLUMN
slug: /commands/listbox-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE COLUMN.Syntax-->**LISTBOX DELETE COLUMN** ( {* ;} *objeto* ; *posiçaoCol* {; *numero*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE COLUMN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é a variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Variável (se * é omitido) |
| posiçaoCol | Integer | &#8594;  | Número de coluna a remover |
| numero | Integer | &#8594;  | Número de colunas a remover |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX DELETE COLUMN.Summary-->O comando LISTBOX DELETE COLUMN apaga uma ou mais colunas (visíveis ou não) no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

**Nota:** este comando não faz nada se é aplicada a primeira coluna de um list box mostrado em modo hierárquico.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

Se não passa o parâmetro opcional *número*, o comando simplesmente elimina a coluna definida no parâmetro *posicaoCol*.   
Do contrário, o parâmetro *número* indica o número de colunas a eliminar a direita começando desde a coluna *posicaoCol* (esta incluída). 

Se o parâmetro *posicionCol* é maior que o número de colunas no list box, o comando não faz nada.

#### Ver também 

[LISTBOX Get number of columns](listbox-get-number-of-columns.md)  
[LISTBOX INSERT COLUMN](listbox-insert-column.md)  