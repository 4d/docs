---
id: volume-attributes
title: VOLUME ATTRIBUTES
slug: /commands/volume-attributes
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME ATTRIBUTES.Syntax-->**VOLUME ATTRIBUTES** ( *volume* ; *size* ; *used* ; *free* )<!-- END REF-->
<!--REF #_command_.VOLUME ATTRIBUTES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| volume | Text | &#8594;  | ボリュームの名前 |
| size | Real | &#8592; | ボリュームのサイズ(バイト単位) |
| used | Real | &#8592; | 使用サイズ(バイト単位) |
| free | Real | &#8592; | 空きサイズ(バイト単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.VOLUME ATTRIBUTES.Summary-->VOLUME ATTRIBUTESコマンドは、引数*volume*に渡した名前を持つボリュームのサイズ、使用サイズおよび空きサイズをバイト単位で表わして返します。<!-- END REF-->*volume*がマウントされていないリモートボリュームを示す場合、OK変数に0が代入され、3つの引数は-1を返します。

#### 例題 

このアプリケーションには、夜間や週末に実行し、ディスク上に大規模な中間ファイルを格納するバッチ処理がいくつか含まれています。このプロセスをできる限り自動的かつ柔軟にするには、中間ファイルを格納するために十分な空きサイズを持つ最初のボリュームを自動的に見つけるルーチンを作成します。例えば以下のようなプロジェクトメソッドを作成します。

```4d
  // Find volume for space プロジェクトメソッド
  // Find volume for space ( 実数 ) -> 文字列
  // Find volume for space ( 必要なサイズ ) -> ボリューム名または空の文字列
 
 C_STRING(31;$0)
 C_STRING(255;$vsDocName)
 var $vlNbVolumes;$vlVolume : Integer
 var $1;$vlSize;$vlUsed;$vlFree : Real
 var $vhDocRef : Time
 
  //戻り値を初期化する
 $0:=""
  //エラー阻止メソッドを使用して、すべてのI/O処理を保護する
 ON ERR CALL("ERROR METHOD")
  //ボリュームのリストを取得する
 ARRAY STRING(31;$asVolumes;0)
 gError:=0
 VOLUME LIST($asVolumes)
 If(gError=0)
  //Windowsで実行している場合、(通常の) 2つのフロッピーディスクドライブは省略する
    If(On Windows)
       $vlVolume:=Find in array($asVolumes;"A:\\")
       If($vlVolume>0)
          DELETE FROM ARRAY($asVolumes;$vlVolume)
       End if
       $vlVolume:=Find in array($asVolumes;"B:\\")
       If($vlVolume>0)
          DELETE FROM ARRAY($asVolumes;$vlVolume)
       End if
    End if
    $vlNbVolumes:=Size of array($asVolumes)
  //それぞれのボリュームに対して
    For($vlVolume;1;$vlNbVolumes)
  //サイズ、使用サイズ、空きサイズを取得する
       gError:=0
       VOLUME ATTRIBUTES($asVolumes{$vlVolume};$vlSize;$vlUsed;$vlFree)
       If(gError=0)
  //空きサイズは十分にありますか(必要なサイズに32KBを加えたサイズ) ?
          If($vlFree>=($1+32768))
  //もし十分であれば、ボリュームがアンロックされているかどうかをチェック...
             $vsDocName:=$asVolumes{$vlVolume}+Char(Directory symbol)+"XYZ"+String(Random)+".TXT"
             $vhDocRef:=Create document($vsDocName)
             If(OK=1)
                CLOSE DOCUMENT($vhDocRef)
                DELETE DOCUMENT($vsDocName)
  //すべて問題がなければ、ボリュームの名前を返す
                $0:=$asVolumes{$vlVolume}
                $vlVolume:=$vlNbVolumes+1
             End if
          End if
       End if
    End for
 End if
 ON ERR CALL("")
```

このプロジェクトメソッドがアプリケーションに追加されると、例えば、以下のように記述することができます。

```4d
 $vsVolume:=Find volume for space(100*1024*1024)
 If($vsVolume#"")
  // Continue
 Else
    ALERT("A volume with at least 100 MB of free space is required!")
 End if
```

#### 参照 

[VOLUME LIST](volume-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 472 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |


