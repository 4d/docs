---
id: Transactions
title: Transactions
---
||
|---|
|[**Active transaction** : Boolean](../../commands-legacy/active-transaction)<br/>The **Active transaction** command returns **True** if the current process is in transaction, and this transaction is not suspended.|
|[**CANCEL TRANSACTION**](../../commands-legacy/cancel-transaction)<br/>**CANCEL TRANSACTION** cancels the transaction that was started with [START TRANSACTION](start-transaction.md) of the corresponding level in the current process.|
|[**In transaction**  : Boolean](../../commands-legacy/in-transaction)<br/>The In transaction command returns **TRUE** if the current process is in a transaction, otherwise it returns **FALSE**.|
|[**RESUME TRANSACTION**](../../commands-legacy/resume-transaction)<br/>The **RESUME TRANSACTION** command resumes the transaction that was paused using [SUSPEND TRANSACTION](suspend-transaction.md) at the corresponding level in the current process.|
|[**START TRANSACTION**](../../commands-legacy/start-transaction)<br/>START TRANSACTION starts a transaction in the current process.|
|[**SUSPEND TRANSACTION**](../../commands-legacy/suspend-transaction)<br/>The **SUSPEND TRANSACTION** command pauses the current transaction in the current process.|
|[**Transaction level**  : Integer](../../commands-legacy/transaction-level)<br/>The Transaction level command returns the current transaction level for the process.|
|[**VALIDATE TRANSACTION**](../../commands-legacy/validate-transaction)<br/>**VALIDATE TRANSACTION** accepts the transaction that was started with [START TRANSACTION](start-transaction.md) of the corresponding level in the current process.|
