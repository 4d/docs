---
id: updates
title: Release Notes
---


:::tip

Read [**What’s new in 4D 20**](https://blog.4d.com/en-whats-new-in-4d-v20/), the blog post that lists all new features and enhancements in 4D 20.x LTS.

:::

## 4D 20.6 LTS

#### Highlights

- 4D 20.6 LTS is certified on Windows Server 2025

:::warning KNOWN ISSUE ON WINDOWS SERVER 2025

On Windows Server 2025, some custom options in the new Windows Print dialog box are not available and are still under investigation. A fix will be available in the next hotfix.

:::

- Ability to [build standalone applications without embedded licenses](../Desktop/building.md#licenses).
- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.6): list of all bugs that have been fixed in 4D 20.6 LTS.



## 4D 20.5 LTS

#### Highlights

- 4D 20.5 LTS is certified on Windows 11 24H2.
- 4D 20.5 LTS is certified on macOS Sequoia (macOS 15).

:::warning Known issue on Windows 11 24H2

On Windows 11 24H2, generating pdf using the Microsoft Print to PDF driver may fail due to an issue which is still under investigation. If you frequently print PDFs with your 4D application, we currently recommend that you do not upgrade to Windows 11 24H2.

:::

- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.5): list of all bugs that have been fixed in 4D 20.5 LTS.


## 4D 20.4 LTS

#### Highlights

- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.4): list of all bugs that have been fixed in 4D 20.4 LTS.

## 4D 20.3 LTS

#### Highlights

- CEF updated to Chromium 5993
- SpreadJS updated to version 16.2.6 (in 4D 20.2 HF1).
- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.3): list of all bugs that have been fixed in 4D 20.3 LTS.

#### Behavior changes

- As of 20.3, in order to allow password verification when the [4D user directory uses the bcrypt algorithm](https://blog.4d.com/bcrypt-support-for-passwords/), the "password" value in the *connectionInfo* parameter of the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command is now sent in clear form by default. Make sure your "On REST authentication" database method can handle passwords in clear form (third parameter is then **False**) and that `Open datastore` encrypts your connection by passing the "tls" option to **True** in *connectionInfo*. In specific cases, a new "passwordAlgorithm" option can also be used for compatibility (see [`Open datastore`](../API/DataStoreClass.md#open-datastore) command).


## 4D 20.2 LTS

#### Highlights

- 4D 20.2 is certified on macOS Sonoma (macOS 14).

:::warning Security Note

If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 20.2 LTS build 100956 or higher. For more information, refer to this [Security bulletin](https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/).

:::

:::caution Minimal client version for 4D Server 20.2 and later

For internal reasons, the version of remote clients connecting to 4D Server 20.2 and later must be at least 4D 20.2.

:::

- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.2): list of all bugs that have been fixed in 4D 20.2 LTS.

#### Behavior changes

- As of 20.2, 4D 20 LTS is no longer compatible with Windows Server 2012 R2.
- **Warning**: The starting [`offset`](../API/FileHandleClass.md#offset) value of [4D.FileHandle](../API/FileHandleClass.md) objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions **20.2** (20.1 HF1) and **20 R2** and the value is now 0.

## 4D 20.1 LTS

#### Highlights

:::caution 4D 20.1 index rebuild and client/server versions

4D 20.1 also includes an ICU library update, which has the following consequences:

- It will force an automatic rebuild of indexes of type alpha, text, and object.
- Because of sorting consistency, it requires that 4D remote clients and 4D Server use the same version: only remote 4D 20.1 can connect to 4D Server 20.1 and vice versa.

:::


- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20.1): list of all bugs that have been fixed in 4D 20.1 LTS.

## 4D 20 LTS


#### Highlights

:::caution Index rebuild

4D 20 includes an ICU library update (see below) which will force an automatic rebuild of indexes of type alpha, text, and object. Depending on the size of the data file, this operation can take a while and may require to be planned.

:::

