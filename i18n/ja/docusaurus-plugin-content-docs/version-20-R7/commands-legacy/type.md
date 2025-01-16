---
id: type
title: Type
slug: /commands/type
displayed_sidebar: docs
---

<!--REF #_command_.Type.Syntax-->**Type** ( *fieldVar* ) : Integer<!-- END REF-->
<!--REF #_command_.Type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fieldVar | Field, Variable | &#8594;  | テストするフィールドまたは変数 |
| 戻り値 | Integer | &#8592; | データタイプ番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Type.Summary-->Type コマンドは、*fieldVar* 引数に渡したフィールドまたは変数の型を示す数値を返します。<!-- END REF-->

4Dは、*Field and Variable Types* テーマ内に以下のような定義済み定数を持っています:

| 定数                 | 型    | 値   |
| ------------------ | ---- | --- |
| Array 2D           | 倍長整数 | 13  |
| Blob array         | 倍長整数 | 31  |
| Boolean array      | 倍長整数 | 22  |
| Date array         | 倍長整数 | 17  |
| Integer array      | 倍長整数 | 15  |
| Is alpha field     | 倍長整数 | 0   |
| Is BLOB            | 倍長整数 | 30  |
| Is Boolean         | 倍長整数 | 6   |
| Is collection      | 倍長整数 | 42  |
| Is date            | 倍長整数 | 4   |
| Is integer         | 倍長整数 | 8   |
| Is integer 64 bits | 倍長整数 | 25  |
| Is longint         | 倍長整数 | 9   |
| Is null            | 倍長整数 | 255 |
| Is object          | 倍長整数 | 38  |
| Is picture         | 倍長整数 | 3   |
| Is pointer         | 倍長整数 | 23  |
| Is real            | 倍長整数 | 1   |
| Is string var      | 倍長整数 | 24  |
| Is subtable        | 倍長整数 | 7   |
| Is text            | 倍長整数 | 2   |
| Is time            | 倍長整数 | 11  |
| Is undefined       | 倍長整数 | 5   |
| Is variant         | 倍長整数 | 12  |
| LongInt array      | 倍長整数 | 16  |
| Object array       | 倍長整数 | 39  |
| Picture array      | 倍長整数 | 19  |
| Pointer array      | 倍長整数 | 20  |
| Real array         | 倍長整数 | 14  |
| String array       | 倍長整数 | 21  |
| Text array         | 倍長整数 | 18  |
| Time array         | 倍長整数 | 32  |

Type ファンクションはフィールド、インタープロセス変数、プロセス変数、ローカル変数、そしてこれらのタイプのオブジェクトの逆参照されているポインターに対して適用可能です。**Type** は、プロジェクトメソッドの引数*($1, $2 ... ${...})*、あるいは関数の戻り値*($0)*に対しても適用可能です。

**注:** 

* **Type** ファンクションは、オブジェクトプロパティ*(emp.name)* やコレクション要素(*myColl\[5\]*) などのスカラー式に対して適用することができません。これには、[Value type](value-type.md) コマンドを使用する必要があります。
* コンパイル済みモードでは、[C\_VARIANT](c-variant.md) として宣言されたメソッド引数($0, $1...) に対して**Type** を呼び出した場合、Is variant は返されず、実際のデータ型が返されます([Value type](value-type.md) を呼んだ場合と同じ)

#### 例題 1 

以下のプロジェクトメソッドは、テーブルのカレントレコードのフィールドの一部あるいはすべてをクリアします。テーブルは、ポインタ引数として渡されます。カレントレコードの削除や変更は行いません

```4d
  // EMPTY RECORD Project Method
  // EMPTY RECORD ( Pointer {; Long } )
  // EMPTY RECORD ( -> [table] { ; type Flags } )
 
 var $1 : Pointer
 var $2;$vlTypeFlags : Integer
 
 If(Count parameters>=2)
    $vlTypeFlags:=$2
 Else
    $vlTypeFlags:=0xFFFFFFFF
 End if
 For($vlField;1;Last field number($1))
    $vpField:=Field(Table($1);$vlField)
    $vlFieldType:=Type($vpField->)
    If($vlTypeFlags ??$vlFieldType )
       Case of
          :(($vlFieldType=Is alpha field)|($vlFieldType=Is text))
             $vpField->:=""
          :(($vlFieldType=Is real)|($vlFieldType=Is integer)|($vlFieldType=Is longint))
             $vpField->:=0
          :($vlFieldType=Is date)
             $vpField->:=!00/00/00!
          :($vlFieldType=Is time)
             $vpField->:=?00:00:00?
          :($vlFieldType=Is Boolean)
             $vpField->:=False
          :($vlFieldType=Is picture)
             var $vgEmptyPicture : Picture
             $vpField->:=$vgEmptyPicture
          :($vlFieldType=Is subtable)
             Repeat
                ALL SUBRECORDS($vpField->)
                DELETE SUBRECORD($vpField->)
             Until(Records in subselection($vpField->)=0)
          :($vlFieldType=Is BLOB)
             SET BLOB SIZE($vpField->;0)
       End case
    End if
 End for
```

  
このプロジェクトメソッドをデータベースに作成後、以下のように使用できます:

```4d
  // テーブル [Things To Do]のカレントレコードを空にする
 EMPTY RECORD(->[Things To Do])
 
  // テーブル [Things To Do]のカレントレコードのテキスト, BLOB, ピクチャを空にする
 EMPTY RECORD(->[Things To Do];0?+Is text?+Is BLOB?+Is picture)
 
  // テーブル [Things To Do] のカレントレコードの文字フィールド以外を空にする
 EMPTY RECORD(->[Things To Do];-1?-Is alpha field)
```

#### 例題 2 

汎用コードを書くなど特別なケースで、配列が標準の配列か、2次元配列の行かを知りたい場合があるとします。以下のように書くことができます:   
  
```4d
 ptrmyArr:=->myArr{6} // myArr{6} 2D 配列か?
 RESOLVE POINTER(ptrmyArr;varName;tableNum;fieldNum)
 If(varName#"")
    $ptr:=Get pointer(varName)
    $thetype:=Type($ptr->)
  // myArr{6} が2次元配列の行なら$thetype は 13になる
 End if
```

#### 例題 3 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD") コマンドの例題参照

#### 参照 

[Is a variable](is-a-variable.md)  
[Undefined](undefined.md)  
[Value type](value-type.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 295 |
| スレッドセーフである | &check; |


