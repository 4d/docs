---
id: receive-record
title: RECEIVE RECORD
slug: /commands/receive-record
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE RECORD.Syntax-->**RECEIVE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.RECEIVE RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table into which to receive the record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.RECEIVE RECORD.Summary-->RECEIVE RECORD receives a record into *table* from the serial port or document opened by the [SET CHANNEL](set-channel.md) command.<!-- END REF--> The record must have been sent with [SEND RECORD](send-record.md). When you execute RECEIVE RECORD, a new record is automatically created for *table*. If the record is received correctly, you must then use [SAVE RECORD](save-record.md) to save the new record.

The complete record is received. This means that pictures and BLOBs stored in or with the record are also received.

**Important:** When records are being sent and received using [SEND RECORD](send-record.md) and RECEIVE RECORD, the source table structure and the destination table structure must be compatible. If they are not, 4D will convert values according to the table definitions when RECEIVE RECORD is executed.

**Notes:**

1. If you receive a record from a document using this command, the document must have been opened using the [SET CHANNEL](set-channel.md) command. You cannot use RECEIVE RECORD with a document opened with [Open document](open-document.md), [Create document](create-document.md) or [Append document](append-document.md).
2. During the execution of RECEIVE RECORD, the user can interrupt the reception by pressing **Ctrl-Alt-Shift** (Windows) or **Command-Option-Shift** (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using [ON ERR CALL](on-err-call.md). Usually, you only need to handle the interruption of a reception while communicating over a serial port.

#### Example 

A combined use of [SEND VARIABLE](send-variable.md), [SEND RECORD](send-record.md), [RECEIVE VARIABLE](receive-variable.md) and **RECEIVE RECORD** is ideal for archiving data or for exchanging data between identical single-user databases used in different places. You can exchange data between 4D databases using the import/export commands such as [EXPORT TEXT](export-text.md) and [IMPORT TEXT](import-text.md). However, if your data contains graphics and/or related tables, using [SEND RECORD](send-record.md) and RECEIVE RECORD is far more convenient.

For instance, consider a documentation system based on 4D and 4D Write. Since several writers in different locations wordwide work on it, we need a simple way to exchange data between the different databases. Here is a simplified view of the database structure:

![](../assets/en/commands/pict16652.en.png)

The table *\[Commands\]* contains the description of each command or topic. The tables *\[CM US Params\]* and *\[CM FR Params\]* respectivily contain the parameter list for each command in English and in French. The table *\[CM See Also\]* contains the commands listed as reference (See Also section) for each command. Exchanging documentation between databases therefore consists in sending the *\[Commands\]* records and their related records. To do so, we use [SEND RECORD](send-record.md) and RECEIVE RECORD. In addition, we use [SEND VARIABLE](send-variable.md) and [SEND RECORD](send-record.md) in order to mark the import/export document with tags.

Here is the (simplified) project method for exporting the documentation:

```4d
  // CM_EXPORT_SEL project method
  // This method works with the current selection of the [Commands] table
 
 SET CHANNEL(12;"") // Let's the user create an open a channel document
 If(OK=1)
  //  Tag the document with a variable that indicates its contents
  //  Note: the BUILD_LANG process variable indicates if US (English) or FR (French) data is sent
    $vsTag:="4DV6COMMAND"+BUILD_LANG
    SEND VARIABLE($vsTag)
  //  Send a variable indicationg how many [Commands] are sent
    $vlNbCmd:=Records in selection([Commands])
    SEND VARIABLE($vlNbCmd)
    FIRST RECORD([Commands])
  //  For each command
    For($vlCmd;1;$vlNbCmd)
  //  Send the [Commands] record
       SEND RECORD([Commands])
  //  Select all the related records
       RELATE MANY([Commands])
  //  Depending on the language, send a variable indicating
  //  the number of parameters that will follow
       Case of
          :(BUILD_LANG="US")
             $vlNbParm:=Records in selection([CM US Params])
          :(BUILD_LANG="FR")
             $vlNbParm:=Records in selection([CM FR Params])
       End case
       SEND VARIABLE($vlNbParm)
  //  Send the parameter records (if any)
       For($vlParm;1;$vlNbParm)
          Case of
             :(BUILD_LANG="US")
                SEND RECORD([CM US Params])
                NEXT RECORD([CM US Params])
             :(BUILD_LANG="FR")
                SEND RECORD([CM FR Params])
                NEXT RECORD([CM FR Params])
          End case
       End for
  //  Send a variable indicating how many “See Also” will follow
       $vlNbSee:=Records in selection([CM See Also])
       SEND VARIABLE($vlNbSee)
  //  Send the [See Also] records (if any)
       For($vlSee;1;$vlNbSee)
          SEND RECORD([CM See Also])
          NEXT RECORD([CM See Also])
       End for
  // Go to the next [Commands] record and continue the export
       NEXT RECORD([Commands])
    End for
    SET CHANNEL(11) // Close the document
 End if
```

Here is the (simplified) project method for importing the documentation:

```4d
  // CM_IMPORT_SEL project method
 
 SET CHANNEL(10;"") // Let's user open an existing document
 If(OK=1) // If a document was open
    RECEIVE VARIABLE($vsTag) // Try receiving the expected tag variable
    If($vsTag="4DV6COMMAND@") // Did we get the right tag?
       $CurLang:=Substring($vsTag;Length($vsTag)-1) // Extract language from the tag
       If(($CurLang="US")|($CurLang="FR")) // Did we get a valid language
          RECEIVE VARIABLE($vlNbCmd) // How many commands are there in this document?
          If($vlNbCmd>0) // If at least one
             For($vlCmd;1;$vlNbCmd) // For each archived [Commands] record
  // Receive the record
                RECEIVE RECORD([Commands])
  // Call a subroutine that saves the new record or copies its values
  // into an already existing record
                CM_IMP_CMD($CurLang)
  // Receive the number of parameters (if any)
                RECEIVE VARIABLE($vlNbParm)
                If($vlNbParm>=0)
  // Call a subroutine that calls RECEIVE RECORD then saves the new records
  // or copies them into already existing records
                   CM_IMP_PARM($vlNbParm;$CurLang)
                End if
  // Receive the number of “See Also” (if any)
                RECEIVE VARIABLE($vlNbSee)
                If($vlNbSee>0)
  // Call a subroutine that calls RECEIVE RECORD then saves the new records
  // or copies them into already existing records
                   CM_IMP_SEEA($vlNbSee;$CurLang)
                End if
             End for
          Else
             ALERT("The number of commands in this export document is invalid.")
          End if
       Else
          ALERT("The language of this export document is unkown.")
       End if
    Else
       ALERT("This document is NOT a Commands export document.")
    End if
    SET CHANNEL(11) // Close document
 End if
```

Note that we do not test the OK variable while receiving the data nor try to catch the errors. However, because we stored variables in the document that describes the document itself, if these variables, once received, made sense, the probability for an error is very low. If for instance a user opens a wrong document, the first test stops the operation right away.

#### System variables and sets 

The OK system variable is set to 1 if the record is received. Otherwise, the OK system variable is set to 0.

#### See also 

[RECEIVE VARIABLE](receive-variable.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  