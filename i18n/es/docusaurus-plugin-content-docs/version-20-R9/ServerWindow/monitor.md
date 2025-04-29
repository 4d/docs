---
id: monitor
title: Página Monitor
---

La página **Monitor** muestra información dinámica relativa al uso de la base de datos, así como información sobre el sistema y la aplicación 4D Server.

![](../assets/en/Admin/server-admin.png)

> En Windows, parte de la información del sistema que se muestra en esta página se recupera a través de las herramientas del "Analizador de rendimiento" de Windows. Sólo se puede acceder a estas herramientas cuando el usuario que abrió la sesión donde se lanzó 4D Server tiene la autorización de administración necesaria.

## Área gráfica

El área gráfica permite ver la evolución en tiempo real de varios parámetros: el uso de la CPU, el tráfico de red y el estado de la memoria. Se selecciona el parámetro que se va a mostrar a través de un menú que se encuentra en el centro de la ventana:

![](../assets/en/Admin/server-graphic.png)

- **Uso de la CPU**: uso global de la CPU de la máquina, para todas las aplicaciones en conjunto. La parte específica de 4D Server en esta tasa de uso se ofreced en el área de información "Procesadores".
- **Red**: número de bytes recibidos por segundo por la máquina (servidor o cliente). El número de bytes enviados se suministra en el área de información "Red".
- **Memoria física**: cantidad de memoria RAM de la máquina utilizada por 4D Server. En el área de información "Memoria" se ofrece una visión más detallada del uso de la memoria.
- **Memoria virtual**: cantidad de memoria virtual utilizada por la aplicación 4D Server. Esta memoria es asignada por el sistema en función de las necesidades de la aplicación. El valor que se encuentra en la parte inferior derecha del área indica la cantidad de memoria que se está utilizando actualmente. El valor que se encuentra en la parte superior izquierda indica la cantidad máxima de memoria virtual utilizable. El valor máximo se calcula dinámicamente en función de la configuración general de la memoria de la aplicación.
- **Caché**: cantidad de memoria caché utilizada por la aplicación 4D Server. El valor que se encuentra en la parte inferior derecha del área indica la cantidad de memoria que se está utilizando actualmente. The value found at the bottom right of the area indicates the quantity of memory currently being used.

Tenga en cuenta que cuando se selecciona esta opción, el desplazamiento del área gráfica se ralentiza, ya que un análisis eficaz de la memoria caché se realiza generalmente durante un período de observación bastante largo.

## Visión general del área

El área "Visión general" ofrece diferente información sobre el sistema, la aplicación y las licencias instaladas en la máquina 4D Server.

- **Información sistema**: ordenador, sistema y dirección IP del servidor
- **Información aplicación**: número de versión interna de 4D Server y estado de Volume Shadow Copy
- **Conexiones máximas**: número de conexiones simultáneas permitidas por tipo de servidor
- **Licencia**: descripción de la licencia. Cuando la licencia producto o una de sus expansiones adjuntas vence en menos de 10 días, por ejemplo en el caso de una licencia de suscripción, 4D Server intenta renovar automáticamente la licencia desde la cuenta del usuario 4D. En este caso, si la renovación automática ha fallado por alguna razón (error de conexión, estado de la cuenta inválido, contrato no prolongado...), se muestra un icono de advertencia junto a la licencia para alertar al administrador del servidor. Se puede mostrar información adicional sobre el estado de la renovación de la licencia en un consejo cuando se pasa el ratón por sobre el área:

![](../assets/en/Admin/server-licence-failed.png)

Generalmente, tendrá que verificar el [**Administrador de licencias**](Admin/licenses.md).

## Área Detalles

El área "Detalles" repite parte de la información mostrada en el área gráfica y ofrece también información adicional.

- **Disco duro**: capacidad global del disco duro y distribución del espacio utilizado por los datos de la base de datos (archivo de datos + índice de datos), el espacio utilizado por otros archivos y el espacio libre disponible.
- **Memoria**: memoria RAM instalada en la máquina y cantidad de memoria utilizada por 4D Server, por otras aplicaciones o que está disponible. La memoria utilizada por 4D Server también puede mostrarse dinámicamente en el área gráfica.
- **Procesadores**: tasa instantánea de ocupación de procesador(es) de la máquina por 4D Server y por otras aplicaciones. Esta tasa se recalcula constantemente. La tasa de ocupación por 4D Server también puede mostrarse dinámicamente en el área gráfica.
- **Red**: número instantáneo de bytes enviados y recibidos por la máquina (servidor o cliente). Este valor se actualiza constantemente. El número de bytes recibidos también puede mostrarse dinámicamente en el área gráfica.
