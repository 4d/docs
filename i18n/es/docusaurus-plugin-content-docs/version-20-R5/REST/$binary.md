---
id: binary
title: $binary
---

Pase "true" para guardar el BLOB como documento (también debe pasar `$expand={blobAttributeName}`)

## Descripción

`$binary` permite guardar el BLOB como un documento.  You must also use the [`$expand`]($expand.md) command in conjunction with it.

Cuando haga la siguiente petición:

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

Se le preguntará dónde guardar el BLOB en el disco:

![](../assets/en/REST/binary.png)
