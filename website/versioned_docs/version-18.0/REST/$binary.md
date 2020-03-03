---
id: version-18.0-binary
title: $binary
original_id: binary
---

Pass "true" to save the BLOB as a document (must also pass `$expand={blobAttributeName}`)

## Description   

`$binary` allows you to save the BLOB as a document.  You must also use the [`$expand`]($expand.md) command in conjunction with it.

When you make the following request:

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

You will be asked where to save the BLOB to disk:

![](assets/en/REST/binary.png)

