---
id: onDeleteAction
title: On Delete Action
---

| Code | Pode ser chamado por                                                                           | Definição                           |
| ---- | ---------------------------------------------------------------------------------------------- | ----------------------------------- |
| 58   | [Lista jerárquica](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) | O utilizador tenta eliminar um item |

## Descrição

Este evento é gerado a cada vez que um usuário tenta excluir o(s) item(s) selecionado(s), pressionando uma tecla de exclusão (**Excluir** ou **Backspace**) ou selecionando um item de menu cuja ação padrão associada é 'Limpar' (como o comando **Limpar** no menu **Editar**).

Note that generating the event is the only action carried out by 4D: the program does not delete any items. It is up to the developer to handle the deletion and any prior warning messages that are displayed.
