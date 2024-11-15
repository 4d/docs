---
id: listbox-get-static-columns
title: LISTBOX Get static columns
slug: /commands/listbox-get-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get static columns.Syntax-->**LISTBOX Get static columns** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get static columns.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| resultado | Integer | &#8592; | Número de colunas estáticas |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX Get static columns.Summary-->O comando **LISTBOX Get static columns** devolve o número de colunas estáticas no list box designado pelos parâmetros objeto e *\**.<!-- END REF--> 

Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia. 

As colunas estáticas podem ser definidas via a Lista de propriedades ou com a ajuda do comando [LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md).

Se uma coluna é inserida ou é eliminada por programação dentro de uma conjunto de colunas estáticas, o número de colunas devolvidas por este comando têm em conta esta mudança.  
 No entanto, o comando não tem em conta o estado visível/invisível das colunas.

**Nota:** as colunas estáticas e as columnas bloqueadas são duas funções independentes. Para maior informação, consulte o manual de *Desenho*.

#### Ver também 

[LISTBOX SET STATIC COLUMNS](listbox-set-static-columns.md)  