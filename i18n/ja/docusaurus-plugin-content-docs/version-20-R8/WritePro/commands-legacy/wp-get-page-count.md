---
id: wp-get-page-count
title: WP Get page count
slug: /WritePro/commands/wp-get-page-count
displayed_sidebar: docs
---

<!--REF #_command_.WP Get page count.Syntax-->**WP Get page count** ( *wpDoc* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get page count.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| 戻り値 | Integer | &#8592; | ドキュメントのページ数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get page count.Summary-->**WP Get page count** コマンドは 引数として渡した*targetObj* 引数内で定義されているページの総数を返します。<!-- END REF-->

*targetObj* 引数には、以下のいづれかを渡すことができます:

* セクション/サブセクション
* 4D Write Pro ドキュメント

*targetObj* コマンドは引数のページ数を返します。サブセクションを渡した場合、その親セクションのページ数が返されます。

**WP Get page count** では、[WP PRINT](wp-print.md) コマンドと同じ表示設定が適用されます:

* ヘッダー: 表示
* フッター: 表示
* 式: 計算されて表示
* ページモード: ページまたは下書き

*targetObj* 引数のターゲットが4D Write Pro フォームエリア内に表示されている場合、実際の状態に即した情報を得られるようにするために、エリアの表示設定がコマンドの表示設定と合致しているようにしてください。またこれらの設定がエリアと異なる場合、4D Write Pro はコマンドが呼び出されるごとに、レイアウトを計算するためにドキュメントの"クローン"を作成することとなり、時間がかかる可能性があります。パフォーマンス上の理由から、こういった場合にはドキュメントをオフラインでビルドし、ビルドが完成したあとにドキュメントをフォームオブジェクトエリアへとコピーすることが推奨されます。

#### 例題 

Items テーブルのカレントセレクション内で、"Manual" フィールドに格納されている 4D Write Pro ドキュメントの総ページ数を確認します:

```4d
 var $pageCount : Integer
 var $totalCount : Integer
 FIRST RECORD([Items])
 While(Not(End selection([Items]))
    $pageCount:=WP Get page count([Items]Manual)
    $totalCount:=$totalCount+$pageCount
    NEXT RECORD([Items])
 End while
 ALERT("マニュアルの総ページ数: "+String($totalCount))
```
