---
id: method-get-folders
title: METHOD GET FOLDERS
slug: /commands/method-get-folders
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET FOLDERS.Syntax-->**METHOD GET FOLDERS** ( *arrNames* {; *filter*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET FOLDERS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrNames | Text array | &#8592; | ホームページのフォルダー名配列 |
| filter | Text | &#8594;  | 名前フィルター |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.METHOD GET FOLDERS.Summary-->**METHOD GET FOLDERS**コマンドは4Dエクスプローラーのホームページに作成されたフォルダー名を*arrNames*配列に返します。<!-- END REF-->

![](../assets/en/commands/pict837666.en.png)

フォルダー名はユニークでなければならないため、この配列に階層は返されません。 

*filter*引数に比較文字列を渡して、このフォルダーリストを絞り込むことができます。この場合コマンドは名前がフィルターにマッチするフォルダーのみを返します。"@"をワイルドカードとして使用することができます。空の文字列を渡すと*filter*引数は無視されます。 

このコマンドがコンポーネントから呼ばれると、デフォルトでコンポーネントのフォルダー名が返されます。*\** 引数を渡すと配列にはホストデータベースのフォルダーが返されます。

#### 参照 

[METHOD GET PATHS](method-get-paths.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1206 |
| スレッドセーフである | &cross; |


