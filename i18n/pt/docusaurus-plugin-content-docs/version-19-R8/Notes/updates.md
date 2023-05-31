---
id: updates
title: Notas de Lançamento
---

## 4D v19.5

4D v19.5 é certificado em macOS Ventura (macOS 13)


#### Destaques

- Error management methods can be installed for [global and component execution contexts](../Concepts/error-handling.md#scope-and-components).
- Listboxes with collection or entity selection datasources now support [Automatic Row Height](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height) column property.
- ORDA: Support of the *roles.json* file to define [privileges](../ORDA/privileges.md) assigned to the session with [`setPrivileges()`](../API/SessionClass.md#setprivileges).
- Support of [SDI mode in test application mode](../Menus/sdi.md#sdi-mode-availability) on Windows.
-
:::
    - support of themes in tables: new [VP SET TABLE THEME](../ViewPro/method-list#vp-set-table-theme) and [VP Get table theme](../ViewPro/method-list#vp-get-table-theme) commands, support of theme options in [VP CREATE TABLE](../ViewPro/method-list#vp-create-table)
    - new [VP Get table dirty rows](../ViewPro/method-list#vp-get-table-dirty-rows) command
- 4D Language classic: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6101683.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R8/4D/19-R8/What-s-new.901-6130471.en.html) on doc.4d.com.
- [**Lista de bugs corrigidos**](https://bugs.4d.fr/fixedbugslist?version=19.5): lista de todos os bugs que foram corrigidos em 4D v19.5.


#### Mudanças de comportamento

- Para conformidade com HTTP RFC, [`HTTPRequestClass.response.headers`](../API/HTTPRequestClass#response) propriedade devolve agora todos os nomes de cabeçalho **em minúsculas**. Se quiser que o seu código continue a funcionar como antes, utilize a nova propriedade [`HTTPRequestClass.response.rawHeaders`](../API/HTTPRequestClass#response).
- When a [bevel button with linked pop-up menu](../FormObjects/properties_TextAndPicture.md/#with-pop-up-menu) is assigned a standard action, the standard action is no longer generated if a pop-up menu option is selected.
- In Web areas using blink (CEF), dialogs displayed from external scripts are now blocking if not called from a `setTimeout()` JS function. This is due to the current CEF updates, in which dialogs displayed by functions such as `alert()` or `print()` are no longer handled by the OS but by the Web area. See [`WA Evaluate JavaScript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) and [`WA EXECUTE JAVASCRIPT`](https://doc.4d.com/4dv19/help/command/en/page1043.html).


## Lançamentos anteriores

<details><summary>Click to see the release notes for previous versions</summary>

### 4D v19 R7

Leia [**O que há de novo em 4D v19**](https://blog.4d.com/en-whats-new-in-4d-v19/), o post do blog que lista todas as novas funcionalidades e melhorias em 4D v19 LTS.


#### Destaques

- Related data and computed/alias attributes can be displayed in the [Data Explorer](../Admin/dataExplorer#basics).
- New [FileHandle](../API/FileHandleClass) class and new [`.open()`](../API/FileClass#open) function in the `File` class.
- [Entity selection Class](../API/EntitySelectionClass): [`.add()`](../API/EntitySelectionClass#add) supports an *entitySelection* parameter, [`.minus()`](../API/EntitySelectionClass#minus) supports a *keepOrder* parameter.
- 4D View Pro: new table commands [VP Find table](../ViewPro/method-list#vp-find-table), [VP Get table column attributes](../ViewPro/method-list#vp-get-table-column-attributes), [VP Get table column index](../ViewPro/method-list#vp-get-table-column-index), [VP Get tables](../ViewPro/method-list#vp-get-tables), [VP INSERT TABLE COLUMNS](../ViewPro/method-list#vp-insert-table-columns), [VP INSERT TABLE ROWS](../ViewPro/method-list#vp-insert-table-rows), [VP REMOVE TABLE COLUMNS](../ViewPro/method-list#vp-remove-table-columns), [VP REMOVE TABLE ROWS](../ViewPro/method-list#vp-remove-table-rows), [VP RESIZE TABLE](../ViewPro/method-list#vp-resize-table), [VP SET TABLE COLUMN ATTRIBUTES](../ViewPro/method-list#vp-set-table-column-attributes).
- Component namespaces are now [displayed in the Explorer](../Extensions/develop-components.md#declaring-the-component-namespace).
- Text area and Input form objects now support the [corner radius property](../FormObjects/properties_CoordinatesAndSizing.md#corner-radius).
- 4D Language classic: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-5944528.en.html) on doc.4d.com.
- 4D Write Pro: [What's new page](https://doc.4d.com/4Dv19R7/4D/19-R7/What-s-new.901-6011873.en.html) on doc.4d.com.
- A versão SpreadJS foi atualizada (14.1.6).


#### Mudanças de comportamento

- For consistency with standard interfaces (e.g. OS file explorers), list box rules for row selection/drag and drop have been modified. A continuous or discontinuous selection of rows can be dragged by simply clicking on and moving a selected row; the **Alt** key is not longer necessary (but can still be used like in previous previous). When the **Shift** or **Ctrl/Command** key is pressed, a mouse click is taken into account when the click is down. For more information on drag and drop in list boxes, you can refer to [this blog post](https:/blog.4d.com/list-boxes-say-goodbye-to-alt-key/) and download [this HDI 4D project](https://github.com/4d-depot/HDI_LB_DragAndDrop).
- The 4D internal build numbering has been modified as of 4D v19 R7:
    - releases up to 4D v19 R6 (included) are numbered 282xxx,
    - releases from 4D v19 R7 will be numbered 100xxx.  
      Note that a specific 4D version is still uniquely identified by a branch name and a build number. The build number increases chronologically.
- The ability to use Wakanda/4D Mobile REST protocol to call a project method has been removed. You can use [ORDA data model class functions](../REST/ClassFunctions.md) or [/4DACTION urls](../WebServer/httpRequests.md#4daction) instead.

### 4D v19.5 é certificado no Windows 11 22H2

- New [HTTPRequest](../API/HTTPRequestClass) class.
- Collection functions that can call code now support function objects as *formula* parameter: [`.every()`](../API/CollectionClass#every), [`.filter()`](../API/CollectionClass#filter), [`.find()`](../API/CollectionClass#find), [`.findIndex()`](../API/CollectionClass#findindex), [`.map()`](../API/CollectionClass#map), [`.orderByMethod()`](../API/CollectionClass#orderbymethod), [`.reduce()`](../API/CollectionClass#reduce), [`.some()`](../API/CollectionClass#some), [`.sort()`](../API/CollectionClass#sort)
- Listbox cells support [horizontal](FormObjects/propertiesCoordinatesAndSizing#horizontal-padding) and [vertical](FormObjects/propertiesCoordinatesAndSizing#vertical-padding) padding.
- 4D View Pro: new [VP CREATE TABLE](../ViewPro/method-list#vp-create-table) and [VP REMOVE TABLE](../ViewPro/method-list#vp-remove-table) commands to handle tables in sheets.
- Ability to see related, computed, and alias attributes in the [Web Data Explorer](../Admin/dataExplorer#basics).
- New page explaining [why and how 4D collects data](../Admin/data-collect).



### 4D v19 R5

- Built Client/Server applications:
    - The project [directory.json file](Users/editing#directoryjson-file) can now be [embedded in the server](../Desktop/building#embed-the-project-users-and-groups-in-built-server-application) at build time, allowing you to deploy a client/server application with a basic security user and group configuration.
    - You can now [deselect useless modules](../Desktop/building#deselecting-modules) in your built applications.
- [Client/Server optimization](../ORDA/datastores#clientserver-optimization): New class functions allow you to handle the ORDA cache and the contents of an optimization context. See [Preconfiguring contexts](../ORDA/datastores#preconfiguring-contexts) and [ORDA Cache](../ORDA/datastores#orda-cache) for more information. > These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.
- [DataClass class](../API/DataClassClass): The new [.getCount()](../API/DataClassClass#getcount) function returns the number of entities in a dataclass.
-
:::
    - The new [VP SET DATA CONTEXT](../ViewPro/method-list#vp-set-data-context), [VP Get data context](../ViewPro/method-list#vp-get-data-context), [VP SET BINDING PATH](../ViewPro/method-list#vp-set-binding-path), [VP Get binding path](../ViewPro/method-list#vp-get-binding-path) commands allow you to create data contexts and bind their contents to sheet cells.
    - [VP EXPORT DOCUMENT](../ViewPro/method-list#vp-get-binding-path) and [VP Export to object](../ViewPro/method-list#vp-get-binding-path) now accept the new `includeBindingSource` option that exports the contents of a data context as cell values.


### 4D v19 R4

- [Alias attributes](../ORDA/ordaClasses#alias-attributes-1) are available in ORDA classes.
- Support for [break and continue](../Concepts/looping#break-and-continue) statements in loops.
- Support for [return](../Concepts/control-flow#return-expression) statement and [return expression](../Concepts/parameters#return-expression) to return values.
- Support for [compound assignment operators](../Concepts/operators#compound-assignment-operators), [short-circuit operators](../Concepts/operators#short-circuit-operators), and [ternary operator](../Concepts/operators#ternary-operator)
- The [Code Editor](../code-editor/overview) now includes an dropdown tool and supports markers for better code navigation.
- New Preferences: [**Include tokens in project source files**](../Preferences/general#include-tokens-in-project-source-files) and [**Show clipboards**](../Preferences/methods#show-clipboards) option on the Methods page.
- New REST request to [lock/unlock](../REST/lock) entities.
- [4D View Pro](../ViewPro/getting-started) chapter added with new commands: [VP Copy to object](../ViewPro/method-list#vp-copy-to-object), [VP MOVE CELLS](../ViewPro/method-list#vp-move-cells), [VP PASTE FROM OBJECT](../ViewPro/method-list#vp-paste-from-object).
- New [SystemWorker class](../API/SystemWorkerClass).


### 4D v19 R3

- [Computed properties](../Concepts/classes#function-get-and-function-set) are available in classes.
- [Computed attributes](../ORDA/ordaClasses#computed-attributes) are available in ORDA classes. They are similar to computed properties but also support [query](../ORDA/ordaClasses#function-query-attributename) and [orderBy](../ORDA/ordaClasses#function-orderby-attributename) functions.
- New ORDA dataclass attributes: [`exposed`](../API/DataClassAttributeClass#exposed) and [`readOnly`](../API/DataClassAttributeClass#readonly).
- [ZIP archives](../API/ZipArchiveClass#zip-create-archive) now supports *LZMA* and *xz* compression algorithms.
- A [new build option](../Desktop/building#allow-connection-of-silicon-mac-clients) makes it easier to include Silicon Mac clients in Server applications on Windows.
- Extended [support of dark mode](../Preferences/general#appearance-macos-only) on macOS.
- Support of **OAuth2 token object** in [`IMAP New transporter`](../API/IMAPTransporterClass#imap-new-transporter), [`POP3 New transporter`](../API/POP3TransporterClass#pop3-new-transporter), and [`SMTP New transporter`](../API/SMTPTransporterClass#smtp-new-transporter).
- Users can now load a [log configuration file](../Debugging/debugLogFiles#using-a-log-configuration-file) using a button in the [server administration window](../ServerWindow/maintenance#load-logs-configuration-file).
- Handling [optional parameters](../Concepts/parameters#optional-parameters) is more flexible in the 4D language.
- Debugging web server sessions [is easier on 4D Server](../WebServer/sessions#preemptive-mode).
- The new [4D NetKit](https://github.com/4d/4D-NetKit) component allows you to connect to third-party APIs such as Microsoft Graph.


### 4D v19 R2

- A [default .gitignore file](../Preferences/general#create-gitignore-file) can be created with new projects
- New [Blob class API](../API/BlobClass) to handle new [`4D. Blob` objects](Concepts/dt_blob#blob-types)
- `no-bom` support and new default end-of-line characters in [`.setText()`](../API/FileClass#settext)


### 4D v19

- [IMAPTransporter Class](../API/IMAPTransporterClass): new `.createBox()`, `.deleteBox()`, `.renameBox()`, `.subscribe()`, and `.unsubscribe()` functions.
- [File Class](../API/FileClass): new `setAppInfo()` and `getAppInfo()` functions.
- New [4DEACH](../Tags/tags.md#4deach-and-4dendeach) transformation tag.

- Web Server: new [SameSite session cookie](../WebServer/webServerConfig#session-cookie-samesite) setting.
- Dark and light color scheme support for [forms](../FormEditor/propertiesForm#color-scheme) and [style sheets](../FormEditor/stylesheets#media-queries)
- New default dark and light themes in [Code Editor preferences](../Preferences/methods#theme-list).
- [Native compilation](../Project/compiler#compiler-methods-for) for Silicon processors.
- [Variable calculation](../FormObjects/propertiesObject#variable-calculation) property is now supported by entity selection list box columns.
- New, comprehensive [CLI](../Admin/cli) page.



### 18 R6

- [Entity Selection Class](../API/EntitySelectionClass): `.average()`, `.max()` and `.min()` functions now return *undefined* if the entity selection is empty.
- [IMAP Mail](../API/IMAPTransporterClass), [POP3 Mail](../API/POP3TransporterClass) and [SMTP Mail](../API/SMTPTransporterClass): `authenticationMode` property enables OAuth 2.0
- [IMAP Mail](../API/IMAPTransporterClass): new `.expunge()` and `.append()` functions
- New [WebAdmin](../Admin/webAdmin) web server component
- New [DataExplorer](../Admin/dataExplorer) interface
- New web [user sessions](../WebServer/sessions) and [their API](../API/SessionClass).


</details>


## Tabela da biblioteca

<details><summary>Click to see the table of libraries used in 4D</summary>

| Biblioteca | Versão atual | Atualizado em 4D | Comentário                                                                               |
| ---------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------- |
| SpreadJS   | 15.2.5       | 19 R8            | Motor 4D View Pro                                                                        |
| CEF        | 106.0.27     | 19 R8            | Chromium 106.0.5249.103                                                                  |
| OpenSSL    | 1.1.1s       | 18 R6            |                                                                                          |
| libzip     | 1.7.3        | 19 R2            | Used by zip class, 4D Write Pro, svg and serverNet components                            |
| webKit     | WKWebView    | 19               |                                                                                          |
| ICU        | 68.1         | 18 R6            | This major upgrade forces an automatic rebuild of alphanumeric, text and object indexes. |
| PHP        | 7.3.27       | 18 R6            |                                                                                          |
| libldap    | 2.4.48       | 18 R2            |                                                                                          |

</details>
