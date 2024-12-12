---
id: copy-set
title: COPY SET
slug: /commands/copy-set
displayed_sidebar: docs
---

<!--REF #_command_.COPY SET.Syntax-->**COPY SET** ( *srcSet* ; *dstSet* )<!-- END REF-->
<!--REF #_command_.COPY SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| srcSet | Text | &#8594;  | コピー元のセット名 |
| dstSet | Text | &#8594;  | コピー先セット名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COPY SET.Summary-->COPY SET コマンドは、*dstSet*セットの中に*srcSet*セットの内容をコピーします。<!-- END REF-->

それぞれのセットともプロセスセット、インタープロセスセット、またはローカルセットが使用できます。どちらもマシン上でアクセス可能状態になっている限り、二つのセットは同じ型である必要はありません(以下の例を参照して下さい)。この点についてのより詳細な情報については、"*セットの可視性*"を参照して下さい。

#### 例題 1 

以下の例はクライアント/サーバにおいて、クライアントマシン上で管理されるローカルセット"$SetA"をサーバマシン上で管理されるプロセスセット"SetB"にコピーします: 

```4d
 COPY SET("$SetA";"SetB")
```

#### 例題 2 

以下の例はクライアント/サーバにおいて、サーバマシン上で管理されるプロセスセット"SetA"をクライアントマシン上で管理されるローカルセット"$SetB"にコピーします: 

```4d
 COPY SET("SetA";"$SetB")
```

#### 参照 

*セット*  