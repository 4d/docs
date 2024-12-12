---
id: get-document-properties
title: GET DOCUMENT PROPERTIES
slug: /commands/get-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET DOCUMENT PROPERTIES.Syntax-->**GET DOCUMENT PROPERTIES** ( *document* ; *locked* ; *invisible* ; created on ; created at ; modified on ; modified at )<!-- END REF-->
<!--REF #_command_.GET DOCUMENT PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text | &#8594;  | ドキュメントの名前 |
| locked | Boolean | &#8592; | Trueの場合はロック、またはFalseの場合はアンロック |
| invisible | Boolean | &#8592; | Trueの場合は非表示、またはFalseは表示 |
| created on | 日付 | &#8592; | 作成日 |
| created at | 時間 | &#8592; | 作成時間 |
| modified on | 日付 | &#8592; | 更新日 |
| modified at | 時間 | &#8592; | 更新時間 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET DOCUMENT PROPERTIES.Summary-->GET DOCUMENT PROPERTIESコマンドは、引数*document*に渡した名前またはパス名を持つドキュメントに関する情報を返します。<!-- END REF-->

呼び出し後、以下の情報が返されます。

* ドキュメントがロックされていると、*locked*はTrueを返します。ロックされているドキュメントを修正することはできません。
* ドキュメントが非表示の場合、*invisible*はTrueを返します。
* *created on*と*created at*にはドキュメントが作成された日付と時間が返されます。
* *modified on*と*modified at*にはドキュメントが最後に修正された日付と時間が返されます。

#### 例題 

ドキュメントデータベースを作成し、そのデータベースに作成したすべてのレコードをディスク上のドキュメントに書き出す場合を想定します。データベースは定期的に更新されているため、ドキュメントが存在しなかったり、ドキュメントが最後に保存された後に、対応するレコードが修正されてしまった場合には、各ドキュメントを作成、再作成するようなデータ書き出しのアルゴリズムを記述します。そのため、ドキュメント(存在する場合には) を修正した日付と時間をそれに対応するレコードと比較する必要があります。これを図解するために、以下のテーブルを使用してその定義を表します。

![](../assets/en/commands/pict840812.en.png)

各レコードに日付と時間の両方を保存するのではなく、任意の日付時刻とレコードが保存された日付時間との間の経過数秒を示す"タイムスタンプ" の値を保存することができます (この例では1995年1月1日午前0時を使用しています) 。

この例では、\[Documents\]Creation Stampフィールドにレコードが最初に作成されたときのタイムスタンプがあり、\[Documents\]Modification Stampフィールドにレコードが最後に更新されたときのタイムスタンプがあります。

この後に示されているTime stampプロジェクトメソッドでは、引数が渡されない場合には、現在の日付と時間または特定の日付と時間としてタイムスタンプを計算します。

```4d
  //Time stamp プロジェクトメソッド
  //Time stamp { ( 日付 ; 時間 ) } -> 倍長整数
  //Time stamp { ( 日付 ; 時間 ) } -> 1995年1月1日から経過した数秒
 
 var $1;$vdDate : Date
 var $2;$vhTime : Time
 var $0 : Integer
 
 If(Count parameters=0)
    $vdDate:=Current date
    $vhTime:=Current time
 Else
    $vdDate:=$1
    $vhTime:=$2
 End if
 $0:=(($vdDate-!01/01/95!)*86400)+$vhTime
```

**注:** このメソッドを使用すると、日付と時間を1995/01/01 00:00:00から2063/01/19 03:14:07の間でコード化できるため、倍長整数の0から2^31 -1の範囲に対応できます。

一方、次に示されているTime stamp to dateおよびTime stamp to timeのプロジェクトメソッドでは、タイムスタンプに保存されている日付および時間を抽出することができます。

```4d
  //Time stamp to dateプロジェクトメソッド
  //Time stamp to date ( 倍長整数 ) -> 日付
  //Time stamp to date ( Time stamp ) -> 抽出する日付
 
 var $0 : Date
 var $1 : Integer
 
 $0:=!01/01/95!+($1\86400)
```
  
  
```4d
  //Time stamp to timeプロジェクトメソッド
  //Time stamp to time ( 倍長整数 ) -> 日付
  //Time stamp to time ( Time stamp ) -> 抽出する時間
 
 var $0 : Time
 var $1 : Integer
 
 $0:=Time(Time string(?00:00:00?+($1%86400)))
```

レコードの作成や更新の方法に関係なく、レコードのタイムスタンプが、正しく更新されるようにするには、\[Documents\]テーブルのトリガーを使用して、その規則を強制します。

```4d
  //[Documents]テーブルのトリガー
 
 Case of
    :(Trigger event=Save New Record Event)
       [Documents]Creation Stamp:=Time stamp
       [Documents]Modification Stamp:=Time stamp
    :(Trigger event=Save Existing Record Event)
       [Documents]Modification Stamp:=Time stamp
 End case
```

このトリガをデータベースに記述すると、以下のCREATE DOCUMENTATIONプロジェクトメソッドの作成に必要となるすべての準備が整います。ドキュメントの作成および更新の日付および時間の処理には**GET DOCUMENT PROPERTIES**コマンドおよび[SET DOCUMENT PROPERTIES](set-document-properties.md)コマンドを使用します。

