---
id: ranges
title: Ranges
displayed_sidebar: docs
slug: /WritePro/user/ranges
---



4D Write Pro allows you to programmatically select and manipulate document contents. Since the selected content can include text, images, tables, etc., and also (invisible) formatting tags, 4D Write Pro works with objects called **ranges**.

A range is an object that represents a portion of a 4D Write Pro document:

- a range of characters, paragraphs, pictures, or tables is defined through character positions within the parent document,
- a range of cells, columns and rows is defined through cell positions and are anchored to the parent table.

A range is used to designate elements to be selected or manipulate attributes on a part of the document (using [`WP GET ATTRIBUTES`](../commands/wp-get-attributes) and [`WP SET ATTRIBUTES`](../commands/wp-set-attributes)).

There are different types of ranges. You can determine the type of a range using the `wk type` attribute (read-only). Each range contains several private attributes that define it:


| Constant   | Value | Comment |
|------------|-------|---------|
| `wk end`   | `end` | *(Read-only attribute)*<br>Range end offset, or section/subsection text end index in the document body (for subsection, text end index of the parent section).<br>**Value type**: Longint |
| `wk owner` | `owner` | *(Read-only attribute)*<br>Owner of the range/object/section/subsection (reference to the document for section/subsection).<br>**Value type**: Object |
| `wk start` | `start` | *(Read-only attribute)*<br>Range start offset, or section/subsection text start index in the document body (for subsection, text start index of the parent section).<br>**Value type**: Longint |
| `wk type`  | `type` | *(Read-only attribute)* Type of 4D Write Pro object. Possible values:<br>- `wk type default`: Range or section with not defined type<br>- `wk type paragraph`: Paragraph type range<br>- `wk type image`: Image (anchored and inline)<br>- `wk type container`: Header or footer, for instance<br>- `wk type table`: Table reference<br>For ranges of cells, columns and rows only:<br>- `wk type table row`: Table row reference<br>- `wk type table cell`: Table cell reference<br>- `wk type table column`: Table column reference<br>For subsections only:<br>- `wk first page`: First page subsection<br>- `wk right page`: Right page subsection<br>- `wk left page`: Left page subsection |

The ranges of rows, columns and cells of [tables](./handling-tables.md) have specific, private attributes allowing to define them: 

| Constant             | Value           | Comment |
|----------------------|------------------|---------|
| `wk cell count`      | `cellCount`      | Total number of cells in the row.<br>**Value type**: Longint *(value for `wk type table row`)* |
| `wk column count`    | `columnCount`    | *(Available for tables, documents and sections)* Number of columns.<br>**Value type**: Longint<br>For a table: read-only attribute<br>For a document or a section: read-write attribute. Default value = 1 (single column). Maximum value = 20 |
| `wk first column`    | `firstColumn`    | *(Read-only attribute)* Number of the first table column included in the range.<br>**Value type**: Longint |
| `wk first row`       | `firstRow`       | *(Read-only attribute)* Number of the first table row included in the range.<br>**Value type**: Longint |
| `wk header row count`| `headerRowCount` | *(Read/Write)* Number of rows of the table with the attribute `wk header` set to `True`.<br>Maximum value is 5. If you pass a value above 5, `wk header` is set to `True` for the first five rows only *(see [Repeated headers](./handling-tables.md#repeated-headers))*. |
| `wk row count`       | `rowCount`       | *(Read-only attribute)* Total number of rows.<br>**Value type**: Longint |
| `wk table`           | `table`          | *(Read-only attribute)* The parent table.<br>**Value type**: Object |
| `wk table ID`        | `tableID`        | *(Read-only attribute)* ID of the parent table.<br>**Value type**: String |



Several commands allow you to define document ranges:
- [WP Text range](../commands-legacy/wp-text-range.md) returns a new range corresponding to boundaries you passed as parameters.
- [WP Selection range](../commands-legacy/wp-selection-range) returns a new range corresponding to the current user selection.
- [WP Picture range](../commands-legacy/wp-picture-range) returns a new range containing only the pictures.
- [WP Paragraph range](../commands-legacy/wp-paragraph-range) returns a new range containing only the paragraphs.
- [WP Table range](../commands-legacy/wp-table-range) returns a new range containing only the tables.

You can get information about the position of a range in a document (page number, column number...) using the [`WP Get position`](../commands-legacy/wp-get-position) command.


