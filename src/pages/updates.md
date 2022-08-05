---
id: updates
title: Documentation updates
---

The list of main updates in this documentation. For general information about new features in the 4D products, see the **release notes** on [doc.4d.com](https://doc.4d.com). 


## 4D v19 R7

- Related data and computed/alias attributes can be displayed in the [Data Explorer](docs/Admin/dataExplorer#basics).
- New [FileHandle](docs/API/FileHandleClass) class and new [`.open(docs/)`](docs/API/FileClass#open) function in the `File` class. 


## 4D v19 R6

- New [HTTPRequest](docs/API/HTTPRequestClass) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every(docs/)`](docs/API/CollectionClass#every), [`.filter(docs/)`](docs/API/CollectionClass#filter), [`.find(docs/)`](docs/API/CollectionClass#find), [`.findIndex(docs/)`](docs/API/CollectionClass#findindex), [`.map(docs/)`](docs/API/CollectionClass#map), [`.orderByMethod(docs/)`](docs/API/CollectionClass#orderbymethod), [`.reduce(docs/)`](docs/API/CollectionClass#reduce), [`.some(docs/)`](docs/API/CollectionClass#some), [`.sort(docs/)`](docs/API/CollectionClass#sort)
- Listbox cells support [horizontal](docs/FormObjects/propertiesCoordinatesAndSizing#horizontal-padding) and [vertical](docs/FormObjects/propertiesCoordinatesAndSizing#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](docs/ViewPro/method-list#vp-create-table) and [VP REMOVE TABLE](docs/ViewPro/method-list#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](docs/Admin/dataExplorer#basics).
- New page explaining [why and how 4D collects data](docs/Admin/data-collect).


## 4D v19 R5

- Built Client/Server applications: 
	- The project [directory.json file](docs/Users/editing#directoryjson-file) can now be [embedded in the server](docs/Desktop/building#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
	- You can now [deselect useless modules](docs/Desktop/building#deselecting-modules) in your built applications.

- [Client/Server optimization](docs/ORDA/datastores#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](docs/ORDA/datastores#preconfiguring-contexts) and [ORDA Cache](docs/ORDA/datastores#orda-cache) for more information. 
    > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.

- [DataClass class](docs/API/DataClassClass): The new [.getCount(docs/)](docs/API/DataClassClass#getcount) function returns the number of entities in a dataclass.

- 4D View Pro: 
    - The new [VP SET DATA CONTEXT](docs/ViewPro/method-list#vp-set-data-context), [VP Get data context](docs/ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](docs/ViewPro/method-list#vp-set-binding-path), [VP Get binding path](docs/ViewPro/method-list#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells. 
    - [VP EXPORT DOCUMENT](docs/ViewPro/method-list#vp-get-binding-path) and [VP Export to object](docs/ViewPro/method-list#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.


## 4D v19 R4

- [Alias attributes](docs/ORDA/ordaClasses#alias-attributes-1) are available in ORDA classes.

- Support for [break and continue](docs/Concepts/looping#break-and-continue) statements in loops.
- Support for [return](docs/Concepts/control-flow#return-expression) statement and [return expression](docs/Concepts/parameters#return-expression) to return values.
- Support for [compound assignment operators](docs/Concepts/operators#compound-assignment-operators), [short-circuit operators](docs/Concepts/operators#short-circuit-operators), and [ternary operator](docs/Concepts/operators#ternary-operator)
- The [Code Editor](docs/code-editor/overview) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](docs/Preferences/general#include-tokens-in-project-source-files) and [**Show clipboards**](docs/Preferences/methods#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](docs/REST/lock) entities.   
- [4D View Pro](docs/ViewPro/getting-started) chapter added with new commands: [VP Copy to object](docs/ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](docs/ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](docs/ViewPro/method-list#vp-paste-from-object).
- New [SystemWorker class](docs/API/SystemWorkerClass).


## 4D v19 R3
 
- [Computed properties](docs/Concepts/classes#function-get-and-function-set) are available in classes.
- [Computed attributes](docs/ORDA/ordaClasses#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](docs/ORDA/ordaClasses#function-query-attributename) and [orderBy](docs/ORDA/ordaClasses#function-orderby-attributename) functions.
- New ORDA dataclass attributes: [`exposed`](docs/API/DataClassAttributeClass#exposed) and [`readOnly`](docs/API/DataClassAttributeClass#readonly).
- [ZIP archives](docs/API/ZipArchiveClass#zip-create-archive) now supports *LZMA* and *xz* compression algorithms. 
- A [new build option](docs/Desktop/building#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows. 
- Extended [support of dark mode](docs/Preferences/general#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](docs/API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](docs/API/POP3TransporterClass#pop3-new-transporter), and [`SMTP New transporter`](docs/API/SMTPTransporterClass#smtp-new-transporter).
- Users can now load a [log configuration file](docs/Debugging/debugLogFiles#using-a-log-configuration-file) using a button in the [server administration window](docs/ServerWindow/maintenance#load-logs-configuration-file).
- Handling [optional parameters](docs/Concepts/parameters#optional-parameters) is more flexible in the 4D language.
- Debugging web server sessions [is easier on 4D Server](docs/WebServer/sessions#preemptive-mode). 
- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.


## 4D v19 R2
 
- A [default .gitignore file](docs/Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](docs/API/BlobClass) to handle new [`4D.Blob` objects](docs/Concepts/dt_blob#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText(docs/)`](docs/API/FileClass#settext)


## 4D v19
 
- [IMAPTransporter Class](docs/API/IMAPTransporterClass): new `.createBox(docs/)`, `.deleteBox(docs/)`, `.renameBox(docs/)`, `.subscribe(docs/)`, and `.unsubscribe(docs/)` functions.
- [File Class](docs/API/FileClass): new `setAppInfo(docs/)` and `getAppInfo(docs/)` functions.
- New [4DEACH](docs/Tags/#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](docs/WebServer/webServerConfig#session-cookie-samesite) setting. 
- Dark and light color scheme support for [forms](docs/FormEditor/propertiesForm#color-scheme) and [style sheets](docs/FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](docs/Preferences/methods#theme-list). 
- [Native compilation](docs/Project/compiler#compiler-methods-for) for Silicon processors.
- [Variable calculation](docs/FormObjects/propertiesObject#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](docs/Admin/cli) page.



## 4D v18 R6
 
- [Entity Selection Class](docs/API/EntitySelectionClass): `.average(docs/)`, `.max(docs/)` and `.min(docs/)` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](docs/API/IMAPTransporterClass), [POP3 Mail](docs/API/POP3TransporterClass) and [SMTP Mail](docs/API/SMTPTransporterClass): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](docs/API/IMAPTransporterClass): new `.expunge(docs/)` and `.append(docs/)` functions
- New [WebAdmin](docs/Admin/webAdmin) web server component
- New [DataExplorer](docs/Admin/dataExplorer) interface
- New web [user sessions](docs/WebServer/sessions) and [their API](docs/API/SessionClass).