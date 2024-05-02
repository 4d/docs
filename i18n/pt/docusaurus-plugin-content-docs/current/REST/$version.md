---
id: version
title: $version
---

Número da versão da imagem

## Descrição

`$version` is the image's version number returned by the server. O número da versão, enviado pelo servidor, contorna a cache do navegador para que tenha a certeza de obter a imagem correta.

O valor do parâmetro de versão da imagem é modificado pelo servidor.

## Exemplo

O exemplo seguinte define o formato de imagem como JPEG, independentemente do tipo real da fotografia, e passa o número de versão real enviado pelo servidor:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`
