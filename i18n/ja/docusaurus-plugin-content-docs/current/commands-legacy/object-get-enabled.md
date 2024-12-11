---
id: object-get-enabled
title: OBJECT Get enabled
slug: /commands/object-get-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enabled.Syntax-->**OBJECT Get enabled** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enabled.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| 戻り値 | Boolean | &#8592; | True = オブジェクトは有効; そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get enabled.Summary-->OBJECT Get enabled コマンドは *object*で指定されたオブジェクトまたはオブジェクトグループがフォーム中で有効ならTrueを、無効ならFalseを返します。<!-- END REF-->

有効なオブジェクトはマウスクリックやキーボードショートカットに反応します。

オプションの *\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*は変数です。この場合、文字ではなく変数への参照 (変数オブジェクトのみ) を渡します。

このコマンドは以下のタイプのオブジェクトに適用できます:

* ボタン、デフォルトボタン、3Dボタン、非表示ボタン、ハイライトボタン
* ラジオボタン、3Dラジオボタン、ピクチャボタン
* チェックボックス、3Dチェックボックス
* ポップアップメニュー、ドロップダウンリスト、コンボボックス、メニュー/ドロップダウンリスト
* サーモメータ、ルーラ

#### 参照 

[OBJECT SET ENABLED](object-set-enabled.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1079 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


