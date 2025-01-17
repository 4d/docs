---
id: describe-query-execution
title: DESCRIBE QUERY EXECUTION
slug: /commands/describe-query-execution
displayed_sidebar: docs
---

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Syntax-->**DESCRIBE QUERY EXECUTION** ( *status* )<!-- END REF-->
<!--REF #_command_.DESCRIBE QUERY EXECUTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| status | Boolean | &#8594;  | True=内部クエリ分析を有効にする, False=内部クエリ分析を無効にする |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DESCRIBE QUERY EXECUTION.Summary-->DESCRIBE QUERY EXECUTION コマンドはカレントプロセスにおいて、クエリの分析を有効にしたり無効にしたりします。<!-- END REF-->このコマンドは、4Dランゲージの[QUERY](query.md)コマンドのようなクエリの文脈でのみ機能します。

*status* 引数に[True](true.md "True")を設定してこのコマンドを呼び出すと、クエリ分析モードが有効になります。このモードでは、4Dエンジンはデータに対して行われるクエリごとに2つの情報を内部的に記録します:

* クエリが実行される直前の、クエリに関する詳細な説明。言い換えれば、実行しようとする計画 (クエリプラン)。
* 実際に実行されたクエリの詳細な説明 (クエリパス)。

記録される情報はクエリのタイプ (インデックス付き, シーケンシャル)、見つけたレコード数、実行するクエリ条件ごとに必要な時間を含みます。これらの情報は[Last query plan](last-query-plan.md "Last query plan")と[Last query path](last-query-path.md "Last query path")コマンドで読みだすことができます。

通常、クエリプランの説明とクエリパスは同じです。しかしパフォーマンスを向上させるため、4Dはクエリ実行時に動的な最適化を行うことがあるため、これら2つが異なることもあります。例えば4Dエンジンがそのほうが早いと判断すれば、インデックス付きフィールドに対するクエリをシーケンシャルクエリに変更することがあります - これは特に検索対象のセレクションが少ないときに発生します。

*status* 引数に[False](false.md "False")を渡すとクエリの分析を停止します。クエリ分析モードはアプリケーションを遅くします。

#### 例題 

以下の例題は、コマンドを使用して取得できる情報のタイプを示します:

```4d
 var $vResultPlan;$vResultPath : Text
 DESCRIBE QUERY EXECUTION(True) //analysis mode
 QUERY([Employees];[Employees]LastName="T@";*) // Search for employees whose last name starts with T...
 QUERY([Employees];&;[Companies]Name="H@";*) // that work for a company whose name starts with H
 QUERY([Employees];&;[Employees]Salary>2500;*) // whose salary is > 2500
 QUERY([Employees];&;[Cities]Pop<50000) // that live in a city with less than 50,000 inhabitants
 $vResultPlan:=Last query plan(Description in text format)
 $vResultPath:=Last query path(Description in text format)
 DESCRIBE QUERY EXECUTION(False) //End of analysis mode
```

このコードを実行後、*$vResultPlan* と *$vResultPath* には実行されたクエリの定義が含まれます。例: 

```json
$vResultPlan :    Employees.LastName == T@ And  Employees.Salary > 2500 And Join on Table : Companies  :   Employees.Company = Companies.Name [index : Companies.Name ] LIKE H@ And Join  on Table : Cities  :  Employees.City = Cities.Name [index : Cities.Pop  ] < 50000$vResultPath : (Employees.LastName == T@ And Employees.Salary  > 2500) And (Join on Table : Companies  :  Employees.Company  = Companies.Name with filter {[index : Companies.Name ]  LIKE H@}) And (Join on Table : Cities  :  Employees.City = Cities.Name  with filter {[index : Cities.Pop ] < 50000})   (3 records found in 1  ms)
```

Description in XML Format 定数が [Last query path](last-query-path.md "Last query path") コマンドに渡されると、 *$vResultPath* にはXMLで表現された定義が返されます:

```XML
$vResultPath : 
   <QueryExecution>
      <steps description="And" time="0" recordsfounds="1227">
         <steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">
            <steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>
         </steps>
      </steps>
   </QueryExecution>
```

#### 参照 

[Last query path](last-query-path.md)  
[Last query plan](last-query-plan.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1044 |
| スレッドセーフである | &check; |


