---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True: 印刷プレビューを行うFalse: 印刷プレビューを行わない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get print preview.Summary-->**Get print preview**コマンドはカレントプロセスで[SET PRINT PREVIEW](set-print-preview.md)が**True**で呼ばれている場合、Trueを返します。<!-- END REF-->

ユーザーは印刷ダイアログでこのオプションを変更できる点に留意してください。最終的な印刷モードを判定するには[Is in print preview](is-in-print-preview.md)コマンドを使用します。

#### 参照 

[Is in print preview](is-in-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1197 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


