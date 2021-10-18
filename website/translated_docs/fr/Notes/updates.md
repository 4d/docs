---
id: updates
title: Documentation updates
---

La liste des principales mises à jour de cette documentation. Pour des informations générales sur les nouvelles fonctionnalités des produits 4D, consultez les **"release notes"** sur [doc.4d.com](https://doc.4d.com).


## 4D v19 R3

- [Computed properties](Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](ORDA/ordaClasses.md#function-query-attributename) and [orderBy](ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass attributes: [`exposed`](API/DataClassAttributeClass.md#exposed) and [`readOnly`](API/DataClassAttributeClass.md#readonly).
- [ZIP archives](API/ZipArchiveClass.md#zip-create-archive) now supports *LZMA* and *xz* compression algorithms.
- A [new build option](Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](Admin/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](/Admin/server-admin.md#load-logs-configuration-file).
- Handling [optional parameters](Concepts/parameters.md#optional-parameters) is more flexible in the 4D language.
- Debugging web server sessions [is easier on 4D Server](WebServer/sessions.md#preemptive-mode).
- The new [4D NetKit](Project/components.md#list-of-4d-components) component allows you to connect to third-party APIs such as Microsoft Graph.


## 4D v19 R2

- A [default .gitignore file](Preferences/general.md#create-gitignore-file) can be created with new projects
- Nouvelle [API Blob class](API/BlobClass.md) pour gérer de nouveaux objets [`4D.Blob`](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](API/FileClass.md#settext)


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
