---
id: count-parameters
title: Count parameters
slug: /commands/count-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Count parameters.Syntax-->**Count parameters**  : Integer<!-- END REF-->
<!--REF #_command_.Count parameters.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 実際に渡された引数の数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Count parameters.Summary-->Count parameters コマンドは、プロジェクトメソッドに渡された引数の数を返します。<!-- END REF-->Count parametersは、他のメソッド（プロジェクトメソッド、その他）から呼び出されるプロジェクトメソッド内でのみ意味を持ちます。Count parametersを呼び出すプロジェクトメソッドがメニューに割り当てられている場合、Count parametersは0を返します。

#### 例題 1 

4Dプロジェクトメソッドは右側から始まるオプションの引数を受け付けます。  
例えば、メソッドMyMethod(a;b;c;d)は以下のように呼び出すことができます:

```4d
 MyMethod(a;b;c;d) // すべての引数を渡す
 MyMethod(a;b;c) // 最後の引数を省略
 MyMethod(a;b) // 後ろ2つの引数を省略
 MyMethod(a) // 1番目の引数の実を渡す
 MyMethod // 引数を渡さない
```

MyMethod内でCount parametersを使用し、実際の引数の数を取得してその数に応じて異なる処理を実行することができます。以下の例では、テストメッセージを表示し、4D Writeエリアにテキストを挿入、またはディスク上のドキュメントにテキストを送信しています:

```4d
  // APPEND TEXT Project Method
  // APPEND TEXT ( Text { ; Long { ; Time } } )
  // APPEND TEXT ( Text { ; 4D Write Area { ; DocRef } } )
 
 var $1 : Text
 var $2 : Time
 var $3 : Integer
 
 MESSAGE($1)
 If(Count parameters>=3)
    SEND PACKET($3;$1)
 Else
    If(Count parameters>=2)
       WR INSERT TEXT($2;$1)
    End if
 End if
```

このプロジェクトメソッドをアプリケーションに追加すると以下のように記述できます:

```4d
 APPEND TEXT(vtSomeText) // テキストメッセージの表示のみ
 APPEND TEXT(vtSomeText;$wrArea) // テキストメッセージを表示して、$wrAreaエリアに追加
 APPEND TEXT(vtSomeText;0;$vhDocRef) // テキストメッセージを表示して$vhDocRefに書き込む
```

#### 例題 2 

4Dのプロジェクトメソッドは、右側から始めて、可変数の同タイプの引数を受け付けます。これらの引数を宣言するには、コンパイル命令を使用し、変数として*${N}*を渡します。Nは最初の引数を示します。Count parametersを使い、Forループと引数の間接参照構文を用いてこれらの引数にアクセスすることができます。この例は関数で、引数として受け取った最も大きな数値を返します:

```4d
  // Max of Project Method
  // Max of ( Real { ; Real2... ; RealN } ) -> Real
  // Max of ( Value { ; Value2... ; ValueN } ) -> Greatest value
 
 var $0;${1} : Real // 全ての引数および戻り値の型は実数
 $0:=${1}
 For($vlParam;2;Count parameters)
    If(${$vlParam}>$0)
       $0:=${$vlParam}
    End if
 End for
```

このプロジェクトメソッドをアプリケーションに追加すると以下のように記述できます:

```4d
 vrResult:=Max of(Records in set("Operation A");Records in set("Operation B"))
```

または:

```4d
 vrResult:=Max of(r1;r2;r3;r4;r5;r6)
```

#### 参照 

[Copy parameters](copy-parameters.md)  
*コンパイラコマンド*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 259 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


