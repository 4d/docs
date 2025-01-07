---
id: wp-selection-range
title: WP Selection range
slug: /WritePro/commands/wp-selection-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Selection range.Syntax-->**WP Selection range** ( {* ;} *wpArea* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Selection range.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、wpAreaはオブジェクト名(文字列)。省略時はwpAreaはオブジェクトフィールドあるいは変数。 |
| wpArea | Text | &#8594;  | フォームオブジェクト名(*指定時)、または4D Write Proオブジェクト変数またはフィールド(*省略時) |
| 戻り値 | Object | &#8592; | レンジオブジェクト または ピクチャーオブジェクト |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 互換性に関する注意 

<!--REF #_command_.WP Selection range.Summary-->**WP Selection range** は以前のバージョンの4D Write Pro では**WP Get selection** という名前でした。<!-- END REF-->分かりやすさのために改名されました。

#### 説明 

**WP Selection range**コマンドは*wpArea*引数で指定した4D Write Proエリア内で現在選択されているコンテンツに基づいた、新しいレンジオブジェクトあるいはピクチャーオブジェクトを返します。

任意の *\** 引数を渡した場合、*wpArea*がフォームオブジェクト名(文字列)である事を指示します。この引数を渡さなかった場合、*wpArea*が4D Write Proオブジェクト変数あるいはフィールドであることを指示します。*wpArea*引数に4D Write Proエリアが渡されなかった場合、空のオブジェクトが返されます。

**注**: このコマンドを使用するには、*wpArea* がフォームに関連付けられている(つまりカレントのフォーム/ページ上に表示されている)必要があります。

アンカーされた画像(位置が固定されたピクチャー)が*wpArea* 引数内で選択されている場合、**WP Selection range** コマンドはレンジオブジェクトではなく、ピクチャー参照オブエジェクトを返します(詳細な情報については、[WP Add picture](../commands/wp-add-picture.md) コマンドの詳細を参照してください)。それ以外の場合には、コマンドは新しいレンジオブジェクトを返します。レンジオブジェクトの詳細については、*セレクションレンジコマンド* を参照してください。

#### 例題 

4D Write Proエリアから選択されたテキストを取得したい場合を考えます:

```4d
 $range:=WP Selection range(*;"WParea")
```

#### 参照 

[WP Paragraph range](wp-paragraph-range.md)  
[WP Picture range](wp-picture-range.md)  
[WP Text range](wp-text-range.md)  