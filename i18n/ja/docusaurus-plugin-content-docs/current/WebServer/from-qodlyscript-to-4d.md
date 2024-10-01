---
id: from-qodlyscript-to-4d
title: QodlyScript から 4Dランゲージへ
---

[Qodly Studio ドキュメント](https://developer.qodly.com/docs/studio/overview) を使用して、4Dデベロッパーは、Qodly Studio で Qodlyフォームを設計する方法を学ぶことができます。

コードの例は [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript) で提供されていますが、QodlyScript は 4Dランゲージから継承しているため、困ることはありません。 QodlyScript コードを 4Dランゲージに変換するのは簡単で、いくつかの調整が必要なだけです.

## 変数名

QodlyScript はローカル変数のみをサポートするため、QodlyScript の例題では、変数に `$` という接頭辞が付きません。 4Dコードでは、4D によってローカル変数として識別されるように、**変数名の前には必ず `$` を付けてください**。

## 記号とキーワード

一部の基本的な記号、演算子、キーワードは QodlyScript では異なるため、4Dランゲージ用に変換する必要があります。 以下に一覧を示します:

| QodlyScript | 4Dランゲージ                                                     | 説明       |
| ----------- | ----------------------------------------------------------- | -------- |
| ,           | ;                                                           | 引数の区切り文字 |
| =           | :=                                          | 代入演算子    |
| ==          | =                                                           | 比較演算子    |
| declare     | #Declare                                                    |          |
| switch      | Case of                                                     |          |
| constructor | Class constructor                                           |          |
| extends     | Class extends                                               |          |
| end         | End for, End For each, End if, End case, End use, End while |          |
| forEach     | For each                                                    |          |
| string      | テキスト                                                        | 変数の型     |
| number      | 実数                                                          | 変数の型     |

他の一部の項目では文字の大小が異なりますが (例: `this` と `This`)、4Dコードに直接貼り付けることができます。

## コマンドと定数名

QodlyScript のコマンドおよび定数名は、スペースを入れずにキャメルケースで記述されます。 また、QodlyScript の定数名は `k` 文字で始まります。 これらの QodlyScript の要素を 4Dランゲージに変換する必要があるかもしれません。

- 通常は、単に名前を変換するだけで十分です。 たとえば、QodlyScript の `newCollection` は 4Dランゲージの `New collection` です。
- しかし、いくつかのコマンドは改名されています。たとえば、4Dランゲージの `Arctan` と `Square root` コマンドは、QodlyScript では `atan` および `sqrt` です。

### 例題

- QodlyScript コード:

```qs
 declare(entitySelection : 4D.EntitySelection)  
 var dataClass : 4D.DataClass
 var entity, duplicate : 4D.Entity
 var status : object
 dataClass=entitySelection.getDataClass()
 forEach(entity,entitySelection)
    duplicate=dataClass.new()
    duplicate.fromObject(entity.toObject())
    duplicate[dataClass.getInfo().primaryKey]=null
    status=duplicate.save()
 end
```

- 上に相当する 4Dランゲージのコード:

```4d
 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null
    $status:=$duplicate.save()
 End for each

```
