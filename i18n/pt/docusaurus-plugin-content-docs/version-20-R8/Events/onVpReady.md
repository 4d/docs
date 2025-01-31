---
id: onVpReady
title: On VP Ready
---

| Code | Pode ser chamado por                                    | Definição                                        |
| ---- | ------------------------------------------------------- | ------------------------------------------------ |
| 9    | [Área 4D View Pro](FormObjects/viewProArea_overview.md) | O carregamento da área 4D View Pro está completo |

## Descrição

Este evento é gerado quando o carregamento da área 4D View Pro estiver completo.

Você precisa usar esse evento para escrever o código de inicialização da área. Todo código de inicialización de área 4D View Pro, para cargar o leer valores desde o en el área, debe ubicarse en el evento formulario `On VP Ready` del área. Este evento formulário é acionado quando o carregamento da área estiver concluído. Testar esse evento garante que o código será executado em um contexto válido. Se devuelve un error si se llama a un comando 4D View Pro antes de que se genere el evento formulario `On VP Ready`.

> As áreas 4D View Pro são carregadas de forma assíncrona em formulários 4D. Esto significa que el evento formulario estándar [On load](onLoad.md) no puede utilizarse para el código de inicialización de 4D View Pro, ya que podría ejecutarse antes de que se complete la carga del área. `On VP Ready` siempre se genera después de [On load](onLoad.md).
