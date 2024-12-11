---
id: listbox-set-row-height
title: LISTBOX SET ROW HEIGHT
slug: /commands/listbox-set-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW HEIGHT.Syntax-->**LISTBOX SET ROW HEIGHT** ( {* ;} *object* ; *row* ; *height* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW HEIGHT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| row | Integer | &#8594;  | 高さを指定するリストボックスの行 |
| height | Integer | &#8594;  | 行の高さ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET ROW HEIGHT.Summary-->**LISTBOX SET ROW HEIGHT** コマンドは、*object* および *\** パラメーターで指定されたリストボックスの、*row* で指定された行の高さを変更します。<!-- END REF-->

任意の *\** 引数を渡すことにより、*object* 引数がオブジェクト名(文字列)であることを示します。この引数を渡さない場合、*object* が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は *オブジェクトプロパティ* を参照してください。

*row* に指定した行がリストボックスに存在しなかった場合、このコマンドは何もしません。

指定した*height* 引数が使用する単位は、プロパティリスト、あるいは事前に使用した[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)コマンドなどでリストボックス行全体に対して定義されたものと対応します。

**LISTBOX SET ROW HEIGHT**コマンドは、プロパティリスト内で指定されている行高さ配列が存在する場合にはそれを変更し(詳細な情報については、デザインリファレンスマニュアルの*行高さ配列*の章を参照して下さい)、そうでない場合には動的に行高さ配列を作成します。このコマンドを使用して個別の行の高さを設定することは、プロパティリストにて行高さ配列を設定する事と全く同じ視覚的な結果をもたらします。しかしながら、行高さ配列に値を入力する方が、このコマンドをループで呼び出してリストボックスの行を一つ一つ設定するより速いです。

**重要な注記:** このコマンドのあとに、異なる高さの単位を指定して [LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md) コマンドを呼び出した場合、このコマンドで設定された値がデフォルト値として扱われ、**LISTBOX SET ROW HEIGHT**で設定された行の高さはどれも置き換えられ初期化されます (例題2参照)。

#### 例題 1 

以下のリストボックス内のいくつかの行の高さを変更したい場合を考えます:

![](../assets/en/commands/pict3071133.en.png)

以下のコードを実行した場合、

```4d
  //カレントの単位はピクセル
 LISTBOX SET ROW HEIGHT(*;"listboxname";3;40) //Kuwait
 LISTBOX SET ROW HEIGHT(*;"listboxname";7;14) //Serbia
```

... 以下のような結果になります。

![](../assets/en/commands/pict3071135.en.png)

#### 例題 2 

まずデフォルトの行高さを設定し、その後 **LISTBOX SET ROW HEIGHT** コマンドを使って、個別に行高さを指定します:

```4d
 LISTBOX SET ROWS HEIGHT(*;"listboxname";25;lk pixels) // グローバルな行高さ (ピクセル単位)
 
 LISTBOX SET ROW HEIGHT(*;"listboxname";1;30) // 行1: 30ピクセル
 LISTBOX SET ROW HEIGHT(*;"listboxname";5;40) // 行5: 40ピクセル
 LISTBOX SET ROW HEIGHT(*;"listboxname";11;50) // 行11: 50ピクセル
```

その後、次のコードを実行します:

```4d
 LISTBOX SET ROWS HEIGHT(*;"listboxname";18;lk pixels)
```

すると、行高さはグローバルに 18ピクセルに設定されますが、高さの単位が変更されなかったため、**LISTBOX SET ROW HEIGHT** コマンドで個別に指定した行1、5、11の高さ設定 (30、40、50ピクセル) がいきています。  
  
しかし、次のコードを実行すると:

```4d
 LISTBOX SET ROWS HEIGHT(*;"listboxname";2;lk lines)
```

高さの単位がピクセルから行数に変更されたため、行1、5、11の高さ設定が [LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md) で指定されたグローバルのデフォルト値 (2行) にリセットされます。設定値が自動変換されないため、単位の変更は設定の初期化につながります。

#### 参照 

  
[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1409 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


