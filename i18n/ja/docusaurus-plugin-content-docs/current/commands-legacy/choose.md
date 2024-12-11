---
id: choose
title: Choose
slug: /commands/choose
displayed_sidebar: docs
---

<!--REF #_command_.Choose.Syntax-->**Choose** ( *criterion* ; *value* {; *value2* ; ... ; *valueN*} )  : any<!-- END REF-->
<!--REF #_command_.Choose.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| criterion | Boolean, Integer | &#8594;  | テストする値 |
| value | Expression | &#8594;  | 可能な値 |
| 戻り値 | any | &#8592; | 条件の値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Choose.Summary-->**Choose** コマンドは、引数*criterion* の値に応じて、引数*value1*、*value2* などに渡された値の1つを返します。<!-- END REF-->

ブールまたは数値タイプのいずれかを引数*criterion* に渡します。

* *criterion* がブールの場合、**Choose** はブールがTrueのとき*value1* を、Falseのとき*value2* を返します。この際コマンドは3つの引数、*criterion* 、*value1* と*value2* を期待します。
* *criterion* が整数の場合、**Choose** は*criterion* に対応する位置にある値を返します。値の採番は0から始まりますので注意してください (従って*value1* の位置は0です) 。この場合、コマンドは少なくとも2つの引数、*criterion* と*value1* を期待します。

コマンドは、引数*value* にすべてのデータタイプを受け入れます。しかしピクチャ、ポインタ、BLOBSおよび配列は除外です。それでも、渡されたすべての値が同じタイプであることを確かめる必要があります。この点において、4Dは照合を実行しません。

*criterion* に対応する値がない場合、**Choose** は引数*value* の型に対応する"null"値を返します (例えば数値タイプは0、文字列タイプは""など) 。

このコマンドを使用して簡単なコードを作成し、複数の行から成る"Case of"タイプのテストを置き換えることができます (例2を参照) 。これはフォーミュラが実行される場所でも非常に役に立ちます。クエリエディタ、フォーミュラのアプリケーション、クイックレポートエディタ、リストボックスで計算されるカラムなどです。

**警告:** **Choose** コマンドは実行前に*value* 引数のそれぞれの値を評価します。これはつまり次のようなことが起こることを意味します:

* *value* 引数が副作用(カウンターを更新する、何かを編集する等)を及ぼす動的な式であった場合、これらの作用は全ての場合において発生します。
* value 引数が無効な式であった場合、**Choose** は全ての場合においてエラーを返します。例えば、以下のコードはエラーを返します:  
```4d  
 $res:=Choose(True;"red1";"blue"+2) //error  
```

#### 例題 1 

ブール型条件を用いた、このコマンドの典型的な使用例を以下に示します。

```4d
 vTitle:=Choose([Person]Masculine;"Mr";"Ms")
```

このコードは以下のコードと完全に対等です。

```4d
 If([Person]Masculine)
    vTitle:="Mr"
 Else
    vTitle:="Ms"
 End if
```

#### 例題 2 

数値型条件を用いた、このコマンドの典型的な使用例を以下に示します。 

```4d
 vStatus:=Choose([Person]Status;"Single";"Married";"Widowed";"Divorced")
```

このコードは以下のコードと完全に対等です。

```4d
 Case of
    :([Person]Status=0)
       vStatus:="Single"
    :([Person]Status=1)
       vStatus:="Married"
    :([Person]Status=2)
       vStatus:="Widowed"
    :([Person]Status=3)
       vStatus:="Divorced"
 End case
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 955 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


