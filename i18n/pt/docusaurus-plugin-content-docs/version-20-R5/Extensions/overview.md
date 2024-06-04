---
id: overview
title: Extensões
---

[La arquitectura de los proyectos](../Project/architecture.md) 4D es modular. You can provide additional functionalities to your 4D projects by installing [**components**](Concepts/components.md) and [**plug-ins**](../Concepts/plug-ins.md). Components are made of 4D code, while plug-ins can be built using any language.

## Componentes 4D pré-instalados

4D incluye por defecto un conjunto de componentes 4D integrados, que puede ver en el tema **Métodos componentes** de la página Métodos del Explorador. Todos estos componentes también se pueden encontrar en el [repositorio github 4D](https://github.com/4d).

| Componente                                                           | Descrição                                                                                                                                                                                | Principais funcionalidades                                                                                                              |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [4D Labels](https://github.com/4d/4D-Labels)                         | Componente interna necessária para construir modelos de etiquetas                                                                                                                        |                                                                                                                                         |
| [4D NetKit](https://github.com/4d/4D-NetKit)                         | Conjunto de ferramentas para ligação a APIs de terceiros                                                                                                                                 | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| [4D Progress](https://github.com/4d/4D-Progress)                     | Abrir uma ou mais barras de progresso na mesma janela                                                                                                                                    | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| [4D SVG](https://github.com/4d/4D-SVG)                               | Criar e manipular objetos gráficos svg comuns                                                                                                                                            | `SVGTool_Display_viewer`, métodos múltiples `SVG_`                                                                                      |
| [4D ViewPro](ViewPro/getting-started.md)                             | Funcionalidades de folha de cálculo nos seus formulários                                                                                                                                 | Ver la [documentación 4D View Pro](ViewPro/getting-started.md)                                                                          |
| [4D Widgets](https://github.com/4d/4D-Widgets)                       | Gerir os widgets DatePicker, TimePicker, SearchPicker 4D                                                                                                                                 | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| [4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface) | Gestione las paletas [4D Write Pro](https://doc.4d.com/4Dv20/4D/20/4D-Write-Pro-Reference.100-6229455.en.html) y [el asistente de tablas](../WritePro/writeprointerface.md#table-wizard) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## Componentes de terceiros

Pode desenvolver e instalar os seus próprios componentes 4D. Ver [esta página](develop-components.md) para mayor información.

Many developers from the 4D community have shared 4D components that you can install and use in you projects.

Browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic.

## Plugins

Plugins do things that 4D does not natively (e.g., specific platform technology), or would be very hard to write just using 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins.

Muitas funcionalidades são cobertas pelos plug-ins 4D existentes. Browse Github to have a list of public 4D plugins gathered with the [`4d-plugin`](https://github.com/topics/4d-plugin) topic.
