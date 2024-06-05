---
id: binary
title: $binary
---

ドキュメントを BLOB として保存するには "true" を渡します (`$expand={blobAttributeName}` も渡す必要があります)

## 説明

`$binary` を使うと、ドキュメントを BLOB として保存できます。  [`$expand`]($expand.md) コマンドとの組み合わせで使う必要があります。

以下のリクエストを実行した場合:

```
GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt
```

ディスク上の BLOB の保存先を聞かれます:

![](../assets/en/REST/binary.png)
