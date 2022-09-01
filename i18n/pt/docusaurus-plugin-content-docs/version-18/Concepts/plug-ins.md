---
id: plug-ins
title: Plug-ins
---

As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## Why the need for a plug-in?

Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure.

It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected.

The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity.

## What is a plug-in and what can it do?

A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity.

Usually, a plug-in does things that:
- 4D cannot do (ie, specific platform technology),
- will be very hard to write just using 4D,
- are only available as Plug-in Entrypoint

A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process.

- A **plug-in routine** is a routine written in native language (usually C or C++) that causes an action.
- An **external area** is a part of a form that can display almost everything and interact with the user when necessary.
- An **external process** is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process.

### Important note

A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. Por exemplo, nos loops longos, um plug-in deve chamar a `PA_Yield()` para dar tempo ao planificador 4D, a menos que sua tarefa seja crítica tanto para ele quanto para o banco de dados.

## How to create a plug-in?

4D provides on GitHub an open-source [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), containing the 4D Plugin API and the 4D Plugin Wizard:

- the [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in.
- The [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.

## How to install a plug-in?

You install plug-ins in the 4D environment by copying their files into the appropriate folder.

“PluginName.bundle” folders contain both Windows and macOS versions of 4D plug-ins. Their specific internal architecture lets 4D Server load the appropriate version according to the platform where the client machine will be run. Para instalar um plug-in em seu ambiente, só precisa colocar a pasta "PluginName.bundle" ou o pacote correspondente na pasta **PlugIns** desejada.

Pode colocar a pasta PlugIns em dois lugares diferentes:

- At the level of the 4D executable application, i.e.:
  - Under Windows: next to the .exe file
  - Under macOS: at the first level of the Contents folder inside the application package.   
    In this case, plug-ins are available in every database opened by this application.
- No mesmo nível que o arquivo de estrutura do banco de dados. Nesse caso, plug-ins só estão disponíveis no banco de dados em particular.

The choice of location depends on how you want to use the plug-in.

If the same plug-in is placed in both locations, 4D will only load the one located next to the structure. In an application that is compiled and merged using 4D Volume Desktop, if there are several instances of the same plug-in present, this will prevent the application from opening.

Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. If any plug-in requires a specific license for use, it will be loaded but not available for use.
