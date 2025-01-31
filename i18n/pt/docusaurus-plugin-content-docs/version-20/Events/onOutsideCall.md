---
id: onOutsideCall
title: On Outside Call
---

| Code | Pode ser chamado por | Definição                                            |
| ---- | -------------------- | ---------------------------------------------------- |
| 10   | Formulário           | O formulário recebeu uma chamada `POST OUTSIDE CALL` |


## Descrição

Esse evento é chamado quando o formulário é chamado de outro processo por meio do comando `POST OUTSIDE CALL`.

> O evento `On Outside Call` modifica o contexto de entrada do formulário. Em particular, se um campo estava sendo editado, o evento [`On Data Change`](onDataChange.md) é gerado.

