---
id: listbox-moved-row-number
title: LISTBOX MOVED ROW NUMBER
slug: /commands/listbox-moved-row-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Syntax-->**LISTBOX MOVED ROW NUMBER** ( {* ;} *objeto* ; *antPosiçao* ; *novaPosiçao* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| antPosiçao | Integer | &#8592; | Posição prévia da fila movimentada |
| novaPosiçao | Integer | &#8592; | Nova posição da fila movimentada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Summary-->O comando LISTBOX MOVED ROW NUMBER devolve dois números em *antPosição* e *novPosição* indicando respectivamente a posição anterior e a nova posição da fila movida no list box, especificados pelos parâmetros *objeto* e *\**.<!-- END REF-->

**Nota:** só pode mover as linhas nos list box de tipo array.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

Este comando deve ser utilizado com o evento de formulário On row moved (ver o comando [Form event code](../commands/form-event-code.md)"). 

**Nota:** este comando não considera o estado oculto/mostrado das linhas do list box. 

#### Ver também 

[Form event code](../commands/form-event-code.md)"  
[LISTBOX MOVED COLUMN NUMBER](listbox-moved-column-number.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 837 |
| Thread-seguro | &cross; |


