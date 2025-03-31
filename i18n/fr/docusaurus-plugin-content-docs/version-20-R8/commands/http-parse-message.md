---
id: http-parse-message
title: HTTP Parse message
slug: /commands/http-parse-message
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Parse message.Syntax-->**HTTP Parse message** ( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF-->

<!--REF #_command_.HTTP Parse message.Params-->

| Paramètres | Type       |                             | Description                                                         |
| ---------- | ---------- | --------------------------- | ------------------------------------------------------------------- |
| data       | Text, Blob | &#8594; | Données à analyser                                                  |
| Résultat   | Object     | &#8592; | Objet dont chaque propriété est une partie des données multiparties |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R4   | Ajout         |

</details>

#### Description

The `HTTP Parse message` command <!--REF #_command_.HTTP Parse message.Summary-->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Chaque propriété de l'objet renvoyé correspond à une partie des données multipart<!-- END REF -->.

:::info

HTTP lui-même est un protocole de communication sans état. Dans ce cadre, les clients initient la communication en envoyant des messages "request" aux serveurs, en spécifiant des détails tels que la méthode, la cible, les en-têtes, le contenu, etc. Les serveurs, à leur tour, répondent par des messages "response" qui contiennent les mêmes détails. `HTTP Parse message` analyse le message "request" ou "response" et retourne un objet structuré.

:::

#### Exemple

Dans l'exemple suivant, nous analysons les données d'un fichier texte contenant des requêtes HTTP.

Voici le contenu du fichier :

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

Pour analyser le fichier :

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}],
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```

#### Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1824                        |
| Thread safe        | &cross; |
