---
id: Language
title: Language
---
||
|---|
|[**Action info** ( *action* {; *target*} ) : Object](../../commands-legacy/action-info)<br/>The **Action info** command returns several information, including availability and status, about the defined *action* in the *target*, according to the current application context.|
|[**Call chain** : Collection](../../commands-legacy/call-chain)<br/>The **Call chain** command returns a collection of objects describing each step of the method call chain within the current process.|
|[**Command name** ( *command* {; *info* {; *theme*}} ) : Text](../../commands-legacy/command-name)<br/>The **Command name** command returns the name as well as (optionally) the properties of the command whose command number you pass in *command*.|
|[**Copy parameters** {( *startFrom* )} : Collection](../../commands-legacy/copy-parameters)<br/>The Copy parameters command returns a new collection containing all parameters actually passed to a method or a function.|
|[**Count parameters**  : Integer](../../commands-legacy/count-parameters)<br/>The Count parameters command returns the number of parameters passed to a project method.|
|[**Current method name**  : Text](../../commands-legacy/current-method-name)<br/>The Current method name command returns the method name where it has been invoked.|
|[**EXECUTE METHOD** ( *methodName* {; *result* {; *param*}}{; *param2* ; ... ; *paramN*} )](../../commands-legacy/execute-method)<br/>The EXECUTE METHOD command executes the *methodName* project method while passing any parameters in *param1.|
|[**Get pointer** ( *varName* ) : Pointer](../../commands-legacy/get-pointer)<br/>The **Get pointer** command returns a pointer to the process or interprocess variable whose name you pass in *varName*.|
|[**INVOKE ACTION** ( *action* {; *target*} )](../../commands-legacy/invoke-action)<br/>The **INVOKE ACTION** command triggers the standard action defined by the *action* parameter, optionally in the *target* context.|
|[**Is a variable** ( *aPointer* ) : Boolean](../../commands-legacy/is-a-variable)<br/>The Is a variable command returns True if the pointer you pass in *aPointer* references a defined variable.|
|[**Is nil pointer** ( *aPointer* ) : Boolean](../../commands-legacy/is-nil-pointer)<br/>The **Is nil pointer** command returns True if the pointer you pass in *aPointer* is Nil (*\->\[\]*).|
|[**Null**  : Null](../../commands-legacy/null)<br/>**Null** returns the Null type value **null**.|
|[**RESOLVE POINTER** ( *aPointer* ; *varName* ; *tableNum* ; *fieldNum* )](../../commands-legacy/resolve-pointer)<br/>The RESOLVE POINTER command retrieves the information of the object referenced by the pointer expression *aPointer* and returns it into the parameters *varName*, *tableNum,* and *fieldNum*.|
|[**Self**  : Pointer](../../commands-legacy/self)<br/>This command is kept only for compatibility reasons.|
|[**Super**( ...param : any )<br/>**Super** : Object](../../commands/super)<br/>allows calls to the `superclass`, i.e. the parent class|
|[**This** : Object](../../commands/this)<br/>returns a reference to the currently processed object.|
|[**TRACE**](../../commands-legacy/trace)<br/>You use **TRACE** to trace methods during the development of a database.|
|[**Type** ( *fieldVar* ) : Integer](../../commands-legacy/type)<br/>The Type command returns a numeric value that indicates the type of field or variable you have passed in the *fieldVar* parameter.|
|[**Undefined** ( *expression* ) : Boolean](../../commands-legacy/undefined)<br/>Undefined returns True if the result of the evaluation of *expression* is not a defined value, and False otherwise.|
|[**Value type** ( *expression* ) : Integer](../../commands-legacy/value-type)<br/>The Value type command returns the type of the value resulting from the evaluation of the *expression* you passed as parameter.|
