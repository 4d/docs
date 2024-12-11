---
id: ob-get
title: OB Get
slug: /commands/ob-get
displayed_sidebar: docs
---

<!--REF #_command_.OB Get.Syntax-->**OB Get** ( *object* ; *property* {; *type*} ) : any<!-- END REF-->
<!--REF #_command_.OB Get.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | 構造化されたオブジェクト |
| property | Text | &#8594;  | 情報を取得したいプロパティ名 |
| type | Integer | &#8594;  | 値を変換したい型 |
| 戻り値 | any | &#8592; | プロパティのカレントの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Get.Summary-->**OB Get**コマンドは、 *object* 引数で指定したオブジェクトの *property* のカレントの値を返します。<!-- END REF-->任意の *type* 引数で指定した型へと変換することもできます。

*object* で指定するオブジェクトは、 [C\_OBJECT](c-object.md) コマンドを使用して作成されている、あるいはオブジェクトフィールドが選択されている必要があります。

**注:** このコマンドは (*WP GET ATTRIBUTES*コマンドと同様に) 4D Write Pro *objects* に定義されている属性をサポートします (例題9を参照ください)。

*property* 引数には、情報を取得したいプロパティのラベルを渡します。*property* 引数では、大文字と小文字は区別されることに注意して下さい。

特に指定がなければ、 4D はプロパティの値を本来の型のまま返します。このとき、 *type* 引数を使用することによって返ってくる値の型を強制的に変換することができます。この場合、 *type* 引数には以下の定数のどれか一つを渡して下さい。これらの定数は *Field and Variable Types* テーマ内にあります。

| 定数            | 型    | 値   |
| ------------- | ---- | --- |
| Is Boolean    | 倍長整数 | 6   |
| Is collection | 倍長整数 | 42  |
| Is date       | 倍長整数 | 4   |
| Is longint    | 倍長整数 | 9   |
| Is null       | 倍長整数 | 255 |
| Is object     | 倍長整数 | 38  |
| Is picture    | 倍長整数 | 3   |
| Is pointer    | 倍長整数 | 23  |
| Is real       | 倍長整数 | 1   |
| Is text       | 倍長整数 | 2   |
| Is time       | 倍長整数 | 11  |

コマンドは *property* 引数で指定されたプロパティの値を返します。いくつかのデータの型がサポートされています。以下のことに注意して下さい:

* ポインターはそのまま返されますが、 [JSON Stringify](json-stringify.md) コマンドを使用することによってポインターが指してる値に変換することができます。
* データベースの日付設定に応じて、オブジェクト属性内の日付は日付型か、あるいはテキスト型として保存されます(4D v16 R6以降)。詳細な情報については、*互換性ページ*の"オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションを参照してください。**OB Get** がテキストとして保存されている日付を正確に解釈するためには、Is date 定数を使用する必要があります(例題5を参照してください)。
* 実数の値において、小数点はかならずピリオド( ".")になります。
* 時間は数字で表現されます。時間はオブジェクト内ではデフォルトでは秒単位で保存されます(以下の互換性に関する注記を参照してください)。4D フォーマットの時間値を取得するためにはIs time 定数を使用してください。

****互換性に関する注記:** 

* v17 以前のバージョンでは、時間はオブジェクト内ではミリ秒単位で保存されていました。互換性上の理由から、これらの以前の振る舞いは[SET DATABASE PARAMETER](set-database-parameter.md) コマンドにTimes inside objects セレクターを使用することで復元することができます。設定に関わらず、Is time 定数を渡した場合には結果は正確になります。
* (*4D Write Pro*) v16 R6 以前のバージョンでは、引数で4D Write Pro 画像属性(wk image など)を定義していた場合、データのURI を格納したテキスト値が常に返されてきました。4D v16 R6 以降、4D Write Pro 画像属性は常にピクチャー値として返されます。データURI を取得するためには、*property* 引数に対しwk image url のような特定のプロパティを使用する必要があります。
* v16 R4 以前のバージョンでは、*property* がnull値で *type* パラメーターが省略されていると、4Dは空文字列を返します。4D v16 R4 以降においてはこの場合にIs null 定数が返されるようになります。互換性を保つため、この仕様変更が有効になるのは、"オブジェクト記法を使用してオブジェクトプロパティにアクセス(Unicode 必須)" オプションがデータベースにおいて有効化されている場合に限られます(*互換性ページ*参照)。

#### 例題 1 

テキスト型の値を取得する場合:

```4d
 var $ref : Object
 var $FirstName : Text
 OB SET($ref;"FirstName";"Harry")
 $FirstName:=OB Get($ref;"FirstName") // $FirstName = "Harry" (text)
```

