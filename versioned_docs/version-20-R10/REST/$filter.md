---
id: filter
title: $filter 
---


 
Allows to query the data in a dataclass or method *(e.g.*, `$filter="firstName!='' AND salary>30000"`)


## Description   

This parameter allows you to define the filter for your dataclass or method.

### Using a simple filter

A filter is composed of the following elements:

**\{attribute\} {comparator} {value}**

For example: `$filter="firstName=john"` where `firstName` is the **attribute**, `=` is the **comparator** and `john` is the **value**.

### Using a complex filter

A more complex filter is composed of the following elements, which joins two queries:

**\{attribute\} {comparator} {value} {AND/OR/EXCEPT} \{attribute\} {comparator} {value}**


For example: `$filter="firstName=john AND salary>20000"` where `firstName` and `salary` are attributes in the Employee dataclass.

### Using the params property

You can also use 4D's params property.

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` where firstName and salary are attributes in the Employee dataclass.

For more information regarding how to query data in 4D, refer to the [dataClass.query()](../API/DataClassClass.md#query) documentation. 


>When inserting quotes (') or double quotes ("), you must escape them using using their character code:
>
><li>Quotes ('): \u0027</li>
><li>Double quotes ("): \u0022</li>
>
>For example, you can write the following when passing a value with a quote when using the *params* property:  
>`http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> If you pass the value directly, you can write the following:
`http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Attribute

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

## Examples

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
