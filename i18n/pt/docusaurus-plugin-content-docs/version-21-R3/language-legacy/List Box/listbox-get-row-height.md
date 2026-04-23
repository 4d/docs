---
id: listbox-get-row-height
title: LISTBOX Get row height
slug: /commands/listbox-get-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row height.Syntax-->**LISTBOX Get row height**  ( * ; *objeto* : Text ; *linha* : Integer ) : Integer<br/>**LISTBOX Get row height**  ( *objeto* : Field, Variable ; *linha* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row height.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string) se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * for omitido) |
| linha | Integer | &#8594; | Linha list box cuja altura quer obter |
| Resultado | Integer | &#8592; | Altura Linha |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.LISTBOX Get row height.Summary-->O comando **LISTBOX Get row height**  devolve a altura da *fila* especificada no objeto list box designado utilizando o *objeto* e os parâmetros *\**.<!-- END REF-->

Se passar o parâmetro opcional *\**, indica que o parâmetro *objeto* for um nome de objeto (string). Se não passar este parâmetro, indica que o parâmetro *objeto* for uma variável. Neste caso, se passar uma referência variável em lugar de uma string. Para mais informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

Se a *fila* especificada não existe no list box, o comando devolve 0 (zero).

O valor da altura da linha se expressa:

* na unidade atual definida globalmente para as linhas de list box, seja na lista de Propriedades ou mediante uma chamada previa ao comando [LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height) quando a altura da linha for fixa,
* em píxels quando a altura da línea for variável, ou seja, automática ( ver *Altura linha automática*) ou manejada por um array.

## Ver também 

[LISTBOX Get auto row height ](../commands/listbox-get-auto-row-height)  
[LISTBOX Get rows height](../commands/listbox-get-rows-height)  
[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1408 |
| Thread-seguro | no |


