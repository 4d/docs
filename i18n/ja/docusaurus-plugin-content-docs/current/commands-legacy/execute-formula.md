---
id: execute-formula
title: EXECUTE FORMULA
slug: /commands/execute-formula
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE FORMULA.Syntax-->**EXECUTE FORMULA** ( *statement* )<!-- END REF-->
<!--REF #_command_.EXECUTE FORMULA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| statement | Text | &#8594;  | 実行するコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.EXECUTE FORMULA.Summary-->**EXECUTE FORMULA** は*statement*をコードとして実行します。<!-- END REF-->このコマンドはユーザーがビルド・変更可能な式を評価する場合に使用することを想定して設計されています。  

ステートメントの文字列は必ず1行だけです。*statement* に空の文字列を指定した場合、**EXECUTE FORMULA**コマンドは何も行いません。*statement* が一行のメソッドとして実行されるかぎり、それは正しく実行される、というのが大原則です。**EXECUTE FORMULA** は実行速度を低下させるので、代替え手段として利用します。コンパイル済みデータベースにおいても、そのコードはコンパイルされていません。つまり*statement*は実行されますが、コンパイル時にコンパイラによるチェックはされません。

**注:** コンパイル済みモードでのフォーミュラの実行はキャッシュを使用する事によって最適化することができます(以下の*コンパイル済みモードでのフォーミュラのキャッシュ*を参照して下さい)。

*statement* には以下をの要素を含めることができます:

* ファンクション(値を返すプロジェクトメソッド)の呼び出し
* 4D コマンドの呼び出し
* 代入

**注:** 

* *statement* がプロジェクトメソッドである場合、引数を渡すことのできる[EXECUTE METHOD](execute-method.md) を使用することが推奨されます。
* *statement* 内にて、例えば[C\_DATE](c-date.md) のような、変数の宣言コマンドを呼び出すことは推奨されていません。コード内で衝突を起こす可能性があるためです。

フォーミュラにはプロセス変数とインタープロセス変数を含めることができます。しかし*statement*は1行でなければならないため、(*If*, While, などの) フローコントロールを含めることはできません。

使用する4Dの言語やバージョンやに関わらず、*statement* が正常に評価されると言う事を保証するためには、異なるバージョン間において名前が変化する可能性のある要素(コマンド、テーブル、フィールド、定数)に対しては*トークン*シンタックスを使用する事が推奨されます。例えば、[Current time](current-time.md)コマンドを挿入するためには'**Current time:C178**'と入力します。この点についてのより詳細な情報については、*フォーミュラ内でのトークンの使用*を参照して下さい。

##### コンパイル済みモードでのフォーミュラのキャッシュ 

最適化のために、**EXECUTE FORMULA**によってコンパイル済みモードで実行されたそれぞれのフォーミュラは、メモリ内の専用のキャッシュに保存する事が可能です。フォーミュラはトークナイズドされた形でキャッシュされます。一度キャッシュに保存されると、その後の実行はトークン化のステップをスキップするため、大幅に最適化されます。

キャッシュサイズはデフォルトではゼロです(キャッシュなし)。[SET DATABASE PARAMETER](set-database-parameter.md)コマンドを使用してキャッシュを作成または調整する必要があります。例えば:

```4d
 SET DATABASE PARAMETER(Number of formulas in cache;0) //フォーミュラのキャッシュはなし
 SET DATABASE PARAMETER(Number of formulas in cache;3) //それぞれのプロセスにおいてフォーミュラを3つまでキャッシュ可能
```

**EXECUTE FORMULA**コマンドは、コンパイルされたデータベースあるいはコンポーネントから呼び出されたときのみキャッシュを使用します。

#### 例題 

4Dコマンドとテーブルへの呼び出しを含むフォーミュラを実行したい場合を考えます。これらの要素は改名されている可能性があるため、以下のようにトークンシンタックスを使用する事によって、アプリケーションの将来のバージョンにおいても正常な実行を保証する事ができます:

```4d
 EXECUTE FORMULA("Year of:C25 ([Products:5]Creation_Date:2])+$add")
```

#### 参照 

[Command name](command-name.md)  
[EDIT FORMULA](edit-formula.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 63 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


