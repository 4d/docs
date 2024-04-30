---
id: onTimer
title: On Timer
---

| Code | Puede ser llamado por | Definición                                                        |
| ---- | --------------------- | ----------------------------------------------------------------- |
| 27   | Formulario            | The number of ticks defined by the `SET TIMER` command has passed |

## Descripción

This event is generated only if the form method contains a previous call to the `SET TIMER` command.

When the `On Timer` form event property is selected, only the form method will receive the event, no object method will be called.
