---
id: execute-on-server
title: Execute on server
slug: /commands/execute-on-server
displayed_sidebar: docs
---

<!--REF #_command_.Execute on server.Syntax-->**Execute on server** ( *procedure* ; *stack* {; *name* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Execute on server.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| procedure | Text | &#8594;  | Procedure to be executed within the process |
| stack | Integer | &#8594;  | Stack size in bytes |
| name | Text | &#8594;  | Name of the process created |
| param | Expression | &#8594;  | Parameter(s) to the procedure |
| * | Operator | &#8594;  | Unique process |
| Function result | Integer | &#8592; | Process number for newly created process or already executing process |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Execute on server.Summary-->The **Execute on server** command starts a new process on the Server machine (if it is called in Client/Server) or on the same machine (if it is called in single-user) and returns the process number for that process.<!-- END REF-->

You use this function to start a stored procedure. For more information about stored procedures, see the section *Stored Procedures* in the 4D Server Reference manual.

If you call **Execute on server** on a Client machine, the command returns a negative process number. If you call it on the Server machine, it returns a positive process number. Note that calling [New process](new-process.md) on the Server machine does the same thing as calling **Execute on server**.

If the process could not be created (for example, if there is not enough memory), **Execute on server** returns zero (0) and an error is generated. You can catch this error using an error-handling method installed using [ON ERR CALL](on-err-call.md).

##### Process Method 

 In *procedure*, you pass the name of the process method for the new process. After 4D has set up the context for the new process, it starts executing this method, which therefore becomes the process method.

##### Process Stack 

The *stack* parameter allows you indicate the amount of memory allocated for the stack of the process. It is the space in memory used to “pile up” method calls, local variables, parameters in subroutines, and stacked records.

* Pass 0 in *stack* to use a default stack size, suitable for most applications (recommended setting).
* In certain particular cases, you may want to set a custom value. It must be expressed in bytes. This setting should be used with precaution, it depends on the process chain call and the platform.

**Note:** The stack is NOT the total memory for the process. Processes share memory for records, interprocess variables, and so on. A process also uses extra memory for storing its process variables. The stack contains various items of 4D internal information; the amount of information kept on the stack depends on the number of nested method calls the process will employ, the number of forms that it will open before closing them and the number and size of local variables used in each nested method call.

##### Process Name 

 You pass the name of the new process in *name*. In single-user, this name will appear in the list of processes of the Runtime Explorer and will be returned by the [Process info](../commands/process-info.md) command when applied to this new process. In Client/Server, this name will appear in blue in the Stored Procedure list of the 4D Server main window.

You can omit this parameter; if you do so, the name of the process will be the empty string. 

**Warning:** Contrary to [New process](new-process.md), do not attempt to make a process local in scope by prefixing its name with the dollar sign (*$*) while using **Execute on server**. This will work in single-user, because **Execute on server** acts as [New process](new-process.md) in this environment. On the other hand, in Client/Server, this will generate an error.

##### Parameter to Process Method 

 You can pass parameters to the process method. You can pass parameters in the same way as you would pass them to a subroutine. However, there is a restriction—you cannot pass pointer expressions. Also, remember that arrays cannot be passed as parameters to a method. Upon starting execution in the context of the new process, the process method receives the parameters values in *$1*, *$2*, etc.

**Note:** If you pass parameters to the process method, you must pass the *name* parameter; it cannot be omitted in this case.

If you pass an object or a collection as *param*, a copy is sent (and not a reference) and the JSON form is used in UTF-8 for the server. If the object or collection contains pointers, their dereferenced values are sent, and not the pointers themselves.

##### Optional \* Parameter 

Specifying this last parameter tells 4D to first check whether or not a process with the name you passed in *name* is already running. If it is, 4D does not start a new process and returns the process number of the process with that name.

#### Example 1 

You want to log some information from the remote side in a text file on the server machine. 

You execute the method with local information as parameters on a remote machine:

```4d
 $process:=Execute on server("WriteLog";0;"WriteLogFile";Current user;String(Current date);String(Current time))
```

The WriteLog method will be executed on the server. It contains, for example:

```4d
 var $1;$2;$3 : Text
 TEXT TO DOCUMENT(Get 4D folder(Logs folder)+"Log"+$1+".txt";$2+" "+$3)
```

#### Example 2 

