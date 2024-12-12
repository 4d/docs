---
id: log-file-to-json
title: LOG FILE TO JSON
slug: /commands/log-file-to-json
displayed_sidebar: docs
---

<!--REF #_command_.LOG FILE TO JSON.Syntax-->**LOG FILE TO JSON** ( *destFolderPath* {; *maxSize* {; *logPath* {; *fieldAtt*}}} )<!-- END REF-->
<!--REF #_command_.LOG FILE TO JSON.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| destFolderPath | Text | &#8594;  | 保存されているファイルの保存先フォルダへのパス |
| maxSize | Integer | &#8594;  | 作成するJSONファイルの最大サイズ(バイト単位) |
| logPath | Text | &#8594;  | 書き出すログファイルのパス名; 省略時はカレントログファイルを使用 |
| fieldAtt | Integer | &#8594;  | フィールド詳細属性: 1 = 数字を使用(デフォルト)、2 = 名前を使用 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LOG FILE TO JSON.Summary-->**LOG FILE TO JSON**コマンドはカレントログファイル、または指定されたログファイルを、JSONフォーマットで保存します。<!-- END REF-->

ログ (バイナリーファイル) がJSON形式で保存されると、その中身はデータベース管理者あるいはあらゆるユーザーによって読み出しや解釈が可能となり、それにより例えばデータベースイベントの解析などが可能になります。

*destFolderPath* 引数には、JSONファイルを保存したいフォルダーのパスを渡します。ファイル名は **JournalExport.json** となります。

デフォルトでは、書き出されるJSONファイルの最大サイズは10MBとなっています。ファイルがこのサイズに到達すると、ファイルは閉じられ新しいファイルが作成されます。それぞれのJSONファイルのサイズを制限する事で、ファイルを解析する際のメモリ要求を抑える事ができます。*maxSize* 引数に値を(バイト単位で)設定する事で書き出されるファイルの最大サイズを変更する事ができます。0を渡すとデフォルトサイズにリセットします。負の値を渡すとサイズの上限を撤廃できます。

デフォルトで、*logPath* 引数が省略されている場合、コマンドはカレントログファイルを保存します。特定のログファイルを書き出したい場合、そのパスを *logPath* 引数に渡します。ログファイルは ".journal" 拡張子を持つファイルでなければなりません。アーカイブされたログファイル(.4bl)を書き出したい場合、[RESTORE](restore.md) コマンドを使用して事前に変換する必要があります。空の文字列("")を渡す事で標準のファイルを開くダイアログボックスを表示する事ができ、書き出すログファイルをユーザーに選択させることができます。選択されたログファイルのパスは**Document**システム変数に返されます。

**注:** コマンドがカレントログファイルを保存する際、データベースはロックされません。ファイルがディスクに書き込まれている間に新しいオペレーションを実行する事も可能です。ただしこれらのオペレーションは保存されるファイルには含まれません。

カレントログファイルを書き出す際、*fieldAtt* 引数は、フィールドが書き出された属性の中でどのように表現されるかを定義します。番号 (デフォルト)、あるいは名前で表現されます。"*Backup and Restore*" 定数テーマ内にある、以下の定数のうちのいずれかを渡す事ができます:

| 定数                          | 型    | 値 | コメント                                         |
| --------------------------- | ---- | - | -------------------------------------------- |
| Field attribute with name   | 倍長整数 | 2 | フィールドを名前で識別します。例： {"LastName":"Jones"}       |
| Field attribute with number | 倍長整数 | 1 | フィールドをその番号で識別します(省略時のデフォルト)。例： {"5":"Jones"} |

**注:** 外部ログファイルを書き出す場合、フィールドは常に番号によって表現されます。

保存されたJOSNファイルはログに記録された全てのオペレーションを、JSONオブジェクト配列形式で格納します。それぞれのオブジェクトにはオペレーションをあらわす複数のプロパティが含まれます。例:

