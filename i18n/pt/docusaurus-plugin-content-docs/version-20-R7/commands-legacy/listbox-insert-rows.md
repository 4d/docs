---
id: listbox-insert-rows
title: LISTBOX INSERT ROWS
slug: /commands/listbox-insert-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT ROWS.Syntax-->**LISTBOX INSERT ROWS** ( {* ;} *objeto* ; *posiçao* {; *numFilas*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT ROWS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| posiçao | Integer | &#8594;  | Posição da fila a apagar |
| numFilas | Integer | &#8594;  | Número de filas a inserir |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX INSERT ROWS.Summary-->O comando **LISTBOX INSERT ROWS** insere uma nova linha no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

**Nota**: este comando funciona unicamente com os list box baseados em arrays. Quando este comando é utilizado com um list box baseado em uma seleção, não faz nada e a variável sistema OK toma o valor 0.

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

Por padrão, se o parâmetro *numFilas* for omitido, apenas uma linha é inserida. Caso contrário, o comando insere o número de linhas definidas neste parâmetro.  
  
A fila é inserida na posição definida pelo parâmetro *posição* é adicionada automaticamente nesta posição em todos os arrays utilizados pelas colunas do list box, qualquer que seja seu tipo e visibilidade.

Se o parâmetro *numFilas* excede o número de linhas de tabelas nas arrays do list box, o comando executa a adição, no final de cada tabela. Se for igual a 0, o comando executa a adição no início de cada array. Se ele contém um valor negativo, o comando não faz nada.

#### Ver também 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  