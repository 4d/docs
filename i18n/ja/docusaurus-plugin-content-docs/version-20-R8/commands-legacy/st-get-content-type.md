---
id: st-get-content-type
title: ST Get content type
slug: /commands/st-get-content-type
displayed_sidebar: docs
---

<!--REF #_command_.ST Get content type.Syntax-->**ST Get content type** ( {* ;} *object* {; *startSel* {; *endSel* {; *startBlock* {; *endBlock*}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.ST Get content type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| startSel | Integer | &#8594;  | 選択範囲の開始地点 |
| endSel | Integer | &#8594;  | 選択範囲の終了地点 |
| startBlock | Integer | &#8592; | 選択範囲内の、同一のタイプの開始地点 |
| endBlock | Integer | &#8592; | 選択範囲内の、同一のタイプの終了地点 |
| 戻り値 | Integer | &#8592; | 内容のタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ST Get content type.Summary-->**ST Get content type**コマンドは、 *object* 引数で指定されたスタイル付テキストフィールドまたはテキスト変数内で見つかったコンテンツの型を返します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。このとき、オブジェクトがフォーカスされていた場合にはコマンドは編集中のテキストに関しての情報を返し、オブジェクトがフォーカスされていない場合にはコマンドはオブジェクトのデータソースの情報を返します。  
省略時には object 引数でフィールドまたは変数を指定します。この場合にはコマンドは変数またはフィールドの情報を返します。

省略時には *object* 引数でフィールドまたは変数を指定します。この場合にはコマンドは変数またはフィールドの情報を返します。  

任意の *startSel* 引数と *endSel* 引数は*object* 内のテキストの選択範囲を指定します。 *startSel* と *endSel* は標準テキストのみをカウントし、スタイルタグは文字数としてはカウントされません。参照は一文字としてカウントされるということに注意して下さい。

* *startSel* と *endSel* の両方を渡した場合、 **ST Get content type** コマンドは指定された範囲内に限りコンテンツを評価します。
* *startSel* のみを指定した場合、もしくは *endSel* の値が*object* 内の総文字数より大きい場合は、 コマンドは *startSel* の位置からテキストの終わりまでの範囲内のコンテンツのみ評価されます。
* *startSel* と *endSel* の両方を省略した場合、現在選択されている範囲のコンテンツのみが評価されます。

4D では、選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡す定数をご用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります: 

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これら二つの定数を使用する際には、 *object* 引数にオブジェクト名を渡してあげる必要があります。フィールドへの参照または変数を渡した場合、コマンドはオブジェクト内の全てのテキストに適用されます。

**注:** もし *startSel* 引数が *endSel* 引数より大きい場合、コマンドは何も行わず、 *OK* 変数は0に設定されます(ただし *endSel* が0である場合を除く)。

任意の *startBlock* 引数と *endBlock* 引数は、オブジェクト内、もしくはオブジェクトの中で選択された範囲の中で、タイプが連続する位置を探し、その最初と最後の文字を返します。例えば、選択範囲内に4D式に続いて標準テキストが含まれていた場合、 *startBlock* と*endBlock* はそれぞれ4D式の開始地点と終了地点を返します。この操作は選択範囲内の全てを処理するためにループさせることができます。

コマンドは、選択範囲内を調べた結果特定できたタイプを示す値を返します。 返される値は、 "*Multistyle Text*" テーマ内にある、以下のどれかになります: 

| 定数                  | 型    | 値 | コメント                                       |
| ------------------- | ---- | - | ------------------------------------------ |
| ST Expression type  | 倍長整数 | 2 | セレクションには式参照のみ含まれます。                        |
| ST Mixed type       | 倍長整数 | 3 | セレクションには少なくとも二つの異なる型のコンテンツが含まれます。          |
| ST Picture type     | 倍長整数 | 6 | セレクションにはピクチャーしか含まれていません(4D Write Proエリアのみ) |
| ST Plain type       | 倍長整数 | 0 | セレクションにはテキストのみ含まれ、参照はありません。                |
| ST Unknown tag type | 倍長整数 | 4 | セレクションには、未知の型のタグのみ含まれます。                   |
| ST URL type         | 倍長整数 | 1 | セレクションにはURL参照のみ含まれます。                      |
| ST User type        | 倍長整数 | 5 | セレクションには、カスタムの参照のみ含まれます。                   |

#### 例題 

エリア内で選択されたコンテンツのタイプによって表示されるコンテキストメニューを変えたい場合:

```4d
 Case of
    :(Form event code=On Clicked)
  //選択された範囲を取得
       GET HIGHLIGHT(*;"myText";startSel;endSel)
       If(Contextual click&(Macintosh control down=False)) //コンテキストメニューを呼び出し
          If(startSel=endSel) // コンテンツが選択されていない場合
  //一部のコマンドのみ有効化
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;2)
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;4)
             ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
             ...
          Else // コンテンツの型を取得
             CT_Texttype:=ST Get content type(*;"myText";startSel;endSel)
             Case of // 異なるタイプによって処理を変える
                :(CT_Texttype=ST URL type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                :(CT_Texttype=ST Expression type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                Else
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
             End case
          End if
          MOUSE POSITION($xCoord;$yCoord;$ButtonState)
          $AlphaVar:=Dynamic pop up menu(<>menu_STYLEDTEXT;"";$xCoord;$yCoord)
          startSel:=-3
          endSel:=-3
       End if
       ...
    End if
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1286 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


