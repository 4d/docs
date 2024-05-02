---
id: filter
title: $filter
---

Allows to query the data in a dataclass or method _(e.g._, `$filter="firstName!='' AND salary>30000"`)

## 説明

このパラメーターを使って、データクラスまたはメソッドが返すデータに対するフィルターを定義することができます。

### 単純なフィルターの利用

フィルターは次の要素で構成されます:

**{attribute} {comparator} {value}**

For example: `$filter="firstName=john"` where `firstName` is the **attribute**, `=` is the **comparator** and `john` is the **value**.

### 複雑なフィルターの利用

複雑なフィルターは複数の単純なフィルターの組み合わせで構成されます:

**{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}**

For example: `$filter="firstName=john AND salary>20000"` where `firstName` and `salary` are attributes in the Employee dataclass.

### paramsプロパティの使用

4D の paramsプロパティを使うこともできます。

**{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` where firstName and salary are attributes in the Employee dataclass.

For more information regarding how to query data in 4D, refer to the [dataClass.query()](../API/DataClassClass.md#query) documentation.

> 単一引用符 (') または二重引用符 (") を挿入するには、対応する文字コードを使ってそれらをエスケープする必要があります:
>
> <li>単一引用符 ('): \u0027</li>
> <li>二重引用符 ("): \u0022</li>
>
> For example, you can write the following when passing a value with a quote when using the _params_ property:\
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> If you pass the value directly, you can write the following:
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## 属性

If the attribute is in the same dataclass, you can just pass it directly (_e.g._, `firstName`). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (_e.g._, employer.name). The attribute name is case-sensitive (`firstName` is not equal to `FirstName`).

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

| 比較演算子 | 説明    |
| ----- | ----- |
| =     | 等しい   |
| !=    | 等しくない |
| >     | 大きい   |
| > =   | 以上    |
| <     | 小さい   |
| <=    | 以下    |
| begin | 前方一致  |

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
