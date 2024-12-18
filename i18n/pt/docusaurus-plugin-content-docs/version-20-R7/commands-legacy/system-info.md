---
id: system-info
title: System info
slug: /commands/system-info
displayed_sidebar: docs
---

<!--REF #_command_.System info.Syntax-->**System info**  : Object<!-- END REF-->
<!--REF #_command_.System info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &#8592; | システム情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.System info.Summary-->**System info** コマンドは、そのコマンドが実行されたOS とマシンのシステムのハードウェア/ソフトウェア両面の特性に関する情報を格納したオブジェクトを返します。<!-- END REF-->

コマンドは、以下のような情報を返します:

| プロパティ        |  |             | 型                                    | 詳細                                                                                                                                                                        | 値の例                                                                          |
|-------------------|----------------|-------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| accountName       |                |             | 文字列                                | カレントユーザーのアカウント名。一般的にはディレクトリ内でのアカウントを識別するのに使用されます                                                                            | "msmith"                                                                        |
| cores             |                |             | 数値                                  | コア(CPU)の総数。バーチャルなマシンの場合、それに割り当てられたコアの総数                                                                                                   | 4                                                                               |
| cpuThreads        |                |             | 数値                                  | スレッドの総数。                                                                                                                                                            | 8                                                                               |
| machineName       |                |             | 文字列                                | OSのネットワークパラメーターで設定されているマシンの名前                                                                                                                    | "LAPTOP-M3BLHGSG"                                                               |
| macRosetta        |                |             | ブール                                | 4DがmacOS 上のRosetta でエミュレートされている場合にはTrue 、それ以外の場合(エミュレートされていない、あるいはWindows上である場合)にはFalse                                 | True                                                                            |
| model             |                |             | 文字列                                | コンピューターのモデル名                                                                                                                                                    | "iMac12,2", "Dell", "Acer", "VMware", 等                                        |
| networkInterfaces |                |             | コレクション                          | アクティブな物理ネットワークアドレスのみ                                                                                                                                    |                                                                                 |
|                   | ipAddresses    |             | コレクション                          |                                                                                                                                                                             |                                                                                 |
|                   |                | ip          | 文字列                                | ネットワークインターフェースのアドレス                                                                                                                                      | "129.186.81.80"                                                                 |
|                   |                | type        | 文字列                                | ネットワークインターフェースの型                                                                                                                                            | "ipv4", "ipv6"                                                                  |
|                   | name           |             | 文字列                                | インターフェース名                                                                                                                                                          | "Intel(R) 82574L Gigabit Network Connection"                                    |
|                   | type           |             | 文字列                                | インターフェースの型("ethernet"型はbluetooth インターフェースのために提供されていることに注意してください)                                                                  | "wifi", "ethernet"                                                              |
| osVersion         |                |             | 文字列                                | オペレーションシステムのバージョンおよびビルド番号(\*)                                                                                                                       | "Microsoft Windows 10 Professionnal 10.0.14393"                                 |
| osLanguage        |                |             | 文字列                                | システムのカレントのユーザーによって設定された言語。RFC 3066規格によって表現されます。完全な一覧については、デザインリファレンスマニュアルの言語コード を参照してください。 | "fr", "en", "ja", "de", 等                                                      |
| physicalMemory    |                |             | 数値                                  | マシン上で利用可能なメモリ空間の容量(kb単位)。                                                                                                                              | 16777216                                                                        |
| processor         |                |             | 文字列                                | プロセッサーの名前、型、スピード                                                                                                                                            | "Intel(R) Core(TM) i7-2600 CPU @ 3.40GHz"                                       |
| uptime            |                |             | 数値                                  | マシンが起動してからの総経過時間(秒単位)                                                                                                                                    | 3600                                                                            |
| userName          |                |             | 文字列                                | マシンのカレントユーザー。一般的には表示名(例:コンピューターにログインする時の名前)として使用されます。                                                                     | "Mary Smith"                                                                    |
| volumes           |                |             | コレクション                          |                                                                                                                                                                             |                                                                                 |
|                   | available      |             | 数値                                  | 使用できる残り容量                                                                                                                                                          | 524288                                                                          |
|                   | capacity       |             | 数値                                  | 利用可能な総容量(kb単位)                                                                                                                                                    | 1048576                                                                         |
|                   | disk           |             | オブジェクト \| コレクション(Macのみ) |                                                                                                                                                                             |                                                                                 |
|                   |                | description | 文字列                                | ディスクを表す短い説明                                                                                                                                                      | "HP LOGICAL VOLUME SCSI Disk Device"                                            |
|                   |                | identifier  | 文字列                                | ディスクのID(Mac ではUUID、Windows では物理ドライブ)                                                                                                                        | Mac - "87547BDD-EA75-4F48-8BFA-9A7E393EEAB0", Windows - "\\\\.\\PHYSICALDRIVE0" |
|                   |                | size        | 数値                                  | ディスクの総容量(kb単位)                                                                                                                                                    | 104857600                                                                       |
|                   |                | interface   | 文字列                                | マシンのインターフェースのタイプ                                                                                                                                            | "USB", "network", ,"SATA", "SCSI", "cd/dvd", "PCI"                              |
|                   | fileSystem     |             | 文字列                                | ハードディスク上のファイルを並べ替えたり取得する際にOSが使用するファイルシステム                                                                                            | "NTFS", "Journaled HFS+", "GPFS", 等                                            |
|                   | mountPoint     |             | 文字列                                | 現在アクセス可能なファイルシステム上の、追加のファイルシステムがマウント(論理的接続)されたディレクトリ。Mac ではこれはPOSIX フォーマットである点に注意してください。        | Mac -  "/Volumes/Free HD", Windows - "C:"                                       |
|                   | name           |             | 文字列                                | Mac のに- ボリューム名                                                                                                                                                      | "iMac-27-Program6"                                                              |


