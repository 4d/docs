---
id: wa-run-offscreen-area
title: WA Run offscreen area
slug: /commands/wa-run-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.WA Run offscreen area.Syntax-->**WA Run offscreen area** ( *parameters* ) : any<!-- END REF-->
<!--REF #_command_.WA Run offscreen area.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| parameters | Object | &#8594;  | Web エリアの属性を格納したオブジェクト |
| 戻り値 | any | &#8592; | コールバックメソッドによって返された値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA Run offscreen area.Summary-->**WA Run offscreen area** コマンドは、メモリ内にWeb エリアを作成します。<!-- END REF-->このWeb エリアはWeb ページを自動的に読み込んで解析することなどに使用できます。

**注:** このコマンドは埋め込みWeb レンダリングエンジンを使用します。

*parameters* オブジェクト引数には、Web エリアの以下の任意の属性のいずれかを渡すことができます。これらのプロパティは*onEvent* メソッド内の[This](this.md) コマンドを通して利用可能で、これによりインスタンスを参照することができます:

| **プロパティ<br/>** | **型<br/>** | **詳細**                                                                                                                                                                                                                                                        |
| ---------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url                    | テキスト \| fileオブジェクト | Web エリアに読み込まれるURL またはファイル。省略時またはnull の場合、空のページが読み込まれます。                                                                                                                                                                                                       |
| area                   | テキスト               | Web エリア名。省略時またはnull の場合、汎用的な名前(例: OffscreenArea1)が割り当てられます。                                                                                                                                                                                                   |
| onEvent                | オブジェクト(フォーミュラ)     | Web エリアの準備ができたときにローンチされるコールバックメソッド。以下のどちらかを使用できます:<br/> クラスの*onEvent* ファンクション [Formula](formula.md) オブジェクト  デフォルトでは、コールバックメソッドはOn Load、On Unload、On End URL Loading、On URL Loading Error またはOn Timer イベントにおいて呼び出されます。                                 |
| autoQuit               | ブール                | True(デフォルト値)の場合、On End URL Loading または On URL Loading Error イベントが発生したときにはコマンドはフォーミュラの実行を中止します。<br/><br/>Falseの場合、Web エリアを閉じるためには呼び出された[CANCEL](cancel.md) または [ACCEPT](accept.md) コールバックメソッドまたはプロジェクトメソッド内においてコマンドを$4d オブジェクトとともに使用する必要があります。 |
| timeout                | 実数                 | イベントが何も生成されなければエリアが自動的に閉じてしまうまでの最大時間(秒単位)。0 設定された場合、制限は適用されません。デフォルトの値: 60                                                                                                                                                                                    |
| result                 | (任意)               | 返す処理の結果(あれば)                                                                                                                                                                                                                                                  |
| <customProperty>       | (任意)               | コールバックまたは$4d メソッド内で利用可能なカスタムの属性                                                                                                                                                                                                                               |

以下のプロパティは、必要であればコマンドによって自動的に追加されます:

| **プロパティ <br/>** | **型** | **詳細**                                 |
| ----------------------- | ----- | -------------------------------------- |
| timeoutReached          | ブール   | タイムアウトを超過した場合には、**true** の値を持って追加されます。 |

渡された*parameter* オブジェクト引数がnull だった場合、空のWeb エリアが開かれてそして自動的に閉じられます。

**注:**

* オフスクリーンのWeb エリアは、**WA Run offscreen area** コマンドの実行中にのみ利用可能です。実行が終了すればそのWeb エリアは自動的に閉じられます。
* 4D メソッドはWeb エリア内にて実行されるJavaScript コードから呼び出し可能です。詳細は*4Dメソッドへのアクセス*を参照して下さい。

コールバックメソッドでは、以下のコマンドを使用することができます:

* [ACCEPT](accept.md)
* [CANCEL](cancel.md)
* [SET TIMER](set-timer.md)
* [WA Evaluate JavaScript](wa-evaluate-javascript.md)
* [WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)
* [WA Get current URL](wa-get-current-url.md)
* [WA GET LAST URL ERROR](wa-get-last-url-error.md)
* [WA Get page content](wa-get-page-content.md)
* [WA Get page title](wa-get-page-title.md)
* [WA OPEN URL](wa-open-url.md)
* [WA REFRESH CURRENT URL](wa-refresh-current-url.md)
* [WA STOP LOADING URL](wa-stop-loading-url.md)

#### 例題 

自分のOffscreenArea クラスのファンクションを使用して、オフスクリーンのWeb エリアを作成し管理したい場合を考えます:

```4d
 $config:=cs.OffscreenArea.new()
 $result:=WA Run offscreen area($config)
 If($config.timeoutReached) // タイムアウト時には自動的に返される
    ALERT("Timeout reached")
 End if
```

**OffscreenArea クラス**内のコード:

```4d
 Class constructor
 This.url:=File("/RESOURCES/compute.html")
 This.area:="myWAOffscreen"
 
 Function onEvent
 Case of
    :(FORM Event.code=On End URL Loading)
       This.result:=WA Evaluate JavaScript(*;This.area;"myJSMethod();")
 End case
```

#### システム変数およびセット 

タイムアウトに達した場合、または*onEvent* で[CANCEL](cancel.md) が呼び出された場合、OK システム変数は0に設定され、それ以外の場合には1に設定されます。

#### 参照 

[FORM Event](form-event.md)  
[WA OPEN WEB INSPECTOR](wa-open-web-inspector.md)  
*Webエリアのプログラムによる管理*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1727 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


