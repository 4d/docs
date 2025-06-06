---
id: on-rest-authentication-database-method
title: On REST Authentication database method
slug: /commands/on-rest-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On REST Authentication database method.Syntax-->$1, $2, $3, $4 -> On REST Authentication データベースメソッド : Boolean<!-- END REF-->
<!--REF #_command_.On REST Authentication database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $1 | テキスト | &#8592; | ユーザー名 |
| $2 | テキスト | &#8592; | パスワード |
| $3 | ブール | &#8592; | True = ダイジェストモード<br/>False = ベーシックモード |
| $4 | テキスト | &#8592; | 呼び出し元のIPアドレス |
| 戻り値 | Boolean | &#8592; | True = セッション開始を許可、False = セッション開始を拒否 |

<!-- END REF-->

## 説明 

<!--REF #_command_.On REST Authentication database method.Summary-->**On REST Authentication データベースメソッド** は4D 20 R6 以降は廃止予定となります。<!-- END REF-->

今後は[強制ログイン認証](../REST/authUsers.md) の使用が強く推奨されます。変換されたプロジェクトにおいては、**[ds.authentify() 関数を通してのREST認証を有効化](../settings/web.md#アクセス)** 設定ボタンをクリックすることで設定をアップグレードすることができます。コードの移行が必要であれば、その方法については[こちらの blog記事](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/) を参照してください。


## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 3367 |
| スレッドセーフである | &cross; |