- New `plugins` property in the *options* parameter for the [`Compile project`](https://doc.4d.com/4dv20/help/command/en/page1760.html) command.
- 4D Server automatically integrates multiple journals: [Automatic restore](../Backup/settings.md#automatic-restore-and-log-integration).
- [IMAP Transporter Class](../API/IMAPTransporterClass.md): [`.getBoxInfo()`](../API/IMAPTransporterClass#getboxinfo) returns *id*, [`.selectBox()`](../API/IMAPTransporterClass.md#selectbox) returns *id*, *flags* and *permanentFlags*, [`.addFlags()`](../API/IMAPTransporterClass.md#addflags) and [`.removeFlags()`](../API/IMAPTransporterClass.md#removeflags) support custom keywords.
- New [WebSocketServer](../API/WebSocketServerClass.md) and [WebSocketConnection](../API/WebSocketConnectionClass.md) classes to create and manage WebSocket connections from 4D.
- Support of [`property`](../Concepts/classes.md#property) keyword in user class definitions.
- New functions to lock/unlock the datastore: [`.flushAndLock()`](../API/DataStoreClass.md#flushandlock), [`.locked()`](../API/DataStoreClass.md#locked), [`.unlock()`](../API/DataStoreClass.md#unlock).
- New [`.at()`](../API/EntitySelectionClass.md#at) function in the Entity selection class.
- New functions in the Collection class: [`.at()`](../API/CollectionClass.md#at), [`.first()`](../API/CollectionClass.md#first), [`.flat()`](../API/CollectionClass.md#flat), [`.flatMap()`](../API/CollectionClass.md#flatmap),[`.includes()`](../API/CollectionClass.md#includes), [`.last()`](../API/CollectionClass.md#last), [`.reduceRight()`](../API/CollectionClass.md#reduceright).
- Code editor: enhanced [Find and replace features](../code-editor/write-class-method.md#find-and-replace).
- New searchable "property" Language element in the [**Find in design...**](https://doc.4d.com/4Dv20/4D/20/Performing-a-search.300-6263762.en.html#6337726) dialog box.
- To simplify code, some comparison operators can now be used with [Undefined values](../Concepts/dt_null_undefined.md#undefined-operators) without generating errors.
- Support of *headerOnly* parameter in [`POP3Transporter.getMail()`](../API/POP3TransporterClass.md#getmail).
- Support of `count values` option in [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) and [`collection.distinct()`](../API/CollectionClass.md#distinct) functions.
- New [`entitySelection.distinctPaths()`](../API/EntitySelectionClass.md#distinctpaths) function.
- Support of `count values` option in [`entitySelection.distinct()`](../API/EntitySelectionClass.md#distinct) and [`collection.distinct()`](../API/CollectionClass.md#distinct) functions.
- ORDA requests logs are now available [on the server](../Debugging/debugLogFiles.md#orda-requests), new parameter for [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) function.
- New tools for code execution in CLI: [tool4d](../Admin/cli.md#tool4d) and [4D Server in utility mode](../Admin/cli.md#4d-server-in-utility-mode).
- [Data Explorer](../Admin/dataExplorer.md#opening-the-data-explorer): new button and display in a 4D window.
- New properties for buttons, check boxes and radio buttons: [Image hugs title](../FormObjects/properties_TextAndPicture.md#image-hugs-title) and [Horizontal Alignment](../FormObjects/properties_Text.md#horizontal-alignment).
- Support of `WinIcon` in [`file.setAppInfo()`](../API/FileClass.md#setappinfo) function.
- New `validateTLSCertificate` option for [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew) allowing you to control the automatic certificate validation.   
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6237190.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv20/4D/20/What-s-new.901-6229455.en.html) on doc.4d.com.
- [**Fixed bugs list**](https://bugs.4d.com/fixes?version=20): list of all bugs that have been fixed in 4D 20 LTS.


#### Behavior changes

- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) property.
- TLS certificates are now automatically validated by 4D when sending HTTP requests with [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew), and rejected with an error if they are invalid. A new *option* property allows you to control this validation.
- TLS v1.0 and TLS v1.1 are deprecated, they are no longer supported as `Min TLS version` on 4D Server. Version 1.3 is now selected by default and is automatically used if `_o_TLSv1_0` or `_o_TLSv1_1` constants are set with [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html).
- For consistency, all buttons, checkboxes, and radio buttons are now rendered with a "3D" type at runtime: respectively `Object type 3D button`, `Object type 3D checkbox`, and `Object type 3D radio button` are returned by [`OBJECT Get type`](https://doc.4d.com/4dv20/help/command/en/page642.html) for these objects.
- As of 4D 20, [4D for Mobile](https://developer.4d.com/go-mobile/) is no longer installed by default in the 4D environment. To benefit from the 4D for Mobile development features in 4D, you need to [install the 4D Mobile App component](https://developer.4d.com/go-mobile/docs/getting-started/installation) in the ["Components"](../Project/architecture.md#components) folder of your projects. If a converted project uses features from the [4D Mobile App Server component](https://github.com/4d/4D-Mobile-App-Server#4d-mobile-app-server), make sure you also install it in the "Components" folder of the project.


### 4D 19 R8

Read [**What’s new in 4D 19 R8**](https://blog.4d.com/en-whats-new-in-4d-v19-r8/), the blog post that lists all new features and enhancements in 4D 19 R8.


#### Highlights

- Error management methods can be installed for [global and component execution contexts](../Concepts/error-handling.md#scope-and-components).
- Listboxes with collection or entity selection datasources now support [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) column property.
- ORDA: Support of the *roles.json* file to define [privileges](../ORDA/privileges.md) assigned to the session with [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Support of [SDI mode in test application mode](../Menus/sdi.md#sdi-mode-availability) on Windows.
- 4D View Pro:
	- support of themes in tables: new [VP SET TABLE THEME](../ViewPro/method-list.md#vp-set-table-theme) and [VP Get table theme](../ViewPro/method-list.md#vp-get-table-theme) commands, support of theme options in [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table)
	- new [VP Get table dirty rows](../ViewPro/method-list.md#vp-get-table-dirty-rows) command
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R8): list of all bugs that have been fixed in 4D 19 R8.


#### Behavior changes

- For HTTP RFC compliance, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass.md#response) property now returns all header names **in lowercase**. If you want your code to continue working as before, use the new [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass.md#response) property.
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- In Web areas using blink (CEF), dialogs displayed from external scripts are now blocking if not called from a `setTimeout()` JS function. This is due to the current CEF updates, in which dialogs displayed by functions such as `alert()` or `print()` are no longer handled by the OS but by the Web area. See [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) and [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).



### 4D 19 R7

Read [**What’s new in 4D 19 R7**](https://blog.4d.com/en-whats-new-in-4d-v19-r7/), the blog post that lists all new features and enhancements in 4D 19 R7.


#### Highlights

- Related data and computed/alias attributes can be displayed in the [Data Explorer](../Admin/dataExplorer#basics).
- New [FileHandle](../API/FileHandleClass.md) class and new [`.open()`](../API/FileClass.md#open) function in the `File` class.
- [Entity selection Class](../API/EntitySelectionClass.md): [`.add()`](../API/EntitySelectionClass.md#add) supports an *entitySelection* parameter, [`.minus()`](../API/EntitySelectionClass.md#minus) supports a *keepOrder* parameter.
- Support of *automaticRedirections* and *decodeData* options in [`4D.HTTPRequest.new()`](../API/HTTPRequestClass.md#4dhttprequestnew).
- New [4DHTTPClientLog.txt](../Debugging/debugLogFiles.md#4dhttpclientlogtxt) log file.
- 4D View Pro: new table commands [VP Find table](../ViewPro/method-list.md#vp-find-table), [VP Get table column attributes](../ViewPro/method-list.md#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list.md#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list.md#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list.md#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list.md#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list.md#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list.md#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list.md#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list.md#vp-set-table-column-attributes).
- Component namespaces are now [displayed in the Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Text area and Input form objects now support the [corner radius property](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- 4D Language commands: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) on doc.4d.com.
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=19_R7): list of all bugs that have been fixed in 4D 19 R7.


#### Behavior changes

- For consistency with standard interfaces (e.g. OS file explorers), list box rules for row selection/drag and drop have been modified. A continuous or discontinuous selection of rows can be dragged by simply clicking on and moving a selected row; the **Alt** key is not longer necessary (but can still be used like in previous previous). When the **Shift** or **Ctrl/Command** key is pressed, a mouse click is taken into account when the click is down. For more information on drag and drop in list boxes, you can refer to [this blog post](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) and download [this HDI 4D project](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- The 4D internal build numbering has been modified as of 4D 19 R7:
	- releases up to 4D 19 R6 (included) are numbered 282xxx,
	- releases from 4D 19 R7 will be numbered 100xxx.   
	Note that a specific 4D version is still uniquely identified by a branch name and a build number. The build number increases chronologically.
- The ability to use Wakanda/4D Mobile REST protocol to call a project method has been removed. You can use [ORDA data model class functions](../REST/ClassFunctions.md) or [/4DACTION urls](../WebServer/httpRequests.md#4daction) instead.


### 4D 19 R6

- New [HTTPRequest](../API/HTTPRequestClass.md) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](../API/CollectionClass.md#every), [`.filter()`](../API/CollectionClass.md#filter), [`.find()`](../API/CollectionClass.md#find), [`.findIndex()`](../API/CollectionClass.md#findindex), [`.map()`](../API/CollectionClass.md#map), [`.orderByMethod()`](../API/CollectionClass.md#orderbymethod), [`.reduce()`](../API/CollectionClass.md#reduce), [`.some()`](../API/CollectionClass.md#some), [`.sort()`](../API/CollectionClass.md#sort)
- Listbox cells support [horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding) and [vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](../ViewPro/method-list.md#vp-create-table) and [VP REMOVE TABLE](../ViewPro/method-list.md#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](../Admin/dataExplorer.md#basics).
- To help us make our products always better, we now automatically collect data regarding usage statistics on running 4D Server applications. This will have no impact on performance. See the new page explaining [why and how 4D collects data](../Admin/data-collect.md).
- Components compiled for Silicon: On macOS Silicon platforms (Apple ARM CPUs), components must be recompiled with 4D 19 R6 or higher to be used with this release.




### 4D 19 R5

- The project [directory.json file](../Users/handling_users_groups.md#directoryjson-file) can now be [embedded in the server](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
- You can now [deselect useless modules](../Desktop/building.md#deselecting-modules) in your built applications.
- The *MeCab* library is included by default in all 4D applications on macOS. In previous releases, this library, specifically designed to manage Japanese text, was only available in the Japanese version of 4D on macOS. If you do not need this library in your final applications, you can now [deselect it](../Desktop/building.md#deselecting-modules).
- [Client/Server optimization](../ORDA/remoteDatastores.md#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/remoteDatastores.md#preconfiguring-contexts) and [ORDA Cache](../ORDA/remoteDatastores.md#orda-cache) for more information.
   > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.
- [DataClass class](../API/DataClassClass.md): The new [.getCount()](../API/DataClassClass.md#getcount) function returns the number of entities in a dataclass.
- The *4DDiagnosticLog.txt* file only records high-level information by default ([INFO level](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt). You can now select the information level to record (for example DEBUG level information) using the `Diagnostic log level` selector of the `SET DATABASE PARAMETER` command or the log configuration file.
- Calling `Use()` on a non-shared object or a non-shared collection does nothing (it no longer generates an error). Thus, it is now useless to test if the object or collection passed to Use() is actually shared.
- For clarification purposes, two SQL commands have been prefixed: `GET DATA SOURCE LIST` has been renamed to `SQL GET DATA SOURCE LIST`, `Get current data source` has been renamed to `SQL Get current data source`.
- **4D View Pro**:
    - The new [VP SET DATA CONTEXT](../ViewPro/method-list.md#vp-set-data-context), [VP Get data context](../ViewPro/method-list.md#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list.md#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list.md#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list.md#vp-get-binding-path) and [VP Export to object](../ViewPro/method-list.md#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.
	- (Windows only) 4D View Pro areas now use a new print settings window.
- **Web areas**:
	+ New Windows system rendering engine: Web Areas using the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) are now based upon **Microsoft Edge WebView2**. This impacts the following features:
		* The `WA Create URL history menu` and `WA GET URL HISTORY` commands only return the current URL.
		- The [Progression variable](../FormObjects/properties_WebArea.md#progression) is no longer updated.
		- Drag and drop features are handled by a Windows API which is tagged "experimental" by Microsoft. Consequently, web areas may not work as expected when this API is not installed: Drag and drop may seem allowed even when the `WA enable URL drop` preference has been set to False. However, the drop action is blocked by default, and you can control the allowed URLs using the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) (see below).
	- (Windows only) When the user selects **Print...** from a web area using the embedded web rendering engine, a new print settings window is now displayed.
	- To reflect their actual effect in web areas (increase or decrease page zoom level), two commands have been renamed: `WA SET PAGE TEXT LARGER` has been renamed `WA ZOOM IN`, `WA SET PAGE TEXT SMALLER` has been renamed `WA ZOOM OUT`.
	- Enhanced security in web areas that use the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) or the [Windows system rendering engine](../FormObjects/webArea_overview.md#web-rendering-engine) (based on Microsoft Edge WebView2):
		- CORS policies now apply when accessing files on disk in web areas. For example, when opening a .html file with `WA OPEN URL`, that .html file cannot contain links that point to files outside its folder
		- Dropping external contents in web areas is now always blocked and triggers the [`On Window Opening Denied` event](../Events/onWindowOpeningDenied.md) when the `WA enable URL drop` preference is set to True (when set to False, the `WA enable URL drop` preference only modifies the drop cursor icon and filters the `On Window Opening Denied` event). To allow a drop action, you need to execute additional code in the object method of the web area:

```4d
WA OPEN URL(*;"WebArea";WA Get last filtered URL(*;"WebArea"))
```



### 4D 19 R4

- [Alias attributes](../ORDA/ordaClasses.md#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](../Concepts/flow-control.md#break-and-continue) statements in loops.
- Support for [return](../Concepts/flow-control.md#return-expression) statement and [return expression](../Concepts/parameters.md#return-expression) to return values.
- Support for [compound assignment operators](../Concepts/operators.md#compound-assignment-operators), [short-circuit operators](../Concepts/operators.md#short-circuit-operators), and [ternary operator](../Concepts/operators.md#ternary-operator)
- The [Code Editor](../code-editor/overview.md) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) and [**Show clipboards**](../Preferences/methods.md#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](../REST/$lock.md) entities.   
- [4D View Pro](../ViewPro/getting-started.md) chapter added with new commands: [VP Copy to object](../ViewPro/method-list.md#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list.md#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list.md#vp-paste-from-object).
- New [SystemWorker class](../API/SystemWorkerClass.md).
- The `Alias selection` constant has been renamed `Allow alias files` to resolve a conflict resulting from the support of alias attributes in ORDA.
- For better compliance with ORDA specifications, the *Map NULL values to blank values* field property is now unchecked by default in databases created with 4D 19 R4 and higher. You can also enable this default behavior in your databases converted from previous versions by selecting the Map NULL values to blank values unchecked by default at field creation compatibility setting. Working with Null values is now recommended since they are fully supported by ORDA.
- Because of the support of the [ternary operator](../Concepts/operators.md#ternary-operator), the colon ":" is no longer allowed in variable, field, constant, function, plugin and project method names. If your database/project contains identifiers with colons, you must replace them before converting it to v19 R4 or higher, otherwise errors may occur in your code. For example, if you have a variable named *a:b*, it could be interpreted as ternary operator syntax:

```4d
$value:=($size>1000)? a:b // Here 'a:b' is viewed as a ternary operator.
```



### 4D 19 R3

- [Computed properties](../Concepts/classes.md#function-get-and-function-set) are available in classes.
- [Computed attributes](../ORDA/ordaClasses.md#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](../ORDA/ordaClasses.md#function-query-attributename) and [orderBy](../ORDA/ordaClasses.md#function-orderby-attributename) functions.
- New ORDA dataclass [attributes](../API/DataClassClass.md#attributename): `exposed` and `readOnly`.
- [ZIP archives](../API/ZipArchiveClass.md#zip-create-archive) now supports *LZMA* and *xz* compression algorithms.
- A [new build option](../Desktop/building.md#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](../Preferences/general.md#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](../API/IMAPTransporterClass.md#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass.md#pop3-new-transporter), and [`SMTP New transporter`](../API/SMTPTransporterClass.md#smtp-new-transporter).
- Users can now load a [log configuration file](../Debugging/debugLogFiles.md#using-a-log-configuration-file) using a button in the [server administration window](../ServerWindow/maintenance.md#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters.md#optional-parameters) is more flexible in the 4D language when accessing parameters declared but not passed. For example, the following code no longer provokes an error:

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)
ALERT($param1+" "+$param2)
  // Calling method
 $class:=cs.myClass.new()
 $class.concate("Hello";" world") // Displays "Hello world"
 $class.concate("Hello") // Displays "Hello "
 $class.concate() // Displays " "
```
For detailed information, please refer to [this blog post](https://blog.4d.com/stop-press-accessing-parameters-not-being-passed-is-possible). To benefit from this overall simplification, you need to recompile both calling and called methods; thus components must be recompiled.
- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions.md).
- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.
- 4D 19 R3 uses a stronger hashing algorithm for 4D user passwords: Bcrypt. This new algorithm is automatically used when a password is changed using the Tool Box, the `CHANGE PASSWORD` command, or the `Set user properties` command. Once a password is modified, opening the database with a version prior to 4D 19 R3 will cause an authentication denial for this account. If you use 4D passwords, it is highly recommended to backup the .4db file (binary databases) or directory.json file (projects) before upgrading to 4D 19 R3 or later.
- For accuracy, the `4D digest` constant has been renamed `4D REST digest`.

- End-of-line and BOM management for XML commands: When opened in 4D 19 R3, projects or databases created with previous releases behave differently regarding default end-of-line characters and BOM management in XML documents: line feed (LF) characters are used instead of CR (on macOS), and byte order marks (BOM) are not included. This allows a better compatibility with VCS tools. If necessary, you can restore the v19 R2 behavior using the `XML SET OPTIONS` command. In projects or databases converted from versions prior to 19 R2, these options are managed by two compatibility settings.
- Runtime Explorer shortcut removed in built projects: The **Cmd/Ctrl+Shift+F9** shortcut does no longer display the Runtime Explorer window in single-user merged project applications. This shortcut can now be a user application shortcut. You can call the Runtime Explorer window using the new `OPEN RUNTIME EXPLORER` command.
- Extended debugging capabilities with 4D Server: In interpreted mode, 4D Server can now debug all kinds of processes, including scalable web sessions. This is available when the debugger is attached to the server or to a remote client.   
*Warning: In interpreted mode, in order to make extented debugging available on the server machine, all server processes are now automatically executed in cooperative mode when the debugger is attached to the server (default setting). This can have a significant impact on the performance of your converted applications when they run with 4D Server v19 R3 and higher. To restore preemptive execution on the server in this case, all you need to do is detach the debugger from the server (and attach it to a remote client if necessary).*
- On Windows, 4D projects and databases created with 4D 19 R3 and higher use the [DirectWrite API](https://docs.microsoft.com/en-us/windows/win32/DirectWrite/direct-write-portal) in forms. This API improves text rendering, especially in high DPI configurations. DirectWrite is used for text rendering with static and input text, checkboxes, buttons, and radio buttons. Note that listboxes already use DirectWrite. A compatibility option allows you to enable DirectWrite in projects and databases created with previous 4D ersions.
- If you use components compiled with 4D 19.0 for Silicon (Apple ARM CPUs) which call the `Count parameters` command, we recommend to recompile them with 4D 19 R3 to provide compatibility with 4D 19 R3 and future releases. If a component is not compiled for Silicon, there is no need to recompile.








### 4D 19 R2

- A [default .gitignore file](../Preferences/general.md#create-gitignore-file) can be created with new projects
- New [Blob class API](../API/BlobClass.md) to handle new [`4D.Blob` objects](Concepts/dt_blob.md#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](../API/FileClass.md#settext)


## 4D 19.x LTS


See [**Release Notes for 4D 19.x LTS**](../../version-19/Notes/updates.md). 



## Library table (4D 20 LTS)



|Library|Current version|Updated in 4D|Comment|
|---|---|---|----|
|ICU|73.2|20.1|This major upgrade forces an automatic rebuild of alphanumeric, text and object indexes.|
|CEF|118|20.3|Chromium 5993 |
|Hunspell|1.7.2|20|Used for spell checking in 4D forms and 4D Write Pro|
|PDFWriter|4.3|20|FreeType dependency in 12.2.1|
|SpreadJS|16.2.6|20.2 HF1|4D View Pro engine|
||16.0.4|20||
|OpenSSL|3.1.6|**20.4 HF2**||
|libZip|1.9.2|20|Used by zip class, 4D Write Pro, svg and serverNet components|
|LZMA|5.4.1|20||
|Zlib|1.2.13|20||
|webKit|WKWebView|19||
|PHP|8.2.4|20||
|libldap|2.6.4|20||
|libsasl|2.1.28|20||
