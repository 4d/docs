---
id: onTimer
title: On Timer
---

| Code | Pode ser chamado por | Definição                                                          |
| ---- | -------------------- | ------------------------------------------------------------------ |
| 27   | Formulário           | O número de graduações definido pelo comando `SET TIMER` já passou |


## Descrição

This event is generated only if the form method contains a previous call to the `SET TIMER` command.

When the `On Timer` form event property is selected, only the form method will receive the event, no object method will be called.