---
id: text-to-array
title: TEXT TO ARRAY
slug: /commands/text-to-array
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO ARRAY.Syntax-->**TEXT TO ARRAY** ( *varText* ; *arrText* ; *width* ; *fontName* ; *fontSize* {; *fontStyle* {; *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| varText | Text | &#8594;  | 分割する元のテキスト |
| arrText | Text array | &#8592; | 単語または行に分割されたテキストを受け取る配列 |
| width | Integer | &#8594;  | 文字列の最大幅 (ピクセル) |
| fontName | Text | &#8594;  | フォント名 |
| fontSize | Integer | &#8594;  | フォントサイズ |
| fontStyle | Integer | &#8594;  | フォントスタイル |
| * | 演算子 | &#8594;  | 指定時、テキストをマルチスタイルとして解釈する |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.TEXT TO ARRAY.Summary-->**TEXT TO ARRAY**コマンドはテキスト変数をテキスト配列変換します。<!-- END REF-->元の*varText*テキストは (スタイル付きであってもなくても) 分割され、*arrText*配列の要素となり、コマンドから返されます。このコマンドを使用して例えば適切な位置でテキストが分割されたメール本文を作成することができます。

テキストの分割はコマンドに渡される行幅やテキスト属性に基づいて計算されます。 

*varText* 引数には配列要素に分解する元のテキストを渡します。このテキストはマルチスタイルであってもなくてもかまいません。マルチスタイルの場合、いくつかの引数は無視されます。

*arrText* 引数にはテキスト配列を渡します。この配列には分割されたテキストを要素とするテキスト配列が返されます。

*width* 引数にはテキストを分割する際のサイズ計算に用いる行の幅をピクセル単位で返します。テキスト全体に対しテキストの描画属性 (フォント名やサイズ、スタイル) を考慮に入れたうえで、コマンドはこのサイズに収まる単語の切れ目を計算します。 

* マルチスタイルテキストの場合、元のテキストのスタイルが計算に使用され、以降の引数はコマンドに渡されても無視されます。この場合結果配列に格納されるテキストは元のスタイルを保持します。
* スタイルなしのテキストの場合、コマンドが行の長さを決定できるようにするため、すべての引数を渡さなければなりません。

各配列要素には最低一つの単語が含まれます。*width* に渡された値が分割ルールに対し小さすぎる場合、配列は渡された引数に基づいて可能な限り計算されて作成され、OK変数に0が返されます。例えば3 ピクセル幅を渡した場合、ほとんどの単語はこの長さより大きくなるでしょう。このようなケースではOK変数が0となります。  
4Dが単語の切れ目を認識できないような場合には、最大幅を超えた要素が作成されることもある点に留意してください。  
またこれは配列の最大際要素数は論理的に*varText*の単語数になることを意味します。

*fontName* と *fontSize* 引数にはそれぞれ、*varText* の分割計算の際に使用するフォント名とサイズを渡します。これらの引数はスタイルなしテキストの場合に必須です。 

*fontStyle* 引数には*Font Styles*テーマの以下の定数を1つ以上渡せます:

| 定数        | 型    | 値 |
| --------- | ---- | - |
| Bold      | 倍長整数 | 1 |
| Italic    | 倍長整数 | 2 |
| Plain     | 倍長整数 | 0 |
| Underline | 倍長整数 | 4 |

この引数は省略可能です。省略した場合Normalスタイルが使用されます。 

オプションの *\** 引数を指定すると、マルチスタイルテキストの場合で、元のテキストにテキスト属性が指定されていない場合、*fontName*, *fontSize* そして *fontStyle* 引数に渡した値を使用するよう指示することができます。しかしこれらの属性が元のテキスト内で定義されていた場合は無視されます。

#### 例題 1 

スタイル付きテキストを200ピクセル幅で分割します:

```4d
 TEXT TO ARRAY(theText;TextArray;200;"Arial";20;Normal;*)
  // Arial, 20, そして Normal 属性はマルチスタイルテキスト中でこれらの属性が指定されていない場合にのみ使用されます
```

#### 例題 2 

スタイルなしテキストを350ピクセル幅、Bodoni Boldフォント、サイズ14で分割します。フォントが利用できない場合コマンドは正しく動作しないので、フォントの存在をチェックしなければなりません:

```4d
 ARRAY TEXT($FontList;0)
 FONT LIST($FontList)
 $Font:="Bodoni"
 $p:=Find in array($FontList;$Font)
 If($p>0)
    TEXT TO ARRAY(theText;TextArray;350;"Bodoni";14;Bold)
 Else
  // 他のフォントを使用する
 End if
```

#### 例題 3 

スタイル付きテキストをスタイルなしのArial Normalフォント、サイズ12、最大幅600ピクセルで印刷したいとします:

```4d
  // マルチスタイルテキストをスタイルなしテキストに変換します:
 $RawText:=OBJECT Get plain text(vText)
  // 配列を作成します
 TEXT TO ARRAY($RawText;TextArray;600;"Arial";12)
```

#### 例題 4 

400ピクセル幅のエリアを印刷します。テキストは最大80行で可能な限り大きなフォント (最大24ポイント) を使用します:

```4d
 ARRAY TEXT(TextArray;0)
 $Size:=24
 Repeat
    TEXT TO ARRAY($RawText;TextArray;400;"Arial";$Size)
    $Size:=$Size-1
    $n:=Size of array(TextArray)
 Until($n<=80)
```

#### 参照 

[Split string](split-string.md)  
[ST Get plain text](st-get-plain-text.md)  
[ST Get text](st-get-text.md)  