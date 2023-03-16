---
id: distinct
title: $distinct 
---


Returns the distinct values for a specific attribute in a collection (*e.g.*, `Company/name?$filter="name=a*"&$distinct=true`)


## Description   

`$distinct` allows you to return a collection containing the distinct values for a query on a specific attribute. Only one attribute in the dataclass can be specified. Generally, the String type is best; however, you can also use it on any attribute type that could contain multiple values.

You can also use `$skip` and `$top/$limit` as well, if you'd like to navigate the selection before it's placed in an array.

## Example  
In our example below, we want to retrieve the distinct values for a company name starting with the letter "a":

 `GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

````
[
    "Adobe",
    "Apple"
]
````

