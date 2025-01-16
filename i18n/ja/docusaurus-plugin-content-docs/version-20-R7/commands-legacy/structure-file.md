---
id: structure-file
title: Structure file
slug: /commands/structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Structure file.Syntax-->**Structure file** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Structure file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | ホストデータベースのストラクチャファイルを返す |
| 戻り値 | Text | &#8592; | データベースストラクチャファイルのパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Structure file.Summary-->**Structure file** コマンドは、現在使用しているデータベースのストラクチャファイルのパス名を返します。<!-- END REF-->ファイルのパス名を返します。
* プロジェクトモードのデータベースでは、コマンドは**.** **4dproject** ファイルのパス名を返します。

**注:** データベースがコンパイルされて4D Volume Desktopに統合されている場合、WindowsおよびmacOSでこのコマンドはアプリケーションファイル(実行可能なアプリケーション)のパス名を返します。macOS上では、このファイルはソフトウェアパッケージの中の\[Contents:Mac OS\]フォルダに置かれます。これは以前のメカニズムに起因するものであり、互換性のため保持されています。ソフトウェアパッケージ自体のフルアクセスパスを取得したい場合には、[Application file](application-file.md) コマンドの利用をお勧めします。方法としては、[Application type](application-type.md) コマンドを使用してアプリケーションタイプを調べた後、その結果に応じて**Structure file** または[Application file](application-file.md) を実行します。

**警告：** 4Dをリモートモードで使用中にこの関数を呼び出すと、パス名ではなくストラクチャファイル/プロジェクトファイルの名前だけが返されます。

オプションの *\** 引数はコンポーネントを使用したアーキテクチャで有用です。コマンドが呼び出されたコンテキストで、ホストデータベースまたはコンポーネントどちらのストラクチャファイルのパス名を取得するか指定するために、使用できます:

* コマンドがコンポーネントから呼び出された場合:  
   * *\** 引数が渡されていると、コマンドはホストデータベースのストラクチャファイルのパス名を返します。  
   * *\** 引数が渡されないと、コマンドはコンポーネントのストラクチャファイルのパス名を返します。  
   コンポーネントのストラクチャファイルは、データベースの“Components”フォルダに置かれた.4dbまたは.4dcファイルに対応します。しかしコンポーネントはエイリアス/ショートカット、または.4dbaseフォルダ/パッケージでインストールすることもできます:  
         * エイリアス/ショートカットでインストールされたコンポーネントの場合、コマンドはオリジナルの.4dbまたは.4dcファイルのパスを返します (エイリアスやショートカットは解決されます)。  
         * .4dbaseフォルダ/パッケージでインストールされたコンポーネントの場合、コマンドはこのフォルダ/パッケージ内の.4dbまたは.4dcファイルのパスを返します。
* ホストデータベースのメソッドからコマンドが呼ばれた場合、常にホストデータベースのストラクチャファイル/プロジェクトファイルのパス名を返します。*\** 引数は無視されます。

#### 例題 1 

以下の例は、現在使用中のストラクチャファイルの名前と配置場所を表示します:   
  
```4d
 var $fullpath : Object
 var $name;$path : Text
 If(Application type#4D Remote mode)
    $fullpath:=Path to object(Structure file)
    $name:=$fullpath.name
    $path:=$fullpath.parentFolder
    ALERT("You are currently using the database "+Char(34)+$name+Char(34)+" located at "+Char(34)+$path+Char(34)+".")
 Else
    ALERT("You are connected to the database "+Char(34)+Structure file+Char(34))
 End if
```

#### 例題 2 

以下の例題は、メソッドがコンポーネントから呼び出されているか知るために使用できます:

```4d
 var $0 : Boolean
 $0:=(Structure file#Structure file(*))
  // $0=メソッドがコンポーネントから呼び出されている場合、True
```

#### 参照 

[Application file](application-file.md)  
[COMPONENT LIST](component-list.md)  
[Data file](data-file.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 489 |
| スレッドセーフである | &check; |


