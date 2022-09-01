---
id: rollback
title: Página Retroceso
sidebar_label: Página Retroceso
---

La página Retroceso permite acceder a la función de retorno entre las operaciones realizadas en el archivo de datos. Se asemeja a una función de anulación aplicada en varios niveles. Es especialmente útil cuando un registro ha sido borrado por error en una base de datos.

Esta función sólo está disponible cuando la aplicación trabaja con un archivo de historial de datos.

![](../assets/en/MSC/MSC_rollback1.png)

> Si la base de datos está encriptada y no se ha suministrado una llave de datos válida correspondiente al archivo de registro abierto, los valores encriptados no se muestran en la columna **Valores** y se muestra un diálogo en el que se solicita la frase secreta o la llave de datos si se hace clic en el botón **Retroceso**.

El contenido y el funcionamiento de la lista de operaciones es el mismo que el de la ventana [Análisis de actividades](analysis.md).

Para realizar un retroceso entre las operaciones, seleccione la linea tras la cual deben anularse todas las operaciones. La operación de la línea seleccionada será la última conservada. Si, por ejemplo, desea cancelar una eliminación, seleccione la operación situada justo antes de ella. La operación de eliminación, así como todas las operaciones posteriores, se cancelarán.

![](../assets/en/MSC/MSC_rollback2.png)

A continuación, haga clic en el botón **Retroceso**. 4D le pide que confirme la operación. Si hace clic en **Aceptar**, los datos se restauran al estado exacto en el que se encontraban en el momento de la acción seleccionada.

El menú que se encuentra en la parte inferior de la ventana permite seleccionar un archivo de historial que se utilizará cuando se aplique la función de retorno a una base restaurada desde un archivo. En este caso, debe especificar el archivo de historial de datos correspondiente al archivo.

Así es como funciona la función de retroceso: cuando el usuario hace clic en el botón **Retroceso**, 4D cierra la base de datos actual y restaura la última copia de seguridad de los datos de la base. La base restaurada se abre y 4D integra las operaciones del archivo de historial de datos hasta la operación seleccionada. Si la base aún no se ha guardado, 4D se inicia con un archivo de datos vacío.
