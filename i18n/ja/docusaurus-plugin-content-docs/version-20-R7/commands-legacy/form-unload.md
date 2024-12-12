---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.FORM UNLOAD.Summary-->**FORM UNLOAD**コマンドは、[FORM LOAD](form-load.md)コマンドで指定したカレントのフォームをメモリーから解放します。<!-- END REF-->.

このコマンドは [FORM LOAD](form-load.md)コマンドを印刷以外の目的で使用したときには必ず呼び出さなければなりません(実際に印刷をしたときには、 [CLOSE PRINTING JOB](close-printing-job.md) コマンドを呼び出した際に自動的にカレントフォームは再度閉じられます)。

#### 参照 

[FORM LOAD](form-load.md)  