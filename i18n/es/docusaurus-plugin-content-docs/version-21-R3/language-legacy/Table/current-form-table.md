---
id: current-form-table
title: Current form table
slug: /commands/current-form-table
displayed_sidebar: docs
---

<!--REF #_command_.Current form table.Syntax-->**Current form table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current form table.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Puntero hacia la tabla del formulario de salida actual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.Current form table.Summary-->El comando Current form table devuelve el puntero hacia la tabla del formulario en pantalla o impreso en el proceso actual.<!-- END REF-->

La función devuelve Nil en los siguientes casos:

* No hay formulario mostrado o impreso en el proceso actual,
* El formulario actual es un formulario de proyecto.

Si hay varias ventanas abiertas en el proceso actual (significa que la última ventana abierta es la ventana activa actual), el comando devuelve un puntero hacia la tabla del formulario que aparece en la ventana activa.

Si el formulario mostrado actualmente es el formulario detallado de un área de subformulario, usted se encuentra en entrada de datos e hizo doble clic en un registro o subregistro en un área de subformulario de doble clic. En este caso, el comando devuelve:

* El puntero hacia la tabla mostrada en el área del subformulario, si el subformulario muestra una tabla.
* Un puntero no significativo, si el área de subformulario muestra una subtabla.

## Ejemplo 

En su aplicación, utiliza la siguiente convención cuando visualiza un registro:  
Si la variable *vsCurrentRecord* está presente en un formulario, muestra “Nuevo registro” si está trabajando con un nuevo registro. Si está trabajando con el registro 56 de una selección compuesta por 5200 registros, muestra “56 de 5200”.

Para esto, utilice el método de objeto para crear la variable *vsCurrentRecord*, luego cópielo y péguelo en todos sus formularios:

```4d
  // Método de objeto de la variable no editable vsCurrentRecord
 Case of
    :(Form event code=On Load)
       C_STRING(31;vsCurrentRecord)
       var $vpParentTable : Pointer
       var $vlRecordNum : Integer
       $vpParentTable:=Current form table
       $vlRecordNum:=Record number($vpParentTable->)
       Case of
          :($vlRecordNum=-3)
             vsCurrentRecord:="New Record"
          :($vlRecordNum=-1)
             vsCurrentRecord:="No Record"
          :($vlRecordNum>=0)
             vsCurrentRecord:=String(Selected record number($vpParentTable->))+" of "+
             String(Records in selection($vpParentTable->))
       End case
 End case
```

## Ver también 

[DIALOG](../commands/dialog)  
[FORM SET INPUT](../commands/form-set-input)  
[FORM SET OUTPUT](../commands/form-set-output)  
[PRINT SELECTION](../commands/print-selection)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 627 |
| Hilo seguro | no |



