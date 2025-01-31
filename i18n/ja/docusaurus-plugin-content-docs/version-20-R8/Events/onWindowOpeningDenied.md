---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| コード | 呼び出し元                                         | 定義                  |
| --- | --------------------------------------------- | ------------------- |
| 53  | [Web エリア](../FormObjects/webArea_overview.md) | ポップアップウィンドウがブロックされた |

<details><summary>履歴</summary>

| リリース  | 内容         |
| ----- | ---------- |
| 19 R5 | ドロップ時にトリガー |

</details>

## 説明

このイベントは、Webエリアによりポップアップウィンドウがブロックされると生成されます。 4D Webエリアはポップアップウィンドウを許可しません。

`WA Get last filtered URL` コマンドコマンドを使用してブロックされた URL を知ることができます。

このイベントは、Webエリア (埋め込みおよび Windowsシステム [エンジン](../FormObjects/properties_WebArea.md#埋め込みwebレンダリングエンジンを使用)) で [ドラッグ＆ドロップ](../FormObjects/webArea_overview.md#ユーザーインターフェース) オプションが有効になっている場合に、ドロップ操作がおこなわれたときにも発生します。 次を呼び出すことで、ドロップを受け入れることができます:

```4d
// Webエリアオブジェクトメソッド
If (FORM Event.code=On Window Opening Denied)
 WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
 // または UrlVariable:=WA Get last filtered URL(*; "WebArea")  
 // (UrlVariable は Webエリアに関連づけられた URL変数)
End if 
```

### 参照

[`On Open External Link`](onOpenExternalLink.md)
