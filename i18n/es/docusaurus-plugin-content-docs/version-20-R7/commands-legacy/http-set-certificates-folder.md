---
id: http-set-certificates-folder
title: HTTP SET CERTIFICATES FOLDER
slug: /commands/http-set-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Syntax-->**HTTP SET CERTIFICATES FOLDER** ( *carpetaCertificados* )<!-- END REF-->
<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| carpetaCertificados | Text | &#8594;  | Ruta y nombre de la carpeta de certificados del cliente |

<!-- END REF-->

:::info Compatibilidad

Este comando se mantiene sólo por razones de compatibilidad. Ahora se recomienda utilizar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Descripción 

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Summary-->El comando **HTTP SET CERTIFICATES FOLDER** permite modificar la carpeta de certificados cliente activa para el conjunto de los procesos en la sesión actual.<!-- END REF-->

La carpeta de certificados cliente es en la cual 4D busca los archivos de certificados cliente que son requeridos por los servidores web. Por defecto, siempre y cuando el comando **HTTP SET CERTIFICATES FOLDER** no se ejecute, 4D utiliza una carpeta llamada "ClientCertificatesFolder " que se crea junto al archivo de estructura. Esta carpeta se crea únicamente cuando es necesario.  
  
En 4D v14, ahora es posible utilizar varios certificados clientes.  
  
En *carpetaCertificados*, pase la ruta de acceso de la carpeta personalizada que contiene los certificados clientes. Puede pasar una ruta de acceso relativa al archivo de estructura de la aplicación, o una ruta de acceso absoluta. La ruta debe ser expresada con la sintaxis del sistema, por ejemplo:

* (OS X): Disk:Applications:myserv:folder
* (Windows): C:\\Applications\\myserv\\folder

Una vez ejecutado este comando, la nueva ruta se tiene en cuenta inmediatamente por comandos tales como [HTTP Request](http-request.md) que se ejecuten después (no es necesario reiniciar la aplicación). Se utiliza en todos los procesos de la base.

Si la carpeta especificada no existe en la ubicación definida, o si la ruta de acceso pasada en *carpetaCertificados* no es válida, se genera un error. Puede interceptar este error utilizando un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md).

#### Certificados SSL 

Como se describe en [esta página](https://developer.4d.com/docs/es/Admin/tls/), los certificados SSL gestionados por 4D 4D deben estar en **PEM format**. Si su proveedor de certificados (por ejemplo, [startssl](https://www.startssl.com/)) le envía un certificado que está en un formato binario como .crt, .pfx o .p12 (el formato también depende de su navegador), tiene que convertirlo al formato PEM para utilizarlo. Hay sitios web como *sslshopper* donde puede hacer esta conversión en línea.

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

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  
[HTTP Get certificates folder](http-get-certificates-folder.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1306 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


