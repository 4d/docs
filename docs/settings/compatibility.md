---
id: compatibility
title: Compatibility page
---

The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D. 

:::note

- The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.   
- This page lists the compatibility options available for database/projects converted from 4D 18 onwards. For older compatibility options, refer to the [Compatibility page](https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html) on **doc.4d.com**.

:::


- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to 18 R3, and checked for databases created with 4D 18 R3 and higher. Starting with 18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. As a consequence, non-standard features of the previous implementation no longer work. They include:
	* initial "/" is not the root node only - using a / as first character in a XPath expression does not declare an absolute path from the root node
	* no implicit current node - the current node has to be included in the XPath expression
	* no recursive searches in repeated structures - only the first element is parsed.\  

	Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option *unchecked*. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [`DOM Find XML element`](../commands/dom-find-xml-element) command), make sure the **Use standard XPath** option is *checked*.

- **Use LF for end of line on macOS:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. If you want to benefit from this new behavior on projects converted from previous 4D versions, check this option. See [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Document to text`](../commands/document-to-text), and [XML SET OPTIONS](../commands/xml-set-options).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. In previous versions, text files were written with a BOM by default. Select this option if you want to enable the new behavior in converted projects. See [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Document to text`](../commands/document-to-text), and [XML SET OPTIONS](../commands/xml-set-options).

- **Map NULL values to blank values unchecked by default at field creation**: For better compliance with ORDA specifications, in databases created with 4D 19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by [ORDA](../ORDA/overview.md).

- **Non-blocking printing**: Starting with 4D 20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or your databases converted from binary mode to project mode. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call [`CLOSE PRINTING JOB`](../commands/close-printing-job) for the printer to be available for the next print job (check previous 4D documentations for more information).

- **Save structure color and coordinates in separate catalog_editor.json file**: Starting with 4D 20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are saved in a separate file named `catalog_editor.json`, stored in the project's [Sources folder](../Project/architecture.md#sources). This new file architecture makes it easier to manage merge conflicts in VCS applications since the `catalog.4DCatalog` file now contains only crucial database structure changes. For compatibility reasons, this feature is not enabled by default in projects converted from previous 4D versions, you need to check this option. When the feature is enabled, the `catalog_editor.json` file is created at the first modification in the Structure editor. 

- **Use legacy print rendering**: Starting with 4D 21 R3, 4D uses a new, unified print rendering engine to print forms on macOS and Windows. To make sure forms designed with the [legacy screen-based print renderer](../FormEditor/forms.md#legacy-print-renderer) continue to be printed as expected, this option is checked by default in converted projects or databases created with 4D 21 R2 and before. You can uncheck this option to benefit from the [modern print rendering engine](../FormEditor/forms.md#print-rendering-engine). Note that when forms are rendered under Liquid Glass (macOS) or Fluent UI (Windows) interfaces, this option is ignored: in such contexts forms are always printed using the modern print renderer (see [this section](../../FormEditor/forms.md#legacy-print-rendering)).