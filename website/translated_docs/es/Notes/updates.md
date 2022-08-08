---
id: updates
title: Actualizaciones de la documentación
---

La lista de las principales actualizaciones de esta documentación. Para obtener información general sobre las nuevas funcionalidades de los productos 4D, consulte las **release notes** en [doc.4d.com](https://doc.4d.com).

## 4D v19

- Nueva petición REST para [bloquear/desbloquear](REST/$lock.md) entidades (19.2).
- [IMAPTransporter Class](API/IMAPTransporterClass.md): nuevas funciones `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()` y `.unsubscribe()`.
- [File Class](API/FileClass.md): nuevas funciones `setAppInfo()` y `getAppInfo()`.
- Nueva etiqueta de transformación [4DEACH](Tags/tags.md#4deach-and-4dendeach).
- Servidor web: nuevo parámetro [Cookie de sesión SameSite](WebServer/webServerConfig.md#session-cookie-samesite).
- Soporte de esquema de color oscuro y claro para los [formularios](FormEditor/properties_FormProperties.md#color-scheme) y [hojas de estilo](FormEditor/createStylesheet.md#media-queries)
- Nuevos temas oscuros y claros por defecto en las preferencias del [editor del métodos](Preferences/methods.md#theme-list).
- [Compilación nativa](Project/compiler.md#compiler-methods-for) para procesadores Silicon.
- La propiedad [cálculo de variables](FormObjects/properties_Object.md#variable-calculation) es ahora soportada por las columnas list box de la selección de entidades.
- Nueva, página [CLI](Admin/cli.md) completa.


## 4D v18 R6

- [Entity Selection Class](API/EntitySelectionClass.md): las funciones `.average()`, `.max()` y `.min()` ahora devuelven *undefined* si la selección de entidades está vacía.
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) y [SMTP Mail](API/SMTPTransporterClass.md): la propiedad `authenticationMode` activa a OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass.md): nuevas funciones `.expunge()` y `.append()`
- Nuevo componente [WebAdmin](Admin/webAdmin.md) del servidor web
- Nueva interfaz [DataExplorer](Admin/dataExplorer)
- Nuevas [sesiones de usuario](WebServer/sessions.md) web y [su API](API/SessionClass.md).