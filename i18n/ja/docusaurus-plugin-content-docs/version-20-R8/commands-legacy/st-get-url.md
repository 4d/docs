---
id: st-get-url
title: ST GET URL
slug: /commands/st-get-url
displayed_sidebar: docs
---

<!--REF #_command_.ST GET URL.Syntax-->**ST GET URL** ( {* ;} *object* ; *urlText* ; *urlAddress* {; *startSel* {; *endSel*}} )<!-- END REF-->
<!--REF #_command_.ST GET URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| urlText | Text | &#8592; | リンクの表示テキスト |
| urlAddress | Text | &#8592; | URL アドレス |
| startSel | Integer | &#8594;  | 選択範囲の開始地点 |
| endSel | Integer | &#8594;  | 選択範囲の終了地点 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ST GET URL.Summary-->**ST GET URL**コマンドは、 *object* 引数で指定されたスタイル付テキストフィールドまたはテキスト変数内で見つかった最初のURL の表示テキストとアドレスを返します。<!-- END REF-->

表示テキストとURL アドレスは、それぞれ *urlText* 引数と *urlAddress* 引数に返されます。もし選択範囲内にURL が含まれない場合は、これらの引数には空の文字列が返されます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。このとき、オブジェクトがフォーカスされていた場合にはコマンドは編集中のテキストに関しての情報を返し、オブジェクトがフォーカスされていない場合にはコマンドはオブジェクトのデータソースの情報を返します。  
省略時には *object* 引数でフィールドまたは変数を指定します。この場合にはコマンドは変数またはフィールドの情報を返します。

任意の *startSel* 引数と *endSel* 引数はオブジェクト内のテキストの選択範囲を指定します。 *startSel* と *endSel* は標準テキストのみをカウントし、スタイルタグは文字数としてはカウントされません。参照は一文字としてカウントされるということに注意して下さい。

* *startSel* と *endSel* の両方を渡した場合、 **ST GET URL** コマンドは指定された範囲内に限り URL を探します。
* *startSel* のみを指定した場合、もしくは *endSel* の値が*object* 内の総文字数より大きい場合は、 コマンドはstartSel の位置からテキストの終わりまでの範囲内に限り URL を探します。
* *startSel* と *endSel* の両方を省略した場合、現在選択中の範囲内に限りURL を探します。

4D では、選択範囲を自動的に指定するために *startSel* 引数と *endSel* 引数に渡す定数をご用意しています。これらの定数は "*Multistyle Text*" テーマ内にあります:

| 定数                 | 型    | 値      | コメント                                      |
| ------------------ | ---- | ------ | ----------------------------------------- |
| ST End highlight   | 倍長整数 | \-1001 | オブジェクト内のカレントのテキストセレクションの最後の文字を指定します(\*)   |
| ST End text        | 倍長整数 | 0      | オブジェクトに含まれるテキストの最後の文字を指定します。              |
| ST Start highlight | 倍長整数 | \-1000 | オブジェクト内のテキストのカレントセレクションの最初の文字をを指定します (\*) |
| ST Start text      | 倍長整数 | 1      | オブジェクト内に含まれるテキストの最初の文字を指定します。             |

(\*) これら二つの定数を使用する際には、 *object* 引数にオブジェクト名を渡してあげる必要があります。フィールドへの参照または変数を渡した場合、コマンドはオブジェクト内の全てのテキストに適用されます。

**注:** もし *startSel* 引数が *endSel* 引数より大きい場合、コマンドは何も行わず、 *OK* 変数は0に設定されます(ただし *endSel* が0である場合を除く)。

#### 例題 

ダブルクリックイベントがあると、URLが実際にあるかどうかをチェックし、あった場合にはユーザーがそれを変更できるようにその値を取得したダイアログボックスを表示する、という場合について考えます:

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST URL type) //URL
          ST GET URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
          $winRef:=Open form window("Dial_InsertURL";Movable form dialog box;Horizontally centered;Vertically centered;*)
          SET WINDOW TITLE("URL settings")
          DIALOG("Dial_InsertURL")
          If(OK=1)
             ST INSERT URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;startSel+1)
          End if
       End if
 End case
```

#### 参照 

[ST INSERT URL](st-insert-url.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1288 |
| スレッドセーフである | &cross; |


