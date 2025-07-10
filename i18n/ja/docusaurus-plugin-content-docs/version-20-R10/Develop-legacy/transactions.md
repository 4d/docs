---
id: transactions
title: Transactions
---

## Description

Transactions are a series of related data modifications made to a database or datastore within a [process](./processes.md). A transaction is not saved to a database permanently until the transaction is validated. If a transaction is not completed, either because it is canceled or because of some outside event, the modifications are not saved.

During a transaction, all changes made to the database data within a process are stored locally in a temporary buffer. If the transaction is accepted with [`VALIDATE TRANSACTION`](../commands-legacy/validate-transaction.md) or [`validateTransaction()`](../API/DataStoreClass.md#validatetransaction), the changes are saved permanently. If the transaction is canceled with [`CANCEL TRANSACTION`](../commands-legacy/cancel-transaction.md) or [`cancelTransaction()`](../API/DataStoreClass.md#canceltransaction), the changes are not saved. In all cases, neither the current selection nor the current record are modified by the transaction management commands.

4D supports nested transactions, i.e. transactions on several hierarchical levels. The number of subtransactions allowed is unlimited. The [`Transaction level`](../commands-legacy/transaction-level.md) command can be used to find out the current transaction level where the code is executed. When you use nested transactions, the result of each subtransaction depends on the validation or cancellation of the higher-level transaction. If the higher-level transaction is validated, the results of the subtransactions are confirmed (validation or cancellation). On the other hand, if the higher-level transaction is cancelled, all the subtransactions are cancelled, regardless of their respective results.

4D includes a feature allowing you to [suspend and resume transactions](#suspending-transactions) within your 4D code. When a transaction is suspended, you can execute operations independently from the transaction itself and then resume the transaction to validate or cancel it as usual. 

### Example

In this example, the database is a simple invoicing system. The invoice lines are stored in a table called [Invoice Lines], which is related to the table [Invoices] by means of a relation between the fields [Invoices]Invoice ID and [Invoice Lines]Invoice ID. When an invoice is added, a unique ID is calculated, using the [`Sequence number`](../commands-legacy/sequence-number.md) command. The relation between [Invoices] and [Invoice Lines] is an automatic Relate Many relation. The **Auto assign related value in subform** check box is checked.

The relation between [Invoice Lines] and [Parts] is manual.

![](../assets/en/Develop/transactions-structure.png)


When a user enters an invoice, the following actions are executed:

- Add a record in the table [Invoices].
- Add several records in the table [Invoice Lines].
- Update the [Parts]In Warehouse field of each part listed in the invoice.

This example is a typical situation in which you need to use a transaction. You must be sure that you can save all these records during the operation or that you will be able to cancel the transaction if a record cannot be added or updated. In other words, you must save related data. If you do not use a transaction, you cannot guarantee the logical data integrity of your database. For example, if one record of the [Parts] records is locked, you will not be able to update the quantity stored in the field [Parts]In Warehouse. Therefore, this field will become logically incorrect. The sum of the parts sold and the parts remaining in the warehouse will not be equal to the original quantity entered in the record. You can avoid such a situation by using transactions.

There are several ways of performing data entry using transactions:

1. You can handle the transactions yourself by using the transaction commands [`START TRANSACTION`](../commands-legacy/start-transaction.md), [`VALIDATE TRANSACTION`](../commands-legacy/validate-transaction.md) and [`CANCEL TRANSACTION`](../commands-legacy/cancel-transaction.md). You can write, for example:

```4d
 READ WRITE([Invoice Lines])
 READ WRITE([Parts])
 FORM SET INPUT([Invoices];"Input")
 Repeat
    START TRANSACTION
    ADD RECORD([Invoices])
    If(OK=1)
       VALIDATE TRANSACTION
    Else
       CANCEL TRANSACTION
    End if
 Until(OK=0)
 READ ONLY(*)
```

2. To reduce record locking while performing the data entry, you can also choose to manage transactions from within the form method and access the tables in `READ WRITE` only when it becomes necessary. You perform the data entry using the input form for [Invoices], which contains the related table [Invoice Lines] in a subform. The form has two buttons: *bCancel* and *bOK*, both of which are no action buttons.

The adding loop becomes:

```4d
 READ WRITE([Invoice Lines])
 READ ONLY([Parts])
 FORM SET INPUT([Invoices];"Input")
 Repeat
    ADD RECORD([Invoices])
 Until(bOK=0)
 READ ONLY([Invoice Lines])
```

Note that the [Parts] table is now in read-only access mode during data entry. Read/write access will be available only if the data entry is validated.

The transaction is started in the [Invoices] input form method listed here:

```4d
 Case of
    :(Form event code=On Load)
       START TRANSACTION
       [Invoices]Invoice ID:=Sequence number([Invoices]Invoice ID)
    Else
       [Invoices]Total Invoice:=Sum([Invoice Lines]Total line)
 End case
```

If you click the *bCancel* button, the data entry as well as the transaction must be canceled. Here is the object method of the *bCancel* button:

```4d
 Case of
    :(Form event code=On Clicked)
       CANCEL TRANSACTION
       CANCEL
 End case
```

If you click the *bOK* button, the data entry must be accepted and the transaction must be validated. Here is the object method of the *bOK* button:

```4d
 Case of
    :(Form event code=On Clicked)
       var $NbLines:=Records in selection([Invoice Lines])
       READ WRITE([Parts]) //Switch to Read/Write access for the [Parts] table
       FIRST RECORD([Invoice Lines]) //Start at the first line
       var $ValidTrans:=True //Assume everything will be OK
       var $Line : Integer
       For($Line;1;$NbLines) //For each line
          RELATE ONE([Invoice Lines]Part No)
          OK:=1 //Assume you want to continue
          While(Locked([Parts]) & (OK=1)) //Try getting the record in Read/Write access
             CONFIRM("The Part "+[Invoice Lines]Part No+" is in use. Wait?")
             If(OK=1)
                DELAY PROCESS(Current process;60)
                LOAD RECORD([Parts])
             End if
          End while
          If(OK=1)
               //Update quantity in the warehouse
             [Parts]In Warehouse:=[Parts]In Warehouse-[Invoice Lines]Quantity
             SAVE RECORD([Parts]) //Save the record
          Else
             $Line:=$NbLines+1 //Leave the loop
             $ValidTrans:=False
          End if
          NEXT RECORD([Invoice Lines]) //Go next line
       End for
       READ ONLY([Parts]) //Set the table state to read only
       If($ValidTrans)
          SAVE RECORD([Invoices]) //Save the Invoices record
          VALIDATE TRANSACTION //Validate all database modifications
       Else
          CANCEL TRANSACTION //Cancel everything
       End if
       CANCEL //Leave the form
 End case
```

In this code, we call the `CANCEL` command regardless of the button clicked. The new record is not validated by a call to [`ACCEPT`](../commands-legacy/accept.md), but by the [`SAVE RECORD`](../commands-legacy/save-record.md) command. In addition, note that `SAVE RECORD` is called just before the [`VALIDATE TRANSACTION`](../commands-legacy/validate-transaction.md) command. Therefore, saving the [Invoices] record is actually a part of the transaction. Calling the `ACCEPT` command would also validate the record, but in this case the transaction would be validated before the [Invoices] record was saved. In other words, the record would be saved outside the transaction.

Depending on your needs, you can customize your database, as shown in these examples. In the last example, the handling of locked records in the [Parts] table could be developed further.


## Suspending transactions

### Principle

Suspending a transaction is useful when you need to perform, from within a transaction, certain operations that do not need to be executed under the control of this transaction. For example, imagine the case where a customer places an order, thus within a transaction, and also updates their address. Next the customer changes their mind and cancels the order. The transaction is cancelled, but you do not want the address change to be reverted. This is a typical example where suspending the transaction is useful. Three commands are used to suspend and resume transactions:

- [`SUSPEND TRANSACTION`](../commands-legacy/suspend-transaction.md): pauses current transaction. Any updated or added records remain locked.
- [`RESUME TRANSACTION`](../commands-legacy/resume-transaction.md): reactivates a suspended transaction.
- [`Active transaction`](../commands-legacy/active-transaction.md): returns False if the transaction is suspended or if there is no current transaction, and True if it is started or resumed.

### Example  

This example illustrates the need for a suspended transaction. In an Invoices database, we want to get a new invoice number during a transaction. This number is computed and stored in a [Settings] table. In a multi-user environment, concurrent accesses must be protected; however, because of the transaction, the [Settings] table could be locked by another user even though this data is independent from the main transaction. In this case, you can suspend the transaction when accessing the table.

```4d
  //Standard method that creates an invoice
 START TRANSACTION
 ...
 CREATE RECORD([Invoices])
 //call the method to get an available number
 [Invoices]InvoiceID:=GetInvoiceNum 
 ...
 SAVE RECORD([Invoices])
 VALIDATE TRANSACTION

 ```

The *GetInvoiceNum* method suspends the transaction before executing. Note that this code will work even when the method is called from outside of a transaction:

```4d
  //GetInvoiceNum project method
  //GetInvoiceNum -> Next available invoice number
 #DECLARE -> $freeNum : Integer
 SUSPEND TRANSACTION
 ALL RECORDS([Settings])
 If(Locked([Settings])) //multi-user access
    While(Locked([Settings]))
       MESSAGE("Waiting for locked Settings record")
       DELAY PROCESS(Current process;30)
       LOAD RECORD([Settings])
    End while
 End if
 [Settings]InvoiceNum:=[Settings]InvoiceNum+1
 $freeNum:=[Settings]InvoiceNum
 SAVE RECORD([Settings])
 UNLOAD RECORD([Settings])
 RESUME TRANSACTION

```

### Detailed operation

#### How does a suspended transaction work?  

When a transaction is suspended, the following principles are implemented:

- You can access records that were added or modified during the transaction, and you cannot see any records that were deleted during the transaction.
- You can create, save, delete, or modify records outside the transaction.
- You can start a new transaction, but within this included transaction you will not be able to see any records or record values that were added or modified during the suspended transaction. In fact, this new transaction is totally independent from the suspended one, similar to a transaction of another process, and since the suspended transaction could later be resumed or canceled, any added or modified records are automatically hidden for the new transaction. As soon as you commit or cancel the new transaction, you can see these records again.
- Any records that are modified, deleted or added within the suspended transaction remain locked for other processes. If you try to modify or delete these records outside the transaction or in a new transaction, an error is generated.

These implementations are summarized in the following graphic:

![](../assets/en/Develop/transactions-schema1.png)


*Values edited during transaction A (ID1 record gets Val11) are not available in a new transaction (B) created during the "suspended" period. Values edited during the "suspended" period (ID2 record gets Val22 and ID3 record gets Val33) are saved even after transaction A is cancelled.*

Specific features have been added to handle errors:

- The current record of each table becomes temporarily locked if it is modified during the transaction and is automatically unlocked when the transaction is resumed. This mechanism is important to prevent unwanted saves on parts of the transaction.
- If you execute an invalid sequence such as start transaction / suspend transaction / start transaction / resume transaction, an error is generated. This mechanism prevents developers from forgetting to commit or cancel any included transactions before resuming the suspended transaction.


#### Suspended transactions and process status 

The [`In transaction`](../commands-legacy/in-transaction.md) command returns True when a transaction has been started, even if it is suspended. To find out whether the current transaction is suspended, you need to use the [`Active transaction`](../commands-legacy/active-transaction.md) command, which returns False in this case. 

Both commands, however, also return False if no transaction has been started. You may then need to use the [`Transaction level`](../commands-legacy/transaction-level.md) command, which returns 0 in this context (no transaction started).

The following graphic illustrates the various transaction contexts and the corresponding values returned by the transaction commands:

![](../assets/en/Develop/transactions-schema2.png)


