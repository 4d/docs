---
id: version
title: "$version"
---

Número da versão da imagem

## Descrição

`$version` é o número da versão da imagem devolvido pelo servidor. O número da versão, enviado pelo servidor, contorna a cache do navegador para que tenha a certeza de obter a imagem correta.

O valor do parâmetro de versão da imagem é modificado pelo servidor.

## Exemplo

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

 `GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`