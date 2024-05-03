---
id: rollback
title: Página Retroceso
sidebar_label: Página Retroceso
---

La página Retroceso permite acceder a la función de retorno entre las operaciones realizadas en el archivo de datos. Se asemeja a una función de anulación aplicada en varios niveles. Es especialmente útil cuando un registro ha sido borrado por error en una base de datos.

Esta función sólo está disponible cuando la aplicación trabaja con un archivo de historial de datos.

![](../assets/en/MSC/MSC_rollback1.png)

> If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the **Values** column and a dialog requesting the passphrase or the data key is displayed if you click the **Rollback** button.

The contents and functioning of the list of operations are the same as for the [Activity analysis](analysis.md) window.

Para realizar un retroceso entre las operaciones, seleccione la linea tras la cual deben anularse todas las operaciones. La operación de la línea seleccionada será la última conservada. Si, por ejemplo, desea cancelar una eliminación, seleccione la operación situada justo antes de ella. La operación de eliminación, así como todas las operaciones posteriores, se cancelarán.

![](../assets/en/MSC/MSC_rollback2.png)

Next click on the **Rollback** button. 4D le pide que confirme la operación. If you click **OK**, the data is then restored to the exact state it was in at the moment of the selected action.

El menú que se encuentra en la parte inferior de la ventana permite seleccionar un archivo de historial que se utilizará cuando se aplique la función de retorno a una base restaurada desde un archivo. En este caso, debe especificar el archivo de historial de datos correspondiente al archivo.

Here is how the rollback function works: when the user clicks the **Rollback** button, 4D shuts the current database and restores the last backup of the database data. La base restaurada se abre y 4D integra las operaciones del archivo de historial de datos hasta la operación seleccionada. Si la base aún no se ha guardado, 4D se inicia con un archivo de datos vacío.
