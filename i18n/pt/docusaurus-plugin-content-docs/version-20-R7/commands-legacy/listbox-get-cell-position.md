---
id: listbox-get-cell-position
title: LISTBOX GET CELL POSITION
slug: /commands/listbox-get-cell-position
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL POSITION.Syntax-->**LISTBOX GET CELL POSITION** ( {* ;} *objeto* {; *X* ; *Y* }; *coluna* ; *linha* {; *varCol*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL POSITION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| X | Real | &#8594;  | Horizontal coordinate of mouse |
| Y | Real | &#8594;  | Vertical coordinate of mouse |
| coluna | Integer | &#8592; | Número de coluna |
| linha | Integer | &#8592; | Número da fila |
| varCol | Pointer | &#8592; | Ponteiro para a variável coluna |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX GET CELL POSITION.Summary-->O comando LISTBOX GET CELL POSITION devolve os números da *coluna* e da *fila* correspondentes a localização no list box (designado por *\** e *objeto*) do último clique ou as coordenadas vertical e horizontal do mouse.<!-- END REF-->

Este comando devolve as coordenadas de um clique ou de uma ação de seleção mesmo quando a entrada de dados não é permitida no list box.

Se forem passados os parâmetros X e Y, este comando devolve os números de coluna e fila correspondentes às coordenadas do mouse, do contrário este comando devolve os números de coluna e fila de um clique ou de uma ação de seleção. O comando devolverá valores válidos mesmo quando a entrada de dados não esteja permitida na list box.

**Notas:**

* O número retornado no parâmetro linha não leva em consideração estados escondidos/exibidos de linhas list box.
* Se uma célula em uma coluna falsa for clicada, o parâmetro linha contém contains "X+1", onde X é o número de colunas existentes. (Uma coluna falsa pode ser adicionada automaticamente quando a opção "Redimensionamento de coluna" for selecionada; para saber mais, veja o parágrafo *Redimensionar tema Opcoes*).
* Em um list box hierárquico, o valor da coluna leva em consideração as colunas fusionadas para representar a hierarquia, como explicaod no parágrafo *Gestão de seleções e de posições*.

O parâmetro opcional *varCol* devolve um ponteiro a variável (ou seja para o array) associado com a coluna.

Quando os parâmetros *X* e *Y* não são utilizados, este comando só pode ser chamado no marco de um list box que gere um dos eventos abaixo: 

* On Clicked e On Double Clicked
* On Before Keystroke e On After Keystroke
* On After Edit
* On Getting Focus e On Losing Focus
* On Data Change
* On Selection Change
* On Before Data Entry

Quando o comando é chamado fora deste contexto, **LISTBOX GET CELL POSITION** devolve 0 em *coluna* e *fila*.

Este comando leva em consideração as ações de seleção ou deseleção realizadas com o mouse, com o teclado, ou utilizando o comando [EDIT ITEM](edit-item.md) (o qual gera o evento On Getting Focus).

Se a seleção é modificada utilizando as flechas do teclado, *coluna* devolve 0\. Nesse caso, o parâmetro *varCol* devolve [Is nil pointer](is-nil-pointer.md) se for passado.

#### Ver também 

[LISTBOX GET CELL COORDINATES](listbox-get-cell-coordinates.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  