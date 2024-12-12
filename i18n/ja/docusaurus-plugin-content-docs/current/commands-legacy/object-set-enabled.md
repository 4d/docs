---
id: object-set-enabled
title: OBJECT SET ENABLED
slug: /commands/object-set-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENABLED.Syntax-->**OBJECT SET ENABLED** ( {* ;} *object* ; *active* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENABLED.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| active | Boolean | &#8594;  | True = オブジェクトは有効; そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET ENABLED.Summary-->OBJECT SET ENABLED コマンドは*object*で指定されたカレントフォーム中のオブジェクトあるいはオブジェクトグループを、有効または無効にするために使用します。<!-- END REF-->有効なオブジェクトはマウスクリックやキーボードショートカットに反応します。

オプションの*\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*は変数です。この場合、文字ではなく変数への参照 (変数オブジェクトのみ) を渡します。

オブジェクトを有効にするにはTrueを、無効にするにはFalseを*active*引数に渡します。

このコマンドは以下のタイプのオブジェクトに適用できます:

* ボタン、デフォルトボタン、3Dボタン、非表示ボタン、ハイライトボタン
* ラジオボタン、3Dラジオボタン、ピクチャボタン
* チェックボックス、3Dチェックボックス
* ポップアップメニュー、ドロップダウンリスト、コンボボックス、メニュー/ドロップダウンリスト
* サーモメーター、ルーラー

**Note:** このコマンドは**入力**と**キャンセル**アクションを除き、標準アクションが割り当てられているボタンには効果がありません (4Dが必要に応じて状態を変更します)。

#### 参照 

[OBJECT Get enabled](object-get-enabled.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1123 |
| スレッドセーフである | &cross; |


