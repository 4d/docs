---
id: object-get-minimum-value
title: OBJECT GET MINIMUM VALUE
slug: /commands/object-get-minimum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Syntax-->**OBJECT GET MINIMUM VALUE** ( * ; *objeto* : Text ; *valorMin* : Date, Time, Real )<br/>**OBJECT GET MINIMUM VALUE** ( *objeto* : Field, Variable ; *valorMin* : Date, Time, Real )<!-- END REF-->
<!--REF #_command_.OBJECT GET MINIMUM VALUE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594; | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| valorMin | Date, Time, Real | &#8592; | Valor mínimo atual do objeto |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT GET MINIMUM VALUE.Summary-->O comando **OBJECT GET MINIMUM VALUE** devolve, na variável *valorMin*, o valor mínimo atual do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\**.<!-- END REF-->

A propriedade "Valor mínimo" pode ser definida utilizando a Lista de propriedades em modo Desenho, ou utilizando o comando [OBJECT SET MINIMUM VALUE](../commands/object-set-minimum-value).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em lugar de uma cadeia (campo ou variável objeto unicamente).

## Ver também 

[OBJECT GET MAXIMUM VALUE](../commands/object-get-maximum-value)  
[OBJECT SET MINIMUM VALUE](../commands/object-set-minimum-value)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1243 |
| Thread-seguro | no |


