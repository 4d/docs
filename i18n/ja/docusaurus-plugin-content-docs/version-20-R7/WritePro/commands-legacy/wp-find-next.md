---
id: wp-find-next
title: WP Find next
slug: /WritePro/commands/wp-find-next
displayed_sidebar: docs
---

<!--REF #_command_.WP Find next.Syntax-->**WP Find next** ( *targetObj* ; *searchAfter* ; *searchValue* ; *searchCondition* {; *replaceValue*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Find next.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| searchAfter | Object | &#8594;  | 検索を開始する開始点のレンジ |
| searchValue | Text | &#8594;  | 検索する値 |
| searchCondition | Integer | &#8594;  | 検索ルール |
| replaceValue | Text | &#8594;  | 置換後の文字列 |
| 戻り値 | Object | &#8592; | 見つかった/置換された値のレンジ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Find next.Summary-->**WP Find next** コマンドは、コマンドは*targetObj* 引数のオブジェクト内の*searchAfter* 引数で指定したレンジの後の部分内を、*searchValue* 引数の値を、*searchCondition* 引数の検索条件に基づいて検索を行います。<!-- END REF--> また任意の引数を使用することで見つかった結果を置き換えることができます。

**注**: **WP Find next** はフォーミュラ内のテキストを検索または置換はしません。この場合には、[WP Get formulas](wp-get-formulas.md) コマンドを使用して下さい。

*targetObj* 引数には、以下のいずれかを格納したオブジェクトを渡します:

* レンジ
* 要素(表 / 行 / セル / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / テキストボックス)
* 4D Write Pro ドキュメント

*searchAfter* 引数にはレンジを渡します。検索は定義されたレンジの直後から開始されます。またNULL を渡すことで*targetObj* 引数の最初の値から検索することができます。

**注意**: *targetObj* 引数に4D Write Pro ドキュメントを渡し、*searchAfter* 引数で指定したものがテキストボックス内にある場合、コマンドはまず親テキストボックス内にあるものから検索を始め、その後に次のテキストボックス内を昇順に探していきます。探していく順番は後述の通りです。

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

**返されるレンジ**

ファンクションは、見つかったまたは置き換えられた値について説明するレンジを返します:

* 検索オペレーション - 見つかった文字列の位置に合致するレンジ
* 置換オペレーション - 置換された文字列の位置に合致するレンジ

*targetObj* 引数がレンジまたはオブジェクトの場合、見つかった値は見つかった順に返されます。*targetObj* 引数が4D Write Pro ドキュメントの場合、見つかった値は以下の順番で返されます:

1. 本文
2. セクション1の最初のページヘッダー(あれば)
3. セクション1の最初のページフッター(あれば)
4. セクション1の左ページヘッダー(あれば)
5. セクション1の左ページフッター(あれば)
6. セクション1の右ページヘッダー(あれば)
7. セクション1の右ページフッター(あれば)
8. セクション1のメインヘッダー(あれば)
9. セクション1のメインフッター(あれば)
10. 上記を以降のセクション2、セクション3、、、に対して繰り返していきます
11. テキストボックス

検索の結果何も見つからなかった場合には空のレンジが返されます。

#### 例題 

```4d
 var $userSel ;$target ;$alphaRanges ;$nextRange : object
 var $options : Integer
 
  // 検索オプションを定義
 $options:=wk case insensitive+wk diacritic insensitive
 
  // カレントの位置を取得
 $userSel:=WP Selection range(*;"WParea")
 
  // ターゲットを定義
 $target:=WP Get body(WParea) // search only inside the body
 
  // (カレントのセレクションに基づいて)"alpha" 文字列について検索、または"次に"オカレンスをローンチする
 $nextRange:=WP Find next($target;$userSel;"alpha";$options)
```

#### 参照 

[WP Find all](wp-find-all.md)  
[WP Find previous](wp-find-previous.md)  