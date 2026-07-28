---
id: verify-current-data-file
title: VERIFY CURRENT DATA FILE
slug: /commands/verify-current-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY CURRENT DATA FILE.Syntax-->**VERIFY CURRENT DATA FILE** ({ *objetos* : Integer ; *opciones* : Integer ; *metodo* : Text {; *arrayTablas* : Integer array {; *arrayCampos* : Integer array}} })<!-- END REF-->
<!--REF #_command_.VERIFY CURRENT DATA FILE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objetos | Integer | &#8594; | Objetos a verificar |
| opciones | Integer | &#8594; | Opciones de verificación |
| metodo | Text | &#8594; | Nombre del método 4D de retrollamada |
| arrayTablas | Integer array | &#8594; | Números de las tablas a verificar |
| arrayCampos | Integer array | &#8594; | 2D array, numbers of indexes to be checked |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|15 R3|Modificado|
|11 SQL Release 4|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.VERIFY CURRENT DATA FILE.Summary-->El comando VERIFY CURRENT DATA FILE efectúa una verificación estructural de los objetos encontrados en el archivo de datos abierto actualmente por 4D.<!-- END REF--> 

Este comando tiene un funcionamiento idéntico al del comando [VERIFY DATA FILE](../commands/verify-data-file), excepto que sólo aplica al archivo de datos actual de la base de datos abierta. No son necesarios los parámetros que especifican la estructura y los datos.  
Consulte el comando [VERIFY DATA FILE](../commands/verify-data-file) para la descripción de los parámetros.

Si pasa el comando VERIFY CURRENT DATA FILE sin parámetros, la verificación se lleva a cabo con los valores por defecto de los parámetros:

* *objetos* \= Verificar todos (= valor 16)
* *opciones* \= 0 (se crea el archivo de historial pero sin marca de tiempo)
* *metodo* \= ""
* *arrayTablas* y *arrayCampos* se omiten.

Cuando se ejecuta este comando, el caché de los datos se vacía y todas las operaciones de acceso de datos se bloquean durante la verificación.

Si un archivo de historial se ha generado, su ruta completa se devuelve en la variable sistema *Document*. 

## Variables y conjuntos del sistema 

Si la verificación no se lleva a cabo, se genera un error y la variable de sistema OK se establece en 0. Si se generó un archivo de registro, su nombre de ruta completo se devuelve en la variable de sistema Document.

## Ver también 

[VERIFY DATA FILE](../commands/verify-data-file)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1008 |
| Hilo seguro | yes |
| Modifica variables | OK, Document, error |


