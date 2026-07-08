---
id: overview
title: Extensiones
---

[La arquitectura de los proyectos](../Project/architecture.md) 4D es modular. Puede ofrecer funcionalidades adicionales a sus proyectos 4D instalando [**componentes**](Concepts/components.md) y [**plug-ins**](../Concepts/plug-ins.md). Los componentes están hechos de código 4D, mientras que los plug-ins pueden crearse utilizando cualquier lenguaje.

## Componentes desarrollados por 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| Componente           | Repositorio Github                                                          | Descripción                                                                       | Principales funcionalidades                                                                                                             |
| -------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit             | https://github.com/4d/4D-AIKit              | Conjunto de clases a conectar con las APIs OpenAI de terceros                     | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit            | https://github.com/4d/4D-NetKit             | Conjunto de herramientas de servicios web para conectarse a APIs de terceros      | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress          | https://github.com/4d/4D-Progress           | Abrir una o varias barras de progreso en la misma ventana                         | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D SVG               | https://github.com/4d/4D-SVG                | Crear y manipular objetos gráficos svg comunes                                    | `SVGTool_Display_viewer`, métodos múltiples `SVG_`                                                                                      |
| 4D ViewPro           | https://github.com/4d/4d-view-pro           | Funciones de hoja de cálculo en sus formularios                                   | Ver la [documentación 4D View Pro](ViewPro/getting-started.md)                                                                          |
| 4D Widgets           | https://github.com/4d/4D-Widgets            | Gestione los widgets DatePicker, TimePicker, SearchPicker 4D                      | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interfaz 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## Componentes de terceros

Puede desarrollar e instalar sus propios componentes 4D. Ver [esta página](develop-components.md) para mayor información.

Muchos desarrolladores de la comunidad 4D han compartido componentes 4D que puede instalar y utilizar en sus proyectos.

Navegue por Github para tener una lista de componentes 4D públicos reunidos con el tema [`4d-component`](https://github.com/topics/4d-component).

## Plugins

Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins.

Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Navegue por Github para tener una lista de plugins 4D públicos reunidos con el tema [`4d-plugin`](https://github.com/topics/4d-plugin).


