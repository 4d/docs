---
id: webStudio
title: WebStudio
---

> **Preview**: The web studio is provided as a preview feature. Using this feature in production is not recommended. The final implementation could be slightly different.


WebStudio is a powerful integrated development environment (IDE) that lets you tap into various data sources, such as a 4D project's database and methods, and link them to highly customizable interface elements in order to build complete applications.

![alt-text](assets/en/web-studio/web-studio-intro.png)

### Pré-requis

The web studio supports the following web browsers:

- Chrome
- Safari
- Edge
- FireFox

The minimum resolution to use the web studio is 1280x720. Recommended resolution is 1920x1080.

> The web studio is not compatible with binary databases. When working with a binary database, opening the web studio  will throw an error.

## Access Configuration

The web studio relies on the [`WebAdmin`](../Admin/webAdmin.md) web server component for its configuration and authentication settings.

- **configuration**: The web studio configuration inherits the [`WebAdmin` web server settings](../Admin/webAdmin.md#webadmin-settings),
- **authentication**: Access to the web studio is granted when the [session user is authenticated](../Admin/webAdmin.md#authentication-and-session) and has the "WebAdmin" privilege. When the web studio is accessed through the **Design** > **Web Studio...** menu item, automatic authentication is provided.

> **TODO --> ADD protection on instance level (4D client)**

## Opening the web studio

The web studio page is automatically available when [the `WebAdmin` web server is started](../Admin/webAdmin.md#starting-the-webadmin-web-server).

 There are two ways to access the web studio :

 *  from a 4D application, go to **Design** > **Web Studio...**.

    If the `WebAdmin` server is already running, your default browser opens at `IPaddress:HTTPPort/studio`. Otherwise, you will be asked if you want to start the `WebAdmin` web server first.

 *  on a browser, with the `WebAdmin` web server running, enter the following address:
   
        IPaddress:HTTPPort/studio

    ou :
   
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

### Explorateur

You can see the explorer as the skeleton of your project. It displays your project's web forms, methods, classes, assets and data model.

![alt-text](assets/en/web-studio/explorer.png)

### Tabs

These tabs let you keep track of which elements of your project are currently opened, such as methods or web forms for example.

![alt-text](assets/en/web-studio/tabs.png)

### Composants

This area lets you search for a component or choose one from the list. Once a component is on the canvas, you can customize its look and designate the data it displays using the Styles library and the Properties Panel.

![alt-text](assets/en/web-studio/components.png)

### Styles Library

The styles library offers a choice of predefined CSS styles that you can apply to your components.

![alt-text](assets/en/web-studio/styles-library.png)

### Data Sources
This section groups the available data sources.

![alt-text](assets/en/web-studio/data-sources.png)

*  The **Catalog** holds data from your 4D Project. You can designate entities or entity selections from your datastore, and they will be stored on the server as **Remote** data sources.
*  **Remote** data sources: Entities and entity selections, stored on the server, that can be assigned to components.
*  **Local** data sources: Scalar types. No request is sent to the server to access these data sources.

### Canvas
This is where you drop your components, styles and data sources to build your application.

![alt-text](assets/en/web-studio/canvas.png)

### Properties Panel

This panel allows for advanced component customization. It is a dynamic panel, which means that its contents adapt to the currently selected component.

![alt-text](assets/en/web-studio/style-panel.png)

### Events, Methods and Code Panel

You can link events to your components. For example, you can assign an `onchange` event to a search bar so that it suggests a list of employees as the user is typing.

![alt-text](assets/en/web-studio/events.png)

