---
id: version-18R2_BETA-onActivate
title: On Activate
original_id: onActivate
---

| Code | Can be called by | Definition                                     |
| ---- | ---------------- | ---------------------------------------------- |
| 11   | Formular         | The form's window becomes the frontmost window |


## Description

If the window of a form was sent to the background, this event is called when the window becomes the frontmost window.

This event applies to the form as a whole and not to a particular object. Consequently, if the `On Activate` form event property is selected, only the form will have its form method called.