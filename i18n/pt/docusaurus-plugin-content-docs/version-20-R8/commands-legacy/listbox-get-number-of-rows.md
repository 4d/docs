---
id: listbox-get-number-of-rows
title: LISTBOX Get number of rows
slug: /commands/listbox-get-number-of-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of rows.Syntax-->**LISTBOX Get number of rows** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of rows.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Integer | &#8592; | Número de filas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get number of rows.Summary-->O comando LISTBOX Get number of rows devolve o número de filas do list box designado pelos parâmetros objeto e \*.<!-- END REF-->

**Nota:**LISTBOX Get number of rows não considera o estado oculto/visível das linhas. Por exemplo em um list box de 10 linhas, onde as 9 primeiras estão ocultas, LISTBOX Get number of rows devolve 10.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

**Nota:** se os arrays associados com as colunas de um list box não tem todos o mesmo tamanho, só o número de elementos correspondente ao array mais pequeno aparecerá na list box e desta maneira é retornado por este comando. 

#### Ver também 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 915 |
| Thread-seguro | &cross; |


