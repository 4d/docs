---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<!-- END REF-->
<!--REF #_command_.Generate UUID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | 新しい UUIDテキスト (非整形32 文字) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Generate UUID.Summary-->Generate UUID は32文字のUUID識別子を整形されていない形式で返します。<!-- END REF-->

UUIDは16バイト (128 bit) の数値で、32個の16進文字を含んでいます。UUIDは非整形 (\[A-F, a-f\]および\[0-9\]からなる32文字 (例: 550e8400e29b41d4a716446655440000)) または整形 (8,4,4,4,12のグループ (例: 550e8400-e29b-41d4-a716-446655440000))で表すことができます。

4DではUUID番号をフィールドに格納することができます。 詳細はDesign Referenceマニュアルの*UUIDフォーマット*を参照してください。

#### 例題 

UUIDを生成して変数に代入する: 

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1066 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


