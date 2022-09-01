---
id: overview
title: Überblick
---

The 4D [project architecture](../Project/architecture.md) is modular. You can provide additional functionalities to your 4D projects by installing [**components**](Concepts/components.md) and [**plug-ins**](../Concepts/plug-ins.md). Components are made of 4D code, while plug-ins can be built using any language.


## Preinstalled 4D components

4D includes by default a set of built-in 4D components, that you can see in the **Component Methods** theme of the Explorer's Methods page.


| Component Name                                                                | Beschreibung                                                                                                   | Main Features                                                                                            |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 4D Labels                                                                     | Internal component required to build label templates                                                           |                                                                                                          |
| [4D Mobile App Server](https://github.com/4d-go-mobile/4D-Mobile-App-Server)  | Set of utility classes and functions to authenticate, manage sessions, and develop mobile applications         | `.Action`, `.Authentication`, `.PushNotification`, `.WebHandler`, Authentication with email confirmation |
| [4D NetKit](https://github.com/4d/4D-NetKit)                                  | Set of tools to connect to third-party APIs                                                                    | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                         |
| [4D Progress](https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html) | Open one or more progress bars in the same window                                                              | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...                              |
| [4D SVG](https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html) | Create and manipulate common svg graphic objects                                                               | `SVGTool_Display_viewer`, multiple `SVG_` methods                                                        |
| [4D ViewPro](ViewPro/getting-started.md)                                      | Spreadsheet features in your forms                                                                             | See [4D View Pro documentation](ViewPro/getting-started.md)                                              |
| [4D Widgets](https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html)   | Manage DatePicker, TimePicker, SearchPicker 4D widgets                                                         | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ...                  |
| [4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface)          | Manage [4D Write Pro](https://doc.4d.com/4Dv19R3/4D/19-R3/4D-Write-Pro-Reference.100-5606477.en.html) palettes | `WP CreatePreview`, `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`       |


## Third-party components

You can develop and install your own 4D components. See [this page](develop-components.md) for more information.

Many developers from the 4D community have shared 4D components that you can install and use in you projects.

Browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic.


## Plugins

Plugins do things that 4D does not natively (e.g., specific platform technology), or would be very hard to write just using 4D. As described in [this page](develop-plug-ins.md), you can develop your own plug-ins. As described in [this page](develop-plug-ins.md), you can develop your own plug-ins.

A lot of functionnalities are covered by the existing 4D plug-ins. Browse Github to have a list of public 4D plugins gathered with the [`4d-plugin`](https://github.com/topics/4d-plugin) topic.


