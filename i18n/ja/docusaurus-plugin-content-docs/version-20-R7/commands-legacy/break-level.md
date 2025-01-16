---
id: break-level
title: BREAK LEVEL
slug: /commands/break-level
displayed_sidebar: docs
---

<!--REF #_command_.BREAK LEVEL.Syntax-->**BREAK LEVEL** ( *level* {; *pageBreak*} )<!-- END REF-->
<!--REF #_command_.BREAK LEVEL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| level | Integer | &#8594;  | ブレークレベルの数 |
| pageBreak | Integer | &#8594;  | 改ページを行うブレークレベル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BREAK LEVEL.Summary-->**BREAK LEVEL**は、[PRINT SELECTION](print-selection.md)コマンドを使ってプリントするレポートのブレークの数を指定します。<!-- END REF-->

ブレーク処理を行うレポートを印刷する前に、**BREAK LEVEL**コマンドと[ACCUMULATE](accumulate.md)コマンドを実行しなければなりません。これらのコマンドはレポートに対するブレーク処理を有効にします。[Subtotal](subtotal.md)コマンドの説明を参照してください。

*level*引数は、ブレーク処理を実行するもっとも深いレベルです。少なくとも同数のレベルでレコードをソートしなければなりません。ブレークレベルよりも多いレベルでソートすると、これらのレベルはソートされたものとして印刷されますが、ブレークに対しての意味は持ちません。

生成される各ブレークレベルは、フォーム中の対応するブレークエリアやヘッダエリアを印刷します。フォーム中のブレークエリアは、最低でも*level*の数だけ存在しなければなりません。フォーム中により多くのブレークエリアがある場合、それらは無視され、印刷されません。

2番目のオプションの引数*pageBreak*は、印刷中にページブレークを発生させるために使用します。

#### 例題 

以下の例は、2つのブレークレベルを持つレポートを印刷します。このセレクションは4つのレベルに対してソートされますが、**BREAK LEVEL**コマンドは2つのレベルだけにブレークを指定します。一つのフィールドは[ACCUMULATE](accumulate.md)コマンドで累計しています:

```4d
 ORDER BY([Emp]Dept;>;[Emp]Title;>;[Emp]Last;>;[Emp]First;>) // 4つのレベルでソート
 BREAK LEVEL(2) // 2つのレベルに対してブレーク処理を有効に(Dept とTitle)
 ACCUMULATE([Emp]Salary) // 給与の累計
 FORM SET OUTPUT([Emp];"Dept salary") // レポート用のフォームを選択
 PRINT SELECTION([Emp]) // レポートを印刷する
```

#### 参照 

[ACCUMULATE](accumulate.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 302 |
| スレッドセーフである | &cross; |


