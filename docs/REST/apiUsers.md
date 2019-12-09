---
id: apiUsers
title: Directory
---


## ```$directory/login```

Opens a REST session on your 4D application and logs in the user.

#### Description   
Use `$directory/login` to open a session in your 4D application through REST and login a user. You can also modify the default 4D session timeout.

All parameters must be passed in **headers** of a POST method:

|Header key|Header value|
|---|---|
|username-4D|User - Not mandatory
|password-4D|Password - Not mandatory
|hashed-password-4D|Hashed password - Not mandatory
|session-4D-length|Session inactivity timeout (minutes). Cannot be less than 60 - Not mandatory


#### Example  

```code4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="hashed-password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:=Generate digest("123";4D digest)
$hValues{3}:=120
$httpStatus:=HTTP Request(HTTP POST method;"database.example.com:9000";$body_t;$response;$hKey;$hValues)
```

**Result**:

If the login was successful, the result will be:

```
{
    "result": true
}
```

Otherwise, the response will be:

```
{
     "result": false
}
```




----
----  
Once you have set up users and groups in your project's directory, you will need to have users log into the project to access and manipulate data.


You can log in a user to your application by passing the user's name and password to `$directory/login`. Once logged in, you can retrieve the user's name by using [$directory/currentUser](#$directory/currentUser) and can find out if he/she belongs to a specific group by using `$directory/currentUserBelongsTo`. To log out the current user, call `$directory/logout`.


## $directory/currentUser

>Returns information about the current user


#### Description   
By calling `$directory/currentUser` after a user has logged in, you can retrieve the following information:

|Property|Type|Description|
|---|---|---|
|userName|	String|	Username used to log into the application.|
|fullName|	String|	Full name of the user.|
|ID|	String|	UUID referencing the user.|


#### Example  
 Call `$directory/currentUser` to find out the current user of your application.

`GET  /rest/$directory/currentUser`

**Result**:

````
{
    "result": {
        "userName": "jsmith", 
        "fullName": "John Smith", 
        "ID": "12F169764253481E89F0E4EA8C1D791A"
    }
}
````


If no user has been logged in, the result is:

````
{
    "result": null
}
````

## $directory/currentUserBelongsTo 

>Indicates if the current user belongs to a specific group

#### Description   
To find out if the currently logged in user belongs to a specific group, use `$directory/currentUserBelongsTo`. You can pass either the group ID (which is the group's UUID reference number) or its name as defined in the solution's directory (see Groups in the Directory).

If we want to check to see if the current user is a member of the Sales group, we must pass either *GroupID* or *GroupName* in the `POST`.

#### Example  
Below is an example of how to pass either the GroupID or GroupName in the `POST` data.

`POST  /rest/$directory/currentUserBelongsTo`

**POST data**:

`["88BAF858143D4B13B26AF48C7A5A7A68"]`

or

`["Sales"]`

**Result**:

If the current user is in the group specified in the array, the response will be:

````
{
    "result": true
}
````

Otherwise, it will return:

````
{
     "result": false
}
````



## $directory/logout 

>Logs out the current user

#### Description   
To log out the current user from your application, use `$directory/logout`.

#### Example  
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