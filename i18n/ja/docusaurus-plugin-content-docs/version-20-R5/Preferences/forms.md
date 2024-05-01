---
id: forms
title: フォームページ
---

このページでは、4Dフォームエディターのデフォルトの動作と表示を設定できます。

## 移動

このオプショングループでは、キーボードやマウスを使用してフォームエディター上のオブジェクトを移動する際のパラメーターを設定できます。

### キーボードを使用してステップ

This option allows setting the value (in points) of the step used for moving or resizing an object using the keyboard and the **Shift** key.

### ウィンドウの外に移動する場合

このオプションは、フォームエディターにおいてウィンドウの境界外にオブジェクトをマウスで移動した際の動作を設定します。

- **Autoscroll**: When this option is checked, this action causes the scroll of the form in the window, as if you clicked on the scroll bars. この動作は大きなフォーム内でオブジェクトを移動する際に便利です。
- **Start drag and drop**: When this option is checked, this action is interpreted as a drag and drop. フォームウィンドウは変更されず、移動されたオブジェクトは (たとえば他のフォームなど) 他のウィンドウにドロップできます (アクションに互換性がある場合)。 This behavior is useful for recycling objects among several forms or using object libraries (see [Creating and using custom object libraries](FormEditor/objectLibrary.md#creating-and-using-custom-object-libraries)).

作業慣習や開発ニーズに応じてこのオプションを設定できます。

### デフォルトで自動揃えを有効にする

このオプションはフォームエディターでの自動揃えを有効にします。 It is possible to modify this option individually in each window (refer to [Using the magnetic grid](FormEditor/formEditor.md#using-the-magnetic-grid)).

## 新フォームのデフォルト表示

- **Limits**, **Rulers**, ...: check items that must be displayed by default in each new window of the Form editor. It is possible to modify the display of each window individually using the **Display** hierarchical menu of the Form editor.
- **Color for marker lines**: modifies the color of the marker lines used in the Form editor to define the different areas (header, breaks, detail and footer, etc.). For more information about markers, refer to [Using output control lines](https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html).
- **Default display shield**: sets which shields to display by default in each new window of the Form editor. For more information about shields, refer to [Using shields](FormEditor/formEditor.md#using-shields).
