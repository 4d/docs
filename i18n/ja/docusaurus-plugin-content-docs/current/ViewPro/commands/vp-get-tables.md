---
id: vp-get-tables
title: VP Get tables
---

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R7 | 追加 |

</details>

<!-- REF #_method_.VP Get tables.Syntax -->

**VP Get tables** ( _vpAreaName_ : Text { ; _sheet_ : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get tables.Params -->

| 引数         | タイプ        |    | 説明                                             |                  |
| ---------- | ---------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | 4D View Pro フォームオブジェクト名                        |                  |
| sheet      | Integer    | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Collection | <- | 表組みの名称をすべて格納するテキストのコレクション                      | <!-- END REF --> |

#### 説明

`VP Get tables` コマンドは、<!-- REF #_method_.VP Get tables.Summary -->_sheet_ で指定されたスコープにおいて定義されている表組み名のコレクションを返します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。

_sheet_ には、ターゲットシートのインデックスを渡します。 index が省略された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

#### 例題

以下のコードは、カレントシート内にある全表組み名のコレクションを返します:

```4d
$tables:=VP Get tables("ViewProArea")
//$tables の中身の例: ["contextTable","emailTable"]

```

#### 参照

[VP CREATE TABLE](vp-create-table.md)
