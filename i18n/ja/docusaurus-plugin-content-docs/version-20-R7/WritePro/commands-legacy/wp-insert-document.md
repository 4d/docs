---
id: wp-insert-document
title: WP INSERT DOCUMENT
slug: /WritePro/commands/wp-insert-document
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT DOCUMENT.Syntax-->**WP INSERT DOCUMENT** ( *targetObj* ; *wpDoc* ; *mode* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP INSERT DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Proドキュメント |
| wpDoc | Object | &#8594;  | 4D Wrie Pro ドキュメント |
| mode | Integer | &#8594;  | 挿入モード |
| rangeUpdate | Integer | &#8594;  | レンジ更新モード |

<!-- END REF-->

## 説明 

<!--REF #_command_.WP INSERT DOCUMENT.Summary-->**WP INSERT DOCUMENT** コマンドは *mode* や *rangeUpdate* で指定した方法で、*targetObj* で指定したターゲットに *wpDoc* のドキュメントを挿入します。<!-- END REF-->

*targetObj* には、以下のいづれかを渡します:

* レンジ
* 要素(表 / 行 / 段落 / 本文 / ヘッダー / フッター / インラインピクチャー / セクション / サブセクション / テキストボックス)
* 4D Write Pro ドキュメント

挿入する *wpDoc* ドキュメントは [WP New](wp-new.md) または [WP Import document](wp-import-document.md) で作成された 4D Write Pro ドキュメントオブジェクトを受け渡すことができます。挿入されるのは本文の要素のみです (つまり、ヘッダー、フッター、テキストボックス、アンカーされた画像は挿入されません)。挿入先のセクションおよびブックマークは変更されません。挿入は実質的にはコピー処理されるため、*wpDoc* は再利用することができます。

*mode* パラメーターには、*targetObj* レンジにドキュメントを挿入する際の挿入モードを指定するために、*4D Write Pro* テーマから一つ以上の定数を受け渡します:

| 定数         | 型    | 値 | コメント                 |
| ---------- | ---- | - | -------------------- |
| wk append  | 倍長整数 | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | 倍長整数 | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | 倍長整数 | 0 | ターゲットのコンテンツを置き換える    |

上に紹介した定数を、次の挿入オプションと組み合わせることができます:

| 定数                       | 型    | 値   | コメント                                                           |
| ------------------------ | ---- | --- | -------------------------------------------------------------- |
| wk freeze expressions    | 倍長整数 | 64  | 挿入の瞬間に式を評価します。                                                 |
| wk keep paragraph styles | 倍長整数 | 128 | 移行先の段落スタイルを適用します。wk append オペレーションの場合、最初の段落ブレークを除くコンテンツを挿入します。 |

* *targetObj* 引数がレンジである場合、任意の*rangeUpdate* 引数を使用して以下の定数のいづれか一つを渡すことで、挿入されたコンテンツが返されるレンジに含まれるかどうかを指定することができます:  
    
| 定数                    | 型    | 値 | コメント                      |  
| --------------------- | ---- | - | ------------------------- |  
| wk exclude from range | 倍長整数 | 1 | 更新されたレンジには、以前のコンテンツのみを含める |  
| wk include in range   | 倍長整数 | 0 | 更新されたレンジに挿入コンテンツを含める      |  
    
*rangeUpdate* 引数を渡さない場合、デフォルトでは挿入されたコンテンツは返されるレンジに含まれます。
* *targetObj* 引数がレンジではない場合、*rangeUpdate* 引数は無視されます。

## 例題 1 

ドキュメントの内容を、他のドキュメント内で選択されたテキストで置き換える場合を考えます:

```4d
 $tempRange:=WP Get selection(WPTemplate) //WPTemplateドキュメント内のユーザーセレクションを取得
 $doctoCopy:=WP New($tempRange) //WPTemplateに基づいて新しいドキュメントを作成
 WP INSERT DOCUMENT(WPDoc;$doctoCopy;wk replace) //新しいドキュメントの中身でWPDocの中身を置き換え
```

## 例題 2 

あらかじめフォーマットされ、それぞれがブックマークとして保存された複数のパーツで構成された、テンプレートドキュメントを定義しました。このテンプレートから任意のブックマークを新規ドキュメントとして抽出し、作成中のドキュメントに挿入することができます。

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) // テンプレートからブックマークを取得します
 $targetRange:=WP New //空のドキュメントを作成(これが最終的なドキュメントになります)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") // 使用したいブックマークを名称で探します
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) // ブックマークからレンジを取得します
    $RangeDoc:=WP New($Range) // レンジから新規ドキュメントを作成します
    WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions) // wk append = $RangeDocドキュメントは $targetRange の先頭に挿入されます
 End if
```

## 参照 

  
[WP INSERT BREAK](wp-insert-break.md)  
[WP INSERT PICTURE](wp-insert-picture.md)  
[WP New](wp-new.md)  