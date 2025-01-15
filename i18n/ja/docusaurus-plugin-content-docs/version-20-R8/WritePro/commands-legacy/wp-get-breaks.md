---
id: wp-get-breaks
title: WP Get breaks
slug: /WritePro/commands/wp-get-breaks
displayed_sidebar: docs
---

<!--REF #_command_.WP Get breaks.Syntax-->**WP Get breaks** ( *targetObj* {; *breakType*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get breaks.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| breakType | Integer | &#8594;  | 返すブレークのタイプ |
| 戻り値 | Collection | &#8592; | レンジのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get breaks.Summary-->**WP Get breaks** コマンドは*targetObj* 引数のターゲット内に挿入されている全てのブレークを格納したコレクションを返します。<!-- END REF-->

このコマンドはユーザーまたはコードによって入力されたブレークのみを返し、4D Write Pro がレイアウトのために自動的に生成したブレークは返されません。

*targetObj* 引数には、以下のいずれかを渡すことができます:

* レンジ
* 要素(表 / 行 / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / テキストボックス)
* 4D Write Pro ドキュメント

デフォルトでは、あらゆる種類のブレークが返されます。任意の*breakType* 引数に以下の定数のいずれか一つを渡すことで、返されるブレークのタイプを選択することができます:

| 定数                          | 値 | コメント                                                          |
| --------------------------- | - | ------------------------------------------------------------- |
| wk column break             | 3 | カラムブレーク:カラムブレークを挿入します                                         |
| wk continuous section break | 5 | 継続したセクションブレークを定義します(一般的には新しいページに移らずにページ内でカラムの数を変更するために使用されます) |
| wk line break               | 0 | (同じ段落内での)改行                                                   |
| wk page break               | 2 | 改ページ：新しいページを定義します。                                            |
| wk paragraph break          | 4 | 段落ブレーク: 新しい段落を定義します。                                          |
| wk section break            | 1 | セクションブレーク:新しいセクションを定義します。                                     |

**返される値**

**WP Get breaks** はレンジオブジェクトのコレクションを返し、それぞれのオブジェクトにはtargetObj 内のブレークの詳細が格納されています。それぞれのレンジオブジェクトには読み出し専用の特定のプロパティが格納されており、ブレークのタイプを表します:

| **プロパティ**       | **型** | **定数**        | **詳細**         |
| --------------- | ----- | ------------- | -------------- |
| \[ \].breakType | 数値    | wk break type | 読出専用: ブレークのタイプ |

*targetObj* 引数がレンジまたは要素の場合、ブレークはそれらが見つかった順に返されます。*targetObj* が4D Write Pro ドキュメントであった場合、ブレークは以下の順番で返されます:

1. 本文
2. セクション1 の最初のページヘッダー(あれば)
3. セクション1 の最初のページフッター(あれば)
4. セクション1 の左ページヘッダー(あれば)
5. セクション1 の左ページフッター(あれば)
6. セクション1 の右ページヘッダー(あれば)
7. セクション1 の右ページフッター(あれば)
8. セクション1 のメインヘッダー(あれば)
9. セクション1 のメインフッター(あれば)
10. セクション2、セクション3に対して同様に繰り返し
11. テキストボックス

*targetObj* 引数にブレークが何も含まれない場合(または*breakType* 引数で指定したタイプのブレークが何も含まれない場合)、空のコレクションが返されます。

#### 例題 

ドキュメント内のの全ての改行を段落ブレークで置き換えたい場合を考えます:

```4d
 var $_filteredBreaks : Collection
 var $break : Object
 $_filteredBreaks:=WP Get breaks(WParea;wk line break)
 For each($break;$_filteredBreaks)
    WP INSERT BREAK($break;wk paragraph break;wk replace)
 End for each
```

#### 参照 

[WP Get elements](wp-get-elements.md)  
[WP INSERT BREAK](../commands/wp-insert-break.md)  