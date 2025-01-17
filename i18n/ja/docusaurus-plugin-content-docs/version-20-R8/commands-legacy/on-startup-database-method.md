---
id: on-startup-database-method
title: On Startup database method
slug: /commands/on-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Startup database method.Syntax-->**On Startupデータベースメソッド**<!-- END REF-->
<!--REF #_command_.On Startup database method.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Startup database method.Summary-->**On Startupデータベースメソッド**は、データベースを開くと1度呼び出されます。<!-- END REF--> 

このメソッドは、以下の4D環境で使用されます:

* ローカルモードの4D
* リモートモードの4D (4D Serverから接続を許可された後、クライアント側で)
* コンパイルし、4D VolumeDesktopを組み込んだ4Dアプリケーション

**Note**: **On Startupデータベースメソッド**は、4D Serverでは起動されません。

**On Startupデータベースメソッド**は、4Dによって自動的に起動されます。プロジェクトメソッドとは異なり、プログラムからデータベースメソッドを呼び出すことはできません。しかしメソッドエディタから実行することはできます。またサブルーチンを使用できます。

**On Startupデータベースメソッド**は、以下のような処理を実行するのに最適です:

* 作業セッション全体で使用するインタープロセス変数を初期化する。
* データベースを開いた時にプロセスを自動的に開始する。
* 以前の作業セッション中に保存された環境設定や初期設定をロードする。
* (システムリソースがない等) 条件が一致しない場合、[QUIT 4D](quit-4d.md)を明示的に呼び出してデータベースの開始を拒否する。
* データベースを開く度に自動的に実行したい他の動作を実行する。
しかしながら**On Startupデータベースメソッド**から印刷ジョブを起動することは推奨しません。

#### 例題 

[Semaphore](semaphore.md)の例題を参照

#### 参照 

[On Exitデータベースメソッド](on-exit-database-method.md)  
[QUIT 4D](quit-4d.md)  
*データベースメソッド*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 905263 |
| スレッドセーフである | &cross; |


