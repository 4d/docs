---
id: print
title: Imprimir
---

## Settings

Permite definir los parámetros de impresión específicos para el formulario. Esta funcionalidad es útil para ver los límites de páginas de impresión en el editor de formularios.

> **Compatibility:** Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands `Print settings to BLOB`/`BLOB to print settings` which are more powerful.

Puede modificar los siguientes parámetros de impresión:

- Formato del papel
- Orientación del papel
- Escala de la página

> Las opciones disponibles dependen de la configuración del sistema.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                                                                                                    |
| ----------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageFormat  | object         | Propiedades de impresión disponibles: paperName, paperWidth, paperHeight, orientation, scale                                        |
| paperName   | string         | "A4", "US Letter"...                                                                                |
| paperWidth  | string         | Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm. |
| paperHeight | string         | Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm. |
| orientation | string         | "landscape" (por defecto es "portrait")                                                                                          |
| scale       | number         | mínimo: 0                                                                                                                           |

---
