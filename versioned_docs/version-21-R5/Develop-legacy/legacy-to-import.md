---
id: legacy-to-import
title: develop-legacy
draft: true
---



<!-- REF develop-semaphores.Desc -->
## Semaphores  

Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. Only the process that sets the semaphore can remove it.

:::info

[Signals](../API/SignalClass.md) can also be used to manage interactions. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.

:::

### What is a semaphore?  

In a computer program, a semaphore is a tool used to protect actions that need to be performed by only one process or user at a time.

In 4D, the conventional need for using semaphores is for modifying an interprocess array: if one process is modifying the values of the array, another process must not be able to do the same thing at the same time. The developer uses a semaphore to indicate to a process that it can only perform its sequence of operations if no other process is already performing the same tasks. When a process encounters a semaphore, there are three possibilities:

- It immediately gets the right to pass
- It waits for its turn until it gets the right to pass
- It continues on its way, abandoning the idea of performing the tasks.

The semaphore therefore protects parts of the code. It allows only one process through at a time and blocks access until the process currently holding the right of use relinquishes this right by releasing the semaphore.

### Commands for working with semaphores  

In 4D, you set a semaphore by calling the [`Semaphore`](../commands/sempahore) command. To release a semaphore, you call the [`CLEAR SEMAPHORE`](../commands/clear-sempahore) command.

The [`Semaphore`](../commands/sempahore) command has a very special behavior since it potentially performs two actions simultaneously:

- If the semaphore is already assigned, the function returns **True**
- If the semaphore is not assigned, the function assigns it to the process and returns **False** at the same time.

This double action performed by the same command ensures that no external operation can be inserted between the semaphore test and its assignment.

You can use the [`Test semaphore`](../commands/test-semaphore) command to find out whether a semaphore is already assigned or not. This command is mainly used as part of long operations, such as the annual closing of accounts, where [`Test semaphore`](../commands/test-semaphore) lets you control the interface to prevent access to certain operations such as the addition of accounting data.

### How to use semaphores  

Semaphores should be used according to the following principles:

- A semaphore must be set and released in the same method,
- The execution of code protected by the semaphore must be as short as possible,
- The code must be timed by means of the tickCount parameter of the [`Semaphore`](../commands/sempahore) command to wait for the release of the semaphore.

Here is typical code for using a semaphore:

```4d
 While(Semaphore("MySemaphore";300))
    IDLE
 End while
  // place code protected by semaphore here
 CLEAR SEMAPHORE("MySemaphore")
```

A semaphore that is not released can block part of the database. Setting and releasing semaphores in the same method helps to eliminate this risk.

Minimizing the code protected by the semaphore increases the fluidity of the application and avoids the semaphore acting as a bottleneck. 

Finally, using the optional *tickCount* parameter of the [`Semaphore`](../commands/sempahore) command is essential for optimizing the wait for the semaphore to be released. Using this parameter, the commands works as follows:

- The process waits a maximum of the specified number of ticks (300 in the example) for the semaphore to be available, without the code execution moving on to the next line,
- If the semaphore is released before the end of this limit, it is immediately assigned to the process (Semaphore returns False) and code execution resumes,
- If the semaphore is not released before the end of this limit, then code execution resumes.

The command also prioritizes requests by establishing a queue. This way, the first process requesting a semaphore will be the first to get one. Note that the wait time is set depending on the specifics of the application.

### Local or global semaphores 

There are two types of semaphores in 4D: local semaphores and global semaphores.

- A local semaphore is accessible by all processes on the same workstation and only on the workstation. A local semaphore can be created by prefixing the name of the semaphore with a dollar sign ($). You use local semaphores to monitor operations among processes executing on the same workstation. For example, a local semaphore can be used to monitor access to an interprocess array shared by all the processes in your single-user database or on the workstation.
- A global semaphore is accessible to all users and all their processes. You use global semaphores to monitor operations among users of a multi-user database.

Global and local semaphores are identical in their logic. The difference resides in their scope.

In client/server, global semaphores are shared among all the processes running on all clients and servers. A local semaphore is only shared among the processes running on the machine where it has been created.

In single-user 4D applications, global or local semaphores have the same scope because you are the only user. However, if your database is being used in both setups, make sure to use global or local semaphores depending on what you want to do.

**Note:** We recommend using local semaphores when you need a semaphore to manage a local aspect for a client of the application, such as the interface or an array of interprocess variables. If you use a global semaphores in this case, it would not only cause unnecessary network exchanges but could also affect other client machines unnecessarily. Using a local semaphore would avoid these undesirable side effects.


<!-- END REF -->