---
id: web-get-server-info
title: WEB Get server info
slug: /commands/web-get-server-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get server info.Syntax-->**WEB Get server info** {( *conCaché* )} : Object<!-- END REF-->
<!--REF #_command_.WEB Get server info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| conCaché | Boolean | &#8594;  | True para devolver la descripción de la caché Web. De lo contrario (por defecto), no se devuelve la descripción de la caché. |
| Resultado | Object | &#8592; | Información sobre el servidor Web en ejecución y el servidor SOAP |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB Get server info.Summary-->El comando **WEB Get server info** devuelve un objeto que contiene información del tiempo de ejecución detallada en la sesión actual del servidor web 4D.<!-- END REF--> La información devuelta incluye el servidor SOAP.

**Nota:** este comando devuelve información de tiempo de ejecución, es decir, parámetros reales utilizados por el servidor web. Estos parámetros pueden diferir de los devueltos por el comando [WEB GET OPTION](web-get-option.md) ya que dependen de la configuración del sistema, los recursos disponibles, etc.

De forma predeterminada, el comando no devuelve la propiedad "caché", ya que puede ser muy grande. Sin embargo, si desea conocer el contenido de la caché, pase True en el parámetro opcional *conCache*.

El objeto devuelto contiene las siguientes propiedades (los nombres de propiedad son sensibles a las mayúsculas y minúsculas):

| **Propiedad**               | **Tipo de valor** | **Descripción**                                                                                                                                                                                                              |
| --------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| started                     | Booleano          | true si se inicia el servidor http, de lo contrario false                                                                                                                                                                    |
| uptime                      | Número            | Tiempo transcurrido desde el último inicio del servidor http                                                                                                                                                                 |
| httpRequestCount            | Número            | Número de visitas HTTP recibidas por el servidor desde que se inició                                                                                                                                                         |
| startMode                   | Cadena            | "automático" si está activada la opción "Iniciar servidor web al arrancar", de lo contrario "manual".                                                                                                                        |
| SOAPServerStarted           | Booleano          | true si se inicia el servidor SOAP, en caso contrario false                                                                                                                                                                  |
| cache                       | Objeto            | *Esta propiedad sólo se incluye si el valor de la propiedad del parámetro cacheInfo es True*. Describe el contenido de la caché del servidor web (ver *Propiedad cache* a continuación)                                      |
| security                    | Objeto            | Estado actual de las distintas opciones de seguridad                                                                                                                                                                         |
| cipherSuite                 | Cadena            | Lista de cifras utilizada por 4D para el protocolo seguro (corresponde al parámetro de la base SSL cipher list)                                                                                                              |
| HTTPEnabled                 | Booleano          | True si HTTP está activado                                                                                                                                                                                                   |
| HTTPSEnabled                | Booleano          | True si HTTPS está activado                                                                                                                                                                                                  |
| HSTSEnabled                 | Booleano          | True si HSTS está activado en el servidor                                                                                                                                                                                    |
| HSTSMaxAge                  | Número            | Edad máxima (en segundos) para HSTS. El valor por defecto es 2 años (63,072,000 segundos).                                                                                                                                   |
| minTLSVersion               | Cadena            | Versión TLS mínima aceptada para las conexiones (corresponde al parámetro de base de datos Min TLS version)                                                                                                                  |
| openSSLVersion              | Cadena            | Versión de la librería OpenSSL utilizada                                                                                                                                                                                     |
| perfectForwardSecrecy       | Booleano          | True si PFS está disponible en el servidor, de lo contrario False                                                                                                                                                            |
| options                     | Objeto            | Estado actual de varias opciones del servidor web estándar                                                                                                                                                                   |
| CORSEnabled                 | Booleano          | True si el servicio CORS está habilitado en el servidor, de lo contrario False (predeterminado)                                                                                                                              |
| CORSSettings                | Colección         | Colección de objetos CORS que definen la lista de host(s) y método(s) permitidos (ver la opción web Web CORS settings)                                                                                                       |
| webCharacterSet             | Cadena            | Nombre de conjunto de caracteres (corresponde a la opción web Web character set)                                                                                                                                             |
| webHTTPCompressionLevel     | Número            | Nivel de compresión para los intercambios HTTP comprimidos (corresponde a la opción web Web HTTP compression level)                                                                                                          |
| webHTTPCompressionThreshold | Number            | Valor de compresión (corresponde a la opción web Web HTTP compression threshold)                                                                                                                                             |
| webHTTPSPortID              | Número            | Número de puerto TCP utilizado por el servidor Web para conexiones seguras (corresponde a la opción web Web HTTPS port ID)                                                                                                   |
| *webInactiveProcessTimeout* | Número            | **No es significativo en el modo de sesiones web escalables, ver *Gestión de las sesiones web (heredado)***. Duración de vida de los procesos de sesión inactivos (corresponde a la opción web Web inactive process timeout) |
| *webInactiveSessionTimeout* | Número            | **No es significativo en el modo de sesiones web escalables, ver** ***Gestión de las sesiones web (heredado)***. Duración de la vida de las sesiones inactivas (corresponde a la opción web Web inactive session timeout)    |
| webIPAddressToListen        | Colección         | La dirección IP en el "formato" definido en el que el servidor web recibe las solicitudes http (corresponde a la opción web Web IP address to listen)                                                                        |
| *webMaxConcurrentProcesses* | Número            | **No es significativo en el modo de sesiones web escalables, ver** ***Gestión de las sesiones web (heredado)***. Número máximo de procesos web concurrentes (corresponde a la opción web Web max concurrent processes)       |
| webPortID                   | Número            | Puerto TCP utilizado por el servidor web (corresponde a la opción web Web port ID)                                                                                                                                           |

