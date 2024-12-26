---
id: real-time-monitor
title: Página do monitor em tempo real
---

The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.

![](../assets/en/Admin/server-admin-monitor-page.png)

> This page is available in the administration window of the server machine and also from a remote 4D machine. In the case of a remote machine, this page displays data from operations performed on the server machine.

É acrescentada uma linha para cada operação longa efetuada nos dados. Esta línea desaparece automáticamente cuando finaliza la operación (puede marcar la opción **Mostrar operaciones al menos 5 segundos** para conservar las operaciones rápidas en pantalla durante 5 segundos, ver abajo).

As informações seguintes são fornecidas para cada linha:

- **Hora de inicio**: hora de inicio de la operación en el formato "dd/mm/yyyy - hh:mm:ss"
- **Duración** (ms): duración en milisegundos de la operación en curso
- **Información**: título de la operación.
- **Detalles**: esta área muestra información detallada que variará en función del tipo de operación seleccionada. Mais especificamente:
  - **Creada en**: indica si la operación es el resultado de una acción del cliente (Creada en cliente) o si se inició explícitamente en el servidor mediante un procedimiento almacenado o la opción "Ejecutar en el servidor" (Creada en servidor).
  - **Detalles de la operación**: tipo de operación y (para las operaciones de consulta) plan de búsqueda.
  - **Suboperaciones** (si las hay): operaciones dependientes de la operación seleccionada (por ejemplo, eliminar registros relacionados antes que un registro padre).
  - **Detalles del proceso**: información adicional relativa a la tabla, campo, proceso o cliente, en función del tipo de operación

> A página de monitoramento em tempo real usa internamente o comando [`GET ACTIVITY SNAPSHOT`] (https://doc.4d.com/4dv19/help/command/en/page1277.html). Para mais informações, consultar a descrição deste comando.

A página está ativa e é atualizada permanentemente assim que é exibida. It should be noted that its operation can significantly slow the execution of the application. It is possible to suspend the updating of this page in one of the following ways:

- haciendo clic en el botón **Pausa**,
- clicando na lista,
- premindo a barra de espaços.

Al pausar la página, aparece el mensaje "PAUSED" y la etiqueta del botón cambia a **Reanudar**.
You can resume monitoring of the operations by performing the same action as for pausing.

## Modo avançado

The RTM page can display additional information, if necessary, for each listed operation.

Para acceder al modo avanzado de una operación, presione **Mayús** y seleccione la operación deseada. A continuación, se muestra toda la información disponible en el área "Detalles del proceso" sin ningún filtro (tal y como devuelve el comando `GET ACTIVITY SNAPSHOT`). As informações disponíveis dependem da operação selecionada.

Eis um exemplo de informações apresentadas no modo padrão:

![](../assets/en/Admin/server-admin-monitor-adv1.png)

En el modo avanzado (**Mayús+Clic** en la operación), se muestra información adicional:

![](../assets/en/Admin/server-admin-monitor-adv2.png)

## Botão instantânea

El botón **Instantánea** permite copiar en el portapapeles todas las operaciones que se muestran en el panel RTM, así como sus detalles relacionados (información de procesos y suboperaciones):

![](../assets/en/Admin/server-admin-monitor-snapshot.png)

## Mostrar operações durante pelo menos 5 segundos

Si marca la opción **Mostrar operaciones al menos 5 segundos**, todas las operaciones listadas se mostrarán en la página durante al menos cinco segundos, incluso después de que finalice su ejecución. As operações retidas aparecem esbatidas na lista de operações. Esta funcionalidade é útil para obter informações sobre operações que são executadas muito rapidamente.
