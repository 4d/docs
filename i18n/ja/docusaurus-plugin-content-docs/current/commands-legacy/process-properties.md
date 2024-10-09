---
id: process-properties
title: PROCESS PROPERTIES
slug: /commands/process-properties
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS PROPERTIES.Syntax-->**PROCESS PROPERTIES** ( *process* ; *procName* ; *procState* ; *procTime* {; *procMode* {; *uniqueID* {; *origin*}}} )<!-- END REF-->
<!--REF #_command_.PROCESS PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| process | Integer | &srarr; | プロセス番号 |
| procName | Text | &harr; | プロセス名 |
| procState | Integer | &harr; | プロセスの状態 |
| procTime | Integer | &harr; | プロセスの稼働時間 (Tick) |
| procMode | Boolean, Integer | &harr; | TRUE: 表示, FALSE: 非表示 |
| uniqueID | Integer | &harr; | ユニークなプロセス番号 |
| origin | Integer | &harr; | プロセスの発生源 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PROCESS PROPERTIES.Summary-->**PROCESS PROPERTIES**コマンドは*process*に渡したプロセス番号を持つプロセスに関する様々な情報を返します。<!-- END REF-->

**注:** プロセスが存在しない場合、つまり*process* 引数に1から[Count tasks](count-tasks.md)までの番号を渡さなかった場合、**PROCESS PROPERTIES** は変数パラメータの変更を行いません。

このコマンド呼出し後に:

* *procName*変数はプロセスの名前を返します。プロセス名で注意すべき点は、次のとおりです:  
   * プロセスがメソッド実行ダイアログボックスから (新規プロセスオプションを選択した状態で) 起動された場合、プロセスの名前は“**P\_**”で始まりその後に数字が続きます。  
   * プロセス開始プロパティが選択されたカスタムメニューから起動されたプロセスの場合には、プロセスの名前は“**M\_**”または“**ML\_**”で始まり、その後に数字が続きます。  
   * Webサーバーによりプロセスが開始されれた場合、名前は"Web Process#"+UUIDです。  
   * プロセスがアボートしていた場合（そして、そのスロットがまだ再使用されていない場合)、プロセスの名前はそのまま返されます。プロセスがアボートしたかどうかを検出するには、*procState*\=-1を判定します（下記の表を参照）。
* *procState*変数は、呼び出しを行った時点のプロセスの状態を返します。この引数は次の定義済定数で提供される値のいずれか1つを返します:  
| 定数                        | 型    | 値     |  
| ------------------------- | ---- | ----- |  
| Does not exist            | 倍長整数 | \-100 |  
| Aborted                   | 倍長整数 | \-1   |  
| Executing                 | 倍長整数 | 0     |  
| Delayed                   | 倍長整数 | 1     |  
| Waiting for user event    | 倍長整数 | 2     |  
| Waiting for input output  | 倍長整数 | 3     |  
| Waiting for internal flag | 倍長整数 | 4     |  
| Paused                    | 倍長整数 | 5     |

* *p* *rocTime*変数は、プロセスが起動されてからの稼働時間をtick数 (1/60秒) で返します。
* 任意の*procMode* 引数はブール型あるいは倍長整数型の変数になります:  
   * ブール型の場合、プロセスが表示状態の場合にはTrueを、非表示の場合にはFalseを返します。  
   * 倍長整数型の場合、メソッド実行後にビットフィールドを含み、最初の二桁は以下のように設定されます:  
         * bit 0は表示プロパティを返します。プロセスが表示状態であれば1、非表示状態であれば0に設定されています。  
         * bit 1 はプリエンプティブモードプロパティを返します。プロセスがプリエンプティブモードで実行されていれば1に、コオペラティブモードで実行されていれば0を返します。  
         詳細な情報については、*プリエンプティブ4Dプロセス* の章を参照してください。
* *uniqueID*が 指定された場合には、独自のプロセス番号を返します。各プロセスはプロセス番号と、セッション内でユニークなプロセス番号を持っています。ユニークプロセ ス番号は、2つのプロセス間または2つのプロセスセッションの間で区別することができるようにするものです。これは4Dセッションの間に開始されたプロセ ス番号に対応するものです。

