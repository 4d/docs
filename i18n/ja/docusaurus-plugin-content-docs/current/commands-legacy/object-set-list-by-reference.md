---
id: object-set-list-by-reference
title: OBJECT SET LIST BY REFERENCE
slug: /commands/object-set-list-by-reference
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET LIST BY REFERENCE.Syntax-->**OBJECT SET LIST BY REFERENCE** ( {* ;} *object* {; *listType*}; *list* )<!-- END REF-->
<!--REF #_command_.OBJECT SET LIST BY REFERENCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| listType | Integer | &#8594;  | リストの種類:選択リスト、指定リスト、除外リスト |
| list | Integer | &#8594;  | リストの参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET LIST BY REFERENCE.Summary-->**OBJECT SET LIST BY REFERENCE**コマンドは、引数 *object* と *\** で指定したオブジェクトと関連付けられたリストを、 *list* 引数で指定した階層リストで置き換えもしくは定義します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*listType* 引数を省略した場合、コマンドは自動的にソースとなる選択リストを定義します。*listType* 引数では設定したいリストのタイプを指定することができます。 "*Form Objects (Properties)*" テーマ内にある以下の定数のどれかを渡して下さい:

| 定数            | 型    | 値 | コメント                                  |
| ------------- | ---- | - | ------------------------------------- |
| Choice list   | 倍長整数 | 0 | 選択できる値のリスト(プロパティリスト内の「選択リスト」)。(デフォルト) |
| Excluded list | 倍長整数 | 2 | 入力できない値のリスト。(プロパティリスト内の「除外リスト」)       |
| Required list | 倍長整数 | 1 | 入力可能な値のリスト(プロパティリストの"指定リスト"オプション)。    |

*list* 引数には、オブジェクトに関連付けたい階層リストの参照番号を渡します。このリストは、 [Copy list](copy-list.md) コマンド、 [Load list](load-list.md) コマンド、または [New list](new-list.md) コマンドを使用してすでに生成されている必要があります。

*object* と *list* の関連付けを解除するためには、解除したいリストの種類に対し、*list* 引数に 0 を渡します。リストの関連付けを解除しても、リスト参照はメモリーからは消去されません。リストが不要になった時には [CLEAR LIST](clear-list.md) コマンドを使用して下さい。

値の既存のリストは、そのリストがフォームオブジェクトに割り当てられた方法によって上書きされます:

* 選択リストを使用した場合: リスト自身が置き換えられます
* 配列を使用した場合: リストは配列要素にコピーされます
* オブジェクトを使用した場合(*バイナリーデータベースではサポートされていません*): リストは、オブジェクト内の*values* プロパティのコレクション要素としてコピーされます

このコマンドは、変数またはフィールドに関連付けられたポップアップまたはコンボボックスに対して使用すると興味深い挙動をします( *Design Reference* マニュアルを参照して下さい)。この場合、関連付けは動的に行われ、リストの変更は全てフォームへと反映されます。オブジェクトが配列に関連付けられたとき、リストは配列へとコピーされ、リストへのいかなる変更も自動的に不可になります(例5を参照して下さい)。

#### 例題 1 

単純な選択リスト(デフォルトのリスト型)をテキストフィールドへと関連付ける場合:

```4d
 vCountriesList:=New list
 APPEND TO LIST(vCountriesList;"Spain";1)
 APPEND TO LIST(vCountriesList;"Portugal";2)
 APPEND TO LIST(vCountriesList;"Greece";3)
 OBJECT SET LIST BY REFERENCE([Contact]Country;vCountriesList)
```

#### 例題 2 

"vColor" というリストを単純な選択リストとして "DoorColor" ポップアップリストに関連付けます:

```4d
 vColor:=New list
 APPEND TO LIST(vColor;"Blue";1)
 APPEND TO LIST(vColor;"Green";2)
 APPEND TO LIST(vColor;"Red";3)
 APPEND TO LIST(vColor;"Yellow";4)
 OBJECT SET LIST BY REFERENCE(*;"DoorColor";Choice list;vColor)
```

#### 例題 3 

更に、 "vColor" のリストを、 "WallColor" というコンボボックスに関連付けする場合を考えます。このコンボボックスは入力可能なので、 "black" "purple" と言った色が入力されないようにしたい場合、これらの色を "vReject" というリストに入れて除外します:

```4d
 OBJECT SET LIST BY REFERENCE(*;"WallColor";Choice list;vColor)
 vReject:=New list
 APPEND TO LIST(vReject;"Black";1)
 APPEND TO LIST(vReject;"Gray";2)
 APPEND TO LIST(vReject;"Purple";3)
 OBJECT SET LIST BY REFERENCE(*;"WallColor";Excluded list;vReject)
```

#### 例題 4 

これらのリストの関連付けを解除する場合:

```4d
 OBJECT SET LIST BY REFERENCE(*;"WallColor";Choice list;0)
 OBJECT SET LIST BY REFERENCE(*;"WallColor";Required list;0)
 OBJECT SET LIST BY REFERENCE(*;"WallColor";Excluded list;0)
```

#### 例題 5 

この例では、このコマンドがテキスト配列に関連付けられたポップアップメニューに適用されたときと、テキスト変数に関連付けられたポップアップメニューに適用されたときの違いについて説明します。フォーム内に二つのポップアップメニューがあるとします:

![](../assets/en/commands/pict1207955.en.png)

これらのポップアップメニューの中身は *<>vColor* list を使用して設定されています(中身はカラーの値です)。以下のコードがフォームをロードした際に実行されるとします:

```4d
 ARRAY TEXT(arr1;0) //arr1 pop up
 var text1 : Text //text1 pop up
 OBJECT SET LIST BY REFERENCE(*;"arr1";<>vColor)
 OBJECT SET LIST BY REFERENCE(*;"text1";<>vColor)
```

メニューの中身はどちらも同一内容です:

![](../assets/en/commands/pict1207957.en.png)  
(*上記の画像はメニューの中身を同時に表示しています*)

次に、ボタンなどを使用して以下のコードを実行します:

```4d
 APPEND TO LIST(<>vColor;"White";5)
 APPEND TO LIST(<>vColor;"Black";6)
```

テキストフィールドと関連付けられていたメニューのみが(動的な参照によって)更新されます:

![](../assets/en/commands/pict1207959.en.png)

配列によって管理されたポップアップに関連付けられたリストを更新するためには、 **OBJECT SET LIST BY REFERENCE** コマンドを再度使用してリストの中身をコピーする必要があります。

#### 参照 

[OBJECT Get list reference](object-get-list-reference.md)  
[OBJECT SET LIST BY NAME](object-set-list-by-name.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1266 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


