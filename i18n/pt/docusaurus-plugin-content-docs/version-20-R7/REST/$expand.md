---
id: expand
title: $expand
---

Expande uma imagem armazenada em um atributo Image (\*por exemplo, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
ou<br/>
Expande um atributo BLOB para salvá-lo.

> **Compatibilidad**: por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (_por ejemplo_, `Company(1)?$expand=staff` o `Employee/?$filter="firstName BEGIN a"&$expand=employer`). No entanto, é recomendável usar [`$attributes`]($attributes.md) para essa funcionalidade.

## Vendo um atributo de imagem

Se quiser ver um atributo de imagem integralmente, escreva o abaixo:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Para obter mais informações sobre os formatos de imagem, consulte [`$imageformat`]($imageformat.md). Para obter mais informações sobre o parâmetro version, consulte [`$version`]($version.md).

## Salvar um atributo BLOB ao disco

Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando também "true" a $binary:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
