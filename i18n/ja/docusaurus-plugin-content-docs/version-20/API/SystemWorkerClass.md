---
id: SystemWorkerClass
title: SystemWorker
---

システムワーカーを使うことで、4Dコードは同じマシン上で任意の外部プロセス (シェルコマンド、PHPなど ) を呼び出すことができます。 システムワーカーは非同期で呼び出されます。 コールバックを使用することで、4D は双方向の通信を可能にします。

`SystemWorker` クラスは、`4D` クラスストアにて提供されています。

### 例題

```4d
    // ipconfig 情報へのアクセスを取得する Windows での例
var $myWinWorker : 4D.SystemWorker
var $ipConfig : Text
$myWinWorker:= 4D.SystemWorker.new("ipconfig")
$ipConfig:=$myWinWorker.wait(1).response //timeout 1 second

    // ファイルのパーミッションを変更する macOS での例
    // chmod はパーミッションを変更するための macOS コマンドです
var $myMacWorker : 4D.SystemWorker
$myMacWorker:= 4D.SystemWorker.new("chmod +x /folder/myfile.sh")

```

### 概要

|                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4d-systemworker-new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.SystemWorker.new().Summary -->|
| [<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.closeInput().Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.commandLine.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#dataype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.dataType.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.encoding.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.errors.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.exitCode.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.hideWindow.Syntax -->](#hideWindow)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.hideWindow.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.pid.Syntax -->](#pid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.pid.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.postMessage().Syntax -->](#postmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.postMessage().Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.response.Syntax -->](#response)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.response.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.responseError.Syntax -->](#responseerror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.responseError.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminate().Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminated.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.timeout.Syntax -->](#timeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.timeout.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.wait().Summary --> |

<!-- REF 4D.SystemWorker.new().Desc -->
## 4D.SystemWorker.new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

<!-- REF #4D.SystemWorker.new().Syntax -->
**4D.SystemWorker.new** ( *commandLine* : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #4D.SystemWorker.new().Params -->
| 引数          | 型               |    | 説明                                     |
| ----------- | --------------- |:--:| -------------------------------------- |
| commandLine | Text            | -> | 実行するコマンドライン                            |
| options     | Object          | -> | ワーカーパラメーター                             |
| 戻り値         | 4D.SystemWorker | <- | 非同期の新規システムワーカー (プロセスが開始されなかった場合は null) |  
<!-- END REF -->

#### 説明

`4D.SystemWorker.new()` 関数は、 <!-- REF #4D.SystemWorker.new().Summary -->外部プロセスを開始するために *commandLine* に渡したコマンドラインを実行する `4D.SystemWorker` オブジェクトを作成して返します<!-- END REF -->.

返されたシステムワーカーオブジェクトは、ワーカーにメッセージを送信したり、ワーカーの結果を取得するために使用できます。

プロキシオブジェクトの生成中に問題があった場合、この関数は `null` オブジェクトを返し、エラーが生成されます。

*commandLine* には、実行するアプリケーションのファイルのフルパス (POSIX シンタックス)、および必要に応じて追加の引数を渡します。 アプリケーション名だけを渡すと、4Dは 実行ファイルを探すために `PATH` 環境変数を使用します。

**警告:** この関数は、実行可能なアプリケーションを起動するだけで、シェル (コマンドインタープリター) の一部である命令を実行することはできません。 たとえば Windows で、このコマンドを使用して `dir` 命令を実行することはできません。

#### *options* オブジェクト

*options* に渡すオブジェクトは、次のプロパティを持つことができます:

| プロパティ            | 型       | デフォルト     | 説明                                                                                                                                                           |
| ---------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| onResponse       | Formula | undefined | システムワーカーメッセージ用のコールバック。 完全なレスポンスを受け取り次第、このコールバックが呼び出されます。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                |
| onData           | Formula | undefined | システムワーカーデータ用のコールバック。 システムワーカーがデータを受け取る度に、このコールバックが呼び出されます。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                              |
| onDataError      | Formula | undefined | 外部プロセスエラー用のコールバック (外部プロセスの *stderr*)。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                   |
| onError          | Formula | undefined | 実行エラー用のコールバック。異常なランタイム条件 (システムエラー) の場合にシステムワーカーによって返されます。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                               |
| onTerminate      | Formula | undefined | 外部プロセスが終了されたときのコールバック。 コールバックは 2つのオブジェクトを引数として受け取ります (後述参照)                                                                                                  |
| timeout          | Number  | undefined | プロセスが生きている場合、キルされるまでの秒数。                                                                                                                                     |
| dataType         | Text    | "text"    | レスポンス本文のデータ型。 可能な値: "text" (デフォルト), "blob"。                                                                                                                  |
| encoding         | Text    | "UTF-8"   | `dataType="text"` の場合のみ。 レスポンス本文のエンコーディング。 利用可能な値については、[`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/ja/page1011.html) コマンドの説明を参照ください。        |
| variables        | Object  |           | システムワーカー用のカスタム環境変数を設定します。 シンタックス: `variables.key=value` (`key` は変数名、`value` はその値)。 値は、可能な限り文字列に変換されます。 値に '=' を含めることはできません。 定義されていない場合、システムワーカーは 4D環境を継承します。 |
| currentDirectory | Folder  |           | プロセスが実行される作業ディレクトリ                                                                                                                                           |
| hideWindow       | Boolean | true      | (Windows) アプリケーションウィンドウを隠す (可能な場合)、または Windowsコンソールを隠す                                                                                                       |

すべてのコールバック関数は、2つのオブジェクト引数を受け取ります。 その内容は、コールバックに依存します:

| 引数           | 型             | *onResponse* | *onData*     | *onDataError* | *onError*    | *onTerminate* |
| ------------ | ------------- | ------------ | ------------ | ------------- | ------------ | ------------- |
| $param1      | Object        | SystemWorker | SystemWorker | SystemWorker  | SystemWorker | SystemWorker  |
| $param2.type | Text          | "response"   | "data"       | "error"       | "error"      | "termination" |
| $param2.data | Text または Blob |              | 取得データ        | エラーデータ        |              |               |

以下は、コールバック呼び出しの流れです:

1. `onData` および `onDataError` は 1回または複数回実行されます。
2. 呼ばれた場合、`onError` は 1回実行されます (システムワーカーの処理を停止します)。
3. エラーが発生しなかった場合、`onResponse` が 1回実行されます。
4. `onTerminate` は常に実行されます。

#### 戻り値

この関数はシステムワーカーオブジェクトを返します。このオブジェクトに対して、SystemWorker クラスの関数やプロパティを呼び出すことができます。

#### Windows の例

1. 特定のドキュメントをメモ帳で開きます:

```4d
var $sw : 4D.SystemWorker
var $options : Object
$options:=New object
$options.hideWindow:= False

$sw:=4D.SystemWorker.new ("C:\\WINDOWS\\notepad.exe C:\\Docs\\new folder\\res.txt";$options)
```

2. コンソールで npm install を実行します:

```4d
var $folder : 4D.Folder
var $options : Object
var $worker : 4D.SystemWorker

$folder:=Folder(fk database folder)
$options:=New object
$options.currentDirectory:=$folder
$options.hideWindow:=False

$worker:=4D.SystemWorker.new("cmd /c npm install";$options)

```

3. 特定のドキュメントを Microsoft® Word® アプリケーションで開きます:

```4d
$mydoc:="C:\\Program Files\\Microsoft Office\\Office15\\WINWORD.EXE C:\\Tempo\\output.txt"
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new($mydoc)
```

4. カレントディレクトリでコマンドを実行し、メッセージそ送信します:

```4d
var $param : Object
var $sys : 4D.SystemWorker

$param:=New object
$param.currentDirectory:=Folder(fk database folder)
$sys:=4D.SystemWorker.new("git commit -F -";$param)
$sys.postMessage("This is a postMessage")
$sys.closeInput()
```

5. ユーザーが Windows上で外部ドキュメントを開くのを許可します:

```4d
$docname:=Select document("";"*.*";"開くファイルを選択してください";0)
If(OK=1)
 var $sw : 4D.SystemWorker
 $sw:=4D.SystemWorker.new("cmd.exe /C start \"\" \""+$docname+"\"")
End if
```

#### macOS の例

1. テキストファイルを編集します (`cat` はファイルを編集するための macOS コマンドです)。 この例題では、コマンドのフルアクセスパスを渡しています:

```4d

var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new("/bin/cat /folder/myfile.txt")
$sw.wait() //同期的実行

```

2. 独立した "グラフィック" アプリケーションを起動するには、`open` システムコマンドの使用が推奨されます (これは、アプリケーションをダブルクリックするのと同じ効果を持ちます)。

```4d
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new ("open /Applications/Calculator.app")
```

3. "Users" フォルダーの中身を取得します (ls -l は、DOS の dir に相当する macOS のコマンドです)。

```4d
var $systemworker : 4D.SystemWorker
var $output : Text
var $errors : Collection

$systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ")
$systemworker.wait(5)
$output:=$systemworker.response
$error:=$systemworker.errors

```

4. 上記と同じコマンドで、"Params" ユーザークラスを使ったコールバック関数の処理方法を示しています:

```4d

var $systemworker : 4D.SystemWorker
$systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ";cs.Params.new())


// "Params" クラス

Class constructor
    This.dataType:="text"
    This.data:=""
    This.dataError:=""

Function onResponse($systemWorker : Object)
     This._createFile("onResponse"; $systemWorker.response)

Function onData($systemWorker : Object; $info : Object)
     This.data+=$info.data
     This._createFile("onData";this.data)

Function onDataError($systemWorker : Object; $info : Object)
     This.dataError+=$info.data
     This._createFile("onDataError";this.dataError)

Function onTerminate($systemWorker : Object)
     var $textBody : Text
     $textBody:="Response: "+$systemWorker.response
     $textBody+="ResponseError: "+$systemWorker.responseError
     This._createFile("onTerminate"; $textBody)

Function _createFile($title : Text; $textBody : Text)
     TEXT TO DOCUMENT(Get 4D folder(Current resources folder)+$title+".txt"; $textBody)

```

<!-- END REF -->

<!-- REF SystemWorkerClass.closeInput().Desc -->
## .closeInput()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->
**.closeInput**()<!-- END REF -->


<!-- REF #SystemWorkerClass.closeInput().Params -->
| 引数 | 型 |  | 説明                                           |
| -- | - |::| -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->

|

#### 説明

`.closeInput()` 関数は、 <!-- REF #SystemWorkerClass.closeInput().Summary -->外部プロセスの入力ストリーム (*stdin*) を閉じます<!-- END REF -->.

`.closeInput()` は、`postMessage()` を介した全データの受信を待機している実行ファイルに、データ送信が終了したことを知らせるのに便利です。

#### 例題

```4D
// gzip するデータを作成します
var $input;$output : Blob
var $gzip : Text
TEXT TO BLOB("Hello, World!";$input)
$gzip:="\"C:\\Program Files (x86)\\GnuWin32\\bin\\gzip.exe\" "

// 非同期のシステムワーカーを作成します
var $worker : 4D.SystemWorker
$worker:= 4D.SystemWorker.new($gzip;New object("dataType";"blob"))

// stdin に圧縮ファイルを送信します
$worker.postMessage($input)
// 終了したことを明確にするため closeInput() を呼び出します
// gzip (および stdin からのデータを待機する多数のプログラム) は入力ストリームが明示的に閉じられるまで待機します
$worker.closeInput()
$worker.wait()

$output:=$worker.response

```

<!-- END REF -->

<!-- REF SystemWorkerClass.commandLine.Desc -->
## .commandLine

<!-- REF #SystemWorkerClass.commandLine.Syntax -->
**.commandLine** : Text<!-- END REF -->

#### 説明

`.commandLine` プロパティは、 <!-- REF #SystemWorkerClass.commandLine.Summary -->[`new()`](#4d-systemworker-new) 関数に引数として渡したコマンドラインを格納します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.currentDirectory.Desc -->
## .currentDirectory

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->
**.currentDirectory** : 4D.Folder<!-- END REF -->

#### 説明

`.currentDirectory` プロパティは、 <!-- REF #SystemWorkerClass.currentDirectory.Summary -->外部プロセスが実行される作業ディレクトリを格納します<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.dataType.Desc -->
## .dataType

<!-- REF #SystemWorkerClass.dataType.Syntax -->
**.dataType** : Text<!-- END REF -->

#### 説明

`.dataType` プロパティは、 <!-- REF #SystemWorkerClass.dataType.Summary -->レスポンス本文のデータ型を格納します<!-- END REF -->. とりうる値: "text" または "blob"。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->
## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->
**.encoding** : Text<!-- END REF -->

#### 説明

`.encoding` プロパティは、 <!-- REF #SystemWorkerClass.encoding.Summary -->レスポンス本文のエンコーディングを格納します<!-- END REF -->. このプロパティは [`dataType`](#datatype) が "text" のときにのみ利用できます。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->
## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->
**.errors** : Collection<!-- END REF -->

#### 説明

`.errors` プロパティは、 <!-- REF #SystemWorkerClass.errors.Summary -->実行エラーの場合、4Dエラーのコレクションを格納します (あれば)<!-- END REF -->.

コレクションの各要素は、以下のプロパティを持つオブジェクトです:

| プロパティ                  | 型      | 説明                  |
| ---------------------- | ------ | ------------------- |
| [].errorCode           | number | 4Dエラーコード            |
| [].message             | text   | 4Dエラーの詳細            |
| [ ].componentSignature | text   | エラーを返した内部コンポーネントの署名 |

エラーが発生しなかった場合、`.errors` は undefined です。

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->
## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->
**.exitCode** : Integer<!-- END REF -->

#### 説明

`.exitCode` プロパティは、 <!-- REF #SystemWorkerClass.exitCode.Summary -->外部プロセスから返される終了コードを格納します<!-- END REF -->. プロセスが正常に終了しなかった場合、`exitCode` は *undefined* です。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->
## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->
**.hideWindow** : Boolean<!-- END REF -->

#### 説明

`.hideWindow` プロパティは、 <!-- REF #SystemWorkerClass.hideWindow.Summary -->実行ファイルや DOSコンソールのウィンドウを隠すのに使用できます (**Windows のみ**)<!-- END REF -->.

<!-- END REF -->

**読み書き可能** プロパティです。

<!-- REF SystemWorkerClass.pid.Desc -->
## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->
**.pid** : Integer<!-- END REF -->

#### 説明

`.pid` プロパティは、 <!-- REF #SystemWorkerClass.pid.Summary -->外部プロセスの、システムレベルでの一意的な識別子を格納します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->
## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->
**.postMessage**( *message* : Text)<br/>**.postMessage**( *messageBLOB* : Blob)<!-- END REF -->


<!-- REF #SystemWorkerClass.postMessage().Params -->
| 引数          | 型    |    | 説明                                          |
| ----------- | ---- |:--:| ------------------------------------------- |
| message     | Text | -> | 外部プロセスの入力ストリーム (stdin) に書き込むテキスト            |
| messageBLOB | BLOB | -> | 入力ストリームに書き込むバイト数|<!-- END REF -->

|

#### 説明

`.postMessage()` 関数は、 <!-- REF #SystemWorkerClass.postMessage().Summary -->外部プロセスの入力ストリーム (stdin) への書き込みをおこないます<!-- END REF -->. *message* には *stdin* に書き込むテキストを渡します。

`.postMessage()` 関数は、*stdin* に渡す BLOB型の *messageBLOB* 引数も受け取るため、バイナリデータを送信することもできます。

[options オブジェクト](#options-object) の `.dataType` プロパティを使って、レスポンス本文が BLOB を返すようにできます。

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->
## .response

<!-- REF #SystemWorkerClass.response.Syntax -->
**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### 説明

`.response` プロパティは、 <!-- REF #SystemWorkerClass.response.Summary -->リクエストが終了した時点で、返された全データの結合を格納します<!-- END REF -->(つまり、プロセスの出力から取得された全メッセージ)。

メッセージのデータ型は [`dataType`](#datatype) 属性によって定義されています。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->
## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->
**.responseError** : Text<!-- END REF -->

#### 説明

`.responseError` プロパティは、 <!-- REF #SystemWorkerClass.responseError.Summary -->リクエストが終了した時点で、返された全エラーの結合を格納します<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->
## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->
**.terminate**()<!-- END REF -->


<!-- REF #SystemWorkerClass.terminate().Params -->
| 引数 | 型 |  | 説明                                           |
| -- | - |::| -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->

|

#### 説明

`.terminate()` 関数は、 <!-- REF #SystemWorkerClass.terminate().Summary -->`SystemWorker` の実行を強制終了します<!-- END REF -->.

この関数は、システムワーカーを終了して実行中のスクリプトに制御を戻す命令を送ります。

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->
## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->
**.terminated** : Boolean<!-- END REF -->

#### 説明

`.terminated` プロパティは、 <!-- REF #SystemWorkerClass.terminated.Summary -->外部プロセスが終了された場合に **true** を格納します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->
## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->
**.timeout** : Integer<!-- END REF -->

#### 説明

`.timeout` プロパティは、 <!-- REF #SystemWorkerClass.timeout.Summary -->外部プロセスが生きている場合、キルされるまでの秒数を格納します<!-- END REF -->.

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->
## .wait()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
|      |    |

|19 R4|追加|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->
**.wait**( {*timeout* : Real} ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #SystemWorkerClass.wait().Params -->
| 引数      | 型               |    | 説明                                             |
| ------- | --------------- |:--:| ---------------------------------------------- |
| timeout | Real            | -> | 待機時間 (秒単位)                                     |
| 戻り値     | 4D.SystemWorker | <- | SystemWorker オブジェクト|<!-- END REF -->

|

#### 説明

`.wait()` 関数は、 <!-- REF #SystemWorkerClass.wait().Summary -->`SystemWorker` の実行終了まで、または *timeout* で指定した時間が経過するまで待機します<!-- END REF -->.

*timeout* には、秒単位の値を渡します。 `SystemWorker` スクリプトは、*timeout* に指定された時間だけ、外部プロセスを待ちます。 *timeout* を省略した場合、スクリプトの実行は無期限に待機します。

実際には、`.wait()` はタイムアウトに達した場合を除き、`onTerminate` フォーミュラのプロセス終了まで待ちます。 タイムアウトに達した場合、`SystemWorker` はキルされません。

`.wait()` の実行中、コールバック関数、とくに他のイベントや他の `SystemWorker` インスタンスからのコールバックは実行されます。 コールバックから [`terminate()`](#terminate) を呼び出すことで、`.wait()` を終了することができます。

この関数は、SystemWorker オブジェクトを返します。

> `SystemWorker` を 4D のワーカープロセスから作成した場合、この関数は必要ありません。

<!-- END REF -->
