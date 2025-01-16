---
id: overview
title: Extensões
---

A [arquitetura dos projetos](../Project/architecture.md) 4D é modular. Você pode fornecer funcionalidades adicionais aos seus projetos 4D instalando [**componentes**](Concepts/components.md) e [**plug-ins**](Concepts/plug-ins.md). Os componentes são feitos de código 4D, enquanto os plug-ins podem ser criados usando qualquer linguagem.

## Componentes 4D pré-instalados

4D inclui por padrão um conjunto de componentes 4D integrados, que você pode ver no tema **Métodos componentes** da página Métodos do Explorador. Todos esses componentes também podem ser encontrados no [repositório gitHub de 4D](https://github.com/4d).

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

Muitos desenvolvedores da comunidade 4D compartilharam componentes 4D que você pode instalar e usar em seus projetos.

Navegue no Github para obter uma lista de componentes 4D públicos reunidos no tópico [`4d-component`](https://github.com/topics/4d-component).

## Plugins

Plugins fazem coisas que 4D não faz nativamente (por exemplo, tecnologia específica da plataforma), ou seria muito difícil escrever apenas usando 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins.

Muitas funcionalidades são cobertas pelos plug-ins 4D existentes. Navegue pelo Github para ter uma lista de plugins 4D públicos reunidos com o tópico [`4d-plugin`](https://github.com/topics/4d-plugin).
