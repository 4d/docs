---
id: wp-insert-picture
title: WP Insert picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert picture.Syntax-->**WP Insert picture** ( *targetObj* ; *picture* ; *mode* {; *rangeUpdate*} ): Object<br/>**WP Insert picture** ( *targetObj* ; *pictureFileObj*; *mode* {; *rangeUpdate*}): Object<!-- END REF-->

<!--REF #_command_.WP Insert picture.Params-->

| 引数             | 型                       |                             | 説明                                         |
| -------------- | ----------------------- | --------------------------- | ------------------------------------------ |
| targetObj      | Object                  | &#8594; | レンジまたは要素または4D Write Pro ドキュメント             |
| picture        | Picture                 | &#8594; | ピクチャーフィールドまたは変数、あるいはディスク上のピクチャーファイルへのパス    |
| pictureFileObj | 4D.File | &#8594; | ピクチャーファイルを表す4D.File オブジェクト |
| mode           | Integer                 | &#8594; | 挿入モード                                      |
| rangeUpdate    | Integer                 | &#8594; | レンジ更新モード                                   |
| 戻り値            | Object                  | &#8592; | ピクチャーを参照しているオブジェクト                         |

<!-- END REF-->

#### 説明

**WP Insert picture** コマンドは、<!--REF #_command_.WP Insert picture.Summary-->指定した挿入モード*mode* とレンジ更新モード*rangeUpdate* に従って、*picture* または*pictureFileObj* のピクチャーを*targetObj* で指定したレンジに挿入し、ピクチャー要素への参照を返します。<!-- END REF-->ピクチャーは文字として*targetObj* に挿入されます。

*targetObj* 引数には、以下のいずれかを渡すことができます:

- レンジ
- 要素(表組 / 行 / 段落 / 本文 / ヘッダー / フッター / インライン画像 / セクション / サブセクション)
- 4D Write Pro ドキュメント

第二引数には、以下のいずれかを渡すことができます:

- *picture* 引数の場合:
  - ピクチャーフィールドまたは変数
  - ディスク上のピクチャーファイルへのパスを格納した文字列(システムシンタックス)
    文字列を使用する場合には、フルパス名またはデータベースのストラクチャーファイルを起点とした相対パス名を指定することができます。 またファイル名を渡すこともでき、その場合、ファイルはデータベースのストラクチャーファイルと同じ階層に置かれている必要があります。 ファイル名を渡す場合には、ファイルの拡張子も指定する必要があります。 ファイル名を渡す場合には、ファイルの拡張子も指定する必要があります。 ファイル名を渡す場合には、ファイルの拡張子も指定する必要があります。
- *pictureFileObj* 引数の場合: ピクチャーファイルを表す`File` オブジェクト

[4D でサポートされているフォーマット](../../FormEditor/pictures.md#native-formats-supported) であれば、どんなピクチャーフォーマットでも使用することができます。 [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) コマンドを使用することで、利用可能なピクチャーフォーマットの一覧を取得することができます。 ピクチャーに複数のフォーマット(コーデック)が格納されている場合、4D Write Pro はドキュメント内に表示用に1種類、印刷用に1種類(異なる場合)のフォーマットのみを保管します。その際、「最適」なフォーマットが自動的に選択されます。 [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) コマンドを使用することで、利用可能なピクチャーフォーマットの一覧を取得することができます。 ピクチャーに複数のフォーマット(コーデック)が格納されている場合、4D Write Pro はドキュメント内に表示用に1種類、印刷用に1種類(異なる場合)のフォーマットのみを保管します。その際、「最適」なフォーマットが自動的に選択されます。 [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) コマンドを使用することで、利用可能なピクチャーフォーマットの一覧を取得することができます。 ピクチャーに複数のフォーマット(コーデック)が格納されている場合、4D Write Pro はドキュメント内に表示用に1種類、印刷用に1種類(異なる場合)のフォーマットのみを保管します。その際、「最適」なフォーマットが自動的に選択されます。

*mode* 引数には、ドキュメント内のピクチャーに対して使用する挿入モードを指定する、以下の定数のいずれか一つを渡します:

| 定数         | 型       | 値 | 説明                   |
| ---------- | ------- | - | -------------------- |
| wk append  | Integer | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | Integer | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | Integer | 0 | ターゲットのコンテンツを置き換える    |

*targetObj* がレンジである場合、オプションの*rangeUpdate* 引数に以下の定数のいづれか一つを渡すことで挿入されたピクチャーが結果のレンジに含まれるかどうかを指定することができます:

| 定数                    | 型       | 値 | 説明                                             |
| --------------------- | ------- | - | ---------------------------------------------- |
| wk exclude from range | Integer | 1 | ピクチャーは更新されたレンジに含まれません                          |
| wk include in range   | Integer | 0 | ピクチャーは更新されたレンジに含まれます(デフォルト) |

*rangeUpdate* 引数を省略した場合には、挿入したピクチャーは返されるレンジに含められます。

- *targetObj* がレンジではない場合、*rangeUpdate* は無視されます。

#### 例題 1

この例題では、ユーザーはレンジオブジェクトに挿入したいピクチャーを選択し、そのピクチャーが挿入できなかった場合に警告を出します:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  //ユーザーに挿入するピクチャーを選択してもらいます
 $imgRef:=Open document("")
  // ユーザーがキャンセルしなかった場合
 If(OK=1)
  // サポートされている形式のピクチャーファイルの場合
    If(Is picture file(document))
  // ユーザーが選択したピクチャーを挿入します
       WP Insert picture($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  // 挿入に失敗した場合には、ユーザーに警告します
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

#### 例題 2

ピクチャーをドキュメントの本文に挿入したい場合を考えます:

```4d
var $file : 4D.File
var $pictRef : Object

$file:=File("/RESOURCES/NovelCover1.jpg")

WParea:=WP New
$pictRef:=WP Insert picture(WParea; $file; wk replace)

```

#### 参照

[WP Insert document body](wp-insert-document-body.md)</br>
[WP Picture range](../commands-legacy/wp-picture-range.md)
