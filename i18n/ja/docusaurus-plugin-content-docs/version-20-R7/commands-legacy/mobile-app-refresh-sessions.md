---
id: mobile-app-refresh-sessions
title: MOBILE APP REFRESH SESSIONS
slug: /commands/mobile-app-refresh-sessions
displayed_sidebar: docs
---

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Syntax-->**MOBILE APP REFRESH SESSIONS**<!-- END REF-->
<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Summary-->**MOBILE APP REFRESH SESSIONS** コマンドは、サーバーのMobileApps フォルダ内にある全てのモバイルアプリセッションファイルをチェックし、編集されたファイルに対してメモリ内にある既存のセッションのコンテンツを更新します。<!-- END REF-->

このコマンドは、4D for iOS および 4D for Android デベロッパーがローカルのファイルが編集されたあとに、ユーザーセッション情報を"強制的に"再読み込みさせるために使用することを念頭にデザインされています。例えば、セッションがリセットが必要であれば、セッションファイルを削除した上で**MOBILE APP REFRESH SESSIONS** コマンドを呼び出します。モバイルアプリセッションについての詳細な情報については、[Go mobile ドキュメント](https://developer.4d.com/go-mobile) を参照してください。

コマンドはMobileAppsフォルダ内の各セッションファイルの(json シンタックス、json スキーマ、セッションデータ等の)コンプライアンスをチェックします。ファイルに不備がなく、かつ編集されていた場合には、メモリ内にある対応するセッション(すでにあれば)は編集された中身で更新されます。

セッションファイルが有効でない、あるいは削除されていた場合には、対応するセッションはメモリから削除されます。

コマンドは以下のいずれかのエラーを返します。これらは[ON ERR CALL](on-err-call.md) および [Last errors](last-errors.md)  コマンドを通して管理可能です:

| **コンポーネント名** | **エラーコード** | **詳細**                      |
| ------------ | ---------- | --------------------------- |
| mobi         | 1          | json ファイルの場所がコンテンツと一致しません   |
| mobi         | 2          | json ファイルの形式が正しくありません       |
| mobi         | 3          | json ファイルはjson スキーマに則していません |
| mobi         | 4          | 接続トークンがカレントの情報と合致しません       |

#### 例題 

全てのモパイルアプリの、全てのカレントセッションをリセットしたい場合を考えます:

```4d
 var $sessionsPath : Text
 $sessionsPath:=Get 4D folder(MobileApps folder)
 DELETE FOLDER(sessionsPath;Delete with contents)
 MOBILE APP REFRESH SESSIONS
```

#### 参照 

[On Mobile App Authentication データベースメソッド](on-mobile-app-authentication-database-method.md)  