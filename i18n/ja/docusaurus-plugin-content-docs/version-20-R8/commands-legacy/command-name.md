---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *command* {; *info* {; *theme*}} ) : Text<!-- END REF-->
<!--REF #_command_.Command name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| command | Integer | &#8594;  | コマンド番号 |
| info | Integer | &#8592; | コマンドのスレッドセーフについてのプロパティ |
| theme | Text | &#8592; | コマンドのランゲージのテーマ |
| 戻り値 | Text | &#8592; | ローカライズされたコマンド名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Command name.Summary-->**Command name** コマンドは、引数*command*に渡したコマンド番号のコマンド名に加え、コマンドのプロパティ(任意)を返します。<!-- END REF-->コマンド毎の番号はエクスプローラー内と、ドキュメントのプロパティエリア内に書かれています。

**互換性に関する注意:** 以前はコマンド名が 4Dのバージョンによって異なったり (コマンドの改名)、アプリケーション言語によって異なる場合もあったため、特にトークナイズドされていない部分のコードについて、コマンドを番号を用いて指定することが有用な場合もありました。この目的に応じた **Command name** コマンドの有用性は、4Dが時間をかけて進化する中で少しずつ縮小されてきました。トークナイズドされていない宣言 (式) に対して、4Dは現在トークンシンタックスを提供しています。これはコマンド名の変化やテーブル等といった他の要素に起因する潜在的な問題を避けられる一方、 これらの名前を読みやすい方法でタイプすることができる方法です (この点についての詳細は、*フォーミュラ内でのトークンの使用* の章を参照ください)。それに加え、4D v15以降ではデフォルトで英語がランゲージとして使用されます。しかしながら、データベース設定の [Is a list](is-a-list.md) の "リージョンシステム設定を使用" オプションを使用することによって、フランス語版の4Dにおいては引き続きフランス語をランゲージとして使用できます。

二つの任意の引数が使用できます:

* *info*: コマンドのプロパティ。返された値はbitフィールドであり、現在は最初のビット(bit 0)のみが有用となっています。コマンドがスレッドセーフ(プリエンプティブプロセス内で実行が可能)である場合には1に設定され、スレッドセーフでない 場合には0に設定されます。プリエンプティブプロセス内ではスレッドセーフなコマンドのみが使用可能です。この点についてのより詳細な情報については、*プリエンプティブ4Dプロセス* の章を参照して下さい。
* *theme*: コマンドの4Dランゲージのテーマ名を返します。

**Command name** コマンドは*command* 変数の番号がが既存のコマンド番号に対応する場合には*OK* 変数が1に設定され、それ以外の場合には0が設定されます。しかしながら、既存のコマンドの一部には無効化されてしまったコマンドもあり、そういったコマンドの場合には**Command name** は空の文字列を返すという点に注意が必要です(最後の例題を参照して下さい)。

#### 例題 1 

以下のコードを使用すると、全ての有効な4Dコマンドを配列内に読み込むことができます:

```4d
 var $Lon_id : Integer
 var $Txt_command : Text
 ARRAY LONGINT($tLon_Command_IDs;0)
 ARRAY TEXT($tTxt_commands;0)
 
 Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id)
    If(OK=1) // コマンド番号が存在する
       If(Length($Txt_command)>0) // コマンドが無効化されていない
          APPEND TO ARRAY($tTxt_commands;$Txt_command)
          APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)
       End if
    End if
 Until(OK=0) //既存のコマンドの終わり
```

#### 例題 2 

フォームで、一般的なサマリーレポートコマンドのドロップダウンリストを作成します。ドロップダウンリストのオブジェクトメソッドに、次のように記述します:

```4d
 Case of
    :(Form event code=On Before)
       ARRAY TEXT(asCommand;4)
       asCommand{1}:=Command name(1)
       asCommand{2}:=Command name(2)
       asCommand{3}:=Command name(4)
       asCommand{4}:=Command name(3)
  // ...
 End case
```

4Dの日本語版ではドロップダウンリストに、Sum、Average、Min、Maxが表示されます。フランス語版\*では、ドロップダウンリストには、Somme、Moyenne、Min、Maxが表示されます。

\*フランス語のプログラミング言語を使用するよう設定されている4Dアプリケーション(互換性に関する注意を参照して下さい)

#### 例題 3 

番号を引数として渡したコマンドがスレッドセーフである場合には**True**を、そうでない場合には**False**を返す様なメソッドを作成したい場合を考えます。

```4d
  //Is_Thread_Safe project method
  //Is_Thread_Safe(numCom) -> Boolean
 
 var $1;$threadsafe : Integer
 var $name : Text
 var $0 : Boolean
 $name:=Command name($1;$threadsafe;$theme)
 If($threadsafe ?? 0) //最初のビットが1に設定されていた場合
    $0:=True
 Else
    $0:=False
 End if
```

これを使い、例えば"SAVE RECORD"コマンド(53番)に対して、以下のように書く事ができます:

```4d
 $isSafe:=Is_Thread_Safe(53)
  // Trueを返します
```

#### 参照 

[EXECUTE FORMULA](execute-formula.md)  
*プリエンプティブ4Dプロセス*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 538 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


