---
id: qr-run
title: QR RUN
slug: /commands/qr-run
displayed_sidebar: docs
---

<!--REF #_command_.QR RUN.Syntax-->**QR RUN** ( *area* : Integer )<!-- END REF-->
<!--REF #_command_.QR RUN.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referencia del área a ejecutar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2003|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.QR RUN.Summary-->El comando QR RUN provoca la ejecución del informe rápido designado por el parámetro *area.<!-- END REF-->* El informe se genera con sus parámetros actuales, incluyendo su tipo de salida. Puede utilizar el comando [QR SET DESTINATION](../commands/qr-set-destination) para modificar el tipo de salida.

El informe se ejecuta en la tabla a la que pertenece el área. Cuando *area* designa un área fuera de la pantalla, es necesario especificar la tabla a utilizar vía el comando [QR SET REPORT TABLE](../commands/qr-set-report-table).

Si pasa un número de *area* inválido, se genera el error -9850.

**4D Server:** este comando puede ejecutarse en 4D Server como parte de un procedimiento almacenado. En este contexto, asegúrese de que no aparezca ninguna caja de diálogo en el equipo servidor (excepto para los requisitos específicos). Para ello, es necesario llamar al comando [QR SET DESTINATION](../commands/qr-set-destination) con el parámetro "\*". En caso de un problema de la impresora (sin papel, impresora desconectada, etc), no se genera ningún mensaje de error.


## Propiedades

|  |  |
| --- | --- |
| Número de comando | 746 |
| Hilo seguro | no |
| Modifica variables | error |


