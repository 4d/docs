---
id: updates
title: Actualizaciones de la documentación
---

La lista de las principales actualizaciones de esta documentación. Para obtener información general sobre las nuevas funcionalidades de los productos 4D, consulte las **release notes** en [doc.4d.com](https://doc.4d.com).

## 4D v19

- New REST request to [lock/unlock](REST/$lock.md) entities (19.2).
- [IMAPTransporter Class](API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](FormEditor/createStylesheet.md#media-queries)
- New default dark and light themes in [method editor preferences](Preferences/methods.md#theme-list).
- [Native compilation](Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- Nueva, página [CLI](Admin/cli.md) completa.


## 4D v18 R6

- [Entity Selection Class](API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) and [SMTP Mail](API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- Nuevo componente [WebAdmin](Admin/webAdmin.md) del servidor web
- Nueva interfaz [DataExplorer](Admin/dataExplorer)
- New web [user sessions](WebServer/sessions.md) and [their API](API/SessionClass.md).