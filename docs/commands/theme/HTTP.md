---
id: HTTP
title: HTTP
---
||
|---|
|[**HTTP AUTHENTICATE** ( *name* ; *password* {; *authMethod*} {; *} )](../../commands-legacy/http-authenticate)<br/>The **HTTP AUTHENTICATE** command enables HTTP requests to servers requiring authentication of the client application.|
|[**HTTP Get** ( *url* ; *response* {; *headerNames* ; *headerValues*}{; *} ) : Integer](../../commands-legacy/http-get)<br/>The **HTTP Get** command sends an HTTP GET request directly to a specific URL and processes the HTTP server response.|
|[**HTTP Get certificates folder**  : Text](../../commands-legacy/http-get-certificates-folder)<br/>The **HTTP Get certificates folder** command returns the complete pathname of the active client certificates folder.|
|[**HTTP GET OPTION** ( *option* ; *value* )](../../commands-legacy/http-get-option)<br/>The **HTTP GET OPTION** command returns the current value of the HTTP options (options used by client for next request triggered by the [HTTP Get](http-get.md) or [HTTP Request](http-request.md) commands).|
|[**HTTP Parse message** ( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object](../../commands/http-parse-message)<br/>parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Each property of the returned object corresponds to a part of the multipart data|
|[**HTTP Request** ( *httpMethod* ; *url* ; *contents* ; *response* {; *headerNames* ; *headerValues*}{; *} ) : Integer](../../commands-legacy/http-request)<br/>The **HTTP Request** command enables all types of HTTP requests to be sent to a specific URL and processes the HTTP server response.|
|[**HTTP SET CERTIFICATES FOLDER** ( *certificatesFolder* )](../../commands-legacy/http-set-certificates-folder)<br/>The **HTTP SET CERTIFICATES FOLDER** command modifies the active client certificates folder for all processes of the current session.|
|[**HTTP SET OPTION** ( *option* ; *value* )](../../commands-legacy/http-set-option)<br/>The **HTTP SET OPTION** command sets different options that are used during the next HTTP request triggered by the [HTTP Get](http-get.md) or [HTTP Request](http-request.md) commands.|
