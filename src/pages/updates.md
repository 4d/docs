---
id: updates
title: Documentation updates
---

The list of main updates in this documentation. For general information about new features in the 4D products, see the **release notes** on [doc.4d.com](https://doc.4d.com). 


## 4D v19 R7

- Related data and computed/alias attributes can be displayed in the [Data Explorer](Admin/dataExplorer#basics).
- New [FileHandle](API/FileHandleClass) class and new [`.open()`](API/FileClass#open) function in the `File` class. 
- 4D View Pro: new table commands [VP Get tables](ViewPro/method-list#vp-get-tables), [VP INSERT TABLE COLUMNS](ViewPro/method-list#vp-insert-table-columns), [VP INSERT TABLE ROWS](ViewPro/method-list#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](ViewPro/method-list#vp-remove-table-columns), [VP REMOVE TABLE ROWS](ViewPro/method-list#vp-remove-table-rows), [VP RESIZE TABLE](ViewPro/method-list#vp-resize-table).
- Component namespaces are now [displayed in the Explorer](Extensions/develop-components.md#declaring-the-component-namespace).

## 4D v19 R6

- New [HTTPRequest](API/HTTPRequestClass) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](API/CollectionClass#every), [`.filter()`](API/CollectionClass#filter), [`.find()`](API/CollectionClass#find), [`.findIndex()`](API/CollectionClass#findindex), [`.map()`](API/CollectionClass#map), [`.orderByMethod()`](API/CollectionClass#orderbymethod), [`.reduce()`](API/CollectionClass#reduce), [`.some()`](API/CollectionClass#some), [`.sort()`](API/CollectionClass#sort)
- Listbox cells support [horizontal](FormObjects/propertiesCoordinatesAndSizing#horizontal-padding) and [vertical](FormObjects/propertiesCoordinatesAndSizing#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](ViewPro/method-list#vp-create-table) and [VP REMOVE TABLE](ViewPro/method-list#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](Admin/dataExplorer#basics).
- New page explaining [why and how 4D collects data](Admin/data-collect).


## 4D v19 R5

- Built Client/Server applications: 
	- The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](Desktop/building#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
	- You can now [deselect useless modules](Desktop/building#deselecting-modules) in your built applications.
- [Client/Server optimization](ORDA/datastores#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](ORDA/datastores#preconfiguring-contexts) and [ORDA Cache](ORDA/datastores#orda-cache) for more information. 
    > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.
- [DataClass class](API/DataClassClass): The new [.getCount()](API/DataClassClass#getcount) function returns the number of entities in a dataclass.
- 4D View Pro: 
    - The new [VP SET DATA CONTEXT](ViewPro/method-list#vp-set-data-context), [VP Get data context](ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](ViewPro/method-list#vp-set-binding-path), [VP Get binding path](ViewPro/method-list#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells. 
    - [VP EXPORT DOCUMENT](ViewPro/method-list#vp-get-binding-path) and [VP Export to object](ViewPro/method-list#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.


## 4D v19 R4

- [Alias attributes](ORDA/ordaClasses#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](Concepts/looping#break-and-continue) statements in loops.
- Support for [return](Concepts/control-flow#return-expression) statement and [return expression](Concepts/parameters#return-expression) to return values.
- Support for [compound assignment operators](Concepts/operators#compound-assignment-operators), [short-circuit operators](Concepts/operators#short-circuit-operators), and [ternary operator](Concepts/operators#ternary-operator)
- The [Code Editor](code-editor/overview) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](Preferences/general#include-tokens-in-project-source-files) and [**Show clipboards**](Preferences/methods#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](REST/lock) entities.   
- [4D View Pro](ViewPro/getting-started) chapter added with new commands: [VP Copy to object](ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](ViewPro/method-list#vp-paste-from-object).
- New [SystemWorker class](API/SystemWorkerClass).


## 4D v19 R3
 
- [Computed properties](Concepts/classes#function-get-and-function-set) are available in classes.
- [Computed attributes](ORDA/ordaClasses#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](ORDA/ordaClasses#function-query-attributename) and [orderBy](ORDA/ordaClasses#function-orderby-attributename) functions.
- New ORDA dataclass attributes: [`exposed`](API/DataClassAttributeClass#exposed) and [`readOnly`](API/DataClassAttributeClass#readonly).
- [ZIP archives](API/ZipArchiveClass#zip-create-archive) now supports *LZMA* and *xz* compression algorithms. 
- A [new build option](Desktop/building#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows. 

- Extended [support of dark mode](Preferences/general#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](API/POP3TransporterClass#pop3-new-transporter), and [`SMTP New transporter`](API/SMTPTransporterClass#smtp-new-transporter).
- Users can now load a [log configuration file](Debugging/debugLogFiles#using-a-log-configuration-file) using a button in the [server administration window](ServerWindow/maintenance#load-logs-configuration-file).
- Handling [optional parameters](Concepts/parameters#optional-parameters) is more flexible in the 4D language.
- Debugging web server sessions [is easier on 4D Server](WebServer/sessions#preemptive-mode). 
- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.


## 4D v19 R2
 
- A [default .gitignore file](Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](API/BlobClass) to handle new [`4D.Blob` objects](Concepts/dt_blob#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](API/FileClass#settext)


## 4D v19
 
- [IMAPTransporter Class](API/IMAPTransporterClass): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](API/FileClass): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](Tags/#4deach-and-4dendeach) transformation tag.
- Web Server: new [SameSite session cookie](WebServer/webServerConfig#session-cookie-samesite) setting. 
- Dark and light color scheme support for [forms](FormEditor/propertiesForm#color-scheme) and [style sheets](FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](Preferences/methods#theme-list). 
- [Native compilation](Project/compiler#compiler-methods-for) for Silicon processors.
- [Variable calculation](FormObjects/propertiesObject#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](Admin/cli) page.



## 4D v18 R6
 
- [Entity Selection Class](API/EntitySelectionClass): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](API/IMAPTransporterClass), [POP3 Mail](API/POP3TransporterClass) and [SMTP Mail](API/SMTPTransporterClass): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](API/IMAPTransporterClass): new `.expunge()` and `.append()` functions
- New [WebAdmin](Admin/webAdmin) web server component
- New [DataExplorer](Admin/dataExplorer) interface
- New web [user sessions](WebServer/sessions) and [their API](API/SessionClass).