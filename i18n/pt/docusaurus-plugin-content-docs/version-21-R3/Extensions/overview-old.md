---
id: overview
title: Extensões
---

A [arquitetura dos projetos](../Project/architecture.md) 4D é modular. Você pode fornecer funcionalidades adicionais aos seus projetos 4D instalando [**componentes**](Concepts/components.md) e [**plug-ins**](Concepts/plug-ins.md). Os componentes são feitos de código 4D, enquanto os plug-ins podem ser criados usando qualquer linguagem.

## Components developed by 4D

4D proposes various components to the 4D community, covering many development needs. All 4D components can be found on the [**4D github repository**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| Componente            | Github repository                                                           | Descrição                                                                         | Principais funcionalidades                                                                                                              |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit              | https://github.com/4d/4D-AIKit              | Set of classes to connect to third-party OpenAI APIs                              | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit             | https://github.com/4d/4D-NetKit             | Set of web service tools to connect to third-party APIs                           | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress           | https://github.com/4d/4D-Progress           | Abrir uma ou mais barras de progresso na mesma janela                             | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D SVG                | https://github.com/4d/4D-SVG                | Criar e manipular objetos gráficos svg comuns                                     | `SVGTool_Display_viewer`, métodos múltiples `SVG_`                                                                                      |
| 4D ViewPro            | https://github.com/4d/4d-view-pro           | Funcionalidades de folha de cálculo nos seus formulários                          | Ver la [documentación 4D View Pro](ViewPro/getting-started.md)                                                                          |
| 4D Widgets            | https://github.com/4d/4D-Widgets            | Gerir os widgets DatePicker, TimePicker, SearchPicker 4D                          | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interface 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Manage 4D Write Pro palettes and [table wizard](../WritePro/writeprointerface.md) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## Componentes de terceiros

Pode desenvolver e instalar os seus próprios componentes 4D. Ver [esta página](develop-components.md) para mayor información.

Muitos desenvolvedores da comunidade 4D compartilharam componentes 4D que você pode instalar e usar em seus projetos.

Navegue no Github para obter uma lista de componentes 4D públicos reunidos no tópico [`4d-component`](https://github.com/topics/4d-component).

## Plugins

Plugins fazem coisas que 4D não faz nativamente (por exemplo, tecnologia específica da plataforma), ou seria muito difícil escrever apenas usando 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins.

Muitas funcionalidades são cobertas pelos plug-ins 4D existentes. Navegue pelo Github para ter uma lista de plugins 4D públicos reunidos com o tópico [`4d-plugin`](https://github.com/topics/4d-plugin).


