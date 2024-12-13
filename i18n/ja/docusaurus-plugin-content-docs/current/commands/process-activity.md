---
id: process-activity
title: Process activity
displayed_sidebar: docs
---

<!--REF #_command_.Process activity.Syntax-->**Process activity** () : Object<br/>**Process activity** ( *options* ) : Object<br/>**Process activity** ( *sessionID* ) : Object<br/>**Process activity** ( *sessionID* ; *options* ) : Object<!-- END REF-->

<!--REF #_command_.Process activity.Params-->

| 引数        | 型       |   | 説明                                                             |
| --------- | ------- | - | -------------------------------------------------------------- |
| sessionID | Text    | → | セッションID                                                        |
| options   | Integer | → | 返される情報を指定するオプション                                               |
| 戻り値       | Object  | ← | 実行中のプロセスまたはユーザーセッション(4D Serverのみ) のスナップショット |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                  |
| ----- | ------------------- |
| 20 R7 | *sessionID* 引数のサポート |

</details>

#### 説明

<!--REF #_command_.Process activity.Summary-->The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.<!-- END REF-->The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.**Process activity** コマンドは特定の時刻での、実行中のプロセスや接続ユーザーセッション(4D Server のみ) のスナップショットを返します。 このコマンドは、全てのプロセスを返します。これには、[Process info](process-info.md) コマンドでもアクセスできない内部プロセスも含まれます。  このコマンドは、全てのプロセスを返します。これには、[Process info](process-info.md) コマンドでもアクセスできない内部プロセスも含まれます。 

デフォルトで、引数を渡さずに使用した場合、**Process activity** は以下のプロパティを格納したオブジェクトを返します:

- "processes" には全てのプロセスのコレクションが格納されています
- "sessions" (4D Server の場合のみ) には全てのセッションのコレクションが格納されています

4D Server では、オプションの*sessionID* および *options* 引数を使用することで、返される情報をフィルターすることができます:

- *sessionID* 引数にユーザーセッションID を渡した場合、コマンドはそのセッションに関連した情報のみを返します。 *options* 引数が省略された場合、デフォルトで返されるオブジェクトには、セッションに関連した全てのプロセスのコレクションと、セッションの詳細を説明した単一のオブジェクトを格納したコレクションが格納されています。 無効なセッションID を渡した場合、**null** オブジェクトが返されます。 *options* 引数が省略された場合、デフォルトで返されるオブジェクトには、セッションに関連した全てのプロセスのコレクションと、セッションの詳細を説明した単一のオブジェクトを格納したコレクションが格納されています。 無効なセッションID を渡した場合、**null** オブジェクトが返されます。
- *options* 引数に以下の定数のいづれか一つを渡すことで、返されるコレクションを選択することができます:

| 定数                     | 値 | 説明                                                                 |
| ---------------------- | - | ------------------------------------------------------------------ |
| Processes and sessions | 0 | "processes" および "sessions" の両方の一覧を返します(デフォルト値)。 |
| Processes only         | 1 | "processes" の一覧のみを返します。                                            |
| Sessions only          | 2 | "sessions" の一覧のみを返します。                                             |

:::note

リモート、あるいはローカルモードの4D で実行された場合、`Process activity` は実行中のプロセスの一覧のみを返します(この場合*sessionID* および *options* 引数は無視されます)。

:::

**Sessions**

"sessions" プロパティには、サーバーで実行中の全てのユーザーセッションを記述するオブジェクトのコレクションが格納されます。 セッションオブジェクトのプロパティの詳細については、[`Session info`](session-info.md) コマンドを参照してください。 セッションオブジェクトのプロパティの詳細については、[`Session info`](session-info.md) コマンドを参照してください。

:::note 注記

- セッションのオブジェクトは、[Session](session.md) コマンドを使用することで取得できます。
- `Process activity` はリモートクライアントセッション、ストアドプロシージャーセッションおよびREST セッションを返しますが、Web セッションは返しません(制約)。

:::

**Processes**

"process"プロパティには、サーバーで実行中の全てのプロセスを記述するオブジェクトのコレクションが格納されます。 プロセスオブジェクトのプロパティの詳細な情報については、[`Process info`](process-info.md) コマンドを参照してください。 プロセスオブジェクトのプロパティの詳細な情報については、[`Process info`](process-info.md) コマンドを参照してください。

サーバー上では、`Process activity` コマンドは追加の"session" プロパティを返します:

| 追加のプロパティ | 型      | 説明                                                                                                                                           |   |
| -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- | - |
| session  | Object | プロセスが実行中のセッションの[`.info`](../API/SessionClass.md#info) プロパティ。 `Processes only` 引数が渡されていた場合には未定義となります。 `Processes only` 引数が渡されていた場合には未定義となります。 |   |

#### 例題 1

全てのユーザーセッションのコレクションを取得したい場合を考えます:

```4d
  // サーバー側で実行すること
 
 var $o : Object
 var $i : Integer
 var $processName;$userName : Text

 
 $o:=Process activity // プロセスとセッションの情報を取得
 For($i;0;($o.processes.length)-1) // "processes" コレクション内をループ
    $processName:=$o.processes[$i].name
    $userName:=String($o.processes[$i].session.userName) // userName へ簡単にアクセスする
  // session オブジェクトがUndefined の場合があるのでString コマンドを必ず使用すること
 End for
```

#### 例題 2

カレントセッションに関連した全てのプロセスを取得した場合を考えます:

```4d
  // サーバー側で実行すること
 
 var $sessionID : Text:=Session.id
 var $o : Object
 
 $o:=Process activity($sessionID ;Processes only)

```

#### 参照

[Session storage](session-storage.md)\
[WEB Get server info](../commands-legacy/web-get-server-info.md)
