---
id: overview
title: Visão Geral
sidebar_label: Visão Geral
---

The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.

**Note:** The MSC window is not available from a 4D remote connection.

There are several ways to open the MSC window. O modo de acesso também determina o modo de abertura do banco de dados: em modo "manutenção" ou em modo "padrão". Em modo manutenção, o banco não é aberto por 4D, só se oferecida sua referencia al CSM. Em modo padrão, o banco de dados é aberto por 4D.

## Display in maintenance mode

Em modo manutenção, só se mostra a janela de CSM (o banco de dados não é aberto pela aplicação 4D). Isso significa que bancos de dados que estão muito danificados para serem abertos em modo padrão por 4D podem, mesmo assim, ser acessados. Além disso, algumas operações (compactação, reparação, etc). exigem que o banco de dados se abra em modo manutenção (ver [Disponibilidade das funcionalidades](#feature-availability)).

You can open the MSC in maintenance mode from two locations:

- **From the standard database opening dialog box** The standard Open database dialog includes the **Maintenance Security Center** option from the menu associated with the **Open** button: ![](../assets/en/MSC/MSC_standardOpen.png)
- **Help/Maintenance Security Center** menu or **MSC** button in the tool bar (database not open)  
  ![](../assets/en/MSC/mscicon.png) When you call this function, a standard Open file dialog appears so that you can indicate the database to be examined. O banco de dados não será aberto por 4D.

## Display in standard mode

Em modo padrão, um banco de dados é aberto. In this mode, certain maintenance functions are not available. You have several possibilities for accessing the MSC window:

- Use the **Help/Maintenance Security Center** menu or the **MSC** button in the 4D toolbar:  
  ![](../assets/en/MSC/mscicon.png)
- Use a ação padrão Csm que é possível associar a um comando de menu ou a um objeto de formulário (ver seção "ações padrão").

- Use the `OPEN SECURITY CENTER` language command.

## Feature availability

Certain MSC functions are not available depending on the MSC opening mode:

- A função de backup - cópia de segurança - só está disponível quando o banco de dados estiver aberto (o CSM deve ter sido aberto em modo padrão).
- Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). Se essas funções forem tentadas enquanto o banco estiver aberto em modo padrão, um diálogo avisa que a aplicação será fechada e reiniciada em modo manutenção.
- In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see [Encrypt page](encrypt.md)). Otherwise, encrypted data is not visible.
