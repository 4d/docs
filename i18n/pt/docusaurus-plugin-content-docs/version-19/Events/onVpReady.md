---
id: onVpReady
title: On VP Ready
---

| Code | Pode ser chamado por                                    | Definição                                        |
| ---- | ------------------------------------------------------- | ------------------------------------------------ |
| 9    | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | O carregamento da área 4D View Pro está completo |


## Descrição

Este evento é gerado quando o carregamento da área 4D View Pro estiver completo.

Você precisa usar esse evento para escrever o código de inicialização da área. Qualquer código de inicialização de área 4D View Pro, para carregar ou ler valores de, ou na área, deve estar localizado no evento formulário `On VP Ready` da área. Este evento formulário é acionado quando o carregamento da área estiver concluído. Testar esse evento garante que o código será executado em um contexto válido. Um erro é retornado se um comando 4D View Pro é chamado antes do evento de formulário `On VP Ready` ser gerado.

> As áreas 4D View Pro são carregadas de forma assíncrona em formulários 4D. Isso significa que o evento padrão [On load](onLoad.md) formulário não pode ser usado para o código de inicialização do 4D View Pro, pois ele pode ser executado antes que a área seja completamente carregada. `Em VP Ready` é sempre gerado após [On load](onLoad.md).