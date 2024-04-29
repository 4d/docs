---
id: binary
title: $binary
---

Pass "true" to save the BLOB as a document (must also pass `$expand={blobAttributeName}`)

## Descrição

`$binary` allows you to save the BLOB as a document.  You must also use the [`$expand`]($expand.md) command in conjunction with it.

Quando fizer o seguinte pedido:

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

Ser-lhe-á perguntado onde guardar o BLOB no disco:

![](../assets/en/REST/binary.png)
