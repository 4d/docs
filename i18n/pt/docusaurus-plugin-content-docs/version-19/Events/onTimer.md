---
id: onTimer
title: On Timer
---

| Code | Pode ser chamado por | Definição                                                          |
| ---- | -------------------- | ------------------------------------------------------------------ |
| 27   | Formulário           | O número de graduações definido pelo comando `SET TIMER` já passou |


## Descrição

Este evento é gerado somente se o método do formulário contém uma chamada anterior para o comando `SET TIMER`.

Quando a propriedade do evento formulário `On Timer` é selecionada, apenas o método formulário receberá o evento, nenhum método objeto será chamado.