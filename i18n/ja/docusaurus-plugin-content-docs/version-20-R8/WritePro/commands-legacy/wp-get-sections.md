---
id: wp-get-sections
title: WP Get sections
slug: /WritePro/commands/wp-get-sections
displayed_sidebar: docs
---

<!--REF #_command_.WP Get sections.Syntax-->**WP Get sections** ( *targetObj* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get sections.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは4D Write Pro ドキュメント |
| 戻り値 | Collection | &#8592; | targetObj 内で見つかった全ての(メイン)セクションのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get sections.Summary-->**WP Get sections** コマンドは*targetObj* 引数内に定義されている全てのセクションのコレクションを返します。<!-- END REF-->*targetObj* 引数には、以下のいづれかを渡すことができます:

* レンジ
* 要素(表 / 行 / 段落 / 本文 / ヘッダー / フッター / テキストボックス / 画像)
* 4D Write Pro ドキュメント

レンジまたは要素がヘッダーまたはフッターである、あるいはヘッダーまたはフッターに属している場合、**WP Get sections** はヘッダーまたはフッターが割り当てられているセクションを返します。

画像にアンカーされたテキストボックスに関しては、**WP Get sections** は条件によって以下のいづれかを返します: 

* 要素があるセクションに対してアンカーされている場合には、単一のセレクションを格納したコレクションを返します。
* 要素が全てのセクションに対してアンカーされている場合には、全てのセクションを格納したコレクションを返します。
* 要素が埋め込みビューまたはページ番号に対してアンカーされている場合には、空のコレクションを返します。

セクションオブジェクトについての詳細な情報については、*ヘッダー、フッター、セクションの管理* の章を参照してください。

#### 例題 

4D Write Pro エリアの最後のセクションの属性を変えたい場合を考えます:

```4d
 var $colSections : Collection
 $colSections:=WP Get sections(wpDoc)
 WP SET ATTRIBUTES($colSections[$colSections.length-1];wk column count;3)
```

#### 参照 

[WP Get section](wp-get-section.md)  