```json
[   {      "operationType":25,      "operationName":"Modify record",      "operationNumber":45,      "contextID":37,      "timeStamp":"2015-06-11T09:13:17.138Z",      "dataLen":42,      "recordNumber":4,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": "primkey5",            "2": -5,            "5": "data 25"        },      "primaryKey": "8"   },   {      "operationType":23,      "operationName":"Save seqnum",      "operationNumber":46,      "contextID":37,      "timeStamp":"2015-06-11T09:13:17.138Z",      "sequenceNumber":23,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem"    },   {      "operationType":24,      "operationName":"Create record",      "operationNumber":47,      "contextID":37,      "timeStamp":"2015-06-11T09:13:17.138Z",      "dataLen":570,      "recordNumber":7,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": 9,            "2": "test value",            "3": "2003-03-03T00:00:00.000Z",            "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "8": "BlobID: 2"       },      "extraData": {          "task_id": 1,          "user_name": "Vanessa Smith",          "user4d_alias": "Default 4D User",          "user4d_id": 1,          "host_name": "iMac-VSmith-0833",          "task_name": "Application process",          "client_version": -1610541776      },      "primaryKey": "9"   }]
```

**注:** *fieldAtt*引数にField attribute with name定数を渡した場合、"fields"オブジェクトは以下のようになります:  

```json
...      "fields": {            "ID": 9,            "Field_2": "test value",            "Date_Field": "2003-03-03T00:00:00.000Z",            "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "Field_8": "BlobID: 2"       },...
```

##### 

実際に含まれるプロパティの実際の一覧は、オペレーションのタイプ(レコード作成、レコード削除、レコード編集、Blob作成、等)によって異なります。主なプロパティは以下の通りです:

* *operationType*: オペレーションの内部コード
* *operationName*: オペレーションの種類、例えば"create record"、"modify record"など
* *operationNumber*: ログファイル内のオペレーションの内部番号
* *contextID*: 実行コンテキストのID。コンテキストは*extraData*のプロパティに詳細な説明があります
* *timeStamp*: ログファイル内のオペレーションのタイムスタンプ
* *dataLen*: 内部のデータサイズ
* *recordNumber*: 内部のレコード数
* *tableID*: テーブルの内部ID
* *tableName*: テーブル名
* *fields*: フィールド番号(またはフィールド名)を格納しているオブジェクトと、その値。変更された値をもつフィールドはすべてログに記録されます。  
Blobおよびピクチャーフィールドの場合、保存場所によって異なる情報が提供されています:  
   * Blobおよびピクチャーがデータファイル内に保存されている場合、このプロパティは"BlobID:"+内部Blob番号となります。例："BlobID:1"  
   * Blobおよびピクチャーがデータファイル外に保存されている場合、このプロパティは"BlobPath:"+データへのパス、となります。例："BlobPath: Table 1/Field 6/Data\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData*: ユーザーコンテキストデータ。これにはユーザー名とエイリアス(\*)、タスク名とID、ホストマシン名、そしてクライアントのバージョンが含まれます。
* *sequenceNumber*: 自動インクリメントシークエンスでの現在の番号
* *primaryKey*: プライマリーキー(主キー)の値

(\*) プロジェクトモードのデータベースでは"user4d\_id" プロパティは返されません。

#### 例題 

カレントのログファイルをJSON形式で保存したい場合を考えます:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs")
```

特定のログファイルをJSON形式で書き出して、それにフィールド名も含めたい場合を考えます:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs";0;"c:\\4Dv15\\Backup\\old_myDB.journal";Field attribute with name)
```

#### システム変数およびセット 

**LOG FILE TO JSON**コマンドは、OKシステム変数とDocumentシステム変数の値を変更します。JSONファイルが正常に保存されていた場合、OK変数は1に設定され、Document変数にはログファイルのパス名が格納されます。*logPath*引数に""(空の文字列)を渡し、ユーザーがファイル選択ダイアログボックスをキャンセルした場合、OK変数は0に設定され、Document変数には空の文字列が渡されます。ユーザーが不正なファイルを選択した場合、OK変数は0に設定され、Document変数には不正なファイルのパスが格納されます。

#### 参照 

  
[INTEGRATE MIRROR LOG FILE](integrate-mirror-log-file.md)  