---
id: order-by-attribute
title: ORDER BY ATTRIBUTE
slug: /commands/order-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY ATTRIBUTE.Syntax-->**ORDER BY ATTRIBUTE** ( {*aTable* ;} *objectField* ; *attributePath* ; > or < {; *objectField2* ; *attributePath2* ; > or <2 ; ... ; *objectFieldN* ; *attributePathN* ; > or <N} {; *} )<!-- END REF-->
<!--REF #_command_.ORDER BY ATTRIBUTE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションをソートするテーブル (省略時はデフォルトテーブル) |
| objectField | Object | &#8594;  | ソートの基準とする属性を含むオブジェクトフィールド |
| attributePath | Text | &#8594;  | ソートの基準とする属性の名前またはパス |
| > or < | 演算子 | &#8594;  | ソート方向: >: 昇順, または <: 降順 |
| * | 演算子 | &#8594;  | ソート継続フラグ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ORDER BY ATTRIBUTE.Summary-->**ORDER BY ATTRIBUTE** コマンドは、カレントプロセスにおいて *aTable* のカレントレコードセレクションを *objectField* の *attributePath* を基準にソートします。<!-- END REF-->ソートが終了すると、セレクションの先頭レコードがカレントレコードとなります。 

**注:** オブジェクトフィールドについての詳細な情報は、*デザインリファレンス* マニュアルの を参照して下さい。

*aTable* を省略した場合、コマンドはデフォルトテーブルに適用されます (デフォルトテーブルが事前に設定されていれば)。デフォルトテーブルが設定されていない場合、4Dは引数として渡された最初のフィールドのテーブルを使用します。

*objectField* には、ソートの基準としたい属性のオブジェクトフィールドを渡します。そのオブジェクトフィールドが *aTable* で指定したテーブルに自動または手動でリレートしている1テーブルに属する場合、*objectField* には他のテーブルに属するフィールドを指定することもできます。この場合、ソートは常にシーケンシャルに行われます。

*attributePath* にはソートの基準に使用したい属性の名前またはパスを渡します (例: "children.girls.age")。

**注:** 

* ソートができるのは、スカラー値(数値、テキスト、ブール、日付)を格納する属性のみです。ほかのタイプの値 (オブジェクト、ピクチャーなど) は null値と同じに並べ替えられます。
* *attributePath* に配列の一要素を指定することはできません (エラーが生成されます)
* 属性名は大文字と小文字が区別されるという点に注して下さい。つまり同じレコード内にて"MyAtt" と "myAtt" という、異なる属性名を持つことができるということです。
* "." や "\[ \]" といった特殊文字を含む属性名を使用することはできません。文字列での並べ替えの際にトークンとして不正に評価されてしまうからです。詳細な情報については、*オブジェクトプロパティ識別子*の段落を参照してください。

ソート基準として指定したフィールド属性に格納されている値が複数のデータ型 (数値、文字列、ブール等) に渡る場合、これらは型、次に値の順にグループされます。

いくつかのレコードについて最初のフィールド属性が **null**値の場合 (つまり、属性値が null、あるいはフィールドにおいて attributePath が存在しない場合): 

* ソート方向が **昇順** (>) の場合、**null** 値のレコードはセレクションの先頭にソートされます。
* ソート方向が **降順** (<) の場合には、**null** 値のレコードはセレクションの終わりにソートされます。

セレクションのソートは一つ以上のレベルで行うことができます。各ソートレベルについて、*aField*、*attributePath*、 そして *\> or <* を指定します。ソート方向に ">" 記号をしてすると昇順ソートになります。"<" 記号は降順ソートを表します。ソート方向を指定しなかった場合には、デフォルトで昇順ソートが行われます。  
ソートフィールドを一つだけ指定して単一レベルのソートを行った場合、そのフィールドがインデックスされていれば、これがソートに利用されます。フィールドがインデックスされていない場合や、複数レベルのソートを行う場合には、ソートはシーケンシャルに行われます。

複数のフィールドを指定して複数レベルのソートを行う場合、*\** ソート継続フラグを指定することで **ORDER BY ATTRIBUTE** を必要なだけ呼び出して連結することができます。ソート継続フラグを付けない **ORDER BY ATTRIBUTE** の呼び出しによって連結の終端が明示され、ソート処理が開始します。この機能はカスタマイズされたユーザーインターフェースにおいて複数レベルのソートを扱うのに便利です。**ORDER BY ATTRIBUTE** は [ORDER BY](order-by.md) と組み合わせて呼び出すことができます。

**注:** このシンタックスを使用した場合には、**ORDER BY ATTRIBUTE** の呼び出し毎に一つのソートレベルのみ指定することができます。

ソートの定義方法に関係なく、実際のソート処理に時間がかかる場合は、4Dは自動的にサーモメータで進捗状況のメッセージを表示します。\[#cmd id="181"/\] コマンドと [MESSAGES OFF](messages-off.md) コマンドを使用して、このメッセージを表示または非表示にすることができます。進捗サーモメータが表示された場合、ユーザーは中止ボタンをクリックしてソートを中止することができます。ソートが正常に終了すると、システム変数OKには1がセットされ、それ以外の場合には0がセットされます。

#### 例題 

カレントセレクションを年齢 (age; 降順 )、次に名前 (name; 昇順) でソートします。元の順番は次の通りです:

```json
// [Customer]OB_Info の中身を部分的に出力
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Mikken","age":"Forty-six","client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Hamp","age":"Sixty","client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Martin","client":true],
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Gordini","client":true},
{"LastName":"Delaferme","age":54,"client":true},
{"LastName":"Belami","age":"Forty-six","client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Smeldorf","age":70,"client":true}
```

次のコードを実行すると:

```4d
 ORDER BY ATTRIBUTE([Customer];[Customer]OB_Info;"age";<;[Customer]OB_Info;"LastName";>)
```

レコードは次の順番にソートされます:

```json
{"LastName":"Smeldorf","age":70,"client":true}
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Delaferme","age":54,"client":true}, 
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Hamp","age":"Sixty","client":true}, // age に文字列が使用されているため
{"LastName":"Belami","age":"Forty-six","client":true}, // 異なる括りでソートされます
{"LastName":"Mikken","age":"Forty-six","client":true}
{"LastName":"Gordini","client":true}, // age が null値 (存在しない) のため
{"LastName":"Martin","client":true} // 終わりにソートされます
```

#### 参照 

  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1407 |
| スレッドセーフである | &check; |


