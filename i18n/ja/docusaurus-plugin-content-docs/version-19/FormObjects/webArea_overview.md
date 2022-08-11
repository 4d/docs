---
id: webAreaOverview
title: Web Area
---


Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine).

It is possible to create several web areas in the same form. Note, however, that the use of web areas must follow [several rules](#web-areas-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of web areas. Specific variables can be used to exchange information between the area and the 4D environment.
> The use of web plugins and Java applets is not recommended in web areas because they may lead to instability in the operation of 4D, particularly at the event management level.

## Specific properties

### Associated variables

Two specific variables can be associated with each web area:

- [`URL`](properties_WebArea.md#url) --to control the URL displayed by the web area
- [`Progression`](properties_WebArea.md#progression) -- to control the loading percentage of the page displayed in the web area.

### Web rendering engine

You can choose between [two rendering engines](properties_WebArea.md#use-embedded-web-rendering-engine) for the web area, depending on the specifics of your application.

Selecting the embedded web rendering engine allows you to call 4D methods from the web area.

### Access 4D methods

When the [Access 4D methods](properties_WebArea.md#access-4d-methods) property is selected, you can call 4D methods from a web area.

> This property is only available if the web area [uses the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

### $4d object

The [4D embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```codeJS
$4d.HelloWorld();
```
> JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").

The syntax of calls to 4D methods is as follows:

```codeJS
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: You can pass as many parameters as you need to the 4D method. These parameters can be of any type supported by JavaScript (string, number, array, object).

- `function(result)`: Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the `result` parameter.

- `result`: Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the `C_OBJECT` command to return the objects.

> By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Example 1

Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

4D code of `today` method:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

In the web area, the 4D method can be called with the following syntax:

```js
$4d.today()
```

The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the web area.

Here is the code of the HTML page:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(dollarZero)
{
    var curDate = dollarZero;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### Example 2

The 4D project method `calcSum` receives parameters (`$1...$n`) and returns their sum in `$0`:

4D code of `calcSum` method:

```4d
 C_REAL(${1}) // receives n REAL type parameters
 C_REAL($0) // returns a Real
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

The JavaScript code run in the web area is:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // result is 262.5
    });
```

## Standard actions

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` and `Stop Loading URL`. These actions can be associated with buttons or menu commands and allow quick implementation of basic web interfaces. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

## Form events

Specific form events are intended for programmed management of web areas, more particularly concerning the activation of links:

- [`On Begin URL Loading`](Events/onBeginUrlLoading.md)
- [`On URL Resource Loading`](Events/onUrlResourceLoading.md)
- [`On End URL Loading`](Events/onEndUrlLoading.md)
- [`On URL Loading Error`](Events/onUrlLoadingError.md)
- [`On URL Filtering`](Events/onUrlFiltering.md)
- [`On Open External Link`](Events/onOpenExternalLink.md)
- [`On Window Opening Denied`](Events/onWindowOpeningDenied.md)

In addition, web areas support the following generic form events:

- [`On Load`](Events/onLoad.md)
- [`On Unload`](Events/onUnload.md)
- [`On Getting Focus`](Events/onGettingFocus.md)
- [`On Losing Focus`](Events/onLosingFocus.md)

## Web area rules

### User interface

When the form is executed, standard browser interface functions are available to the user in the web area, which permit interaction with other form areas:

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the web area. Display of the context menu can be controlled using the `WA SET PREFERENCE` command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties. For security reasons, changing the contents of a web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the cursor displays a "forbidden" icon ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE` command to explicitly allow the dropping of URLs or files in the web area.

### Subforms

For reasons related to window redrawing mechanisms, the insertion of a web area into a subform is subject to the following constraints:

- The subform must not be able to scroll
- The limits of the web area must not exceed the size of the subform

> Superimposing a web area on top of or beneath other form objects is not supported.

### Web Area and Web server conflict (Windows)

In Windows, it is not recommended to access, via a web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own web server.

### Insertion of protocol (macOS)

The URLs handled by programming in web areas in macOS must begin with the protocol. For example, you need to pass the string "http://www.mysite.com" and not just "www.mysite.com".

## Access to web inspector

You can view and use a web inspector within web areas in your forms or in offscreen web areas. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages.

### Displaying the web inspector

To display the web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/> This command can be used directly with onscreen (form object) and offscreen web areas. In the case of an onscreen web area, you must have [selected the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) for the area (the web inspector is only available with this configuration).

- **Use the web area context menu**<br/> This feature can only be used with onscreen web areas and requires that the following conditions are met:
  - the embedded web rendering engine is selected for the area
  - the [context menu](properties_Entry.md#context-menu) for the web area is enabled
  - the use of the inspector is expressly enabled in the area by means of the following statement:

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

For more information, refer to the description of the `WA SET PREFERENCE` command.

### Using the web inspector

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. When you select this option, the web inspector window is displayed.

> The web inspector is included in the embedded web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the web rendering engine.

## Supported Properties

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
