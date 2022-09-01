---
id: overview
title: Generalidades
sidebar_label: Generalidades
---

La ventana del Centro de Mantenimiento y Seguridad (CSM) contiene todas las herramientas necesarias para la verificación, el análisis, el mantenimiento, la copia de seguridad, la compactación y el cifrado de los archivos de datos. La ventana CSM está disponible en todas las aplicaciones 4D: 4D monousuario, 4D Server o 4D Desktop.

**Nota:** la ventana del CSM no está disponible desde una conexión remota 4D.

Hay varias formas de abrir la ventana del CSM. El modo de acceso también determina el modo de apertura de la base: en modo "mantenimiento" o en modo "estándar". En modo mantenimiento, la base no es abierta por 4D, sólo se provee su referencia al CSM. En modo estándar, la base es abierta por 4D.

## Acceso en modo de mantenimiento

En modo mantenimiento, sólo se muestra la ventana del CSM (la base no es abierta por la aplicación 4D). Esto significa que las bases que están demasiado dañadas para ser abiertas en modo estándar por 4D pueden, sin embargo, ser accedidas. Además, algunas operaciones (compactación, reparación, etc.) requieren que la base se abra en modo de mantenimiento (ver [Disponibilidad de las funcionalidades](#feature-availability)).

Puede abrir el CSM en modo mantenimiento desde dos lugares:

- **From the standard database opening dialog box** The standard Open database dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (database not open)  
  ![](../assets/en/MSC/mscicon.png) When you call this function, a standard Open file dialog appears so that you can indicate the database to be examined. La base de datos no será abierta por 4D.

## Acceso al modo estándar

En modo estándar, una base de datos es abierta. En este modo, algunas funciones de mantenimiento no están disponibles. Tiene varias posibilidades para acceder a la ventana del CSM:

- Utilice el menú **Centro de seguridad y mantenimiento** o el botón **CSM** de la barra de herramientas de 4D:  
  ![](../assets/en/MSC/mscicon.png)
- Utilizar la acción estándar "CSM" que es posible asociar a un comando de menú o a un objeto de formulario (ver sección "Acciones estándar").

- Utilice el comando `OPEN SECURITY CENTER`.

## Disponibilidad de las funcionalidades

Algunas funciones del CSM no están disponibles dependiendo del modo de apertura del CSM:

- La función de copia de seguridad sólo está disponible cuando la base está abierta (el CSM debe haber sido abierto en modo estándar).
- Las funciones de compactación, reversión, restauración, reparación y cifrado de datos sólo pueden utilizarse con archivos de datos que no estén abiertos (el CSM debe haberse abierto en modo de mantenimiento). Si se intentan estas funciones mientras la base está abierta en modo estándar, un cuadro de diálogo le advierte que implica que la aplicación se cierre y se reinicie en modo mantenimiento.
- En las bases encriptadas, el acceso a los datos encriptados o al archivo .journal requiere que se proporcione una clave de datos de encriptación válida (ver [Página cifrado](encrypt.md)). De lo contrario, los datos encriptados no son visibles.
