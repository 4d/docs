---
id: directory_currentUserBelongsTo
title: $directory/currentUserBelongsTo
---

Indicates if the current user belongs to a specific group

## Description   
To find out if the currently logged in user belongs to a specific group, use `$directory/currentUserBelongsTo`. You can pass either the group ID (which is the group's UUID reference number) or its name as defined in the solution's directory (see Groups in the Directory).

If we want to check to see if the current user is a member of the Sales group, we must pass either *GroupID* or *GroupName* in the `POST`.

## Example  
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

