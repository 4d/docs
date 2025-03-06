---
id: LDAP
title: LDAP
---
||
|---|
|[**LDAP LOGIN** ( *url* ; *login* ; *password* {; *digest*} )](../../commands-legacy/ldap-login)<br/>The **LDAP LOGIN** command opens a read-only connection to the LDAP server specified in the *url* parameter with the *login* and *password* identifiers provided.|
|[**LDAP LOGOUT**](../../commands-legacy/ldap-logout)<br/>The **LDAP LOGOUT** command closes the connection with an LDAP server in the current process (if applicable).|
|[**LDAP Search** ( *dnRootEntry* ; *filter* {; *scope* {; *attributes* {; *attributesAsArray*}}} ) : Object](../../commands-legacy/ldap-search)<br/>The **LDAP Search** command searches in the target LDAP server for the first occurrence matching the criteria defined.|
|[**LDAP SEARCH ALL** ( *dnRootEntry* ; *arrResult* ; *filter* {; *scope* {; *attributes* {; *attributesAsArray*}}} )](../../commands-legacy/ldap-search-all)<br/>The **LDAP SEARCH ALL** command searches in the target LDAP server for all occurrences matching the criteria defined.|
