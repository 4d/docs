---
id: wa-get-context
title: WA Get context
---

<!--REF #_command_.WA Get context.Syntax-->**WA Get context** ( {* ;} *object* ) -> *contextObj*<!-- END REF-->

<!--REF #_command_.WA Get context.Params-->

| 引数         | 型          |                             | 説明                                                                    |
| ---------- | ---------- | --------------------------- | --------------------------------------------------------------------- |
| \*         | 演算子        | &#8594; | 指定時、*object* はオブジェクト名(文字列)。 省略時、*object* は変数。      |
| object     | フォームオブジェクト | &#8594; | オブジェクト名 (\* 指定時) または変数 (\* 省略時) |
| contextObj | Object     | &#8592; | 事前に定義されていればコンテキストオブジェクト、それ以外の場合には `null`                              |

<!-- END REF-->

### 説明

`WA Get context` コマンドは、<!--REF #_command_.WA Get context.Summary--> \* および *object* 引数で指定された Web エリア内の `$4d` に対して [`WA SET CONTEXT`](./wa-set-context.md) を使用して定義されたコンテキストオブジェクトを取得します。<!-- END REF--> このWeb エリアに対して `WA SET CONTEXT` が呼ばれていなかった場合、コマンドは `null` を返します。

:::note

このコマンドは、[**埋め込みWebレンダリングエンジンを使用**](../FormObjects/properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) および **4Dメソッドコールを許可** が `true` になっている埋め込みWeb エリアにおいてのみ使用可能です。

:::

### 例題

コンテキストが存在するかどうかをチェックする場合を考えます:

```4d
 var $contextObj:=WA Get context(*; "myWebArea")

 If ($contextObj=Null)
	ALERT("このWebエリアにはコンテキストが設定されていません。")
 Else 
	ALERT("コンテキストが定義されています！")
 End if
```

### 参照

[WA SET CONTEXT](wa-set-context.md)

### プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1849                        |
| スレッドセーフ | &cross; |
