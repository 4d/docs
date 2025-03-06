---
id: on-err-call
title: ON ERR CALL
slug: /commands/on-err-call
displayed_sidebar: docs
---

<!--REF #_command_.ON ERR CALL.Syntax-->**ON ERR CALL** ( *errorMethod* {; *scope*} )<!-- END REF-->
<!--REF #_command_.ON ERR CALL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| errorMethod | Text | &#8594;  | 実行されるエラーメソッド, または 空の文字列でエラーのトラップ停止 |
| scope | Integer | &#8594;  | エラーメソッドのスコープ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ON ERR CALL.Summary-->**ON ERR CALL** コマンドは、カレントプロジェクト内の指定された実行コンテキストにおけるエラー検知用のメソッドとして errorMethod で渡した名前のプロジェクトメソッドをインストールします。<!-- END REF-->このプロジェクトメソッドは**エラー処理メソッド**または**エラーキャッチメソッド**と呼ばれます。

エラー処理メソッドはプロジェクトごとにインストールされます。コンポーネントとホストのプロジェクトはそれぞれ独自のエラー処理メソッドを定義することができ、エラーが発生したプロジェクトのメソッドのみが呼び出されます。

エラー処理プロジェクトメソッドのインストール後は、定義された実行コンテキスト内において4D ランゲージコマンドの実行中にエラーが発生するたびに4D がこのメソッドを呼び出します。

コマンドの*scope* 引数は、エラーがerrorMethod 引数で指定したメソッドの呼び出しをトリガーする実行コンテキストを指定します。デフォルトでは、引数が省略されていた場合にはコマンドのスコープはローカルの実行コンテキスト、つまりカレントプロセスです。*scope* 引数には、以下の定数のいづれか1つを渡すことができます:

| 定数                        | 値 | コメント                                             |
| ------------------------- | - | ------------------------------------------------ |
| ek errors from components | 2 | コンポーネントで発生したエラー                                  |
| ek global                 | 1 | プロジェクトのグローバル実行コンテキストで発生したエラー                     |
| ek local                  | 0 | ローカル実行コンテキストで発生したエラー(*scope* 引数が省略されていた場合のデフォルト) |

* *scope* \= ek local (または*scope* 引数が省略)の場合、カレントプロセス内で発生したエラーのみがerrorMethod 引数で指定したメソッドを呼び出します。1つのプロセスにつき1つのエラー処理メソッドを指定できますが、異なるプロセスに対しては異なるエラー処理メソッドを指定できます。
* *scope* \= ek global の場合、プロセスに関係なく、アプリケーション内で発生した全てのエラーがerrorMethod 引数で指定されたメソッドを呼び出します(ただしコンポーネント内のプロセスは除く)。ただし、ek local エラー処理がプロセスに対して定義されていた場合には、ek global エラー処理は呼び出されないという点に注意してください。  
またグローバルエラー処理メソッドはサーバー側でも有効であり、これを使用してサーバー側の関数内のエラーを処理するのに使用できるという点に注意してください。
* *scope* \= ek errors from components の場合、アプリケーションにインストールされたコンポーネントで発生したエラーのみがerrorMethod 引数で指定されたメソッドを呼び出します。ただし、コンポーネント内部でエラー処理メソッドが定義されていた場合、コンポーネント内のメソッドの方が呼び出され、ホストアプリケーション側で設定されたek errors from components エラー処理は呼び出されないという点に注意してください。

**注意:** コンパイルモードで、プリエンプティブ・プロセスから **ON ERR CALL** をコールしている場合、コンパイラーは *errorMethod* がスレッドセーフかどうかを確認し、プリエンプティブ・モードに適応していないと判断すればエラーを返します。詳細については *プリエンプティブ4Dプロセス* を参照ください。

エラーの検知を中止するには、*scope* 引数で指定したいスコープ(あれば)を指定し、*errorMethod* に空の文字列を指定して再度**ON ERR CALL** コマンドを呼びだします。

エラーはシステム変数Error の値で判別します。このシステム変数にはエラーコードが納められます。このマニュアルの付録に *エラーコード* が記載されています。詳細は*シンタックスエラー (1 -> 81)*を参照してください。システム変数Error の値はエラー処理メソッド内のみで有効です。エラーの原因となったメソッド内でこのエラーコードが必要であれば、システム変数Error を独自のプロセス変数にコピーしてください。またError method 、Error lineとError formula システム変数にはそれぞれ、エラーが発生したメソッドの名前とその行番号、フォーミュラのテキストが格納されます ([メソッド内でのエラー処理]([../Concepts/error-handling.md]) 参照)。

[Last errors](last-errors.md) または [Last errors](last-errors.md)  コマンドを使用する事で割り込みの発生源のエラーシークエンス(例えばエラー"スタック"など)を取得する事ができます。

エラー処理メソッドは適切な方法でエラーを管理、またはユーザに対してエラーメッセージを表示します。エラーは以下で実行されたプロセス中に生成されます:

* 4Dデータベースエンジン: 例えばレコードの保存がトリガールールに違反する場合。
* 4D環境: 例えば配列に割り当てるために十分なメモリがない場合。
* データベースが稼働しているOS: 例えばディスクに空きがなかったり、I/Oエラーの場合。

