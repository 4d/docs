---
id: get-picture-keywords
title: GET PICTURE KEYWORDS
slug: /commands/get-picture-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE KEYWORDS.Syntax-->**GET PICTURE KEYWORDS** ( *picture* ; *arrKeywords* {; *} )<!-- END REF-->
<!--REF #_command_.GET PICTURE KEYWORDS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture, Picture | &#8594;  | 割り当てられたキーワードを取得するピクチャー |
| arrKeywords | Text array | &#8592; | キーワードを受け取る配列 |
| * | 演算子 | &#8594;  | 指定時: 重複するキーワードを取り除く |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET PICTURE KEYWORDS.Summary-->**GET PICTURE KEYWORDS**コマンドは引数に渡したピクチャーに割り当てられたキーワードのリストを*arrKeywords*配列に返します。<!-- END REF-->メタデータを使用して設定されたキーワードだけが返されます。他のタイプのメタデータはこのコマンドから無視されます。このコマンドは、このタイプのメタデータをサポートするピクチャー (JPEG, TIFF, 等) に対してのみ動作します。

**注:** 4DはIPTC/Keywordsタイプのメタデータをインデックスすることが可能です (デザインリファレンスマニュアルを参照)。

*\** 引数を渡すと、コマンドはキーワードの重複しない値のみを返します。つまりリスト中のすべての値がユニークになります。

ピクチャーにIPTC/Keywordsメターデータが含まれない場合、コマンドは空の配列を返し、エラーは生成されません。

**注:** このコマンドから返される結果はデータベース設定の"非文字・非数字のみをキーワード区切り文字とする"の現在値により異なります ([DOM GET XML CHILD NODES](dom-get-xml-child-nodes.md)参照)。

#### 参照 

[GET PICTURE METADATA](get-picture-metadata.md)  
[SET PICTURE METADATA](set-picture-metadata.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1142 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


