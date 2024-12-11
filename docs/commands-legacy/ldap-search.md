---
id: ldap-search
title: LDAP Search
slug: /commands/ldap-search
displayed_sidebar: docs
---

<!--REF #_command_.LDAP Search.Syntax-->**LDAP Search** ( *dnRootEntry* ; *filter* {; *scope* {; *attributes* {; *attributesAsArray*}}} ) : Object<!-- END REF-->
<!--REF #_command_.LDAP Search.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dnRootEntry | Text | &#8594;  | Distinguished Name of root entry where search is to start |
| filter | Text | &#8594;  | LDAP search filter |
| scope | Text | &#8594;  | Scope of search: "base" (default), "one", or "sub" |
| attributes | Text array | &#8594;  | Attribute(s) to fetch |
| attributesAsArray | Boolean array | &#8594;  | True = force attributes to be returned as array; False = force attributes to be returned as a simple variable |
| Function result | Object | &#8592; | Key/value attributes |

<!-- END REF-->

#### Description 

<!--REF #_command_.LDAP Search.Summary-->The **LDAP Search** command searches in the target LDAP server for the first occurrence matching the criteria defined.<!-- END REF--> This command must be executed within a connection to an LDAP server opened with [LDAP LOGIN](ldap-login.md); otherwise a 1003 error is returned.

In *dnRootEntry*, pass the *Distinguished Name* of the LDAP server root entry; the search will start at this entry.

In *filter*, pass the LDAP search filter to execute. The filter string must be compliant with [rfc2225](http://tools.ietf.org/search/rfc2254). You can pass an empty string "" in order not to filter the search; the "\*" is supported to search substrings. 

In *scope*, pass one of the following constants from the "*LDAP*" theme:

| Constant           | Type   | Value | Comment                                                                                                     |
| ------------------ | ------ | ----- | ----------------------------------------------------------------------------------------------------------- |
| LDAP all levels    | Text | sub   | Search in the root entry level defined by *dnRootEntry* and in all subsequent entries                       |
| LDAP root and next | Text | one   | Search in the root entry level defined by *dnRootEntry* and in the directly subsequent entries on one level |
| LDAP root only     | Text | base  | Search only in the root entry level defined by *dnRootEntry* (default if omitted)                           |

In *attributes*, pass a text array which contains the list of all LDAP attributes to fetch from the matched entries. By default, if this parameter is omitted, all attributes are fetched.

**Note:** Keep in mind that LDAP attribute names are case-sensitive. For more information on LDAP attributes, you can refer to [this page](https://msdn.microsoft.com/en-us/library/ms675089%28v=vs.85%29.aspx) that lists all available attributes for the MS Active directory.

By default, the command returns attributes as a collection if multiple results are found, or as a variable if a single result is found. The optional *attributesAsArray* parameter allows you to "force" returned attribute(s) to be formatted as a collection or as a variable for each attribute defined:

* When you pass **true** in an element, the corresponding element of the *attributes* parameter will be returned in a collection. If a single value is found, the command returns a collection with a single element.
* When you pass **false** in an element, the corresponding element of the *attributes* parameter will be returned in a simple variable. If multiple entries are found, the command returns only the first element.

#### Example 1 

You want to get the phone number of the user "smith" in the company directory:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN($url;$dn;$pwd)
 $filter:="cn=*smith*"
 $vfound:=LDAP Search($dnSearchRootEntry;$filter;LDAP all levels;$_tabAttributes)
 LDAP LOGOUT
```

#### Example 2 

We want to get an array of all entries found for the "memberOf" attribute:

```4d
 var $entry : Object
 ARRAY TEXT($_tabAttributes;0)
 ARRAY BOOLEAN($_tabAttributes_asArray;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes_asArray;False)
 APPEND TO ARRAY($_tabAttributes;"memberOf")
 APPEND TO ARRAY($_tabAttributes_asArray;True)
 
 LDAP LOGIN($url;$login;$pwd;LDAP password plain text)
 $entry:=LDAP Search($dnSearchRootEntry;"cn=adrien*";LDAP all levels;$_tabAttributes;$_tabAttributes_asArray)
 LDAP LOGOUT
 
 ARRAY TEXT($_arrMemberOf;0)
 OB GET ARRAY($entry;"memberOf";$_arrMemberOf)
  // in $_arrMemberOf we have an array containing all entry groups
```

#### See also 

*LDAP*  
[LDAP SEARCH ALL](ldap-search-all.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1328 |
| Thread safe | &check; |
| Forbidden on the server ||


