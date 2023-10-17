---
id: plug-ins
title: Plug-ins
---

As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## What is a plug-in and what can it do?

A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. It adds functionality to 4D and thus increases its capacity. A plug-in usually contains a set of routines given to the 4D developer. It can handle external areas and run external processes. 

## Where to find plug-ins?

Multiple plug-ins have already been written by the 4D community. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).


## Installing plug-ins

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](../Project/architecture.md#plugins).  

Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. If a plug-in requires a specific license for use, it will be loaded but not available for use.


## Using plug-ins

Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the **Plug-ins** page of the Explorer. 


