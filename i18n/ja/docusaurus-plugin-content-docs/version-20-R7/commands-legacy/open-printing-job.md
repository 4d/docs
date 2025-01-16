---
id: open-printing-job
title: OPEN PRINTING JOB
slug: /commands/open-printing-job
displayed_sidebar: docs
---

<!--REF #_command_.OPEN PRINTING JOB.Syntax-->**OPEN PRINTING JOB**<!-- END REF-->
<!--REF #_command_.OPEN PRINTING JOB.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OPEN PRINTING JOB.Summary-->**OPEN PRINTING JOB** コマンドはプリントジョブを開き、[CLOSE PRINTING JOB](close-printing-job.md) コマンドが呼ばれるまで、続くすべてのプリント命令をスタックします。<!-- END REF-->このコマンドはプリントジョブのコントロールを可能にし、特に印刷中に他のプリントジョブが予期せず挿入されないようにします。

**OPEN PRINTING JOB** コマンドはすべての4D印刷コマンド、クイックレポート、4D Write Pro や4D View Pro の印刷コマンドで使用できます。

印刷ジョブはプロセスに対しローカルであり、各プロセスは独自の印刷設定(印刷オプション、カレントプリンター、など)を持ちます。複数の印刷ジョブを同時に4D 内で開くことができます。

[CLOSE PRINTING JOB](close-printing-job.md) コマンドを呼び出してプリントジョブを終了し、印刷ドキュメントをプリンタに送信しなければなりません。このコマンドを呼び出さないと、印刷ドキュメントはスタックに置かれたままとなります。

**OPEN PRINTING JOB** はカレントの印刷設定を使用します (デフォルト設定または[SET PRINT OPTION](set-print-option.md) コマンドで設定された設定)。印刷設定を変更するコマンドは**OPEN PRINTING JOB** が呼ばれる前に実行されなければなりません。そうでなければエラーが生成されます(例外として、Orientation option は[SET PRINT OPTION](set-print-option.md) コマンドを使用することで印刷ジョブ内でも設定することが可能です)。

**互換性に関する注意:** 4D v20 R4 以降、新規プロジェクトにおいては印刷ジョブはノンブロッキングとなります。詳細な情報については、互換性の設定の[ノンブロッキング印刷オプション](../settings/compatibility.md) のドキュメンテーションを参照してください。

#### システム変数およびセット 

印刷ジョブが正常に開かれた場合にはOK システム変数が1 に設定されます。そうでない場合、例えば以下のような場合にはOK 変数は0 に設定されます:

* 印刷ジョブがユーザーによってキャンセルされた
* Windows 上において、選択されたプレビューフォーマットが利用できなかった

#### 参照 

[CLOSE PRINTING JOB](close-printing-job.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 995 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


