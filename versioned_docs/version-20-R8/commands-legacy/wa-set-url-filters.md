---
id: wa-set-url-filters
title: WA SET URL FILTERS
slug: /commands/wa-set-url-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET URL FILTERS.Syntax-->**WA SET URL FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA SET URL FILTERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| filtersArr | Text array | &#8594;  | Filters array |
| allowDenyArr | Boolean array | &#8594;  | Allow-deny array |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA SET URL FILTERS.Summary-->The WA SET URL FILTERS command sets up one or more filters for the Web area designated by the *\** and *object* parameters.<!-- END REF-->

Before loading any page requested, 4D consults the list of filters in order to check whether or not the target URL is allowed. The evaluation of the URL is based on the contents of the *filtersArr* and *allowDenyArr* arrays. 

If the requested URL is not allowed, it is not loaded and the On URL Filtering form event is generated.

The *filtersArr* and *allowDenyArr* arrays must be synchronized. 

* Each element of the *filtersArr* array must contain a URL to be filtered. You can use the *\** as a wildcard to replace one or more characters.
* Each corresponding element in the *allowDenyArr* array must contain a Boolean indicating whether the URL must be allowed (**True**) or denied (**False**).

If there is a contradiction at the configuration level (the same URL is both allowed and denied), the last setting is the one taken into account. 

To disable URL filtering, call the command and pass empty arrays or pass, respectively, the values "*\**" and **True** in the last elements of the *filtersArr* and *allowDenyArr* arrays.

Once the command has been executed, the filters become a property of the Web area. If the *filtersArr* and *allowDenyArr* arrays are deleted or reinitialized, the filters remain active as long as the command has not been executed again. To find out the active filters for an area, you must use the [WA GET URL FILTERS](wa-get-url-filters.md) command. 

**Important:** The URL filtering performed by this command applies to any request to change the primary URL of the page, whether from the user, javascript code or 4D code, except for the [WA OPEN URL](wa-open-url.md) command and URLs starting with "javascript:".

#### Example 1 

You want to deny access for all the .org, .net and .fr Web sites:

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*.org")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.net")
 APPEND TO ARRAY($AllowDeny;False)
 APPEND TO ARRAY($filters;"*.fr")
 APPEND TO ARRAY($AllowDeny;False)
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Example 2 

You want to deny access for all Web sites except Russian ones (.ru):

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*") //Select all
 APPEND TO ARRAY($AllowDeny;False) //Deny all
 APPEND TO ARRAY($filters;"www.*.ru") //Select *.ru
 APPEND TO ARRAY($AllowDeny;True) //Allow
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Example 3 

You want to allow access only to 4D Web sites (.com, .fr, .es, etc.):

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*") //Select all
 APPEND TO ARRAY($AllowDeny;False) //Deny all
 APPEND TO ARRAY($filters;"www.4D.*") //Select 4d.fr, 4d.com...
 APPEND TO ARRAY($AllowDeny;True) //Allow
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Example 4 

You want to allow local access to the documentation only (found in the folder C://doc):

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*") //Select all
 APPEND TO ARRAY($AllowDeny;False) //Deny all
 APPEND TO ARRAY($filters;"file://C:/doc/*")
  //Select the path file:// allowed
 APPEND TO ARRAY($AllowDeny;True) //Allow
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Example 5 

You want to allow access for all sites except one, for example the Elcaro site:

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*")
 APPEND TO ARRAY($AllowDeny;True) //Allow all
 APPEND TO ARRAY($filters;"*elcaro*") //Deny all that contain elcaro
 APPEND TO ARRAY($AllowDeny;False)
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Example 6 

You want to deny access to specific IP addresses:

```4d
 ARRAY TEXT($filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*") //Select all
 APPEND TO ARRAY($AllowDeny;True) //Allow all
 APPEND TO ARRAY($filters;86.83.*")  //Select IP addresses beginning with 86.83.
 APPEND TO ARRAY($AllowDeny;False) //Deny
 APPEND TO ARRAY($filters;86.1*")  //Select IP addresses beginning with 86.1 (86.10, 86.135 etc.)
 APPEND TO ARRAY($AllowDeny;False) //Deny
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
  //(Note that the IP address of a domain may vary).
```

#### See also 

[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1030 |
| Thread safe | &cross; |


