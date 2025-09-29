---
id: overview
title: Extending 4D Applications
---

## Vue d’ensemble

The 4D [project architecture](../Project/architecture.md) is open and can be extended in different ways. If you need a feature that is not available natively in 4D, you can always integrate it into your application in a variety of ways, i.e.:

- [**System workers**](../API/SystemWorkerClass.md) allow the 4D code to call any external process (a shell command, PHP, any script, etc.) and monitor its execution.
- [**SQL commands**](../commands/theme/SQL) allow you to connect and use various SQL data sources.
- The [**built-in HTTP client**](../API/HTTPRequestClass.md) can request any HTTP server and process data.
- [**Web Areas**](../FormObjects/webArea_overview.md) can give access to web pages or various HTML contents within your forms.
- [**Components**](Concepts/components.md). Components are made of 4D code. 4D proposes a set of utility components (see below) that you can install and use depending on your needs. You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic).
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. Les plugins font des choses que 4D ne fait pas nativement (par exemple, une technologie de plateforme spécifique), ou qui seraient très difficiles à écrire en utilisant uniquement 4D. Comme décrit dans [cette page](develop-plug-ins.md), vous pouvez développer vos propres plugins. De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants. De nombreuses fonctionnalités sont couvertes par les plug-ins 4D existants.

## Components developed by 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| Composant             | Github repository                                                           | Description                                                                       | Principales fonctionnalités                                                                                                             |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | Set of classes to connect to third-party OpenAI APIs                              | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | Set of web service tools to connect to third-party APIs                           | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | Ouverture d'une ou plusieurs barres de progression dans la même fenêtre           | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D QPDF               | https://github.com/4d/4D-QPDF               | Extract attachments from PDF/A-3 files                                            | `PDF Get attachments`                                                                                                                   |
| 4D SVG                | https://github.com/4d/4D-SVG                | Création et manipulation d'objets graphiques svg courants                         | `SVGTool_Display_viewer`, multiple `SVG_` methods                                                                                       |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | Fonctions de tableur dans vos formulaires                                         | Voir la [documentation de 4D View Pro](ViewPro/getting-started.md)                                                                      |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | Gestion des widgets 4D DatePicker, TimePicker et SearchPicker                     | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interface 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |
| Build4D               | https://github.com/4d-depot/Build4D         | Compile, build, and sign projects                                                 | CI/CD                                                                                                                                   |



