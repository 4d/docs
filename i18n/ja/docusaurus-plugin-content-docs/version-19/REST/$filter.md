---
id: filter
title: '$filter'
---


 
データクラスまたはメソッドが返すデータをフィルターします *(例*: `$filter="firstName!='' AND salary>30000"`)

## 詳細

このパラメーターを使って、データクラスまたはメソッドが返すデータに対するフィルターを定義することができます。

### 単純なフィルターの利用

フィルターは次の要素で構成されます:

**{attribute} {comparator} {value}**

たとえば `$filter="firstName=john"` の場合、`firstName` は **属性 (attribute)**、`=` は **比較演算子 (comparator)**、`john` は **値 (value)** にあたります。

### 複雑なフィルターの利用

複雑なフィルターは複数の単純なフィルターの組み合わせで構成されます:

**{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}**

たとえば: `$filter="firstName=john AND salary>20000"` （`firstName` および `salary` は Employee データクラスの属性です)。

### paramsプロパティの使用

4D の paramsプロパティを使うこともできます。

**{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

たとえば: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` (firstName および salary は Employee データクラスの属性です)。

4D においてデータをクエリする方法についての詳細は、[dataClass.query()](https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.ja.html) ドキュメンテーションを参照ください。
> 単一引用符 (') または二重引用符 (") を挿入するには、対応する文字コードを使ってそれらをエスケープする必要があります:
> 
> <li>Quotes ('): \u0027</li>
  <li>二重引用符 ("): \u0022</li>
> 
> たとえば、単一引用符が含まれる値を *params* プロパティに渡すには、次のように書きます:  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
> 
> If you pass the value directly, you can write the following: `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

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

`GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## 比較演算子

以下の比較演算子を使用できます:

| 比較演算子 | 詳細    |
| ----- | ----- |
| =     | 等しい   |
| !=    | 等しくない |
| >     | 大きい   |
| >=    | 以上    |
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
