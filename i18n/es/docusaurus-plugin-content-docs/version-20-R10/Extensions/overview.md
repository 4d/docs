---
id: overview
title: Extendiendo aplicaciones 4D
---

La arquitectura 4D está abierta y puede ampliarse de diferentes maneras. Si necesita una funcionalidad que no está disponible de forma nativa en 4D, siempre puede integrarla en su aplicación de diversas maneras, por ejemplo:

- Los [**workers del sistema**](../API/SystemWorkerClass.md) permiten al código 4D llamar a cualquier proceso externo (un comando shell, PHP, cualquier script, etc.) y supervisar su ejecución.
- Los [**comandos SQL**](../commands/theme/SQL) permiten conectar y utilizar diversas fuentes de datos SQL.
- El [**cliente HTTP integrado**](../API/HTTPRequestClass.md) puede solicitar cualquier servidor HTTP y procesar datos.
- Las [**Áreas Web**](../FormObjects/webArea_overview.md) pueden dar acceso a páginas web o a diversos contenidos HTML dentro de sus formularios.
- [**Componentes**](Concepts/components.md). Los componentes están hechos de código 4D. 4D incluye por defecto [un conjunto de componentes 4D integrados](../Project/components.md#preinstalled-4d-components). También puedes [desarrollar sus propios componentes 4D](develop-components.md), o utilizar componentes de terceros. Muchos desarrolladores de la comunidad 4D han compartido componentes 4D (navegue por Github para tener una lista de componentes 4D públicos reunidos con el tema [`4d-component`](https://github.com/topics/4d-component)).
- [**Plug-ins**](../Concepts/plug-ins.md). Los plug-ins pueden construirse utilizando cualquier lenguaje. Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins. Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Navegue por Github para tener una lista de plugins 4D públicos reunidos con el tema [`4d-plugin`](https://github.com/topics/4d-plugin).
