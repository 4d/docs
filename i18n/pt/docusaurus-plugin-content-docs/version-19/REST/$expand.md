---
id: expand
title: '$expand'
---


Expands an image stored in an Image attribute (*e.g.*, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/> or<br/> Expands an BLOB attribute to save it.

> **Compatibility**: For compatibility reasons, $expand can be used to expand a relational attribute (*e.g.*, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`). It is however recommended to use [`$attributes`]($attributes.md) for this feature.

## Vendo um atributo de imagem

Se quiser ver um atributo de imagem integralmente, escreva o abaixo:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Para saber mais sobre formatos de imagem, veja [`$imageformat`]($imageformat.md). Para saber mais sobre parâmetros de versão, veja [`$version`]($version.md).

## Salvar um atributo BLOB ao disco

Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando também "true" a $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
