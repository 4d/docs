---
id: components
title: Components
---

A 4D component is a set of 4D code and forms representing one or more functionalities that you can install and use in your projects. For example, the [4D SVG component](https://doc.4d.com/4Dv20/4D/20/4D-SVG-Component.100-6342795.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## Installing components

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component&type=Repositories). Additionnally, you can [develop your own 4D components](Extensions/develop-components.md).

Installation and loading of components in your 4D projects are handled through the [4D dependency manager](../Project/components.md). 


## Using components

Exposed component code (methods and functions) as well as forms can be used as standard elements in your 4D development.

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Use this namespace to access the component's functions.

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md).

![alt-text](../assets/en/Project/compDoc.png)
