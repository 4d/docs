---
id: expand
title: $expand 
---


Expands an image stored in an Image attribute (*e.g.*, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
or<br/>
Expands an BLOB attribute to save it.

> **Compatibility**: For compatibility reasons, $expand can be used to expand a relational attribute (*e.g.*, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`). It is however recommended to use [`$attributes`]($attributes.md) for this feature. 



## Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your dataclass, you can write the following by also passing "true" to $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`