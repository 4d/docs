---
id: overview
title: Overview
sidebar_label: Overview
---

The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.

**Note:** The MSC window is not available from a 4D remote connection.

There are several ways to open the MSC window. The way it is accessed also determines the way the database is opened: in “maintenance” mode or “standard” mode. In maintenance mode, the database is not opened by 4D, only its reference is provided to the MSC. In standard mode, the database is opened by 4D.

## Display in maintenance mode

In maintenance mode, only the MSC window is displayed (the database is not opened by the 4D application). This means that databases that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the database to be opened in maintenance mode (see [Feature availability](#feature-availability)).

You can open the MSC in maintenance mode from two locations:

- **From the standard database opening dialog box** The standard Open database dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (database not open)  
  ![](../assets/en/MSC/mscicon.png) When you call this function, a standard Open file dialog appears so that you can indicate the database to be examined. The database will not be opened by 4D.

## Display in standard mode

In standard mode, a database is open. In this mode, certain maintenance functions are not available. You have several possibilities for accessing the MSC window:

- Use the **Help/Maintenance Security Center** menu or the **MSC** button in the 4D toolbar:  
  ![](../assets/en/MSC/mscicon.png)
- Use the “msc” standard action that it is possible to associated with a menu command or a form object (see "Standard actions" section).

- Use the `OPEN SECURITY CENTER` language command.

## Feature availability

Certain MSC functions are not available depending on the MSC opening mode:

- Backup function is only available when the database is open (the MSC must have been opened in standard mode).
- Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). If these functions are tried while the database is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode.
- In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see [Encrypt page](encrypt.md)). Otherwise, encrypted data is not visible.
