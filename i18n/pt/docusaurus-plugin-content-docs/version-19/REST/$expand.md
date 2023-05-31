---
id: expand
title: '$expand'
---


Expande uma imagem armazenada num atributo Image (*, por exemplo,*, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/> ou<br/> Expande um atributo BLOB para o guardar.

> **Compatibilidade**: Por razões de compatibilidade, $expand pode ser utilizado para expandir um atributo relacional (*e.g.*, `Company(1)?$expand=staff` ou `Employee/?$filter="firstName BEGIN a"&$expand=employer`). No entanto, recomenda-se a utilização do endereço [`$attributes`]($attributes.md) para esta funcionalidade.

## Vendo um atributo de imagem

Se quiser ver um atributo de imagem integralmente, escreva o abaixo:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Para saber mais sobre formatos de imagem, veja [`$imageformat`]($imageformat.md). Para saber mais sobre parâmetros de versão, veja [`$version`]($version.md).

## Salvar um atributo BLOB ao disco

Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando também "true" a $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
