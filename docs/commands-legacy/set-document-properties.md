---
id: set-document-properties
title: SET DOCUMENT PROPERTIES
slug: /commands/set-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT PROPERTIES.Syntax-->**SET DOCUMENT PROPERTIES** ( *document* ; *locked* ; *invisible* ; created on ; created at ; modified on ; modified at )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | String | &#x1F852; | Document name or Full document pathname |
| locked | Boolean | &#x1F852; | Locked (True) or Unlocked (False) |
| invisible | Boolean | &#x1F852; | Invisible (True) or Visible (False) |
| created on | Date | &#x1F852; | Creation date |
| created at | Time | &#x1F852; | Creation time |
| modified on | Date | &#x1F852; | Last modification date |
| modified at | Time | &#x1F852; | Last modification time |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DOCUMENT PROPERTIES.Summary-->The **SET DOCUMENT PROPERTIES** command changes the information about the document whose name or pathname you pass in *document*.<!-- END REF-->

Before the call:

* Pass True in *locked* to lock the document. A locked document cannot be modified. Pass False in *locked* to unlock a document.
* Pass True in *invisible* to hide the document. Pass False in *invisible* to make the document visible in the desktop windows.
* Pass the document creation date and time in *created on* and *created at*.
* Pass the document last modification date and time in *modified on* and *modified at*.

The dates and times of creation and last modification are managed by the file manager of your system each time you create or access a document. Using this command, you can change those properties for special purpose. See example for the command [GET DOCUMENT PROPERTIES](get-document-properties.md).

#### See also 

*\_o\_SET DOCUMENT CREATOR*  
*\_o\_SET DOCUMENT TYPE*  
[GET DOCUMENT PROPERTIES](get-document-properties.md)  