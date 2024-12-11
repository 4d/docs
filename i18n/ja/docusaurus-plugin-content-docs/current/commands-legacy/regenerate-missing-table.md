---
id: regenerate-missing-table
title: REGENERATE MISSING TABLE
slug: /commands/regenerate-missing-table
displayed_sidebar: docs
---

<!--REF #_command_.REGENERATE MISSING TABLE.Syntax-->**REGENERATE MISSING TABLE** ( *tableName* )<!-- END REF-->
<!--REF #_command_.REGENERATE MISSING TABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableName | Text | &#8594;  | 再生成する、失われたテーブルの名称 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.REGENERATE MISSING TABLE.Summary-->REGENERATE MISSING TABLE コマンドは tableName引数に渡された名前の失われたテーブルを再構築します。<!-- END REF-->失われたテーブルが再構築されると、ストラクチャエディタにそれらが現れ、データに再びアクセスできるようになります。

失われたテーブルとは、データファイル中にデータがあるにもかかわらず、ストラクチャレベルに存在しないテーブルのことです。新しい[GET MISSING TABLE NAMES](get-missing-table-names.md "GET MISSING TABLE NAMES")コマンドを使用して、アプリケーション中に存在するかもしれない失われたテーブルを識別できます。

*tableName*で指定されたテーブルがデータベースの失われたテーブルでない場合、コマンドはなにも行いません。 

#### 例題 

以下のメソッドはデータベース中に存在するかもしれないすべての失われたテーブルを再生成します:

```4d
 ARRAY TEXT($arrMissingTables;0)
 GET MISSING TABLE NAMES($arrMissingTables)
 $SizeArray:=Size of array($arrMissingTables)
 If($SizeArray#0)
  // 配列をデータベース中のテーブル名で埋める
    ARRAY TEXT(arrTables;Last table number)
    If(Last table number>0) //テーブルが実際に存在すれば
       For($vlTables;Size of array(arrTables);1;-1)
          If(Is table number valid($vlTables))
             arrTables{$vlTables}:=Table name($vlTables)
          Else
             DELETE FROM ARRAY(arrTables;$vlTables)
          End if
       End for
    End if
    For($i;1;$SizeArray)
       If(Find in array(arrTables;$arrMissingTables{$i})=-1)
          CONFIRM("テーブルを再生しますか: "+$arrMissingTables{$i}+"?")
          If(OK=1)
             REGENERATE MISSING TABLE($arrMissingTables{$i})
          End if
       Else
          ALERT("テーブル"+$arrMissingTables{$i}+" を再生できません。データベース中に同じ名前のテーブルがあります。")
       End if
    End for
 Else
    ALERT("再生するテーブルがありません。")
 End if
```

#### 参照 

[GET MISSING TABLE NAMES](get-missing-table-names.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1126 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


