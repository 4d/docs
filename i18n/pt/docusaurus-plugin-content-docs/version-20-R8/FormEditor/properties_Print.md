---
id: print
title: Imprimir
---

## Settings

Permite definir os parâmetros de impressão específicos para o formulário. Esta funcionalidade é útil para visualizar os limites da página de impressão no editor de formulários.

> **Compatibilidad:** aunque estos parámetros se tengan en cuenta cuando se imprime el formulario en modo Aplicación, se desaconseja confiar en esta funcionalidad para almacenar los parámetros de impresión del formulario, debido a las limitaciones relativas Es muy recomendable utilizar los comandos 4D `Print settings to BLOB`/`BLOB to print settings` que son más poderosos.

Pode modificar os seguintes parâmetros de impressão:

- Formato de papel
- Orientação do papel
- Escala de página

> As opções disponíveis dependem da configuração do sistema.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                                                                                                               |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageFormat  | object        | Propriedades de impressão disponíveis: paperName, paperWidth, paperHeight, orientation, scale                                                   |
| paperName   | string        | "A4", "US Letter"...                                                                                            |
| paperWidth  | string        | Utilizado se não tiver sido encontrado um papel com o nome paperName. Requer sufixo de unidade: pt, in, mm, cm. |
| paperHeight | string        | Utilizado se não tiver sido encontrado um papel com o nome paperName. Requer sufixo de unidade: pt, in, mm, cm. |
| orientation | string        | "landscape" (padrão é "retrato")                                                                                                             |
| scale       | number        | mínimo: 0                                                                                                                                       |

---
