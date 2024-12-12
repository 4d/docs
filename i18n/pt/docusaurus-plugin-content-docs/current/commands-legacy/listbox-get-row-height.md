---
id: listbox-get-row-height
title: LISTBOX Get row height
slug: /commands/listbox-get-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row height.Syntax-->**LISTBOX Get row height**  ( {* ;} *objeto* ; *linha* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string) se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * for omitido) |
| linha | Integer | &#8594;  | Linha list box cuja altura quer obter |
| Resultado | Integer | &#8592; | Altura Linha |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX Get row height.Summary-->O comando **LISTBOX Get row height**  devolve a altura da *fila* especificada no objeto list box designado utilizando o *objeto* e os parâmetros *\**.<!-- END REF-->

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* for um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* for uma variável. Neste caso, se passar uma referência variável em lugar de uma string. Para mais informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

Se a *fila* especificada não existe no list box, o comando devolve 0 (zero).

O valor da altura da linha se expressa:

* na unidade atual definida globalmente para as linhas de list box, seja na lista de Propriedades ou mediante uma chamada previa ao comando [LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md) quando a altura da linha for fixa,
* em píxels quando a altura da línea for variável, ou seja, automática ( ver *Altura linha automática*) ou manejada por um array.

#### Ver também 

[LISTBOX Get auto row height ](listbox-get-auto-row-height.md)  
[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  