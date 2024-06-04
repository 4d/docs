---
id: expand
title: $expand
---

画像属性に保存されているピクチャーを展開します (_例_: `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
または <br/>
保存するために BLOB属性を展開します。

> **互換性に関する注記**: 互換性のため、$expand はリレーション属性を展開するのに使用できます (_例_: `Company(1)?$expand=staff` または `Employee/?$filter="firstName BEGIN a"&$expand=employer`)。 しかしながら、これらの場合には [`$attributes`]($attributes.md) を使用するのが推奨されます。

## 画像属性の表示

画像属性の全体像を表示させるには、次のように書きます:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

画像形式についての詳細は [`$imageformat`]($imageformat.md) を参照ください。 パラメーターについての詳細は [`$version`]($version.md) を参照ください。

## BLOB属性のディスク保存

データクラスに保存されている BLOB をディスクに保存するには、$binary に "true" を渡すことで、次のように書けます:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
