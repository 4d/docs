---
id: set-query-destination
title: SET QUERY DESTINATION
slug: /commands/set-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY DESTINATION.Syntax-->**SET QUERY DESTINATION** ( *destinationType* {; *destinationObject* {; *destinationPtr*}} )<!-- END REF-->
<!--REF #_command_.SET QUERY DESTINATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| destinationType | Integer | &#8594;  | 0=カレントセレクション, 1=セット, 2=命名セレクション, 3=変数 |
| destinationObject | Text, Variable | &#8594;  | セット名、命名セレクション名、変数、または空の文字列 |
| destinationPtr | Pointer | &#8594;  | destinationType=3のとき変数へのポインター |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET QUERY DESTINATION.Summary-->**SET QUERY DESTINATION**を使い、カレントプロセスのクエリの結果を配置する場所を4Dに指示することができます。<!-- END REF-->

*destinationType*引数に配置場所のタイプを指定します。*Queries*テーマの定義済み定数を使用することもできます:

| 定数                     | 型    | 値 |
| ---------------------- | ---- | - |
| Into current selection | 倍長整数 | 0 |
| Into named selection   | 倍長整数 | 2 |
| Into set               | 倍長整数 | 1 |
| Into variable          | 倍長整数 | 3 |

  
以下の表にしたがって、オプションの*destinationObject*引数にクエリの配置先を指定します:

| **destinationType**   | destinationObject                                |
| --------------------- | ------------------------------------------------ |
| 引数                    | 引数                                               |
| 0 (current selection) | 引数を省略します                                         |
| 1 (set)               | (既存のまたは作成させる) セット名                               |
| 2 (named selection)   | (既存のまたは作成させる) 命名セレクション                           |
| 3 (variable)          | (既存の)数値変数、または*destinationPtr*引数を使用する場合空の文字列 ("") |

 例:  

```4d
 SET QUERY DESTINATION(Into current selection)
```

以降の検索で見つかったレコードは、最終的にその検索の対象となるテーブルの新しいカレントセレクションとなります。

 例:  

```4d
 SET QUERY DESTINATION(Into set;"mySet")
```

以降の検索で見つかったレコードは、最終的にセット"mySet"に配置されます。検索の対象となったテーブルのカレントセレクションとカレントレコードは変更されません。

 例:  

```4d
 SET QUERY DESTINATION(Into named selection;"myNamedSel")
```

以降の検索で見つかったレコードは、最終的には命名セレクション"myNamedSel"に配置されます。検索の対象となったテーブルのカレントセレクションとカレントレコードは変更されません。

**注:** 

* 命名セレクションが存在しない場合、検索が完了した時に自動的に作成されます。
* このコマンドは[CUT NAMED SELECTION](cut-named-selection.md)と同様に命名セレクションを管理します。つまり参照だけが保持されます。命名セレクションをカレントセレクションに使用すると、命名セレクションは存在しなくなります。
例:  

```4d
 SET QUERY DESTINATION(Into variable;$vlResult)
```

  
**注:** このシンタックスでは、*$vlResult* 変数は事前に定義されている必要があります。そうでない場合、エラーが返されます。  
または  

```4d
 SET QUERY DESTINATION(Into variable;"";->$vlResult)
```

  
**注**：この二つ目のシンタックスは、このコマンドを[GET QUERY DESTINATION](get-query-destination.md)と組み合わせて使用したい場合に便利です。

以降の検索で見つかったレコード数が、変数$vlResultに配置されます。検索の対象となったテーブルのカレントセレクションとカレントレコードは変更されません。

**警告:** **SET QUERY DESTINATION**は、カレントプロセス内で行われた以下の検索のすべてに影響を及ぼします。*destinationType*が0でない**SET QUERY DESTINATION**の呼び出しを行った後は、通常のクエリを再実行するために**SET QUERY DESTINATION**(0)の呼び出しと対にさせることを忘れないでください。

**SET QUERY DESTINATION**は、下記のクエリコマンドの動作を変更します:

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

これに対して**SET QUERY DESTINATION**は[ALL RECORDS](all-records.md)や[RELATE MANY](relate-many.md)等、テーブルのカレントセレクションを変更する他のコマンドには影響を与えません。

#### 例題 1 

以下の例は*\[Phone Book\]*テーブルのレコードを表示するフォームを作成します。そのフォームに (アルファベット26文字の) *asRolodex*と名付けられたタブコントロールと*\[Phone Book\]*レコードを表示するサブフォームを作成します。タブコントロールから任意のタブを選択することにより、そのタブ上の文字で始まるレコードを表示することができます。 

このアプリケーション例では、*\[Phone Book\]* テーブルが変更されることはないため、任意のタブを選択するたびにクエリを実行する必要はありません。これにより、検索に要する時間を節約することができます。

これを実行するために、検索結果を命名セレクションに格納し、必要に応じて再利用できるようにします。以下のコードは*asRolodex*タブコントロールのオブジェクトメソッドです:

