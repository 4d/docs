---
id: monitor
title: Página Monitor
---

La página **Monitor** muestra información dinámica relativa al uso de la base de datos, así como información sobre el sistema y la aplicación 4D Server.

![](../assets/en/Admin/server-admin.png)

> No Windows, algumas das informações do sistema exibidas nesta página são recuperadas através das ferramentas de "Analisador de desempenho do Windows". Estas ferramentas só podem ser acessadas quando o usuário que abriu a sessão onde o servidor 4D foi iniciado tiver a autorização administrativa necessária.

## Área gráfica

A área gráfica permite que você veja a evolução em tempo real de vários parâmetros: o uso da CPU, o tráfego de rede e a memória. Você seleciona o parâmetro a ser exibido através de um menu encontrado no centro da janela:

![](../assets/en/Admin/server-graphic.png)

- **Uso de la CPU**: uso global de la CPU de la máquina, para todas las aplicaciones en conjunto. A parte específica do servidor 4D nessa taxa de uso é fornecida na área de informação "Processadores".
- **Red**: número de bytes recibidos por segundo por la máquina (servidor o cliente). O número de bytes enviados é fornecido na área de informação "Rede".
- **Memoria física**: cantidad de memoria RAM de la máquina utilizada por 4D Server. A more detailed view of memory use is provided in the "Memory" information area.
- **Memoria virtual**: cantidad de memoria virtual utilizada por la aplicación 4D Server. Esta memória é alocada pelo sistema conforme as necessidades de aplicação. The value found at the bottom right of the area indicates the quantity of memory currently being used. The value found at the top left indicates the maximum quantity of usable virtual memory. The maximum value is calculated dynamically according to the general memory settings of the application.
- **Caché**: cantidad de memoria caché utilizada por la aplicación 4D Server. The value found at the bottom right of the area indicates the quantity of memory currently being used. The value found at the bottom right of the area indicates the quantity of memory currently being used.

Note that when this option is selected, the graph area scrolling is slowed down since an efficient analysis of the cache is generally carried out over a fairly long observation period.

## Área Visão geral

The "Overview" area provides various information concerning the system, application and licenses installed on the 4D Server machine.

- **Información sistema**: ordenador, sistema y dirección IP del servidor
- **Información aplicación**: número de versión interna de 4D Server y estado de Volume Shadow Copy
- **Conexiones máximas**: número de conexiones simultáneas permitidas por tipo de servidor
- **Licencia**: descripción de la licencia. When the product license or one of its attached expansions expires in less than 10 days, e.g. in case of a subscription-license, 4D Server tries to automatically renew the license from the 4D user account. In this case, if the automatic renewal failed for some reason (connection error, invalid account status, non-prolongated contract...), a warning icon is displayed next to the license to alert the server administrator. Additional information about the license renewal status can be displayed in a tip when you hover the mouse over the area:

![](../assets/en/Admin/server-licence-failed.png)

Geralmente, você precisará verificar o [**Gerenciador de licenças**](Admin/licenses.md).

## Área Detalhes

The "Details" area repeats part of the information displayed in the graphic area and provides additional information as well.

- **Disco duro**: capacidad global del disco duro y distribución del espacio utilizado por los datos de la base de datos (archivo de datos + índice de datos), el espacio utilizado por otros archivos y el espacio libre disponible.
- **Memoria**: memoria RAM instalada en la máquina y cantidad de memoria utilizada por 4D Server, por otras aplicaciones o que está disponible. The memory used by 4D Server can also be displayed dynamically in the graphic area.
- **Procesadores**: tasa instantánea de ocupación de procesador(es) de la máquina por 4D Server y por otras aplicaciones. Esta taxa é constantemente recalculada. The occupancy rate by 4D Server can also be displayed dynamically in the graphic area.
- **Red**: número instantáneo de bytes enviados y recibidos por la máquina (servidor o cliente). Este valor é atualizado constantemente. The number of bytes received by can also be displayed dynamically in the graphic area.
