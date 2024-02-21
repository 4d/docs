---
id: onDeactivate
title: On Deactivate
---

| Code | Pode ser chamado por | Definição                                                  |
| ---- | -------------------- | ---------------------------------------------------------- |
| 12   | Formulário           | A janela do formulário deixa de ser a janela mais à frente |


## Descrição

Se a janela de um formulário for a janela mais à frente, esse evento será chamado quando a janela for enviada para o segundo plano.

Este evento aplica-se ao formulário como um todo e não a um objecto específico. Consequentemente, se a propriedade de evento de formulário `On Deactivate` for selecionada, somente o formulário terá seu método formulário chamado.

### Veja também
[On Activate](onActivate.md)