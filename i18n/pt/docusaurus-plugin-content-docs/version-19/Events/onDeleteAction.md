---
id: onDeleteAction
title: On Delete Action
---

| Code | Pode ser chamado por                                                                            | Definição                           |
| ---- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| 58   | [Lista hierárquica](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) | O utilizador tenta eliminar um item |


## Descrição

Este evento é gerado a cada vez que um usuário tenta excluir o(s) item(s) selecionado(s), pressionando uma tecla de exclusão (**Excluir** ou **Backspace**) ou selecionando um item de menu cuja ação padrão associada é 'Limpar' (como o comando **Limpar** no menu **Editar**).

Observa que gerar o evento é a única ação realizada pelo 4D: o programa não exclui nenhum item. Cabe ao desenvolvedor lidar com a exclusão e quaisquer mensagens de aviso prévias exibidas.
