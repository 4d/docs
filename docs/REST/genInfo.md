---
id: genInfo
title: Getting Information 
---

You can get several information from the REST server:

- the exposed datastores and their attributes
- the REST server cache contents, including user sessions.

## Catalog

Use the [`$catalog`](catalog), [`$catalog/{datastoreClass}`](catalog_{datastoreClass}), or [`$catalog/$all`](catalog_$all) parameters to get the list of exposed datastore classes and their attributes.

Note that the user must be in a group that has **Describe** permissions. For more information, refer to **Permission Actions**.

## Cache info

Use the [`$info`](info) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions. 
