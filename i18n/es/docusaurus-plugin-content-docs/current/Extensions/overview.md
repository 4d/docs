---
id: overview
title: Extending 4D Applications
---

## Generalidades

The 4D [project architecture](../Project/architecture.md) is open and can be extended in different ways. If you need a feature that is not available natively in 4D, you can always integrate it into your application in a variety of ways, i.e.:

- [**System workers**](../API/SystemWorkerClass.md) allow the 4D code to call any external process (a shell command, PHP, any script, etc.) y supervisar su ejecución.
- Los [**comandos SQL**](../commands/theme/SQL) permiten conectar y utilizar diversas fuentes de datos SQL.
- El [**cliente HTTP integrado**](../API/HTTPRequestClass.md) puede solicitar cualquier servidor HTTP y procesar datos.
- Las [**Áreas Web**](../FormObjects/webArea_overview.md) pueden dar acceso a páginas web o a diversos contenidos HTML dentro de sus formularios.
- [**Componentes**](Concepts/components.md). Los componentes están hechos de código 4D. 4D le propone un conjunto de componentes utilitarios (ver más abajo) que puede instalar y utilizar en función de sus necesidades. You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic).
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins. Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Navegue por Github para tener una lista de plugins 4D públicos reunidos con el tema [`4d-plugin`](https://github.com/topics/4d-plugin).

## Components developed by 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| Componente           | Github repository                                                           | Descripción                                                                       | Principales funcionalidades                                                                                                             |
| -------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit             | https://github.com/4d/4D-AIKit              | Conjunto de clases a conectar con las APIs OpenAI de terceros                     | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit            | https://github.com/4d/4D-NetKit             | Conjunto de herramientas de servicios web para conectarse a APIs de terceros      | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress          | https://github.com/4d/4D-Progress           | Abrir una o varias barras de progreso en la misma ventana                         | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D QPDF              | https://github.com/4d/4D-QPDF               | Extract attachments from PDF/A-3 files                                            | `PDF Get attachments`                                                                                                                   |
| 4D SVG               | https://github.com/4d/4D-SVG                | Crear y manipular objetos gráficos svg comunes                                    | `SVGTool_Display_viewer`, métodos múltiples `SVG_`                                                                                      |
| 4D ViewPro           | https://github.com/4d/4d-view-pro           | Funciones de hoja de cálculo en sus formularios                                   | Ver la [documentación 4D View Pro](ViewPro/getting-started.md)                                                                          |
| 4D Widgets           | https://github.com/4d/4D-Widgets            | Gestione los widgets DatePicker, TimePicker, SearchPicker 4D                      | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interfaz 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |
| Build4D              | https://github.com/4d-depot/Build4D         | Compile, build, and sign projects                                                 | CI/CD                                                                                                                                   |



