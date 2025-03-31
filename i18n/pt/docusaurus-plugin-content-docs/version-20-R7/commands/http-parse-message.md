---
id: http-parse-message
title: HTTP Parse message
slug: /commands/http-parse-message
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Parse message.Syntax-->**HTTP Parse message** ( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF-->

<!--REF #_command_.HTTP Parse message.Params-->

| Parâmetro | Tipo       |                             | Descrição                                                       |
| --------- | ---------- | --------------------------- | --------------------------------------------------------------- |
| data      | Text, Blob | &#8594; | Dados a serem analisados                                        |
| Resultado | Object     | &#8592; | Objeto, cada propriedade é uma parte dos dados de várias partes |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R4   | Adicionado |

</details>

#### Descrição

The `HTTP Parse message` command <!--REF #_command_.HTTP Parse message.Summary-->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Each property of the returned object corresponds to a part of the multipart data<!-- END REF -->.

:::info

HTTP em si, é um protocolo de comunicação sem estado. Neste quadro, os clientes iniciam uma comunicação enviando mensagens "request" aos servidores, especificando detalhes como método, alvo, cabeçalhos, conteúdo, etc. Os servidores, respondem com mensagens de "resposta" que incluem os mesmos detalhes. `HTTP Parse message` parses either the "request" or the "response" message into a well-organized object.

:::

#### Exemplo

No exemplo a seguir, analisamos os dados de um arquivo de texto que contém solicitações HTTP.

Aqui está o conteúdo do arquivo:

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

Para analisar o arquivo:

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}],
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

#### Propriedades

|                |                             |
| -------------- | --------------------------- |
| Command number | 1824                        |
| Thread safe    | &cross; |
