---
id: on-server-close-connection-database-method
title: On Server Close Connection database method
slug: /commands/on-server-close-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Close Connection database method.Syntax-->$1, $2, $3 -> On Server Close Connectionデータベースメソッド<!-- END REF-->
<!--REF #_command_.On Server Close Connection database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $1 | 倍長整数 | &#8592; | ユーザーを識別するために4D Serverが内部的に使用するユーザーID |
| $2 | 倍長整数 | &#8592; | 接続を識別するために4D Serverが内部的に使用する接続ID |
| $3 | 倍長整数 | &#8592; | 廃止: 常に0が返されますが、宣言はしなくてはなりません。 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.On Server Close Connection database method.Summary-->**On Server Close Connectionデータベースメソッド**は、4Dクライアントプロセスが終了するたびに、サーバマシン上で一度呼び出されます。<!-- END REF-->

[On Server Open Connectionデータベースメソッド](on-server-open-connection-database-method.md)の場合と同様に、4D Server は**On Server Close Connectionデータベースメソッド**に3つの倍長整数タイプの引数を渡しますが、結果は求めません。

したがって、このメソッドでは3つの引数を倍長整数として明示的に宣言しなくてはなりません:

```4d
 var $1;$2;$3 : Integer
```

次の表は、このデータベースメソッドに渡される3つの引数が示す情報を表わしています:

| **引数** | **説明**                               |
| ------ | ------------------------------------ |
| $1     | 4D Serverがユーザを識別するために内部的に使用するユーザID番号 |
| $2     | 4D Serverが接続を識別するために内部的に使用する接続ID番号   |
| $3     | 廃止: 常に0が渡されますが、宣言は必要                 |

**On Server Close Connectionデータベースメソッド**は、[On Server Open Connectionデータベースメソッド](on-server-open-connection-database-method.md)と対をなすメソッドです。4Dクライアントプロセスについての詳細は、このデータベースメソッドの説明を参照してください。

#### 例題 

[On Server Open Connectionデータベースメソッド](on-server-open-connection-database-method.md)の例題参照
