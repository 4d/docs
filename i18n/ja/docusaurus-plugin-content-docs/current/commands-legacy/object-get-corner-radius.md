---
id: object-get-corner-radius
title: OBJECT Get corner radius
slug: /commands/object-get-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get corner radius.Syntax-->**OBJECT Get corner radius** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get corner radius.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列) 省略時objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)、またはフィールドまたは変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | 丸い角の半径(ピクセル単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get corner radius.Summary-->**OBJECT Get corner radius** コマンドは*object* 引数で指定されたオブジェクトの角の半径のカレントの値を返します。<!-- END REF-->この値は、*角の半径プロパティ* を使用してフォームレベルで設定されているか、あるいは[OBJECT SET CORNER RADIUS](object-set-corner-radius.md) コマンドを使用してカレントプロセスに対して設定することが可能です。

**OBJECT Get corner radius** コマンドは、以下のフォームオブジェクトに対して使用することが可能です:

* 四角形
* 入力(4D プロジェクトのみ)
* テキストエリア(4D プロジェクトのみ)

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* にはフィールドまたは変数を指定します。この場合、文字列ではなく変数参照を渡してください(フィールドまたは変数オブジェクトのみ)。

このコマンドは丸い角の半径をピクセル単位で返します。

**注意:** このコマンドは、丸い角のプロパティをサポートしないオブジェクトに対して適用された場合には0 を返します。

#### 例題 

以下のコードをボタンのメソッドに追加します:

```4d
 var $radius : Integer
 $radius:=OBJECT Get corner radius(*;"GreenRect") //カレントの値を取得
 OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1) //半径を大きくする
  // 半径の最大値は自動的に管理されます。
  // 最大値に達した場合、このボタンは何の効力もありません
```

#### 参照 

[OBJECT SET CORNER RADIUS](object-set-corner-radius.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1324 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


