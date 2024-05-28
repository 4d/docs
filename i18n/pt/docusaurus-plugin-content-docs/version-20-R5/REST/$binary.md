---
id: binary
title: $binary
---

Pase "true" para guardar el BLOB como documento (también debe pasar `$expand={blobAttributeName}`)

## Descrição

`$binary` permite guardar el BLOB como un documento.  You must also use the [`$expand`]($expand.md) command in conjunction with it.

Quando fizer o seguinte pedido:

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

Ser-lhe-á perguntado onde guardar o BLOB no disco:

![](../assets/en/REST/binary.png)
