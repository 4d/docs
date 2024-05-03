---
id: onTimer
title: Sur minuteur
---

| Code | Peut être appelé par | Définition                                                        |
| ---- | -------------------- | ----------------------------------------------------------------- |
| 27   | Formulaire           | The number of ticks defined by the `SET TIMER` command has passed |

## Description

This event is generated only if the form method contains a previous call to the `SET TIMER` command.

When the `On Timer` form event property is selected, only the form method will receive the event, no object method will be called.
