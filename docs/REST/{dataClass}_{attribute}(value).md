---
id: {dataClass}{attribute}_value
title: {dataClass}:{attribute}(value) 
---

Returns the data for one entity in which the attribute's value is defined

## Description   
By passing the *datastoreClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute.

 `GET  /rest/Company:companyCode(Acme001)`

For more information about the data returned, refer to [{dataClass}](dataClass.md).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](%7Battribute1_attribute2%7D.html). For example:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

## Example  

The following request returns all the public data of the employee named "Jones".

 `GET  /rest/Employee:lastname(Jones)`

