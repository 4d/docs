---
id: wp-insert-formula
title: WP INSERT FORMULA
slug: /WritePro/commands/wp-insert-formula
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT FORMULA.Syntax-->**WP INSERT FORMULA** ( *targetObj* ; *formula* ; *mode* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP INSERT FORMULA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Proドキュメント |
| formula | Object | &#8594;  | フォーミュラオブジェクト |
| mode | Number | &#8594;  | 挿入モード |
| rangeUpdate | Number | &#8594;  | 挿入されたコンテンツをレンジ内に含めるか含めないかを指定 |

<!-- END REF-->

## 説明 

<!--REF #_command_.WP INSERT FORMULA.Summary-->**WP INSERT FORMULA** コマンドは、*targetObj* 引数で指定したターゲット内に*formula* 引数のフォーミュラを、*mode* 引数で指定したモードで挿入します。<!-- END REF-->

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素(表 / 行 / セル / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / インライン画像)
* 4D Write Pro ドキュメント

*formula* 引数には、評価される4D フォーミュラを渡します。以下のものを渡すことができます:

* [**Formula**](https://developer.4d.com/docs/ja/API/FunctionClass/#formula) または [**Formula from string**](https://developer.4d.com/docs/ja/API/FunctionClass#formula-from-string) コマンドで作成された [フォーミュラオブジェクト](https://developer.4d.com/docs/ja/API/FunctionClass/#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9F%E3%83%A5%E3%83%A9%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88)
* または以下の2つのプロパティを格納しているオブジェクト:  

| **プロパティ** | **型**  | **詳細**                                                                                                                                                                                                                                                                                                                                                                       |  
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| name      | 文字列    | ドキュメント内で表示するフォーミュラの名前                                                                                                                                                                                                                                                                                                                                                        |  
| formula   | オブジェクト | [**Formula**](https://developer.4d.com/docs/ja/API/FunctionClass/#formula) または [**Formula from string**](https://developer.4d.com/docs/ja/API/FunctionClass#formula-from-string) コマンドで作成された [フォーミュラオブジェクト](https://developer.4d.com/docs/ja/API/FunctionClass/#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9F%E3%83%A5%E3%83%A9%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88) |  
    
フォーミュラの*name* プロパティがあるオブジェクトを使用する場合、ドキュメント内で、フォーミュラが参照として表示される場合にはフォーミュラ参照ではなくそのname の名前が表示され、値または記号として表示される場合にはフォーミュラtip に名前が表示されます。*name* プロパティが空の文字列を格納しているか省略されている場合、それはオブジェクトから削除され、デフォルトでフォーミュラが表示されます。詳細な情報については、*フォーミュラの管理* のページを参照してください。

*mode* 引数には、使用する挿入モードを指定する、以下の定数のいづれか一つを渡します:

| 定数         | 型    | 値 | コメント                 |
| ---------- | ---- | - | -------------------- |
| wk append  | 倍長整数 | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | 倍長整数 | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | 倍長整数 | 0 | ターゲットのコンテンツを置き換える    |

* *targetObj* 引数のターゲットがレンジである場合、任意の*rangeUpdate* 引数に以下の定数のいづれか一つを渡すことで、結果のレンジに*formula* 引数のフォーミュラが含まれるかどうかを指定することができます:  
    
| 定数                    | 型    | 値 | コメント                      |  
| --------------------- | ---- | - | ------------------------- |  
| wk exclude from range | 倍長整数 | 1 | 更新されたレンジには、以前のコンテンツのみを含める |  
| wk include in range   | 倍長整数 | 0 | 更新されたレンジに挿入コンテンツを含める      |  
    
*rangeUpdate* 引数を渡さない場合、デフォルトで挿入された*formula* 引数のフォーミュラは、結果のレンジに含まれます。
* *targetObj* 引数のターゲットがレンジでない場合、*rangeUpdate* 引数は無視されます。

**注意:** フォーミュラオブジェクトは、呼び出されたときに、そのフォーミュラオブジェクトを作成したデータベースまたはコンポーネントのコンテキスト内で評価されるという点に注意してください。

## 例題 1 

全てのCurrent date フォーミュラを、フォーマットされた文字列で置き換えたい場合を考えます:

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object
 
  // 検索するフォーミュラを定義
 $find:=Formula(Current date)
 
  // 置換するフォーミュラを定義
 $newFormula:=Formula(String(Current date;System date long))
 
  // ドキュメント内にあるフォーミュラを全て検索
 $_formulas:=WP Get formulas(WriteProArea)
 
  // WP Get formulas から取得したコレクション内をクエリする
 $_formulas:=$_formulas.query("formula.source =:1";$find.source)
 
  // それぞれのフォーミュラを置き換える
 For each($formula;$_formulas)
    WP INSERT FORMULA($formula.range;$newFormula;wk replace)
 End for each
```

## 例題 2 

顧客の名前にフォーミュラによる名前を使用したい場合を考えます:

```4d
  //データを追加する
 $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  //name プロパティを持つフォーミュラオブジェクトを作成する
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Customer name"
 
  //テキストとして挿入
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range;"Dear ";wk append)
 WP INSERT FORMULA($range;$o;wk append)
```

使用した結果:

![](../../assets/en/WritePro/commands/pict6433508.en.png)

## 参照 

[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
*フォーミュラの管理*  