---
id: memory-statistics
title: MEMORY STATISTICS
slug: /commands/memory-statistics
displayed_sidebar: docs
---

<!--REF #_command_.MEMORY STATISTICS.Syntax-->**MEMORY STATISTICS** ( *infoType* ; *arrNames* ; *arrValues* ; *arrCount* )<!-- END REF-->
<!--REF #_command_.MEMORY STATISTICS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| infoType | Integer | &#8594;  | 取得する情報のセレクター |
| arrNames | Text array | &#8592; | 情報のタイトル |
| arrValues | Real array | &#8592; | 情報の値 |
| arrCount | Real array | &#8592; | 関連するオブジェクトの数 (利用可能な場合) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MEMORY STATISTICS.Summary-->**MEMORY STATISTICS**コマンドは、4Dのデータキャッシュの利用に関する情報を取得します。<!-- END REF-->この情報はアプリケーションの動作を検証するために使用できます。

*infoType* 引数はリクエストしたい情報のタイプを指定します。カレントの4D のバージョンではサポートされるタイプは一つだけ(*infoType*\=1)です。

コマンド実行後、*arrNames*、*arrValues*、および *arrCount* 配列に情報が返されます。この情報はまた、ランタイムエクスプローラーでも見ることができます: 物理メモリ、仮想メモリ、未使用メモリ/使用済みメモリ、スタックメモリと未使用スタックメモリなどのサイズです。このデータの解釈に関する詳細は、お住まいの地域のテクニカルサポートにお問い合わせください。

#### 参照 

[Cache info](cache-info.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1118 |
| スレッドセーフである | &check; |


