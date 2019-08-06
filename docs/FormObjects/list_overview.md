---
id: listOverview
title: Hierarchical List
---

## Overview

A hierarchical list associates a sublist with each item of the list. It is a set of possible values for a field or enterable object. It can be used to:

*	Provide the user choices from which to select an entry for a field or enterable object,
*	Restrict the valid entries to those in the list,
*	Exclude the entries in the list from being entered.

4D lets you associate a small icon with each item in a hierarchical list. Where appropriate, the small icon is displayed to the left of the item. 

You can also use lists to provide restrictions on data entry. One list may provide the required values for a field, excluding all others. Another list may provide the excluded values for a field, preventing any value in the list from being entered.

Your lists can offer up to 8,000 choices in a single database and the maximum length of each item is 2 billion characters.

Lists are often used in methods. For example, a list is a convenient place to store the elements of an array. An array stores a list of values in memory. You can use lists to store the elements of hierarchical lists. You transfer the contents of the list to the interface object using a method or by assigning the list to the object in the Property List window.

You create 4D lists with the Lists editor found in the tool box.

>**Note for 4D Server**: Object locking occurs when two or more users attempt to modify the same list at the same time. If a user is modifying a list in the Design environment, the list is locked. Other users cannot modify the list, the list name, or any of the items in the list, until the first user frees the list by closing it.

While hierarchical pop-up menus are limited to two levels, objects of the hierarchical list type are not limited.

You can expand or collapse the hierarchical list by clicking on the triangular icons.

You can control whether an item in a hierarchical list can be modified by the user. If an item in a hierarchical list is modifiable, the user can edit it by using the **Alt+click**(Windows) / **Option+click** (macOS) shortcut, or by carrying out a long click on the text of the item. If you populate a hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the Modifiable Element option in the Lists editor. For more information, see [Setting list properties](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).

Hierarchical lists are managed using the [Hierarchical list](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) commands in the language. The principle consists in assigning the hierarchical list reference to the variable associated with the object in the Form editor. For more information, see the Hierarchical Lists chapter of the *4D Language Reference* manual.

You can also associate hierarchical list references with form object choice lists (sources, required values and excluded values) using the [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-LIST-BY-REFERENCE.301-4311390.en.html) or [OBJECT SET LIST BY NAME](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-LIST-BY-NAME.301-4311380.en.html) command.

