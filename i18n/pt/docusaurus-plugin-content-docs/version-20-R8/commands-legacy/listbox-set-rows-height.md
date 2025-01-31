---
id: listbox-set-rows-height
title: LISTBOX SET ROWS HEIGHT
slug: /commands/listbox-set-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Syntax-->**LISTBOX SET ROWS HEIGHT** ( {* ;} *objeto* ; *altura* {; unidade da altura} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| altura | Integer | &#8594;  | Altura da linha (em pixels) |
| unidade da altura | Inteiro longo | &#8594;  | 0 ou se omitido = pixels, 1=linhas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Summary-->O comando LISTBOX SET ROWS HEIGHT lhe permite modificar por programação a altura das filas do objeto list box designado pelos parâmetros *objeto* e *\**.<!-- END REF--> 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

Por padrão, se omitir o parâmetro unidade, a altura é expressada en pixels. Para modificar a unidade, no parâmetro unidade passe uma das seguintes constantes, as quais se encontram no tema *List box*:  
  
| Constante | Tipo          | Valor | Comentário                                                                                 |
| --------- | ------------- | ----- | ------------------------------------------------------------------------------------------ |
| lk lines  | Inteiro longo | 1     | A altura designa um número de linhas. 4D calcula a altura de uma linha em função da fonte. |
| lk pixels | Inteiro longo | 0     | A altura é o número de pixels (por padrão).                                                |

Nota: para mais informação sobre o cálculo das alturas das linhas, consulte o manual de Desenho.

#### Ver também 

[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 835 |
| Thread-seguro | &cross; |


