---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| horizontal | Boolean | &#8594;  | True=mostrar; False=ocultar |
| vertical | Boolean | &#8594;  | True=mostrar; False=ocultar |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX SET GRID.Summary-->O comando **LISTBOX SET GRID** lhe permite mostrar ou ocultar as linhas horizontais e verticais que compõe a matriz no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF--> 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*

Passe nos parâmetros *horizontal* e *vertical* os valores booleanos que indicam se as linhas da matriz devem ser mostradas ([True](true.md "True")) ou ocultas ([False](false.md "False")). A matriz é mostrada por padrão 

#### Ver também 

[LISTBOX GET GRID](listbox-get-grid.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  