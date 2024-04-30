---
id: database
title: Página Base de dados
---

## Página de armazenamento de dados

Esta página é utilizada para configurar o armazenamento de dados no disco para a base de dados 4D.

### Parámetros generales

#### Permitir a utilização do ficheiro de dados só de leitura

This option allows configuration of the application operation when opening a locked data file at the operating system level. 4D includes a mechanism that automatically prevents the opening of a database when its data file, or one of its segments, is locked. In this case, when this detection option is activated, 4D displays a warning message and does not open the database:

![](../assets/en/settings/data-locked.png)

Unless this option is checked, it is not possible to open a database when its data file is locked (default operation for 4D databases).

#### Sobre ficheiros bloqueados

Os ficheiros bloqueados podem ser lidos, mas o seu conteúdo não pode ser modificado. For example, files are locked when they are stored on a non-rewritable support (DVD type) or when they are copied from this type of support. 4D can work in a transparent manner with locked data files, which allows, more particularly, the use of projects stored on DVD. However, this operation runs the risk of inadvertent use of a locked data file in which modifications will not be saved. This is why by default 4D does not allow databases with a locked data file to be opened.

### Localização da pasta temporária

This area lets you change the location of temporary files created while 4D is running. The temporary files folder is used by the application, when necessary, to temporarily save the data in memory to disk.

The current location of this folder is displayed in the "Current:" area. Você pode clicar nessa área para mostrar o nome do caminho como uma lista suspensa:

![](../assets/en/settings/temporary-file-location.png)

São oferecidos três opções de localização:

