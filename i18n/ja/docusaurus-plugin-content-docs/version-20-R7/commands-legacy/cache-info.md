---
id: cache-info
title: Cache info
slug: /commands/cache-info
displayed_sidebar: docs
---

<!--REF #_command_.Cache info.Syntax-->**Cache info** {( *dbFilter* )} : Object<!-- END REF-->
<!--REF #_command_.Cache info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dbFilter | Object | &#8594;  | 返す属性の一覧を定義(データベースごとにフィルター) |
| 戻り値 | Object | &#8592; | キャッシュについての情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Cache info.Summary-->**Cache info** コマンドは、カレントキャッシュの中身についての詳細な情報を格納したオブジェクトを返します (使用メモリ、読み込まれたテーブルやインデックス、等)

**注:** このコマンドはローカルモード (4D Server および 4D) でのみ正しい情報を返します。<!-- END REF-->リモートモードの4Dでの使用は想定されていないことに注意してください。

デフォルトでは、実行中のデータベースに関する情報のみが返されます。任意の *dbFilter*オブジェクト引数を渡すと、コマンドのスコープを指定する事ができます:

* "dbFilter" 属性に "All" 値を渡すと、コンポーネントを含め、実行中のすべてのデータベースのキャッシュ情報を取得します。
* "dbFilter" 属性に "" 値 (空の文字列) を渡すと、カレントのデータベースに関する情報のみを取得します (*dbFilter*引数を省略した場合と同じ)。

**Cache info** コマンドはキャッシュに関係のある情報を一つのオブジェクトに格納して返します。返されたオブジェクトの基本的な構造は下記のとおりです:

```json
{    "maxMem": Maximum cache size (real),    "usedMem": Current cache size (real),    "objects": [...] Array of objects currently loaded in cache}
```

*objects*配列の要素はすべて、キャッシュに現在読み込まれているルートオブジェクト (テーブル、インデックス、Blob、他) です。それぞれの要素にカレントステータスを表すための属性が格納されています。これらのデータのより詳細な解釈については、お住まいの地域のテクニカルサービス部門までお問い合わせください。

#### 例題 

カレントデータベースのキャッシュ情報を取得したい場合を考えます:

```4d
 var $cache : Object
 $cache:=Cache info
```

開いている全てのコンポーネントについてのキャッシュ情報を取得した場合を考えます:

```4d
 var $dbFilter : Object
 OB SET($dbFilter;"dbFilter";"All")
 $cache:=Cache info($dbFilter)
```

#### 参照 

[MEMORY STATISTICS](memory-statistics.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1402 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


