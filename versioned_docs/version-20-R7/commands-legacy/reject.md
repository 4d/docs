---
id: reject
title: REJECT
slug: /commands/reject
displayed_sidebar: docs
---

<!--REF #_command_.REJECT.Syntax-->**REJECT** {( *aField* )}<!-- END REF-->
<!--REF #_command_.REJECT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field to reject |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.REJECT.Summary-->**REJECT** has two forms.<!-- END REF--> The first form has no parameters. It rejects the entire data entry and forces the user to stay in the form. The second form rejects only *aField* and forces the user to stay in the field. 

**Note:** You should consider the built-in data validation tools before using this command.

The first form of **REJECT** prevents the user from accepting a record that is not complete. You can achieve the same result without using **REJECT** — you associate the Enter key with a No Action button and use the [ACCEPT](accept.md) and [CANCEL](cancel.md) commands to accept or cancel the record, after the fields have been entered correctly. It is recommended that you use this second technique and do not use the first form of **REJECT**.

If you use the first form, you execute **REJECT** to prevent the user from accepting a record, usually because the record is not complete or has inaccurate entries. If the user tries to accept the record, executing **REJECT** prevents the record from being accepted; the record remains displayed in the form. The user must continue with data entry until the record is acceptable, or cancel the record.

The best place to put this form of **REJECT** is in the object method of an Accept button associated with the Enter key. This way, validation occurs only when the record is accepted, and the user cannot bypass the validation by pressing the Enter key.

The second form of **REJECT** is executed with the *field* parameter. In this case, the cursor stays in the field area, which forces the user to enter a correct value.   
With this syntax, it is imperative that you call the **REJECT** command in the On Data Change form event.You need to put this syntax of the **REJECT** command either in the form method, or in the object method of the entry area. If you are using **REJECT** for the subform’s Detail Form for a table, put it in the form method or object method for the Detail Form. This command has no effect on fields in subform areas.

You can use [HIGHLIGHT TEXT](highlight-text.md) to select the data in the field that is being rejected.

#### Example 1 

The following example is for a bank transaction record. It shows the first form of REJECT being used in an Accept button object method. The Enter key is set as an equivalent for the button. This means that even if the user presses the Enter key to accept the record, the button’s object method will be executed. If the transaction is a check, then there must be a check number. If there is no check number, the validation is rejected: 

```4d
 Case of
    :(([Operation]Transaction="Check") & ([Operation]Check Number="")) // If it is a check with no number...
       ALERT("Please fill in the check number.") // Alert the user
       REJECT // Reject the entry
       GOTO OBJECT([Operation]Check Number) // Go to the check number field
 End case
```

#### Example 2 

The following example is part of an object method for an *\[Employees\]Salary* field. The object method tests the *Employees\]Salary* field and rejects the field if it is less than $10,000\. You could perform the same operation by specifying a minimum value for the field in the form editor:

```4d
 Case of
    :(FORM Event=On Data Change)
       If([Employees]Salary<10000)
          ALERT("Salary must be greater than $10,000")
          REJECT([Employees]Salary)
       End if
 End case
```

#### See also 

[ACCEPT](accept.md)  
[CANCEL](cancel.md)  
[GOTO OBJECT](goto-object.md)  