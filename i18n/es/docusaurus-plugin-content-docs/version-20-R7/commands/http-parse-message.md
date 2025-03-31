---
id: http-parse-message
title: HTTP Parse message
slug: /commands/http-parse-message
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Parse message.Syntax-->**HTTP Parse message** ( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF-->

<!--REF #_command_.HTTP Parse message.Params-->

| Parámetros | Tipo       |                             | Descripción                                                   |
| ---------- | ---------- | --------------------------- | ------------------------------------------------------------- |
| data       | Text, Blob | &#8594; | Datos a analizar                                              |
| Resultado  | Object     | &#8592; | Objeto, cada propiedad es parte de los datos de varias partes |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R4       | Añadidos       |

</details>

#### Descripción

The `HTTP Parse message` command <!--REF #_command_.HTTP Parse message.Summary-->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Cada propiedad del objeto devuelto corresponde a una parte de los datos multiparte<!-- END REF -->.

:::info

El propio HTTP es un protocolo de comunicación sin estado. En este marco, los clientes inician la comunicación enviando mensajes de "petición" a los servidores, especificando detalles como el método, el objetivo, los encabezados, el contenido, etc. Los servidores, a su vez, responden con mensajes de "respuesta" que incluyen los mismos detalles. `HTTP Parse message` analiza el mensaje "request" o "response" en un objeto estructurado.

:::

#### Ejemplo

En el siguiente ejemplo, analizamos los datos de un archivo de texto que contiene peticiones HTTP.

Este es el contenido del archivo:

```
POST /batch/gmail/v1/ HTTP/1.1
Accept-Encoding: gzip, deflate
Authorization: Bearer xxxxxx
Connection: Close
Content-Length: 442
Content-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8
Date: Wed, 29 Nov 2023 13:51:35 GMT
Host: gmail.googleapis.com
User-Agent: 4D/20.4.0


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item1>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item2>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1

--batch_19438756D576A14ABA87C112F56B9396--
```

Para analizar el archivo:

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}],
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

#### Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1824                        |
| Hilo seguro       | &cross; |
