---
id: MailAttachmentClass
title: MailAttachment
---

Attachment オブジェクトによって、[`Email`](EmailObjectClass.md) オブジェクト内のファイルを参照することができます。 MailAttachment オブジェクトは [`MAIL New attachment`](../commands/mail-new-attachment.md) コマンドによって作成されます。

### Attachment オブジェクト

Attachment オブジェクトは、次の読み取り専用プロパティや、関数を提供します:

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<br/><!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<br/><!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)<br/><!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)<br/><!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)<br/><!-- INCLUDE #MailAttachmentClass.size.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)<br/><!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## 4D.MailAttachment.new()

<details><summary>履歴</summary>

| リリース  | 内容                                                                                 |
| ----- | ---------------------------------------------------------------------------------- |
| 19 R2 | 4D.File, 4D.ZipFile, 4D.Blob の受け入れ |

</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| 引数          | 型                                 |                             | 説明                                                                                     |
| ----------- | --------------------------------- | :-------------------------: | -------------------------------------------------------------------------------------- |
| file        | 4D.File           |              ->             | 添付ファイル                                                                                 |
| zipFile     | 4D.ZipFile        |              ->             | 添付 Zipファイル                                                                             |
| blob        | 4D.Blob           |              ->             | 添付を格納した BLOB                                                                           |
| path        | Text                              |              ->             | 添付ファイルのパス                                                                              |
| name        | Text                              |              ->             | メールクライアントが添付を指定するのに使用する名前 + 拡張子                                                        |
| cid         | Text                              |              ->             | 添付の ID (HTMLメッセージのみ)、あるいは cid が不要な場合は "" (空の文字列) |
| type        | Text                              |              ->             | content-type ヘッダーの値                                                                    |
| disposition | Text                              |              ->             | content-disposition ヘッダーの値: "inline" あるいは "attachment"                 |
| 戻り値         | 4D.MailAttachment | <- | Attachment オブジェクト                                                                      |

<!-- END REF -->

#### 説明

`4D.MailAttachment.new()` 関数は、<!-- REF #4D.MailAttachment.new().Summary -->`4D.MailAttachment` 型の新規オブジェクト作成して返します<!-- END REF -->。 この関数の機能は、[`MAIL New attachment`](../commands/mail-new-attachment.md) コマンドと同一です。

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### 説明

`.cid` プロパティは、 <!-- REF #MailAttachmentClass.cid.Summary --> 添付ファイルの ID<!-- END REF -->を格納します。 このプロパティは HTMLメッセージでのみ使用されます。 このプロパティがない場合、ファイルは単なる添付 (リンク) として管理されます。

## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### 説明

`.disposition` プロパティは、<!-- REF #MailAttachmentClass.disposition.Summary -->`Content-Disposition` ヘッダーの値<!-- END REF -->を格納します。 二つの値が利用可能です:

- "inline": 添付ファイルはメッセージコンテンツ内に、"cid"の場所にレンダリングされます。 レンダリングの結果はメールクライアントによって異なります。
- "attachment": 添付ファイルはメッセージ内でリンクとして提供されます。

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->

| 引数  | 型                       |                             | 説明    |
| --- | ----------------------- | :-------------------------: | ----- |
| 戻り値 | 4D.Blob | <- | 添付の中身 |

<!-- END REF -->

#### 説明

`.getContent()` 関数は、 <!-- REF #MailAttachmentClass.getContent().Summary -->添付オブジェクトの中身を `4D.Blob` オブジェクトとして返します<!-- END REF -->。 [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime) コマンドによって取得した添付オブジェクトに対して、この関数を使用することができます。

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティは、<!-- REF #MailAttachmentClass.name.Summary -->添付ファイルの名前と拡張子<!-- END REF -->を格納します。  [`MAIL New attachment`](../commands/mail-new-attachment.md) コマンドで別の名称を指定しなかった場合のデフォルトは、ファイルの名称です。

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

`.path` プロパティは、<!-- REF #MailAttachmentClass.path.Summary -->添付ファイルの POSIXパス<!-- END REF -->(存在すれば) を格納します。

## .platformPath

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19   | 追加 |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### 説明

`.platformPath` プロパティは、<!-- REF #MailAttachmentClass.platformPath.Summary -->カレントプラットフォームのシンタックスで表現されたファイルのパス<!-- END REF -->を返します。

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### 説明

`.size` プロパティは、<!-- REF #MailAttachmentClass.size.Summary -->添付ファイルの `size` ヘッダーを格納します<!-- END REF -->。 `.size`プロパティは、MIMEメッセージが添付ファイル部でサイズヘッダーを定義している場合に返されます。

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### 説明

`.type` プロパティは、<!-- REF #MailAttachmentClass.type.Summary -->添付ファイルの `content-type`<!-- END REF --> を格納します。 [`MAIL New attachment`](../commands/mail-new-attachment.md) コマンドにて、このタイプが明示的に渡されていない場合、`content-type` はファイルの拡張子に基づきます。
