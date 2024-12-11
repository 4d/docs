---
id: listbox-get-locked-columns
title: LISTBOX Get locked columns
slug: /commands/listbox-get-locked-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get locked columns.Syntax-->**LISTBOX Get locked columns** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get locked columns.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| resultado | Integer | &#8592; | Número de colunas bloqueadas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get locked columns.Summary-->O comando **LISTBOX Get locked columns** devolve o número de colunas bloquedas no list box designado pelos parâmetros objeto e *\**.<!-- END REF-->

Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia. 

As colunas podem ser desbloqueadas via a Lista de propriedades ou com a ajuda do comando [LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md). Para maior informação, consulte o manual de *Desenho*.

Se uma coluna é inserida ou é eliminada por programação dentro de uma área de bloqueio, o número de colunas devolvidas por este comando têm em conta esta mudança.  
 No entanto, o comando não tem em conta o estado visível/invisível das colunas.

#### Ver também 

[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1152 |
| Thread-seguro | &check; |
| Proibido no servidor ||


