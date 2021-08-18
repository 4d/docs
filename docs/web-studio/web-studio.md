---
id: web-studio
title: 4D WebStudio Overview
---

> **Preview**: The web studio is provided as a preview feature, allowing you to familiarize with the new concepts and philosophy. This feature is still in early stages of development, it's not recommended to use it in a production environment. 

## Overview

4D WebStudio is a powerful low-code platform for web design and development. To be more specific, it is an integrated development environment (IDE) that lets you tap into various data sources (for example, the database of a 4D project), and link them to interface elements in order to build complete applications.

At this stage, only the WebForm designer, the code editor and the contextual configuration panel are available.

![alt-text](assets/en/web-studio/web-studio-intro.png)

> The web studio is not compatible with binary databases.

## Requirements

### Browser 

The web studio supports the following web browsers:

- Chrome
- Edge
- FireFox

The recommended resolution is 1920x1080.

### License 

4D WebStudio is available with the corresponding license.

## Getting Started

## Interface

The web studio provides several tools ranging from interface customization to method and event linking.

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

### Creating a WebForm

In 4D WebStudio, everything starts with a WebForm. A WebForm is a container that holds all the other components (buttons, grids, style boxes, etc.) of your application.

To create a WebForm, click **Webform** from the homepage and give it a name. The WebForm editor opens. 

### Adding components to the WebForm

Components are the building blocks of your application. To add a component, drag it from the Components section and drop it on the canvas.

![add-component-screenshot](assets/en/web-studio/add-component.png)

### Keeping track of the app's structure

You can use the following tools To keep track of the components and manage them.

#### Breadcrumbs bar

When you select a component, the breadcrumbs bar displays its hierarchy:

![breadcrumbs-bar](assets/en/web-studio/breadcrumbs.png)

To select any parent component displayed in the breadcrumbs bar, click its name. 

#### Tooltip

The tooltip displays the type of the selected element and offers several options:

|Icon|Description|Comment|
|---|---|---|
|Cursor|Move the selected component on the canvas|
|Arrow|Select the parent component|
|CSS|Export the selected element's style to a CSS class|
|T|Reset styles|
|Duplicate|Duplicate the component|

The tooltip is contextual. This means that some actions are only available to certain elements, and not others. For example, you can duplicate a Text Input component, but not its individual parts (Label and Input).

#### Outline

The outline section displays the hierarchy of your WebForm. 

Click the eye icon to display/hide an element.

### Styling a component 

