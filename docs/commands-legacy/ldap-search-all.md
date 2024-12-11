---
id: ldap-search-all
title: LDAP SEARCH ALL
slug: /commands/ldap-search-all
displayed_sidebar: docs
---

<!--REF #_command_.LDAP SEARCH ALL.Syntax-->**LDAP SEARCH ALL** ( *dnRootEntry* ; *arrResult* ; *filter* {; *scope* {; *attributes* {; *attributesAsArray*}}} )<!-- END REF-->
<!--REF #_command_.LDAP SEARCH ALL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | Distinguished Name of root entry where search is to start |
| arrResult | Object array | &#8592; | Result of the search |
| filter | Text | &#8594;  | LDAP search filter |
| scope | Text | &#8594;  | Scope of the search: "base" (default), "one", or "sub" |
| attributes | Text array | &#8594;  | Attribute(s) to fetch |
| attributesAsArray | Boolean array | &#8594;  | True = force attributes to be returned as array; false = force attributes to be returned as a simple variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.LDAP SEARCH ALL.Summary-->The **LDAP SEARCH ALL** command searches in the target LDAP server for all occurrences matching the criteria defined.<!-- END REF--> This command must be executed within a connection to an LDAP server opened with [LDAP LOGIN](ldap-login.md); otherwise a 1003 error is returned.

Note that LDAP servers usually impose a maximum number of entries that can be received from a search. For example, Microsoft Active directory limits this number to 1000 entries by default.

In *dnRootEntry*, pass the *Distinguished Name* of the LDAP server root entry; the search will start at this entry.

In *arrResult*, pass an object array that will be filled with all matching entries; in this array, each element is an object containing attribute/value pairs returned for a matching entry. You can use the *attributes* parameter to define the attributes to be returned. 

In *filter*, pass the LDAP search filter to execute. The filter string must be compliant with [rfc2225](http://tools.ietf.org/search/rfc2254). You can pass an empty string "" in order not to filter the search; the "\*" is supported to search substrings. 

In *scope*, pass one of the following constants from the "*LDAP*" theme:

| Constant           | Type   | Value | Comment                                                                                                     |
| ------------------ | ------ | ----- | ----------------------------------------------------------------------------------------------------------- |
| LDAP all levels    | Text | sub   | Search in the root entry level defined by *dnRootEntry* and in all subsequent entries                       |
| LDAP root and next | Text | one   | Search in the root entry level defined by *dnRootEntry* and in the directly subsequent entries on one level |
| LDAP root only     | Text | base  | Search only in the root entry level defined by *dnRootEntry* (default if omitted)                           |

In *attributes*, pass a text array which contains the list of all LDAP attributes to fetch from the matched entries. By default, if this parameter is omitted, all attributes are fetched.

**Note:** Keep in mind that LDAP attribute names are case-sensitive. For more information on LDAP attributes, you can refer to [this page](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) that lists all available attributes for the MS Active directory.

By default, the command returns attributes as an array if multiple results are found, or as a variable if a single result is found. The optional *attributesAsArray* parameter allows you to "force" the attribute(s) returned to be formatted as an array or as a variable for each attribute defined:

* When you pass **true** in an element, the corresponding element of the *attributes* parameter will be returned in an array. If a single value is found, the command returns an array with a single element.
* When you pass **false** in an element, the corresponding element of the *attributes* parameter will be returned in a simple variable. If multiple entries are found, the command returns only the first element.

#### Example 1 

We want to get the phone number of all users named "smith" in the company directory:

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"telephoneNumber")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 ARRAY OBJECT($_entry;0)
 
 LDAP LOGIN($url;$myLogin;$pwd)
 $filter:="cn=*smith*"
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
 
 
  //$_entry will contain for example
  // $_entry{1} = {"cn":"John Smith","telephoneNumber":"01 40 87 00 00"}
  // $_entry{2} = {"cn":"Adele Smith","telephoneNumber":"01 40 87 00 01"}
  // $_entry{3} = {"cn":"Adrian Smith","telephoneNumber":"01 23 45 67 89"}
  // ...
```

#### Example 2 

These examples illustrate the use of the *attributesAsArray* parameter:

```4d
 ARRAY OBJECT($_entry;0)
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($_entry{1};"memberOf";$_arrMemberOf)
  // in $_arrMemberOf we have an array containing all groups of the entry
```

```4d
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 LDAP SEARCH ALL($dnSearchRootEntry;$_entry;$filter;LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 $memberOf:=OB Get($_entry{1};"memberOf")
  // in $memberOf we have a variable containing the first group of the entry
```

#### See also 

*LDAP*  
[LDAP Search](ldap-search.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1329 |
| Thread safe | &check; |
| Forbidden on the server ||


