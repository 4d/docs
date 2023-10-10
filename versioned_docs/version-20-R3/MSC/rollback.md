---
id: rollback
title: Rollback Page
sidebar_label: Rollback Page
---

You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database. 

This function is only available when the application functions with a data log file.

![](../assets/en/MSC/MSC_rollback1.png)

> If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the **Values** column and a dialog requesting the passphrase or the data key is displayed if you click the **Rollback** button. 

The contents and functioning of the list of operations are the same as for the [Activity analysis](analysis.md) window. 

To perform a rollback among the operations, select the row after which all operations must be cancelled. The operation of the selected row will be the last kept. If, for example, you wish to cancel a deletion, select the operation located just before it. The deletion operation, as well as all subsequent operations, will be cancelled. 

![](../assets/en/MSC/MSC_rollback2.png)

Next click on the **Rollback** button. 4D asks you to confirm the operation. If you click **OK**, the data is then restored to the exact state it was in at the moment of the selected action. 

You use the menu found at the bottom of the window to select a data log file to be used when you apply the rollback function to a database restored from an archive file. In this case, you must specify the data log file corresponding to the archive.

Here is how the rollback function works: when the user clicks the **Rollback** button, 4D shuts the current database and restores the last backup of the database data. The restored database is then opened and 4D integrates the operations of the data log file up through to the selected operation. If the database has not yet been saved, 4D starts with a blank data file.