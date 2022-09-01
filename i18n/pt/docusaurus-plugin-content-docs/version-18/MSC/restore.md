---
id: restore
title: Página de reparação
sidebar_label: Página de reparação
---

## Restaurar um backup

É possível restaurar manualmente um arquivo do banco de dados atual utilizando a página **Restaurar**. Essa página oferece várias opções que podem ser utilizadas para controlar a restauração do banco de dados:

![](../assets/en/MSC/MSC_restore.png)

> Os sistemas de recuperação automática de 4D restauram os bancos de dados e incluem o arquivo de histórico de dados quando for necessário.

A lista que se encontra na parte esquerda da janela mostra as cópias de segurança existentes do banco de dados. Também pode clicar no botão Browse/ Examinar... que se encontra logo abaixo da área para abrir qualquer outro arquivo de um local diferente. It is then added to the list of archives.

When you select a backup in this list, the right part of the window displays the information concerning this particular backup:

- **Path**: Complete pathname of the selected backup file. Clicking the Show button opens the backup file in a system window.
- **Date and Time**: Date and time of backup.
- **Content**: Contents of the backup file. Each item in the list has a check box next to it which can be used to indicate whether or not you want to restore it. You can also use the **Check All** or **Uncheck All** buttons to set the list of items to be restored.
- **Destination folder of the restored files**: Folder where the restored files will be placed. **Destination folder of the restored files**: Folder where the restored files will be placed. To change this location, click on **[...]** and specify the folder where you want the restored files to be placed.

The **Restore** button launches the manual restoration of the selected element(s).

## Integração sucessiva de vários arquivos de histórico de dados

A opção **Integrar um ou mais arquivos depois da restauração** permite integrar sucessivamente vários arquivos de registro de dados em um banco de dados. Se, por exemplo, tiver 4 arquivos de histórico (.4BL) correspondentes à 4 cópias de segurança do banco de dados, você pode restaurar o primeiro backup quando integrar os arquivos de histórico (data log) um por um. This means that you can, for example, recover a data file even when the last backup files are missing.

When this option is checked, 4D displays the standard Open file dialog box after the restore, which can be used to select journal file to be integrated. The Open file dialog box is displayed again after each integration until it is cancelled.

## Restauração de um banco de dados criptografado

Lembre que a chave de criptografia de dados (frase secreta) pode ter mudado entre as várias versões dos arquivos de backup (.4BK), arquivos .journal (.4BL) e a versão atual do banco de dados. Matching encryption keys must always be provided.

When restoring a backup and integrating the current log file in a encrypted database:

- If you restore a backup using an old passphrase, this passphrase will be required at the next database startup.
- After an encryption, when opening the encrypted data file, a backup is run and a new journal file is created. Thus, it is not possible to restore a .4BK file encrypted with one key and integrate .4BL files encrypted with another key.

The following sequence illustrates the principles of a multi-key backup/restore operation:

| Operação                    | Generated files                                   | Comentário                                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Novo banco de dados         |                                                   |                                                                                                                                                                                                                              |
| Add data (record # 1)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0000.4BL and 0001.4BK                             |                                                                                                                                                                                                                              |
| Add data (record # 2)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0001.4BL and 0002.4BK                             |                                                                                                                                                                                                                              |
| Add data (record # 3)       |                                                   |                                                                                                                                                                                                                              |
| Encrypt data file with key1 | 0003.4BK file (encrypted with key1)               | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Add data (record #4)        |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0003.4BL and 0004.4BK files (encrypted with key1) | We can restore 0003.4BK and integrate 0003.4BL                                                                                                                                                                               |
| Add data (record # 5)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0004.4BL and 0005.4BK files (encrypted with key1) | We can restore 0003.4BK and integrate 0003.4BL + 0004.4BL. We can restore 0004.4BK and integrate 0004.4BL                                                                                                                    |
| Add data (record # 6)       |                                                   |                                                                                                                                                                                                                              |
| Encrypt data file with key2 | 0006.4BK file (encrypted with key2)               | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Add data (record # 7)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0006.4BL and 0007.4BK files (encrypted with key2) | We can restore 0006.4BK and integrate 0006.4BL                                                                                                                                                                               |
| Add data (record # 8)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0007.4BL and 0008.4BK files (encrypted with key2) | We can restore 0006.4BK and integrate 0006.4BL + 0007.4BL. We can restore 0007.4BK and integrate 0007.4BL                                                                                                                    |
> When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated.
> 
> If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected.
