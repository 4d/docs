---
id: set-picture-to-pasteboard
title: SET PICTURE TO PASTEBOARD
slug: /commands/set-picture-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Syntax-->**SET PICTURE TO PASTEBOARD** ( *picture* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO PASTEBOARD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | Picture to be placed in pasteboard |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Summary-->SET PICTURE TO PASTEBOARD clears the pasteboard and puts a copy of the picture passed in *picture* into it.<!-- END REF--> 

**Note:** In the case of copy/paste operations, the pasteboard is equivalent to the Clipboard 

The picture is transported in its native format (jpeg, tif, png, etc.). 

After you have put a picture into the pasteboard, you can retrieve it using the [GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md) command or for example [GET PASTEBOARD DATA](get-pasteboard-data.md)("com.4d.private.picture.gif";...).

#### Example 

Using a floating window, you display a form that contains the array *asEmployeeName*, which lists the names of the employees from an \[Employees\] table. Each time you click on a name, you want to copy the employee's picture to the pasteboard. In the object method for the array, you write:

```4d
 If(asEmployeeName#0)
    QUERY([Employees];[Employees]Last name=asEmployeeName{asEmployeeName})
    If(Picture size([Employees]Photo)>0)
       SET PICTURE TO PASTEBOARD([Employees]Photo) // Copy the employee's photo
    Else
       CLEAR PASTEBOARD // No photo or no record found
    End if
 End if
```

#### System variables and sets 

If a copy of the picture is correctly put into the pasteboard, the OK variable is set to 1.  
If there is not enough memory to paste the picture into the pasteboard, the OK variable is set to 0, but no error is generated.

#### See also 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  