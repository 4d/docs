---
id: get-database-measures
title: Get database measures
slug: /commands/get-database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Get database measures.Syntax-->**Get database measures** {( *options* )} -> 戻り値<!-- END REF-->
<!--REF #_command_.Get database measures.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| options | Object | &#x1F852; | 戻り値を指定するオプション |
| 戻り値 | Object | &#x1F850; | データベースの計測値を含んだオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get database measures.Summary-->**Get database measures** コマンドは、4Dデータベースエンジンイベントについての詳細な情報を取得します。<!-- END REF-->返される情報には、ディスクやメモ リーキャッシュへの(もしくはからの)読み出し/書き込みアクセスに加え、データベースのインデックス、クエリ、並び替えの使用も含まれます。

**Get database measures** は全ての関連情報を内包する単一のオブジェクトを返します。*options* オブジェクト引数を使用して、その返される情報のオプションを指定する事ができます。

##### 返されるオブジェクトの概要 

返されたオブジェクトには、以下の基本構造を持つ、"DB"という名の単一のプロパティを格納しています:

```RAW
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

こ のオブジェクトは8つの基本的な計測値("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount")と、追加のプロパティ("dataSegment1", "indexSegment", "tables", "index")から構成されています。また、異なる階層で異なるスコープの要素プロパティを格納してることもあります(詳細は以下を参照して下さい)。

**注:** プロパティは、中身を受け取った場合のみ、オブジェクトの中に存在します。中身がないプロパティはオブジェクトの中には含まれません。例えば、デー タベースが読み込み専用モードで開かれインデックスが使用されていなかった場合、返されたオブジェクトには、"diskWriteBytes", "diskWriteCount", "indexSegment", "indexes" が格納されていません。

##### 要素プロパティ 

```undefined
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // 任意
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

##### dataSegment1 と indexSegment 

```undefined
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

##### tables 

```undefined
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```

##### indexes 

```undefined
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
 $measures:=Get database measures($param)
```

#### 例題 2 

```undefined
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
 $measures:=Get database measures($oParams)
```
