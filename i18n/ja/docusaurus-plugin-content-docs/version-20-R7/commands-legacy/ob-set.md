---
id: ob-set
title: OB SET
slug: /commands/ob-set
displayed_sidebar: docs
---

<!--REF #_command_.OB SET.Syntax-->**OB SET** ( *object* ; *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )<!-- END REF-->
<!--REF #_command_.OB SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | 構造化されたオブジェクト |
| property | Text | &#8594;  | 設定したいプロパティの名前 |
| value | Expression | &#8594;  | プロパティの新しい値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB SET.Summary-->**OB SET**コマンドは、 *object* 引数で指定したランゲージオブジェクトの中に、一つ以上の *プロパティ*/*値* のペアを作成もしくは変更します。<!-- END REF-->

*object* で指定するオブジェクトは、 [C\_OBJECT](c-object.md) コマンドを使用して作成されている、あるいはオブジェクトフィールドが選択されている必要があります。

*property* 引数には、作成または修正したいプロパティのラベル(名前)を渡して下さい。*object* 内に指定されたプロパティが存在する場合、その値は指定した値で上書きされます。プロパティが存在しない場合、新たにプロパティが作成されます。

*property* 引数では、大文字と小文字は区別されることに注意して下さい。

*value* 引数には、プロパティに設定したい値を渡して下さい。渡せる値としては複数の型がサポートされています。渡す際には以下のことに注意して下さい:

* ポインターを渡した場合、それはそのままの形で保存されます。値を解決するためには [JSON Stringify](json-stringify.md) コマンドを使用します。
* 日付を渡した場合、カレントのデータベース日付設定によって日付型あるいはISOフォーマットのテキストとして保存されます。詳細な情報については、*互換性ページ*内の"オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションを参照してください。
* 時間を渡した場合、*object* 内に秒数(実数)として保存されます。
* ランゲージオブジェクトまたはコレクションを渡した場合、コマンドはオブジェクトの参照を使用し、実際にコピーを作成するわけではありません。このため、オブジェクトまたはコレクションを編集した場合、同参照の使用先すべてに影響します。
* 4D v16 R4 以降、サポートされているすべてのピクチャーを渡すことができます (*サポートされるネイティブフォーマット* 参照)。

#### 例題 1 

オブジェクトを作成し、テキスト型のプロパティを追加する場合を考えます:

```4d
 var $Object : Object
 OB SET($Object ;"FirstName";"John";"LastName";"Smith")
  // $Object = {"FirstName":"John","LastName":"Smith"}
```

#### 例題 2 

オブジェクトを作成し、ブール型のプロパティを追加する場合を考えます:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"smith";"age";42;"client";True)
  // $Object = {"LastName":"smith","age":42,"client":true}
```

#### 例題 3 

プロパティを修正する場合:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"FirstName";"Paul")
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
```

#### 例題 4 

プロパティを追加する場合:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"department";"Accounting")
  // $Object = {"FirstName":"Paul","LastName":"Smith","department":"Accounting"}
```

#### 例題 5 

プロパティの名前を変更する場合:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"James";"age";35)
  // $Object = {"LastName":"James","age":35}
 OB SET($Object ;"FirstName";OB Get($Object ;"LastName"))
  // $Object = {"FirstName":""James","nom":"James","age":35}
 OB REMOVE($Object ;"LastName")
  // $Object = {"FirstName":""James","age":35}
```

#### 例題 6 

ポインターを使用する場合:

```4d
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
 var $LastName : Text
 OB SET($Object ;"LastName";->$LastName)
  // $Object = {"FirstName":"Paul","LastName":"->$LastName"}
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":""}
 $LastName:="Wesson"
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":"Wesson"}
```

#### 例題 7 

オブジェクトを使用する場合:

```4d
 var $ref_smith : Object
 OB SET($ref_smith ;"name";"Smith")
 var $ref_emp : Object
 OB SET($ref_emp ;"employee";$ref_smith)
 $Json_string :=JSON Stringify($ref_emp)
  // $ref_emp = {"employee":{"name":"Smith"}} (object)
  // $Json_string = "{"employee":{"name":"Smith"}}" (string)
```

値をプログラム実行中に変えることもできます:

```4d
 OB SET($ref_smith ;"name";"Smyth")
  // $ref_smith = {"employee":{"name":"Smyth"}}
 $string:=JSON Stringify($ref_emp)
  // $string = "{"employee":{"name":"Smyth"}}"
```

#### 例題 8 

\[Rect\]Desc フィールドがオブジェクトフィールドとして定義されているとき、以下のように記述することができます:

```4d
 CREATE RECORD([Rect])
 [Rect]Name:="Blue square"
 OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")
 SAVE RECORD([Rect])
```

#### 例題 9 

4D日付を、タイムゾーン情報を含まない文字列に変換してJSONにデータを書き出したい場合を考えます。変換が起きるのは日付がオブジェクトに保存されたときなので、 [OB SET](ob-set.md)コマンドが呼び出される前に [SET DATABASE PARAMETER](set-database-parameter.md)コマンドを使用する必要があることに注意して下さい:  
  
```4d
 var $o : Object
 $vDateSetting:=Get database parameter(Dates inside objects) //カレントの設定を保存
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 OB SET($o ;"myDate";Current date) // JSON への変換
 $json:=JSON Stringify($o)
 SET DATABASE PARAMETER(Dates inside objects;$vDateSetting)
```

#### 例題 10 

4D Write Proエリアを含むフォームメソッド内に、以下のように書く事ができます:

```4d
 If(Form event code=On Validate) //v17 以前ではForm event を使用すること
    OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)
    OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")
 End if
```

ドキュメントのカスタム属性を読み出す事もできます:

```4d
 vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")
```

#### 例題 11 

コレクションをプロパティ値に設定する場合:

```4d
 var $person : Object
 var $myCol : Collection
 
 $person:=OB New
 $myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)
 OB SET($person;"Name";"Jones";"Children";$myCol)
```

#### 例題 12 

オブジェクトフィールドにピクチャーを保存する場合:

```4d
 var $vPict : Picture
 READ PICTURE FILE("photo.jpg";$vPict)
 If(OK=1)
    OB SET([Emp]Children;"photo";$vPict)
 End if
```

#### 参照 

[OB Get](ob-get.md)  
[OB REMOVE](ob-remove.md)  
[OB SET ARRAY](ob-set-array.md)  
[OB SET NULL](ob-set-null.md)  