---
id: methods
title: メソッド
---


## 概要

メソッドとは、1つ以上の動作を実行するコードのことです。 メソッドは、一つ以上のステートメントで構成されます。ステートメントとは、メソッドの1行のことで1つの命令を実行します。 ステートメントは単純な場合もあれば、複雑な場合もあります。 各ステートメントは常に 1行ですが最大 32,000文字まで使用することができます。

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.

## Method Types

In the 4D Language, there are several categories of methods. The category depends on how they can be called:

| 型                        | 自動呼び出しのコンテキスト                                                                                               | 引数の受け取り | 説明                                                                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **プロジェクトメソッド**           | On demand, when the project method name is called (see [Calling project methods](#calling-project-methods)) | ◯       | Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project. |
| **オブジェクト (ウィジェット) メソッド** | メソッドが設定されたフォームオブジェクトに関連したイベント発生時に                                                                           | ×       | フォームオブジェクト (ウィジェットとも呼びます) のプロパティです。                                                                                                   |
| **フォームメソッド**             | メソッドが設定されたフォームに関連したイベント発生時に                                                                                 | ×       | フォームのプロパティです。 フォームメソッドを使用してデータとオブジェクトを管理することができます。ただし、これら目的には、オブジェクトメソッドを使用する方が通常は簡単であり、より効果的です。                                      |
| **トリガー** (別名 *テーブルメソッド*) | テーブルのレコード操作 (追加・削除・修正) の度に                                                                                  | ×       | テーブルのプロパティです。 トリガーは、データベースのレコードに対して「不正な」操作がおこなわれることを防ぎます。                                                                             |
| **データベースメソッド**           | 作業セッションのイベント発生時に                                                                                            | ○ (既定)  | 4D には 16のデータベースメソッドがあります。 詳細はデータベースメソッドの項を参照ください。                                                                                     |


> The 4D Language also supports **Class functions**, that can be called in the context of an object instance. Class functions can be built-in (*e.g.* `collection.orderBy()` or `entity.save()`), or [created by the 4D developer](classes.md#class-function).

## プロジェクトメソッドの呼び出し

その実行方法や使用方法に応じて、プロジェクトメソッドは次のような役割を果たします:

- Subroutine
- Object formula 
- メニューメソッド
- プロセスメソッド
- イベントまたはエラー処理メソッド

### Subroutines

サブルーチンは、処理の下請け的なプロジェクトメソッドです。 他のメソッドから呼ばれて、要求された処理を実行します。 関数は、呼び出し元のメソッドに値を返すサブルーチンのことです。

When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. このように使用されるプロジェクトメソッドをサブルーチンと呼びます。

サブルーチンは、以下のような目的で使います:

- 重複コードの削減
- メソッドの役割の明確化
- メソッド改変の容易化
- コードのモジュール化

For example, let’s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. そのコーディングは以下のようになっています:

```4d
  // 顧客を検索します
 QUERY BY EXAMPLE([Customers])
  // 入力フォームを選択します
 FORM SET INPUT([Customers];"Data Entry")
  // 顧客レコードを修正します
 MODIFY RECORD([Customers])
```

サブルーチンを使用しなければ、顧客レコード修正のたびにコードを作成しなければなりません。 If there are ten places in your project where you need to do this, you will have to write the code ten times. サブルーチンを使用すれば 1回コーディングするだけですみます。 これがコーディングの重複を減らすというサブルーチンの第一の利点です。

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. たとえば、顧客のレコードを修正し、それからレコードをプリントするために、以下のようなメソッドを書くことができます:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

この機能はメソッドを劇的にに簡素化します。 In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. これはメソッドをサブルーチン化することの2番目の理由、役割の明確化です。 このように、作成されたメソッドは 4Dランゲージを拡張します。

If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. これがサブルーチンを使うもう一つの理由、改変の容易化です。

また、サブルーチンの利用はコードをモジュール化します。 これはコードをモジュール (サブルーチン) に分割することを意味し、それぞれは論理的な処理を実行します。 Consider the following code from a checking account project:

```4d
 FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
```

Even for someone who doesn’t know the project, it is clear what this code does. 各サブルーチンの処理手順を知る必要はありません。 各サブルーチンは長く、複雑な処理で構成されていることもありますが、それらが何を実行するのかだけを知っていれば十分なのです。 プログラムを論理的な処理単位やモジュールにできるだけ分割することをお勧めします。

### Object formulas

プロジェクトメソッドは、**フォーミュラ** オブジェクトにカプセル化して、オブジェクトから呼び出すことができます。

`Formula` または `Formula from string` コマンドを使用すると、オブジェクトプロパティに格納可能な、ネイティブなフォーミュラオブジェクトを作成することができます: つまり、カスタムなオブジェクトメソッドを実装することが可能です。

オブジェクトプロパティに保存されているメソッドを実行するには、プロパティ名のあとに **( )** をつけます。 たとえば:

```4d
// myAlert プロジェクトメソッド
ALERT("Hello world!")
```

この `myAlert` プロジェクトメソッドを任意のオブジェクトに格納し、呼び出すことができます:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() // "Hello world!" と表示します
```

大カッコを使用したシンタックスもサポートされます:

```4d
$o["custom_Alert"]() // "Hello world!" と表示します
```

4D プロジェクトメソッドのように、$1, $2, .... を使用して呼び出すことで、フォーミュラに [引数を渡す](Concepts/parameters.md) こともできます:

```4d
//fullName メソッド
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

`fullName` メソッドをオブジェクトに格納し、呼び出します:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// $result:=fullName("param1";"param2") と同義です
```

`This` 関数と組み合わせることで、オブジェクトメソッドを利用した汎用的なコードを書くことができます。 たとえば:

```4d
//fullName2 メソッド
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

このメソッドをオブジェクトに格納すると、オブジェクトの新しい計算属性のように使えます:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) // メソッドをオブジェクトに追加します

$result:=$o.fullName() 
//$result = "Jim Wesson"
```

たとえ引数を受け取らなかったとしても、オブジェクトメソッドを実行するためにはカッコ () をつけて呼び出す必要があるという点に注意してください。 オブジェクトプロパティのみを呼び出した場合、フォーミュラへの新しい参照が返されます (そしてフォーミュラは実行はされません):

```4d
$o:=$f.message // $o にはフォーミュラオブジェクトが返されます
```

### メニューメソッド

メニューメソッドは、カスタムメニューから呼び出されるプロジェクトメソッドです。 メニューエディターまたは "メニュー" テーマのコマンドを使用して、メニューにメソッドを割り当てます。 メニューが選択されると、それに対応するメニューメソッドが実行されます。 By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications.

メニューメソッドにより、単一または複数の処理を実行することができます。 たとえば、データ入力のメニューに、以下の2つの処理を実行するメソッドを割り当てられます。まず適切な入力フォームを表示し、次にユーザーがキャンセルするまでの間 `ADD RECORD` コマンドによるデータ入力を繰り返します。

連続した処理の自動化は、プログラミング言語の強力な機能の 1つです。 Using custom menus, you can automate task sequences and thus provide more guidance to users of the application.

### プロセスメソッド

**プロセスメソッド** とは、プロセスの開始時に呼び出されるプロジェクトメソッドのことです。 ワーカープロセスの場合を除いて、プロセスはプロセスメソッドが実行されている間だけ存続します。 メニューに属するメニューメソッドのプロパティとして *新規プロセス開始* をチェックしている場合、そのメニューメソッドは新規プロセスのプロセスメソッドでもあります。

### イベント・エラー処理メソッド

**イベント処理メソッド** は、イベントを処理するプロセスメソッドとして、分離されたプロセス内で実行されます。 通常、開発者はイベント管理の大部分を 4Dに任せます。 たとえば、データ入力中にキーストロークやクリックを検出した 4Dは、正しいオブジェクトとフォームメソッドを呼び出します。このため開発者は、これらのメソッド内でイベントに対し適切に応答できるのです。 詳細については `ON EVENT CALL` コマンドの説明を参照してください。

**エラー処理メソッド** は、割り込みを実行するプロジェクトメソッドです。 エラーや例外が起こる度に、エラー処理メソッドは自身がインストールされたプロセス内で実行されます。 詳細については `ON ERR CALL` コマンドの説明を参照してください。

## プロジェクトメソッドの再帰呼び出し

プロジェクトメソッドは、自分自身を呼び出すことができます。 たとえば:

- メソッドAがメソッドBを呼び出し、メソッドBはメソッドAを呼び出します。
- メソッドAは自身を呼び出すことができます。

これは再帰呼び出しと呼ばれています。 4D ランゲージは再帰呼び出しを完全にサポートしています。

次に例を示します。 以下のフィールドから成る `[Friends and Relatives]` テーブルがあります:

- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

この例題では、フィールドの値は重複しない、つまり同じ名前の人間はいないとします。 名前を指定することで、以下のような文を作成します: “A friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!”:

1. この文を以下のように作成できます:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. 以下の方法でも作成できます:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

再帰関数 `Genealogy of` は以下の通りです:

```4d
  ` Genealogy of プロジェクトメソッド
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence

 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

`Genealogy of` メソッドが自分自身を呼び出していることに注目してください。

最初に挙げた方法は **反復性のアルゴリズム** です。 2番目に挙げた方法は **再帰呼び出しのアルゴリズム** です。

前述の例題のようなコードを実装する場合、反復性や再帰呼び出しを使用してメソッドを書くことができるということに留意してください。 再帰呼び出しは一般的に、より明瞭で読みやすく、維持しやすいコードを提供します。ただし、この使用は必須ではありません。

4D内での再帰呼び出しの代表的な使用方法は以下のとおりです:

- 例題と同じく、互いに関連するテーブル内でのレコードの取り扱い。
- `FOLDER LIST` と `DOCUMENT LIST` コマンドを使用して、ディスク上にあるドキュメントとフォルダーをブラウズする。 フォルダーにはフォルダーとドキュメントが含まれており、サブフォルダーはまたフォルダーとドキュメントを含むことができます。

**重要:** 再帰呼び出しは、必ずある時点で終了する必要があります。 たとえば、`Genealogy of` メソッドが自身の呼び出しを止めるのは、クエリがレコードを返さないときです。 この条件のテストをしないと、メソッドは際限なく自身を呼び出します。 (メソッド内で使用される引数やローカル変数の蓄積を含む) 再帰呼び出しによって容量が一杯になると、最終的に 4Dは “スタックがいっぱいです” エラーを返します 。