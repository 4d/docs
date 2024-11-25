"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71172"],{264327:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"commands-legacy/php-execute","title":"PHP Execute","description":"PHP Execute ( scriptPath {; functionName {; phpResult {; param} {; param2 ; ... ; paramN}}} ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/php-execute.md","sourceDirName":"commands-legacy","slug":"/commands/php-execute","permalink":"/docs/commands/php-execute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-execute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"php-execute","title":"PHP Execute","slug":"/commands/php-execute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP","permalink":"/docs/category/php"},"next":{"title":"PHP GET FULL RESPONSE","permalink":"/docs/commands/php-get-full-response"}}'),s=t("785893"),i=t("250065");let a={id:"php-execute",title:"PHP Execute",slug:"/commands/php-execute",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Conversion of data returned",id:"conversion-of-data-returned",level:5},{value:"Using environment variables",id:"using-environment-variables",level:5},{value:"Special functions",id:"special-functions",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"Example 7",id:"example-7",level:4},{value:"Example 8",id:"example-8",level:4},{value:"Example 9",id:"example-9",level:4},{value:"Example 10",id:"example-10",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PHP Execute"})," ( ",(0,s.jsx)(n.em,{children:"scriptPath"})," {; ",(0,s.jsx)(n.em,{children:"functionName"})," {; ",(0,s.jsx)(n.em,{children:"phpResult"})," {; ",(0,s.jsx)(n.em,{children:"param"}),"} {; ",(0,s.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"paramN"}),"}}} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scriptPath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Pathname to PHP script or",(0,s.jsx)(n.br,{}),'"" to execute a PHP function']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"functionName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"PHP function to be executed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"phpResult"}),(0,s.jsx)(n.td,{children:"*, Variable, Field"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Result of PHP function execution or * to not receive any result"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param"}),(0,s.jsx)(n.td,{children:"Text, Boolean, Real, Integer, Date, Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Parameter(s) of PHP function"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsxs)(n.td,{children:["True = execution correct",(0,s.jsx)(n.br,{}),"False = execution error"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.admonition,{title:"Compatibility",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PHP is deprecated in 4D"}),". It is now recommended to use the ",(0,s.jsx)(n.a,{href:"/docs/API/SystemWorkerClass",children:(0,s.jsx)(n.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"PHP Execute"})," command can be used to execute a PHP script or function."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the pathname of the PHP script to be executed in the ",(0,s.jsx)(n.em,{children:"scriptPath"})," parameter. This can be a relative pathname if the file is located next to the database structure or an absolute path. The pathname can be expressed in either the system syntax or POSIX syntax.",(0,s.jsx)(n.br,{}),'\nIf you want to execute a standard PHP function directly, pass an empty string ("") in ',(0,s.jsx)(n.em,{children:"scriptPath"}),". The function name must be passed in the second parameter"]}),"\n",(0,s.jsxs)(n.p,{children:["Pass a PHP function name in the ",(0,s.jsx)(n.em,{children:"functionName"})," parameter if you want to execute a specific function in the ",(0,s.jsx)(n.em,{children:"scriptPath"})," script. If you pass an empty string or omit the ",(0,s.jsx)(n.em,{children:"functionName"})," parameter, the script is entirely executed."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," PHP is case sensitive for function names. Do not use parentheses, just enter the function name only."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"phpResult"})," parameter receives the result of the execution of the PHP function. You can pass either:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a variable, an array or a field in order to receive the result,"}),"\n",(0,s.jsx)(n.li,{children:"the * character if the function does not return any result or if you do not want to retrieve it."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"phpResult"})," parameter can be of the Text, Longint, Real, Boolean, or Date type as well as (except for arrays) a field of the BLOB or Time type. 4D will carry out the conversion of the data and any adjustments needed according to the principles described in the ",(0,s.jsx)(n.em,{children:"Conversion of data returned"})," section below."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you passed a function name in the ",(0,s.jsx)(n.em,{children:"functionName"})," parameter, ",(0,s.jsx)(n.em,{children:"phpResult"})," will receive what the PHP developer returned with the ",(0,s.jsx)(n.strong,{children:"return"})," command from the body of the function."]}),"\n",(0,s.jsxs)(n.li,{children:["If you use the command without passing a function name in the ",(0,s.jsx)(n.em,{children:"functionName"})," parameter, ",(0,s.jsx)(n.em,{children:"phpResult"})," will receive what the PHP developer returned with the ",(0,s.jsx)(n.strong,{children:"echo"})," command (or a similar command)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you call a PHP function that expects arguments, use the ",(0,s.jsx)(n.em,{children:"param1...N"})," parameters to pass one or more values. The values must be separated by semi-colons. You can pass values of the Alpha, Text, Boolean, Real, Integer, Longint, Date or Time type. Pictures, BLOBs and Objects are not accepted. You can send an array; in this case, you must pass a pointer to the array to the ",(0,s.jsx)(n.a,{href:"/docs/commands/php-execute",children:"PHP Execute"})," command, otherwise the current index of the array will be sent as an integer (see the example). The command accepts all types of arrays except for pointer, picture and 2D arrays.",(0,s.jsx)(n.br,{}),"\nThe ",(0,s.jsx)(n.em,{children:"param1...N"})," parameters are sent in PHP in the JSON format in UTF-8. They are automatically decoded with the PHP ",(0,s.jsx)(n.strong,{children:"json_decode"})," command before being sent to the PHP ",(0,s.jsx)(n.em,{children:"functionName"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," For technical reasons, the size of parameters passed via the FastCGI protocol must not exceed 64 KB. You need to take this limitation into account if you use parameters of the Text type."]}),"\n",(0,s.jsxs)(n.p,{children:["The command returns True if the execution has been carried out correctly on the 4D side, in other words, if the launching of the execution environment, the opening of the script and the establishing of the communication with the PHP interpreter were successful. Otherwise, an error is generated, which you can intercept with the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command and analyze with ",(0,s.jsx)(n.a,{href:"/docs/commands/last-errors",children:"Last errors"})," .",(0,s.jsx)(n.br,{}),"\nIn addition, the script itself may generate PHP errors. In this case, you must use the ",(0,s.jsx)(n.a,{href:"/docs/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"})," command in order to analyze the source of the error (see example 4)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," PHP can be used to configure error management. For more information, please refer, for example, to the following page: ",(0,s.jsx)(n.a,{href:"http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting",children:"http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"conversion-of-data-returned",children:"Conversion of data returned"}),"\n",(0,s.jsxs)(n.p,{children:["The following table specifies how 4D interprets and converts data that is returned according to the type of the ",(0,s.jsx)(n.em,{children:"phpResult"})," parameter."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsxs)(n.strong,{children:["Type of ",(0,s.jsx)(n.em,{children:"phpResult parameter"})]})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Processing by 4D"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Example"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BLOB"}),(0,s.jsx)(n.td,{children:"4D recovers the data received without any modifications(*)."}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["4D expects data encoded in UTF-8 (*). The PHP developer may need to use the PHP ",(0,s.jsx)(n.strong,{children:"utf8_encode"})," command."]}),(0,s.jsx)(n.td,{children:"Example of PHP script: echo utf8_encode(myText)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:'4D expects a date sent as a string in the RFC 3339 format (sometimes called DATE_ATOM in PHP). This format is of the type "YYYY-MM-DDTHH:MM:SS", for example: 2005-08-15T15:52:01+00:00. 4D ignores the time part and returns the date in UTC.'}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"4D expects a time sent as a string in the RFC 3339 format (see the Date type). 4D ignores the date part and returns the number of seconds elapsed since midnight while considering the date in the local time zone."}),(0,s.jsx)(n.td,{children:"Example of PHP script for sending 2h30'45\": echo date( DATE_ATOM, mktime( 2,30,45))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Integer or Real"}),(0,s.jsx)(n.td,{children:"4D interprets the numerical value expressed with numbers, the + or - sign and/or the exponent prefixed by 'e'. Any '.' or ',' character is interpreted as a decimal separator."}),(0,s.jsx)(n.td,{children:"Example of PHP script: echo -1.4e-16;"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'4D returns True if it receives the string "true" from PHP or if the numerical evaluation gives a value that is not Null.'}),(0,s.jsx)(n.td,{children:"Example of PHP script: echo (a==b);"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"4D considers that the PHP array was returned in the JSON format."}),(0,s.jsx)(n.td,{children:'Example of PHP script for returning an array of two texts: echo json_encode( array( "hello", "world"));'})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(*) By default, HTTP headers are not returned:",(0,s.jsx)(n.br,{}),"\n- If you use ",(0,s.jsx)(n.a,{href:"/docs/commands/php-execute",children:"PHP Execute"})," by passing a function in the ",(0,s.jsx)(n.em,{children:"functionName"})," parameter, HTTP headers are never returned in ",(0,s.jsx)(n.em,{children:"phpResult"}),". They are only available through the ",(0,s.jsx)(n.a,{href:"/docs/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"})," command.",(0,s.jsx)(n.br,{}),"\n- If you use ",(0,s.jsx)(n.a,{href:"/docs/commands/php-execute",children:"PHP Execute"})," without a function name (the ",(0,s.jsx)(n.em,{children:"functionName"})," parameter is omitted or contains an empty string), you can return HTTP headers by setting the PHP raw result option to True using the ",(0,s.jsx)(n.a,{href:"/docs/commands/php-set-option",children:"PHP SET OPTION"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If you need to recover large volumes of data using PHP, it is usually more efficient to pass by the ",(0,s.jsx)(n.em,{children:"stdOut"})," buffer (",(0,s.jsx)(n.strong,{children:"echo"})," command or similar) rather than by the function return. For more information, refer to the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"})," command."]}),"\n",(0,s.jsx)(n.h5,{id:"using-environment-variables",children:"Using environment variables"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-environment-variable",children:"SET ENVIRONMENT VARIABLE"})," command to specify the environment variables used by the script. Warning: after calling ",(0,s.jsx)(n.a,{href:"/docs/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," or ",(0,s.jsx)(n.strong,{children:"PHP Execute"}),", the set of environment variables is erased."]}),"\n",(0,s.jsx)(n.h5,{id:"special-functions",children:"Special functions"}),"\n",(0,s.jsx)(n.p,{children:"4D provides the following special functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"quit_4d_php"}),": used to quit the PHP interpreter and all its child processes. If at least one child process is executing a script, the interpreter does not quit and the PHP Execute command returns False."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"relaunch_4d_php"}),": used to relaunch the PHP interpreter."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note that the interpreter is relaunched automatically when the first request is sent by PHP Execute."}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:'Calling the "myPhpFile.php" script without any function. Here are the contents of the script:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(n.p,{children:"The following 4D code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $result : Text\n\xa0var $isOK : Boolean\n\xa0$isOK:=PHP Execute("C:\\\\php\\\\myPhpFile.php";"";$result)\n\xa0ALERT($Result)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... will display the current PHP version."}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["Calling the ",(0,s.jsx)(n.em,{children:"myPhpFunction"}),' function in the "myNewScript.php" script with parameters. Here are the contents of the script:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(n.p,{children:"Calling with function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $result : Text\n\xa0var $param1 : Text\n\xa0var $param2 : Text\n\xa0var $isOk : Boolean\n\xa0$param1 :="Hello"\n\xa0$param2 :="4D world!"\n\xa0$isOk:=PHP Execute("C:\\\\MyFolder\\\\myNewScript.php";"myPhpFunction";$result;$param1;$param2)\n\xa0ALERT($result)\xa0// Displays "Hello 4D world!"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"Quitting the PHP interpreter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$ifOk:=PHP Execute("";"quit_4d_php")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"Error management:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Installation of the error-management method\n\xa0phpCommError:=""\xa0// Modified by PHPErrorHandler\n\xa0$T_saveErrorHandler :=Method called on error\n\xa0ON ERR CALL("PHPErrorHandler")\n\n\xa0// Execution of script\n\xa0var $T_result : Text\n\xa0If(PHP Execute("C:\\\\MyScripts\\\\MiscInfos.php";"";$T_result))\n\xa0\xa0// No error, $T_Result contains the result\n\xa0Else\n\xa0\xa0// An error is detected, managed by PHPErrorHandler\n\xa0\xa0\xa0\xa0If(phpCommError="")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0// PHP error, use PHP GET FULL RESPONSE\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(phpCommError)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\xa0// Uninstalling method\n\xa0ON ERR CALL($T_saveErrorHandler)\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"The PHP_errHandler method is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0phpCommError:=""\n\xa0GET LAST ERROR STACK(arrCodes;arrComps;arrLabels)\n\xa0For($i;1;Size of array(arrCodes))\n\xa0\xa0\xa0\xa0phpCommError:=phpCommError+String(arrCodes{$i})+" "+arrComps{$i}+" "+\n\xa0\xa0\xa0\xa0arrLabels{$i}+Char(Carriage return)\n\xa0End for\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"Dynamic creation by 4D of a script before its execution:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOCUMENT TO BLOB("C:\\\\Scripts\\\\MyScript.php";$blobDoc)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$strDoc:=BLOB to text($blobDoc;UTF8 text without length)\n\xa0\n\xa0\xa0\xa0\xa0$strPosition:=Position("function2Rename";$strDoc)\n\xa0\n\xa0\xa0\xa0\xa0$strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)\n\xa0\n\xa0\xa0\xa0\xa0TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("C:\\\\Scripts\\\\MyScript.php";$blobDoc)\n\xa0\xa0\xa0\xa0If(OK#1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Error on script creation")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"The script is then executed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$err:=PHP Execute("C:\\\\Scripts\\\\MyScript.php";"function2Rename_v2";*)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,s.jsx)(n.p,{children:"Direct retrieval of a Date and Time type value. Here are the contents of the script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(n.p,{children:"Receiving the date on the 4D side:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $phpResult_date : Date\n\xa0$result :=PHP Execute("C:\\php_scripts\\ReturnDate.php";"";$phpResult_date)\n\xa0\xa0//$phpResult_date is !05/04/2009 !\n\xa0\n\xa0var $phpResult_time : Time\n\xa0$result :=PHP Execute("C:\\php_scripts\\ReturnDate.php";"";$phpResult_time)\n\xa0\xa0//$phpResult_time is ?01 :02 :03 ?\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-7",children:"Example 7"}),"\n",(0,s.jsx)(n.p,{children:"Distribution of data in arrays:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arText ;0)\n\xa0ARRAY LONGINT($arLong ;0)\n\xa0$p1 :=","\n\xa0$p2 :="11,22,33,44,55"\n\xa0$phpok :=PHP Execute("";"explode";$arText;$p1;$p2)\n\xa0$phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)\n\xa0\n\xa0\xa0// $arText contains the Alpha values "11", "22", "33", etc.\n\xa0\xa0// $arLong contains the numbers, 11, 22, 33, etc.\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-8",children:"Example 8"}),"\n",(0,s.jsx)(n.p,{children:"Initialization of an array:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arText ;0)\n\xa0$phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"undefined")\n\xa0\xa0// Execute in PHP: $arrTest = array_pad($arrTest, 50, \u2019undefined\u2019);\n\xa0\xa0// Fills the $arText array with 50 "undefined" elements\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-9",children:"Example 9"}),"\n",(0,s.jsx)(n.p,{children:"Passing of parameters via an array:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY INTEGER($arInt;0)\n\xa0$phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")\n\xa0\xa0// Execute in PHP: $arInt = json_decode(\u2019[13,51,69,42,7]\u2019);\n\xa0\xa0// Fills the array with the initial values\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-10",children:"Example 10"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of the basic use of the trim function, to remove extra spaces and/or invisible characters from the beginning and end of a string:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $T_String : Text\n\xa0$T_String:="\xa0\xa0 Hello\xa0 "\n\xa0var $B : Boolean\n\xa0$B:=PHP Execute("";"trim";$T_String;$T_String)\n'})}),"\n",(0,s.jsx)(n.p,{children:"For more information concerning the trim function, please refer to the PHP documentation."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Executing PHP scripts in 4D"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/php-set-option",children:"PHP SET OPTION"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);