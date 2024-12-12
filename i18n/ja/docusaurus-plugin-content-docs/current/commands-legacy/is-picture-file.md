---
id: is-picture-file
title: Is picture file
slug: /commands/is-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.Is picture file.Syntax-->**Is picture file** ( *filePath* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.Is picture file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| filePath | Text | &#8594;  | ファイルパス名 |
| * | 演算子 | &#8594;  | データの検証 |
| 戻り値 | Boolean | &#8592; | True = filePathはピクチャファイルである、そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is picture file.Summary-->Is picture file コマンドは*filePath*引数で指定されたファイルをテストし、有効なピクチャファイルであればTrueを返します。<!-- END REF-->ファイルがピクチャファイルでないか、ファイルが見つからない場合はFalseを返します。

*filePath*引数にはテストするピクチャファイルのパス名を渡します。パスはシステムシンタックスで指定しなければなりません。絶対パスまたははデータベースストラクチャファイルに対する相対パスを渡すことができます。空の文字列 ("") を渡すと、コマンドはFalseを返します。

*\** 引数を渡さない場合、コマンドはファイルの拡張子と利用可能なコーデックのリストを照合することでテストを行います。拡張子なしやより詳細なテストを行いたい場合は、*\** 引数を渡します。この場合、コマンドは追加のテストを行います。つまりファイルヘッダをロード・検査し、コーデックを照合してピクチャの妥当性を検査します。このシンタックスはコマンド実行を遅くします。

**Note:** コマンドはWindowsでPDFファイルに対し、Mac OSでEMFファイルに対し、Trueを返します。

#### 参照 

[PICTURE CODEC LIST](picture-codec-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1113 |
| スレッドセーフである | &check; |


