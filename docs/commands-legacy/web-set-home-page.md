---
id: web-set-home-page
title: WEB SET HOME PAGE
slug: /commands/web-set-home-page
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HOME PAGE.Syntax-->**WEB SET HOME PAGE** ( *homePage* )<!-- END REF-->
<!--REF #_command_.WEB SET HOME PAGE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| homePage | Text | &#8594;  | Page name or HTML access path to the page or "" to not send the custom home page |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SET HOME PAGE.Summary-->The **WEB SET HOME PAGE** command allows you to modify the custom home page for the current Web process.<!-- END REF-->

The defined page is linked to the Web process, you can therefore define the different home pages depending, for example, on the user that is connected. This page can either be static or semi-dynamic. 

You pass the name of the HTML home page or the page’s HTML access path to the *homePage* parameter. 

**Note:** If the page specified in the *homePage* parameter does not exist when the Web process accesses it for the first time, the Web server creates it and assigns it the contents of the default home page (see ). 

To stop sending *homePage* as home page for the current Web process, execute **WEB SET HOME PAGE** with an empty string ("") passed in *homePage*.

**Note:** The default home page of the Web server is specified in the Database Settings dialog box. 