実行を中断するには、[ABORT](abort.md) コマンドを使用できます。エラー処理メソッドで[ABORT](abort.md) コマンドを使用しない場合、4Dは割り込みをかけたメソッドに制御を戻し、メソッドの実行を続けます。エラーをリカバーできないときに[ABORT](abort.md) コマンドを使用します。

エラー処理メソッド自体でエラーが発生した場合は、4Dがエラー管理を引き継ぎます。したがって、エラー処理メソッドでエラーが発生しないように十分注意してください。また、エラー処理メソッドでは**ON ERR CALL** コマンドを使用することはできません。

**ON ERR CALL** は通常On startupデータベースメソッドから呼び出され、このアプリケーションのエラーを処理します。また**ON ERR CALL** はメソッドの開始時に置かれて、そのメソッド特有のエラーを処理します。

#### 例題 1 

グローバルなエラー処理メソッドを、例えば**On Startup** データベースメソッドで定義したい場合を考えます:

```4d
 ON ERR CALL("myGlobalErrorHandler";ek global)
```

#### 例題 2 

次のプロジェクトメソッドは、引数で渡された名前のドキュメンを作成します。ドキュメントが作成できない場合、このプロジェクトメソッドは0またはエラーコードを返します: 

```4d
  // Create doc プロジェクトメソッド
  // Create doc ( 文字列 ; ポインタ) -> 倍長整数
  // Create doc ( DocName ; ->DocRef ) -> Error code result
 
 gError:=0
 ON ERR CALL("IO ERROR HANDLER")
 $2->:=Create document($1)
 ON ERR CALL("")
 $0:=gError
```

IO ERROR HANDLERプロジェクトメソッドは以下のようになります:

```4d
  // IO ERROR HANDLER project method
 gError:=Error // エラーコードをプロセス変数にコピー
```

現在実行中のメソッド内でエラーコードの結果を取得するために、プロセス変数*gError*を使用している点に注意してください。データベースにこれらのメソッドを作成したら、次のようなコードを使用します:

```4d
  // ...
 var vhDocRef : Time
 $vlErrCode:=Create doc($vsDocumentName;->vhDocRef)
 If($vlErrCode=0)
  //...
    CLOSE DOCUMENT($vlErrCode)
 Else
    ALERT("ドキュメントを作成できませんでした, I/O error "+String($vlErrCode))
 End if
```

#### 例題 3 

複雑な一連の処理を実装中に、各種サブルーチンで異なるエラー処理メソッドが必要となる場合があります。プロセスごとにいちどに1つのエラー処理メソッドしか持つことができないため、次の2通りの方法から対応策を選択することになります:  
\- ON ERR CALLコマンドを呼び出すたびに現在のエラー処理メソッドを保持する。または  
\- プロセス配列変数を使用し（この例では*asErrorMethod*）、エラー処理メソッドとプロジェクトメソッド（この例ではON ERROR CALL）を“積み上げ”て、エラー処理メソッドのインストールとクリアを行う。 

プロセスの実行を開始する時点で配列を初期化する必要があります:

```4d
  // プロセスメソッドの最初に配列の初期化をするのを忘れないように。
 ARRAY STRING(63;asErrorMethod;0)
```

これはカスタマイズしたON ERROR CALLメソッドです:

```4d
  // ON ERROR CALL project method
  // ON ERROR CALL { ( 文字列 ) }
  // ON ERROR CALL { ( Method Name ) }
 
 C_STRING(63;$1;$ErrorMethod)
 var $vlElem : Integer
 
 If(Count parameters>0)
    $ErrorMethod:=$1
 Else
    $ErrorMethod:=""
 End if
 
 If($ErrorMethod#"")
    var gError : Integer
    gError:=0
    $vlElem:=1+Size of array(asErrorMethod)
    INSERT IN ARRAY(asErrorMethod;$vlElem)
    asErrorMethod{$vlElem}:=$1
    ON ERR CALL($1)
 Else
    ON ERR CALL("")
    $vlElem:=Size of array(asErrorMethod)
    If($vlElem>0)
       DELETE FROM ARRAY(asErrorMethod;$vlElem)
       If($vlElem>1)
          ON ERR CALL(asErrorMethod{$vlElem-1})
       End if
    End if
 End if
```

次のように呼び出します:

```4d
 gError:=0
 ON ERROR CALL("IO ERRORS") // IO ERRORS エラー処理メソッドをインストール
  // ...
 ON ERROR CALL("ALL ERRORS") // ALL ERRORS エラー処理メソッドをインストール
  // ...
 ON ERROR CALL // ALL ERRORS エラー処理メソッドをアンインストールして、IO ERRORSを再インストール
  // ...
 ON ERROR CALL // IO ERRORS エラー処理メソッドをアンインストール
  // ...
```

#### 例題 4 

次のエラー処理メソッドはユーザによる割り込みを無視し、エラーテキストを表示します:

```4d
  //Show_errors_only プロジェクトメソッド
 If(Error#1006) //これはユーザーによる割り込みではない
    ALERT("エラー "+String(Error)+" が発生しました。問題となったコードはこちらです: \""+Error formula+"\"")
 End if
```

#### 参照 

[ABORT](abort.md)  
*Error Handler*  
[Last errors](last-errors.md)   
[Last errors](last-errors.md)  
[Method called on error](method-called-on-error.md)  
*システム変数*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 155 |
| スレッドセーフである | &check; |


