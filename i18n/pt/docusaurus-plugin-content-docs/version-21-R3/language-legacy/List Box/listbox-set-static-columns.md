---
id: listbox-set-static-columns
title: LISTBOX SET STATIC COLUMNS
slug: /commands/listbox-set-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Syntax-->**LISTBOX SET STATIC COLUMNS** ( * ; *objeto* : Text ; *numColunas* : Integer )<br/>**LISTBOX SET STATIC COLUMNS** ( *objeto* : Field, Variable ; *numColunas* : Integer )<!-- END REF-->
<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594; | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| numColunas | Integer | &#8594; | Número de colunas à converter estáticas |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Summary-->O comando **LISTBOX SET STATIC COLUMNS** define as primeiras *numColunas* colunas (começando pela esquerda) no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF-->

As colunas estáticas não podem mover-se no list box.

**Nota:** as colunas estáticas e as colunas bloqueadas são duas funções independentes. Para maior informação, consulte o manual de *Desenho*.

## Ver também 

[LISTBOX Get static columns](../commands/listbox-get-static-columns)  
[LISTBOX SET LOCKED COLUMNS](../commands/listbox-set-locked-columns)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1153 |
| Thread-seguro | no |


