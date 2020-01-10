---
id: method=release
title: $method=release 
---

Releases an existing entity set stored in 4D Server's cache (*e.g.*, `$entityset/0AF4679A5C394746BFEB68D2162A19FF?$method=release`)	


## Description  
 
You can release an entity set, which you created using `$method=entityset`, from 4D Server's cache.

## Example  

Release an existing entity set:

` GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release`

#### Response:

If the request was successful, the following response is returned:

```
{
    "ok": true
}
If the entity set wasn't found, an error is returned:

{
    "__ERROR": [
        {
             "message": "Error code: 1802\nEntitySet  \"4C51204DD8184B65AC7D79F09A077F24\" cannot be found\ncomponent:  'dbmg'\ntask 22, name: 'HTTP connection handler'\n",
            "componentSignature": "dbmg",
            "errCode": 1802
        }
    ]
}
```