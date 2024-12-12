---
id: qr-run
title: QR RUN
slug: /commands/qr-run
displayed_sidebar: docs
---

<!--REF #_command_.QR RUN.Syntax-->**QR RUN** ( *area* )<!-- END REF-->
<!--REF #_command_.QR RUN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área a ejecutar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR RUN.Summary-->El comando QR RUN provoca la ejecución del informe rápido designado por el parámetro *area.<!-- END REF-->* El informe se genera con sus parámetros actuales, incluyendo su tipo de salida. Puede utilizar el comando [QR SET DESTINATION](qr-set-destination.md) para modificar el tipo de salida.

El informe se ejecuta en la tabla a la que pertenece el área. Cuando *area* designa un área fuera de la pantalla, es necesario especificar la tabla a utilizar vía el comando [QR SET REPORT TABLE](qr-set-report-table.md).

Si pasa un número de *area* inválido, se genera el error -9850.

**4D Server:** este comando puede ejecutarse en 4D Server como parte de un procedimiento almacenado. En este contexto, asegúrese de que no aparezca ninguna caja de diálogo en el equipo servidor (excepto para los requisitos específicos). Para ello, es necesario llamar al comando [QR SET DESTINATION](qr-set-destination.md) con el parámetro "\*". En caso de un problema de la impresora (sin papel, impresora desconectada, etc), no se genera ningún mensaje de error.


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 746 |
| Hilo seguro | &cross; |
| Modifica variables | error |


