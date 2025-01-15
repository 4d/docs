---
id: current-machine
title: Current machine
slug: /commands/current-machine
displayed_sidebar: docs
---

<!--REF #_command_.Current machine.Syntax-->**Current machine**  : Text<!-- END REF-->
<!--REF #_command_.Current machine.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | マシンのネットワークの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current machine.Summary-->Current machineコマンドは、オペレーティングシステムのネットワークパラメタに設定されたマシンの名前を返します。<!-- END REF--> 

#### 例題 

クライアント/サーバのバージョンの4D環境で実行していない場合でも、アプリケーションに含まれている幾つかのネットワークサービスが、マシンが正しく構成されていることを必要とする可能性があります。アプリケーションのでは、以下のように記述します。

```4d
 If((Current machine="")|(Current system user=""))
  //マシンのネットワークIDを設定するようユーザに要求するダイアログボックスを表示する。
 End if
```

#### 参照 

[Current system user](current-system-user.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 483 |
| スレッドセーフである | &check; |


