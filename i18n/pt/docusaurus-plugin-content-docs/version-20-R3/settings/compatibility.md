---
id: compatibility
title: Página de compatibilidade
---

The Compatibility page groups together parameters related to maintaining compatibility with previous versions of 4D.

> The number of options displayed depends on the version of 4D with which the original database/project was created, as well as the settings modified in this database/project.   
> This page lists the compatibility options available for database/projects converted from 4D v18 onwards. For older compatibility options, refer to the [Compatibility page](https://doc.4d.com/4Dv19R3/4D/19-R3/Compatibility-page.300-5612610.en.html) on **doc.4d.com**.

- **Use legacy network layer**: Starting with 4D v15, 4D applications propose a new network layer, named *ServerNet*, to handle communications between 4D Server and remote 4D machines (clients). The former network layer has become obsolete, but it is kept to ensure compatibility with existing databases. Using this option, you can enable the former network layer at any time in your 4D Server applications depending on your needs. *ServerNet* is used automatically for new databases and databases converted from a v15 release or later. Note that in case of a modification, you need to restart the application for the change to be taken into account. Todos os aplicativos clientes que foram conectados também devem ser reiniciados para poderem se conectar à nova camada de rede. **Note:** This option can also be managed by programming using the `SET DATABASE PARAMETER` command.

- **Use standard XPath:** By default this option is unchecked for databases converted from a 4D version prior to v18 R3, and checked for databases created with 4D v18 R3 and higher. Starting with v18 R3, the XPath implementation in 4D has been modified to be more compliant and to support more predicates. As a consequence, non-standard features of the previous implementation no longer work. Estes incluem:
    * initial "/" is not the root node only - using a / as first character in a XPath expression does not declare an absolute path from the root node
    * no implicit current node - the current node has to be included in the XPath expression
    * no recursive searches in repeated structures - only the first element is parsed.\

    Although not standard, you might want to keep using these features so that your code continues to work as before -- in this case, just set the option *unchecked*. On the other hand, if your code does not rely on the non-standard implementation and if you want to benefit from the extended XPath features in your databases (as described in the [DOM Find XML element](https://doc.4d.com/4dv19R/help/command/en/page864.html) command), make sure the **Use standard XPath** option is *checked*.

-   **Use LF for end of line on macOS:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files with line feed (LF) as default end of line (EOL) character instead of CR (CRLF for xml SAX) on macOS in new projects. If you want to benefit from this new behavior on projects converted from previous 4D versions, check this option. See [TEXT TO DOCUMENT](https://doc.4d.com/4dv19R/help/command/en/page1237.html), [Document to text](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv19R/help/command/en/page1090.html).

-   **Don't add a BOM when writing a unicode text file by default:** Starting with 4D v19 R2 (and 4D v19 R3 for XML files), 4D writes text files without a byte order mark (BOM) by default. Nas versões anteriores, os arquivos texto eram gravados com um BOM por padrão. Select this option if you want to enable the new behavior in converted projects. See [TEXT TO DOCUMENT](https://doc.4d.com/4dv19R/help/command/en/page1237.html), [Document to text](https://doc.4d.com/4dv19R/help/command/en/page1236.html), and [XML SET OPTIONS](https://doc.4d.com/4dv19R/help/command/en/page1090.html).

- **Map NULL values to blank values unchecked by default a field creation**: For better compliance with ORDA specifications, in databases created with 4D v19 R4 and higher the **Map NULL values to blank values** field property is unchecked by default when you create fields. You can apply this default behavior to your converted databases by checking this option (working with Null values is recommended since they are fully supported by [ORDA](../ORDA/overview.md).