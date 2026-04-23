---
id: open-font-picker
title: OPEN FONT PICKER
slug: /commands/open-font-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN FONT PICKER.Syntax-->**OPEN FONT PICKER**<!-- END REF-->
<!--REF #_command_.OPEN FONT PICKER.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OPEN FONT PICKER.Summary-->El comando **OPEN FONT PICKER** muestra la caja de diálogo de selección de fuente del sistema.<!-- END REF-->  
  
**Nota**: esta caja de diálogo es modal en Windows pero no en macOS.  
  
Si el usuario selecciona una fuente y/o un estilo y valida la caja de diálogo, los cambios se aplican a la selección actual de texto en el objeto con el foco, si la propiedad "Aceptar selector color/fuente" está seleccionada para este objeto (ver el manual de *Diseño*). De lo contrario, el comando no hace nada.  
  
Si se cambia el tipo de fuente, el evento formulario On After Edit se genera para el objeto.

## Ejemplo 

En un formulario, usted desea añadir un botón para mostrar el selector de fuente con el fin de permitir a los usuarios modificar la fuente o el estilo de un área de variable texto. Asegúrese de que:

* la variable texto tiene la propiedad "Permitir selector fuente/color" seleccionada.
* la propiedad "Enfocable" para el botón ha sido deseleccionada.

Este es el código del botón:

```4d
 Case of
    :(FORM Event.code=On Clicked)
       GOTO OBJECT(textVar) //da el foco a la variable
       OPEN FONT PICKER
 End case
```

## Ver también 

[OPEN COLOR PICKER](../commands/open-color-picker)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1303 |
| Hilo seguro | no |


