---
id: object-get-format
title: OBJECT Get format
slug: /commands/object-get-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get format.Syntax-->**OBJECT Get format** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get format.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| 戻り値 | Text | &#8592; | オブジェクト表示フォーマット |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get format.Summary-->**OBJECT Get format** コマンドは、*object*引数で指定されたオブジェクトに適用された現在の表示フォーマットを返します。<!-- END REF-->

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

このコマンドはオブジェクトの現在の表示フォーマット、つまりデザインモードや[OBJECT SET FORMAT](object-set-format.md) コマンドで定義されたフォーマットを返します。**OBJECT Get format** は、 表示フォーマットを受け入れるあらゆるタイプのフォームオブジェクト (フィールドや変数) に対して使用することができます (ブール、日付、時間、ピクチャ、文字列、数値、ボタングリッド、ダイヤル、サーモメータ、ルーラ、ピクチャポップアップメニュー、ピクチャボタン、3D ボタン、リストボックスヘッダー)。これらのオブジェクトの表示フォーマットに関する詳細は、[OBJECT SET FORMAT](object-set-format.md) コマンドの説明を参照してください。

**注:** コマンドを一連のオブジェクトに対して適用した場合、最後に選択されたオブジェクトのフォーマットが返されます。

**OBJECT Get format** コマンドを日付、時間、ピクチャタイプのオブジェクト (定数で定義されたフォーマット) に対して適用すると、定数の文字コードに相当する文字列が返されます。定数の値を取得するには、この戻り値に対して[Character code](character-code.md) コマンドを適用してください(後述)。

#### 例題 1 

この例は、“myphoto”という名前のピクチャ変数に対して適用されたフォーマット定数の値を取得します: 

```4d
 C_STRING(2;$format)
 OBJECT SET FORMAT(*;"myphoto";Char(On background))
  //背景フォーマットを適用する (value = 3)
 $format:=OBJECT Get format(*;"myphoto")
 ALERT("フォーマット番号:"+String(Character code($format)))
  //"3"が表示される
```

#### 例題 2 

この例は、ブールフィールド“\[Members\]Marital\_status”に対して適用されたフォーマットを取得することができます: 

```4d
 C_STRING(30;$format)
 $format:=OBJECT Get format([Members]Marital_status)
 ALERT($format) //表示フォーマット, 例えば"Married;Single"
```

#### 例題 3 

カスタマイズされたフォーマットは、そのまま返されます:

```4d
 var $format : Text
 OBJECT SET FORMAT(*;"timeinput";":m") //":" は1文字パターンを表すには必要
 $format:=OBJECT Get format(*;"timeinput") // 返される値は":m"
```

#### 参照 

[OBJECT SET FORMAT](object-set-format.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 894 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


