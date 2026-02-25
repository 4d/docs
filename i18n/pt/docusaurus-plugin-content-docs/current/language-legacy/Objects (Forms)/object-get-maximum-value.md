---
id: object-get-maximum-value
title: OBJECT GET MAXIMUM VALUE
slug: /commands/object-get-maximum-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Syntax-->**OBJECT GET MAXIMUM VALUE** ( * ; *objeto* : Text ; *valorMax* : Date, Time, Real )<br/>**OBJECT GET MAXIMUM VALUE** ( *objeto* : Field, Variable ; *valorMax* : Date, Time, Real )<!-- END REF-->
<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594; | Nome de objeto (se * for especificado) ou<br/>Campo ou variável (se * for omitido) |
| valorMax | Date, Time, Real | &#8592; | Valor máximo atual para objeto |
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

<!--REF #_command_.OBJECT GET MAXIMUM VALUE.Summary-->O comando **OBJECT GET MAXIMUM VALUE** devolve, na variável *valorMax*, o valor máximo atual do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\**.<!-- END REF-->

Pode estabelecer a propriedade "Valor máximo" com a lista de propriedades em modo Desenho ou utilizando o comando [OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value).

Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável em lugar de uma cadeia (campo ou variável objeto unicamente).

## Ver também 

[OBJECT GET MINIMUM VALUE](../commands/object-get-minimum-value)  
[OBJECT SET MAXIMUM VALUE](../commands/object-set-maximum-value)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1245 |
| Thread-seguro | no |


