---
id: overview
title: Extendiendo aplicaciones 4D
---

## Generalidades

La [arquitectura del proyecto] 4D (../Project/architecture.md) es abierta y puede ampliarse de diferentes maneras. Si necesita una funcionalidad que no está disponible de forma nativa en 4D, siempre puede integrarla en su aplicación de diversas maneras, por ejemplo:

- Los [**workers del sistema**](../API/SystemWorkerClass.md) permiten al código 4D llamar a cualquier proceso externo (un comando shell, PHP, cualquier script, etc.) y supervisar su ejecución.
- Los [**comandos SQL**](../commands/theme/SQL) permiten conectar y utilizar diversas fuentes de datos SQL.
- El [**cliente HTTP integrado**](../API/HTTPRequestClass.md) puede solicitar cualquier servidor HTTP y procesar datos.
- Las [**Áreas Web**](../FormObjects/webArea_overview.md) pueden dar acceso a páginas web o a diversos contenidos HTML dentro de sus formularios.
- [**Componentes**](Concepts/components.md). Los componentes están hechos de código 4D. 4D le propone un conjunto de componentes utilitarios (ver más abajo) que puede instalar y utilizar en función de sus necesidades. También puedes [desarrollar sus propios componentes 4D](develop-components.md), o utilizar componentes de terceros. Muchos desarrolladores de la comunidad 4D han compartido componentes 4D (navegue por Github para tener una lista de componentes 4D públicos reunidos con el tema [`4d-component`](https://github.com/topics/4d-component)).
- [**Plug-ins**](../Concepts/plug-ins.md). Los plug-ins pueden construirse utilizando cualquier lenguaje. Los plugins hacen cosas que 4D no hace de forma nativa (por ejemplo, una tecnología de plataforma específica), o que serían muy difíciles de escribir sólo con 4D. Como se describe en [esta página](develop-plug-ins.md), puede desarrollar sus propios plug-ins. Muchas funcionalidades están cubiertas por los plug-ins 4D existentes. Navegue por Github para tener una lista de plugins 4D públicos reunidos con el tema [`4d-plugin`](https://github.com/topics/4d-plugin).

## Componentes desarrollados por 4D

4D propone varios componentes a la comunidad 4D, cubriendo muchas necesidades de desarrollo. Todos los componentes 4D se pueden encontrar en el [**repositorio github de 4D**](https://github.com/4d).

A subset of these components is listed by default in the [Dependency Manager](../Project/components.md), including:

| Componente           | Repositorio Github                                                          | Descripción                                                                                      | Principales funcionalidades                                                                                                             |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 4D AIKit             | https://github.com/4d/4D-AIKit              | Conjunto de clases a conectar con las APIs OpenAI de terceros                                    | `OpenAIChat`, `OpenAIImage`...                                                          |
| 4D NetKit            | https://github.com/4d/4D-NetKit             | Conjunto de herramientas de servicios web para conectarse a APIs de terceros                     | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| 4D Progress          | https://github.com/4d/4D-Progress           | Abrir una o varias barras de progreso en la misma ventana                                        | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| 4D QPDF              | https://github.com/4d/4D-QPDF               | Extraer archivos adjuntos de archivos PDF/A-3                                                    | `PDF Get attachments`                                                                                                                   |
| 4D SVG               | https://github.com/4d/4D-SVG                | Crear y manipular objetos gráficos svg comunes                                                   | `SVGTool_Display_viewer`, métodos múltiples `SVG_`                                                                                      |
| 4D ViewPro           | https://github.com/4d/4d-view-pro           | Funciones de hoja de cálculo en sus formularios                                                  | Ver la [documentación 4D View Pro](ViewPro/getting-started.md)                                                                          |
| 4D Widgets           | https://github.com/4d/4D-Widgets            | Gestione los widgets DatePicker, TimePicker, SearchPicker 4D                                     | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| Interfaz 4D WritePro | https://github.com/4d/4D-WritePro-Interface | Gestión de paletas y del [asistente de tablas](../WritePro/writeprointerface.md) en 4D Write Pro | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |
| Build4D              | https://github.com/4d-depot/Build4D         | Compilar, construir y firmar proyectos                                                           | CI/CD                                                                                                                                   |



