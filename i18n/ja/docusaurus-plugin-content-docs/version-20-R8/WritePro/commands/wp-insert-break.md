---
id: wp-insert-break
title: WP Insert break
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert break.Syntax-->**WP Insert break** ( *targetObj* ; *breakType* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert break.Params-->

| 引数          | 型       |                             | 説明                             |
| ----------- | ------- | --------------------------- | ------------------------------ |
| targetObj   | Object  | &#8594; | レンジまたは要素または4D Write Pro ドキュメント |
| breakType   | Integer | &#8594; | 挿入するブレークのタイプ                   |
| mode        | Integer | &#8594; | 挿入モード                          |
| rangeUpdate | Integer | &#8594; | レンジ更新モード                       |
| 戻り値         | Object  | &#8592; | ブレーク文字のテキストレンジ                 |

<!-- END REF-->

#### 説明

**WP Insert break** コマンドは<!--REF #_command_.WP Insert break.Summary-->コマンドは*mode* 引数や*rangeUpdate* 引数で指定された形で、*targetObj* 引数で指定されたレンジ内に*breakType* 引数で指定された型の新しいブレークを挿入し、ブレーク文字のテキストレンジを返します。<!-- END REF-->

*targetObj* 引数には、以下のいずれかを渡すことができます:

- レンジ
- 要素(表組 / 行 / 段落 / 本文 / ヘッダー / フッター / インラインピクチャー / セクション / サブセクション)
- 4D Write Pro ドキュメント

*breakType* 引数には、*4D Write Pro 定数* テーマから以下の定数のどれか一つを渡し、挿入するブレークのタイプを定義します:

| 定数                          | 型       | 値 | 説明                                                                               |
| --------------------------- | ------- | - | -------------------------------------------------------------------------------- |
| wk column break             | Integer | 3 | カラムブレーク:カラムブレークを挿入します                                            |
| wk continuous section break | Integer | 5 | 継続したセクションブレークを定義します(一般的には新しいページに移らずにページ内でカラムの数を変更するために使用されます) |
| wk line break               | Integer | 0 | (同じ段落内での)改行                                                   |
| wk page break               | Integer | 2 | 改ページ：新しいページを定義します。                                                               |
| wk paragraph break          | Integer | 4 | 段落ブレーク: 新しい段落を定義します。                                             |
| wk section break            | Integer | 1 | セクションブレーク:新しいセクションを定義します。                                        |

*mode* 引数には、対象となる*targetObj* レンジ内で使用されるブレークの挿入モードを指定する定数を渡します:

| 定数         | 型       | 値 | 説明                   |
| ---------- | ------- | - | -------------------- |
| wk append  | Integer | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | Integer | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | Integer | 0 | ターゲットのコンテンツを置き換える    |

- *targetObj* がレンジである場合、オプションの*rangeUpdate* 引数に以下の定数のいづれか一つを渡すことで挿入されたコンテンツが結果のレンジに含まれるかどうかを指定することができます:

| 定数                    | 型       | 値 | 説明                                                |
| --------------------- | ------- | - | ------------------------------------------------- |
| wk exclude from range | Integer | 1 | 挿入されたコンテンツを更新されたレンジに含めない                          |
| wk include in range   | Integer | 0 | 挿入されたコンテンツを更新されたレンジに含める(デフォルト) |

*rangeUpdate* 引数を渡さなかった場合、デフォルトでは挿入されたコンテンツは結果のレンジに含まれます。

- *targetObj* がレンジではない場合、*rangeUpdate* は無視されます。

#### 例題 1

請求書を作成する際、最後のページを除いてページブレーク(改ページ)を挿入したい場合を考えます:

```4d
 $nbInvoices:=Records in selection([INVOICE])
 For($j;1;$nbInvoices)
    ... //請求書を処理
    If($j#$nbInvoices) //最後のページを除いて改ページを挿入
       WP Insert break($buildRange;wk page break;wk append;wk exclude from range)
    End if
 End for
```

#### 例題 2

同じページ内に連続したセクションブレークを単一カラムセクションと2カラムセクションとの間に挿入したい場合を考えます。

1. セレクション位置に継続したセクションブレークを挿入して新しいセクションを作成します:

```4d
 $range:=WP Selection range(*;"WParea")  
 WP Insert break($range;wk continuous section break;wk append) 
```

![](../../assets/en/WritePro/commands/pict5562056.en.png)
2. 最初のセクションに対してカラム数を2に設定します:

```4d
 $section:=WP Get section(WParea;1)  
 WP SET ATTRIBUTES($section;wk column count;2)  
```

![](../../assets/en/WritePro/commands/pict5562058.en.png)

#### 参照

[WP Get breaks](../commands-legacy/wp-get-breaks.md)</br>
[WP Insert document body](wp-insert-document-body.md)