---
id: method-get-names
title: METHOD GET NAMES
slug: /commands/method-get-names
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET NAMES.Syntax-->**METHOD GET NAMES** ( *arrNames* {; *filter*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET NAMES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrNames | Text array | &#8592; | プロジェクトメソッド名配列 |
| filter | Text | &#8594;  | 名前フィルター |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.METHOD GET NAMES.Summary-->**METHOD GET NAMES**コマンドはアプリケーション中のプロジェクトメソッドの名前を*arrNames*配列に返します。<!-- END REF-->

デフォルトではすべてのメソッドがリストされます。*filter* 引数に比較文字列を渡して、このリストを絞り込むことができます。この場合コマンドは名前がフィルターにマッチするメソッドのみを返します。"@"をワイルドカードとして使用することができます。

このコマンドがコンポーネントから呼ばれると、デフォルトでコンポーネントプロジェクトメソッドの名前が返されます。*\** 引数を渡すと配列にはホストデータベースのプロジェクトメソッドが返されます。

**注:** ゴミ箱内のメソッドは含まれません。 

#### 例題 

典型的な利用例:

```4d
  // データベースのすべてのプロジェクト名をリストする
 METHOD GET NAMES(t_Names)
 
  // 特定の文字から始まるメソッドのみをリストする
 METHOD GET NAMES(t_Names;"web_@")
 
  // ホストデータベース内で、特定の文字から始まるメソッドのみをリストする
 METHOD GET NAMES(t_Names;"web_@";*)
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1166 |
| スレッドセーフである | &check; |