- **System**: When this option is selected, the 4D temporary files are created in a folder placed at the location specified by Windows and/or macOS. You can find out the current location defined by your system using the [`Temporary folder`](https://doc.4d.com/4dv19R/help/command/en/page486.html) 4D command. The files are put into a subfolder whose name consists of the database name and a unique identifier.
- **Data File Folder** (default option): When this option is selected, the 4D temporary files are created in a folder named "temporary files" located at the same level as the data file of the database.
- **User Defined**: This option is used to set a custom location. If the location option is modified, it will be necessary to restart the database in order for the new option to be taken into account. 4D verifica se a pasta selecionada pode ser acedida por escrita. If this is not the case, the application tries other options until a valid folder is found.

> This option is stored in the "extra properties" of the structure that is available when the structure definition is exported in XML (see [Exporting and importing structure definitions](https://doc.4d.com/4Dv19/4D/19/Exporting-and-importing-structure-definitions.300-5416829.en.html)).

### Comparação de textos

> If you change one of these options, you have to quit and reopen the database to make the change effective. Quando a base de dados é reaberta, todos os índices da base de dados são automaticamente reindexados.

- **Consider @ as a wildcard only when at the beginning or end of text patterns**: Allows you to set how the at sign "@" will be interpreted when used in a query or a character string comparison, when it is located in a word.
  When this option is not checked (default value), the at sign is used as the wildcard character, in other words, it replaces any character (see [Wildcard character (@)](https://doc.4d.com/4Dv19/4D/19/Query-editor.300-5416813.en.html#463876)).

  When the option is checked, the at sign is regarded as a simple character if it is located within a word. This setting is especially useful when searching for E-mail addresses, where the @ sign is used internally. This option has an influence on searches, sorts, string comparisons, as well as on data stored in tables and data found in memory, like arrays. Fields and variables of the alpha (indexed or not) and text type are concerned by how the @ character is interpreted in searches and sorts.

  **Notas:**

  - For searches, if the search criteria begins or ends with @, the "@" character will be treated as a wildcard. Only if the "@" character is placed in the middle of a word (for example: bill@cgi.com) does 4D treat it differently.
  - This option can also have an influence on the behavior of the commands in the [Objects (Forms)](https://doc.4d.com/4Dv19/4D/19/Objects-Forms.201-5391558.en.html) theme that accept the wildcard character ("@") in the object parameter.
  - For security reasons, only the Administrator or Designer of the database can modify this parameter.

- **Current data language:** Used to configure the language used for character string processing and comparison. A escolha do idioma influencia diretamente a classificação e a pesquisa de texto, bem como as letras maiúsculas e minúsculas, mas não afeta a tradução de textos nem os formatos de data, hora ou moeda, que permanecem no idioma do sistema. Por padrão, 4D usa a linguagem do sistema.

  Um projeto 4D pode, portanto, operar em uma linguagem diferente da do sistema. When a project is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the project engine or the language, are done in the same language.

  > You can modify this setting in the application Preferences (see [General Page](../Preferences/general.md)). In this case, the setting applies to all the new databases created by 4D.

- **Consider only non-alphanumeric chars for keywords**: Modifies the algorithm used by 4D to identify keyword separators and hence build their indexes. By default, when this option is not checked, 4D uses a sophisticated algorithm that takes linguistic characteristics into account.

  This algorithm is similar to the one used by word-processing software to determine the boundaries when selecting a word that is double-clicked. For more information about this algorithm, refer to the following address: `http://userguide.icu-project.org/boundaryanalysis`.

  Quando esta opção está selecionada, 4D utiliza um algoritmo simplificado. In this configuration, any non-alphanumeric character (i.e., not a letter or a number) is considered as a keyword separator. This setting meets specific requirements associated with certain languages such as Japanese.

- **Sorting order appropriate for searching**: This option is only displayed when the Japanese language is selected. Modifies the interpretation of characters such as the "Katakana-Hiragana Prolonged Sound Mark" or "長音記号" or the "Japanese Iteration Marks" such as "ゝ" or "ゞ". Typical Japanese speaker is likely to prefer the results when the setting is enabled.

#### Suporte do MeCab (versão japonesa)

On Japanese systems, 4D supports the _MeCab_ library, with a indexing algorithm for keywords that is particularly suited for the Japanese language.

Este algoritmo é usado por defeito nas versões japonesas de 4D. If needed, you can disable the use of the _MeCab_ algorithm and use the conventional _ICU_ library.

To disable _MeCab_, just check the **Consider only non-alphanumeric chars for keywords** option:

![](../assets/en/settings/non-alphanumeric-chars.png)

## Página Memória

You use the settings on this tab to configure the cache memory for the database.

### Parâmetros da cache do banco de dados

- **Calculation of adaptive cache**: When this option is checked, management of the memory cache is done dynamically by the system --- respecting limits that you set. This allows configuration of a high performance memory cache adapted to most configurations. The size of the memory cache is then calculated dynamically depending on set parameters. Os valores oferecidos por defeito correspondem à utilização normal de 4D.

  - **Memory to be reserved for other applications and for the system**: Portion of the RAM memory to reserve for the System and other applications. This value is increased for optimization when other applications are running on the same machine as 4D.
  - **Percentage of available memory used for cache**: Percentage of the remaining memory allocated to the cache by default.\
    To obtain the size allocated by default to the cache, simply perform the following calculation: (Physical memory -- Physical memory to be reserved) X Percentage of the memory used for the cache. In the adaptive mode, the size of the memory cache varies dynamically depending on the needs of the application and the system. Pode definir limites utilizando as duas opções seguintes:
  - **Minimum Size**: Minimum amount of memory that must be reserved for the cache. Este valor não pode ser inferior a 100 MB.
  - **Maximum Size**: Maximum amount of memory that can be used by the cache. This value is virtually unlimited.\\
    Setting limits is particularly useful for databases that are distributed on machines for which you do not know the memory configuration a priori. Nesse caso, os limites definidos garantem um desempenho mínimo em todos os casos. O diagrama seguinte ilustra este comportamento:

  Example for calculating cache memory:
  _Physical memory to reserve = 256 MB
  Percentage of the available memory used for the cache = 50%
  Maximum size = 1 GB Minimum size = 128 MB_

  ![](../assets/en/settings/memory-maximum-size.png)

- **Calculation of adaptive cache not checked**:  this mode, you set the size of the memory cache for the database yourself. 4D then displays an entry area that allows setting the memory cache to use as well as information related to the physical memory (RAM available on the machine), the current cache and cache after restart (taking your changes into account).

  The size of the memory cache that you enter will be reserved for the 4D database, regardless of the state of machine resources. This setting can be used in certain specific configurations, or when the database is designed to be used on dissimilar systems in terms of memory. Geralmente, a cache adaptativa oferece um melhor desempenho.

- **Flush Cache every ... Seconds/Minutes**: Specifies the time period between each automatic saving of the data cache, i.e., its writing to disk.
  4D salva os dados colocados no cache em intervalos regulares. Você pode especificar qualquer intervalo de tempo entre 1 segundo e 500 minutos. Por padrão, 4D salva seus dados a cada 20 segundos. The application also saves your data to disk each time you change to another environment or exit the application. You can also call the [FLUSH CACHE](https://doc.4d.com/4dv19R/help/command/en/page297.html) command to trigger the flush at any moment.

  When you anticipate heavy data entry, consider setting a short time interval between saves. In case of a power failure, you will only lose the data entered since the previous save (if the database is running without a log file).

  If there is a noticeable slowing down of the database each time the cache is flushed, you need to adjust the frequency. Essa lentidão significa que uma grande quantidade de registros está sendo salva. A shorter period between saves would therefore be more efficient since each save would involve fewer records and hence be faster.

  Por padrão, 4D exibe uma pequena janela quando o cache é liberado. If you do not want this visual reminder, you can uncheck the **Flushing progress** option on the [Interface page](./interface.md).
