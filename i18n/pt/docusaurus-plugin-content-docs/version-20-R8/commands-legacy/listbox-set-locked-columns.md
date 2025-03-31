---
id: listbox-set-locked-columns
title: LISTBOX SET LOCKED COLUMNS
slug: /commands/listbox-set-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Syntax-->**LISTBOX SET LOCKED COLUMNS** ( {* ;} *objeto* ; *numColunas* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| numColunas | Integer | &#8594;  | Número de colunas a bloquear |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SET LOCKED COLUMNS.Summary-->O comando**LISTBOX SET LOCKED COLUMNS** bloqueia as primeiras *numColunas* colunas esquerdas do list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

As colunas bloqueadas são mostradas na parte esquerda do list box e não são deslocadas com o resto das colunas do list box. Para maior informação, consulte o Manual de *Desenho*. 

Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia. 

Em *numColunas*, pode passar qualquer valor entre 1 e o número total de colunas do list box -1\. Para um list box com X colunas, se passa um valor > X-1 em *numColunas*, será reduzido automaticamente ao valor X-1.

Para eliminar o bloqueio de colunas, passe 0 em *numColunas*.

#### Ver também 

[LISTBOX Get locked columns](listbox-get-locked-columns.md)  
[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1151 |
| Thread-seguro | &cross; |


