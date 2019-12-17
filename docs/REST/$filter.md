---
id: filter
title: $filter 
---


 
Filters the data in a datastore class or method *(e.g.*, `$filter="firstName!='' AND salary>30000"`)


## Description   

This parameter allows you to define the filter for your datastore class or method.

### Using a simple filter

A filter is composed of the following elements:

`{attribute} {comparator =, !=, >, <...} {value}`

For example: `$filter="firstName=john AND salary>20000"` where firstName and salary are attributes in the Employee datastore class.

### Using a complex filter

A more compex filter is composed of the following elements, which joins two queries:

`{attribute} {comparator =, !=, >, <...} {value} {conjunction AND/OR/EXCEPT} {attribute} {comparator =, !=, >, <...} {value}`


For example: `$filter="firstName=john AND salary>20000"` where firstName and salary are attributes in the Employee datastore class.

### Using the params property

You can also use 4D's params property.

`{attribute} {comparator =, !=, >, <...} {placeholder} {conjunction AND/OR/EXCEPT} {attribute} {comparator =, !=, >, <...} {placeholder}&$params='["{value1}","{value2}"]"'`

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'"` where firstName and salary are attributes in the Employee datastore class.

For more information regarding how to query data in 4D, refer to **Defining Queries** (Client-side).


>When inserting quotes (') or double quotes ("), you must escape them using using their character code:
>
><li>Quotes ('):	\u0027
><li>Double quotes ("):	\u0022
  
For example, you can write the following when passing a value with a quote when using the params property:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`

If you pass the value directly, you can write the following:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Attribute

If the attribute is in the same datastore class, you can just pass it directly (*i.e.*, firstName). However, if you want to query another datastore class, you must include the relation attribute name plus the attribute name (*i.e.*, employer.name). The attribute name is case-sensitive (*e.g.*, firstName is not equal to FirstName).

You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

You can search in the Object by writing the following:

` GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparator 
 
The comparator must be one of the following values:

|Comparator	|Description|
|---|---|
|=	|equals to|
|!=	|not equal to|
|>	|greater than|
|>=	|greater than or equal to|
|<	|less than|
|<=	|less than or equal to|
|begin	|begins with|

## Example  
In the following example, we look for all employees whose last name begins with a "J":

```
 GET  /rest/Employee?$filter="lastName begin j"
```

In this example, we search the Employee datastore class for all employees whose salary is greater than 20,000 and who do not work for a company named Acme:

```
 GET  /rest/Employee?$filter="salary>20000 AND employer.name!=acme"&$orderby="lastName,firstName"
```

In this example, we search the Person datastore class for all the people whose number property in the anotherobj attribute of type Object is greater than 50:

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```

**Response**:

![](assets/en/REST/filterComparator.png)