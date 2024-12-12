---
id: semaphore
title: Semaphore
slug: /commands/semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Semaphore.Syntax-->**Semaphore** ( *semaphore* {; *tickCount*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Semaphore.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| semaphore | Text | &#8594;  | Semaphore to test and set |
| tickCount | Integer | &#8594;  | Maximum waiting time |
| Function result | Boolean | &#8592; | Semaphore has been successfully set (FALSE) or Semaphore was already set (TRUE) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Semaphore.Summary-->A semaphore is a flag shared among workstations or among processes on the same workstation.<!-- END REF--> A semaphore simply exists or does not exist. The methods that each user is running can test for the existence of a semaphore. A semaphore can only be removed by the client workstation or process that created it. By creating and testing semaphores, methods can communicate between workstations. You do not use semaphores to protect record access. This is automatically done by 4D and 4D Server. Use semaphores to prevent several users from performing the same operation at the same time.

The **Semaphore** function returns TRUE and does nothing if *semaphore* already exists. If *semaphore* does not exist, **Semaphore** creates it and returns FALSE. Only one user at a time can create a semaphore. If **Semaphore** returns FALSE, it means that the semaphore did not exist, but it also means that the semaphore has been set for the process in which the call has been made.

**Semaphore** returns FALSE if the semaphore was not set. It also returns FALSE if the semaphore is already set by the same process in which the call has been made. 

A semaphore is limited to 255 characters, including prefix ($). If you pass a longer string, the semaphore will be tested with the truncated string. Keep in mind that semaphore names are case-sensitive in 4D (for example, the program considers that "MySemaphore" is different from "mysemaphore").

The optional parameter *tickCount* allows you to specify a waiting time (in ticks) if *semaphore* is already set. In this case, the function will wait either for the semaphore to be freed or the waiting time to expire before returning **True**.

There are two types of semaphores in 4D: local semaphores and global semaphores.

* A local semaphore is accessible by all processes on the same workstation and only on the workstation. A local semaphore can be created by prefixing the name of the semaphore with a dollar sign ($). You use local semaphores to monitor operations among processes executing on the same workstation. For example, a local semaphore can be used to monitor access to an interprocess array shared by all the processes in your single-user database or on the workstation.
* A global semaphore is accessible to all users and all their processes. You use global semaphores to monitor operations among users of a multi-user database.

Global and local semaphores are identical in their logic. The difference resides in their scope.

In client-server mode, global semaphores are shared among all the processes running on all clients and servers. A local semaphore is only shared among the processes running on the machine where it has been created.

In 4D, global or local semaphores have the same scope because you are the only user. However, if your database is being used in both setups, make sure to use global or local semaphores depending on what you want to do.

**Note:** We recommend using local semaphores when you need a semaphore to manage a local aspect for a client of the application, such as the interface or an array of interprocess variables. If you use a global semaphores in this case, it would not only cause unnecessary network exchanges but could also affect other client machines unnecessarily. Using a local semaphore would avoid these undesirable side effects.

#### Example 1 

Here is typical code for using a semaphore:

```4d
 While(Semaphore("MySemaphore";300))
    IDLE
 End while
  // place code protected by semaphore here
 CLEAR SEMAPHORE("MySemaphore")
```

#### Example 2 

In this example, you want to prevent two users from doing a global update of the prices in a Products table. The following method uses semaphores to manage this:

```4d
 If(Semaphore("UpdatePrices")) // Try to create the semaphore
    ALERT("Another user is already updating prices. Retry later.")
 Else
    DoUpdatePrices // Update all the prices
    CLEAR SEMAPHORE("UpdatePrices")) // Clear the semaphore
 End if
```

#### Example 3 

The following example uses a local semaphore. In a database with several processes, you want to maintain a To Do list. You want to maintain the list in an interprocess array and not in a table. You use a semaphore to prevent simultaneous access. In this situation, you only need to use a local semaphore, because your To Do list is only for your use.

The interprocess array is initialized in the Startup method:

```4d
 ARRAY TEXT(◊ToDoList;0) // The To Do list is initially empty
```

Here is the method used for adding items to the To Do list:

```4d
  // ADD TO DO LIST project method
  // ADD TO DO LIST ( Text )
  // ADD TO DO LIST ( To do list item )
 var $1 : Text
 If(Not(Semaphore("$AccessToDoList";300)))
  // Wait 5 seconds if the semaphore already exists
    $vlElem:=Size of array(◊ToDoList)+1
    INSERT IN ARAY(◊ToDoList;$vlElem)
    ◊ToDoList{$vlElem}:=$1
    CLEAR SEMAPHORE("$AccessToDoList") // Clear the semaphore
 End if
```

You can call the above method from any process.

#### Example 4 

This method allows you to not execute a method when a semaphore is present; the method alerts the calling method with an error code and plain text.

Syntax:   

```4d
 $L_Error:=Semaphore_proof(->$T_Text_error)
```

```4d
  // Protective structure using semaphores
 var $0 : Integer
 var $1 : Pointer // error message
 
  // Start of method
 var $L_MyError : Integer
 $L_MyError:=1
 
 var $T_Sema_local : Text
 $T_Sema_local:="$tictac"
 
 If(Semaphore($T_Sema_local;300))
  // We expected 300 ticks but the semaphore
  // was not released by the one that placed it:
  // we end up here
    $L_MyError:=-1
 
 Else
 
  // This method is only run by one process at a time
 
  // We placed the semaphore as we entered
  // so we're the only ones that can remove it
 
  // Do something
    ...
  // Then finish by removing the semaphore
    CLEAR SEMAPHORE($T_Sema_local)
 End if
 
 var $T_Message : Text
 If($L_MyError=-1)
    $T_Message:="The semaphore "+$T_Sema_local+" has blocked access to the rest of the code"
 Else
    $T_Message:="OK"
 End if
 
 $0:=$L_MyError
 $1->:=$T_Message  // The calling method receives an error code and an explanation in plain text
```

#### See also 

[CLEAR SEMAPHORE](clear-semaphore.md)  
*Semaphores and signals*  
[Test semaphore](test-semaphore.md)  