```4d
  //CREATE DOCUMENTATIONプロジェクトメソッド
 
 C_STRING(255;$vsPath;$vsDocPathName;$vsDocName)
 var $vlDoc : Integer
 var $vbOnWindows;$vbDoIt;$vbLocked;$vbInvisible : Boolean
 var $vhDocRef;$vhCreatedAt;$vhModifiedAt : Time
 var $vdCreatedOn;$vdModifiedOn : Date
 
 If(Application type=4D Client)
  //4D Clientを実行している場合には、4D Clientが存在するクライアントマシンで
  //ドキュメントをローカルに保存します。
    $vsPath:=Long name to path name(Application file)
 Else
  //それ以外の場合には、データファイルが存在する位置にドキュメントを保存する
    $vsPath:=Long name to path name(Data file)
 End if
  //任意で"Documentation"と命名したディレクトリにあるドキュメントを保存する
 $vsPath:=$vsPath+"Documentation"+Char(Directory symbol)
  //このディレクトリが存在しない場合には、作成する
 If(Test path name($vsPath)#Is a folder)
    CREATE FOLDER($vsPath)
 End if
  //古いドキュメント、つまり、対応するレコードが削除されているドキュメントは
  //削除しなければならないため、既にあるドキュメントのリストを作成する
 ARRAY STRING(255;$asDocument;0)
 DOCUMENT LIST($vsPath;$asDocument)
  //[Documents] テーブルから全てのレコードを 選択する
 ALL RECORDS([Documents])
  //各レコードに対して
 $vlNbRecords:=Records in selection([Documents])
 $vlNbDocs:=0
 $vbOnWindows:=On Windows
 For($vlDoc;1;$vlNbRecords)
  // ディスクにドキュメントを(再) 作成しなければならないと想定する
    $vbDoIt:=True
  //ドキュメントの名前およびパス名を求める
    $vsDocName:="DOC"+String([Documents]Number;"00000")
    $vsDocPathName:=$vsPath+$vsDocName
  //このドキュメントは既に存在するか？
    If(Test path name($vsDocPathName+".HTM")=Is a document)
  //その場合には、ドキュメントのリストからドキュメントを除去します
  //このようにすると、ドキュメントが削除される場合があります
       $vlElem:=Find in array($asDocument;$vsDocName+".HTM")
       If($vlElem>0)
          DELETE FROM ARRAY($asDocument;$vlElem)
       End if
  //レコードが最後に更新された後で、ドキュメントが保存されたか？
       GET DOCUMENT PROPERTIES($vsDocPathName+".HTM";$vbLocked;$vbInvisible;$vdCreatedOn;$vhCreatedAt;$vdModifiedOn;$vhModifiedAt)
       If(Time stamp($vdModifiedOn;$vhModifiedAt)>=[Documents]Modification Stamp)
  //その場合には、ドキュメントを再作成する必要はない
          $vbDoIt:=False
       End if
    Else
  //ドキュメントは存在しないため、これら2つの変数をリセットし、ドキュメント
  //の最終的なプロパティを設定する前にこれらを計算する必要があることを確認できるようにする
       $vdModifiedOn:=!00/00/00!
       $vhModifiedAt:=?00:00:00?
    End if
  //ドキュメントを(再) 作成する必要があるのか？
    If($vbDoIt)
  //その場合には、更新されたドキュメントの数を増分する
       $vlNbDocs:=$vlNbDocs+1
  //ドキュメントが既に存在する場合には、削除する
       DELETE DOCUMENT($vsDocPathName+".HTM")
  //再度、作成する
       If($vbOnWindows)
          $vhDocRef:=Create document($vsDocPathName;"HTM")
       Else
          $vhDocRef:=Create document($vsDocPathName+".HTM")
       End if
       If(OK=1)
  //ここで、ドキュメントの内容を記述する
          CLOSE DOCUMENT($vhDocRef)
          If($vdModifiedOn=!00/00/00!)
  //ドキュメントは存在しなかったため、
  //更新の日付および時間を正しい値に設定する
             $vdModifiedOn:=Current date
             $vhModifiedAt:=Current time
          End if
  //ドキュメントのプロパティを変更し、作成の日付および時間が対応するレコードと等しくなるようにする
          SET DOCUMENT PROPERTIES($vsDocPathName+".HTM";$vbLocked;$vbInvisible;Time stamp to date([Documents]Creation Stamp);Time stamp to time([Documents]Creation Stamp);$vdModifiedOn;$vhModifiedAt)
       End if
    End if
  //現在実行中の処理を確認するために
    SET WINDOW TITLE("Processing Document "+String($vlDoc)+" of "+String($vlNbRecords))
    NEXT RECORD([Documents])
 End for
  //古いドキュメント、つまりまた$asDocument配列内にあるドキュメントを削除する
 For($vlDoc;1;Size of array($asDocument))
    DELETE DOCUMENT($vsPath+$asDocument{$vlDoc})
    SET WINDOW TITLE("Deleting obsolete document: "+Char(34)+$asDocument{$vlDoc}+Char(34))
 End for
  // We're done
 ALERT("Number of documents processed: "+String($vlNbRecords)+"\rNumber of documents updated: "+String($vlNbDocs)+"\rNumber of documents deleted: "+String(Size of array($asDocument)))
```

#### 参照 

[SET DOCUMENT PROPERTIES](set-document-properties.md)  