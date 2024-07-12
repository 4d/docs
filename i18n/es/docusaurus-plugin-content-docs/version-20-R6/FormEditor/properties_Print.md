---
id: print
title: Imprimir
---

## Settings

Permite definir los parámetros de impresión específicos para el formulario. Esta funcionalidad es útil para ver los límites de páginas de impresión en el editor de formularios.

> **Compatibilidad:** aunque estos parámetros se tengan en cuenta cuando se imprime el formulario en modo Aplicación, se desaconseja confiar en esta funcionalidad para almacenar los parámetros de impresión del formulario, debido a las limitaciones relativas Es muy recomendable utilizar los comandos 4D `Print settings to BLOB`/`BLOB to print settings` que son más poderosos.

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
