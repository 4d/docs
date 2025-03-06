---
id: listbox-set-static-columns
title: LISTBOX SET STATIC COLUMNS
slug: /commands/listbox-set-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Syntax-->**LISTBOX SET STATIC COLUMNS** ( {* ;} *objeto* ; *numColunas* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| numColunas | Integer | &#8594;  | Número de colunas à converter estáticas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Summary-->O comando **LISTBOX SET STATIC COLUMNS** define as primeiras *numColunas* colunas (começando pela esquerda) no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

As colunas estáticas não podem mover-se no list box.

**Nota:** as colunas estáticas e as colunas bloqueadas são duas funções independentes. Para maior informação, consulte o manual de *Desenho*.

#### Ver também 

[LISTBOX Get static columns](listbox-get-static-columns.md)  
[LISTBOX SET LOCKED COLUMNS](listbox-set-locked-columns.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1153 |
| Thread-seguro | &cross; |


