---
id: data-sources
title: Getting Started
---

## Interface

The web studio provides several tools ranging from interface customization to method and event linking.

![alt-text](assets/en/web-studio/web-studio-interface.png)

<ol class="interface-numbers">
<li class="interface-item">Explorer: Displays your project's web forms, methods and classes (assets and data models are not available yet)</li>
<li class="interface-item">Tabs: They let you keep track of your currently opened elements, such as your forms and methods.</li>
<li class="interface-item">Components: The building blocks of your end user's application interface. </li>
<li class="interface-item">Canvas: This is where you combine your components, styles and data sources. You can drag and drop components onto your canvas, then drag and drop CSS classes and data sources onto these components.</li>
<li class="interface-item">Contextual configuration panel: This is where you link events and methods to your components, edit CSS styles, etc.</li>
<li class="interface-item">Properties panel: Allows for advanced style customization. Also allows binding a datasource to a component.</li>
<li class="interface-item">Menu buttons: Save all your work, preview the end user's application</li>
</ol>

### Explorer

You can see the explorer as the skeleton of your project. It displays your project's web forms, methods, classes (assets and data models are not available yet).

![alt-text](assets/en/web-studio/explorer.png)

### Tabs

These tabs let you keep track of which elements of your project are currently opened such as methods, web forms, and classes.

![alt-text](assets/en/web-studio/tabs.png)

### Components

This area lets you search for a component or choose one from the list. Once a component is on the canvas, you can customize its look and designate the data it displays using the Styles library and the Properties Panel.

![alt-text](assets/en/web-studio/components.png)

The following components are available: 

|Component|Description|
|---|---|
|Style box|---|
|Grid|---|
|Columns|---|
|Tabs|---|
|Text input|---|
|Button|---|
|Radio button|---|
|Range input|---|
|Select box|---|
|Image|---|
|Icon|---|
|Check box|---|
|Text|---|
|Datatable|---|
|Matrix|---|

> More components will be available in the future.

### Styles Library

The styles library offers a choice of CSS styles that you can apply to your components. 

![alt-text](assets/en/web-studio/styles-library.png)

There are two categories of styles: 
* **Theme**: predefined CSS styles, available by default. 
* **Local**: CSS styles you create. A local style can only be used in the web form where it is created.

> **TODO --> Show that styles can be edited**

### Data Sources

Data sources contain data and automatically generate events when that data is changed. You can attach components to these events so that : 
* data is automatically sent from the datasource to the widget
* when an end-user enters data in a component attached to a datasource, the datasource data is updated automatically 
* etc.

This section groups the available data sources:

![alt-text](assets/en/web-studio/data-sources.png)

In this section, you'll find the following:

*  The **Catalog** holds data from your 4D Project. You can designate entities or entity selections from your [datastore](../ORDA/dsMapping.md#datastore), and they will be handled by the server as **Remote** data sources.

*  **Remote** data sources: Entities and entity selections, handled on the server, that can be assigned to components. They offer functions defined on the ORDA classes that they instantiate (DataStore classes, Dataclass class, Entity class, Entity Selection class).

> Only the dataclasses and dataclass attributes [exposed as REST resources](https://doc.4d.com/4Dv19/4D/19/Field-properties.300-5416814.en.html) will be available at run time.

*  **Local** data sources: Scalar types handled with the browser's memory. No request is sent to the server to access this data source.

Only [exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) can be used when configuring an event.

The data sources display the attributes as well as the functions/methods of data classes.

> **TODO --> Show how datasources are created (initial value etc)**

### Canvas

The canvas is a WYSIWIG tool. First, drag and drop your components to the canvas. Then, you can drag and drop CSS classes and data sources onto these components to build and customize your application.

> **TODO**: show tooltip, interaction with outline and breadcrumbs 

Some components' visual properties (column size in datatables or grid areas for example) can be edited directly on the canvas.

![alt-text](assets/en/web-studio/canvas.png)

### Properties Panel

This panel allows for advanced component customization. It is a dynamic panel, which means that its contents adapt to the selected component.

As a rule, component properties and styling are separated.

Values assigned by CSS are in *italics*. Overriden values (values assigned using the CSS area of the properties panel) display a blue dot.

> **TODO --> Show the CSS part**

![alt-text](assets/en/web-studio/style-panel.png)

When you edit CSS using the properties panel, it overrides the CSS defined for the component.

### Events and Code Panel

![alt-text](assets/en/web-studio/events.png)

You can link events to your components. For example, you can assign an `onchange` event to a search bar so that it suggests a list of employees as the user is typing.

These events are used to execute code on the 4D server. There's no need to write additional Javascript or React code.

Events are executed in the defined order, and you can map one method to several events or one event to several methods.

> **TODO --> Add descritpion of the particular event on the component: Onload**