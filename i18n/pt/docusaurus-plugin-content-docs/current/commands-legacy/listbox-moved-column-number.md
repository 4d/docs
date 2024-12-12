---
id: listbox-moved-column-number
title: LISTBOX MOVED COLUMN NUMBER
slug: /commands/listbox-moved-column-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Syntax-->**LISTBOX MOVED COLUMN NUMBER** ( {* ;} *objeto* ; *antPosiçao* ; *novaPosição* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| antPosiçao | Integer | &#8592; | Posição prévia da coluna movimentada |
| novaPosição | Integer | &#8592; | Nova posição da coluna movimentada |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Summary-->O comando LISTBOX MOVED COLUMN NUMBER devolve dois números em *antPosição* e *novPosição* indicando respectivamente a posição anterior e a nova posição da coluna movida no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

Este comando deve ser utilizado com o evento de formulário On column moved (ver o comando [Form event](../commands/form-event.md "Form event")). 

**Nota:** este comando considera as colunas invisíveis.

#### Ver também 

[Form event code](../commands/form-event-code.md)  
[LISTBOX MOVED ROW NUMBER](listbox-moved-row-number.md)  