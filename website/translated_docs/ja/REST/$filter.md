---
id: filter
title: '$filter'
---


 
データクラスまたはメソッドが返すデータをフィルターします *(例*: `$filter="firstName!='' AND salary>30000"`)


## 説明

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
> When inserting quotes (') or double quotes ("), you must escape them using using their character code:
> 
> <li>Quotes ('):    \u0027 <li>Double quotes ("): \u0022
> 
> For example, you can write the following when passing a value with a quote when using the *params* property:  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
> 
> If you pass the value directly, you can write the following: `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## 属性

If the attribute is in the same dataclass, you can just pass it directly (*e.g.*, `firstName`). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (*e.g.*, employer.name). The attribute name is case-sensitive (`firstName` is not equal to `FirstName`).

You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

You can search in the object by writing the following:

`GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparator

The comparator must be one of the following values:

| Comparator | 説明                       |
| ---------- | ------------------------ |
| =          | equals to                |
| !=         | not equal to             |
| >          | greater than             |
| >=         | greater than or equal to |
| <          | less than                |
| <=         | less than or equal to    |
| begin      | begins with              |

## 例題

In the following example, we look for all employees whose last name begins with a "j":

```
 GET  /rest/Employee?$filter="lastName begin j"
```

In this example, we search the Employee dataclass for all employees whose salary is greater than 20,000 and who do not work for a company named Acme:

```
 GET  /rest/Employee?$filter="salary>20000 AND  
 employer.name!=acme"&$orderby="lastName,firstName"
```

In this example, we search the Person dataclass for all the people whose number property in the anotherobj attribute of type Object is greater than 50:

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```