##### 

* *origin* 引数が指定された場合には、プロセスの発生元を表わす値を返します。4Dは下記の定数を定義しています("*Process Type*" テーマ内):  
    
| 定数                            | 型    | 値    | コメント                    |  
| ----------------------------- | ---- | ---- | ----------------------- |  
| Apple event manager           | 倍長整数 | \-7  |                         |  
| Backup process                | 倍長整数 | \-19 |                         |  
| Cache manager                 | 倍長整数 | \-4  |                         |  
| Client manager process        | 倍長整数 | \-31 |                         |  
| Compiler process              | 倍長整数 | \-29 |                         |  
| Created from execution dialog | 倍長整数 | 3    |                         |  
| Created from menu command     | 倍長整数 | 2    |                         |  
| Design process                | 倍長整数 | \-2  |                         |  
| Event manager                 | 倍長整数 | \-8  |                         |  
| Execute on client process     | 倍長整数 | \-14 |                         |  
| Execute on server process     | 倍長整数 | 1    |                         |  
| External task                 | 倍長整数 | \-9  |                         |  
| HTTP Log flusher              | 倍長整数 | \-58 |                         |  
| Indexing process              | 倍長整数 | \-5  |                         |  
| Internal 4D server process    | 倍長整数 | \-18 |                         |  
| Internal timer process        | 倍長整数 | \-25 |                         |  
| Log file process              | 倍長整数 | \-20 |                         |  
| Main 4D process               | 倍長整数 | \-39 |                         |  
| Main process                  | 倍長整数 | \-1  |                         |  
| Method editor macro process   | 倍長整数 | \-17 |                         |  
| Monitor process               | 倍長整数 | \-26 |                         |  
| MSC process                   | 倍長整数 | \-22 |                         |  
| None                          | 倍長整数 | 0    |                         |  
| On exit process               | 倍長整数 | \-16 |                         |  
| Other 4D process              | 倍長整数 | \-10 |                         |  
| Other user process            | 倍長整数 | 4    |                         |  
| Restore Process               | 倍長整数 | \-21 |                         |  
| Serial Port Manager           | 倍長整数 | \-6  |                         |  
| Server interface process      | 倍長整数 | \-15 |                         |  
| SOAP process                  | 倍長整数 | \-33 |                         |  
| SQL Method execution process  | 倍長整数 | \-24 |                         |  
| Web process on 4D remote      | 倍長整数 | \-12 |                         |  
| Web process with no context   | 倍長整数 | \-3  |                         |  
| Web server process            | 倍長整数 | \-13 |                         |  
| Web server spare process      | 倍長整数 | \-32 |                         |  
| Worker process                | 倍長整数 | 5    | ユーザーによってローンチされたワーカープロセス |  
    
    
**注:** 4Dの内部プロセスは負の値を返し、ユーザが作成したプロセスは正の値を返します。

#### 例題 1 

次の例は、変数*vName*, *vState,* *vTimeSpent*に現在のプロセスのプロセス名、プロセスステータス、プロセス時間を返します:

```4d
 var vName : Text // Initialize the variables
 var vState : Integer
 var vTime : Integer
 PROCESS PROPERTIES(Current process;vName;vState;vTimeSpent)
```

#### 例題 2 

[Semaphore](semaphore.md)の例題参照

#### 例題 3 

カレントプロセスの表示状態と実行モードを調べたい場合を考えます。以下のようの書く事ができます:

```4d
 var vName : Text
 var vState : Integer
 var vTime : Integer
 var vFlags : Integer
 var isVisible : Boolean
 var isPreemptive : Boolean
 PROCESS PROPERTIES(Current process;vName;vState;vTime;vFlags)
 isVisible:=vFlags?? 0 //表示状態であればtrue
 isPreemptive:=vFlags?? 1 //プリエンプティブモードであればtrue
```

#### 参照 

[Count tasks](count-tasks.md)  
[Get process activity](get-process-activity.md)  
[Process state](process-state.md)  
*プリエンプティブ4Dプロセス*  