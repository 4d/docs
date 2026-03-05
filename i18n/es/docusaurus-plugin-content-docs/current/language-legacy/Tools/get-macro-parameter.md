---
id: get-macro-parameter
title: GET MACRO PARAMETER
slug: /commands/get-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET MACRO PARAMETER.Syntax-->**GET MACRO PARAMETER** ( *selector* : Integer ; *paramText* : Text )<!-- END REF-->
<!--REF #_command_.GET MACRO PARAMETER.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Integer | &#8594; | Selección a utilizar |
| paramText | Text | &#8592; | Texto devuelto |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.GET MACRO PARAMETER.Summary-->El comando GET MACRO PARAMETER devuelve, en el parámetro *paramText*, una parte o la totalidad del texto del método desde el cual se llama.<!-- END REF--> 

El parámetro *selector* permite definir el tipo de información a recuperar. Puede pasar una de las siguientes constantes, del tema “”:

| Constante               | Tipo         | Valor |
| ----------------------- | ------------ | ----- |
| Full method text        | Entero largo | 1     |
| Highlighted method text | Entero largo | 2     |

Si pasa Full method text en *selector*, todo el texto del método se devolverá en *paramText*. Si pasa Highlighted method text en *selector*, únicamente el texto seleccionado en método se devolverá en *paramText*.

## Ejemplo 

Consulte el ejemplo del comando [SET MACRO PARAMETER](set-macro-parameter.md "SET MACRO PARAMETER").

## Ver también 

[SET MACRO PARAMETER](../commands/set-macro-parameter)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 997 |
| Hilo seguro | no |


