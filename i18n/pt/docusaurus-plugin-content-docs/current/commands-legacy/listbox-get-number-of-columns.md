---
id: listbox-get-number-of-columns
title: LISTBOX Get number of columns
slug: /commands/listbox-get-number-of-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of columns.Syntax-->**LISTBOX Get number of columns** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of columns.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Integer | &#8592; | Número de colunas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX Get number of columns.Summary-->O comando LISTBOX Get number of columns devolve o número total de colunas (visíveis ou invisíveis) presentes no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

#### Ver também 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 831 |
| Thread-seguro | &check; |
| Proibido no servidor ||


