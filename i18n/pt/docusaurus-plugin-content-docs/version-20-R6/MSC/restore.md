---
id: restore
title: Página Restauração
sidebar_label: Página Restauração
---

Puede restaurar manualmente un archivo de la aplicación actual utilizando la página **Restaurar**. This page provides several options that can be used to control the restoration:

![](../assets/en/MSC/MSC_restore.png)

> 4D automatic recovery systems restore applications and include data log file when necessary.

The list found in the left part of the window displays any existing backups of the application. También puede hacer clic en el botón **Navegar...** que se encuentra justo debajo del área para abrir cualquier otro archivo de una ubicación diferente. É então acrescentado à lista de arquivos.

When you select a backup in this list, the right part of the window displays the information concerning this particular backup:

- **Ruta**: ruta de acceso completa del archivo de copia de seguridad seleccionado. Clicar no botão Mostrar abre o ficheiro de cópia de segurança numa janela do sistema.
- **Fecha y hora**: fecha y hora de la copia de seguridad.
- **Contenido**: contenido del archivo de copia de seguridad. Each item in the list has a check box next to it which can be used to indicate whether or not you want to restore it. También puede utilizar los botones **Seleccionar todo** o **Deseleccionar todo** para definir la lista de los elementos que deben restaurarse.
- **Carpeta de destino de los archivos restaurados**: carpeta donde se colocarán los archivos restaurados. By default, 4D restores the files in a folder named “Archivename” (no extension) that is placed next to the Project folder. Para cambiar esta ubicación, haga clic en **[...]** y designe la carpeta en la que desea colocar los archivos restaurados.

El botón **Restaurar** lanza la restauración manual del elemento o elementos seleccionados.

## Integração sucessiva de vários ficheiros de histórico

La opción **Integrar uno o varios archivos de historial tras la restauración** permite integrar sucesivamente varios archivos de registro de datos en una aplicación. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. This means that you can, for example, recover a data file even when the last backup files are missing.

When this option is checked, 4D displays the standard Open file dialog box after the restore, which can be used to select journal file to be integrated. The Open file dialog box is displayed again after each integration until it is cancelled.

## Restaurar uma base de dados encriptada

Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. Devem ser sempre fornecidas chaves de encriptação correspondentes.

When restoring a backup and integrating the current log file in a encrypted database:

- If you restore a backup using an old passphrase, this passphrase will be required at the next database startup.
- After an encryption, when opening the encrypted data file, a backup is run and a new journal file is created. Thus, it is not possible to restore a .4BK file encrypted with one key and integrate .4BL files encrypted with another key.

A sequência seguinte ilustra os princípios de uma operação com várias chaves de backup/restauro:

| Operação                                         | Ficheiros gerados                                                                                       | Comentário                                                                                                                                                                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Novo ficheiro de dados                           |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Adicionar dados (registo # 1) |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Cópia de segurança do banco de dados             | 0000.4BL e 0001.4BK                                                     |                                                                                                                                                                                                                                                                                    |
| Adicionar dados (registo # 2) |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Cópia de segurança do banco de dados             | 0001.4BL e 0002.4BK                                                     |                                                                                                                                                                                                                                                                                    |
| Adicionar dados (registo # 3) |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Criptografar um arquivo de dados com key1        | Ficheiro 0003.4BK (encriptado com key1)                              | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Adicionar dados (registo #4)  |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Cópia de segurança do banco de dados             | Ficheiros 0003.4BL e 0004.4BK (encriptados com key1) | Podemos restaurar 0003.4BK e integrar 0003.4BL                                                                                                                                                                                                     |
| Adicionar dados (registo # 5) |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Cópia de segurança do banco de dados             | Ficheiros 0004.4BL e 0005.4BK (encriptados com key1) | Podemos restaurar 0003.4BK e integrar 0003.4BL + 0004.4BL. Podemos restaurar 0004.4BK e integrar 0004.4BL                                                                          |
| Adicionar dados (registo # 6) |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Encriptação de um arquivo de dados com key2      | Ficheiro 0006.4BK (encriptado com key2)                              | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Adicionar dados (registo # 7) |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Cópia de segurança do banco de dados             | Ficheiros 0006.4BL e 0007.4BK (encriptados com key2) | Podemos restaurar 0006.4BK e integrar 0006.4BL                                                                                                                                                                                                     |
| Adicionar dados (registo # 8) |                                                                                                         |                                                                                                                                                                                                                                                                                    |
| Cópia de segurança do banco de dados             | Ficheiros 0007.4BL e 0008.4BK (encriptados com key2) | Podemos restaurar 0006.4BK e integrar 0006.4BL + 0007.4BL. Podemos restaurar 0007.4BK e integrar 0007.4BL                                                                          |

> When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated.
>
> If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected.