The following example shows how importing data can be dramatically accelerated in Client/Server. The Regular Import method listed below allows you to test how long it takes to import records using the [IMPORT TEXT](import-text.md) command on the Client side:

```4d
  // Regular Import Project Method
 $vhDocRef:=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    FORM SET INPUT([Table1];"Import")
    $vhStartTime:=Current time
    IMPORT TEXT([Table1];Document)
    $vhEndTime:=Current time
    ALERT("It took "+String(0+($vhEndTime-$vhStartTime))+" seconds.")
 End if
```

With the regular import data, 4D Client performs the parsing of the text file, then, for each record, create a new record, fills out the fields with the imported data and sends the record to the Server machine so it can be added to the database. There are consequently many requests going over the network. A way to optimize the operation is to use a stored procedure to do the job locally on the Server machine. The Client machine loads the document into a BLOB, start a stored procedure passing the BLOB as parameter. The stored procedure stores the BLOB into a document on the server machine disk, then imports the document locally. The import data is therefore performed locally at a single-user version-like speed because most the network requests have been eliminated. Here is the CLIENT IMPORT project method. Executed on the Client machine, it starts the SERVER IMPORT stored procedure listed just below:

```4d
  // CLIENT IMPORT Project Method
  // CLIENT IMPORT ( Pointer ; String )
  // CLIENT IMPORT ( -> [Table] ; Input form )
 
 var $1 : Pointer
 var $2 : Text
 var $vhDocRef : Time
 var $vxData : Blob
 var spErrCode : Integer
 
  // Select the document do be imported
 $vhDocRef:=Open document("")
 If(OK=1)
  // If a document was selected, do not keep it open
    CLOSE DOCUMENT($vhDocRef)
    $vhStartTime:=Current time
  // Try to load it in memory
    DOCUMENT TO BLOB(Document;$vxData)
    If(OK=1)
  // If the document could be loaded in the BLOB,
  // Start the stored procedure that will import the data on the server machine
       $spProcessID:=Execute on server("SERVER IMPORT";0;
       "Server Import Services";Table($1);$2;$vxData)
  // At this point, we no longer need the BLOB in this process
       CLEAR VARIABLE($vxData)
  // Wait for the completion of the operation performed by the stored procedure
       Repeat
          DELAY PROCESS(Current process;300)
          GET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
          If(Undefined(spErrCode))
  // Note: if the stored procedure has not initialized its own instance
  // of the variable spErrCode, we may be returned an undefined variable
             spErrCode:=1
          End if
       Until(spErrCode<=0)
  // Tell the stored procedure that we acknowledge
       spErrCode:=1
       SET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
       $vhEndTime:=Current time
       ALERT("It took "+String(0+($vhEndTime-$vhStartTime))+" seconds.")
    Else
       ALERT("There is not enough memory to load the document.")
    End if
 End if
```

Here is the SERVER IMPORT project method executed as a stored procedure:

```4d
  // SERVER IMPORT Project Method
  // SERVER IMPORT ( Long ; String ; BLOB )
  // SERVER IMPORT ( Table Number ; Input form ; Import Data )
 
 var $1 : Integer
 var $2 : Text
 var $3 : Blob
 var spErrCode : Integer
 
  // Operation is not finished yet, set spErrCode to 1
 spErrCode:=1
 $vpTable:=Table($1)
 FORM SET INPUT($vpTable->;$2)
 $vsDocName:="Import File "+String(1+Random)
 DELETE DOCUMENT($vsDocName)
 BLOB TO DOCUMENT($vsDocName;$3)
 IMPORT TEXT($vpTable->;$vsDocName)
 DELETE DOCUMENT($vsDocName)
  // Operation is finished, set spErrCode to 0
 spErrCode:=0
  // Wait until the requester Client got the result back
 Repeat
    DELAY PROCESS(Current process;1)
 Until(spErrCode>0)
```

Once these two project methods have been implemented in a database, you can perform a “Stored Procedure-based” import data by, for instance, writing:

```4d
 CLIENT IMPORT(->[Table1];"Import")
```

With some benchmarks you will discover that using this method you can import records up to 60 times faster than the regular import.

#### Example 3 

Refer to the *SP-Based Services (Example)* section in the *4D Server Reference* manual.

#### See also 

[EXECUTE ON CLIENT](execute-on-client.md)  
[New process](new-process.md)  