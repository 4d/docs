---
id: listbox-moved-row-number
title: LISTBOX MOVED ROW NUMBER
slug: /commands/listbox-moved-row-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Syntax-->**LISTBOX MOVED ROW NUMBER** ( * ; *objeto* : Text ; *antPosiçao* : Integer ; *novaPosiçao* : Integer )<br/>**LISTBOX MOVED ROW NUMBER** ( *objeto* : Variable ; *antPosiçao* : Integer ; *novaPosiçao* : Integer )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| antPosiçao | Integer | &#8592; | Posição prévia da fila movimentada |
| novaPosiçao | Integer | &#8592; | Nova posição da fila movimentada |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|12|Renomear|
|11 SQL Release 2|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Summary-->O comando LISTBOX MOVED ROW NUMBER devolve dois números em *antPosição* e *novPosição* indicando respectivamente a posição anterior e a nova posição da fila movida no list box, especificados pelos parâmetros *objeto* e *\**.<!-- END REF-->

**Nota:** só pode mover as linhas nos list box de tipo array.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção . 

Este comando deve ser utilizado com o evento de formulário On row moved (ver o comando [Form event code](../commands/form-event-code)). 

**Nota:** este comando não considera o estado oculto/mostrado das linhas do list box. 

## Ver também 

[Form event code](../commands/form-event-code)  
[LISTBOX MOVED COLUMN NUMBER](../commands/listbox-moved-column-number)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 837 |
| Thread-seguro | no |



