---
id: System_Documents_theme
title: システムドキュメント
sidebar_label: システムドキュメント
slug: /commands/theme/System-Documents
---

|                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.Append document.Syntax -->](../../commands/append-document)<br/>                           |
| [<!-- INCLUDE #_command_.CLOSE DOCUMENT.Syntax -->](../../commands/close-document)<br/>                             |
| [<!-- INCLUDE #_command_.Convert path POSIX to system.Syntax -->](../../commands/convert-path-posix-to-system)<br/> |
| [<!-- INCLUDE #_command_.Convert path system to POSIX.Syntax -->](../../commands/convert-path-system-to-posix)<br/> |
| [<!-- INCLUDE #_command_.COPY DOCUMENT.Syntax -->](../../commands/copy-document)<br/>                               |
| [<!-- INCLUDE #_command_.CREATE ALIAS.Syntax -->](../../commands/create-alias)<br/>                                 |
| [<!-- INCLUDE #_command_.Create document.Syntax -->](../../commands/create-document)<br/>                           |
| [<!-- INCLUDE #_command_.CREATE FOLDER.Syntax -->](../../commands/create-folder)<br/>                               |
| [<!-- INCLUDE #_command_.DELETE DOCUMENT.Syntax -->](../../commands/delete-document)<br/>                           |
| [<!-- INCLUDE #_command_.DELETE FOLDER.Syntax -->](../../commands/delete-folder)<br/>                               |
| [<!-- INCLUDE #_command_.DOCUMENT LIST.Syntax -->](../../commands/document-list)<br/>                               |
| [<!-- INCLUDE #_command_.Document to text.Syntax -->](../../commands/document-to-text)<br/>                         |
| [<!-- INCLUDE #_command_.FOLDER LIST.Syntax -->](../../commands/folder-list)<br/>                                   |
| [<!-- INCLUDE #_command_.GET DOCUMENT ICON.Syntax -->](../../commands/get-document-icon)<br/>                       |
| [<!-- INCLUDE #_command_.Get document position.Syntax -->](../../commands/get-document-position)<br/>               |
| [<!-- INCLUDE #_command_.GET DOCUMENT PROPERTIES.Syntax -->](../../commands/get-document-properties)<br/>           |
| [<!-- INCLUDE #_command_.Get document size.Syntax -->](../../commands/get-document-size)<br/>                       |
| [<!-- INCLUDE #_command_.Localized document path.Syntax -->](../../commands/localized-document-path)<br/>           |
| [<!-- INCLUDE #_command_.MOVE DOCUMENT.Syntax -->](../../commands/move-document)<br/>                               |
| [<!-- INCLUDE #_command_.Object to path.Syntax -->](../../commands/object-to-path)<br/>                             |
| [<!-- INCLUDE #_command_.Open document.Syntax -->](../../commands/open-document)<br/>                               |
| [<!-- INCLUDE #_command_.Path to object.Syntax -->](../../commands/path-to-object)<br/>                             |
| [<!-- INCLUDE #_command_.RESOLVE ALIAS.Syntax -->](../../commands/resolve-alias)<br/>                               |
| [<!-- INCLUDE #_command_.Select document.Syntax -->](../../commands/select-document)<br/>                           |
| [<!-- INCLUDE #_command_.Select folder.Syntax -->](../../commands/select-folder)<br/>                               |
| [<!-- INCLUDE #_command_.SET DOCUMENT POSITION.Syntax -->](../../commands/set-document-position)<br/>               |
| [<!-- INCLUDE #_command_.SET DOCUMENT PROPERTIES.Syntax -->](../../commands/set-document-properties)<br/>           |
| [<!-- INCLUDE #_command_.SET DOCUMENT SIZE.Syntax -->](../../commands/set-document-size)<br/>                       |
| [<!-- INCLUDE #_command_.SHOW ON DISK.Syntax -->](../../commands/show-on-disk)<br/>                                 |
| [<!-- INCLUDE #_command_.Test path name.Syntax -->](../../commands/test-path-name)<br/>                             |
| [<!-- INCLUDE #_command_.TEXT TO DOCUMENT.Syntax -->](../../commands/text-to-document)<br/>                         |
| [<!-- INCLUDE #_command_.VOLUME ATTRIBUTES.Syntax -->](../../commands/volume-attributes)<br/>                       |
| [<!-- INCLUDE #_command_.VOLUME LIST.Syntax -->](../../commands/volume-list)<br/>                                   |

:::info 互換性

このテーマの旧式のコマンドは、通常は[*File および Folder*](./File_and_Folder.md) テーマ、およびそれに割り当てられた[File](../../API/FileClass.md)、[Folder](../../API/FolderClass.md)、 [ZipFile](../../API/ZipFileClass.md) そして [ZipFolder](../../API/ZipFolderClass.md) クラスを使用して有効的に置き換えることができます。これらのコマンドによりファイルやフォルダをオブジェクトとして扱うことができます。

:::

## ドキュメント参照番号

[`Open document`](../../commands/open-document)、 [`Create document`](../../commands/create-document) そして [`Append document`](../../commands/append-document) コマンドを使用してドキュメントを開きます。 ドキュメントを開いたら、[`RECEIVE PACKET`](../../commands/receive-packet) および [`SEND PACKET`](../../commands/send-packet) などのコマンドを使用して、ドキュメントからの/への文字の読み出し、書き込みができます。 ドキュメントでの作業が終了したら、通常 `CLOSE DOCUMENT` コマンドを使用してドキュメントを閉じます。

全ての開かれたドキュメントは、これらのコマンドから返された**ドキュメント参照番号** (*DocRef*) を使用して参照されます。 *DocRef* は開かれたドキュメントを固有に識別します。 これは正式には**時間**タイプの式です。 開かれたドキュメントを操作する全てのコマンドは、引数として*DocRef* を受け取ります。 誤った*DocRef* をこれらのコマンドの１つに渡すと、ファイルマネージャエラーが発生 します。

ドキュメントは、一つのプロセスにつき一つのドキュメントのみ**読み/書き**モードで開くことができます。 **読み込み専用** モードでは、単一のプロセス内で複数のドキュメントを開くこともできますし、複数のプロセスが複数のドキュメントを必要な数だけ開くこともできます。ただし読み/書きモードでは、一度に同じドキュメントを2つ開くことはできません。 `Create document` と `Append document` コマンドは、自動的にドキュメントを読み/書きモードで開きます。 `Open document` コマンドを使用する場合のみ、開くモードを選択できます。

:::note

コマンドが[プリエンプティブプロセス](../../Develop/preemptive.md) から呼び出された場合、その*DocRef* 参照はそのプリエンプティブプロセスからしか使用することはできません。 コマンドがコオペラティブプロセスからコールされた場合、その *DocRef* 参照は別のコオペラティブプロセスでも使用可能です。

:::

## Documentシステム変数

[`Open document`](../../commands/open-document)、 [`Create document`](../../commands/create-document)、 [`Append document`](../../commands/append-document`) および [`Select document`](../../commands/select-document) コマンドを使用すると、標準的なファイルを開くまたは保存するダイアログボックス経由でドキュメントへアクセスすることができます。 標準ダイアログを通してドキュメントにアクセスすると、[`Document` システム変数](../../Concepts/variables.md#system-variables) にドキュメントの完全なパス名が返されます。 このシステム変数は、コマンドの引数リストに表示される引数*document* と区別されなければなりません。

## 相対パス名および絶対パス名について

この章のルーチンのほとんどは、**ドキュメント名**、**相対パス名**、あるいは**絶対パス名**を受け付けます:

- **相対パス名** はディスク上の任意のディレクトリを起点とし、そこから目的のファイルやフォルダーまでの位置関係を記述するものです。 ドキュメント名のみを渡した場合、それは相対パス名を使用しているとみなされます。 4Dの場合、通常相対パスの起点は[project フォルダー](../../Project/architecture.md#project-フォルダー),、つまり.project ファイルが格納されているフォルダーとなります。 相対パス名は異なる環境に対してアプリケーションを配布する場合に特に有用です。
- **絶対パス名** はボリュームのルートを起点として場所を記述します。データベースフォルダーの所在場所に依存しません。

コマンドに渡されるパス名が相対・絶対どちらで解釈されるべきかを決定するため、4Dは各プラットフォームごとに特定のアルゴリズムを適用します。

### Windows

- パス名が二文字だけで構成され、二文字目がコロンの場合 ':'
- パス名の二文字目と三文字目がそれぞれ':'とバックスラッシュ (円マーク) の場合
- パス名が "\\" で始まる場合
- これらの場合にはパス名は絶対パスと解釈されます。

その他のケースはすべて相対パスと解釈されます。

[`CREATE FOLDER`](../../commands/create-folder) コマンドの例題:

```4d
 CREATE FOLDER("lundi") // 相対パス
 CREATE FOLDER("\Monday") // 相対パス
 CREATE FOLDER("\Monday\Tuesday") // 相対パス
 CREATE FOLDER("c:") // 絶対パス
 CREATE FOLDER("d:\Monday") // 絶対パス
 CREATE FOLDER("\\srv-Internal\temp") // 絶対パス
```

:::note

4D のコードエディターで[エスケープシークエンス](../../Concepts/quick-tour.md#escape-sequences) はの使用が可能です。 エスケープシークエンスはバックスラッシュ`\` (日本語フォント環境では円マークから始まり、その後に文字が続きます。 たとえば、`\t` はTab 文字のエスケープシークエンスです。

`\` 文字は、Windows においてはパス名の区切り文字としても使用されます。 ほとんどの場合において 4D は、シングルバックスラッシュ `\` をダブルバックスラッシュ `\\` に置き換えることにより、コードエディターに入力された Windows のパス名を正確に判断します。 たとえば、`C:\Folder` は `C:\\Folder` となります。

しかし、`C:\MyDocuments\New` と入力した場合、4D は `C:\\MyDocuments\New` と表示します。 この場合、二つ目の `\` は、誤って `\N` (存在するエスケープシーケンス) と認識されています。 従って、4D のエスケープシーケンスで使用される文字の前にバックスラッシュを挿入したいときは、`\\` となるよう手入力しなければなりません。

:::

### macOS

- パス名がディレクトリ区切り文字 ':' で始まる場合
- パス名がディレクトリ区切り文字を含まない場合
- これらの場合にはパス名は相対パスと解釈されます。

それ以外のケースはすべて絶対パスと見なされます。

[`CREATE FOLDER`](../../commands/create-folder) コマンドの例題:

```4d

 CREATE FOLDER("Monday") // 相対パス
 CREATE FOLDER("macintosh hd:") // 絶対パス
 CREATE FOLDER("Monday:Tuesday") // 絶対パス (Mondayがボリューム名)
 CREATE FOLDER(":Monday:Tuesday") // 相対パス
```

:::note

[コンセプトの章内の**相対パス及び絶対パスについて**](../../Concepts/paths.md#相対パス名および絶対パス名について) も参照してください。

:::

## パス名の中身の抽出

[`Path to object`](../../commands/path-to-object) および [`Object to path`](../../commands/object-to-path) コマンドを使用することでパス名の中身を管理することができます。 具体的には、パス名からは以下のものを取得することができます:

- ファイル名
- 親フォルダパス
- ファイルあるいはフォルダの拡張子。