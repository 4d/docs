---
id: updates
title: Release Notes
---

## 4D 21 R4

Read [**What’s new in 4D 21 R4**](https://blog.4d.com/whats-new-in-4d-21-r4/), the blog post that lists all new features and enhancements in 4D 21 R4.

#### Highlights

- AI: On macOS, end users can enhance or summarize texts thanks to the Apple Intelligence **Writing Tools**, available as a [property](../FormObjects/properties_Entry.md#writing-tools) and a [standard action](../Desktop/standard-actions) for [4D Write Pro](../FormObjects/writeProArea_overview.md) and [input](../FormObjects/input_overview.md) form objects.
- Enhanced [support of client/server disconnections](../Desktop/clientServer.md#management-of-unreachable-peer) with QUIC network layer: new [`QUIC session timeout`](../commands/set-database-parameter#quick-session-timeout-135) database parameter, new [`unreachableSince` session.info](../API/SessionClass.md#info) property. 
- Multi-level list style sheets are now [supported in 4D Write Pro Interface](../WritePro/writeprointerface#multi-level-list-style-sheets), allowing users to create and manage structured multi-level lists directly from the toolbar and sidebar.
- New [`defer`](../commands/defer) command to declare some code to be always executed at method or function exit; new [`Deferred formulas`](../commands/deferred-formulas) command to get the list of deferred formulas. 
- New session [`.quotas` property](../API/SessionClass.md#quotas) to configure REST thresholds for sessions. 
- New [`4D.QuotaManager`](../API/QuotaManagerClass.md) class to handle threshold objects for protecting the server.
- New [`$entityset/$release`](../REST/$entityset.md#entitysetrelease) REST request to delete entity sets from server cache.
- Improved session information in the 4D Server Administration window in a new [**Sessions**](../ServerWindow/sessions.md) page (formerly **Users**).

#### Behavior changes

- The **`GET /Employee/$entityset/<entitySetID>?$method=release`** REST syntax is **deprecated** and should no longer be used. To delete entity sets, you must now use [`/$entityset/$release` with a POST verb](../REST/$entityset.md).


## 4D 21 R3

Read [**What’s new in 4D 21 R3**](https://blog.4d.com/whats-new-in-4d-21-r3/), the blog post that lists all new features and enhancements in 4D 21 R3.

#### Highlights

- The [`JSON Validate`](../commands/json-validate) command now supports of JSON Schema draft 2020-12. 
- 4D Write Pro now supports [multi-level list style sheets](../WritePro/user-legacy/stylesheets.md#multi-level-list-style-sheets), enabling the creation and management of structured [multi-level lists](../WritePro/user-legacy/using-a-4d-write-pro-area.md#multi-level-lists) with automatic numbering.
- Ability to use a custom certificate from the macOS keychain instead of a local certificates folder in [`HTTPRequest`](../API/HTTPRequestClass.md#4dhttprequestnew) and [`HTTPAgent`](../API/HTTPAgentClass.md#4dhttpagentnew) classes. 
- New [`4D.Method` class](../API/MethodClass.md) to create and execute a 4D method code from text source. [`METHOD Get path`](../commands/method-get-path) and [`METHOD RESOLVE PATH`](../commands/method-resolve-path) commands support a new `path volatile method` constant (128).
- IMAP transporter now supports mailbox event notifications using the IDLE protocol through a [notifier object](../API/IMAPTransporterClass.md#notifier) of the [4D.IMAPNotifier](../API/IMAPNotifierClass.md) class, configurable via the `listener` property of [IMAP New transporter](../commands/imap-new-transporter).
- Remote [session](../API/SessionClass.md) objects are now [available client-side](../Desktop/sessions.md#availability).
- New [**AI** page in Settings](../settings/ai.md), allowing to configure [Provider model aliases](../aikit/provider-model-aliases.md) that can be called in the code using 4D AIKit component. 
- 4D AIKit component: new [Providers](../aikit/Classes/OpenAIProviders.md) class to instantiate and handle [Provider and model aliases](../aikit/provider-model-aliases.md). 
- Support of [`server` keyword](../Concepts/classes.md#server) for ORDA data model functions and shared/session singleton functions. 
- New [printing renderer](../FormEditor/forms.md#print-rendering-engine) for forms on Liquid glass and Fluent UI interfaces. New compatibility options to [enable the renderer on Classic interfaces](../FormEditor/forms.md#legacy-print-renderer). 
- Dependencies: support of [components stored on GitLab repositories](../Project/components.md#configuring-a-gitlab-repository).
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=21_R3): list of all bugs that have been fixed in 4D 21 R3.



#### Support of Liquid glass on macOS

- Automatic support of [**Liquid glass** interface](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) with 4D on macOS 26 Tahoe. See [this blog post](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications) for detailed information. 
- New values returned by the [`FORM Theme`](../commands/form-theme) command and [CSS Media queries](../FormEditor/createStylesheet.md#media-queries). 
- To help developers gradually adapt their interfaces, ability to **disable Liquid glass in 4D engine-based applications** via the "UIDesignRequiresCompatibility" key in the application's *Info.plist* file (see [Apple's documentation about this key](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility)).


#### Behavior changes

- The [`JSON Validate`](../commands/json-validate) command now takes the *$schema* key into account and generates an error if a non-supported version is declared in the schema. 
- For clarity, formula objects are now instances of a new [`4D.Formula`](../API/FormulaClass.md) class that inherits from the generic [`4D.Function`](../API/FunctionClass.md) class.
- In 4D 21 R3, new improvements to the [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) apply to language commands (see [this blog post](https://blog.4d.com/enhancement-of-command-syntax-checking-in-the-editor)). Syntax errors that were previously undetected may now be flagged in your code. 
- The "PHP" page has been removed from the [Settings dialog box](../settings/overview.md). Use the [PHP selectors with the `SET DATABASE PARAMETER`](../commands/set-database-parameter#php-interpreter-ip-address-55) command to configure a PHP interpreter. 
- The **Legacy** network layer is no longer supported. Projects and binary databases that were using the Legacy network layer are automatically set to [**ServerNet**](../settings/client-server.md#network-layer) when upgraded to 4D 21 R3 and higher. 



## 4D 21 R2

Read [**What’s new in 4D 21 R2**](https://blog.4d.com/whats-new-in-4d-21-r2/), the blog post that lists all new features and enhancements in 4D 21 R2.

#### Highlights

- The [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) has been enhanced to provide greater precision in error detection (see [this blog post](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) for more information).
- [4D Write Pro standard actions](../WritePro/user-legacy/standard-actions.md) that apply [lists](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) now automatically adjust paragraph margins to keep markers positioned inside it.
- Built-in support of `order by` in query strings for AI vector searches using [`query()`](../API/DataClassClass.md#query-by-vector-similarity) functions and the [REST API](../REST/$orderby.md).
- You can now create and open Qodly Pages from the [Explorer](../Develop/explorer.md).
- You can [customize the icons of your components](../Extensions/develop-components.md#custom-icon). 
- 4D AIKit component: new [File API](../aikit/Classes/OpenAIFilesAPI.md) class to implement **file upload** features. 
- [**Find in Design**](../Project/search-replace.md#search-in-components) and [**Replace in content**](../Project/search-replace.md#replace-in-content) features can now support editable components.  
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=21_R2): list of all bugs that have been fixed in 4D 21 R2.

#### Developer Preview

- Support of [**fluent UI** rendering](../FormEditor/forms.md#fluent-ui-rendering) on Windows: 
    - new [`FORM theme`](../commands/form-theme) command, 
    - new [`form-theme` css media query](../FormEditor/createStylesheet.md#media-queries), 
    - new [**Use Fluent UI on Windows**](../settings/interface.md#use-fluent-ui-on-windows) option in the Settings dialog box.

#### Behavior changes

- On Windows, if [**fluent UI** rendering](../FormEditor/forms.md#fluent-ui-rendering) is enabled, [`GET STYLE SHEET INFO`](../commands/get-style-sheet-info) command can return different information whether it is called from a form or not. 



## Library table



|Library|Current version|Updated in 4D|Comment|
|---|---|---|----|
|BoringSSL|664a985|**21 R4**|Used for QUIC|
|CEF|7258|21|Chromium 139|
|Hunspell|1.7.2|20|Used for spell checking in 4D forms and 4D Write Pro|
|ICU|77.1|21|This upgrade forces an automatic rebuild of alphanumeric, text and object indexes.|
|libldap|2.6.10|21||
|libsasl|2.1.28|20||
|Liblsquic|4.2.0|20 R10|Used for QUIC|
|Libuv |1.52.1|**21 R4**|Used for QUIC|
|libZip|1.11.4|21|Used by zip class, 4D Write Pro, svg and serverNet components|
|LZMA|5.8.1|21||
|ngtcp2|1.24.0|**21 R4**|Used for QUIC|
|OpenSSL|4.0|**21 R4**||
|PDFWriter|4.7.0|21|Used for [`WP Export document`](../WritePro/commands/wp-export-document.md) and [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
|SpreadJS|18.2.0|21 R2|See [this blog post](https://blog.4d.com/4d-view-pro-whats-new-in-4d-21-r2/) for an overview of the new features|
|webKit|WKWebView|19||
|Windows App SDK|2|**21 R4**|Used for [Fluent UI rendering](../FormEditor/forms.md#fluent-ui-rendering)|
|Xerces|3.3.0|21|Used for XML commands|
|Zlib|1.3.1|21||

