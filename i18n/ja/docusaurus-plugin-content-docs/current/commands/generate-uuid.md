---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<br>**Generate UUID**( *version* ) : Text<!-- END REF-->

<!--REF #_command_.Generate UUID.Params-->

| 引数      | 型       |                             | 説明                                                               |
| ------- | ------- | --------------------------- | ---------------------------------------------------------------- |
| version | Integer | &#8594; | UUID version: 4 (デフォルト) または 7 |
| 戻り値     | Text    | &#8592; | 非正規テキストとしての新しいUUID (32文字)                     |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース   | 内容                |
| ------ | ----------------- |
| 20 R10 | *version* 引数のサポート |

</details>

## 説明

<!--REF #_command_.Generate UUID.Summary-->Generate UUID は非正規形式で32 文字のUUID 識別子を返します<!-- END REF-->。

UUID は16 バイトの数字(128 bit)です。 32 文字の16 進数を格納しています。 非正規形式(英字( \[A-F, a-f\] )または数字( \[0-9\] )の連続した32文字。例: 550e8400e29b41d4a716446655440000)または正規形式(8、4、4、4、12文字のグループ。例: 550e8400-e29b-41d4-a716-446655440000)のどちらかで表現されます。

オプションの *version* 引数を使用することで、生成する **UUID のバージョン** を設定できます。 以下の値が指定可能です:

- **4** (省略した場合のデフォルト)、指定すると完全にランダムなUUID を生成
- **7**、指定するとランダムでありながらタイムスタンプ付きのUUID を生成(時系列順と文字列順並びが一致します)。

:::note

UUID バージョン7の詳細な情報については、 [こちらのblog記事](https://blog.4d.com/sort-uuids-with-version-7) を参照してください。

:::

In 4D, UUID numbers can be stored in fields (see [UUID Format](https://doc.4d.com/4Dv20/4D/20.2/Field-properties.300-6750280.en.html#106190). A [4D settings option](../settings/database.md#auto-uuid-version) allows generating version 7 UUIDs in automatic fields.

## 例題

Generation of a UUID in a variable:

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1066                        |
| スレッドセーフ | &check; |


