---
id: sequence-number
title: Sequence number
slug: /commands/sequence-number
displayed_sidebar: docs
---

<!--REF #_command_.Sequence number.Syntax-->**Sequence number** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Sequence number.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return the sequence number, or Default table, if omitted |
| Function result | Integer | &#8592; | Sequence number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Sequence number.Summary-->**Sequence number** returns the next sequence number for *aTable*.<!-- END REF--> The sequence number is unique for each table. It is a non-repeating number that is incremented(\*) for each new record created for the table.

(\*) For optimization reasons, the incrementation is started only at the first call of the **Sequence number** command or of a feature that gets access to the sequence number (see below). In addition, the numbering can be modified using the [SET DATABASE PARAMETER](set-database-parameter.md) command. Consequently, the returned value should not be considered as the count of records created in the *aTable*. 

By default, the numbering starts at 1\. You can change the numbering for a table using the [SET DATABASE PARAMETER](set-database-parameter.md) command. 

**Note:** If there is no current record and the numbering has been modified via the [SET DATABASE PARAMETER](set-database-parameter.md) command, this number is in fact reserved for the next record creation but it will only be returned by the **Sequence number** function when the [SAVE RECORD](save-record.md) command has actually been called. 

The **Sequence number** function is useful in the following cases:

* The sequence number needs an increment greater than 1
* The sequence number is part of a code, for example a part number code.

To store the sequence number by means of a method, create a long integer field in the table and assign the sequence number to the field.

The sequence number returned by this function for the *aTable* is the same number as the one generated when you check the **Autoincrement** option for a field of the table using the Structure inspector, or as the one assigned by using the *#N* symbol as the default value for a field of the *table* in a form (see the 4D Design Reference manual).

**Note:** Automatic incrementation can also be set via the SQL AUTO\_INCREMENT attribute.

If the sequence number needs to start at a number other than 1, just add the difference to **Sequence number**. For example, if the sequence number must start at 1000, you would use the following statement to assign the number:

```4d
 [Table1]Seq Field :=Sequence number([Table1])+999
```

#### Example 

The following example is part of a form method. It tests to see if this is a new record; i.e., if the invoice number is an empty string. If it is a new record, the method assigns an invoice number. The invoice number is formed from two pieces of information: the sequence number, and the operator’s ID, which was entered when the database was opened. The sequence number is formatted as a 5-character string:

```4d
  // If this is a new part number, create a new invoice number
 If([Invoices]Invoice No="")
  // The invoice number is a string that ends with the operator’s ID.
    [Invoices]Invoice No:=String(Sequence number;"00000")+[Invoices]OpID
 End if
```

#### See also 

*About Record Numbers*  
[Record number](record-number.md)  
[Selected record number](selected-record-number.md)  