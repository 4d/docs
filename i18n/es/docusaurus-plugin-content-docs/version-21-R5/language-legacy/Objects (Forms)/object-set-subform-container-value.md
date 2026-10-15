---
id: object-set-subform-container-value
title: OBJECT SET SUBFORM CONTAINER VALUE
slug: /commands/object-set-subform-container-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Syntax-->**OBJECT SET SUBFORM CONTAINER VALUE** ( *value* : any )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| value | any | &#8594; | Nuevo valor para la fuente de datos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|19 R5|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Summary-->El comando **OBJECT SET SUBFORM CONTAINER VALUE** define el valor actual de la fuente de datos vinculada al contenedor de subformulario mostrado en el formulario padre.<!-- END REF-->

Este comando solo puede utilizarse en el contexto de un formulario utilizado como subformulario. En cualquier otro contexto, no hace nada.

Pase en *value* un valor del mismo tipo que la fuente de datos vinculada al contenedor de subformulario. La fuente de datos debe ser una expresión asignable (ver *Assignable vs non-assignable expressions*), de lo contrario el comando no hace nada. 

Para más información sobre las variables vinculadas y la interacción formulario/subformulario, consulte *Managing the bound variable* en developer.4d.com.

## Ejemplo 

Hay un ejemplo detallado disponible en la sección [OBJECT Get subform container value](../commands/object-get-subform-container-value).

## Ver también 

[Form](../commands/form)  
[OBJECT Get subform container value](../commands/object-get-subform-container-value)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1784 |
| Hilo seguro | no |



