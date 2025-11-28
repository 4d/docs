---
id: updates
title: Release Notes
---

## 4D 21 R2

Read [**What’s new in 4D 21 R2**](https://blog.4d.com/en-whats-new-in-4d-21-r2/), the blog post that lists all new features and enhancements in 4D 21 R2.

#### Highlights

- [Code Live Checker](../code-editor/write-class-method.md#warnings-and-errors) has been enhanced to provide greater precision in error detection (see [this blog post](https://blog.4d.com/better-error-handling-and-type-inference-for-4d-developers) for more information).
- [4D Write Pro standard actions](../WritePro/user-legacy/standard-actions.md) that apply [lists](../WritePro/user-legacy/using-a-4d-write-pro-area.md#lists) now automatically adjust paragraph margins to keep markers positioned inside it.
- Built-in support of `order by` in query strings for AI vector searches using [`query()`](../API/DataClassClass.md#query-by-vector-similarity) functions and the [REST API](../REST/$orderby.md).
- 4D AIKit component: new [File API](../aikit/Classes/OpenAIFilesAPI.md) class to implement **file upload** features. 
- [**Fixed bug list**](https://bugs.4d.fr/fixedbugslist?version=21_R2): list of all bugs that have been fixed in 4D 21 R2.


#### Behavior changes




## Library table



|Library|Current version|Updated in 4D|Comment|
|---|---|---|----|
|BoringSSL|fa47b1d|**21**|Used for QUIC|
|CEF|7258|**21**|Chromium 139|
|Hunspell|1.7.2|20|Used for spell checking in 4D forms and 4D Write Pro|
|ICU|77.1|**21**|This upgrade forces an automatic rebuild of alphanumeric, text and object indexes.|
|libldap|2.6.10|**21**||
|libsasl|2.1.28|20||
|Liblsquic|4.2.0|20 R10|Used for QUIC|
|Libuv |1.51.0|**21**|Used for QUIC|
|libZip|1.11.4|**21**|Used by zip class, 4D Write Pro, svg and serverNet components|
|LZMA|5.8.1|**21**||
|ngtcp2|1.16.0|**21**|Used for QUIC|
|OpenSSL|3.5.2|**21**||
|PDFWriter|4.7.0|**21**|Used for [`WP Export document`](../WritePro/commands/wp-export-document.md) and [`WP Export variable`](../WritePro/commands/wp-export-variable.md) |
|PHP|8.2.4|20||
|SpreadJS|17.1.0|20 R7|See [this blog post](https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/) for an overview of the new features|
|webKit|WKWebView|19||
|Xerces|3.3.0|**21**|Used for XML commands|
|Zlib|1.3.1|**21**||
