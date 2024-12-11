---
id: listbox-set-column-width
title: LISTBOX SET COLUMN WIDTH
slug: /commands/listbox-set-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Syntax-->**LISTBOX SET COLUMN WIDTH** ( {* ;} *objeto* ; *largura* {; *larguraMin* {; *larguraMax*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| largura | Integer | &#8594;  | Largura da coluna (em píxels) |
| larguraMin | Integer | &#8594;  | Largura mínima da coluna (em pixels) |
| larguraMax | Integer | &#8594;  | Largura máxima da coluna (em pixels) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Summary-->O comando LISTBOX SET COLUMN WIDTH le permite modificar por programação a largura de uma ou todas as colunas do objeto (list box, coluna ou título) designado utilizando os parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

Passe no parâmetro *largura* a novo largura (em pixels) do objeto.   
• Se *objeto* designa o objeto list box, todas as colunas do list box são redimensionadas.  
• Se *objeto* designa uma coluna ou um título de coluna, só a coluna designada é redimensionada. 

Os parâmetros opcionais *larguraMin e* *larguraMax* permitem definir os limites para o redimensionamento manual da coluna. Pode passar em larguraMin e larguraMax respectivamente os valores da largura mínima e máxima, expresso em pixels. Se deseja que o usuário não possa redimensionar a coluna, deve passar o mesmo valor em *largura*, *largura* *Min e* *largura* *Max*. 

#### Ver também 

[LISTBOX Get column width](listbox-get-column-width.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 833 |
| Thread-seguro | &check; |
| Proibido no servidor ||


