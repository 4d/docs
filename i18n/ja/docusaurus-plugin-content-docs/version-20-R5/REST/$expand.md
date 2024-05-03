---
id: expand
title: $expand
---

Expands an image stored in an Image attribute (_e.g._, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
or<br/>
Expands an BLOB attribute to save it.

> **Compatibility**: For compatibility reasons, $expand can be used to expand a relational attribute (_e.g._, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`). It is however recommended to use [`$attributes`]($attributes.md) for this feature.

## 画像属性の表示

画像属性の全体像を表示させるには、次のように書きます:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## BLOB属性のディスク保存

データクラスに保存されている BLOB をディスクに保存するには、$binary に "true" を渡すことで、次のように書けます:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
