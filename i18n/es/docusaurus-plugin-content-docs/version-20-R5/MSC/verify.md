---
id: verify
title: Página Verificación
sidebar_label: Página Verificación
---

Esta página se utiliza para verificar la integridad de los datos. La verificación puede llevarse a cabo en los registros y/o índices.
Esta página sólo comprueba la integridad de los datos. If errors are found and repairs are needed, you will be advised to use the [Repair page](repair.md).

## Acciones

La página contiene botones de acción que dan acceso directo a las funciones de verificación.

> Cuando la base está encriptada, la verificación incluye la validación de la consistencia de los datos encriptados. Si no se ha suministrado una llave de datos válida, aparecerá un diálogo solicitando la frase secreta o la llave de datos.

- **Verify the records and the indexes:** Starts the total data verification procedure.
- **Verify the records only**: Starts the verification procedure for records only (indexes are not verified).
- **Verify the indexes only**: Starts the verification procedure for indexes only (records are not verified).

> \> Verification of records and indexes can also be carried out in detail mode, table by table (see the Details section below).

## Abrir archivo de historial

Regardless of the verification requested, 4D generates a log file in the `Logs` folder of the application. Este archivo lista todas las verificaciones realizadas e indica los errores encontrados, cuando sea el caso (se muestra [OK] cuando la verificación es correcta). It is created in XML format and is named: _ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss_.xml where:

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.

## Detalles

The **Table list** button displays a detailed page that can be used to view and select the actual records and indexes to be checked:

![](../assets/en/MSC/MSC_Verify.png)

La designación de los elementos a verificar le permite ahorrar tiempo durante el procedimiento de verificación.

La lista principal muestra todas las tablas de la base. Para cada tabla, puede limitar la verificación a los registros y/o índices. Despliegue el contenido de una tabla o los campos indexados y marque/desmarque las casillas de selección como desee. Por defecto, todo está seleccionado. You can also use the **Select all**, **Deselect all**, **All records** and **All indexes** shortcut buttons.

Para cada línea de tabla, la columna "Acción" indica las operaciones a realizar. Cuando se expande la tabla, las filas "Registros" y "Campos indexados" indican el número de elementos en cuestión.

La columna "Estado" muestra el estado de verificación de cada elemento mediante símbolos:

| ![](../assets/en/MSC/MSC_OK.png)  | Verificación realizada sin problemas          |
| --------------------------------- | --------------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Verificación efectuada, problemas encontrados |
| ![](../assets/en/MSC/MSC_KO3.png) | Verificación realizada parcialmente           |
| ![](../assets/en/MSC/MSC_KO.png)  | Verificación no efectuada                     |

Click on **Verify** to begin the verification or on **Standard** to go back to the standard page.

The **Open log file** button can be used to display the log file in the default browser of the machine (see [Open log file](#open-log-file) above).

> La página estándar no tendrá en cuenta las modificaciones realizadas en la página detallada: cuando se presiona un botón de verificación en la página estándar, se verifican todos los elementos. Por otra parte, los parámetros establecidos en la página detallada se conservan de una sesión a otra.
