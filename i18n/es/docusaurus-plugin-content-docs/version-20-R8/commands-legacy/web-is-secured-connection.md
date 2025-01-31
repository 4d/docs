---
id: web-is-secured-connection
title: WEB Is secured connection
slug: /commands/web-is-secured-connection
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is secured connection.Syntax-->**WEB Is secured connection**  : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is secured connection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = la conexión web es segura. False = la conexión web no es segura. |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB Is secured connection.Summary-->El comando **WEB Is secured connection** devuelve un booleano indicando si la conexión al servidor web 4D se efectúo en modo seguro por medio de TSL/SSL (la petición comienza por “https:” en lugar de “http:”).<!-- END REF--> 

* Si la conexión se realiza en TLS o SSL, la función devuelve True.
* Si la conexión se realiza en modo no seguro, la función devuelve False.

**Nota:** para mayor información sobre el protocolo SSL, consulte la sección [WEB SERVICE SET PARAMETER](web-service-set-parameter.md). 

Este comando permite, por ejemplo, rechazar los intentos de conexión en modo no seguro. 

#### Ver también 

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 698 |
| Hilo seguro | &check; |


