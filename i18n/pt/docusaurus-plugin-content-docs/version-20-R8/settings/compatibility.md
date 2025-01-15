---
id: compatibility
title: Página de compatibilidade
---

The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D.

> The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.\
> This page lists the compatibility options available for database/projects converted from 4D v18 onwards. Para opções de compatibilidade mais antigas, consulte a [Página de compatibilidade] (https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html) em **doc.4d.com**.

- **Use legacy network layer**: Starting with 4D v15, 4D applications propose a new network layer, named _ServerNet_, to handle communications between 4D Server and remote 4D machines (clients). The former network layer has become obsolete, but it is kept to ensure compatibility with existing databases. Using this option, you can enable the former network layer at any time in your 4D Server applications depending on your needs. _ServerNet_ is used automatically for new databases and databases converted from a v15 release or later. Note that in case of a modification, you need to restart the application for the change to be taken into account. Todos os aplicativos clientes que foram conectados também devem ser reiniciados para poderem se conectar à nova camada de rede.
  **Nota:** esta opção também pode ser gerenciada programando usando o comando `SET DATABASE PARAMETER`.

- **Usar XPath padrão:** oor padrão, essa opção está desmarcada para bancos de dados convertidos de uma versão 4D anterior à v18 R3 e marcada para bancos de dados criados com 4D v18 R3 e superior. Starting with v18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. As a consequence, non-standard features of the previous implementation no longer work. Estes incluem:

  - initial "/" is not the root node only - using a / as first character in a XPath expression does not declare an absolute path from the root node
  - no implicit current node - the current node has to be included in the XPath expression
  - no recursive searches in repeated structures - only the first element is parsed.\

  Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option _unchecked_. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [`DOM Find XML element`](https://doc.4d.com/4dv20/help/command/en/page864.html) command), make sure the **Use standard XPath** option is _checked_.

- **Use LF for end of line on macOS:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. If you want to benefit from this new behavior on projects converted from previous 4D versions, check this option. See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Don't add a BOM when writing a unicode text file by default:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. Nas versões anteriores, os arquivos texto eram gravados com um BOM por padrão. Select this option if you want to enable the new behavior in converted projects. See [`TEXT TO DOCUMENT`](https://doc.4d.com/4dv20/help/command/en/page1237.html), [`Document to text`](https://doc.4d.com/4dv20/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv20/help/command/en/page1090.html).

- **Map NULL values to blank values unchecked by default a field creation**: For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by [ORDA](../ORDA/overview.md).

- **Non-blocking printing**: Starting with 4D v20 R4, each process has its own printing settings (print options, current printer, etc.), thus allowing you to run multiple printing jobs simultaneously. Check this option if you want to benefit from this new implementation in your converted 4D projects or databases converted from binary mode to project mode. **When left unchecked**, the previous implementation is applied: the current 4D printing settings are applied globally, the printer is placed in "busy" mode when one printing job is running, you must call `CLOSE PRINTING JOB` for the printer to be available for the next print job (check previous 4D documentations for more information).

- **Save structure color and coordinates in separate catalog_editor.json file**: Starting with 4D v20 R5, changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are saved in a separate file named `catalog_editor.json`, stored in the project's [Sources folder](../Project/architecture.md#sources). Esta nueva arquitectura de archivos facilita la gestión de conflictos en aplicaciones VCS, ya que el archivo `catalog.4DCatalog` ahora contiene sólo cambios cruciales en la estructura de la base de datos. For compatibility reasons, this feature is not enabled by default in projects converted from previous 4D versions, you need to check this option. Cuando la función está habilitada, el archivo `catalog_editor.json` se crea en la primera modificación en el editor de estructuras.
