---
id: version-18R2_BETA-onResize
title: On Resize
original_id: onResize
---

| Code | Can be called by | Definition                                                                                                                            |
| ---- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 29   | フォーム             | The form's window is resized or the subform object is resized (in this case the event is generated in the form method of the subform) |


## 説明

This event is called:

- when the window of the form is resized,
- in the context of subforms, when the size of the subform object in the parent form has changed. In this this case, this event is sent to the subform form method.