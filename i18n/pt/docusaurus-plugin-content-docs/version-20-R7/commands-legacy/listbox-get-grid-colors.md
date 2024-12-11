---
id: listbox-get-grid-colors
title: LISTBOX GET GRID COLORS
slug: /commands/listbox-get-grid-colors
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID COLORS.Syntax-->**LISTBOX GET GRID COLORS** ( {* ;} *objeto* ; *corH* ; *corV* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID COLORS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| corH | Text, Integer | &#8592; | Valor de cor RGB para as linhas horizontais |
| corV | Text, Integer | &#8592; | Valor de cor RGB para as linhas verticais |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX GET GRID COLORS.Summary-->O comando **LISTBOX GET GRID COLORS** devolve a cor das linhas horizontais e verticais que eles compõem a grade do objeto list box designado pelo objeto de parâmetros *objeto* e *\**.<!-- END REF-->

Se passado o parâmetro opcional *\**, indica que el parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia. 

Em *corH* e *corV*, o comando devolve os valores das cores RGB. O formato de cor depende do tipo de parâmetro que passou em *hCor e* *vCor*:

* Se passar um texto, a cor se expressará como um texto CSS (formato "#rrggbb")
* Se passar um inteiro longo, a cor se expressará como um inteiro longo de 4 bytes (formato 0x00rrggbb).

#### Ver também 

[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1200 |
| Thread-seguro | &check; |
| Proibido no servidor ||


