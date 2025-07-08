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

`WA SET CONTEXT` コマンドは、<!--REF #_command_.WA SET CONTEXT.Summary--> \* および *object* 引数で指定されたWeb エリア内の `$4d` に対して *contextObj* 引数で指定したコンテキストオブジェクトを定義します。 このコマンドが使用されると、 `$4d` は提供された *contextObj* 内で宣言されたコンテンツのみにアクセスできます。 コンテキストオブジェクトが何も設定されていない場合、 `$4d` はすべての4D メソッドにアクセスできますが、ユーザークラスにはアクセスできません。<!-- END REF-->

:::note

このコマンドは、[**埋め込みWebレンダリングエンジンを使用**](../FormObjects/properties_WebArea.md#埋め込みwebレンダリングエンジンを使用) および **4Dメソッドコールを許可** が `true` になっている埋め込みWeb エリアにおいてのみ使用可能です。

:::

*contextObj* 引数には、 `$4d` で許可したいユーザークラスインスタンスまたはフォーミュラをオブジェクトとして渡します。 ただし `_` で始まるクラス関数は非表示とみなされるため、 `$4d` から使用することはできません。

- *contextObj* が null の場合、`$4d` はすべての4D メソッドにアクセスできます。
- *contextObj* が空の場合、`$4d` はメソッドに対しアクセスができません。

### 例題 1

`$4d` に特定のメソッドを許可する

```4d
 var $context:={}
 $context.myMethod:=Formula(myMethod)
 $context.myMethod2:=Formula(myMethod2)

 WA SET CONTEXT(*; "myWebArea"; $context)
```

**JavaScript 側:**

```js
$4d.myMethod(); // 許可されている
$4d.myMethod2(); // 許可されている
$4d.someOtherMethod(); // アクセス不可
```

### 例題 2

クラスオブジェクトを使用する場合を考えます

```4d
 var $myWAObject:=cs.WAFunctions.new()

 WA SET CONTEXT(*; "MyWA"; $myWAObject)
```

**JavaScript 側:**

```js
$4d.myWAFunction(); // 許可されている
$4d._myPrivateFunction(); // 関数が非公開扱いになっているため何もしません
```

### 参照

[WA Get context](wa-get-context.md)

### プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1848                        |
| スレッドセーフ | &cross; |
