---
id: listbox-get-column-width
title: LISTBOX Get column width
slug: /commands/listbox-get-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column width.Syntax-->**LISTBOX Get column width** ( {* ;} *objeto* {; *larguraMin* {; *larguraMax*}} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get column width.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| larguraMin | Integer | &#8592; | Largura mínima da coluna (em pixels) |
| larguraMax | Integer | &#8592; | Largura máxima da coluna (em píxels) |
| Resultado da função | Integer | &#8592; | Largura da coluna (em pixels) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX Get column width.Summary-->O comando LISTBOX Get column width devolve a largura (em pixels) da coluna designada pelos parâmetros *objeto* e *\*.<!-- END REF-->* Pode passar indiferentemente uma coluna ou um título de coluna de list box no parâmetro *objeto*. 

Se passa o parâmetro opcional \*, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

LISTBOX Get column width pode devolver nos parâmetros *larguraMin e* *larguraMax* os limites de redimensionamento da coluna. Estes limites podem ser definidos utilizando o comando [LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md "LISTBOX SET COLUMN WIDTH").   
Se não tiver definido nenhum valor de largura mínima ou máxima para a coluna, o parâmetro correspondente devolve 0\. 

#### Ver também 

[LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md)  