---
id: wp-get-data-context
title: WP Get data context
slug: /WritePro/commands/wp-get-data-context
displayed_sidebar: docs
---

<!--REF #_command_.WP Get data context.Syntax-->**WP Get data context** ( *wpDoc* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get data context.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | オブジェクト | &#x1F852; | 4D Write Pro ドキュメント |
| 戻り値 | オブジェクト | &#x1F850; | データコンテキストオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get data context.Summary-->**WP Get data context** コマンドは、 wpDoc 引数で指定したドキュメントのデータコンテキストを返します。<!-- END REF-->データコンテキストは、[WP SET DATA CONTEXT](wp-set-data-context.md) コマンドを使用することで定義されます。

*wpDoc* 引数には、データコンテキストを取得したい4D Write Pro ドキュメントを渡します。

#### 例題 

あるドキュメントからデータコンテキストを取得し、それを同一プロセスの他のメソッドにおいて再使用することができます。

以下のメソッドはデータコンテキストを設定します: 

```4d
  // method1
 var $person: Object
 var $wpArea : Object
 
 $wpArea:=WP New()
 
  // person オブジェクトを作成
 $person:=New object()
 $person.firstName:="John"
 $person.lastName:="Doe"
 
  // person オブジェクトを使用してコンテキストを設定
 WP SET DATA CONTEXT($wpArea;$person)
 
 method2($wpArea) // 他のメソッドに渡して呼び出す
```

method2 の中身は、例えば以下のようになっています:

```4d
  //method2
 #DECLARE($document Object)
 var $context : Object
 
 $context:=WP Get data context($document)
 ALERT(JSON Stringify($context)) // {"firstName":"John","lastName":"Doe"} と表示
```

#### 参照 

  
[WP SET DATA CONTEXT](wp-set-data-context.md)  