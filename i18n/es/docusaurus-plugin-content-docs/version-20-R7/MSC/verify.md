---
id: verify
title: Página Verificación
sidebar_label: Página Verificación
---

Esta página se utiliza para verificar la integridad de los datos. La verificación puede llevarse a cabo en los registros y/o índices.
Esta página sólo comprueba la integridad de los datos. Si se encuentran errores y es necesario repararlos, se le indicará que utilice la página [Reparación](repair.md).

## Acciones

La página contiene botones de acción que dan acceso directo a las funciones de verificación.

> Cuando la base está encriptada, la verificación incluye la validación de la consistencia de los datos encriptados. Si no se ha suministrado una llave de datos válida, aparecerá un diálogo solicitando la frase secreta o la llave de datos.

- **Verificar los registros y los índices:** inicia el procedimiento de verificación total de los datos.
- **Verificar sólo los registros**: inicia el procedimiento de verificación sólo para los registros (los índices no se verifican).
- **Verificar sólo los índices**: inicia el procedimiento de verificación sólo para los índices(los registros no se verifican).

> \> Verification of records and indexes can also be carried out in detail mode, table by table (see the Details section below).

## Abrir archivo de historial

Independientemente de la verificación solicitada, 4D genera un archivo de historial en la carpeta `Logs` de la aplicación. Este archivo lista todas las verificaciones realizadas e indica los errores encontrados, cuando sea el caso (se muestra [OK] cuando la verificación es correcta). Se crea en formato XML y se denomina: _ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss_.xml donde:

- _ApplicationName_ es el nombre del archivo del proyecto sin ninguna extensión, por ejemplo "Facturas",
- _yyyy-mm-dd hh-mm-ss_ es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inició la operación de mantenimiento, por ejemplo "2019-02-11 15-20-45".

Al presionar el botón **Abrir archivo de historial**, 4D muestra el archivo de historial más reciente en el navegador por defecto de la máquina.

## Detalles

El botón **Lista de tablas** muestra una página detallada que puede utilizarse para ver y seleccionar los registros e índices reales que se van a verificar:

![](../assets/en/MSC/MSC_Verify.png)

La designación de los elementos a verificar le permite ahorrar tiempo durante el procedimiento de verificación.

La lista principal muestra todas las tablas de la base. Para cada tabla, puede limitar la verificación a los registros y/o índices. Despliegue el contenido de una tabla o los campos indexados y marque/desmarque las casillas de selección como desee. Por defecto, todo está seleccionado. También puede utilizar los botones de acceso directo **Seleccionar todo**, **Deseleccionar todo**, **Todos los registros** y **Todos los índices**.

Para cada línea de tabla, la columna "Acción" indica las operaciones a realizar. Cuando se expande la tabla, las filas "Registros" y "Campos indexados" indican el número de elementos en cuestión.

La columna "Estado" muestra el estado de verificación de cada elemento mediante símbolos:

| ![](../assets/en/MSC/MSC_OK.png)  | Verificación realizada sin problemas          |
| --------------------------------- | --------------------------------------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | Verificación efectuada, problemas encontrados |
| ![](../assets/en/MSC/MSC_KO3.png) | Verificación realizada parcialmente           |
| ![](../assets/en/MSC/MSC_KO.png)  | Verificación no efectuada                     |

Haga clic en **Verificar** para comenzar la verificación o en **Estándar** para volver a la página estándar.

El botón **Abrir archivo de historial** puede utilizarse para mostrar el archivo de historialen el navegador predeterminado de la máquina (ver [Abrir archivo de historial](#abrir-archivo-de-registro) arriba).

> La página estándar no tendrá en cuenta las modificaciones realizadas en la página detallada: cuando se presiona un botón de verificación en la página estándar, se verifican todos los elementos. Por otra parte, los parámetros establecidos en la página detallada se conservan de una sesión a otra.
