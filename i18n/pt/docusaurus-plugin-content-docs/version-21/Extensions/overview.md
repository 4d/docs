---
id: overview
title: Extending 4D Applications
---

## Visão Geral

The 4D [project architecture](../Project/architecture.md) is open and can be extended in different ways. If you need a feature that is not available natively in 4D, you can always integrate it into your application in a variety of ways, i.e.:

- [**System workers**](../API/SystemWorkerClass.md) allow the 4D code to call any external process (a shell command, PHP, any script, etc.) and monitor its execution.
- [**SQL commands**](../commands/theme/SQL) allow you to connect and use various SQL data sources.
- The [**built-in HTTP client**](../API/HTTPRequestClass.md) can request any HTTP server and process data.
- [**Web Areas**](../FormObjects/webArea_overview.md) can give access to web pages or various HTML contents within your forms.
- [**Components**](Concepts/components.md). Components are made of 4D code. 4D proposes a set of utility components (see below) that you can install and use depending on your needs. You can also [develop your own 4D components](develop-components.md), or use third-party components. Many developers from the 4D community have shared 4D components (browse Github to have a list of public 4D components gathered with the [`4d-component`](https://github.com/topics/4d-component) topic).
- [**Plug-ins**](../Concepts/plug-ins.md). Plug-ins can be built using any language. Plugins fazem coisas que 4D não faz nativamente (por exemplo, tecnologia específica da plataforma), ou seria muito difícil escrever apenas usando 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins. Muitas funcionalidades são cobertas pelos plug-ins 4D existentes. Navegue pelo Github para ter uma lista de plugins 4D públicos reunidos com o tópico [`4d-plugin`](https://github.com/topics/4d-plugin).

## Components developed by 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| Componente            | Github repository                                                           | Descrição                                                                         | Principais funcionalidades                                                                                                              |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | Set of classes to connect to third-party OpenAI APIs                              | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | Set of web service tools to connect to third-party APIs                           | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | Abrir uma ou mais barras de progresso na mesma janela                             | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D QPDF               | https://github.com/4d/4D-QPDF               | Extract attachments from PDF/A-3 files                                            | `PDF Get attachments`                                                                                                                   |
| 4D SVG                | https://github.com/4d/4D-SVG                | Criar e manipular objetos gráficos svg comuns                                     | `SVGTool_Display_viewer`, métodos múltiples `SVG_`                                                                                      |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | Funcionalidades de folha de cálculo nos seus formulários                          | Ver la [documentación 4D View Pro](ViewPro/getting-started.md)                                                                          |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | Gerir os widgets DatePicker, TimePicker, SearchPicker 4D                          | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interface 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |
| Build4D               | https://github.com/4d-depot/Build4D         | Compile, build, and sign projects                                                 | CI/CD                                                                                                                                   |



