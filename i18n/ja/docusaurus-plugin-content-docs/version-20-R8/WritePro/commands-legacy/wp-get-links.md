---
id: wp-get-links
title: WP Get links
slug: /WritePro/commands/wp-get-links
displayed_sidebar: docs
---

<!--REF #_command_.WP Get links.Syntax-->**WP Get links** ( *targetObj* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get links.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Proドキュメント |
| 戻り値 | Collection | &#8592; | リンクのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get links.Summary-->**WP Get links** は*targetObj* 引数内のターゲットオブジェクトで定義されている全てのリンクのコレクションを返します。<!-- END REF-->

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素(テーブル/行/段落/本文/ヘッダー/フッター/セクション/サブセクション/テキストボックス)
* 4D Write Pro ドキュメント

**返される値**

**WP Get links** はリンクオブジェクトのコレクションを返し、それぞれのオブジェクトには以下のプロパティが1つ、あるいは複数格納されています:

| **プロパティ**       | **型**      | **詳細**                         | **利用可能なリンクの種類**    |
| --------------- | ---------- | ------------------------------ | ------------------ |
| \[ \].url       | テキスト       | リンクのターゲットのコンテンツ                | URLリンク             |
| \[ \].method    | テキスト       | リンクのメソッド名                      | メソッドリンク            |
| \[ \].parameter | テキスト \| 数値 | リンクに渡される引数値                    | メソッドリンク(引数を使っていれば) |
| \[ \].bookmark  | テキスト       | リンクのブックマーク名                    | ブックマークリンク          |
| \[ \].range     | オブジェクト     | リンクのラベルのレンジ。*セレクションレンジコマンド*参照。 | 全てのリンク             |

#### 例題 

4D Write Pro ドキュメント内の全てのURL リンクラベルのカラーを変えたい場合を考えます:

```4d
 var $links : Collection
 var $link : Object
 
 $links:=WP Get links(myDoc)
 
 For each($link;$links)
    If($link.url#Null) //URLリンクであれば
       WP SET ATTRIBUTES($link.range;wk text color;"red")
    End if
 End for each
```

#### 参照 

  
[WP Get formulas](wp-get-formulas.md)  
[WP SET LINK](wp-set-link.md)  