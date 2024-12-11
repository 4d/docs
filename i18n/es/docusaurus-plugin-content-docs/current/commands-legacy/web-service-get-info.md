---
id: web-service-get-info
title: WEB SERVICE Get info
slug: /commands/web-service-get-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE Get info.Syntax-->**WEB SERVICE Get info** ( *tipoInfo* ) : Text<!-- END REF-->
<!--REF #_command_.WEB SERVICE Get info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoInfo | Integer | &#8594;  | Información a recuperar |
| Resultado | Text | &#8592; | Información sobre el último error SOAP |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SERVICE Get info.Summary-->El comando **WEB SERVICE Get info** devuelve la información sobre todo error encontrado durante la ejecución de la última petición SOAP enviada a un servicio web remoto.<!-- END REF--> Generalmente, este comando debe llamarse dentro de un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md).

El parámetro *tipoInfo* le permite indicar el tipo de información que quiere obtener. Debe pasar una de las constantes listadas a continuación, ubicada en el tema *Servicios Web (Cliente)*:  
  
| Constante                    | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------- | ------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service detailed message | Entero largo | 1     | Mensaje detallado que describe el error. El tipo de mensaje difiere según el tipo de error principal. <br/>- Si el error principal = 9910 (Error Soap): se devuelve la causa del error SOAP (ej.: “el método remoto no existe”).<br/>- Si el error principal = 9911 (Error de analizador xml): se devuelve la ubicación del error en el documento XML.<br/>- Si el error principal = 9912 (Error HTTP):<br/>- Si el error HTTP se ubica en el intervalo \[300-400\] (problemas relacionados con la ubicación del documento solicitado), se devuelve la nueva ubicación del URL solicitado. <br/>- Para todo otro código de error HTTP, se devuelve el <body>. <br/>- Si el error principal = 9913 (Error de red): se devuelve la causa del error de red (ej.: “ServerAddress: error DNS”)<br/>- Si el error principal = 9914 (Error interno): se devuelve la causa del error interno |
| Web Service error code       | Entero largo | 0     | Código del error principal (definido por 4D). Este código también es devuelto en la variable sistema Error.<br/>Lista de códigos que pueden ser devueltos:<br/>9910: Error Soap (ver también Web Service Fault Actor)<br/>9911: Error de analizador xml<br/>9912: Error HTTP (ver también Web Service HTTP Error code)<br/>9913: Error red<br/>9914: Error interno.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Web Service fault actor      | Entero largo | 3     | Causa del error (devuelto por el protocolo SOAP, a utilizar en caso de error principal 9910).<br/>- Version Mismatch <br/>- Must Understand (un parámetro definido como obligatorio no puede ser interpretado por el servidor)<br/>- Sender Fault<br/>- Receiver Fault<br/>- Encoding Unknown                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Web Service HTTP status code | Entero largo | 2     | Código del error HTTP (a utilizar en caso de error principal 9912).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

  
Se devuelve una cadena vacía cuando no hay información disponible, en particular si la última petición SOAP no generó errores. 


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 780 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


