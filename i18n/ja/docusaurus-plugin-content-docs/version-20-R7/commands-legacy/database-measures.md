---
id: database-measures
title: Database measures
slug: /commands/database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Database measures.Syntax-->**Database measures** {( *options* )} : Object<!-- END REF-->
<!--REF #_command_.Database measures.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| options | Object | &#8594;  | 戻り値を指定するオプション |
| 戻り値 | Object | &#8592; | データベースの計測値を含んだオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Database measures.Summary-->**Database measures** コマンドは、4Dデータベースエンジンイベントについての詳細な情報を取得します。<!-- END REF-->返される情報には、ディスクやメモ リーキャッシュへの(もしくはからの)読み出し/書き込みアクセスに加え、データベースのインデックス、クエリ、並び替えの使用も含まれます。

**Database measures** は全ての関連情報を内包する単一のオブジェクトを返します。*options* オブジェクト引数を使用して、その返される情報のオプションを指定する事ができます。

##### 返されるオブジェクトの概要 

返されたオブジェクトには、以下の基本構造を持つ、"DB"という名の単一のプロパティを格納しています:

```json
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

こ のオブジェクトは8つの基本的な計測値("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount")と、追加のプロパティ("dataSegment1", "indexSegment", "tables", "index")から構成されています。また、異なる階層で異なるスコープの要素プロパティを格納してることもあります(詳細は以下を参照して下さい)。

**注:** プロパティは、中身を受け取った場合のみ、オブジェクトの中に存在します。中身がないプロパティはオブジェクトの中には含まれません。例えば、デー タベースが読み込み専用モードで開かれインデックスが使用されていなかった場合、返されたオブジェクトには、"diskWriteBytes", "diskWriteCount", "indexSegment", "indexes" が格納されていません。

##### 要素プロパティ 

要素プロパティは、データベースオブジェクトの様々な階層に存在します。同じ情報を異なるスコープから返します。要素プロパティの詳細は以下の通りです:

| **名前**         | **返される情報**            |
| -------------- | --------------------- |
| diskReadBytes  | ディスクから読み出したバイト        |
| cacheReadBytes | キャッシュから読み出したバイト       |
| cacheMissBytes | キャッシュからの読み出しに失敗したバイト  |
| diskWriteBytes | ディスクに書き込まれたバイト        |
| diskReadCount  | ディスクからの読み出しアクセス       |
| cacheReadCount | キャッシュからの読み出しアクセス      |
| cacheMissCount | キャッシュからの読み出しに失敗したアクセス |
| diskWriteCount | ディスクへの書き込みアクセス        |

8つの要素プロパティは全て同じオブジェクト構造を持ちます。例えば:

```json
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // 任意
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

* "**value**" (数字): この"value"プロパティにはバイトの量かアクセスの回数が格納されます。基本的には、この値は"history"オブジェクトの合計値となっています("history"オブジェクトが存在しない場合も同様です)。
* "**history**" (オブジェクト配列): "history" オブジェクト配列は、秒ごとにグループ分けされたイベント値の集合です。"history"プロパティは*options* 引数を通してリクエストされた場合にのみ表示されます(以下を参照して下さい)。"history" 配列は最大で200アイテムを格納する事ができます。配列内の各要素はそれ自体がオブジェクトであり、二つのプロパティを格納します:"value" と "time"です。  
   * "value" (数字): 関連付けられた"time"プロパティで指定された時間内に扱われたバイトまたはアクセスの量。  
   * "time" (数字): そのファンクションが呼び出されてから経過した秒数。上記の例の("time": -1649) は、1649秒前(厳密には1649秒前から1650秒前の間)を意味します。この1秒間に、54,202 バイトがディスク上から読み出されました。  
   この例でのhistoryの配列には連続した値(-1650,-1651,-1652, 等)は格納されていません。これの前の値は -1665で、これはつまり1650秒前から1665秒前までの15秒間はディスクから何も読み出されていないことを意味します。  
   **注:** デフォルトでは、配列には意味のある情報しか含まれません。  
   配列の最大サイズが200なので、データベースが頻繁に使用されている(例えばディスク上から毎秒何かが読み出されている)場合、historyの長さの上限は200秒となります。反対に、3分に1度だけ読み込みが発生する以外には何もデータベース起こらない場合には、historyの長さは600分(3×200)となります。  
   この例の場合は、以下の表のようにあらわされます:  
   ![](../assets/en/commands/pict1510781.en.png)

