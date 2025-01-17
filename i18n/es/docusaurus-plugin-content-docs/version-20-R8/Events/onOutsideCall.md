---
id: onOutsideCall
title: On Outside Call
---

| Code | Puede ser llamado por | Definición                                                |
| ---- | --------------------- | --------------------------------------------------------- |
| 10   | Formulario            | El formulario ha recibido una llamada `POST OUTSIDE CALL` |

## Descripción

Este evento se llama cuando el formulario es llamado desde otro proceso a través del comando `POST OUTSIDE CALL`.

> El evento `On Outside Call` modifica el contexto de entrada del formulario. En particular, si un campo estaba siendo editado, se genera el evento [`On Data Change`](onDataChange.md).
