---
id: updates
title: Documentation updates
---

La liste des principales mises à jour de cette documentation. Pour des informations générales sur les nouvelles fonctionnalités des produits 4D, consultez les **"release notes"** sur [doc.4d.com](https://doc.4d.com).

## 4D v19 R2

- Un [fichier .gitignore par défaut](Preferences/general.md#create-gitignore-file) peut être créé avec les nouveaux projets
- Nouvelle [API Blob class](API/BlobClass.md) pour gérer de nouveaux objets [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- Prise en charge de `no-bom` et nouveaux caractères de fin de ligne par défaut dans [`.setText()`](API/FileClass.md#settext)


## 4D v19

- [IMAPTransporter Class](API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](FormEditor/createStylesheet.md#media-queries)
- New default dark and light themes in [method editor preferences](Preferences/methods.md#theme-list).
- [Native compilation](Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](Admin/cli.md) page.


## 4D v18 R6

- [Entity Selection Class](API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) and [SMTP Mail](API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- Nouveau composant [WebAdmin](Admin/webAdmin.md) du server web
- Nouvelle interface [DataExplorer](Admin/dataExplorer)
- New web [user sessions](WebServer/sessions.md) and [their API](API/SessionClass.md).
