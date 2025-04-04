---
id: set-external-data-path
title: SET EXTERNAL DATA PATH
slug: /commands/set-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.SET EXTERNAL DATA PATH.Syntax-->**SET EXTERNAL DATA PATH** ( *aField* ; *path* )<!-- END REF-->
<!--REF #_command_.SET EXTERNAL DATA PATH.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Text, Blob, Picture | &#8594;  | ストレージの場所を設定するフィールド |
| path | Text, Integer | &#8594;  | 外部ストレージのパス名およびファイル名、または0 = ストラクチャー定義を使用する1 = デフォルトフォルダーを使用する |

<!-- END REF-->

## 説明 

<!--REF #_command_.SET EXTERNAL DATA PATH.Summary-->**SET EXTERNAL DATA PATH**コマンドは*aField*引数に渡したフィールドの、カレントレコードの、外部ストレージの場所を設定あるいは変更します。<!-- END REF-->

4Dではテキスト、BLOB、およびピクチャー型のフィールドデータをデータファイルの*外部* に格納することができます。この機能に関する詳細な説明は*Design Referenceマニュアルを参照してください。*

このコマンドで指定される設定は、カレントレコードがディスクに保存されるときにのみ適用されます。カレントレコードがキャンセルされると、コマンドはなにも行いません。アプリケーションストラクチャーに設定されたパラメー ターは変更されません。

*path*にはカスタムパス名または自動的な場所を指定する定数いずれかを渡すことができます:

* **ファイルへのカスタムパス名**  
この場合外部ストレージをカスタムモードで使用することになります。特定の4Dデータベース機能はこのモードを自動では利用できません (Design Reference マニュアル参照)。特に、ファイルの作成と変更は自分自身で管理する必要があります。  
相 対パス、または絶対パスを渡す事ができます。絶対パスの場合、パス内にストレージファイルの名前と拡張子を含んでいる必要があります(相対パスを指定する 場合、文字列の最初に"../" (Windows) または "..:" (macOS) を挿入します)。拡張子は実際のデータ型と一致 しなければなりません (保存時に自動で変換されることはありません)。システムシンタックスを使用しなければなりません。データベース外部ファイル (*databaseName*.ExternalData) のデフォルトフォルダーを含むどのフォルダーでも指定できます。この場合、これらのファイルはデータベースが保存されるときに含まれます。  
*path* 引数によって指定されたファイルはコマンド実行時に存在しかつアクセス可能である必要があります。  
パスが無効である(ファイルまたはフォルダが見つからない)場合、*path* 引数が絶対パスとして定義されていた場合に限りエラーが返されます。*path* 引数に相対パスが指定されていた場合、ファイルが見つからなくてもエラーは返されないので、実際にそのパスが有効かどうかは自分で確かめる必要があります。  
外部ファイルをデータファイルと同階層か、そのサブフォルダーに保存する場合、4Dは指定されたパスがデータファイルに対し相対的であるとみなし、データファイルフォルダーが移動されたり名称変更されたりした場合でもそのリンクを保守します。  
こ れにより複数のレコードで同じ外部ファイルを共有することが可能な点に留意してください。この外部ファイルに対して行われた変更はすべてのレコードに対し て有効です。この場合、複数のプロセスが同時に同じフィールドを変更できるならば、セマフォーを使用して同時アクセスを制限しなければなりません。そうで なければ外部ファイルが損傷するリスクがあります。
* **自動的な場所**  
*Data File Maintenance*テーマの、以下の2つの定数を指定できます:  

| 定数                       | 型    | 値 | コメント                                                                                                                                           |  
| ------------------------ | ---- | - | ---------------------------------------------------------------------------------------------------------------------------------------------- |  
| Use default folder       | 倍長整数 | 1 | 引数として渡されたフィールドのデータは*databaseName*.ExternalDataという名前のデフォルトフォルダーに保存されます。このフォルダーはデータファイルと同歳層に作成されます。このモードでは、外部データを、それがデータファイル内にあるときと同様に、4Dが管理します。 |  
| Use structure definition | 倍長整数 | 0 | 4Dはストラクチャーに設定されたフィールドデータの格納設定を使用します。外部ストレージから内部ストレージに変更しても、外部ファイルは削除されません。                                                                     |

一度コマンドが実行されると、4Dは自動でレコードフィールドとディスク上のファイルとのリンクを保守します。 *path* 引数を変更したい場合を除き、再度コマンドを実行する必要はありません。 4Dがフィールドのデータに(ストレージファイルの名前が変更された、ファイルが削除された、パスが変更された、等で)アクセスできなくなると、この フィールドは空になりますがエラーは生成されません。

**注:** **SET EXTERNAL DATA PATH**コマンドは4Dローカルモードまたは4D Serverでのみ実行できます。リモートモードの4Dではなにも行いません。

## 例題 

ピクチャーフィールド内の既存のファイルを、データベースのデータファイル外に相対パスを使って保存したい場合を考えます:

```4d
 CREATE RECORD([Photos])
 [Photos]Name:="Paris.png"
 SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)
  //"/custom/Paris.png" ファイルはストラクチャーファイルのすぐ隣になければならない
 SAVE RECORD([Photos])
```

## 参照 

[Get external data path](get-external-data-path.md)  
[RELOAD EXTERNAL DATA](reload-external-data.md)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1134 |
| スレッドセーフである | &check; |