#### 例題 2 

実数型の値を取得して、倍長整数へと変換する場合:

```4d
 OB SET($ref ;"age";42)
 $age:=OB Get($ref ;"age") //  $age は実数型(デフォルト)
 $age:=OB Get($ref ;"age";Is longint) // $age を倍長整数型に変換
```

#### 例題 3 

オブジェクトの中の値を取得する場合:

```4d
 var $ref1;$ref2 : Object
 OB SET($ref1;"LastName";"Smith") // $ref1={"LastName":"Smith"}
 OB SET($ref2;"son";$ref1) // $ref2={"son":{"LastName":"Smith"}}
 $son:=OB Get($ref2;"son") // $son={"LastName":"john"} (object)
 $sonsName:=OB Get($son ;"name") // $sonsName="john" (text)
```

#### 例題 4 

従業員の年齢を二度修正したい場合:

```4d
 var $ref_john;$ref_jim : Object
 OB SET($ref_john;"name";"John";"age";35)
 OB SET($ref_jim;"name";"Jim";"age";40)
 APPEND TO ARRAY($myArray;$ref_john) // オブジェクト配列を作成
 APPEND TO ARRAY($myArray;$ref_jim)
  // John の年齢を35から25 へと修正
 OB SET($myArray{1};"age";25)
  // 配列内で"John" の年齢を修正
 For($i;1;Size of array($myArray))
    If(OB Get($myArray{$i};"name")="John")
       OB SET($myArray{$i};"age";36) // 25 から 36 へと修正
  // $ref_john={"name":"John","age":36}
    End if
 End for
```

#### 例題 5 

日付を取得する場合、結果の文字列はカレントのデータベース日付設定によります。

* "オブジェクトではISO日付フォーマットの代わりに日付型を使用する"オプションがチェックされていない場合:

```4d
 var $object : Object
 var $birthday : Date
 var $birthdayString : Text
 OB SET($object;"Birthday";!30/01/2010!)
 $birthday:=OB Get($object;"Birthday";Is date) //30/01/10
 $birthdayString:=OB Get($object;"Birthday") //"2010-01-29T23:00:00.000Z" (パリ時間)
```

* "オブジェクトではISO日付フォーマットの代わりに日付型を使用するオプションがチェックされている場合:

```4d
 var $object : Object
 var $birthday : Date
 OB SET($object;"Birthday";!30/01/2010!)
 $birthday:=OB Get($object;"Birthday") //30/01/10, Is date 定数は不要
```

**注:** この設定についての詳細な情報については、*互換性ページ*を参照してください。

#### 例題 6 

入れ子にされたオブジェクトを使用することもできます:

```4d
 var $ref1;$child;$children : Object
 var $childName : Text
 OB SET($ref1;"firstname";"John";"lastname";"Monroe")
  //{"firstname":"john","lastname";"Monroe"}
 OB SET($children;"children";$ref1)
 $child:=OB Get($children;"children")
  //$child = {"firstname":"John","lastname":"Monroe"} (object)
 $childName:=OB Get($child;"lastname")
  //$childName = "Monroe" (text)
  // または
 $childName:=OB Get(OB Get($children;"children");"lastname")
  // $childName = "Monroe" (text)
```

#### 例題 7 

オブジェクトに保存された時間を4Dに復元する例を考えます:

```4d
 var $obj_o : Object
 var $set_h;$get_h : Time
 
 $set_h:=?01:00:00?+1
 OB SET($obj_o;"myHour";$set_h)
  // $obj_o = {"myHour":3601}
  // 時間は秒数単位で保存されています
 $get_h:=OB Get($obj_o;"myHour";Is time)
  // $get_h = ?01:00:01?
```

#### 例題 8 

4Dオブジェクトフィールドの使用例です:

```4d
  // 値を定義する
 OB SET([People]Identity_OB;"First name";$firstName)
 OB SET([People]Identity_OB;"Last name";$lastName)
 
  // 値を取得する
 $firstName:=OB Get([People]Identity_OB;"First name")
 $lastName:=OB Get([People]Identity_OB;"Last name")
```

#### 例題 9 

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

#### 例題 10 

オブジェクト属性に保存されているピクチャーのサイズを確認します:

```4d
 var $vSize : Integer
 $vSize:=Picture size(OB Get($object;"photo";Is picture))
```

**注:** コマンドの戻り値をピクチャー変数に代入する場合、Is picture 定数は必要ありません。例:   

```4d
 var $vPict : Picture
 $vPict:=OB Get($object;"photo") // この場合は "is picture" は不要です
```

#### 参照 

*Field and Variable Types*  
[OB Copy](ob-copy.md)  
[OB SET](ob-set.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1224 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


