---
id: copy-array
title: COPY ARRAY
slug: /commands/copy-array
displayed_sidebar: docs
---

<!--REF #_command_.COPY ARRAY.Syntax-->**COPY ARRAY** ( *source* ; *destination* )<!-- END REF-->
<!--REF #_command_.COPY ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| source | Array | &#8594;  | コピー元の配列 |
| destination | Array | &#8592; | コピー先の配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COPY ARRAY.Summary-->COPY ARRAY コマンドは*destination* 配列を、*source* 配列と同じ内容、サイズ、およびタイプで作成または上書きします。<!-- END REF-->異なるタイプの数値型配列の場合、*destination* 配列の型が採用されます。

*source*と*destination*の配列はローカル、プロセス、インタープロセス配列の組み合わせが可能です。変数のスコープが違っていても、配列を複製するのに問題はありません。

**注:**

* コンパイルモードでは、*destination* 引数の配列は、*source* 引数の配列と同じ型である必要があります。そのため、インタープリタモードどコンパイルモードで配列に同様の振る舞いをさせるためには、常に同じ型の配列を使用することが推奨されます。
* オブジェクト配列を複製する場合、コピーされるのは配列に格納されたオブジェクトへの参照のみで、オブジェクト自体は複製されません。つまり、配列内のオブジェクトを編集すると、そのオブジェクトを参照しているコピー元の配列と複製した配列の両方が影響されます。オブジェクトそのものを複製するには [OB Copy](ob-copy.md) コマンドを使用します。

#### 例題 

以下の例は配列Cを作成し、配列Cと同じ大きさと内容を持つ配列Dを作成します:

```4d
 ALL RECORDS([People]) // Peopleの全レコードを選択
 SELECTION TO ARRAY([People]Company;C) // companyフィールドのデータをCにコピー
 COPY ARRAY(C;D) // C配列をD配列にコピー
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 226 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


