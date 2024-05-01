---
id: print
title: Imprimir
---

## Settings

Permite definir os parâmetros de impressão específicos para o formulário. Esta funcionalidade é útil para visualizar os limites da página de impressão no editor de formulários.

> **Compatibility:** Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands `Print settings to BLOB`/`BLOB to print settings` which are more powerful.

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
