---
id: version-18R2_BETA-onMenuSelected
title: On Menu Selected
original_id: onMenuSelected
---

| Code | Can be called by | Definition                                             |
| ---- | ---------------- | ------------------------------------------------------ |
| 18   | フォーム             | A menu item has been chosen in the associated menu bar |


## 説明

The `On Menu Selected` event is sent to the form method when a command of a menu bar associated to the form is selected. You can then call the `Menu selected` language command to test the selected menu.

> You can associate a menu bar with a form in the Form properties. The menus on a form menu bar are appended to the current menu bar when the form is displayed as an output form in the Application environment.