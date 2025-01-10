---
id: components
title: Components
---

A 4D component is a set of 4D code and forms representing one or more functionalities that you can install and use in your projects. For example, the [4D SVG component](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-SVG-Component.100-5681501.en.html) adds advanced commands and an integrated rendering engine that can be used to display SVG files.

## Where to find components?

Several components are [preinstalled in the 4D development environment](Extensions/overview.md), but a lot of 4D components from the 4D community [can be found on GitHub](https://github.com/search?q=4d-component&type=Repositories). Additionnally, you can [develop your own 4D components](Extensions/develop-components.md).


## Installing components

To install a component, you simply need to copy the component package folder into the [`Components` folder of the project](Project/architecture.md). You can use aliases or shortcuts.

A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used. 

:::note

Interpreted component package folder name must be suffixed ".4dbase".

:::

## Using components

Exposed component code (methods and functions) as well as forms can be used as standard elements in your 4D development. 

When an installed component contains methods, classes, and functions, they appear in the **Component Methods** theme of the Explorer's Methods page:

![alt-text](../assets/en/Concepts/components-explorer.png)

:::note

If the component is compiled, its [namespace](../Extensions/develop-components.md#declaring-the-component-namespace) is written between parentheses after its name. Use this namespace to access the component's functions. 

:::

You can select a component [project method](methods.md) or [class](classes.md) and click on the **Documentation** button of the Explorer to get information about it, [if any](Project/documentation.md). 

![alt-text](../assets/en/Project/compDoc.png)
