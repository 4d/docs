---
id: onLongClick
title: On Long Click
---

| Code | Pode ser chamado por                    | Definição                                                                              |
| ---- | --------------------------------------- | -------------------------------------------------------------------------------------- |
| 39   | [Botão](FormObjects/button_overview.md) | Um botão é clicado e o botão do mouse permanece pressionado por um determinado período |

## Descrição

Esse evento é gerado quando um botão recebe um clique e o botão do mouse é mantido pressionado por um determinado período. Em teoria, o período pelo qual esse evento é gerado é igual ao período máximo de tempo que separa um clique duplo, conforme definido nas preferências do sistema.

Este evento pode ser gerado para os seguintes estilos de botão:

- [Barra de ferramentas](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Rounded Bevel](FormObjects/button_overview.md#rounded-bevel)
- [Gradiente OSX](FormObjects/button_overview.md#os-x-gradient)
- [OS X Textured](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Ajuda](FormObjects/button_overview.md#help)
- [Círculo](FormObjects/button_overview.md#circle)
- [Personalizado](FormObjects/button_overview.md#custom)

Este evento é geralmente usado para exibir menus pop-up em caso de clique longo no botão. O evento [`No Clicked`](onClicked.md), se ativado, é gerado se o usuário liberar o botão do mouse antes do limite de tempo de "clique longo".

### Veja também

[`On Alternative Click`](onAlternativeClick.md)
