---
id: wp-insert-document-body
title: WP Insert document body
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert document body.Syntax-->**WP Insert document body** ( *targetObj* ; *wpDoc* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert document body.Params-->

| 引数          | 型       |                             | 説明                             |
| ----------- | ------- | --------------------------- | ------------------------------ |
| targetObj   | Object  | &#8594; | レンジまたは要素または4D Write Pro ドキュメント |
| wpDoc       | Object  | &#8594; | 4D Write Pro ドキュメント            |
| mode        | Integer | &#8594; | 挿入モード                          |
| rangeUpdate | Integer | &#8594; | レンジ更新モード                       |
| 戻り値         | Object  | &#8592; | 挿入されたドキュメント本文を参照するテキストレンジ      |

<!-- END REF-->

#### 説明

**WP Insert document body** コマンドは、<!--REF #_command_.WP Insert document body.Summary-->*mode* 引数や*rangeUpdate* 引数で指定された形で、*wpDoc* 引数で指定したドキュメントの本文を*targetObj* 引数で指定したターゲット内に挿入し、挿入されたドキュメント本文へのレンジを返します。<!-- END REF-->

*targetObj* 引数には、以下のいずれかを渡すことができます:

- レンジ
- 要素(表組 / 行 / 段落 / 本文 / ヘッダー / フッター / インラインピクチャー / セクション / サブセクション / テキストボックス)
- 4D Write Pro ドキュメント

挿入する*wpDoc* 引数のドキュメントには、[WP New](../commands-legacy/wp-new.md) コマンドまたは [WP Import document](wp-import-document.md) コマンドを使用して作成した任意の4D Write Pro ドキュメントオブジェクトを指定可能です。 本文の子要素のみが挿入されます(つまり、ヘッダー、フッター、テキストボックスおよびアンカーされたピクチャーは挿入されません)。 指定されたレンジのセクションおよびブックマークは保存されます。 これに加え、要素はコピーされるので、*wpDoc* 引数の内容はその後再利用することが可能です。 本文の子要素のみが挿入されます(つまり、ヘッダー、フッター、テキストボックスおよびアンカーされたピクチャーは挿入されません)。 指定されたレンジのセクションおよびブックマークは保存されます。 これに加え、要素はコピーされるので、*wpDoc* 引数の内容はその後再利用することが可能です。

*mode* 引数には、*4D Write Pro 定数* テーマ内の以下の定数のいずれか一つを渡すことで、ターゲットの*targetObj* のドキュメント内で使用される挿入モードを指定することができます:

| 定数         | 型       | 値 | 説明                   |
| ---------- | ------- | - | -------------------- |
| wk append  | Integer | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | Integer | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | Integer | 0 | ターゲットのコンテンツを置き換える    |

上記の定数を、以下の挿入オプションと組み合わせて使用することもできます:

| 定数                       | 型       | 値   | 説明                                                          |
| ------------------------ | ------- | --- | ----------------------------------------------------------- |
| wk freeze expressions    | Integer | 64  | 式を挿入時に固定                                                    |
| wk keep paragraph styles | Integer | 128 | 挿入先の段落スタイルを適用します。 wk append 使用時には、最初の段落ブレークを除いてコンテンツを挿入します。 |

*rangeUpdate* 引数(オプション)には、*targetObj* がレンジである場合、以下の定数のいづれか一つを渡すことで挿入されたコンテンツが結果のレンジに含まれるかどうかを指定することができます:

| 定数                    | 型       | 値 | 説明                                                |
| --------------------- | ------- | - | ------------------------------------------------- |
| wk exclude from range | Integer | 1 | 挿入されたコンテンツを更新されたレンジに含めない                          |
| wk include in range   | Integer | 0 | 挿入されたコンテンツを更新されたレンジに含める(デフォルト) |

*rangeUpdate* 引数を渡さなかった場合、デフォルトでは挿入されたコンテンツは結果のレンジに含まれます。

- *targetObj* がレンジではない場合、*rangeUpdate* は無視されます。

#### 例題 1

ドキュメントのコンテンツを他のドキュメント内で選択されたテキストで置き換えたい場合を考えます:

```4d
 $tempRange:=WP Get selection(WPTemplate) // WPTemplate ドキュメント内でのユーザーの選択範囲を取得します
 $doctoCopy:=WP New($tempRange) //WPTemplate に基づいて新しいドキュメントを作成します
 WP Insert document body(WPDoc;$doctoCopy;wk replace) //WPDoc の中身を新しいドキュメントの中身で置き換えます
```

#### 例題 2

テンプレートとして定義されたドキュメントがあり、その中には異なるフォーマットを持つ部分が、それぞれブックマークとして保存されているものとします。 テンプレートとして定義されたドキュメントがあり、その中には異なるフォーマットを持つ部分が、それぞれブックマークとして保存されているものとします。 最終ドキュメントをテンプレートから作成する場合、任意のブックマークを新規ドキュメントとして取得し、最終ドキュメントに挿入することができます。

```4d
 ARRAY TEXT($_BookmarkNames;0)
 WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames) //テンプレートをブックマークから取得
 $targetRange:=WP New //空の新規ドキュメントを作成(これが最終ドキュメントとなります)
 
 $p:=Find in array($_BookmarkNames;"Main_Header") //メインのヘッダー部分を管理
 If($p>0)
    $Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p}) //レンジを選択
    $RangeDoc:=WP New($Range) //レンジから新規ドキュメントを作成
    WP Insert document body($targetRange;$RangeDoc;wk append+wk freeze expressions) //wk append を使用、つまり置換後、$targetRange　は置き換えたテキストの最後に位置する
 End if
```

#### 例題 3

挿入されたドキュメント本文の、フォントスタイルとサイズを設定したい場合を考えます:

```4d
WPdoc:=WP Import document("myFile.4wp")
$range1:=WP Insert document body(WParea; WPdoc; wk append)

WP SET ATTRIBUTES($range1; wk font size; "12pt")
WP SET ATTRIBUTES($range1; wk font family; "Times New Roman")
WP SET ATTRIBUTES($range1; wk font italic; wk true)
```

#### 参照

[WP INSERT BREAK](wp-insert-break.md)\
[WP INSERT PICTURE](wp-insert-picture.md)\
[WP New](../commands-legacy/wp-new.md)