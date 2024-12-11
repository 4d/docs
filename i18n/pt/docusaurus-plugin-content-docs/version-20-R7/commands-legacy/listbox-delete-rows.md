---
id: listbox-delete-rows
title: LISTBOX DELETE ROWS
slug: /commands/listbox-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE ROWS.Syntax-->**LISTBOX DELETE ROWS** ( {* ;} *objeto* ; *posiçao* {; *numRows*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE ROWS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string) se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado) ou Variável (se * é omitido) |
| posiçao | Integer | &#8594;  | Posição da fila a apagar |
| numRows | Integer | &#8594;  | Número de linhas a excluir |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX DELETE ROWS.Summary-->O comando LISTBOX DELETE ROWS apaga a fila número *posição* (visível ou não) do list box definido pelos parâmetros *objeto* e \*.<!-- END REF-->

**Nota**: este comando funciona apenas com os list box baseados em arrays. Quando este comando se utiliza com um list box baseado em uma seleção, não faz nada e a variável sistema OK retorna 0

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*

Lembre que depois da execução do comando, não haverá nenhum elemento selecionado no list box.

A fila *posição* é eliminada automaticamente de todos os arrays utilizados pelas colunas do list box.  
Se o parâmetro *posição* é superior ao número de linhas do array do list box ou se é inferior a 1, o comando não faz nada.   

**Nota**: este comando não considera os possíveis estados ocultos/visíveis das linhas do list box.

#### Ver também 

[LISTBOX Get number of rows](listbox-get-number-of-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 914 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


