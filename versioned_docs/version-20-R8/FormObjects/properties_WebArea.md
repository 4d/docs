---
id: propertiesWebArea
title: Web Area 
---

---
## Access 4D methods

You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all"). 

> This property is only available if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

When this property is on, a special JavaScript object named `$4d` is instantiated in the Web area, which you can [use to manage calls to 4D project methods](webArea_overview.md#4d-object). 



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|methodsAccessibility|string|"none" (default), "all"|

#### Objects Supported 

[Web Area](webArea_overview.md)


---
## Progression

Name of a Longint type variable. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually.

> As of 4D v19 R5, this variable is only updated on Windows if the Web area [uses the embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|progressSource|string|Name of a Longint variable|

#### Objects Supported 

[Web Area](webArea_overview.md)




---
## URL

A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:

*	If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area.
*	Any browsing done within the Web area will automatically update the contents of the variable.

Schematically, this variable functions like the address area of a Web browser. You can represent it via a text area above the Web area.

### URL Variable and WA OPEN URL command

The URL variable produces the same effects as the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command. The following differences should nevertheless be noted:
- For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\MyDoc"). The [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command accepts both notations.
- If the URL variable contains an empty string, the Web area does not attempt to load the URL. The [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command generates an error in this case.
- If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command.
- When the Web area is not displayed in the form (when it is located on another page of the form), executing the [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|urlSource|string |A URL.|

#### Objects Supported 

[Web Area](webArea_overview.md)






---
## Use embedded Web rendering engine

This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:

*	**unchecked** - `JSON value: system` (default): In this case, 4D uses the "best" engine corresponding to the system. This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between platforms. On Windows, 4D uses Microsoft Edge WebView2. On macOS, 4D uses the current version of WebKit (Safari).

> On Windows, if Microsoft Edge WebView2 is not installed, 4D uses the embedded engine as system rendering engine. To know if it is installed in your system, look for "Microsoft Edge WebView2 Runtime" in your applications panel. 

*	**checked** - `JSON value: embedded`: In this case, 4D uses the Chromium Embedded Framework (CEF). Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are regularly provided through 4D.

The CEF engine has the following limitations:

- [WA SET PAGE CONTENT](https://doc.4d.com/4dv19/help/command/en/page1037.html): using this command requires that at least one page is already loaded in the area (through a call to [`WA OPEN URL`](https://doc.4d.com/4dv19/help/command/en/page1020.html) or an assignment to the URL variable associated to the area).
- When URL drops are enabled by the `WA enable URL drop` selector of the [WA SET PREFERENCE](https://doc.4d.com/4dv19/help/command/en/page1041.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4dv19/help/command/en/page1020.html) or one assignment to the URL variable associated to the area.

:::note

You can customize CEF area parameters by creating a local [4DCEFParameters.json configuration file](webArea_overview.md#4dcefparametersjson).

:::

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|webEngine| string|"embedded", "system"|

#### Objects Supported 

[Web Area](webArea_overview.md)
