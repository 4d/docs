---
id: onOutsideCall
title: On Outside Call
---

| Code | Pode ser chamado por | Definição                                                 |
| ---- | -------------------- | --------------------------------------------------------- |
| 10   | Formulário           | El formulario ha recibido una llamada `POST OUTSIDE CALL` |

## Descrição

Este evento se llama cuando el formulario es llamado desde otro proceso a través del comando `POST OUTSIDE CALL`.

> El evento `On Outside Call` modifica el contexto de entrada del formulario. In particular, if a field was being edited, the [`On Data Change`](onDataChange.md) event is generated.
