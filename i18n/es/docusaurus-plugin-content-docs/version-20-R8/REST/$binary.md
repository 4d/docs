---
id: binary
title: $binary
---

Pase "true" para guardar el BLOB como documento (también debe pasar `$expand={blobAttributeName}`)

## Descripción

`$binary` permite guardar el BLOB como un documento.  También debe utilizar el comando [`$expand`]($expand.md) junto con él.

Cuando haga la siguiente petición:

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

Se le preguntará dónde guardar el BLOB en el disco:

![](../assets/en/REST/binary.png)
