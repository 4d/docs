---
id: compatibility
title: Página de compatibilidad
---

La página Compatibilidad agrupa los parámetros relacionados con el mantenimiento de la compatibilidad con versiones anteriores de 4D.

> The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.\
> This page lists the compatibility options available for database/projects converted from 4D v18 onwards. For older compatibility options, refer to the [Compatibility page](https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.en.html) on **doc.4d.com**.

- **Use legacy network layer**: Starting with 4D v15, 4D applications propose a new network layer, named _ServerNet_, to handle communications between 4D Server and remote 4D machines (clients). La antigua capa de red ha quedado obsoleta, pero se mantiene para garantizar la compatibilidad con las bases existentes. Utilizando esta opción, puede activar la antigua capa de red en cualquier momento en sus aplicaciones 4D Server dependiendo de sus necesidades. _ServerNet_ is used automatically for new databases and databases converted from a v15 release or later. Tenga en cuenta que, en caso de modificación, deberá reiniciar la aplicación para que se tenga en cuenta el cambio. Toda aplicación cliente que estuviera conectada también debe reiniciarse para poder conectarse con la nueva capa de red.
  **Note:** This option can also be managed by programming using the `SET DATABASE PARAMETER` command.

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to v18 R3, and checked for databases created with 4D v18 R3 and higher. A partir de la v18 R3, la implementación de XPath en 4D ha sido modificada para ser más compatible y soportar más predicados. Como consecuencia, las funcionalidades no estándar de la implementación anterior ya no funcionan. Incluyen:

  - el caracter inicial "/" no es sólo el nodo raíz - la utilización del caracter / como primer caracter en una expresión XPath no declara una ruta absoluta desde el nodo raíz
  - no hay nodo actual implícito - el nodo actual debe incluirse en la expresión XPath
  - no hay búsquedas recursivas en las estructuras repetidas: sólo se analiza el primer elemento. \\

  Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option _unchecked_. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [`DOM Find XML element`](https://doc.4d.com/4dv20/help/command/en/page864.html) command), make sure the **Use standard XPath** option is _checked_.

- **Use LF for end of line on macOS:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. Si desea beneficiarse de este nuevo comportamiento en proyectos convertidos a partir de versiones anteriores de 4D, marque esta opción. See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. En las versiones anteriores, los archivos texto se escribían con un BOM por defecto. Seleccione esta opción si desea activar el nuevo comportamiento en los proyectos convertidos. See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv20/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Map NULL values to blank values unchecked by default a field creation**: For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by [ORDA](../ORDA/overview.md).

- **Non-blocking printing**: Starting with 4D v20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Marque esta opción si desea beneficiarse de esta nueva implementación en sus proyectos 4D convertidos o bases de datos convertidas de modo binario a modo proyecto. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call `CLOSE PRINTING JOB` for the printer to be available for the next print job (check previous 4D documentations for more information).
