---
id: flush-cache
title: FLUSH CACHE
slug: /commands/flush-cache
displayed_sidebar: docs
---

<!--REF #_command_.FLUSH CACHE.Syntax-->**FLUSH CACHE** {( size | * )}<!-- END REF-->
<!--REF #_command_.FLUSH CACHE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| size &#124; * | 実数, 演算子 | &#8594;  | 解放するキャッシュサイズ(バイト単位)、* 指定時はキャッシュメモリを完全に空にする |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FLUSH CACHE.Summary-->FLUSH CACHE コマンドを実行すると、即座にデータバッファの内容をディスクに保存します。<!-- END REF-->データベースへのすべての変更をディスクに保存します。

デフォルトでは、カレントキャッシュメモリはそのままの状態で残されます。つまり、その後の読み出しアクセスにおいて、キャッシュデータは引き続き使用されます。オプションとして、その中身を変更する引数を渡す事ことができます:

* *\** を渡すと、キャッシュメモリ全体を空にすることができます。
* *size* 値を渡すと、キャッシュを保存したのち、指定した値のバイト数だけキャッシュを解放します。

**注:** このコマンドへの引数の受け渡しはテスト目的で用意されているものです。パフォーマンス上の理由から、運用環境でキャッシュを空にすることは推奨されていません。

データの変更内容は 4Dによって定期的に保存されるため、このコマンドは通常必要ありません。一般的には、環境設定の [データベースページ](../settings/database.md) にある、**キャッシュをディスクに保存: X秒(分)毎**オプション (保存の頻度を指定) を使用して、バッファのフラッシュ間隔を指定します (デフォルト値の20秒が設定として推奨されています)。またCache flush periodicity パラメーターを [SET DATABASE PARAMETER](set-database-parameter.md) あるいは [Get database parameter](get-database-parameter.md) コマンドで設定・取得することもできます。

#### 参照 

[Get database parameter](get-database-parameter.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 297 |
| スレッドセーフである | &check; |


