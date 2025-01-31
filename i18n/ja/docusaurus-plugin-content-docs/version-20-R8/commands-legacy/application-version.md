---
id: application-version
title: Application version
slug: /commands/application-version
displayed_sidebar: docs
---

<!--REF #_command_.Application version.Syntax-->**Application version** {( *buildNum* {; *} )} : Text<!-- END REF-->
<!--REF #_command_.Application version.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| buildNum | Integer | &#8592; | ビルド番号 |
| * | 演算子 | &#8594;  | 指定した場合、ロングバージョン番号 指定しなかった場合、ショートバージョン番号 |
| 戻り値 | Text | &#8592; | バージョン番号のエンコードされた文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Application version.Summary-->**Application version** コマンドは、現在使用している4D環境のバージョン番号を表すエンコードされた文字列を返します。<!-- END REF--> 

引数オプション\*を指定しない場合、以下のようにフォーマットされた4文字の文字列を返します。

| 文字位置 | 説明      |
| ---- | ------- |
| 1-2  | バージョン番号 |
| 3    | "R" 番号  |
| 4    | リビジョン番号 |

引数オプション\*を指定した場合、以下のようにフォーマットされた8文字の文字列を返します:

| 文字位置                     | 説明           |
| ------------------------ | ------------ |
| 1                        | "F" は最終バージョン |
| "B" はベータバージョン            |              |
| それ以外の文字は、4Dの内部バージョンを意味する |              |
| 2-3-4                    | 4Dの内部コンパイル番号 |
| 5-6                      | バージョン番号      |
| 7                        | "R" 番号       |
| 8                        | リビジョン番号      |

**互換性に関する注意(4D v14)**

4D v14以降、バージョンのナンバリングが変更になりました:

* **"R" 番号**は4Dの"R" ヴァージョンの番号です。例えばR3であれば番号は3になります(バグフィックス版である0を含みます)。
* **リビジョン番号**は、4Dのバグフィックスの番号です("R"版である0を含みます)。

4Dの以前のバージョンでは、"R"番号はアップデート番号でした。これはリビジョンをあらわし、リビジョン番号自身は常に0でした。

短いバージョン番号の例です:

| **バージョン** | **返される値** |                         |
| --------- | --------- | ----------------------- |
| 4D v13.1  | "1310"    | *以前のナンバリングシステムに準拠*      |
| 4D v14 R2 | "1420"    | リリース R2                 |
| 4D v14 R3 | "1430"    | リリース R3                 |
| 4D v14.1  | "1401"    | 4D v14の最初のバグフィックスバージョン  |
| 4D v14.2  | "1402"    | 4D v14の二つ目のバグフィックスバージョン |

長いバージョン番号の例です:

| **バージョン**       | **返される値**  |
| --------------- | ---------- |
| 4D v12.5 beta   | "B0011250" |
| 4D v14 R2 beta  | "B0011420" |
| 4D v14 R3 final | "F0011430" |
| 4D v14.1 beta   | "B0011401" |

**Application version** コマンドはオプションの*buildNum* 引数に追加の情報、お使いの4Dのビルド番号を返すことができます。これは内部的なコンパイル番号で、4Dの技術チームにお使いの4Dの環境について伝える際に使用できます。

**注**: 4D Volume Licenceがマージされたアプリケーションにおいては 返される "build" 番号に意味はありません。この状況ではバージョン情報は開発者により管理されます。

#### 例題 1 

次の例は、4D環境のバージョン番号を表示します。   

```4d
 $vs4Dversion:=Application version
 ALERT("使用しているバージョンは "+String(Num(Substring($vs4Dversion;1;2)))+"."+
 $vs4Dversion[[3]]+"."+$vs4Dversion[[4]])
```

#### 例題 2 

以下の例は、最終版の4Dを使用しているかどうかを検査します。

```4d
 If(Substring(Application version(*);1;1)#"F")
    ALERT("製品版の4Dおよびデータベースを使用しているかを確認してください。")
    QUIT 4D
 End if
```

#### 例題 3 

コマンドから返されたアプリケーションの短いバージョン番号の値を使用して4Dアプリケーションのリリース名を表示したい場合を考えます。以下の様に書くことが出来ます:

```4d
 var $Lon_build : Integer
 var $Txt_info;$Txt_major;$Txt_minor;$Txt_release;$Txt_version : Text
 
 $Txt_version:=Application version($Lon_build)
 
 $Txt_major:=$Txt_version[[1]]+$Txt_version[[2]] //バージョン番号、例えば14
 $Txt_release:=$Txt_version[[3]] //Rx
 $Txt_minor:=$Txt_version[[4]] //.x
 
 $Txt_info:="4D v"+$Txt_major
 If($Txt_release="0") //4D v14.x
    $Txt_info:=$Txt_info+Choose($Txt_minor#"0";"."+$Txt_minor;"")
 
 Else //4D v14 Rx
    $Txt_info:=$Txt_info+" R"+$Txt_release
 End if
```

#### 参照 

[Application type](application-type.md)  
[Version type](version-type.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 493 |
| スレッドセーフである | &check; |


