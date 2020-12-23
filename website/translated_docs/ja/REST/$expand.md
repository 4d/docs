---
id: expand
title: '$expand'
---


Expands an image stored in an Image attribute (*e.g.*, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br> or<br> Expands an BLOB attribute to save it.

> **Compatibility**: For compatibility reasons, $expand can be used to expand a relational attribute (*e.g.*, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`). It is however recommended to use [`$attributes`]($attributes.md) for this feature.



## 画像属性の表示

画像属性の全体像を表示させるには、次のように書きます:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

画像形式についての詳細は [`$imageformat`]($imageformat.md) を参照ください。 version パラメーターについての詳細は [`$version`]($version.md) を参照ください。

## BLOB属性のディスク保存

If you want to save a BLOB stored in your dataclass, you can write the following by also passing "true" to $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`