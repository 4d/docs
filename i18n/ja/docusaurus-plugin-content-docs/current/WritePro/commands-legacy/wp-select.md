---
id: wp-select
title: WP SELECT
slug: /WritePro/commands/wp-select
displayed_sidebar: docs
---

<!--REF #_command_.WP SELECT.Syntax-->**WP SELECT** ( {{* ;} *wpArea*;} {*targetObj*} {; *startRange* ; *endRange*} )<!-- END REF-->
<!--REF #_command_.WP SELECT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、wpAreaはフォームオブジェクト名(文字列)。省略時、wpAreaはオブジェクトフィールドまたは変数。 |
| wpArea | Text, Object | &#8594;  | フォームオブジェクト名(*指定時)または4D Write Proオブジェクト変数またはフィールド(*省略時) |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| startRange | Integer | &#8594;  | テキストレンジの開始のオフセット |
| endRange | Integer | &#8594;  | テキストレンジの終わりのオフセット |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP SELECT.Summary-->**WP SELECT**コマンドは*wpArea* 引数で指定した4D Write Proエリアから、*targetObj* に基づいた、あるいは*startRange* と*endRange* で定義された新しいレンジに基づいた新しいセレクションを作成します。<!-- END REF-->

任意の *\** 引数を渡した場合、*wpArea*引数がフォームオブジェクト名(文字列)であることを指示します。この引数を省略した場合、*wpArea*引数が4D Write Proオブジェクト変数あるいはフィールドであることを指示します。*wpArea*引数に有効な4D Write Proエリアが渡されなかった場合、このコマンドは何もしません。

**注**: このコマンドを使用するには、*wpArea* がフォームオブジェクトに割り当てられている必要があります(つまりカレントのフォーム/ページに表示されている必要があります)。

セレクションを定義するためには、既存のオブジェクトを*targetObj* 引数に渡すか、範囲を指定する*startRange* / *endRange*のペアを渡します。

以下のシンタックスがサポートされます:

* *WP SELECT({\* ;} wpArea ; targetObj)*  
ここでの*targetObj* は、以下のいずれかです:  
   * レンジ  
   * 要素(テーブル / 行 / 段落 / アンカーされたピクチャーあるいはインラインピクチャー / 本文 / テキストボックス / ヘッダー / フッター / セクション / サブセクション)  
   * 4D Write Pro ドキュメント(本文要素のみ使用)
* *WP SELECT({\* ;} wpArea ; startRange ; endRange)*
* *WP SELECT( targetObj {; startRange ; endRange} )*  
ここでの*targetObj* は、以下のいずれかです:  
   * レンジ  
   * 要素(テーブル / 行 / 段落 / アンカーされたピクチャーあるいはインラインピクチャー / 本文 / ヘッダー / フッター / セクション / サブセクション)  
   * 4D Write Pro ドキュメント  
また*startRange* および *endRange* は、以下の要素に対してのみ使用可能です: 本文 / ヘッダー / フッター / セクション / サブセクション

*startRange* と*endRange* 引数にはエリアで選択したい最初の文字と最後の文字の位置に対応する値を渡します。*startRange* 引数にwk start text 定数を渡す事でエリアの最初を定義する事ができ、また*endRange* 引数にwk end text 定数を渡す事でエリアの最後を定義する事ができます。4D Write Proドキュメントは表示されているテキストだけではなく範囲内に含まれるフォーマットタグもあるという点に注意して下さい。

#### 例題 

以下のコードは:

```4d
 $range:=WP Text range([SAMPLE]WP;wk start text;12)
 WP SELECT(*;"WParea";$range)
```

... このコードと同じ意味になります:

```4d
 WP SELECT(*;"WParea";wk start text;12)
```

#### 参照 

[WP Text range](wp-text-range.md)  