---
id: overview
title: Extending 4D Applications
---

The 4D architecture is open and can be extended in different ways. If you need a feature that is not available natively in 4D, you can always integrate it into your application in a variety of ways, i.e.:

- [**System workers**](../API/SystemWorkerClass.md) allow the 4D code to call any external process (a shell command, PHP, any script, etc.) y supervisar su ejecución.
- Los [**comandos SQL**](../commands/theme/SQL) permiten conectar y utilizar diversas fuentes de datos SQL.
- El [**cliente HTTP integrado**](../API/HTTPRequestClass.md) puede solicitar cualquier servidor HTTP y procesar datos.
- Las [**Áreas Web**](../FormObjects/webArea_overview.md) pueden dar acceso a páginas web o a diversos contenidos HTML dentro de sus formularios.
- [**Componentes**](Concepts/components.md). Los componentes están hechos de código 4D. 4D includes by default [a set of built-in 4D components](../Project/components.md#preinstalled-4d-components). You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic).
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins. Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Navegue por Github para tener una lista de plugins 4D públicos reunidos con el tema [`4d-plugin`](https://github.com/topics/4d-plugin).
