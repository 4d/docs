---
id: updates
title: Release Notes
---

:::tip

Read [**What’s new in 4D 19**](https://blog.4d.com/en-whats-new-in-4d-v19/), the blog post that lists all new features and enhancements in 4D 19 LTS.

:::



## 4D 19.8 LTS

#### Highlights

- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.8): list of all bugs that have been fixed in 4D 19.8.


## 4D 19.7 LTS

#### Highlights

:::warning Security Note

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 19.7 LTS build 288986 or higher. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.7): list of all bugs that have been fixed in 4D 19.7.


## 4D 19.6 LTS

#### Highlights

- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.6): list of all bugs that have been fixed in 4D 19.6.


## 4D 19.5 LTS

#### Highlights 

- 4D 19.5 is certified on Windows 11 22H2
- 4D 19.5 is certified on macOS Ventura (macOS 13)
- SpreadJS version has been updated (14.1.6).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19.5): list of all bugs that have been fixed in 4D 19.5.


## 4D 19.x LTS

#### Highlights 

- [IMAPTransporter Class](../API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](../WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](../FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods.md#theme-list).
- [Native compilation](../Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](../FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](../Admin/cli.md) page.



### 4D 18 R6

- [Entity Selection Class](../API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass.md), [POP3 Mail](../API/POP3TransporterClass.md) and [SMTP Mail](../API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- New [WebAdmin](../Admin/webAdmin.md) web server component
- New [DataExplorer](../Admin/dataExplorer.md) interface
- New web [user sessions](../WebServer/sessions.md) and [their API](../API/SessionClass.md).


## Previous releases


- See the [**previous Release notes**](https://doc.4d.com/4Dv19/4D/19.4/4D-v19x-Release-Notes.100-6044726.en.html) on doc.4d.com.


## Library table


|Library|Current version|Updated in 4D|Comment|
|---|---|---|----|
|OpenSSL|1.1.1s|19.6||
|SpreadJS|14.1.6|19.5|4D View Pro engine|
|CEF|4324|19|Chromium v88. Allows native compilation on Apple Silicon platforms.|
|webKit|WKWebView|19||
|ICU|68.1|18 R6|This major upgrade forces an automatic rebuild of alphanumeric, text and object indexes.|
|PHP|7.3.27|18 R6||
|libldap|2.4.48|18 R2||
