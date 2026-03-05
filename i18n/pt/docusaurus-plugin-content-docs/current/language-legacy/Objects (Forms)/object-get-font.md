---
id: object-get-font
title: OBJECT Get font
slug: /commands/object-get-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font.Syntax-->**OBJECT Get font** ( * ; *objeto* : Text ) : Text<br/>**OBJECT Get font** ( *objeto* : Field, Variable ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get font.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável ou campo |
| objeto | any | &#8594; | Nome de objeto (se * for especificado) ou Variável ou campo (se * for omitido). |
| Resultado | Text | &#8592; | Nome da fonte |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|12|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OBJECT Get font.Summary-->O comando OBJECT Get font devolve o nome da fonte utilizada pelo objeto de formulário designado por *objeto*.<!-- END REF-->

Se passa o parâmetro opcional *\**, indica que o parâmetro objeto é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto é* um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de uma string.

## Ver também 

[OBJECT SET FONT](../commands/object-set-font)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1069 |
| Thread-seguro | no |


