---
id: propertiesPrint
title: Imprimir
---

## Impressão quadro

Essa propriedade trata do modo de impressão de objetos cujo tamanho pode variar de um registro para outro, dependendo do seu conteúdo. Estes objetos podem ser definidos para imprimir com uma moldura fixa ou variável. Os objetos de quadro fixo são impressos nos limites do objeto, conforme foi criado no formulário. Os objetos de quadro variável se expandem durante a impressão para incluir todo o conteúdo do objeto. Observe que a largura dos objetos impressos como um tamanho variável não é afetada por essa propriedade; somente a altura varia automaticamente com base no conteúdo do objeto.

Não é possível colocar mais de um objeto de quadro variável lado a lado em um formulário. Você pode colocar objetos de quadro não variável em ambos os lados de um objeto que será impresso com um tamanho variável, desde que o objeto de quadro variável tenha pelo menos uma linha a mais do que o objeto ao lado e que todos os objetos estejam alinhados na parte superior. Se essa condição não for respeitada, o conteúdo dos outros campos será repetido para cada fatia horizontal do objeto de quadro variável.

> Os comandos `objeto Print` e `Print form` não são compatíveis com essa propriedade.

As opções de impressão são:

- opção **Variable** / **Imprimir quadro Variable** marcada: 4D amplia ou reduz a área do objeto do formulário para imprimir todos os sub-registros.

- Opção **Fixo (truncamento)** / **Imprimir quadro variável** desmarcada: 4D imprime apenas o conteúdo que aparece na área do objeto. O formulário só é impresso uma vez e os conteúdos não impressos são ignorados.

- **Fixo (Vários Registros)** (subformulários somente): o tamanho inicial da área de subformulário é mantido, mas a 4D imprime o formulário várias vezes, de modo a imprimir todos os registros.

> Essa propriedade pode ser definida por programação usando o comando `OBJECT SET PRINT VARIABLE FRAME`.

#### Gramática JSON

|    Nome    | Tipo de dados | Valores possíveis                                           |
|:----------:|:-------------:| ----------------------------------------------------------- |
| printFrame |    string     | "fixed", "variable", (apenas subformulário) "fixedMultiple" |

#### Objectos suportados

[Entrada](input_overview.md) - [Subformulários](subform_overview.md) (somente subformulários lista) - [Áreas 4D Write Pro](writeProArea_overview.md)
