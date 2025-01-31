---
id: onPageChange
title: On Page Change
---

| Code | Pode ser chamado por | Definição                               |
| ---- | -------------------- | --------------------------------------- |
| 56   | Formulário           | A página atual do formulário é alterada |


## Descrição

Este evento só está disponível no nível do formulário (ele é chamado no método formulário). É gerado a cada vez que a página atual do formulário muda (após uma chamada para o comando `FORM GOTO PAGE` ou uma ação de navegação padrão).

Note que é gerado depois que a página é totalmente carregada, ou seja, dado que todos os objetos que contém são inicializados, incluindo [áreas Web](FormObjects/webArea_overview.md).

> A única exceção são as áreas 4D View Pro, para as quais você precisa chamar o evento específico [On VP Ready](onVpReady.md).

O evento `On Page Change` é útil para executar um código que requer que todos os objetos sejam inicializados previamente. Você também pode usá-lo para otimizar a aplicação executando o código (por exemplo, uma busca) somente após uma página específica do formulário ser exibida e não assim que a página 1 for carregada. Se o usuário não for a esta página, o código não é executado.