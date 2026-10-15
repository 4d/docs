---
id: validate-password
title: Validate password
slug: /commands/validate-password
displayed_sidebar: docs
---

<!--REF #_command_.Validate password.Syntax-->**Validate password** ( *userID* : Integer, Text ; *password* : Text {; *digest* : Boolean} ) : Boolean<!-- END REF-->
<!--REF #_command_.Validate password.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| userID | Integer, Text | &#8594; | ユニークなユーザID |
| password | Text | &#8594; | 暗号化されていないパスワード |
| digest | Boolean | &#8594; | Digest password = True, <br/>Plain-text password (default) = False |
| 戻り値 | Boolean | &#8592; | True = 有効なパスワード False = 無効なパスワード |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|14|変更|
|2004|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Validate password.Summary-->Validate password コマンドは引数 *password* に渡された文字列が、引数 *userID* に渡されたID番号または名前を持つユーザアカウントのパスワードである場合、Trueを返します。<!-- END REF--> 

任意の *digest* 引数は、 *password* 引数に含まれるパスワードが標準テキストのパスワードかハッシュドパスワード(ダイジェストモード)かを指定します:

* **True** を渡した場合、 *password* にはハッシュドパスワードが格納されていること(ダイジェストモード)を意味します。
* **False** を渡すかこの引数を省略した場合、 *password* には標準テキストのパスワードが格納されていることを意味します。

この引数はデータベース認証メソッド、特に [On REST Authentication データベースメソッド](../commands/on-rest-authentication-database-method) を使用しているときに有用です。

フラッディング ( ブルートフォース攻撃 ) 、言い換えれば複数のユーザ名とパスワードの組み合わせによる試みを防ぐために、コマンドは遅れて実行されます。その結果、このコマンドを4回呼び出す と、10秒間の遅延が発生します。この遅れは、ワークステーション全体を通して発生します。

## 例題 1 

以下の例題を使用して、ユーザ “Hardy” のパスワードが “Laurel” であるかどうかを調べます。

```4d
 GET USER LIST(atUserName;alUserID)
 $vlElem:=Find in array(atUserName;"Hardy")
 If($vlElem>0)
    If(Validate password(alUserID{$vlElem};"Laurel"))
       ALERT("Yep!")
    Else
       ALERT("Too bad!")
    End if
 Else
    ALERT("Unknown user name")
 End if
```

## 例題 2 

[On REST Authentication データベースメソッド](../commands/on-rest-authentication-database-method) において、接続リクエストを(データベースの4Dユーザーを使用して)テストしたい場合:

```4d
 $0:=Validate password($1;$2;$3)
```

## 参照 

[GET USER PROPERTIES](../commands/get-user-properties)  
[Set user properties](../commands/set-user-properties)  
[WEB Validate digest](../commands/web-validate-digest)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 638 |
| スレッドセーフである | no |