(\*) 使用されているプラットフォームを調べるだけであれば、二つのコマンドが利用可能です: [Is macOS](is-macos.md) および [Is Windows](is-windows.md)

**注**: バーチャルマシンの場合、返される情報はバーチャルマシンのものとなります。

#### 例題 

Windows マシン上で以下のコードを実行した場合:

```4d
 var $systemInfo : Object
 $systemInfo:=System info
```

以下のような情報を格納しているオブジェクトを返します:

```json
{
   "machineName":"LAPTOP-M3BLHGSG",
   "osVersion":"Windows 10 Pro 1809 (17763.1577)",
   "osLanguage":"fr",
   "accountName":"msmith",
   "userName":"mary smith",
   "processor":"Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz",
   "cores":4,
   "cpuThreads":8,
   "networkInterfaces":[
      {
         "type":"ethernet",
         "name":"Intel(R) 82574L Gigabit Network Connection",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.10.17"
            },
            {
               "type":"ipV6",
               "ip":"z1009:0yxw:0000:85v6:0000:0000:ut1s:8001"
            }
         ]
      },
      {
         "type":"wifi",
         "name":"Wi-Fi",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.50.8"
            },
            {
               "type":"ipV6",
               "ip":"a1002:0bc8:0000:85d6:0000:0000:ef1g:7001"
            }
         ]
      }
   ],
   "uptime":3600,
   "model":"HP",
   "macRosetta":false,
   "physicalMemory":16777216,
   "volumes":[
      {
         "mountPoint":"C:",
         "capacity":1048576,
         "available":524288,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      },
      {
         "mountPoint":"E:",
         "capacity":51198972,
         "available":51025280,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      }
   ]
}
```

#### 参照 

[Application info](application-info.md)  
[Is macOS](is-macos.md)  
[Is Windows](is-windows.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1571 |
| Thread-seguro | &check; |


