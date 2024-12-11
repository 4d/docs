---
id: form-convert-to-dynamic
title: FORM Convert to dynamic
slug: /commands/form-convert-to-dynamic
displayed_sidebar: docs
---

<!--REF #_command_.FORM Convert to dynamic.Syntax-->**FORM Convert to dynamic** ( {*aTable* ;} *formName* ) : Object<!-- END REF-->
<!--REF #_command_.FORM Convert to dynamic.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | フォームテーブル |
| formName | Text | &#8594;  | "クラシック"プロジェクトフォーム名またはテーブルフォーム名 |
| 戻り値 | Object | &#8592; | formNameのフォームをダイナミックフォームに変換したもの |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM Convert to dynamic.Summary-->**FORM Convert to dynamic** コマンドは、*formName* 引数で指定したフォーム(クラシックフォーム)をダイナミックフォームへと変換し、それをオブジェクト型で返します。<!-- END REF-->

*クラシックフォーム* とはバイナリーフォーマットでストラクチャーファイルに保存されている4D フォームのことです。*ダイナミックフォーム* とは4D オブジェクト(あるいは .json ファイル)でストラクチャーが定義されているフォームのことです。詳細な情報については、*ダイナミックフォーム*の章を参照してください。

テーブルフォームを変換したい場合、*aTable* 引数にフォームテーブルを渡し、*formName* 引数にフォーム名を文字列として渡します。プロジェクトフォームの場合、フォーム名を直接*formName* 引数に渡します。

[DIALOG](dialog.md) コマンドに対して返されたオブジェクトを渡せば直接フォームが実行されるようにするために、**FORM Convert to dynamic** はいくつかのルールを適用しながらフォームを変換します:

* リスト参照は、lists.json ファイルを参照するJSON ポインターではなく、リスト名として書き出されます。
* 命名フィルターおよび命名表示フォーマット(の接頭辞を使用しているもの)はfilters.json ファイルを参照するJSON ポインターではなく、値として書き出されます。
* ピクチャーライブラリのピクチャーはこのコマンドによっては書き出されないため、ピクチャーライブラリのピクチャーを参照しているオブジェクトは変換後も引き続きライブラリを参照しつづけます。"icon"プロパティには特殊なurlである"pictlib:xx" が使用され、この*xx* はライブラリのid が入ります。
* スタティックなピクチャーは、ピクチャー型のオブジェクトプロパティとして変換されます。
* 廃止予定の古いオブジェクトは無視されます。ダイナミックフォームでサポートされないオブジェクトまたはプロパティの一覧については、 の段落を参照してください。

**注:** フォームメソッドおよびフォームオブジェクトメソッドへの参照は、内部IDで書き出しがされます。これは、カレントデータベース内のみにおいて、*formName* のフォームのメソッドが変更されていない場合にのみ有効です。書き出されたフォームを他のコンテキストで使用したい場合、フォーム、あるいはフォームオブジェクト"メソッド"プロパティに、プロジェクトメソッド名を割り当てる必要があります(例題参照)。

#### 例題 

クラシックなフォームを変換し、編集した後、それを表示したい場合を考えます。

元のフォームはこちらです:

![](../assets/en/commands/pict3977360.en.png)

  
```4d
 var $dynForm : Object
 $dynForm:=FORM Convert to dynamic("FormToConvert")
 $dynForm.pages[1].objects.TitleArea.stroke:="red"
 $dynForm.pages[1].objects.bOK.method:="myMethod" // プロジェクトメソッドを割り当てる
 DIALOG($dynForm)
```

  
コードを実行した結果がこちらです:

![](../assets/en/commands/pict3977362.en.png)

#### 参照 

[DIALOG](dialog.md)  
[Export structure file](export-structure-file.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1570 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


