---
id: launch-external-process
title: LAUNCH EXTERNAL PROCESS
slug: /commands/launch-external-process
displayed_sidebar: docs
---

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Syntax-->**LAUNCH EXTERNAL PROCESS** ( *fileName* {; *inputStream* {; *outputStream* {; *errorStream*}}}{; *pid*} )<!-- END REF-->
<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | ファイルパスと起動するファイルの引数 |
| inputStream | Text, Blob | &#8594;  | 入力ストリーム(stdin) |
| outputStream | Text, Blob | &#8592; | 出力ストリーム(stdout) |
| errorStream | Text, Blob | &#8592; | エラーストリーム(stderr) |
| pid | Integer | &#8592; | 外部プロセスの固有識別子 |

<!-- END REF-->

#### 互換性に関する注意 

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Summary-->4D v19 R4 以降、外部プロセスを実行して管理するためには*SystemWorker class* の使用が推奨されます。<!-- END REF-->しかしながら、このコマンドも引き続きサポートされます。

#### 説明 

**LAUNCH EXTERNAL PROCESS**コマンドを使用して、macOSとWindowsで4Dから外部プロセスを起動させることができます。  
macOSでは、コマンドを用いてターミナルから起動できる実行可能なアプリケーションへアクセスできます。

実行するアプリケーションの固定されたファイルパスと (必要に応じて) 引数を引数*fileName*に渡します。  
macOSではアプリケーション名を渡すこともできます。4Dは環境変数**PATH**を使用して、実行可能ファイルを探します。

**警告:** このコマンドは実行可能なアプリケーションのみを起動することができます。シェル (コマンドインタプリタ) の一部である命令は実行できません。例えば、macOSではこのコマンドを用いて*echo*命令やインダイレクトを実行することはできません。

オプションの*inputStream*引数は外部プロセスの*stdin*を格納します。コマンドが実行されると、引数*outputStream*と*errorStream* (渡した場合) は外部プロセスの*stdout*と*stderr*をそれぞれ返します。(例えばピクチャのような)バイナリデータを扱っている場合、文字列の代わりにBLOB引数を使用します。

4D では**LAUNCH EXTERNAL PROCESS** のコンテキストで使用可能で、[SET ENVIRONMENT VARIABLE](set-environment-variable.md) コマンドを使用して設定可能な3つの特定の環境変数を提供しています:

* *\_4D\_OPTION\_CURRENT\_DIRECTORY*: 開始する外部プロセスのカレントディレクトリを設定するために使用します。必ずディレクトリ (macOSではHFSタイプのシンタックス、WindowsではDOS) のパス名を*varValue* に渡してください。
* *\_4D\_OPTION\_HIDE\_CONSOLE* (Windows のみ):DOSコンソールのウィンドウを隠すために使用します。今コンソールを隠すには"True" を*varValue* に渡します。コンソールを表示するには"False" を渡します。
* *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*: 非同期モードで外部プロセスを実行するために使用します。この場合他のアプリケーションをブロックしません。非同期実行を設定するには"False" を、同期実行を設定するには"True"(デフォルト値)をvarValue に渡してください。この変数に関しては、*varValue* に""(空の文字列)を渡しても何の変化もありません。  
環境変数を、[SET ENVIRONMENT VARIABLE](set-environment-variable.md) コマンドを使用して"false" に設定した場合(非同期実行)、*outputStream* および *errorStream* 引数は返されません。

これらのカレントプロセスでの**LAUNCH EXTERNAL PROCESS** の次の呼び出しから有効です。

*pid*引数を渡した場合、*pid*引数(倍長整数型)は*\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*オプションの状態に関わらず、コマンドをローンチするのに作成したプロセスのシステムレベルのIDを返します。この情報により、作成した外部プロセスとその後やりとり(例えば中止等)するのが容易になります。プロセスのローンチに失敗した場合、*pid*引数は返されません。

#### macOSでの例題 

Application/UtilitiesフォルダにあるmacOS ターミナルを使用します。

1\. ファイルに対してパーミッションを変更する(*chmod* はファイルアクセスを変更するために使用するmacOS コマンドです)

```4d
 LAUNCH EXTERNAL PROCESS("chmod +x /folder/myfile.txt")
```

2\. テキストファイルを編集する(*cat*はファイルを編集するために使用するmacOS マンドです)。この例ではコマンドの完全なアクセスパスが渡されています。

```4d
 var input;output : Text
 input:=""
 LAUNCH EXTERNAL PROCESS("/bin/cat /folder/myfile.txt";input;output)
```

3\. "Users" フォルダの内容を取得する(*ls -l*はDOSの*dir* コマンド に相当するmacOS コマンドです)

```4d
 var $In;$Out : Text
 LAUNCH EXTERNAL PROCESS("/bin/ls -l /Users";$In;$Out)
```

4\. 独立している"グラフィック" アプリケーションを起動させるには、*open*システムコマンドを使用するのが望ましいです(この場合、**LAUNCH EXTERNAL PROCESS** ステートメントはアプリケーションをダブルクリックすることと同じ効果があります) 。

```4d
 LAUNCH EXTERNAL PROCESS("open /Applications/Calculator.app")
```

#### Windowsでの例題 

5\. NotePadを開く 

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe")
```

6\. Notepadを開き、特定のドキュメントを開く

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe C:\\Docs\\new folder\\res.txt")
```

7\. MicrosoftR WordRアプリケーションを起動させて、特定のドキュメントを開く(2つの""を使用)

```4d
 $mydoc:="C:\\Program Files\\Microsoft Office\\Office10\\WINWORD.EXE \"C:\\Documents and Settings\\Mark\\Desktop\\MyDocs\\New folder\\test.xml\""
 LAUNCH EXTERNAL PROCESS($mydoc;$tIn;$tOut)
```

8\. Perlスクリプトを実行する(ActivePerlを必要とします):

```4d
 var $input;$output : Text
 SET ENVIRONMENT VARIABLE("myvariable";"value")
 LAUNCH EXTERNAL PROCESS("D:\\Perl\\bin\\perl.exe D:\\Perl\\eg\\cgi\\env.pl";$input;$output)
```

9\. コンソールを表示せずにカレントディレクトリでコマンドを実行させる

```4d
 SET ENVIRONMENT VARIABLE("_4D_OPTION_CURRENT_DIRECTORY";"C:\\4D_VCS")
 SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
 LAUNCH EXTERNAL PROCESS("mycommand")
```

10\. ユーザが選択した外部ドキュメントをWindowsで開く

```4d
 $docname:=Select document("";"*.*";"Choose the file to open";0)
 If(OK=1)
    SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
    LAUNCH EXTERNAL PROCESS("cmd.exe /C start \"\" \""+$docname+"\"")
 End if
```

11\. Windows上でプロセスの一覧をリクエスト:

```4d
 var $pid : Integer
 var $stdin;$stdout;$stderr : Text
 
 LAUNCH EXTERNAL PROCESS("tasklist";$pid) //PIDのみを取得
 LAUNCH EXTERNAL PROCESS("tasklist";$stdin;$stdout;$stderr;$pid) //全ての情報を取得
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKは1に設定されます。そうでなければ (ファイルが見つからない、メモリが足りないなど) 0が設定されます。

#### 参照 

[OPEN URL](open-url.md)  
[SET ENVIRONMENT VARIABLE](set-environment-variable.md)  