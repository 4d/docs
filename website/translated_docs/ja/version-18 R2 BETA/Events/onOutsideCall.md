---
id: version-18R2_BETA-onOutsideCall
title: On Outside Call
original_id: onOutsideCall
---

| Code | Can be called by | Definition                                   |
| ---- | ---------------- | -------------------------------------------- |
| 10   | フォーム             | The form received a `POST OUTSIDE CALL` call |


## 説明

This event is called when the form is called from another process through the `POST OUTSIDE CALL` command.

> The `On Outside Call` event modifies the entry context of the receiving input form. In particular, if a field was being edited, the [`On Data Change`](onDataChange.md) event is generated.