---
id: wp-find-all
title: WP Find all
slug: /WritePro/commands/wp-find-all
displayed_sidebar: docs
---

<!--REF #_command_.WP Find all.Syntax-->**WP Find all** ( *targetObj* ; *searchValue* ; *searchCondition* {; *replaceValue*} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Find all.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro ドキュメントのレンジまたは要素 |
| searchValue | Text | &#8594;  | 検索する値 |
| searchCondition | Integer | &#8594;  | 検索条件 |
| replaceValue | Text | &#8594;  | 置換後の文字列 |
| 戻り値 | Collection | &#8592; | レンジオブジェクトのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Find all.Summary-->**WP Find all** コマンドは*targetObj* 引数のオブジェクト内を、*searchValue* 引数の値を、*searchCondition* 引数の検索条件に基づいて検索を行います。<!-- END REF-->また任意の引数を使用することで見つかった結果を置き換えることができます。

**注**: **WP Find all** はフォーミュラ内のテキストを検索または置換はしません。この場合には、[WP Get formulas](wp-get-formulas.md) コマンドを使用して下さい。

*targetObj* 引数には、以下のいずれかを格納したオブジェクトを渡します:

* レンジ
* 要素(表 / 行 / セル / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / テキストボックス)
* 4D Write Pro ドキュメント

*searchValue* 引数を使用して*targetObj* 引数内で検索するテキストを指定することができます。

*searchCondition* 引数を使用すると、どのように検索が実行されるかを指定することができます。以下の定数の一つ(またはその組み合わせ)を使用することができます: 

| 定数                       | コメント                                                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| wk case insensitive      | 文字列は大文字小文字の差異を考慮せずに比較されます。この場合、ダイアクリティカルマークは考慮されるという点に注意して下さい。例えば、"A" と"a" は同じとみなされますが、"a" と"à" は同じとはみなされません。                                   |
| wk diacritic insensitive | 文字列は、比較の際に文字のダイアクリティカルマーク(例: アクセントまたはシンボル)は無視されます。例えば、"a" と"à" は同じとみなされます。                                                                      |
| wk find reverse          | 検索は逆順で実行されます。                                                                                                                                   |
| wk kana insensitive      | 日本語のみ。文字列はその五十音に基づいて比較されます(表記は無視されます)。例えば、"あ" と"ア" は同じとみなされます。 このオプションが設定されている場合、wk width insensitive  も暗示的に設定されます(セットとみなされます)。しかしながら逆は設定されません。 |
| wk keep character style  | テキストを置換する際、既存の文字スタイルは(可能であれば)保持されます。                                                                                                            |
| wk override protected    | 読み/書きのプロテクションは無視され、保護されているエリア内の文字列は置き換えられます。                                                                                                    |
| wk use keyboard language | 文字列の比較の際に、カレントのデータ言語(デフォルト)の代わりに、編集中のフォームオブジェクトのキーボード言語プロパティを使用します。 **注**: ドキュメントがオフスクリーンの場合には無視されます。                                           |
| wk whole word            | 完全な単語である文字列のみが考慮されます。他の文字列内に合致する文字列は考慮されません。例えば、"where" は"somewhere" の中にありますがその場合には見つかったとはみなされません。                                              |
| wk width insensitive     | 日本語のみ。文字列は全角/半角の差異を無視して比較されます。例えば、"ｱ" と "ア"は同じとみなされます。                                                                                          |

**注**: 文字列は、カレントのデータ言語に基づいて比較されます(ただしwk use keyboard language が使用されている場合を除く)。

任意の*replaceValue* 引数を使用すると、*targetObj* 引数内で*searchValue* 引数の値が見つかった場合に置き換えるテキストを指定することができます。

**返されるコレクション**

ファンクションは、見つかったまたは置き換えられたそれぞれの値について説明するレンジオブジェクトのコレクションを返します:

* 検索オペレーション - 見つかった文字列の位置に合致するレンジ
* 置換オペレーション - 置換された文字列の位置に合致するレンジ

*targetObj* 引数がレンジまたはオブジェクトの場合、見つかった値は見つかった順に返されます。*targetObj* 引数が4D Write Pro ドキュメントの場合、見つかった値は以下の順番で返されます:

1. 本文
2. セクション1の最初のページヘッダー(if any)
3. セクション1の最初のページフッター(if any)
4. セクション1の左ページヘッダー(if any)
5. セクション1の左ページフッター(if any)
6. セクション1の右ページヘッダー(if any)
7. セクション1の右ページフッター(if any)
8. セクション1のメインヘッダー(if any)
9. セクション1のメインフッター(if any)
10. 上記を以降のセクション2、セクション3、、、に対して繰り返していきます
11. テキストボックス

wk find reverse が使用された場合には順番が逆転します。

検索の結果何も見つからなかった場合には空のコレクションが返されます。

#### 例題 

```4d
 var $userSel ;$target ;$alphaRanges : Object
 var $bravoRanges: &NBSP;Collection
 var $options : Integer
 
  // 検索オプションを定義
 $options:=wk case insensitive+wk diacritic insensitive
 
  // カレントのユーザー位置を取得
 $userSel:=WP Selection range(*;"WParea")
 
  // ターゲットを定義
 $target:=WP Get body(WParea) // search only inside the body
 
  // 本文内にて全ての"alpha" を "bravo" に置き換える
 $bravoRanges:=WP Find all($target;"alpha";$options;"bravo")
```

#### 参照 

[WP Find next](wp-find-next.md)  
[WP Find previous](wp-find-previous.md)  