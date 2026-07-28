---
id: contextual-click
title: Contextual click
slug: /commands/contextual-click
displayed_sidebar: docs
---

<!--REF #_command_.Contextual click.Syntax-->**Contextual click**  : Boolean<!-- END REF-->
<!--REF #_command_.Contextual click.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Verdadero si se detecta un clic contextual, de lo contrario Falso |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6.8.1|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Contextual click.Summary-->El comando Contextual click devuelve Verdadero si un se ha efectuado un clic contextua<!-- END REF-->l:

* Bajo Windows y Mac OS, los clics contextuales se efectúan con el botón derecho del ratón.
* Bajo Mac OS, los clics contextuales también pueden generarse utilizando la combinación **Control+clic**.

Este comando debe utilizarse sólo en el contexto del evento de formulario On clicked. Por lo tanto es necesario verificar en modo Diseño que el evento haya sido seleccionado correctamente en las propiedades del formulario y/o del objeto específico. 

## Ejemplo 

Este método, combinado con un área desplegable, le permite cambiar el valor de un elemento array utilizando un menú contextual: 

```4d
 If(Contextual click)
    If(Pop up menu("True;False")=1)
       miArray{miArray}:="True"
    Else
       miArray{miArray}:="False"
    End if
 End if
```

## Ver también 

[Form event code](../commands/form-event-code)  
[Right click](../commands/right-click)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 713 |
| Hilo seguro | no |



