---
id: get-backup-information
title: GET BACKUP INFORMATION
slug: /commands/get-backup-information
displayed_sidebar: docs
---

<!--REF #_command_.GET BACKUP INFORMATION.Syntax-->**GET BACKUP INFORMATION** ( *selector* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET BACKUP INFORMATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | 取得する情報のタイプ |
| info1 | Integer, Date | &#8592; | セレクタの値1 |
| info2 | Time, Text | &#8592; | セレクタの値2 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET BACKUP INFORMATION.Summary-->GET BACKUP INFORMATION コマンドを使用して、データベースのデータに対して行われた前回のバックアップに関連する情報を取得できます。<!-- END REF-->

*selector*には取得する情報タイプを渡します。*info1* と *info2* の型および内容は、*selector* の値によって決まります。“*Backup and Restore*”テーマの次の定数を使用できます:

| 定数                      | 型    | 値 | コメント                                                                                                                                |
| ----------------------- | ---- | - | ----------------------------------------------------------------------------------------------------------------------------------- |
| Last backup date        | 倍長整数 | 0 | 前回のバックアップの日付を *info1* に、時間を *info2* に返します。                                                                                          |
| Last backup information | 倍長整数 | 5 | 前回のバックアップの所要時間 (倍長整数、ミリ秒単位) を *info1* に、バックアップ開始タイムスタンプ (文字列、フォーマットについての詳細は [Timestamp](timestamp.md) コマンドを参照ください) を *info2* に返します。 |
| Last backup status      | 倍長整数 | 2 | 前回のバックアップのステータス番号を *info1*に、そのテキストを *info2* に返します。                                                                                  |
| Next backup date        | 倍長整数 | 4 | 次回のバックアップの日付を *info1* に、時間を *info2* に返します。                                                                                          |

#### 参照 

[RESTORE](restore.md)  