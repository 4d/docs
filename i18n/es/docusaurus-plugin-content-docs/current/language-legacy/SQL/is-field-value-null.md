---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *unCampo* : Field ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594; | Campo a evaluar |
| Resultado | Boolean | &#8592; | True = campo es NULL, False = campo no es NULL |
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

<!--REF #_command_.Is field value Null.Summary-->El comando Is field value Nulldevuelve **True** si el campo designado por el parámetro *unCampo* contiene el valor NULL y de lo contrario **False**.<!-- END REF-->

El valor NULL es utilizado por el motor SQL de 4D. Para mayor información, consulte el manual *Manual de SQL*.

El valor devuelto por este comando sólo tiene sentido si la opción "*Mapear valores NULOS a valores vacíos*" no está seleccionada en la definición del campo del editor de estructura. De lo contrario, siempre devuelve **False**.

**Nota:** este comando no se puede utilizar con objetos y propiedades de objetos. Los valores nulos en los campos objeto se manejan a través del comando [Null](../commands/null), 

## Ver también 

[Null](../commands/null)  
[SET FIELD VALUE NULL](../commands/set-field-value-null)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 964 |
| Hilo seguro | yes |


