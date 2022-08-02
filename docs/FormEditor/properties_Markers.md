---
id: markers
title: Markers
---


These properties let you specify the precise location of markers on the vertical ruler of a **table form**. Markers are mainly used in output forms. They control the information that is listed and set header, breaks, detail and footer areas of the form. Any object that placed in these areas is displayed or printed at the appropriate location.

Whenever any form is used for output, either for screen display or printing, the output marker lines take effect and the areas display or print at designated locations. The markers also take effect when a form is used as the List form in a subform area. However, they have no effect when a form is used for input.

Methods that are associated with objects in these areas are executed when the areas are printed or displayed as long as the appropriate events have been activated. For example, a object method placed in the Header area is executed when the `On Header` event takes place.

---

## Form Break

Form Break areas are displayed once at the end of the list of records and are printed once after the records have been printed in a report.

The Break area is defined as the area between the Detail control line and the Break control line. There can be [several Break areas](#additional-areas) in your report.

You can make Break areas smaller or larger. You can use a Break area to display information that is not part of the records (instructions, current date, current time, etc.), or to display a line or other graphic element that concludes the screen display. In a printed report, you can use a Break area for calculating and printing subtotals and other summary calculations.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|markerBreak|integer &#x7c; integer collection|Break marker position or collection of break marker positions in pixels.<br/>Minimum value: 0|

---

## Form Detail

The form Detail area is displayed on the screen and printed once for each record in a report. The Detail area is defined as the area between the Header control line and the Detail control line.

You can make the Detail area smaller or larger. Whatever you place in the Detail area is displayed or printed once for each record. Most often you place fields or variables in the Detail area so that the information in each record is displayed or printed, but you can place other elements in the Detail area as well.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|markerBody|integer |Detail marker position. Minimum: 0|

---

## Form Footer

The Form Footer area is displayed on screen under the list of records. It is always printed at the bottom of every page of a report. The Footer area is defined as the area between the Break control line and the Footer control line.

You make the Footer area smaller or larger.

You can use the Footer area to print graphics, page numbers, the current date, or any text you want at the bottom of each page of a report. For output forms designed for use on screen, the Footer area typically contains buttons that give the user options such as doing a search or sort, printing records, or putting away the current report. Active objects are accepted.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|markerFooter|integer|minimum: 0|

---

## Form Header

The form Header area is displayed at the top of each screen and is printed at the top of each page of a report. The Header area is defined as the area above the Header control line.

You can make the Header area smaller or larger. You can use the Header area for column names, for instructions, additional information, or even a graphic such as a company logo or a decorative pattern.

You can also place and use active objects in the Header area of output forms displayed as subforms, in the records display window or using the `DISPLAY SELECTION` and `MODIFY SELECTION` commands. The following active objects can be inserted:

- Buttons, picture buttons,
- Combo boxes, drop-down lists,  picture pop-up menus,
- hierarchical lists, list boxes
- Radio buttons, check boxes, 3D check boxes,
- Progress indicators, rulers, steppers, spinners.

Standard actions such as `Add Subrecord`, `Cancel` (lists displayed using `DISPLAY SELECTION` and `MODIFY SELECTION`) or `Automatic splitter` can be assigned to the inserted buttons. The following events apply to the active objects you insert in the Header area: `On Load`, `On Clicked`, `On Header`, `On Printing Footer`, `On Double Clicked`, `On Drop`, `On Drag Over`, `On Unload`. Keep in mind that the form method is called with the `On Header` event after calling the object methods of the area.

The form can contains [additional header areas](#additional-areas) to be associated with additional breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|markerHeader|integer &#x7c; integer collection|Header marker position or collection of header marker positions in pixels.<br/>Minimum value: 0|

## Additional areas

You can create additional Break areas and Header areas for a report. These additional areas allow you to print subtotals and other calculations in a report and to display other information effectively.

Additional areas are defined when you use a collection of positions in the [Form Break](#form-break) and [Form Header](#form-header) properties.

> In the 4D Form editor, you create additional control lines by holding down the **Alt** key while clicking the appropriate control marker.

A form always starts with a Header, Detail, Break level 0, and Footer areas.

Break at level 0 zero takes in all the records; it occurs after all the records are printed. Additional Break areas can be added, i.e. a Break level 1, Break level 2, etc.

A Break level 1 occurs after the records grouped by the first sorted field are printed.

|Label|Description|Prints after groups created by|
|---|---|---|
|Form Break 1|Break at level 1|First sorted field|
|Form Break 2|Break at level 2|Second sorted field|
|Form Break 3|Break at level 3|Third sorted field|

Additional Header areas are associated with Breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed.

|Label|Description|Prints after groups created by|
|---|---|---|
|Form Header 1|Header at level 1|First sorted field|
|Form Header 2|Header at level 2|Second sorted field|
|Form Header 3|Header at level 3|Third sorted field|

If you use the `Subtotal` function to initiate Break processing, you should create a Break area for every level of Break that will be generated by the sort order, minus one. If you do not need anything printed in one of the Break areas, you can reduce its size to nothing by placing its marker on top of another control line. If you have more sort levels than Break areas, the last Break area will be repeated during printing.
