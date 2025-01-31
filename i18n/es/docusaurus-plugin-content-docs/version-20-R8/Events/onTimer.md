---
id: onTimer
title: On Timer
---

| Code | Puede ser llamado por | Definición                                                              |
| ---- | --------------------- | ----------------------------------------------------------------------- |
| 27   | Formulario            | El número de graduaciones definido por el comando `SET TIMER` ha pasado |

## Descripción

Este evento se genera sólo si el método formulario contiene una llamada previa al comando `SET TIMER`.

Cuando se selecciona la propiedad de evento formulario `On Timer`, sólo el método formulario recibirá el evento, no se llamará a ningún método objeto.
