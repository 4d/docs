---
id: font-style-list
title: FONT STYLE LIST
slug: /commands/font-style-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT STYLE LIST.Syntax-->**FONT STYLE LIST** ( *fontFamily* ; *fontStyleList* ; *fontNameList* )<!-- END REF-->
<!--REF #_command_.FONT STYLE LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fontFamily | Text | &#8594;  | フォントファミリー名 |
| fontStyleList | Text array | &#8592; | フォントファミリーによってサポートされるフォントスタイルの一覧 |
| fontNameList | Text array | &#8592; | フォントファミリーによってサポートされるフォント名の完全な一覧 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FONT STYLE LIST.Summary-->**FONT STYLE LIST**コマンドは*fontFamily*引数で定義されたフォントファミリーによってサポートされているフォントスタイルの一覧と、サポートされているフォント名の完全な一覧を返します。<!-- END REF-->このコマンドを使用すると、特に4D Write Proエリアのコンテキストにおいて、フォントとフォントスタイルを管理するインターフェースをデザインする事ができます(*4D Write Proリファレンス*)。

*fontFamily*引数には、サポートされるフォントスタイルとフォント名を知りたいフォントファミリーの名前を渡します。

*fontStyleList*引数には、*fontFamily*引数のフォントファミリーでサポートされるフォントスタイル一覧を受け取るテキスト配列を渡します。スタイルはローカライズされた名前で返されます(例えば"Italic"要素はスペイン語のシステムでは"Itálico"と返されます)ので、例えばローカライズされた"Style"ポップアップメニューを作成する事もできます。

*fontNameList*引数には、*fontFamily*引数のフォントファミリーでサポートされるフォント名の完全な一覧を受け取るテキスト配列を渡します。*fontStyleList*配列とは異なり、*fontNameList*配列はローカライズされていない値、つまりシステム認証に基づいたフォント名を返します。そのため、返されるフォント名はシステム言語とは独立しています。この配列の要素は、*WP SET ATTRIBUTES*コマンドのwk font4D Write Pro属性で使用される事を想定している文字列です。この機能を使用すれば、4D Write Proドキュメントはフォント名を保存し、その後どのようなシステム言語のマシンで開いてもフォントの問題を引き起こす事なく開くことができます。

*fontFamily*で指定したフォントファミリーがマシン上に見つからない場合、空の配列が返されます。マシン上で使用可能なフォントファミリーの一覧を取得するためには、[FONT LIST](font-list.md)コマンドを使用して下さい。

#### 例題 

"Verdana"フォントファミリー(使用可能であれば)のスタイルを選択したい場合を考えます:

```4d
 ARRAY TEXT($aTfonts;0)
 ARRAY TEXT($aTStyles;0)
 ARRAY TEXT($aTnames;0)
 var $numStyle : Integer
 
 FONT LIST($aTfonts)
 $numStyle:=Find in array($aTfonts;"Verdana")
 If($numStyle#0)
    FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)
 End if
 
  //一例として、返される配列は以下の様なものになります:
  //$aTStyles{1}="Normal"
  //$aTStyles{1}="Italic"
  //$aTStyles{1}="Bold"
  //$aTStyles{1}="Bold Italic"
 
  // $aTnames{1}="Verdana"
  // $aTnames{1}="Verdana Italic"
  // $aTnames{1}="Verdana Bold"
  // $aTnames{1}="Verdana Bold Italic"
```

#### 参照 

[FONT LIST](font-list.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1362 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


