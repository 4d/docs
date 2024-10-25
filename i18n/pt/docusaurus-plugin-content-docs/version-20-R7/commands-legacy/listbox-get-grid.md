---
id: listbox-get-grid
title: LISTBOX GET GRID
slug: /commands/listbox-get-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID.Syntax-->**LISTBOX GET GRID** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| horizontal | Boolean | &#8592; | True = visível, False = oculto |
| vertical | Boolean | &#8592; | True = visível, False = oculto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX GET GRID.Summary-->O comando **LISTBOX GET GRID** devolve o estado visível/oculto das linhas horizontais e verticais que compõem a grade do objeto list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passado o parâmetro opcional *\**, indica que el parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, indica que o parâmetro *objeto* é uma variável. Neste caso, passe uma referencia de variável no lugar de uma cadeia. 

O comando devolve nos parâmetros *horizontal* e *vertical*, o valor **True** ou **False** dependendo se as linhas correspondentes são mostradas (True) ou se ocultadas (False). Por defeito, a grade é mostrada.

#### Ver também 

[LISTBOX SET GRID](listbox-set-grid.md)  