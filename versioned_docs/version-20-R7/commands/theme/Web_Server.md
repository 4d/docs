---
id: Web_Server
title: Web Server
---
||
|---|
|[**WEB GET BODY PART** ( *part* ; *contents* ; *name* ; *mimeType* ; *fileName* )](../../commands-legacy/web-get-body-part)<br/>The **WEB GET BODY PART** command, when called in the context of a Web process, parses the "body" part of a multi-part request.|
|[**WEB Get body part count** : Integer](../../commands-legacy/web-get-body-part-count)<br/>The **WEB Get body part count** command returns the number of parts making up the body received.|
|[**WEB Get current session ID**  : Text](../../commands-legacy/web-get-current-session-id)<br/>The **WEB Get current session ID** command returns the ID of the session open for the Web request.|
|[**WEB GET HTTP BODY** ( *body* )](../../commands-legacy/web-get-http-body)<br/>The **WEB GET HTTP BODY** command returns the body of the HTTP request being processed.|
|[**WEB GET HTTP HEADER** ( header|fieldArray {; *valueArray*} )](../../commands-legacy/web-get-http-header)<br/>The **WEB GET HTTP HEADER** command returns either a string or two arrays, containing the HTTP header used for the currently processed request.|
|[**WEB GET OPTION** ( *selector* ; *value* )](../../commands-legacy/web-get-option)<br/>The **WEB GET OPTION** command gets the current value of an option for the 4D Web server operation.|
|[**WEB Get server info** {( *withCache* )} : Object](../../commands-legacy/web-get-server-info)<br/>The **WEB Get server info** command returns an object containing detailed runtine information on the 4D Web server current session.|
|[**WEB GET STATISTICS** ( *pages* ; *hits* ; *usage* )](../../commands-legacy/web-get-statistics)<br/>The **WEB GET STATISTICS** command lets you get information about the most consulted pages loaded in the Web server’s cache.|
|[**WEB GET VARIABLES** ( *nameArray* ; *valueArray* )](../../commands-legacy/web-get-variables)<br/>The **WEB GET VARIABLES** command fills the text arrays *nameArray* and *valueArray* with the variable names and values contained in the Web form “submitted” (i.e. sent to the Web server).|
|[**WEB Is secured connection**  : Boolean](../../commands-legacy/web-is-secured-connection)<br/>The **WEB Is secured connection** command returns a Boolean indicating if the 4D Web server connection was done in secured mode through TLS/SSL (the request starts with “https:” instead of “http:”).|
|[**WEB Is server running** : Boolean](../../commands-legacy/web-is-server-running)<br/>The new **WEB Is server running** command returns **True** if the 4D built-in Web server is running, and **False** if the Web server is off.|
|[**WEB LEGACY CLOSE SESSION** ( *sessionID* )](../../commands-legacy/web-legacy-close-session)<br/>This command can only be used with **legacy web sessions**, available in databases converted from versions prior to 4D v18 R6\.|
|[**WEB LEGACY GET SESSION EXPIRATION** ( *sessionID* ; *expDate* ; *expTime* )](../../commands-legacy/web-legacy-get-session-expiration)<br/>This command can only be used with **legacy web sessions**, available in databases converted from versions prior to 4D v18 R6\.|
|[**WEB SEND BLOB** ( *blob* ; *type* )](../../commands-legacy/web-send-blob)<br/>The **WEB SEND BLOB** command allows you to send *blob* to the browser.|
|[**WEB SEND FILE** ( *htmlFile* )](../../commands-legacy/web-send-file)<br/>The **WEB SEND FILE** command sends, to the Web browser, the HTML page or the Web file stored in the document whose pathname you pass in *htmlFile*.|
|[**WEB SEND HTTP REDIRECT** ( *url* {; *} )](../../commands-legacy/web-send-http-redirect)<br/>The **WEB SEND HTTP REDIRECT** command allows you to transform a URL into another one.|
|[**WEB SEND RAW DATA** ( *data* {; *} )](../../commands-legacy/web-send-raw-data)<br/>The **WEB SEND RAW DATA** command lets the 4D Web server send “raw” HTTP data, which can be chunked.|
|[**WEB SEND TEXT** ( *htmlText* {; *type*} )](../../commands-legacy/web-send-text)<br/>The **WEB SEND TEXT** command directly sends HTML formatted text data.|
|[**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer](../../commands/web-server)<br/>returns the default Web server object, or the Web server object defined through the *option* parameter|
|[**WEB Server list** : Collection](../../commands/web-server-list)<br/>returns a collection of all Web server objects available in the 4D application|
|[**WEB SET HOME PAGE** ( *homePage* )](../../commands-legacy/web-set-home-page)<br/>The **WEB SET HOME PAGE** command allows you to modify the custom home page for the current Web process.|
|[**WEB SET HTTP HEADER** ( header|fieldArray {; *valueArray*} )](../../commands-legacy/web-set-http-header)<br/>The **WEB SET HTTP HEADER** command allows you to set the fields in the HTTP header of the reply sent to the Web browser by 4D.|
|[**WEB SET OPTION** ( *selector* ; *value* )](../../commands-legacy/web-set-option)<br/>The **WEB SET OPTION** command modifies the current value of various options concerning the functioning of the 4D Web server.|
|[**WEB SET ROOT FOLDER** ( *rootFolder* )](../../commands-legacy/web-set-root-folder)<br/>The **WEB SET ROOT FOLDER** command is used to modify the default root folder where 4D looks for the HTML files requested of the Web server.|
|[**WEB START SERVER**](../../commands-legacy/web-start-server)<br/>The **WEB START SERVER** command starts the Web server of the 4D application on which it has been executed (4D or 4D Server).|
|[**WEB STOP SERVER**](../../commands-legacy/web-stop-server)<br/>The **WEB STOP SERVER** command stops the Web server of the 4D application on which it has been executed (4D ou 4D Server).|
|[**WEB Validate digest** ( *userName* ; *password* ) : Boolean](../../commands-legacy/web-validate-digest)<br/>The **WEB Validate digest** command checks the validity of the identifying information (name and password) provided by a user connecting to the Web server.|
