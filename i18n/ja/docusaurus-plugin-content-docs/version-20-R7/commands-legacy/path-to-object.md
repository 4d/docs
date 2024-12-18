---
id: path-to-object
title: Path to object
slug: /commands/path-to-object
displayed_sidebar: docs
---

<!--REF #_command_.Path to object.Syntax-->**Path to object** ( *path* {; *pathType*} ) : Object<!-- END REF-->
<!--REF #_command_.Path to object.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text | &#8594;  | パス名 |
| pathType | Integer | &#8594;  | パスシンタックスのタイプ:システム(デフォルト)あるいはPosix |
| 戻り値 | Object | &#8592; | パスの中身を説明したオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Path to object.Summary-->**Path to object** コマンドは*path* 引数に渡したパスの特定のプロパティを含んだオブジェクトを返します。<!-- END REF-->引数を省略した場合、コマンドはデフォルトで*path* 引数にはシステムセパレータ(Windows では"\\"、macOS では":" )を含んだシステムパスが渡されたものとみなします。Posix セパレータを含んだPosixパスを*path* 引数に渡した場合、あるいはパスのタイプを指定したい場合には、以下の定数のどれか一つを*pathType* 引数に渡します:

| 定数             | 型    | 値 | コメント                                                      |
| -------------- | ---- | - | --------------------------------------------------------- |
| Path is POSIX  | 倍長整数 | 1 | パスはPosixシンタックスを使用して表現されています。                              |
| Path is system | 倍長整数 | 0 | (デフォルト)パスはカレントシステム(WindowsあるいはmacOS)のシンタックスを使用して表現されています。 |

コマンドは、*path* 引数に渡されたパスを解析した結果のオブジェクトを返します。オブジェクトには以下のプロパティが含まれています:

| **プロパティ**    | **型** | **詳細**                                                              |
| ------------ | ----- | ------------------------------------------------------------------- |
| parentFolder | テキスト  | パスのディレクトリ情報。最後の文字は必ずフォルダセパレータになります。                                 |
| name         | テキスト  | 指定されたパスの最後の、拡張子を含まないファイル名あるいはフォルダ名。                                 |
| extension    | テキスト  | 最終的なファイル名あるいはフォルダ名の拡張子。必ず"."(ドット)で始まりますが、拡張子がない場合には" "(空の文字列)になります。 |
| isFolder     | ブール   | 名前がフォルダ名である場合にはTrue、それ以外の場合にはFalseになります(デフォルトはFalseです)。             |

*path* 引数に渡したパスの、最後の文字がパスタイプに対応するセパレータ(例えばWindows 上で"\\" など)だった場合、そのパスはフォルダパスだとみなされます。それ以外の場合には、渡されたパスはファイル名であるとみなされます。  
拡張子は、空でなければ、パスが示すのがファイルかフォルダかに関わらず、返されます。どちらの場合にしても、完全な名前を取得するためには名前と拡張子を連結させる必要があります。

**Path to object** は、文字列を受け取るだけであるという点に注意してください。パスが指定されたパスタイプに対して有効であるかをチェックすることはしませんし、指定されたファイルあるいはフォルダが実際に存在するかどうかもチェックはしません。

#### 例題 1 

以下の例題では、ファイルパスに対する様々な結果を示しています:

```4d
 var $o : Object
 $o:=Path to object("C:\\first\\second\\fileZ") // Windows
  //$o.parentFolder="C:\\first\\second\\"
  //$o.name="fileZ"
  //$o.extension=""
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("osx:Users:john:Documents:Comments.text)  //macOS
  //$o.parentFolder="osx:Users:john:Documents:"
  //$o.name="Comments"
  //$o.extension=".text"
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("\\images\\jan\\pict1.png";Path is system) //Windows
  //$o.parentFolder="\\images\\jan\\"
  //$o.name="pict1"
  //$o.extension=".png"
  //$o.isFolder=false
```

フォルダへのパスを定義する場合を考えます:

```4d
 var $o : Object
 $o:=Path to object("osx:Users:oscargoldman:Desktop:Databases:") //macOS
  //$o.parentFolder="osx:Users:oscargoldman:Desktop:"
  //$o.name="Databases"
  //$o.extension=""
  //$o.isFolder=True
```

```4d
 var $o : Object
 $o:=Path to object("C:\\4D\\Main\\216410\\64\\4D\\4D.user\\")  //Windows
  //$o.parentFolder="C:\\4D\\Main\\216410\\64\\4D\\"
  //$o.name="4D"
  //$o.extension=".user"
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("/first/second.bundle/";Path is POSIX)
  //$o.parentFolder="/first/"
  //$o.name="second"
  //$o.extension=".bundle"
  //$o.isFolder=true
```

パスがルートディレクトリ出会った場合、*parentFolder* は空になります:

```4d
 var $o : Object
 $o:=Path to object("C:\\")  //Windows
  //$o.parentFolder=""
  //$o.name="c:"
  //$o.extension=""
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("osx:") //macOS
  //$o.parentFolder=""
  //$o.name="osx"
  //$o.extension=""
  //$o.isFolder=true
```

パスの最後の部分が".something"のような形であった場合、それはファイル名であるとみなされます:

```4d
 var $o : Object
 $o:=Path to object("/folder/.invisible";Path is POSIX)
  //$o.parentFolder="/folder/"
  //$o.name=".invisible"
  //$o.extension=""
  //$o.isFolder=false
```

#### 例題 2 

このコマンドを[Object to path](object-to-path.md) コマンドと組み合わせることでパスの中のファイルの名前を変更することができます:

```4d
 var $o : Object
 var $path : Text
 $o:=Path to object("C:\\4D\\resources\\images\\4D.jpg")
  //$o.parentFolder="C:\\4D\\resources\\images\\"
  //$o.name="4D"
  //$o.extension=".jpg"
  //$o.isFolder=false
 
 $o.name:="4DOld"
 $path:=Object to path($o)
  //$path="C:\4D\resources\images\4DOld.jpg"
```

#### 例題 3 

パス内に含まれるサブフォルダの数を知りたい場合を考えます:

```4d
 var $o : Object
 var $path : Text
 var $vCount : Integer
 $path:=Select folder //ユーザーにフォルダを選択させる
 $o:=Path to object($path)
 Repeat
    $o:=Path to object($o.parentFolder)
    $vCount:=$vCount+1
 Until($o.parentFolder="")
 ALERT("The path depth is: "+String($count))
```

#### 参照 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Convert path system to POSIX](convert-path-system-to-posix.md)  
[File](file.md)  
[Folder](folder.md)  
[Object to path](object-to-path.md)  
[Test path name](test-path-name.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1547 |
| スレッドセーフである | &check; |


