---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors** : Collection<!-- END REF-->

<!--REF #_command_.Last errors.Params-->

| 引数  | 型          |                             | 説明               |
| --- | ---------- | --------------------------- | ---------------- |
| 戻り値 | Collection | &#8592; | エラーオブジェクトのコレクション |

<!-- END REF-->

## 説明

<!--REF #_command_.Last errors.Summary-->**Last errors** コマンドは4D アプリケーションのカレントのスタックエラーをエラーオブジェクトのコレクションとして返すか、あるいはエラーが何も起きなかった場合には **null** を返します。<!-- END REF-->エラーのスタックには、 [throw](../commands-legacy/throw.md) コマンドで返されたオブジェクトも(あれば)含みます。

このコマンドは[ON ERR CALL](../commands-legacy/on-err-call.md) コマンドで実装されたエラー処理メソッドから、あるいは[Try または Try/Catch](../Concepts/error-handling.md#tryexpression) コンテキスト内から呼び出す必要があります。

それぞれのエラーオブジェクトには、次のプロパティが格納されています:

| **プロパティ**          | **型**  | **Description**                              |
| ------------------ | ------ | -------------------------------------------- |
| errCode            | number | エラーコード                                       |
| message            | text   | エラーの詳細                                       |
| componentSignature | text   | エラーを返した内部コンポーネントの署名(以下参照) |

#### 内部コンポーネント署名(4D)

| コンポーネント署名                 | コンポーネント                                                   |
| ------------------------- | --------------------------------------------------------- |
| 4DCM                      | 4D コンパイラランタイム                                             |
| 4DRT                      | 4D ランタイム                                                  |
| bkrs                      | 4D バックアップ&復元マネージャー                    |
| brdg                      | SQL 4D ブリッジ                                               |
| cecm                      | 4D コードエディター                                               |
| CZip                      | zip 4DのAPI                                                |
| dbmg                      | 4D データベースマネージャー                                           |
| FCGI                      | fast cgi 4D ブリッジ                                          |
| FiFo                      | 4D ファイルオブジェクト                                             |
| HTCL                      | HTTP クライアント4D API                                         |
| HTTPクライアント                | 4D HTTP サーバー                                              |
| IMAP                      | IMAP 4D API                                               |
| JFEM                      | フォームマクロAPI                                                |
| LD4D                      | LDAP 4D API                                               |
| lscm                      | 4D ランゲージシンタックスマネージャー                                      |
| MIME                      | MIME 4D API                                               |
| mobi                      | 4D Mobile                                                 |
| pdf1                      | 4D PDF API                                                |
| PHP_ | PFP 4D ブリッジ                                               |
| POP3                      | POP3 4D API                                               |
| SMTP                      | SMTP 4D API                                               |
| SQLS                      | 4D SQL サーバー                                               |
| srvr                      | 4D ネットワークレイヤーAPI                                          |
| svg1                      | SVG 4D API                                                |
| ugmg                      | 4D ユーザー&グループマネージャー                    |
| UP4D                      | 4D アップデーター                                                |
| VSS                       | 4D VSS サポート(Windows ボリュームスナップショットサービス) |
| webc                      | 4D Web view                                               |
| xmlc                      | XML 4D API                                                |
| wri1                      | 4D Write Pro                                              |

#### 内部コンポーネント署名(システム)

| コンポーネント署名 | コンポーネント                                            |
| --------- | -------------------------------------------------- |
| CARB      | Carbon サブシステム                                      |
| COCO      | Cocoa サブシステム                                       |
| MACH      | macOS Mach サブシステム                                  |
| POSX      | posix/bsd サブシステム(mac、linux、win) |
| PW32      | Pre-Win32 サブシステム                                   |
| WI32      | Win32 サブシステム                                       |

## 参照

[ON ERR CALL](../commands-legacy/on-err-call.md)
[throw](../commands-legacy/throw.md)\
[Error handling](../Concepts/error-handling.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1799                        |
| スレッドセーフ | &check; |


