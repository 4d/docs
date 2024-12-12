---
id: find-in-array
title: Find in array
slug: /commands/find-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in array.Syntax-->**Find in array** ( *array* ; *value* {; *start*} ) : Integer<!-- END REF-->
<!--REF #_command_.Find in array.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | 検索を行う配列 |
| value | Expression | &#8594;  | 配列タイプと同じタイプの検索値 |
| start | Integer | &#8594;  | 検索を開始する配列要素番号 |
| 戻り値 | Integer | &#8592; | 検索値が見つかった最初の要素番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Find in array.Summary-->Find in array コマンドは、*array*から引数*value*と同じものを検索し、最初に発見された要素の番号を返します。<!-- END REF-->

Find in array コマンドは、タイプがテキスト、数値、日付、ポインタ、オブジェクトまたはブールの配列に使用できます。*array*タイプと*value*のタイプは、必ず同じにしてください。

*value* 引数の値は、検索する要素と完全に一致している必要があります(等号演算子と同じ同じルールです。 [基本演算子](https://developer.4d.com/docs/ja/Concepts/operators/#%E5%9F%BA%E6%9C%AC%E6%BC%94%E7%AE%97%E5%AD%90) 参照)。同じ値を発見できない場合、Find in array コマンドは-1を返します。

**注意:** オブジェクト型配列の場合、*value* 引数に対して使用できるのはオブジェクト参照のみです。

*start*を指定すると、その番号の要素から検索を始めます。*start*引数を指定しない場合、コマンドは第1要素から検索を開始します。

#### 例題 1 

以下のプロジェクトメソッドは、文字列またはテキスト配列のポインタを引数として受け、配列から空の要素をすべて削除します:

```4d
  // CLEAN UP ARRAY プロジェクトメソッド
  // CLEAN UP ARRAY (ポインタ)
  // CLEAN UP ARRAY (->テキストまたは文字配列)
 
 var $1 : Pointer
 REPEAT
    $vlElem:=Find in array($1->;"")
    If($vlElem>0)
       DELETE FROM ARRAY($1->;$vlElem)
    End if
 Until($vlElem<0)
```

このプロジェクトメソッド実装後、以下のように記述できます:

```4d
 ARRAY TEXT(atSomeValues;...)
  // ...
  // 配列を使用した処理を行う
  // ...
  // 空文字の要素を削除する
 CLEAN UP ARRAY(->atSomeValues)
```

#### 例題 2 

次のプロジェクトメソッドは、最初の引数で渡した配列（ポインタ指定）中、第二引数で渡した変数やフィールド（ポインタ指定）の値に一致する最初の要素を選択します:

```4d
  // SELECT ELEMENT プロジェクトメソッド
  // SELECT ELEMENT (ポインタ; ポインタ)
  // SELECT ELEMENT ( ->テキストまたは文字配列; -> テキストまたは文字変数またはフィールド)
 
 $1->:=Find in array($1->;$2->)
 If($1->=-1)
    $1->:=0 // 値が要素中に見つからない場合、要素を選択しない
 End if
```

このプロジェクトメソッド実装後、以下のように記述できます:

```4d
  // asGender ポップアップメニュオブジェクトメソッド
 Case of
    :(Form event code=On Load)
       SELECT ELEMENT(->asGender;->[People]Gender)
 
 End case
```

**注:** この例では配列の**選択された要素**を使用します。選択された要素は、配列内の要素数が32,767個を超える場合には意味をなさない点に注意して下さい(*配列とフォームオブジェクト*を参照して下さい)。この場合、**Find in array**の結果を保存するためには倍長整数変数を使用する必要があります。

#### 例題 3 

オブジェクト参照を探したい場合を考えます:

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 var $p : Integer
 
 $p:=Find in array($objects;$o1) //$p = 20
 $p:=Find in array($objects;$o2) //$p = -1 
 $p:=Find in array($objects;{a10;b"xyz"}) //$p = -1
```

#### 参照 

[Count in array](count-in-array.md)  
[DELETE FROM ARRAY](delete-from-array.md)  
[Find in sorted array](find-in-sorted-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  