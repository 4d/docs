---
id: onOpenExternalLink
title: On Open External Link
---

|Code|Can be called by|Definition|  
|---|---|---|
|52|[Web Area](FormObjects/webArea_overview.md)|An external URL has been opened in the browser|


## Description

This event is generated when the loading of a URL was blocked by the Web area and the URL was opened with the current system browser, because of a filter set up via the `WA SET EXTERNAL LINKS FILTERS` command.

You can find out the blocked URL using the `WA Get last filtered URL` command.


### See also
[`On URL Filtering`](onUrlFiltering.md)