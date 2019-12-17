---
id: authUsers
title: Authenticating Users
---

Once you have set up users and groups in your solution's directory, you will need to have users log into the project to access and manipulate data.

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

## $directory/login

>Logs in a user to your Wakanda application

#### Description   
Use `$directory/login` to login a user into your web application through REST by specifying its two parameters: *username* and *password*.

#### Example  
In a `POST`,  you pass an array containing two elements, *username* and *password*:

`POST  /rest/$directory/login`

**POST data**:

`["jsmith","johnny1"]`

**Result**:

If the login was successful, the result will be:

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