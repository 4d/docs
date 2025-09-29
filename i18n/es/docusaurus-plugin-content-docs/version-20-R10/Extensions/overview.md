---
id: overview
title: Extending 4D Applications
---

The 4D architecture is open and can be extended in different ways. If you need a feature that is not available natively in 4D, you can always integrate it into your application in a variety of ways, i.e.:

- [**System workers**](../API/SystemWorkerClass.md) allow the 4D code to call any external process (a shell command, PHP, any script, etc.) and monitor its execution.
- [**SQL commands**](../commands/theme/SQL) allow you to connect and use various SQL data sources.
- The [**built-in HTTP client**](../API/HTTPRequestClass.md) can request any HTTP server and process data.
- [**Web Areas**](../FormObjects/webArea_overview.md) can give access to web pages or various HTML contents within your forms.
- [**Components**](Concepts/components.md). Components are made of 4D code. 4D includes by default [a set of built-in 4D components](../Project/components.md#preinstalled-4d-components). You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic).
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins. Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Navegue por Github para tener una lista de plugins 4D públicos reunidos con el tema [`4d-plugin`](https://github.com/topics/4d-plugin).
