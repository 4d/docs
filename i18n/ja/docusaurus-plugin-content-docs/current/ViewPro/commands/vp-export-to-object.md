---
id: vp-export-to-object
title: VP Export to object
---

<!-- REF #_method_.VP Export to object.Syntax -->

**VP Export to object** ( *vpAreaName* : Text {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Export to object.Params -->

| 引数         | 型      |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |                  |
| options    | オブジェクト | -> | 書き出しのオプション              |                  |
| 戻り値        | オブジェクト | <- | 4D View Pro オブジェクト      | <!-- END REF --> |

#### 説明

`VP Export to object` コマンドは、<!-- REF #_method_.VP Export to object.Summary --> *vpAreaName* で指定した 4D View Pro エリアに関連付けられている 4D View Pro オブジェクトを返します<!-- END REF -->。 このコマンドによって、たとえば 4D View Pro エリアを 4Dデータベースのオブジェクトフィールドに保存することができます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*options* 引数として、必要に応じて以下の書き出しオプションを渡すことができます:

| プロパティ                | 型   | 説明                                                                                                                                                                                                                   |
| -------------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo    | ブール | フォーマット (書式) 情報を含めるには true (デフォルト)、それ以外の場合には false。 フォーマット情報は特定の場合 (例: SVGへの書き出しなど) において有用です。 一方で、このプロパティを false に設定することで書き出し時間を短縮することもできます。 |
| includeBindingSource | ブール | true (デフォルト) の場合、カレントデータコンテキストの値を、書き出したオブジェクトのセルの値としてエクスポートします (データコンテキスト自体はエクスポートされません)。 それ以外は false。 セルバインドは常にエクスポートされます。                                                    |

4D View Pro オブジェクトについての詳細は [4D View Pro オブジェクト](../configuring.md#4d-view-pro-オブジェクト) を参照ください。

#### 例題 1

4D View Pro エリアの "version" プロパティを取得します:

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```

#### 例題 2

フォーマット (書式) 情報を含めてエリアを書き出します:

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### 参照

[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP IMPORT FROM OBJECT](vp-import-from-object.md)
