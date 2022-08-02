---
id: onPageChange
title: On Page Change
---

|Code|Can be called by|Definition|  
|---|---|---|
|56|Form|The current page of the form is changed|


## Description

This event is only available at the form level (it is called in the form method). It is generated each time the current page of the form changes (following a call to the `FORM GOTO PAGE` command or a standard navigation action).

Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including [Web areas](FormObjects/webArea_overview.md).

> The only exception is 4D View Pro areas, for which you need to call the [On VP Ready](onVpReady.md) specific event. 

The `On Page Change` event is useful for executing code that requires all objects to be initialized beforehand. You can also use it to optimize the application by executing code (for example, a search) only after a specific page of the form is displayed and not just as soon as page 1 is loaded. If the user does not go to this page, the code is not executed.