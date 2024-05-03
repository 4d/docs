---
id: print
title: Imprimer
---

## Settings

Permet de définir des paramètres d'impression spécifiques pour le formulaire. Cette fonctionnalité est utile pour afficher les limites de pages d'impression dans l'éditeur de formulaire.

> **Compatibility:** Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands `Print settings to BLOB`/`BLOB to print settings` which are more powerful.

You can modify the following print settings:

- Paper format
- Paper orientation
- Page scaling

> Available options depend on the system configuration.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                                                                                                    |
| ----------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| pageFormat  | object          | Available print properties: paperName, paperWidth, paperHeight, orientation, scale                                   |
| paperName   | string          | "A4", "US Letter"...                                                                 |
| paperWidth  | string          | Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm. |
| paperHeight | string          | Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm. |
| orientation | string          | "landscape" (default is "portrait")                                                                               |
| scale       | number          | minimum : 0                                                                                                          |

---
