---
id: listbox-set-grid-color
title: LISTBOX SET GRID COLOR
slug: /commands/listbox-set-grid-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID COLOR.Syntax-->**LISTBOX SET GRID COLOR** ( {* ;} *objeto* ; *cor* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID COLOR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| cor | Text, Integer | &#8594;  | Valor RGB da cor |
| horizontal | Boolean | &#8594;  | Use a cor para linhas de grade horizontais |
| vertical | Boolean | &#8594;  | Use a cor para linhas de grade vertical |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SET GRID COLOR.Summary-->O comando **LISTBOX SET GRID COLOR** lhe permite modificar a cor da grade do objeto list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*..

Passe no parâmetro *cor* um valor de cor RGB. Para maior informação sobre as cores RGB, consulte a descrição do comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md)..

Os parâmetros *horizontal* e *vertical* lhe permitem especificar as linhas as quais deseja dar cor:

* Se passar [True](true.md "True") em *horizontal*, a cor será aplicada às linhas horizontais da matriz. Se passa [False](false.md "False"), a cor das linhas horizontais não mudará.
* Se passar [True](true.md "True") em *vertical*, a cor se aplicará às linhas verticais da matriz. Se passar [False](false.md "False"), a cor das linhas verticais não mudará

#### Ver também 

[LISTBOX GET GRID COLORS](listbox-get-grid-colors.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 842 |
| Thread-seguro | &cross; |


