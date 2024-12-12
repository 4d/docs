---
id: copy-parameters
title: Copy parameters
slug: /commands/copy-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Copy parameters.Syntax-->**Copy parameters** {( *startFrom* )} : Collection<!-- END REF-->
<!--REF #_command_.Copy parameters.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| startFrom | Integer | &#8594;  | 開始インデックス(指定した引数含む) |
| 戻り値 | Collection | &#8592; | 実際に渡された引数を格納した新しいコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Copy parameters.Summary-->Copy parameters コマンドは、メソッドまたは関数に実際に渡された全ての引数を格納したコレクションを返します。<!-- END REF-->このコマンドはある関数またはメソッドから、また別の関数またはメソッドへと、不定数の引数を転送したい場合に有用です。

任意の*startFrom* 引数には、転送する引数を集め始める引数のインデックスを渡します。*startFrom* 引数で指定した引数自身も含まれます。

フォーミュラ内で呼び出された場合、 **Copy parameters** は *apply()* または *call()* を使用して明示的に渡された引数のみを返します(親メソッド/親関数に渡されたものは返しません)。

**Copy parameters** は以下の場合には空のコレクションを返します:

* 他のメソッドまたは関数から呼び出されたメソッド/関数内から呼び出されていない場合
* 親メソッド/親関数に引数が何も渡されていない場合

#### 例題 1 

最初に引数に応じて呼び出す関数を変え、その関数へと2番目以降の引数を渡す場合を考えます:

```4d
 Function selectTask($task Text)
 Case of
    :($task="Task1")
       This.task1(Copy parameters(2))
    :($task="Task2")
       This.task2(Copy parameters(2))
 End case
```

または、別のオブジェクトに対して他の関数を **apply()** で呼び出し、引数を渡す場合を考えます:

```4d
 Function doSomething($param Text;$extraParameters Variant)
 This.delegate.doSomething.apply(This.delegate;Copy parameters)
```

#### 例題 2 

コマンドはコレクションを返すため、 **.join()** と組み合わせて使用することで例えば html リストをビルドすることができます:

```4d
  // Class
 
 Function list($typeText)->Text
  //リストのタイプは"u" または "o"
 var $value : Collection
 $value:=Copy parameters(2)
 $html:="<"+$type+"l>
* "  
 $html+=$value.join("
* ")  
 $html+="
"
 return$html
 
  // 呼び出しMethod
 
 $htmlList:=$c.list("u";"Alpha";"Bravo";"Charlie")
  // $htmlList = 
* Alpha
* Bravo
* Charlie

```

#### 参照 

[Count parameters](count-parameters.md)  