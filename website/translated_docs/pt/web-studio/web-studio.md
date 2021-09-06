---
id: web-studio
title: 4D Web Studio
---

> **Preview**: The web studio is provided as a preview feature, allowing you to familiarize with the new concepts and philosophy. This feature is still in early stages of development, it's not recommended to use it in a production environment.

## Visão Geral

4D WebStudio is a powerful low-code platform for web design and development. More specifically, it's an integrated development environment (IDE) that lets you tap into various data sources (for example, the database of a 4D project), and link them to interface elements in order to build complete applications.

At this stage, only the Web Form Designer, the code editor and the contextual configuration panel are available.

![alt-text](assets/en/web-studio/web-studio-intro.png)

> The web studio is not compatible with binary databases.

## Requisitos

### Browser

The web studio supports the following web browsers:

- Chrome
- Edge
- FireFox

The recommended resolution is 1920x1080.

### License

4D WebStudio is available with the corresponding license.

## Configuration

Before opening the web studio, you need to enable access to it and activate authentication.

### Enabling access to the web studio

By default, access to the web studio is not granted. You need to enable access to it on the database level and on the `WebAdmin` web server level.

1. To enable access to the web studio on the database level, you need to check the option on the [web server configuration page](../WebServer/webServerAdmin.md#enable-access-to-the-web-studio).

    To do this, go to **Settings** > **Web** > **Web features** and check **Enable access to the web studio**.

2.  To enable access to the web studio on the [`WebAdmin`](../Admin/webAdmin.md) web server, go to **File** > **Web Administration** > **Settings...** and check **Enable access to the web studio**

### Activating authentication

Authentication on the `WebAdmin` web server is granted using an access key. For more details, see [Access key](../Administration/webAdmin.md#access-key)

### Opening the web studio

The web studio page is available when the [`WebAdmin` web server is running](../Admin/webAdmin.md#starting-the-webadmin-web-server) and [authentication is activated](#activating-authentication).

There are two ways to access the web studio:

*   from your 4D standalone application, go to **Design** > **Web Studio...**.

    If the `WebAdmin` server is already running, your default browser opens at `IPaddress:HTTPPort/studio`. Otherwise, you will be asked if you want to start the `WebAdmin` web server first.

*   on a browser, with the `WebAdmin` web server running (launched from 4D or 4D Server), enter the following address:
  
        IPaddress:HTTPPort/studio

    or:
  
        IPaddress:HTTPSPort/studio

    For example, after launching a local web server on port 7080, type this address in your browser to access the web studio: 
  
        localhost:7080/studio

    You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to open a `WebAdmin` session on the server.

## Getting Started

### Creating a WebForm

In 4D WebStudio, everything starts with a WebForm. A WebForm is a container that holds all the other components (buttons, grids, style boxes, etc.) of your application.

To create a WebForm:
* from the homepage, click **Webform** and enter a name for the new Webform. The WebForm editor opens.
* from the WebForm editor, click the **New +** tab > **Webform**

### Web Form Editor Interface

The Web Form Editor provides several tools to customize the interface and contents of your application:

![interface](assets/en/web-studio/web-studio-interface.png)

<ol class="interface-numbers">
<li class="interface-item">Explorer: Displays your project's web forms, methods and classes (assets and data models are not available yet)</li>
<li class="interface-item">Tabs: They let you keep track of your currently opened elements, such as your forms and methods.</li>
<li class="interface-item">Components: The building blocks of your end user's application interface. </li>
<li class="interface-item">Canvas: This is where you combine your components, styles and data sources. You can drag and drop components onto your canvas, then drag and drop CSS classes and data sources onto these components.</li>
<li class="interface-item">Contextual configuration panel: This is where you link events and methods to your components, edit CSS styles, etc.</li>
<li class="interface-item">Properties panel: Allows for advanced style customization. Also allows binding a datasource to a component.</li>
<li class="interface-item">Menu buttons: Save all your work, preview the end user's application</li>
</ol>

### Adding components to the Web Form

Components are the building blocks of your application. To add a component, drag it from the Components section and drop it on the canvas.

![add-component-screenshot](assets/en/web-studio/add-component.png)

### Keeping track of the structure

You can use the following tools to manage your components and keep track of them.

#### Breadcrumbs

When you select a component, the breadcrumbs display its hierarchy:

![breadcrumbs](assets/en/web-studio/breadcrumbs.png)

To select any parent component displayed in the breadcrumbs trail, click its name.

#### Tooltip

When you select a component, the tooltip displays its type and offers several actions:

| Icon           | Description                                        |
| -------------- | -------------------------------------------------- |
| Cursor         | Move the selected component on the canvas          |
| Arrow          | Select the parent component                        |
| Delete         | Remove the selected component from the canvas      |
| CSS            | Export the selected element's style to a CSS class |
| Barred T       | Reset styles                                       |
| Duplicate icon | Duplicate the component                            |

The tooltip is contextual. This means that some actions are only available to certain elements, and not others. For example, you can duplicate a Text Input component, but not its individual parts (Label and Input).

#### Outline

The outline section displays the hierarchy of your Webform. You can click an element in the list to select it, or click and drag it anywhere in the outline to move it somewhere else.

To display or hide an element, click the eye icon.

### Styling a component

Inside a WebForm, you can style components using the Properties panel and the Styles library and see the result directly on the canvas.

#### Styles Library

One way of styling components is by dragging CSS classes from the Styles library and dropping them on the components.

The Styles Library offers two types of styles:
* Local: Styles you create
* Theme: Predefined CSS classes

![styles-library](assets/en/web-studio/styles-library.png)

Unlike Theme classes, Local styles can only be used in the Web Forms in which they are created.

#### Properties Panel

The properties panel gives you extremely granular control over your elements.

After you select an element, you can edit its properties using this panel. This includes style properties (as a rule, component properties and styling are separated).

Using the properties panel, you can bind a CSS class to the element and define values individually.

![styles-library](assets/en/web-studio/properties-panel.png)

Some visual properties, such as column size in datatables or grid areas, can be edited directly on the canvas.

##### Overridden properties

When you edit CSS using the properties panel, it overrides the CSS defined for the component (default styles and CSS classes applied). Overriden properties have a blue dot in front of them.


#### Example

To add a red background to a Button component:
* From the Styles library: drag the `bg-red-500` class from the Styles library and drop it on the Button component

* Using the Properties Panel:
    * Select the Button component, and under Style, choose a red color for the background
    * Select the Button component, and in the properties panel, select the `bg-red-500` class in the CSS section.

### Exporting styles as CSS classes for reuse

You can export the style of an element as a CSS class to reuse it later. To do this:
1. Select a an element on the canvas, the tooltip appears
2. Click the CSS icon in the tooltip and enter a name for the new CSS class
3. Click **Export**

This exports the style of the element as a local CSS class. Now it appears as a choice in the Styles library and in the property list, and you can apply the class to other elements on your canvas.

Note that only the [overridden properties](#overriden-properties) are exported as a CSS class.

#### Editing a class

Once a local class is created, you can hover over it in the Styles Library and click the **Edit Class** button next to its name to edit the CSS directly. The changes apply to all the components using this class.

## Components

This area lets you search for a component or choose one from the list. Once a component is on the canvas, you can [customize its look](#styling-a-component) and (for some components) assign a data source to it.

![alt-text](assets/en/web-studio/components.png)

The following components are available:

| Component    | Description                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| Web Form     | Base container that holds all the other components                                                            |
| Style box    | Container used to keep the content centered and legible                                                       |
| Grid         | Allows you to produce complex and responsive layouts faster. Grid areas can be edited directly on the canvas  |
| Columns      | Used in other components to organize information on a page                                                    |
| Tabs         | Organizes and allows navigation between groups of content that are related and at the same level of hierarchy |
| Text input   | Allows users to enter data in a form                                                                          |
| Button       | Triggers actions on a web page. Serves as call to action (CTA) and links to pages, forms, assets, and more    |
| Radio button | Allows selecting one of a set of options (only one option can be selected at any time)                        |
| Range input  | Allows selecting a range of numeric values                                                                    |
| Select box   | Allows selecting an item in a list                                                                            |
| Image        | Displays an image                                                                                             |
| Icon         | Displays an icon                                                                                              |
| Check box    | Allows the user to make a binary choice (boolean value)                                                       |
| Text         | Displays text on a web page                                                                                   |
| Datatable    | Displays data in the form of a table. Rows can be selected to interact with the server                        |
| Matrix       | Container of repeated style boxes                                                                             |

> More components will be available in the future, and existing components will be enhanced.

## About data sources

Data sources contain data and automatically generate events when that data is changed. You can attach components to these events so that :
* data is automatically sent from the datasource to the component
* when an end-user enters data in a component attached to a datasource, the datasource data is updated automatically
* etc.

The **Data Sources** section groups the available data sources:

![alt-text](assets/en/web-studio/data-sources.png)

In this section, you'll find the following:

*  The **Catalog** holds data from your 4D Project. You can designate entities or entity selections from your [datastore](../ORDA/dsMapping.md#datastore), and they will be handled by the server as **Remote** data sources.

*  **Remote** data sources: Entities and entity selections, handled on the server, that can be assigned to components. They offer functions defined on the ORDA classes that they instantiate (DataStore classes, Dataclass class, Entity class, Entity Selection class).

> Only the dataclasses and dataclass attributes [exposed as REST resources](https://doc.4d.com/4Dv19/4D/19/Field-properties.300-5416814.en.html) will be available at run time.

*  **Local** data sources: Scalar types handled with the browser's memory. No request is sent to the server to access this data source.

Only [exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) can be used when configuring an event.

The data sources display the attributes as well as the functions/methods of data classes.
## Creating a data source

## Adding events and methods

![alt-text](assets/en/web-studio/events.png)

You can link events to your components. For example, you can assign an `onchange` event to a search bar so that it suggests a list of employees as the user is typing.

These events are used to execute code on the 4D server. There's no need to write additional Javascript or React code.

Events are executed in the defined order, and you can map one method to several events or one event to several methods.

> **TODO --> Add description of the particular event on the component: Onload**

### WEB Form Object

Using the [WEB Form](https://doc.4d.com/4dv19/help/command/en/page1735.html) command, you can handle the behavior of your webform and its components on the server side.

#### Server-side reference

The [WEB Form](https://doc.4d.com/4dv19R/help/command/en/page1735.html) command returns an object, and each of this object's properties is the server-side reference of a [component](web-studio.md#components).

For example, `Web Form.myImage` refers to the image component with `myImage` as server-side reference.

You can assign a server-side reference to your components in the properties panel:

![alt-text](assets/en/web-studio/image-server-side.png)

In the above image, the server-side reference of the Image component is "imageAlias".

#### Available functions

Each webform component object offers the following functions:

| Function                   | Description                                        |
| -------------------------- | -------------------------------------------------- |
| show()                     | displays the component                             |
| hide()                     | hides the component                                |
| addCSSClass($className)    | adds the specified CSS class to the component      |
| removeCSSClass($className) | removes the specified CSS class from the component |

#### Example

To call a function that hides an image when the user clicks a button:

![alt-text](assets/en/web-studio/web-form-object.png)

In the above image:
* The image has `imageAlias` as server-side reference
* The **Hide** button component has an `onclick` event attached to it
* The exposed function `isHidden` is attached to the `onclick` event and contains the following code:
    ```4d 
    //hide the component that has "imageAlias" as server-side reference
    Web Form.imageAlias.hide()
    ```

### WEB Event Object

The [WEB Event](https://doc.4d.com/4dv19R/help/command/en/page1734.html) command returns an object describing the event triggered in a web form component, such as a button or a datatable.

This generic method can be called on the server for several components.

The command must be called in the context of a web form handled by the web server (see [WEB Form](https://doc.4d.com/4dv19R/help/command/en/page1735.html)).

The returned object contains the following properties:

| Property  | Type   | Description                                                                                                   |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| caller    | Text   | Server-side reference of the component triggering the event                                                   |
| eventType | Text   | Event type (onclick, onchange, onmouseover...)                                                                |
| data      | Object | For Tabs component: contains an index property (Number) with the index of the clicked Tab (index starts at 0) |

#### Example

The objective is to display help when the user hovers over over the component:

![alt-text](assets/en/web-studio/web-event-2.png)

To attach an `onmouseover` event to an Input Text component that displays the information:

![alt-text](assets/en/web-studio/web-event-1.png)

In the above image:

* The Text Input component has `orderNumber` as server reference
* The component has an `onmouseover` event attached to it
* The exposed function `help` attached to the `onmouseover` event contains the following code:
    ```4d 
        var $event; $webForm : Object

        $webForm:=Web Form
        $event:=Web Event
        $componentRef:=$event.caller

        If ($event.eventType="onmouseover")  // event is onmouseover 
            $webForm["helpOn_"+$componentRef].show()  // show the help on "orderNumber" by showing the text component with reference "helpOn_orderNumber" 
        Else 
        $webForm["helpOn_"+$componentRef].hide()  // hide the help on orderNumber
        End if 
    ```

## Known limitations

The web studio is still in early stages of development, so some features are not yet available:

* At this stage, there is no debugger for the web studio.

* You cannot navigate from page to page.

* The web form cannot be rendered exclusively in the web studio (eye icon).