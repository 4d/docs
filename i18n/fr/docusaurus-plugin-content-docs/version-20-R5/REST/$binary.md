---
id: binary
title: $binary
---

Pass "true" to save the BLOB as a document (must also pass `$expand={blobAttributeName}`)

## Description

`$binary` allows you to save the BLOB as a document.  You must also use the [`$expand`]($expand.md) command in conjunction with it.

Lorsque vous faites la requête suivante :

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

Il vous sera demandé où enregistrer le BLOB sur le disque :

![](../assets/en/REST/binary.png)
