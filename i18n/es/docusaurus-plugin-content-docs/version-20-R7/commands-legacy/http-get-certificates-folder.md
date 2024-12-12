---
id: http-get-certificates-folder
title: HTTP Get certificates folder
slug: /commands/http-get-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get certificates folder.Syntax-->**HTTP Get certificates folder**  : Text<!-- END REF-->
<!--REF #_command_.HTTP Get certificates folder.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Ruta completa de la carpeta de certificados activa |

<!-- END REF-->

:::info Compatibilidad

Este comando se mantiene sólo por razones de compatibilidad. Ahora se recomienda utilizar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Descripción 

<!--REF #_command_.HTTP Get certificates folder.Summary-->El comando **HTTP Get certificates folder** devuelve la ruta completa de la carpeta de certificados activa del cliente.<!-- END REF--> 

#### Ejemplo 

Usted quiere cambiar temporalmente la carpeta de certificados:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //guardar carpeta actual
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // ejecución de peticiones específicas
 HTTP SET CERTIFICATES FOLDER($certifFolder) //restablecer la carpeta anterior
```

#### Ver también 

[HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)  