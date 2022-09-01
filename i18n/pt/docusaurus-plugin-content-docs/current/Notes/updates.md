---
id: updates
title: Documentation updates
---

The list of main updates in this documentation. For general information about new features in the 4D products, see the **release notes** on [doc.4d.com](https://doc.4d.com).


## 4D v19 R7

- Related data and computed/alias attributes can be displayed in the [Data Explorer](Admin/dataExplorer.md#basics).
- New [FileHandle](API/FileHandleClass.md) class and new [`.open()`](API/FileClass.md#open) function in the `File` class.


## 4D v19 R6

- New [HTTPRequest](API/HTTPRequestClass.md) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](API/CollectionClass.md#every), [`.filter()`](API/CollectionClass.md#filter), [`.find()`](API/CollectionClass.md#find), [`.findIndex()`](API/CollectionClass.md#findindex), [`.map()`](API/CollectionClass.md#map), [`.orderByMethod()`](API/CollectionClass.md#orderbymethod), [`.reduce()`](API/CollectionClass.md#reduce), [`.some()`](API/CollectionClass.md#some), [`.sort()`](API/CollectionClass.md#sort)
- Listbox cells support [horizontal](FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](ViewPro/method-list.md#vp-create-table) and [VP REMOVE TABLE](ViewPro/method-list.md#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](Admin/dataExplorer.md#basics).
- New page explaining [why and how 4D collects data](Admin/data-collect.md).


## 4D v19 R5

- Built Client/Server applications:
    - The project [directory.json file](../Users/handling_users_groups.md#directoryjson-file) can now be [embedded in the server](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
    - You can now [deselect useless modules](../Desktop/building.md#deselecting-modules) in your built applications.

- [Client/Server optimization](../ORDA/remoteDatastores.md#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) and [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) for more information.

    > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.

- [DataClass class](../API/DataClassClass.md): The new [.getCount()](../API/DataClassClass.md#getcount) function returns the number of entities in a dataclass.

- 4D View Pro:
    - The new [VP SET DATA CONTEXT](ViewPro/method-list.md#vp-set-data-context), [VP Get data context](ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](ViewPro/method-list.md#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
    - [VP EXPORT DOCUMENT](ViewPro/method-list.md#vp-get-binding-path) and [VP Export to object](ViewPro/method-list.md#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.


## 4D v19 R4

- [Alias attributes](ORDA/ordaClasses.md#alias-attributes-1) are available in ORDA classes.

- Support for [break and continue](Concepts/cf_looping.md#break-and-continue) statements in loops.
- Support for [return](Concepts/flow-control.md#return-expression) statement and [return expression](Concepts/parameters.md#return-expression) to return values.
- Support for [compound assignment operators](Concepts/operators.md#compound-assignment-operators), [short-circuit operators](Concepts/operators.md#short-circuit-operators), and [ternary operator](Concepts/operators.md#ternary-operator)
- The [Code Editor](../code-editor/navigation.md) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](REST/$lock.md) entities.
- [4D View Pro](ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](ViewPro/method-list.md#vp-paste-from-object).
- New [SystemWorker class](API/SystemWorkerClass.md).


## 4D v19 R3

- [Computed properties](Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](ORDA/ordaClasses.md#function-query-attributename) and [orderBy](ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass attributes: [`exposed`](API/DataClassAttributeClass.md#exposed) and [`readOnly`](API/DataClassAttributeClass.md#readonly).
- [ZIP archives](API/ZipArchiveClass.md#zip-create-archive) now supports *LZMA* and *xz* compression algorithms.
- A [new build option](Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](Debugging/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](ServerWindow/maintenance.md#load-logs-configuration-file).
- Handling [optional parameters](Concepts/parameters.md#optional-parameters) is more flexible in the 4D language.
- Debugging web server sessions [is easier on 4D Server](WebServer/sessions.md#preemptive-mode).
- The new [4D NetKit](Extensions/overview.md#list-of-4d-components) component allows you to connect to third-party APIs such as Microsoft Graph.


## 4D v19 R2

- A [default .gitignore file](Preferences/general.md#create-gitignore-file) can be created with new projects
- New [Blob class API](API/BlobClass.md) to handle new [`4D. Blob` objects](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](API/FileClass.md#settext)


## 4D v19

- [IMAPTransporter Class](API/IMAPTransporterClass.md): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](API/FileClass.md): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](Tags/tags.md#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](WebServer/webServerConfig.md#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](FormEditor/properties_FormProperties.md#color-scheme) and [style sheets](FormEditor/createStylesheet.md#media-queries)
- New default dark and light themes in [Code Editor preferences](Preferences/methods.md#theme-list).
- [Native compilation](Project/compiler.md#compiler-methods-for) for Silicon processors.
- [Variable calculation](FormObjects/properties_Object.md#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](Admin/cli.md) page.



## 4D v18 R6

- [Entity Selection Class](API/EntitySelectionClass.md): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](API/IMAPTransporterClass.md), [POP3 Mail](API/POP3TransporterClass.md) and [SMTP Mail](API/SMTPTransporterClass.md): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass.md): new `.expunge()` and `.append()` functions
- New [WebAdmin](Admin/webAdmin.md) web server component
- New [DataExplorer](../Admin/dataExplorer.md) interface
- New web [user sessions](WebServer/sessions.md) and [their API](API/SessionClass.md).