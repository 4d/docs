---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( * ; *objeto* : Text ; *horizontal* : Boolean ; *vertical* : Boolean )<br/>**LISTBOX SET GRID** ( *objeto* : Field, Variable ; *horizontal* : Boolean ; *vertical* : Boolean )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| horizontal | Boolean | &#8594; | True=mostrar; False=ocultar |
| vertical | Boolean | &#8594; | True=mostrar; False=ocultar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Renomear|
|12|Renomear|
|2004|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.LISTBOX SET GRID.Summary-->O comando **LISTBOX SET GRID** lhe permite mostrar ou ocultar as linhas horizontais e verticais que compõe a matriz no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF--> 

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*

Passe nos parâmetros *horizontal* e *vertical* os valores booleanos que indicam se as linhas da matriz devem ser mostradas ([True](../commands/true)) ou ocultas ([False](../commands/false)). A matriz é mostrada por padrão 

## Ver também 

[LISTBOX GET GRID](../commands/listbox-get-grid)  
[LISTBOX Get property](../commands/listbox-get-property)  
[LISTBOX SET GRID COLOR](../commands/listbox-set-grid-color)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 841 |
| Thread-seguro | no |



