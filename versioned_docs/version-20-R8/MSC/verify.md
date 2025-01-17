---
id: verify
title: Verify Page
sidebar_label: Verify Page
---

You use this page to verify data integrity. The verification can be carried out on records and/or indexes. 
This page only checks the data integrity. If errors are found and repairs are needed, you will be advised to use the [Repair page](repair.md).


## Actions

The page contains action buttons that provide direct access to the verification functions.

>When the database is encrypted, verification includes validation of encrypted data consistency. If no valid data key has already been provided, a dialog requesting the passphrase or the data key is displayed. 


- **Verify the records and the indexes:** Starts the total data verification procedure.
- **Verify the records only**: Starts the verification procedure for records only (indexes are not verified).
- **Verify the indexes only**: Starts the verification procedure for indexes only (records are not verified).

>Verification of records and indexes can also be carried out in detail mode, table by table (see the Details section below).


## Open log file

Regardless of the verification requested, 4D generates a log file in the `Logs` folder of the application. This file lists all the verifications carried out and indicates any errors encountered, when applicable ([OK] is displayed when the verification is correct). It is created in XML format and is named: *ApplicationName*_Verify_Log_*yyyy-mm-dd hh-mm-ss*.xml where:

- *ApplicationName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.


## Details

The **Table list** button displays a detailed page that can be used to view and select the actual records and indexes to be checked: 

![](../assets/en/MSC/MSC_Verify.png)


Specifying the items to be verified lets you save time during the verification procedure. 

The main list displays all the tables of the database. For each table, you can limit the verification to the records and/or indexes. Expand the contents of a table or the indexed fields and select/deselect the checkboxes as desired. By default, everything is selected. You can also use the **Select all**, **Deselect all**, **All records** and **All indexes** shortcut buttons. 

For each row of the table, the "Action" column indicates the operations to be carried out. When the table is expanded, the "Records" and "Indexed fields" rows indicate the number of items concerned. 

The "Status" column displays the verification status of each item using symbols:

|![](../assets/en/MSC/MSC_OK.png)|Verification carried out with no problem|  
|---|---|
|![](../assets/en/MSC/MSC_KO2.png)|Verification carried out, problems encountered
|![](../assets/en/MSC/MSC_KO3.png)|Verification partially carried out|
|![](../assets/en/MSC/MSC_KO.png)|Verification not carried out|

Click on **Verify** to begin the verification or on **Standard** to go back to the standard page. 

The **Open log file** button can be used to display the log file in the default browser of the machine (see [Open log file](#open-log-file) above).

>The standard page will not take any modifications made on the detailed page into account: when you click on a verification button on the standard page, all the items are verified. On the other hand, the settings made on the detailed page are kept from one session to another.
