---
id: binary
title: '$binary'
---

Passe "true" para guardar o BLOB como um documento (deve também passar `$expand={blobAttributeName}`)

## Descrição

`$binary` permite-lhe guardar o BLOB como um documento.  Também é necessário utilizar o comando [`$expand`]($expand.md) em conjunto com ele.

Quando fizer o seguinte pedido:

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

Ser-lhe-á perguntado onde guardar o BLOB no disco:

![](../assets/en/REST/binary.png)