##### dataSegment1 と indexSegment 

"dataSegment1" と "indexSegment"プロパティには、最大で4つの要素プロパティが格納されます: 

```json
"dataSegment1": {    "diskReadBytes": {…},    "diskWriteBytes": {…},    "diskReadCount": {…},    "diskWriteCount": {…}    },"indexSegment": {    "diskReadBytes": {…},    "diskWriteBytes": {…},    "diskReadCount": {…},    "diskWriteCount": {…}    }
```

これらのプロパティは要素プロパティと同じ情報を返しますが、それぞれのデータベースファイルに特化した情報を返します:

* "dataSegment1" はディスク上の.4DD データファイルの情報を返します。
* "indexSegment" はディスク上の.4dx インデックスファイルの情報を返します。

例えば、以下のオブジェクトが返ってきます:

```json
{
"DB": {
"diskReadBytes": {
    "value": 718260
    },
"diskReadCount": {
    "value": 229
    },

"dataSegment1": {
    "diskReadBytes": {
    "value": 679092
    },
    "diskReadCount": {
    "value": 212
    }
    },
"indexSegment": {
    "diskReadBytes": {
    "value": 39168
    },
    "diskReadCount": {
    "value": 17
    }
}
```

以下の様に返された値を計算する事で、どのように動作しているのか確認することができます:

*diskReadBytes.value = dataSegment1.diskReadBytes.value + indexSegment.diskReadBytes.value* 
*diskWriteBytes.value = dataSegment1.diskWriteBytes.value + indexSegment.diskWriteBytes.value* 
*diskReadCount.value = dataSegment1.diskReadCount.value + indexSegment.diskReadCount.value* 
*diskWriteCount.value = dataSegment1.diskWriteCount.value + indexSegment.diskWriteCount.value* 

##### tables 

"tables" プロパティには、データベースが開かれて以来、読み込み・書き込みのいずれかでアクセスされたテーブルの数だけプロパティが格納されています。それぞれのプロパティ名は関連するテーブル名となっています。例えば: 

```json
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```

それぞれのテーブルプロパティには、10個のプロパティが格納されています:

* 最初の8つのプロパティはアクセスのあったテーブルに関連した値を格納した要素プロパティ(上記参照)です。
* 残り二つのプロパティ"records" と "blobs"には、それぞれ同じように8つの要素プロパティがあり、特定のフィールドの型に関連する情報だけが格納されています:  
   * "records" プロパティはテーブル全体のフィールド(文字列、日付、数字、等)のうち、テキスト、ピクチャー、Blobのフィールドを除いた情報が格納されています  
   * "blobs" プロパティには、テーブルのうちテキスト、ピクチャー、Blobフィールドの情報が格納されています
