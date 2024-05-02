---
id: overview
title: Extensiones
---

The 4D [project architecture](../Project/architecture.md) is modular. You can provide additional functionalities to your 4D projects by installing [**components**](Concepts/components.md) and [**plug-ins**](../Concepts/plug-ins.md). Los componentes están hechos de código 4D, mientras que los plug-ins pueden crearse utilizando cualquier lenguaje.

## Componentes 4D preinstalados

4D includes by default a set of built-in 4D components, that you can see in the **Component Methods** theme of the Explorer's Methods page. All these components can also be found on the [4D github repository](https://github.com/4d).

| Componente                                                           | Descripción                                                                                                                                                                 | Principales funcionalidades                                                                                                             |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [4D Labels](https://github.com/4d/4D-Labels)                         | Componente interno necesario para la creación de plantillas de etiquetas                                                                                                    |                                                                                                                                         |
| [4D NetKit](https://github.com/4d/4D-NetKit)                         | Conjunto de herramientas para conectarse a las API de terceros                                                                                                              | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| [4D Progress](https://github.com/4d/4D-Progress)                     | Abrir una o varias barras de progreso en la misma ventana                                                                                                                   | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| [4D SVG](https://github.com/4d/4D-SVG)                               | Crear y manipular objetos gráficos svg comunes                                                                                                                              | `SVGTool_Display_viewer`, multiple `SVG_` methods                                                                                       |
| [4D ViewPro](ViewPro/getting-started.md)                             | Funciones de hoja de cálculo en sus formularios                                                                                                                             | See [4D View Pro documentation](ViewPro/getting-started.md)                                                                             |
| [4D Widgets](https://github.com/4d/4D-Widgets)                       | Gestione los widgets DatePicker, TimePicker, SearchPicker 4D                                                                                                                | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| [4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface) | Manage [4D Write Pro](https://doc.4d.com/4Dv20/4D/20/4D-Write-Pro-Reference.100-6229455.en.html) palettes and [table wizard](../WritePro/writeprointerface.md#table-wizard) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## Componentes de terceros

Puede desarrollar e instalar sus propios componentes 4D. See [this page](develop-components.md) for more information.

Muchos desarrolladores de la comunidad 4D han compartido componentes 4D que puede instalar y utilizar en sus proyectos.

Browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic.

## Plugins

Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. As described in [this page](develop-plug-ins.md), you can develop your own plug-ins.

Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Browse Github to have a list of public 4D plugins gathered with the [`4d-plugin`](https://github.com/topics/4d-plugin) topic.
