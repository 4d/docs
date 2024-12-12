---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *blob* ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB field or variable |
| Function result | Integer | &#8592; | Size in bytes of the BLOB |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB size.Summary-->BLOB sizereturns the size of *blob* expressed in bytes.<!-- END REF-->

#### Example 

The line of code adds 100 bytes to the BLOB *myBlob*:

```4d
 SET BLOB SIZE(myBlob;BLOB size(myBlob)+100)
```

#### See also 

[SET BLOB SIZE](set-blob-size.md)  