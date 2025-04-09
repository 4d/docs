---
id: wa-set-context
title: WA SET CONTEXT
---

<!--REF #_command_.WA SET CONTEXT.Syntax-->**WA SET CONTEXT** ( {* ;} *object* ; *contextObj* )<!-- END REF-->

<!--REF #_command_.WA SET CONTEXT.Params-->

| 引数         | 型          |                             | 説明                                                                    |
| ---------- | ---------- | --------------------------- | --------------------------------------------------------------------- |
| \*         | 演算子        | &#8594; | 指定時、*object* はオブジェクト名(文字列)。 省略時、*object* は変数。      |
| object     | フォームオブジェクト | &#8594; | オブジェクト名 (\* 指定時) または変数 (\* 省略時) |
| contextObj | Object     | &#8594; | `$4d` を使用して呼び出せる関数を格納したオブジェクト                                         |

<!-- END REF-->

### 説明

The `WA SET CONTEXT` command <!--REF #_command_.WA SET CONTEXT.Summary--> defines a context object *contextObj* for `$4d` in the Web area designated by the \* and *object* parameters. When this command is used, `$4d` can only access contents declared within the provided *contextObj*. When no context object is set, `$4d` has access to all 4D methods and can not access user classes.<!-- END REF-->

:::note

このコマンドは、[**埋め込みWebレンダリングエンジンを使用**](../FormObjects/properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) および **4Dメソッドコールを許可** が `true` になっている埋め込みWeb エリアにおいてのみ使用可能です。

:::

Pass in *contextObj* user class instances or formulas to be allowed in `$4d` as objects. Class functions that begin with `_` are considered hidden and cannot be used with `$4d`.

- If *contextObj* is null, `$4d` has access to all 4D methods.
- If *contextObj* is empty, `$4d` has no access.

### 例題 1

Allow `$4d` to specific methods

```4d
 var $context:={}
 $context.myMethod:=Formula(myMethod)
 $context.myMethod2:=Formula(myMethod2)

 WA SET CONTEXT(*; "myWebArea"; $context)
```

**In JavaScript:**

```js
$4d.myMethod(); // Allowed
$4d.myMethod2(); // Allowed
$4d.someOtherMethod(); // Not accessible
```

### 例題 2

Using a Class Object

```4d
 var $myWAObject:=cs.WAFunctions.new()

 WA SET CONTEXT(*; "MyWA"; $myWAObject)
```

**In JavaScript:**

```js
$4d.myWAFunction(); // Allowed
$4d._myPrivateFunction(); // Will do nothing because function is private
```

### 参照

[WA Get context](wa-get-context.md)

### プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1848                        |
| スレッドセーフ | &cross; |
