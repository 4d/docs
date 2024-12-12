---
id: wa-create-url-history-menu
title: WA Create URL history menu
slug: /commands/wa-create-url-history-menu
displayed_sidebar: docs
---

<!--REF #_command_.WA Create URL history menu.Syntax-->**WA Create URL history menu** ( {* ;} *object* {; *direction*} ) : Text<!-- END REF-->
<!--REF #_command_.WA Create URL history menu.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| direction | Integer | &#8594;  | 0 or omitted=List of previous URLs, 1=List of next URLs |
| Function result | Text | &#8592; | Menu reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Create URL history menu.Summary-->The **WA Create URL history menu** command creates and fills a menu that can be used directly for navigation among the URLs visited during the session in the Web area designated by the *\** and *object* parameters.<!-- END REF--> It can be used to build a custom navigation interface.

The information provided concerns the session; in other words, the navigation carried out in the same Web area as long as the form has not been closed.

Pass a value indicating the list to recover in *direction*. You can use one of the following constants, found in the *Web Area* theme:

| Constant         | Type    | Value |
| ---------------- | ------- | ----- |
| WA next URLs     | Integer | 1     |
| WA previous URLs | Integer | 0     |

If you omit the *direction* parameter, the value 0 is used.

Once the menu has been generated, you can display it using the 4D [Dynamic pop up menu](dynamic-pop-up-menu.md) command and you can work with it using the standard 4D menu management commands. The string returned by this command contains the URL of the page visited (see example).

Call the [RELEASE MENU](release-menu.md) command to delete a URL history menu when it is no longer useful.

**Compatibility Note:* As of 4D v19 R5, this command fills a menu with only the current URL for web areas using the Windows system rendering engine.* 

#### Example 

The following code can be associated with a 3D button having a pop-up menu entitled "Previous":

```4d
 Case of
  //Single click
    :(Form event code=On Clicked)
       WA OPEN BACK URL(WA_area)
  //Click on arrow -> display of pop up
    :(Form event code=On Alternative Click)
  //Create a previous history menu
       $Menu:=WA Create URL history menu(WA_area;WA previous URLs)
  //Display this menu in a pop-up
       $URL:=Dynamic pop up menu($Menu)
  //If an item is selected
       If($URL#"")
  //Open Web page
          WA OPEN URL(WA_area;$URL)
       End if
  //Delete menu to free up memory
       RELEASE MENU($Menu)
 End case
```

#### See also 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[WA GET URL HISTORY](wa-get-url-history.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1049 |
| Thread safe | &cross; |


