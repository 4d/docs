---
id: version-18R2_BETA-onActivate
title: On Activate
original_id: onActivate
---

| Code | Can be called by | Definition                                     |
| ---- | ---------------- | ---------------------------------------------- |
| 11   | フォーム             | The form's window becomes the frontmost window |


## 説明

If the window of a form was sent to the background, this event is called when the window becomes the frontmost window.

This event applies to the form as a whole and not to a particular object. Consequently, if the `On Activate` form event property is selected, only the form will have its form method called.