```4d
  // asRolodex
 Case of
    :(FORM Event=On Load)
  // フォームが表示される前に
  // rolodexと、検索が行われたかを示すブール配列を初期化
       ARRAY STRING(1;asRolodex;26)
       ARRAY BOOLEAN(abQueryDone;26)
       For($vlElem;1;26)
          asRolodex{$vlElem}:=Char(64+$vlElem)
          abQueryDone{$vlElem}:=False
       End for
 
    :(FORM Event=On Clicked)
  // タブコントロールがクリックされたら、対応するクエリが実行済みかどうか調べる
       If(Not(abQueryDone{asRolodex}))
  // 実行されていなければ、次のクエリ結果を命名セレクションに格納する
          SET QUERY DESTINATION(Into named selection;"temp")
  // クエリを実行
          QUERY([Phone Book];[Phone Book]Last name=asRolodex{asRolodex}+"@")
  // 通常のクエリモードに戻す
          SET QUERY DESTINATION(Into current selection)
  // 検索されたレコードを使用する
          USE NAMED SELECTION("temp")
          COPY NAMED SELECTION([Phone book];"Rolodex"+asRolodex{asRolodex})
  // 次回同じタブが選択された時は、クエリを行わない
          abQueryDone{asRolodex}:=True
       Else
  // 選択された文字に対応するレコードを表示するために命名セレクションを使用
          USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex})
       End if
 
    :(FORM Event=On Unload)
  // フォームを閉じる際には
  // 作成された命名セレクションをクリアする
       For($vlElem;1;26)
          If(abQueryDone{$vlElem})
             CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElem})
          End if
       End for
  // プロセス配列をクリアする
       CLEAR VARIABLE(asRolodex)
       CLEAR VARIABLE(abQueryDone)
 End case
```

#### 例題 2 

この例題のUnique valuesプロジェクトメソッドは、テーブル中の任意の数のフィールドに対し、重複値がないことを検証するために使用できます。カレントレコードは新規あるいは既存のレコードを使用できます。  
  
```4d
  // Unique values プロジェクトメソッド
  // Unique values ( ポインタ; ポインタ{ ; ポインタ... } ) -> ブール
  // Unique values ( ->テーブル ; ->フィールド { ; ->フィールド2... } ) -> Yes or No
 
 var $0 : Boolean
 var ${1} : Pointer
 var $vlField;$vlNbFields;$vlFound;$vlCurrentRecord : Integer
 $vlNbFields:=Count parameters-1
 $vlCurrentRecord:=Record number($1->)
 If($vlNbFields>0)
    If($vlCurrentRecord#-1)
       If($vlCurrentRecord<0)
  // カレントレコードはまだ保存されていない新規レコード (レコード番号= -3);
  // なので、少なくとも1つのレコードが見つかれば検索を停止できる
          SET QUERY LIMIT(1)
       Else
  // カレントレコードは既存のレコード;
  // なので、少なくとも2つのレコードが見つかれば検索を停止できる
          SET QUERY LIMIT(2)
       End if
  // クエリはカレントセレクションやカレントレコードを変更せずに
  // $vlFoundに結果を返す
       SET QUERY DESTINATION(Into variable;$vlFound)
  // 指定した数の￥フィールドのクエリを行う
       Case of
          :($vlNbFields=1)
             QUERY($1->;$2->=$2->)
          :($vlNbFields=2)
             QUERY($1->;$2->=$2->;*)
             QUERY($1->;&;$3->=$3->)
          Else
             QUERY($1->;$2->=$2->;*)
             For($vlField;2;$vlNbFields-1)
                QUERY($1->;&;${1+$vlField}->=${1+$vlField}->;*)
             End for
             QUERY($1->;&;${1+$vlNbFields}->=${1+$vlNbFields}->)
       End case
       SET QUERY DESTINATION(Into current selection) // クエリモードを通常に戻す
       SET QUERY LIMIT(0) // クエリの上限をクリア
  // クエリ結果を処理
       Case of
          :($vlFound=0)
             $0:=True // 重複値はない
          :($vlFound=1)
             If($vlCurrentRecord<0)
                $0:=False // 未保存の新規レコードと同じ値を持つ既存のレコードを見つけた
             Else
                $0:=True // 重複値は見つからなかった
             End if
          :($vlFound=2)
             $0:=False // ケースに関わらず、値は重複している
       End case
    Else
       If(◊DebugOn) // Does not make sense; signal it if development version
          TRACE // WARNING! Unique values is called with NO current record
       End if
       $0:=False // Can't guarantee the result
    End if
 Else
    If(◊DebugOn) // Does not make sense; signal it if development version
       TRACE // WARNING! カレントレコードなしでメソッドが呼び出された
    End if
    $0:=False // 結果は保証できない
 End if
```

このプロジェクトメソッドをアプリケーションから使用するには、以下のように記述します:

```4d
  // ...
 If(Unique values(->[Contacts];->[Contacts]Company);->[Contacts]Last name;->[Contacts]First name)
  // 固有の値を持つそのレコードに対して適切な処置をとる
 Else
    ALERT("There is already a Contact with this name for this Company.")
 End if
  // ...
```

#### 参照 

[GET QUERY DESTINATION](get-query-destination.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY LIMIT](set-query-limit.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 396 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


