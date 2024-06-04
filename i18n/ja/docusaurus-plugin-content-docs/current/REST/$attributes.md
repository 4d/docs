---
id: attributes
title: $attributes
---

データクラスから取得するリレート属性を選択するのに使います (_例:_ `Company(1)?$attributes=employees.lastname`、 `Employee?$attributes=employer.name`)。

## 説明

データクラスにリレーション属性が含まれていて、リレート先のエンティティまたはエンティティセレクションの属性のうち値を取得するものを選択したい場合、そのパスを指定するのに `$attributes` を使用します。

`$attributes` はエンティティ (_例:_ People(1)) またはエンティティセレクション (_例:_ People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) に対して適用できます。

- クエリに `$attributes` が指定されていない場合、または "\*" が渡された場合、すべての取得可能な属性が取得されます。 **リレートエンティティ** 属性は、`__KEY` (プライマリーキー) と `URI` プロパティを持つオブジェクトという簡単な形で抽出されます。 **リレートエンティティズ** 属性は抽出されません。

- **リレートエンティティ** 属性を対象に `$attributes` が指定された場合:
  - `$attributes=relatedEntity`: リレートエンティティは簡単な形で返されます (`__KEY` (プライマリーキー) と `URI` プロパティを持つ deferred オブジェクト)
  - `$attributes=relatedEntity.*`: リレートエンティティの属性がすべて返されます。
  - `$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...`: リレートエンティティの指定された属性だけが返されます。

- **リレートエンティティズ** 属性を対象に `$attributes` が指定された場合:
  - `$attributes=relatedEntities.*`: リレートエンティティズの属性がすべて返されます。

  - `$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ...`: リレートエンティティズの指定された属性だけが返されます。

## リレートエンティティズの例

"employees" 1対Nリレーションを持つ Company データクラスに対して次の RESTリクエストをおこなうと:

`GET  /rest/Company(1)/?$attributes=employees.lastname`

**レスポンス**:

```
{
    "__entityModel": "Company",
    "__KEY": "1",  
    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",
    "__STAMP": 2,
    "employees": {
		"__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",
		"__GlobalStamp": 50,
		"__COUNT": 135,
		"__FIRST": 0,
		"__ENTITIES": [
			{
				"__KEY": "1",
				"__TIMESTAMP": "2019-12-01T20:18:26.046Z",
				"__STAMP": 5,
				"lastname": "ESSEAL"
			},
			{
				"__KEY": "2",
				"__TIMESTAMP": "2019-12-04T10:58:42.542Z",
				"__STAMP": 6,
				"lastname": "JONES"
			},
			...
    }
}
```

employees の属性をすべて取得するには:

`GET  /rest/Company(1)/?$attributes=employees.*`

また、employees の lastname属性と jobname属性を取得するには:

`GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname`

## リレートエンティティの例

"employer" N対1リレーションを持つ Employee データクラスに対して次の RESTリクエストをおこなうと:

`GET  /rest/Employee(1)?$attributes=employer.name`

**レスポンス**:

```
{
	"__entityModel": "Employee",
	"__KEY": "1",
	"__TIMESTAMP": "2019-12-01T20:18:26.046Z",
	"__STAMP": 5,
	"employer": {
		"__KEY": "1",
		"__TIMESTAMP": "2018-04-25T14:41:16.237Z",
		"__STAMP": 0,
		"name": "Adobe"
	}
}
```

employer の属性をすべて取得するには:

`GET  /rest/Employee(1)?$attributes=employer.*`

また、employer の全employees の lastname属性を取得するには:

`GET  /rest/Employee(1)?$attributes=employer.employees.lastname`
