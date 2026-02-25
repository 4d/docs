---
id: load-variables
title: LOAD VARIABLES
slug: /commands/load-variables
displayed_sidebar: docs
---

<!--REF #_command_.LOAD VARIABLES.Syntax-->**LOAD VARIABLES** ( *doc* : Text ; *variable* : Variable {; *...variable* : Variable} )<!-- END REF-->
<!--REF #_command_.LOAD VARIABLES.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594; | Documento que contiene el o las variables 4D |
| variable | Variable | &#8592; | Variables a recibir los valores |
</div>
<!-- END REF-->

## Descripción 

<!--REF #_command_.LOAD VARIABLES.Summary-->El comando LOAD VARIABLES carga una o varias variables del documento especificado por *documento*.<!-- END REF--> El documento debe haberse creado utilizando el comando [SAVE VARIABLES](save-variables.md "SAVE VARIABLES"). 

Las variables *variable*, *variable2*...*variableN* son creadas; si ya existen, se sobrescriben.

Si pasa una cadena vacía en *documento*, aparece una caja de diálogo estándar de apertura de archivos, permitiendo al usuario seleccionar el documento a abrir. Si se elige un documento, la variable sistema Document contendrá el nombre del documento.

En bases de datos compiladas, cada variable debe ser del mismo tipo que las cargadas del disco.

**Advertencia:** este comando no soporta variables de tipo array. Para variables de tipo array utilice los comandos del tema BLOB.

## Ejemplo 

El siguiente ejemplo carga tres variables de un documento llamado PrefsUsuario:

```4d
 LOAD VARIABLES("PrefsUsuario";vsNombre;vlCodigo;vgIconImagen)
```

## Variables y conjuntos del sistema 

Si las variables se cargan correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0.

## Ver también 

[BLOB TO DOCUMENT](../commands/blob-to-document)  
[BLOB TO VARIABLE](../commands/blob-to-variable)  
[DOCUMENT TO BLOB](../commands/document-to-blob)  
[RECEIVE VARIABLE](../commands/receive-variable)  
[VARIABLE TO BLOB](../commands/variable-to-blob)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 74 |
| Hilo seguro | yes |
| Modifica variables | OK, Document |


