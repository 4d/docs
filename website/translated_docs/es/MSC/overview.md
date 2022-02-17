---
id: overview
title: Generalidades
sidebar_label: Generalidades
---

La ventana del Centro de Mantenimiento y Seguridad (CSM) contiene todas las herramientas necesarias para la verificación, el análisis, el mantenimiento, la copia de seguridad, la compactación y el cifrado de los archivos de datos. La ventana CSM está disponible en todas las aplicaciones 4D: 4D monousuario, 4D Server o 4D Desktop.

**Nota:** la ventana del CSM no está disponible desde una conexión remota 4D.

Hay varias formas de abrir la ventana del CSM. El modo de acceso también determina el modo de apertura de la base: en modo "mantenimiento" o en modo "estándar". En modo mantenimiento, la base no es abierta por 4D, sólo se provee su referencia al CSM. En modo estándar, la base es abierta por 4D.


## Display in maintenance mode

En modo mantenimiento, sólo se muestra la ventana del CSM (la base no es abierta por la aplicación 4D). Esto significa que las bases que están demasiado dañadas para ser abiertas en modo estándar por 4D pueden, sin embargo, ser accedidas. Además, algunas operaciones (compactación, reparación, etc.) requieren que la base se abra en modo de mantenimiento (ver [Disponibilidad de las funcionalidades](#feature-availability)).

You can open the MSC in maintenance mode from two locations:

- **La caja de diálogo estándar de apertura**. La caja de diálogo estándar de apertura de bases de datos incluye la opción **Centro de seguridad de mantenimiento** del menú asociado al botón **Abrir**: ![](assets/en/MSC/MSC_standardOpen.png)
- Menú **Ayuda/Centro de seguridad y de mantenimiento** o botón **CSM** en la barra de herramientas (base de datos no abierta)  
  ![](assets/en/MSC/mscicon.png)   
  Cuando se llama a esta función, aparece un diálogo estándar de apertura de archivos para poder indicar la base a examinar. La base de datos no será abierta por 4D.

## Display in standard mode

En modo estándar, una base de datos es abierta. In this mode, certain maintenance functions are not available. You have several possibilities for accessing the MSC window:

- Use the **Help/Maintenance Security Center** menu or the **MSC** button in the 4D toolbar:  
  ![](assets/en/MSC/mscicon.png)
- Utilizar la acción estándar "CSM" que es posible asociar a un comando de menú o a un objeto de formulario (ver sección "Acciones estándar").

- Use the `OPEN SECURITY CENTER` language command.

## Feature availability

Certain MSC functions are not available depending on the MSC opening mode:

- La función de copia de seguridad sólo está disponible cuando la base está abierta (el CSM debe haber sido abierto en modo estándar).
- Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). Si se intentan estas funciones mientras la base está abierta en modo estándar, un cuadro de diálogo le advierte que implica que la aplicación se cierre y se reinicie en modo mantenimiento.
- In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see [Encrypt page](encrypt.md)). Otherwise, encrypted data is not visible.
