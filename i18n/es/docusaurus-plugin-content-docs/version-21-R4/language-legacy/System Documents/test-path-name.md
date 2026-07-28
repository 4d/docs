---
id: test-path-name
title: Test path name
slug: /commands/test-path-name
displayed_sidebar: docs
---

<!--REF #_command_.Test path name.Syntax-->**Test path name** ( *nombreRuta* : Text ) : Integer<!-- END REF-->
<!--REF #_command_.Test path name.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreRuta | Text | &#8594; | Ruta de acceso a un directorio, carpeta o documento (sintaxis del sistema) |
| Resultado | Integer | &#8592; | 1, rutaAcceso es un documento existente 0, rutaAcceso es un directorio o carpeta existente <0, ruta de acceso incorrecta, código de error del administrador de archivos del sistema |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.Test path name.Summary-->La función Test path name verifica si un documento o carpeta cuyo nombre o ruta de acceso se pasa en *rutaAcceso* está presente en el disco.<!-- END REF--> Puede pasar una ruta de acceso relativa o absoluta, expresada en la [sintaxis del sistema actual](../../Concepts/paths.md#platform-specific-syntax).

Si se encuentra un documento, Test path name devuelve 1. Si se encuentra una carpeta, Test path name devuelve 0.

4D ofrece las siguientes constantes predefinidas:

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is a document | Entero largo | 1     |
| Is a folder   | Entero largo | 0     |

  
Si no se encuentra ningún documento o carpeta, Test path name devuelve un valor negativo (por ejemplo -43 para "Archivo no encontrado").

## Ejemplo 

En Windows, el siguiente ejemplo prueba la presencia del documento "Journal.txt" en la carpeta "Data" del proyecto, si no lo encuentra lo crea:

```4d
 If(Test path name("\Data\Journal.txt")#Is a document)
    $vhDocRef:=Create document("\Data\Journal.txt")
    If(OK=1)
       CLOSE DOCUMENT($vhDocRef)
    End if
 End if
```

## Ver también 

[Convert path system to POSIX](../commands/convert-path-system-to-posix)  
[Create document](../commands/create-document)  
[CREATE FOLDER](../commands/create-folder)  
[Object to path](../commands/object-to-path)  
[Path to object ](../commands/path-to-object)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 476 |
| Hilo seguro | yes |


