---
id: onVpReady
title: On VP Ready
---

| Code | Pode ser chamado por                                    | Definição                                        |
| ---- | ------------------------------------------------------- | ------------------------------------------------ |
| 9    | [4D View Pro Area](FormObjects/viewProArea_overview.md) | O carregamento da área 4D View Pro está completo |

## Descrição

Este evento é gerado quando o carregamento da área 4D View Pro estiver completo.

Você precisa usar esse evento para escrever o código de inicialização da área. Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the `On VP Ready` form event of the area. Este evento formulário é acionado quando o carregamento da área estiver concluído. Testar esse evento garante que o código será executado em um contexto válido. An error is returned if a 4D View Pro command is called before the `On VP Ready` form event is generated.

> As áreas 4D View Pro são carregadas de forma assíncrona em formulários 4D. It means that the standard [On load](onLoad.md) form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. `On VP Ready` is always generated after [On load](onLoad.md).
