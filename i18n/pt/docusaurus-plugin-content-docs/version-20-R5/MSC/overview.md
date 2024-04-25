---
id: overview
title: CSM
sidebar_label: CSM
---

The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.

**Note:** The MSC window is not available from a 4D remote connection.

Existem várias maneiras de abrir a janela do CSM. The way it is accessed also determines the way the application project is opened: in “maintenance” mode or “standard” mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. No modo padrão, o projeto é aberto por 4D.

## Acesso no modo de manutenção

In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see [Feature availability](#feature-availability)).

É possível abrir o CSM em modo de manutenção a partir de dois locais:

- **From the standard project opening dialog box**
  The standard Open dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button:
  ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (project not open)\
  ![](../assets/en/MSC/mscicon.png)\
  When you call this function, a standard Open file dialog appears so that you can select the _.4DProject_ or _.4dz_ file of the to be examined. O projeto não será aberto por 4D.

## Acesso ao modo padrão

No modo standard, está aberto um projeto. Neste modo, algumas funções de manutenção não estão disponíveis. Existem várias possibilidades de acesso à janela do CSM:

- Use the **Help/Maintenance Security Center** menu or the **MSC** button in the 4D toolbar:\
  ![](../assets/en/MSC/mscicon.png)
- Use the “msc” standard action that it is possible to associate with a menu command or a form object.
- Use the `OPEN SECURITY CENTER` language command.

## Disponibilidade de funcionalidades

Certas funções do CSM não estão disponíveis dependendo do modo de abertura do CSM:

- Backup function is only available when the project is open (the MSC must have been opened in standard mode).
- Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode.
- In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see [Encrypt page](encrypt.md)). Caso contrário, os dados encriptados não são visíveis.
