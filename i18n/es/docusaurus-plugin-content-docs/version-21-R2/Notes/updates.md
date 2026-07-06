---
id: updates
title: Notas del lanzamiento
---

## 4D 21 R2

Lea [**Novedades en 4D 21 R2**](https://blog.4d.com/whats-new-in-4d-21-r2/), la entrada del blog que muestra todas las nuevas funcionalidades y mejoras en 4D 21 R2.

#### Lo más destacado

- El [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) ha sido mejorado para ofrecer mayor precisión en la detección de errores (ver [esta entrada del blog](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) para más información).
- Las [acciones estándar de 4D Write Pro](../WritePro/user-legacy/standard-actions.md) que aplican [listas](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) ahora ajustan automáticamente los márgenes de los párrafos para mantener los marcadores posicionados al interior de este margen.
- Soporte integrado de `order by` en las cadenas de consulta para búsquedas vectoriales IA utilizando las funciones [`query()`](../API/DataClassClass.md#query-by-vector-similarity) y la [API REST](../REST/$orderby.md).
- Ahora puede crear y abrir Páginas Qodly desde el [Explorador](../Develop/explorer.md).
- Puede [personalizar los iconos de sus componentes](../Extensions/develop-components.md#custom-icon).
- Componente 4D AIKit: nueva clase [File API](../aikit/Classes/OpenAIFilesAPI.md) para implementar las funcionalidades de **carga de archivos**.
- Las funcionalidades [**Buscar en diseño**](../Project/search-replace.md#search-in-components) y [**Reemplazar en el contenido**](../Project/search-replace.md#replace-in-content) ahora admiten componentes editables.
- [**Lista de bugs corregidos**](https://bugs.4d.fr/fixedbugslist?version=21_R2): lista de todos los bugs que se han corregido en 4D 21 R2.

#### Vista previa para desarrolladores

- Soporte de [**renderización de interfaz Fluent UI**](../FormEditor/forms.md#fluent-ui-rendering) en Windows:
  - nuevo comando [`FORM theme`](../commands/form-theme.md)
  - nuevo [media query css `form-theme`](../FormEditor/createStylesheet.md#media-queries),
  - nueva opción [**Utilizar Fluent UI en Windows**](../settings/interface.md#use-fluent-ui-on-windows) en el cuadro de diálogo de Propiedades del proyecto.

#### Cambios de comportamiento

- En Windows, si la [renderización **fluent UI**](../FormEditor/forms.md#fluent-ui-rendering) está activada, el comando [`GET STYLE SHEET INFO`](../commands-legacy/get-style-sheet-info.md) puede devolver información diferente si se llama desde un formulario o no.

## Tabla de la librería

| Librería  | Versión actual                         | Actualizado en 4D | Comentario                                                                                                                                             |
| --------- | -------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BoringSSL | 9b86817                                | 21                | Utilizado para QUIC                                                                                                                                    |
| CEF       | 7258                                   | 21                | Chromium 139                                                                                                                                           |
| Hunspell  | 1.7.2  | 20                | Utilizado para la corrección ortográfica en formularios 4D y 4D Write Pro                                                                              |
| ICU       | 77.1                   | 21                | Esta actualización fuerza una reconstrucción automática de los índices alfanuméricos, textos y objetos.                                |
| libldap   | 2.6.10 | 21                |                                                                                                                                                        |
| libsasl   | 2.1.28 | 20                |                                                                                                                                                        |
| Liblsquic | 4.2.0  | 20 R10            | Utilizado para QUIC                                                                                                                                    |
| Libuv     | 1.51.0 | 21                | Utilizado para QUIC                                                                                                                                    |
| libZip    | 1.11.4 | 21                | Utilizado por los componentes zip class, 4D Write Pro, svg y serverNet                                                                                 |
| LZMA      | 5.8.1  | 21                |                                                                                                                                                        |
| ngtcp2    | 1.18.0 | 21                | Utilizado para QUIC                                                                                                                                    |
| OpenSSL   | 3.5.2  | 21                |                                                                                                                                                        |
| PDFWriter | 4.7.0  | 21                | Utilizado para [`WP Export document`](../WritePro/commands/wp-export-document.md) y [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
| SpreadJS  | 18.2.0 | **21 R2**         | Consulte [esta entrada de blog](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) para obtener una visión general de las nuevas funciones        |
| webKit    | WKWebView                              | 19                |                                                                                                                                                        |
| Xerces    | 3.3.0  | 21                | Utilizado para comandos XML                                                                                                                            |
| Zlib      | 1.3.1  | 21                |                                                                                                                                                        |