* テーブルで実行されたクエリと並び替えによっては、"fields" と "queries"というプロパティが表示されている場合があります:  
   * "fields" プロパティには、クエリと並び替えに使用されたフィールド数と同じ数だけ"field name" 属性(これはサブオブジェクトでもあります)が格納されています。  
   それぞれのフィールド名オブジェクトには以下のものが格納されます:  
         * そのフィールドを使用してクエリが実行されていた場合には"queryCount" オブジェクト(*options* 引数の値によって履歴の有無を指定する事ができます)。  
         * そのフィールドを使用して並び替えが実行されていた場合には"sortCount" オブジェクト(*options* 引数の値によって履歴の有無を指定する事ができます)。  
   この属性はインデックスの使用には基づいていません。クエリや並べ替えが考慮の対象となります。  
   例: データベースが起動した瞬間から、複数のクエリと並べ替えが*CompID*、*Name* そして *FirstName* フィールドを使用して実行されてきました。返されたオブジェクトには以下のような"fileds"サブオブジェクトが格納されます(*options* 引数ではパスあり、履歴なしを指定しています):  
         
   ```json  
   {  
       "DB": {  
           "tables": {  
               "Employees": {  
                   "fields": {  
                       "CompID": {  
                           "queryCount": {  
                               "value": 3  
                           }  
                       },  
                       "Name": {  
                           "queryCount": {  
                               "value": 1  
                           },  
                           "sortCount": {  
                               "value": 3  
                           }  
                       },  
                       "FirstName": {  
                           "sortCount": {  
                               "value": 2  
                           }  
                       }  
   (...)  
   ```  
         
   **注**:"fields" 属性はテーブル上でクエリまたは並び替えが実行された場合にのみ作成されます。そうでない場合はこの属性は存在しません。  
   * "queries" はテーブル上で実行されたそれぞれのクエリの詳細を提供するオブジェクトの配列です。配列のそれぞれの要素は3つの属性を格納します:  
         * "queryStatement" (文字列): クエリ文字列(検索値ではなくフィールド名を含む)。例えば"(Companies.PK\_ID != ?)"  
         * "queryCount" (オブジェクト):  
                  * "value" (数値): 検索値に関係なく、クエリ宣言が実行された回数  
                  * "history" (オブジェクト配列) (*options*引数でリクエストされた場合に限る): "value" と "time" の標準の履歴のプロパティ  
         * "duration" (オブジェクト) ("value" の値が>0の場合)  
                  * "value" (数値): ミリ秒数  
                  * "history" (オブジェクト配列) (*options*引数でリクエストされた場合に限る): "value" と "time" の標準の履歴のプロパティ  
   例題: データベースが起動した瞬間から、単一のクエリがEmployees テーブル上で実行されてきました。(*options* 引数ではパスあり、履歴ありを指定しています):  
   ```json  
   {  
       "DB": {  
           "tables": {  
               "Employees": {  
                   "queries": [  
                       {  
                           "queryStatement": "(Employees.Name == ?)",  
                           "queryCount": {  
                               "value": 1,  
                               "history": [  
                                   {  
                                       "value": 1,  
                                       "time": -2022  
                                   }  
                               ]  
                           },  
                           "duration": {  
                               "value": 2,  
                               "history": [  
                                   {  
                                       "value": 2,  
                                       "time": -2022  
                                   }  
                               ]  
                           }  
                       },  
   (...)  
   ```  
         
   **注:** "queries" 属性はテーブル上で少なくとも一つのクエリが実行された場合に作成されます。

##### indexes 

これがもっとも複雑なオブジェクトです。一つ以上のインデックスを使用してアクセスされた全てのテーブルがプロパティとして保存され、そのプロパティ内には使用されたインデックス名もプロパティとして格納されています。キーワードインデックスは個別に表示され、後ろに"*(Keyword)*"が付属します。さらに、それぞれのインデックス名のプロパティオブジェクトには、そのインデッ クスに関連した8つの要素プロパティと、データベースが起動してからのインデックスの使用状況に応じて最大で4つまでのサブオブジェクトが格納されます(それぞれのサブオブジェクトは、データベースが起動して以降、それに対応するオペレーションが実行された場合にのみ存在します)。

例: データベースが起動したときから、\[Employees\]EmpLastName フィールドの複数のインデックスがアクセスされています。それに加え、\[Companies\] テーブル内で2レコードが作成され、16レコードが削除されました。このテーブルはインデックス付けがなされている"name" フィールドがあります。このテーブルはまた、このフィールドを使用してクエリと並び替えが行われました。返されるオブジェクトには、以下のようなデータが格納されます:

```json
"indexes": {
    "Employees": {
        "EmpLastName": {
                    "diskReadBytes": {…},
                    "cacheReadBytes": {…},
                    "cacheMissBytes": {…},
                    "diskWriteBytes": {…},

                    "diskReadCount": {…},
                    "cacheReadCount": {…},
                    "cacheMissCount": {…},
                    "diskWriteCount": {…}
            }
        "EmpLastName (Keyword)": {...},
        "index3Name": {…},
        "index4Name": {…},
        …
        }
        "Companies": {
            "Name": 
            (...)
                "queryCount": {
                    "value": 41
                },
                "sortCount": {
                    "value": 3
                },
                "insertKeyCount": {
                    "value": 2
                },
                "deleteKeyCount": {
                    "value": 16
                }
    table3Name: {…}
}
```

##### options 引数 

*options* 引数を使用すると、コマンドによって返される実際の情報をカスタマイズすることができます。*options* には、プロパティを3つまで格納することのできるオブジェクトを渡します。その3つとは、"withHistory", "historyLength", そして "path"です。

