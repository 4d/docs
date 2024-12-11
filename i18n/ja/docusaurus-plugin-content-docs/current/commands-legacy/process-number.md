---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* {; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Process number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| name | Text | &#8594;  | プロセス番号を取り出すプロセス名 |
| * | Operator |  &#8594;  | 4D Serverのプロセス番号を返す |
| 戻り値 | Integer | &#8592; | プロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Process number.Summary-->Process numberは、*name*引数に指定した名前を持つプロセス番号を返します。<!-- END REF-->プロセスが見つからない場合には、Process numberは0を返します。

オプションの引数 \* を指定すると、サーバ上で実行されたプロセス（ストアドプロシージャ）のプロセスIDを4D Clientで取得することができます。この場合、負の値が返されます。[GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE")や[SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE")コマンドを使用する際には、このオプションが特に役立ちます。詳細はそれぞれのコマンドの説明を参照してください。

サーバマシン上のプロセスから引数 *\** を指定してこのコマンドを実行すると、正の値が返されます。

#### 例題 

独立したプロセスで実行するカスタムフローティングウインドウを作成します。このプロセスでは、デザインモードでやり取りができる独自のツールを実装します。例えば、キーワードの階層リストで項目を選択すると、デザインモードの最前面ウインドウにテキストを貼り付けるようなツール。これを実行するにはペーストボードを使用できますが、貼り付けイベントはデザインプロセスの内部で発生する必要があります。以下の関数は、デザインプロセス（が実行している場合）のプロセス番号を返します:

```4d
  // Design process number プロジェクトメソッド
  // Design process number -> 倍長整数
  // Design process number -> デザインプロセス番号
 
 $0:=Process number("デザインプロセス")
  // Note: プロセス名が変更されると、このコードは利用できなくなります
```

この関数を使用して、下記のプロジェクトメソッドは、引数として受け取ったテキストをデザインモードの最前面のウインドウに貼り付けます（適用可能な場合）:

```4d
  // PASTE TEXT TO DESIGN プロジェクトメソッド
  // PASTE TEXT TO DESIGN ( テキスト)
  // PASTE TEXT TO DESIGN ( デザインモードの最前面ウィンドウに張り付けるテキスト)
 
 var $1 : Text
 var $vlDesignPID;$vlCount : Integer
 
 $vlDesignPID:=Design process number
 If($vlDesignPID #0)
  // ペーストボードにテキストを置く
    SET TEXT TO PASTEBOARD($1)
  // Ctrl-V / Cmd-V イベントをポスト
    POST KEY(Character code("v");Command key mask;$vlDesignPID)
  // DELAY PROCESSを繰り返し呼び出して、スケジューラに
  // デザインプロセスへのイベントを渡すチャンスを与える
    For($vlCount;1;5)
       DELAY PROCESS(Current process;1)
    End for
 End if
```

#### 参照 

[GET PROCESS VARIABLE](get-process-variable.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 372 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


