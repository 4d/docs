---
id: onBeforeDataEntry
title: On Before Data Entry
---

|Code|Can be called by|Definition|  
|---|---|---|
|41|[List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns)|A list box cell is about to change to editing mode|


## Description

This event is generated just before a cell in the list box is edited (before the entry cursor is displayed). This event allows the developer, for example, to display a different text depending on whether the user is in the display or edit mode.

When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the list box or column method. 

- If, in the context of this event, $0 is set to -1, the cell is considered as not enterable. If the event was generated after **Tab** or **Shift+Tab** was pressed, the focus goes to either the next cell or the previous one, respectively.
- If $0 is not -1 (by default $0 is 0), the cell is enterable and switches to editing mode.

See also [Managing entry](FormObjects/listbox_overview.md#managing-entry) section.