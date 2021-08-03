---
id: web-studio
title: Web Studio
---

> **Preview**: The web studio is provided as a preview feature, allowing you to familiarize with the new concepts and philosophy. Since this feature is still in early stages of development, it is not recommended to use it in a production environment.

The web studio is a powerful integrated development environment (IDE) that lets you tap into various data sources such as the database and methods of a 4D project, and link them to highly customizable interface elements in order to build complete applications.

At this stage, only the webform designer is available.

![alt-text](assets/en/web-studio/web-studio-intro.png)

### 要件

The web studio supports the following web browsers:

- Chrome
- Safari (not recommended at this stage)
- Edge
- FireFox

The recommended resolution is 1920x1080.

> The web studio is not compatible with binary databases. When working with a binary database, opening the web studio  will throw an error.

## アクセス設定

The web studio relies on the [`WebAdmin`](../Admin/webAdmin.md) web server component for its configuration and authentication settings.

- **configuration**: The web studio configuration inherits the [`WebAdmin` web server settings](../Admin/webAdmin.md#webadmin-settings),
- **authentication**: Access to the web studio is granted when the [session user is authenticated](../Admin/webAdmin.md#authentication-and-session) and has the "WebAdmin" privilege. When the web studio is accessed through the **Design** > **Web Studio...** menu item, automatic authentication is provided.

> **TODO --> ADD protection docs**

## Opening the web studio

The web studio page is automatically available when [the `WebAdmin` web server is started](../Admin/webAdmin.md#starting-the-webadmin-web-server).

 There are two ways to access the web studio :

 *  from a 4D application, go to **Design** > **Web Studio...**.

    If the `WebAdmin` server is already running, your default browser opens at `IPaddress:HTTPPort/studio`. Otherwise, you will be asked if you want to start the `WebAdmin` web server first.

 *  on a browser, with the `WebAdmin` web server running, enter the following address:
   
        IPaddress:HTTPPort/studio

    または:
   
        IPaddress:HTTPSPort/studio

    For example, after launching a local web server on port 7080, type this address in your browser to access the web studio: 
   
        localhost:7080/studio

You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to open a `WebAdmin` session on the server:

![alt-text](assets/en/Admin/accessKeyEnter.png)

> [HTTPPort](../Admin/webAdmin.md#http-port) and [HTTPSPort](../Admin/webAdmin.md#https-port) values are configured in the `WebAdmin` settings.

## Interface

The web studio provides several tools ranging from interface customization to method and event linking.

![alt-text](assets/en/web-studio/web-studio-interface.png)

<ol class="interface-numbers">
<li class="interface-item">Explorer: Displays your project's web forms, methods, classes, assets and data model.</li>
<li class="interface-item">Tabs: They let you keep track of your currently opened elements, such as your forms and methods.</li>
<li class="interface-item">Components: The building blocks of your end user's application interface. </li>
<li class="interface-item">Canvas: This is where you combine your components, styles and data sources. You can drag and drop components onto your canvas, then drag and drop styles and data sources onto these components.</li>
<li class="interface-item">Event and method editors: This is where you link events and methods to your components.</li>
<li class="interface-item">Properties panel: Allows for advanced style customization.</li>
<li class="interface-item">Menu buttons: Save all your work, preview the end user's application, and access your settings.</li>
</ol>

### エクスプローラー

You can see the explorer as the skeleton of your project. It displays your project's web forms, methods, classes, assets and data model.

![alt-text](assets/en/web-studio/explorer.png)

### Tabs

These tabs let you keep track of which elements of your project are currently opened, such as methods or web forms for example.

![alt-text](assets/en/web-studio/tabs.png)

### コンポーネント

This area lets you search for a component or choose one from the list. Once a component is on the canvas, you can customize its look and designate the data it displays using the Styles library and the Properties Panel.

![alt-text](assets/en/web-studio/components.png)

The following components are available:

| Component | 説明  |
| --------- | --- |
| Comp1     | --- |

> More components will be available in the future.

### Styles Library

The styles library offers a choice of predefined CSS styles that you can apply to your components.

![alt-text](assets/en/web-studio/styles-library.png)

There are two categories of styles:
* **Theme**: styles available by default
* **Local**: styles you create

### Data Sources

Data Sources allow you to display data on your web forms. This section groups the available data sources.

![alt-text](assets/en/web-studio/data-sources.png)

In this section, you'll find the following:

*  The **Catalog** holds data from your 4D Project. You can designate entities or entity selections from your datastore, and they will be stored on the server as **Remote** data sources.
*  **Remote** data sources: Entities and entity selections, handled on the server, that can be assigned to components.
*  **Local** data sources: Scalar types. No request is sent to the server to access these data sources, they are handled with the browser's memory.

The data sources display attributes as well as data class functions/methods.

### Canvas
This is a WYSIWIG tool where you drop your components, styles and data sources to build your application.

> **TODO**: show tooltip, interaction with outline and breadcrumbs

Some components' visual properties (column size in datatables or grid areas for example) can be edited directly on the canvas.

![alt-text](assets/en/web-studio/canvas.png)

### Properties Panel

This panel allows for advanced component customization. It is a dynamic panel, which means that its contents adapt to the selected component.

As a rule, component properties and styling are separated.

![alt-text](assets/en/web-studio/style-panel.png)

When you edit CSS using the properties panel, it overrides the CSS defined for the component.

### Events, Methods and Code Panel

![alt-text](assets/en/web-studio/events.png)

You can link events to your components. For example, you can assign an `onchange` event to a search bar so that it suggests a list of employees as the user is typing.

These events are used to execute code on the 4D server. There's no need to write additional Javascript or React code.

Events are executed in the defined order, and you can map one method to several events or one event to several methods.

## Known limitations

At this stage, there is no debugger for the web studio.

You cannot navigate from page to page.

The web form cannot be rendered exclusively in the web studio (eye icon).

## WEB Form Object

The object returned by the [WEB Form](https://doc.4d.com/4dv19/help/command/en/page1735.html) command lets you handle, on the server side, the behavior of your WebForm and its components.

#### Accessing a web form's components

Each property of the object returned by the [WEB Form command](https://doc.4d.com/4dv19R/help/command/en/page1735.html) is a [web form component](web-studio.md#components). The property name is the server reference of the component.

For example, the following code hides the component that has `firstName` as server reference.

```4d
$input:=WebForm.firstName 
$input.hide()
```

#### Setting the behavior of web form components using functions

Each web form component object contains the following functions:

| Function                   | 説明                                                 |
| -------------------------- | -------------------------------------------------- |
| show()                     | displays the component                             |
| hide()                     | hides the component                                |
| addCSSClass($className)    | adds the specified CSS class to the component      |
| removeCSSClass($className) | removes the specified CSS class from the component |

#### 例題

```4d 
WebForm.firstName.hide() // hides the component that has "firstName" as server reference

WebForm.firstName.show() //displays the component that has "firstName" as server reference

WebForm.firstName.addCSSClass("red") // adds the "red" CSS class to the component

WebForm.firstName.removeCSSClass("red") // The "red" CSS class is removed from the component
```

## WEB Event Object

The [WEB Event](https://doc.4d.com/4dv19R/help/command/en/page1734.html) command returns an object describing the event triggered in a web form component, such as a button or a datatable.

The command must be called in the context of a web form handled by the web server (see [WEB Form command](https://doc.4d.com/4dv19R/help/command/en/page1735.html)).

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ     | タイプ    | 説明                                                                                                            |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| caller    | テキスト   | Server reference of the component triggering the event                                                        |
| eventType | テキスト   | Event type (onclick, onchange, onmouseover...)                                                                |
| data      | オブジェクト | For Tabs component: contains an index property (Number) with the index of the clicked Tab (index starts at 0) |

####

This generic method can be called on the server for several components:

```4d 
var $event; $webForm : Object

$webForm:=Web Form
$event:=Web Event
$compRef:=$event.caller //server reference of the web component

If ($event.eventType="onmouseover") // event is onmouseover
$webForm["helpOn_"+$compRef].show() // displays help on the component (e.g. "orderNumber")
// by showing the text component with reference "helpOn_orderNumber"
Else
$webForm["helpOn_"+$compRef].hide() // hides the help on orderNumber
End if
```
