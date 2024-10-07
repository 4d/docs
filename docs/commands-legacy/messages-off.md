---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.MESSAGES OFF.Summary-->The MESSAGES OFF and [MESSAGES ON](messages-on.md) commands turn on and off the progress meters displayed by 4D while executing time-consuming operations.<!-- END REF--> By default, messages are on. 

The following table shows operations that display the progress meter:

| Apply Formula | Quick Report     | Order by     |
| ------------- | ---------------- | ------------ |
| Export Data   | Import Data      | Graph        |
| Query by Form | Query by Formula | Query Editor |

The following table lists the commands that display the progress meter:

[APPLY TO SELECTION](apply-to-selection.md)  
[Average](average.md)  
[BUILD APPLICATION](build-application.md)  
[DISTINCT VALUES](distinct-values.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[ORDER BY FORMULA](order-by-formula.md)  
[QR REPORT](qr-report.md)  
[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[REDUCE SELECTION](reduce-selection.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  
[SCAN INDEX](scan-index.md)  
[Sum](sum.md)

**Note for 4D Server:** Progress message windows are not shown on the server since these operations are automatically listed on the *\_o\_PAGE SETUP* of the administration window. If you want to force these progress windows to be displayed, you must call the [MESSAGES ON](messages-on.md) command on the server. 

#### Example 

The following example turns off the progress meter before doing a sort, and then turns it back on after completing the sort:

```4d
 MESSAGES OFF
 ORDER BY([Addresses];[Addresses]ZIP;>;[Addresses]Name2;>)
 MESSAGES ON
```

#### See also 

[MESSAGES ON](messages-on.md)  