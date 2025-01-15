---
id: get-external-data-path
title: Get external data path
slug: /commands/get-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.Get external data path.Syntax-->**Get external data path** ( *aField* ) : Text<!-- END REF-->
<!--REF #_command_.Get external data path.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Text, Blob, Picture | &#8594;  | 外部ストレージの場所を取得するフィールド |
| 戻り値 | Text | &#8592; | 外部ストレージファイルのフルパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get external data path.Summary-->**Get external data path**コマンドはカレントレコードの、*aField*引数に渡したフィールドデータの外部ストレージファイルのフルパス名を返します。<!-- END REF-->*aField*引数にはテキスト、BLOB、またはピクチャー型のフィールドを渡さなくてはなりません。コマンドは、ファイルが存在しない、またはアクセス不能の場合でも、ストレージファイルのパス名を返します。  

特にこのコマンドを使用して外部ファイルの再コピーが可能となります。

**注:** 外部ストレージに関しては*Design Reference* マニュアルを参照してください。

 このコマンドは以下の場合空の文字列を返します:

* フィールドデータが外部ファイルとして格納されていない場合。
* フィールドがNull値(でパス名が格納されて外部ファイルが作成されていない)場合。
* このコマンドがリモートの4Dから実行されている場合。

#### 参照 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1133 |
| スレッドセーフである | &check; |


