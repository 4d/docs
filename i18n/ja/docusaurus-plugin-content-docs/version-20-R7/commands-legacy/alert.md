---
id: alert
title: ALERT
slug: /commands/alert
displayed_sidebar: docs
---

<!--REF #_command_.ALERT.Syntax-->**ALERT** ( *message* {; OK button title} )<!-- END REF-->
<!--REF #_command_.ALERT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| message | Text | &#8594;  | アラートダイアログボックスに表示するメッセージ |
| OK button title | 文字 | &#8594;  | OKボタンのタイトル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ALERT.Summary-->**ALERT** コマンドは、注意アイコンとメッセージ、OKボタンで構成される警告ダイアログボックスを表示します。<!-- END REF-->

*message*引数には表示するメッセージを渡します。

デフォルトでは、OKボタンのタイトルは“OK”です。OKボタンタイトルを変更するには、オプションの*okButtonTitle* 引数に新しいカスタムボタンタイトルを指定します。必要であれば、渡したカスタムタイトルの幅に応じて、OKボタンの幅を左方向にリサイズします。

**Tip:** フォームあるいはオブジェクトメソッド中で、On Activate や On Deactivateを処理するセクションからALERTコマンドを呼ばないでください。これは永久ループを引き起こします。

#### 例題 1 

この例は、会社に関する情報を示すアラートボックスを表示します。表示する文字列中にキャリッジリターンが含まれてることに注目してください。これは、キャリッジリターンから後ろの文字列を次の行に改行するためです

```4d
 ALERT("Company: "+[Companies]Name+Char(13)+"People in company: "+\
 String(Records in selection([People]))+Char(13)+"Number of parts they supply: "+\
 String(Records in selection([Parts])))
```

このコードは(Windows において)以下のようなアラートボックスを表示します:

![](../assets/en/commands/pict4224938.en.png)

#### 例題 2 

以下のコードを実行すると:

```4d
 ALERT("I'm sorry Dave, I can't do that.";"Alas!")
```

以下のようなアラートダイアログボックスを(Windows環境において)表示します:

![](../assets/en/commands/pict4224959.en.png)

#### 例題 3 

以下のコードを実行すると:

```4d
 ALERT("You no longer have the access privileges for deleting these records.";"Well, I swear I did not know that")
```

以下のようなアラートダイアログボックスが(Windows 環境において)表示されます:

![](../assets/en/commands/pict4224968.en.png)

#### 参照 

[CONFIRM](confirm.md)  
[DISPLAY NOTIFICATION](display-notification.md)  
[Request](request.md)  