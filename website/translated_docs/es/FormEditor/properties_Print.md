---
id: print
title: Imprimir
---


## Settings

Allows defining specific print settings for the form. This feature is useful to view printing page limits in the form editor.

> **Compatibility:** Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands `Print settings to BLOB`/`BLOB to print settings` which are more powerful.

You can modify the following print settings:

*   Formato del papel
*   Orientación del papel
*   Escala de la página


> Available options depend on the system configuration.




#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                                     |
| ----------- | -------------- | ------------------------------------------------------------------------------------ |
| pageFormat  | objeto         | Available print properties: paperName, paperWidth, paperHeight, orientation, scale   |
| paperName   | cadena         | "A4", "US Letter"...                                                                 |
| paperWidth  | cadena         | Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm. |
| paperHeight | cadena         | Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm. |
| orientation | cadena         | "landscape" (por defecto es "portrait")                                              |
| scale       | number         | mínimo: 0                                                                            |


---








