---
id: propertiesPrint
title: Imprimir
---

## Impressão quadro

Essa propriedade trata do modo de impressão de objetos cujo tamanho pode variar de um registro para outro, dependendo do seu conteúdo. Estes objetos podem ser definidos para imprimir com uma moldura fixa ou variável. Os objetos de quadro fixo são impressos nos limites do objeto, conforme foi criado no formulário. Os objetos de quadro variável se expandem durante a impressão para incluir todo o conteúdo do objeto. Observe que a largura dos objetos impressos como um tamanho variável não é afetada por essa propriedade; somente a altura varia automaticamente com base no conteúdo do objeto.

Não é possível colocar mais de um objeto de quadro variável lado a lado em um formulário. Você pode colocar objetos de quadro não variável em ambos os lados de um objeto que será impresso com um tamanho variável, desde que o objeto de quadro variável tenha pelo menos uma linha a mais do que o objeto ao lado e que todos os objetos estejam alinhados na parte superior. Se essa condição não for respeitada, o conteúdo dos outros campos será repetido para cada fatia horizontal do objeto de quadro variável.

> Los comandos `objeto Print` y `Print form` no soportan esta propiedad.

As opções de impressão são:

- La opción **Variable** / **Imprimir marco variable** marcada: 4D amplía o reduce el área del objeto del formulario para imprimir todos los subregistros.

- **Opción fija (truncamiento)** / **Imprimir marco variable** no seleccionada: 4D sólo imprime el contenido que aparece en el área del objeto. O formulário só é impresso uma vez e os conteúdos não impressos são ignorados.

- **Fijo (Múltiples Registros)** (sólo subformularios): se mantiene el tamaño inicial del área del subformulario pero 4D imprime el formulario varias veces para imprimir todos los registros.

> Esta propiedad puede definirse por programación utilizando el comando `OBJECT SET PRINT VARIABLE FRAME`.

#### Gramática JSON

|    Nome    | Tipo de dados | Valores possíveis                                                              |
| :--------: | :-----------: | ------------------------------------------------------------------------------ |
| printFrame |     string    | "fixed", "variable", (apenas subformulário) "fixedMultiple" |

#### Objectos suportados

[Entrada](input_overview.md) - [Subformularios](subform_overview.md) (sólo subformularios lista) - [Áreas 4D Write Pro](writeProArea_overview.md)
