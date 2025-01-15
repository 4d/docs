---
id: parse-formula
title: Parse formula
slug: /commands/parse-formula
displayed_sidebar: docs
---

<!--REF #_command_.Parse formula.Syntax-->**Parse formula** ( *formula* {; *options*}{; *errorMessage*} ) : Text<!-- END REF-->
<!--REF #_command_.Parse formula.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| formula | Text | &#8594;  | 標準テキストのフォーミュラ |
| options | Integer | &#8594;  | 入力/出力の形式の指示 |
| errorMessage | Text | &#8592; | エラーメッセージ(エラーなしの場合には空の文字列) |
| 戻り値 | Text | &#8592; | 変換されたフォーミュラ(標準テキスト) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Parse formula.Summary-->**Parse formula** ファンクションは、*formula* 引数で指定された4D フォーミュラを解析し、シンタックスをチェックし、正規化された形式で返します。<!-- END REF-->これにより、4D ランゲージあるいはストラクチャー要素(コマンド、定数、テーブル、フィールド、4D プラグインなど)の名前が変更された場合でも、フォーミュラが引き続き有効な状態を維持できます。

**Parse formula** を使用することで、フォーミュラを評価し、フォーミュラを以下のように変換することができます: 

* 実際のテーブル/フィールド名をバーチャルストラクチャー\* 名(カスタムの名前)あるいはトークナイズドされた形式\*\* に変換することができます。
* トークナイズドされた形式のテーブル/フィールド名をバーチャルストラクチャー名あるいは実際のテーブル/フィールド名に変換することができます。
* バーチャルストラクチャーを実際のテーブル/フィールド名あるいはトークナイズドされた形式に変換することができます。
* 4D ランゲージ要素をトークナイズド形式の4D ランゲージへと変換することができます。
* トークナイズド形式の4D ランゲージを4D ランゲージ要素へと変換することができます。

**\** バーチャルストラクチャーは* *[SET TABLE TITLES](set-table-titles.md) and [SET FIELD TITLES](set-field-titles.md) コマンドを使用して定義されます(* *\* 引数必須)。* 

**\*\** トークナイズドされた形式とは、以下のようなトークンシンタックス形式の標準テキストで表現された4D ランゲージおよびストラクチャー要素です(* *フォーミュラ内でのトークンの使用 参照)* *:*

```RAW
[Table:1]Field:1+String:C10(1)
```

*formula* 引数には、標準テキストでのフォーミュラを渡します。ここでは実際のストラクチャー名/バーチャルなストラクチャー名、あるいはトークナイズドされた形式を使用することができます。

*formula* 引数で使用された名前の型に関係なく、デフォルトでは**Parse formula** はテキストトークンを用いない、実際の4D ランゲージ要素/ストラクチャー要素の名前を返します。

任意の*options* 引数を使用すると、*formula* 引数のフォーミュラがどのように表現されているか、あるいはそれをどのように返すかを、以下の*Formulas* テーマの定数で指定することができます。定数を組み合わせることで、返されたフォーミュラの入力/出力フォーマットの両方を指定することができます。 

| 定数                                 | 値 | コメント                                       |
| ---------------------------------- | - | ------------------------------------------ |
| Formula in with virtual structure  | 1 | フォーミュラはバーチャルストラクチャー(カスタムの名前)を使用して表現されています。 |
| Formula out with tokens            | 4 | フォーミュラはテキストトークン形式を使用して返されます(例:Cxx)。        |
| Formula out with virtual structure | 2 | フォーミュラは"バーチャル"なストラクチャー(カスタムの名前)を使用して返されます。 |

  
任意の*errorMessage* 引数は、*formula* 引数のフォーミュラにシンタックスエラーがあった場合にエラーメッセージを受け取ります。エラーがなかった場合には、空の文字列が返されます。

#### 例題 1 

```4d
 ARRAY TEXT($t1;1)
 ARRAY LONGINT($t2;1)
 $t1{1}:="Virtual table"
 $t2{1}:=1
 SET TABLE TITLES($t1;$t2;*)
 
 ARRAY TEXT($tf1;1)
 ARRAY LONGINT($tf2;1)
 $tf1{1}:="Virtual field"
 $tf2{1}:=2
 SET FIELD TITLES([Table_1];$tf1;$tf2;*)
 
  //テーブル/フィールド名をバーチャルストラクチャーへと変換
 $parsedFormula:=Parse formula("[Table_1]Champ_2";Formula out with virtual structure;$errorMessage)
  //結果は [Virtual table]Virtual field
 
  //テーブル/フィールド名をトークナイズドされた形式へと変換
 $parsedFormula:=Parse formula("String([Table_1]Champ_2)";Formula out with tokens;$errorMessage)
  //結果は String:C10([Table_1:1]Champ_2:2)
 
  //バーチャルストラクチャーをテーブル/フィールド名へと変換
 $parsedFormula:=Parse formula("[Virtual table]Virtual field";Formula in with virtual structure;$errorMessage)
  //結果は [Table_1]Champ_2
```

#### 例題 2 

引き続き**例題 1**のテーブルを使用します:

```4d
  //ユーザーにお気に入りのフォーミュラを入力するようたずねる
 $formula:=""
 EDIT FORMULA([Table_1];$formula)
 
  //ユーザーのフォーミュラを後で使用できるように保存
 CREATE RECORD([users_preferences])
 $persistentFormula:=Parse formula($formula;Formula out with tokens)
 [users_preferences]formula:=$persistentFormula
 
  //後で、事前に保存しておいたフォーミュラを実行
 CREATE RECORD([Table_1])
 EXECUTE FORMULA([users_preferences]formula)
```

#### 参照 

[Formula from string](formula-from-string.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
*フォーミュラ内でのトークンの使用*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1576 |
| スレッドセーフである | &cross; |


