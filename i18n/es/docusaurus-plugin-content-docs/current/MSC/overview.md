---
id: overview
title: CSM
sidebar_label: CSM
---

La ventana del Centro de Mantenimiento y Seguridad (CSM) contiene todas las herramientas necesarias para la verificación, el análisis, el mantenimiento, la copia de seguridad, la compactación y el cifrado de los archivos de datos. La ventana CSM está disponible en todas las aplicaciones 4D: 4D monousuario, 4D Server o 4D Desktop.

**Nota:** la ventana del CSM no está disponible desde una conexión remota 4D.

Hay varias formas de abrir la ventana del CSM. El modo de acceso también determina el modo de apertura de la aplicación proyecto: en modo "mantenimiento" o en modo "estándar". En modo mantenimiento, el proyecto no es abierto por 4D, sólo se provee su referencia al CSM. En modo estándar, el proyecto es abierto por 4D.

## Acceso en modo de mantenimiento

En modo mantenimiento, sólo se muestra la ventana del CSM (el proyecto no es abierto por la aplicación 4D). Esto significa que los proyectos que están demasiado dañados para ser abiertas en modo estándar por 4D pueden, sin embargo, ser accedidos. Además, algunas operaciones (compactación, reparación, etc.) requieren que el proyecto se abra en modo mantenimiento (ver [Disponibilidad de las funcionalidades](#feature-availability)).

Puede abrir el CSM en modo mantenimiento desde dos lugares:

- **Desde la ventana de diálogo estándar de apertura del proyecto**
  La ventana de diálogo Abrir estándar incluye la opción **Centro de Seguridad de Mantenimiento** en el menú asociado con el botón **Abrir**:
  ![](../assets/en/MSC/MSC_standardOpen.png)
- **menú Ayuda/Mantenimiento Centro de seguridad** o botón **MSC** de la barra de herramientas (proyecto no abierto)\
  ![](../assets/en/MSC/mscicon.png)\
  Al llamar a esta función, aparece una caja de diálogo estándar Abrir archivo para que pueda seleccionar el archivo _.4DProject_ o _.4dz_ del que desea examinar. El proyecto no será abierto por 4D.

## Acceso al modo estándar

En modo estándar, un proyecto se abre. En este modo, algunas funciones de mantenimiento no están disponibles. Tiene varias posibilidades para acceder a la ventana del CSM:

- Utilice el menú **Ayuda/Centro de seguridad y mantenimiento** o el botón **CSM** en la barra de herramientas de 4D:\
  ![](../assets/en/MSC/mscicon.png)
- Utilizar la acción estándar "Csm" que es posible asociar a un comando de menú o a un objeto de formulario.
- Utilice el comando `OPEN SECURITY CENTER`.

## Disponibilidad de las funcionalidades

Algunas funciones del CSM no están disponibles dependiendo del modo de apertura del CSM:

- La función de copia de seguridad sólo está disponible cuando el proyecto está abierto (el CSM debe haber sido abierto en modo estándar).
- Las funciones de compactación, reversión, restauración, reparación y cifrado de datos sólo pueden utilizarse con archivos de datos que no estén abiertos (el CSM debe haberse abierto en modo de mantenimiento). Si se intentan estas funciones mientras el proyecto está abierto en modo estándar, una caja de diálogo le advierte que implica que la aplicación se cierre y se reinicie en modo mantenimiento.
- En las bases encriptadas, el acceso a los datos encriptados o al archivo .journal requiere que se proporcione una clave de datos de encriptación válida (ver [Página cifrado](encrypt.md)). De lo contrario, los datos encriptados no son visibles.