**4D Server**: el comando devuelve información sobre el servidor web local. Si desea monitorear el servidor web 4D Server desde un 4D remoto, debe aplicar la propiedad "Ejecutar en el servidor" al método.

##### Propiedad cache 

Si pasa **true** en el parámetro *conCache*, el comando devuelve la propiedad objeto "cache" con el siguiente contenido:

| **Nombre de la propiedad** | **Tipo de valor** | **Descripción**                                                                                                                                   |
| -------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| cacheUsage                 | Número            | Tasa de uso de la caché                                                                                                                           |
| numOfLoads                 | Número            | Número de objetos cargados                                                                                                                        |
| currentSize                | Número            | Tamaño actual de la caché                                                                                                                         |
| maxSize                    | Número            | Tamaño máximo de la caché                                                                                                                         |
| objectMaxSize              | Número            | Tamaño máximo de objetos cargables en la caché                                                                                                    |
| enabled                    | Booleano          | true si la caché del servidor web está activada                                                                                                   |
| nbCachedObjects            | Número            | Número de objetos en la caché                                                                                                                     |
| cachedObjects              | Colección         | Colección de objetos en la caché. Cada objeto en caché es definido por diferentes propiedades (url, mimeType, expirationType, lastModified, etc.) |

#### Ejemplo 

Después de ejecutar el siguiente código:

```4d
 $webServerInfo:=WEB Get server info(True)
```

... $webServerInfo contendrá por ejemplo:

```json
{ 
 "started": true,  
 "uptime": 40,  
 "SOAPServerStarted": true,  
 "startMode": "manual",  
 "httpRequestCount": 0,  
 "options": {  
 "CORSEnabled": false,  
 "CORSSettings": null,  
 "webCharacterSet": "UTF-8",  
 "webHTTPCompressionLevel": 1,  
 "webHTTPCompressionThreshold": 1024,  
 "webHTTPSPortID": 443,  
 "webIPAddressToListen": ["192.168.xxx.xxx"],  
 "webInactiveProcessTimeout": 28800,  
 "webInactiveSessionTimeout": 28800,  
 "webMaxConcurrentProcesses": 100,  
 "webPortID": 80  
 },  
 "security": {  
 "HTTPEnabled": true,  
 "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",  
 "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",  
 "perfectForwardSecrecy": true,  
 "minTLSVersion": "1.2"   
 },  
 "cache": {  
 "cacheUsage": 1,  
 "numOfLoads": 24,  
 "currentSize": 154219,  
 "maxSize": 10485760,  
 "objectMaxSize": 524288,  
 "enabled": true,  
 "nbCachedObjects": 23,  
 "cachedObjects": [  
 {...},{...}  
 ]  
 }  
}
```

#### Ver también 

[License info](license-info.md)  
[Process activity](../commands/process-activity.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1531 |
| Hilo seguro | &check; |


