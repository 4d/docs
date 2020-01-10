---
id: directory_logout
title: $directory/logout
---

Logs out the current user

## Description   
To log out the current user from your application, use `$directory/logout`.

##Example  
You call `$directory/logout` to log the current user out of the application.

`GET  /rest/$directory/logout`

**Result**:

If the logout was successful, the result will be:

````
{
    "result": true
}
````

Otherwise, the response will be:

````
{
     "result": false
}
````