| **プロパティ**       | **型**        | **詳細**                                                                                                                                                                                                                                                                                                                    |
| --------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "withHistory"   | ブール          | "true" を渡した場合、historyは返されたオブジェクト内で呼び出されるファンクションによって返されることを表します。"false"を渡した場合、ファ ンクションによって返されるオブジェクトにはhistoryが格納されないことを意味します。                                                                                                                                                                                              |
| "historyLength" | 数値           | 返される history 配列のサイズを秒数で定義します(\*)                                                                                                                                                                                                                                                                                          |
| "path"          | 文字列 \| 文字列配列 | 特定のプロパティへのフルパスまたは取得したい特定の全てのプロパティへのフルパス。文字列を渡した場合、対応する値のみが"DB"オブジェクト内に返されます(パスが有効な場合)。例: "DB.tables.Employees.records.diskWriteBytes"などです。文字列の配列を渡した場合、全ての対応する値が"DB"オブジェクトへと返されます(パスが有効な場合)。例:\["DB.tables.Employee.records.diskWriteBytes", "DB.tables.Employee.records.diskReadCount","DB.dataSegment1.diskReadBytes"\] |

(\*) 上記にあるように、historyは連続した秒としてではなく、関連した値として保存されます。数秒間何も起こらなければ、何も保存はされず、内部 history配列には空欄が表示されます。"time"には、例えば -2, -4, -5, -10, -15, -30が格納され、それぞれに 200, 300, 250, 400, 500,150という値が附属してくる、といったような形です。"historyLength"が600未満(10分未満)の値に設定された場合、返された配列にはtimeとして0, -1, -2, -3 … -599が返されますが、値が入っているのは-2, -4, -5, -10, -15, -30 のtimeのみです。他のものには全て0が値として入れられます。また上記にあるように、内部配列の唯一の上限はサイズ(200)だけであり、時間ではありません。これはつまり特定のプロパティが活発でなかった場合、一番古いtimeはとても大きい値になり得るという事です(例えば-3600＝1時間前、 等)。またデータベース開始直後には200未満の値しかない場合もあります。これらの場合には、内部history timeがリクエストされたものより若い、または関連する全ての値が返された配列内で既に設定されている場合、返される値は-1になります。  
例: データベースはつい20秒前に開かれ、historyが60秒前をリクエストしたとします。返された値のうち0から-20は値が0に設定され、他のものは -1へと設定されます。"-1"の値が返された場合、これはリクエストされた時間が古すぎるか、または値が内部history配列内に残っていないことを 意味します(200アイテムという上限に達したため、古い値は削除されています)。

##### クライアント/サーバー、そしてコンポーネントについて 

このコマンドはデータベースの使用についての情報を返します。つまり、関連した値を含む有効なオブジェクトが返されるのは、以下の様に呼び出された場合に限ります:

* 4D ローカルモード(コンポーネントから呼び出された場合、コマンドはホストデータベースについての情報を返します)。
* クライアント/サーバーモードにおけるサーバー側

コマンドがリモートの4Dから呼び出された場合、オブジェクトは空のまま返されます。  
このコンテキストにおいて、サーバー側にあるデータベースの情報を取得したい場合には、もっとも簡単な手段は"Execute on server"オプションが有効化されているメソッドを作成してしまう事です。  
この原理はコンポーネントに対しても同様です:もしコンポーネントがローカルの4Dにおいて呼び出された場合、返されるのはホストデータベースについての情報です。4D リモートの場合には、サーバーデータベースについての情報を返します。

#### 例題 1 

返されたオブジェクト内にhistoryのログを残したい場合:

```4d
 var $param : Object
 var $measures : Object
 OB SET($param;"withHistory";True)
 $measures:=Database measures($param)
```

#### 例題 2 

キャッシュ内で読み込まれた全体のバイト数("cacheReadBytes")だけを知りたい場合:

```4d
 var $oStats : Object
 var $oParams : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 $oStats:=Database measures($oParams)
```

返されたオブジェクトには、以下の様な情報が含まれます:

```json
{
    "DB": {
        "cacheReadBytes": {
            "value": 9516637
        }
    }
}
```

#### 例題 3 

直近の2分間に読み込みされたキャッシュのバイトサイズを取得したい場合:

```4d
 var $oParams : Object
 var $measures : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 OB SET($oParams;"withHistory";True)
 OB SET($oParams;"historyLength";2*60)
 $measures:=Database measures($oParams)
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1314 |
| スレッドセーフである | &check; |


