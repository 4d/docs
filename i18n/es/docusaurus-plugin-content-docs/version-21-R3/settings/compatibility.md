---
id: compatibility
title: Página de compatibilidad
---

La página Compatibilidad agrupa los parámetros relacionados con el mantenimiento de la compatibilidad con versiones anteriores de 4D.

:::note

- El número de opciones mostradas depende de la versión de 4D con la que se creó la base de datos/proyecto original, así como de los ajustes modificados en esta base de datos/proyecto.
- Esta página enumera las opciones de compatibilidad disponibles para las bases de datos/proyectos convertidos a partir de 4D 18. Para las opciones de compatibilidad más antiguas, consulte la [página Compatibilidad](https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html) en **doc.4d.com**.

:::

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to 18 R3, and checked for databases created with 4D 18 R3 and higher. A partir de la 18 R3, la implementación de XPath en 4D ha sido modificada para ser más compatible y soportar más predicados. Como consecuencia, las funcionalidades no estándar de la implementación anterior ya no funcionan. Incluyen:

  - el caracter inicial "/" no es sólo el nodo raíz - la utilización del caracter / como primer caracter en una expresión XPath no declara una ruta absoluta desde el nodo raíz
  - no hay nodo actual implícito - el nodo actual debe incluirse en la expresión XPath
  - no hay búsquedas recursivas en las estructuras repetidas: sólo se analiza el primer elemento. \

  Aunque no es estándar, es posible que desee seguir utilizando estas funcionalidades para que su código siga funcionando como antes -- en este caso, basta con establecer la opción *desmarcarcada*. Por otra parte, si su código no se basa en la implementación no estándar y si desea beneficiarse de las funcionalidades extendidas de XPath en sus bases de datos (como se describe en el comando [`DOM Find XML element`](../commands/dom-find-xml-element)), asegúrese de que la opción \**Utilizar XPath estándar* esté *marcada*.

- **Use LF for end of line on macOS:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. Si desea beneficiarse de este nuevo comportamiento en proyectos convertidos a partir de versiones anteriores de 4D, marque esta opción. Ver [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Document to text`](../commands/document-to-text), y [XML SET OPTIONS](../commands/xml-set-options).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D 19 R2 (and 4D 19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. En las versiones anteriores, los archivos texto se escribían con un BOM por defecto. Seleccione esta opción si desea activar el nuevo comportamiento en los proyectos convertidos. Ver [`TEXT TO DOCUMENT`](../commands/text-to-document), [`Document to text`](../commands/document-to-text), y [XML SET OPTIONS](../commands/xml-set-options).

- **Map NULL values to blank values unchecked by default at field creation**: For better compliance with ORDA specifications, in databases created with 4D 19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. Puede aplicar este comportamiento por defecto a sus bases de datos convertidas marcando esta opción (se recomienda trabajar con valores Null, ya que están totalmente soportados por [ORDA](../ORDA/overview.md).

- **Non-blocking printing**: Starting with 4D 20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Marque esta opción si desea beneficiarse de esta nueva implementación en sus proyectos 4D convertidos o en sus bases de datos convertidas de modo binario a modo proyecto. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call [`CLOSE PRINTING JOB`](../commands/close-printing-job) for the printer to be available for the next print job (check previous 4D documentations for more information).

- **Save structure color and coordinates in separate catalog_editor.json file**: Starting with 4D 20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) se guardan en un archivo independiente llamado `catalog_editor.json`, almacenado en la carpeta [Sources] del proyecto(../Project/architecture.md#sources). Esta nueva arquitectura de archivos facilita la gestión de conflictos en aplicaciones VCS, ya que el archivo `catalog.4DCatalog` ahora contiene sólo cambios cruciales en la estructura de la base de datos. Por razones de compatibilidad, esta funcionalidad no está habilitada por defecto en proyectos convertidos de versiones anteriores de 4D, necesita marcar esta opción. Cuando la función está habilitada, el archivo `catalog_editor.json` se crea en la primera modificación en el editor de estructuras.

- **Use legacy print rendering**: Starting with 4D 21 R3, 4D uses a new, unified print rendering engine to print forms on macOS and Windows. To make sure forms designed with the [legacy screen-based print renderer](../FormEditor/forms.md#legacy-print-renderer) continue to be printed as expected, this option is checked by default in converted projects or databases created with 4D 21 R2 and before. You can uncheck this option to benefit from the [modern print rendering engine](../FormEditor/forms.md#print-rendering-engine). Note that when forms are rendered under Liquid Glass (macOS) or Fluent UI (Windows) interfaces, this option is ignored: in such contexts forms are always printed using the modern print renderer (see [this section](../FormEditor/forms.md#legacy-print-renderer)).