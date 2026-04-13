---
id: filter
title: $filter
---

データクラスまたはメソッドが返すデータをフィルターします *(例*: `$filter="firstName!='' AND salary>30000"`)

## 説明

このパラメーターを使って、データクラスまたはメソッドが返すデータに対するフィルターを定義することができます。

### 単純なフィルターの利用

フィルターは次の要素で構成されます:

**\{attribute\} {comparator} {value}**

たとえば `$filter="firstName=john"` の場合、`firstName` は **属性 (attribute)**、`=` は **比較演算子 (comparator)**、`john` は **値 (value)** にあたります。

### 複雑なフィルターの利用

複雑なフィルターは複数の単純なフィルターの組み合わせで構成されます:

**\{attribute\} {comparator} {value} {AND/OR/EXCEPT} \{attribute\} {comparator} {value}**

たとえば: `$filter="firstName=john AND salary>20000"` （`firstName` および `salary` は Employee データクラスの属性です)。

### paramsプロパティの使用

また値のコレクションである4D の `params` プロパティを使用することもできます。

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]'**

たとえば: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` (firstName および salary は Employee データクラスの属性です)。

4D においてデータをクエリする方法についての詳細は、[dataClass.query()](../API/DataClassClass.md#query) ドキュメンテーションを参照ください。

> 単一引用符 (') または二重引用符 (") を挿入するには、対応する文字コードを使ってそれらをエスケープする必要があります:
>
> <li>単一引用符 ('): \u0027</li>
> <li>二重引用符 ("): \u0022</li>
>
> たとえば、単一引用符が含まれる値を *params* プロパティに渡すには、次のように書きます:  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> 値を直接渡す場合は、次のように書けます: `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## 属性

同じデータクラスに属している属性はそのまま受け渡せます (*例*: `firstName`)。 別のデータクラスをクエリする場合は、リレーション名と属性、つまりパスを渡さなくてはなりません (*例*: employer.name)。 属性名の文字の大小は区別されます (`firstName` と `FirstName` は異なります)。

オブジェクト型属性もドット記法によってクエリできます。 たとえば、"objAttribute" という名称のオブジェクト属性が次の構造を持っていた場合:

```
{
    prop1: "一つ目のプロパティです",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

このオブジェクトをクエリするには、次のように書きます:

` GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## 比較演算子

以下の比較演算子を使用できます:

| 比較演算子                       | 説明    |
| --------------------------- | ----- |
| =                           | 等しい   |
| !=                          | 等しくない |
| >                           | 大きい   |
| > =                         | 以上    |
| <  | 小さい   |
| <= | 以下    |
| begin                       | 前方一致  |

## ベクトル類似度

属性が[**ベクトルオブジェクト**](../API/VectorClass.md) を保存する場合([4D フィールドを 4D.Vector クラスオブジェクトのみを保存するように設定する方法](../Develop/field-properties.md#class) を参照)、**ベクトル** つまり**埋め込み** を使用してデータクラスをフィルターすることができます。

ベクトル類似度の詳細な情報については、[ベクトル類似度によるクエリ](../API/DataClassClass.md#ベクトル類似度によるクエリ) の章を参照してください。

`params` プロパティを使用してベクトル比較パラメーターのフィルターを提供します。使用する構文は以下の通りです:

**\{vectorAttribute\} \{comparator\} \{placeholder\}&$params=vectorComparison**

*vectorComparison* パラメーターは、以下のような要素を格納したコレクションです:

| プロパティ                                                                            | 型         | 説明                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [].vector    | 数値のコレクション | 必須設定です。 比較するベクトルを表すコレクションです                                                                                                                                                                                                                                                          |
| [].metric    | Text      | 任意。 クエリに使用する[ベクトル計算](../API/VectorClass.md#ことなるベクトル計算を理解する)。 サポートされる値:<li>"cosine" (省略時のデフォルト): ベクトル間のコサイン類似度を計算します。</li><li>"dot": ベクトルのドット類似度を計算します。</li><li>"euclidean": ベクトル間のユークリッド距離を計算します。 |
| [].threshold | Real      | 任意(デフォルト: 0.5)。 選択された"metric"に従って、コサイン、ドット、またはユークリッド類似度に基づいたベクトル比較をフィルタリングするために使用されるしきい値。 最適な結果を得るためには、特定の用途に最適な類似度のしきい値をきちんと選択することが強く推奨されます。                                                                                     |

Only a subset of **comparator** symbols are supported with vector comparisons. これらの比較記号は、結果としきい値を比較するのに使用されるという点に注意してください:

| 比較演算子 | 記号                          | 説明        |
| ----- | --------------------------- | --------- |
| 小さい   | <  | しきい値より小さい |
| 大きい   | >                           | しきい値より大きい |
| 以下    | <= | しきい値以下である |
| 以上    | > =                         | しきい値以上である |

## 例題

名字が "j" で始まる社員を検索します:

```
 GET  /rest/Employee?$filter="lastName begin j"
```

Employee データクラスより、給与が 20,000 超で、かつ Acme という名称の企業で働いていない社員を検索します:

```
 GET  /rest/Employee?$filter="salary>20000 AND  
 employer.name!=acme"&$orderby="lastName,firstName"
```

Person データクラスより、anotherobj オブジェクト属性の number プロパティが 50 より大きい人のデータを検索します:

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```

この例では、基本的な値でベクトル検索を行います:

```
 GET  /rest/Person/?filter="VectorAtt>=:1"&$params='[{vector:[1,2,3],threshold:1}]'
```
