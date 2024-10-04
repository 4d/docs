---
id: sax-get-xml-node
title: SAX Get XML node
slug: /commands/sax-get-xml-node
displayed_sidebar: docs
---

<!--REF #_command_.SAX Get XML node.Syntax-->**SAX Get XML node** ( *document* ) -> Function result<!-- END REF-->
<!--REF #_command_.SAX Get XML node.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | DocRef | &#x1F852; | Reference of open document |
| Function result | Longint | &#x1F850; | Event returned by function |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAX Get XML node.Summary-->The **SAX Get XML node** command returns a long integer that indicates the type of SAX event returned while the XML document referenced in *document* is parsed.<!-- END REF-->

Events that can be returned are available as “*XML*” theme constants:

| Constant                   | Type    | Value |
| -------------------------- | ------- | ----- |
| XML CDATA                  | Longint | 7     |
| XML Comment                | Longint | 2     |
| XML DATA                   | Longint | 6     |
| XML End Document           | Longint | 9     |
| XML End Element            | Longint | 5     |
| XML Entity                 | Longint | 8     |
| XML Processing Instruction | Longint | 3     |
| XML Start Document         | Longint | 1     |
| XML Start Element          | Longint | 4     |

#### Example 

The following example processes an event: 

```4d
 DocRef:=Open document("";"xml";Read Mode)
 If(OK=1)
    Repeat
       MyEvent:=SAX Get XML node(DocRef)
       Case of
          :(MyEvent=XML Start Document)
             DoSomething
          :(MyEvent=XML Comment)
             DoSomethingElse
       End case
    Until(MyEvent=XML End Document)
    CLOSE DOCUMENT(DocRef)
 End if
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise, it is set to 0 and an error is generated. 
