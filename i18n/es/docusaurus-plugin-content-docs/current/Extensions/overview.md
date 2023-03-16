---
id: overview
title: Extensiones
---

[La arquitectura de los proyectos](../Project/architecture.md) 4D es modular. Puede ofrecer funcionalidades adicionales a sus proyectos 4D instalando los [**componentes**](Concepts/components.md) y los [**plug-ins**](../Concepts/plug-ins.md). Los componentes están hechos de código 4D, mientras que los plug-ins pueden crearse utilizando cualquier lenguaje.


## Componentes 4D preinstalados

4D incluye por defecto un conjunto de componentes 4D integrados, que puede ver en el tema **Métodos componentes** de la página Métodos del Explorador.


| Nombre del componente                                                         | Descripción                                                                                                             | Principales funcionalidades                                                                                             |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 4D Labels                                                                     | Componente interno necesario para la creación de plantillas de etiquetas                                                |                                                                                                                         |
| [4D Mobile App Server](https://github.com/4d-go-mobile/4D-Mobile-App-Server)  | Conjunto de clases y funciones utilitarias para autenticar, gestionar sesiones y desarrollar aplicaciones móviles       | `.Action`, `.Authentication`, `.PushNotification`, `.WebHandler`, Autenticación con confirmación por correo electrónico |
| [4D NetKit](https://github.com/4d/4D-NetKit)                                  | Conjunto de herramientas para conectarse a las API de terceros                                                          | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                        |
| [4D Progress](https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html) | Abrir una o varias barras de progreso en la misma ventana                                                               | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...                                             |
| [4D SVG](https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html) | Crear y manipular objetos gráficos svg comunes                                                                          | `SVGTool_Display_viewer`, métodos múltiples `SVG_`                                                                      |
| [4D ViewPro](ViewPro/getting-started.md)                                      | Funciones de hoja de cálculo en sus formularios                                                                         | Ver la [documentación 4D View Pro](ViewPro/getting-started.md)                                                          |
| [4D Widgets](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html)   | Gestione los widgets DatePicker, TimePicker, SearchPicker 4D                                                            | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ...                                 |
| [Interfaz 4D WritePro](https://github.com/4d/4D-WritePro-Interface)           | Gestionar las paletas de [4D Write Pro](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Write-Pro-Reference.100-5606477.en.html) | `WP CreatePreview`, `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                      |


## Componentes de terceros

Puede desarrollar e instalar sus propios componentes 4D. Ver [esta página](develop-components.md) para mayor información.

Muchos desarrolladores de la comunidad 4D han compartido componentes 4D que puede instalar y utilizar en sus proyectos.

Navegue por Github para tener una lista de componentes 4D públicos reunidos en el tema [`4d-component`](https://github.com/topics/4d-component).


## Plugins

Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins.

Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Navegue por Github para tener una lista de plugins 4D públicos reunidos en el tema [`4d-plugin`](https://github.com/topics/4d-plugin).


