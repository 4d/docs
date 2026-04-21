---
id: querypath
title: $querypath 
---
   	
Returns the query as it was executed by 4D Server (*e.g.*, `$querypath=true`)	

## Description   

`$querypath` returns the query as it was executed by 4D Server. If, for example, a part of the query passed returns no entities, the rest of the query is not executed. The query requested is optimized as you can see in this `$querypath`.

For more information about query paths, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

In the steps collection, there is an object with the following properties defining the query executed:

|Property	|Type|	Description|
|---|---|---|
|description|	Text	|Actual query executed or "AND" when there are multiple steps|
|time	|Number|	Number of milliseconds needed to execute the query|
|recordsfounds|	Number	|Number of records found|
|steps|	Collection	|An collection with an object defining the subsequent step of the query path|

## Example  

If you passed the following query:

 `GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

And no entities were found, the following query path would be returned, if you write the following:

` GET  /rest/$querypath`

**Response**:

```
__queryPath: {
 
    steps: [
        {
            description: "AND",
            time: 0,
            recordsfounds: 0,
            steps: [
                {
                    description: "Join on Table : Company : People.employer = Company.ID",
                    time: 0,
                    recordsfounds: 0,
                    steps: [
                        {
                            steps: [
                                {
                                    description: "Company.name = acme",
                                    time: 0,
                                    recordsfounds: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
 
}
```

If, on the other hand, the first query returns more than one entity, the second one will be executed. If we execute the following query:

 `GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true`

If at least one entity was found, the following query path would be returned, if you write the following:

 `GET  /rest/$querypath`

**Respose**:

```
"__queryPath": {
    "steps": [
        {
            "description": "AND",
            "time": 1,
            "recordsfounds": 4,
            "steps": [
                {
                    "description": "Join on Table : Company : Employee.employer = Company.ID",
                    "time": 1,
                    "recordsfounds": 4,
                    "steps": [
                        {
                            "steps": [
                                {
                                    "description": "Company.name LIKE a*",
                                    "time": 0,
                                    "recordsfounds": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "description": "Employee.lastName # smith",
                    "time": 0,
                    "recordsfounds": 4
                }
            ]
        }
    ]
}
```
