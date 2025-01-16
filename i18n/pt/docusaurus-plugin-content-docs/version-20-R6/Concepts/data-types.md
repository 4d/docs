---
id: data-types
title: Tipos de dados
---

Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.

Apesar de geralmente serem equivalentes, alguns tipos de dados disponíveis no nível do banco de dados não estão diretamente disponíveis na linguagem e são convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados através da linguagem. A tabela lista todos os tipos de dados disponíveis e sua compatibilidade/declarações:

| Tipos de dados                                          | Suporte para o banco (1) | Suporte Linguagem       | [Declaração `var`] (variables.md#using-the-var-keyword) | Declaração [`C_` ou `ARRAY`] (variables.md#using-a-c_-directive) |
| ------------------------------------------------------- | ------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Alfanumérico](dt_string.md)                            | Sim                                         | Convertido em texto     | -                                                                                                                                              | -                                                                                                                                                                            |
| [Text](Concepts/dt_string.md)                           | Sim                                         | Sim                     | `Text`                                                                                                                                         | `C_TEXT`, `ARRAY TEXT`                                                                                                                                                       |
| [Date](Concepts/dt_date.md)                             | Sim                                         | Sim                     | `Date`                                                                                                                                         | `C_DATE`, `ARRAY DATE`                                                                                                                                                       |
| [Time](Concepts/dt_time.md)                             | Sim                                         | Sim                     | `Time`                                                                                                                                         | `C_TIME`, `ARRAY TIME`                                                                                                                                                       |
| [Boolean](Concepts/dt_boolean.md)                       | Sim                                         | Sim                     | `Boolean`                                                                                                                                      | `C_BOOLEAN`, `ARRAY BOOLEAN`                                                                                                                                                 |
| [Integer](Concepts/dt_number.md)                        | Sim                                         | Convertido para longInt | `Integer`                                                                                                                                      | `ARRAY INTEGER`                                                                                                                                                              |
| [Longint](Concepts/dt_number.md)                        | Sim                                         | Sim                     | `Integer`                                                                                                                                      | `C_LONGINT`, `ARRAY LONGINT`                                                                                                                                                 |
| [Longint 64 bits](Concepts/dt_number.md)                | Sim (SQL)                | Convertido para real    | -                                                                                                                                              | -                                                                                                                                                                            |
| [Real](Concepts/dt_number.md)                           | Sim                                         | Sim                     | `Real`                                                                                                                                         | `C_REAL`, `ARRAY REAL`                                                                                                                                                       |
| [Undefined](Concepts/dt_null_undefined.md)              | -                                           | Sim                     | -                                                                                                                                              | -                                                                                                                                                                            |
| [Null](Concepts/dt_null_undefined.md)                   | -                                           | Sim                     | -                                                                                                                                              | -                                                                                                                                                                            |
| [Ponteiro](Concepts/dt_pointer.md)                      | -                                           | Sim                     | `Pointer`                                                                                                                                      | `C_POINTER`, `ARRAY POINTER`                                                                                                                                                 |
| [Picture](Concepts/dt_picture.md)                       | Sim                                         | Sim                     | `Picture`                                                                                                                                      | `C_PICTURE`, `ARRAY PICTURE`                                                                                                                                                 |
| [BLOB](Concepts/dt_blob.md)                             | Sim                                         | Sim                     | `Blob`, `4D.Blob`                                                                                                                              | `C_BLOB`, `ARRAY BLOB`                                                                                                                                                       |
| [Object](Concepts/dt_object.md)                         | Sim                                         | Sim                     | `Object`                                                                                                                                       | `C_OBJECT`, `ARRAY OBJECT`                                                                                                                                                   |
| [Coleção](Concepts/dt_collection.md)                    | -                                           | Sim                     | `Collection`                                                                                                                                   | `C_COLLECTION`                                                                                                                                                               |
| [Variant](Concepts/dt_variant.md)(2) | -                                           | Sim                     | `Variant`                                                                                                                                      | `C_VARIANT`                                                                                                                                                                  |

(1) Note que ORDA maneja campos de bancos de dados através de objetos (entidades) e assim, só é compatível com tipos de dados disponíveis a esses objetos. Para obter mais informações, consulte a descrição do tipo de dados [Object] (Concepts/dt_object.md).

(2) Na verdade, a variante não é um tipo de *dado*, mas um tipo de *variável* que pode conter um valor de qualquer outro tipo de dado.

## Valor padrão

Quando as [variáveis](variables.md) ou os [parâmetros](parameters.md) são digitados por meio de uma [declaração explícita](variables.md#declaring-variables), eles recebem um valor padrão, que manterão durante a sessão, desde que não tenham sido atribuídos.

O valor por defeito depende do tipo de variável:

| Tipo         | Valor padrão                             |
| ------------ | ---------------------------------------- |
| Booleano     | False                                    |
| Date         | 00-00-00                                 |
| Integer      | 0                                        |
| Hora         | 00:00:00 |
| Imagem       | tamanho da imagem=0                      |
| Real         | 0                                        |
| Ponteiro     | Nil=true                                 |
| Text         | ""                                       |
| Blob         | Tamanho do Blob =0                       |
| Object       | null                                     |
| Collection   | null                                     |
| Diferente de | indefinido                               |

### Null como valor padrão

As variáveis do tipo Object, Collection, Pointer e Picture têm **null** como valor padrão, mas na verdade recebem um status intermediário quando são declaradas e não atribuídas. Eles *se comportam como* valores **null**, mas com algumas diferenças, gerar menos erros quando o código tenta acessá-los.

## Conversão de tipos de dados

A linguagem 4D contém operadores e comandos para converter entre tipos de dados, onde tais conversões são significativas. A língua 4D obriga à verificação do tipo de dados. Por exemplo, não se pode escrever: "abc"+0.5+!12/25/96!-?00:30:45?. Isto irá gerar erros de sintaxe.

O quadro seguinte lista os tipos de dados básicos, os tipos de dados para os quais podem ser convertidos, e os comandos utilizados para o fazer:

| Tipo de dados a converter     | para String | para Número | para Data | para Tempo | para Booleano |
| ----------------------------- | ----------- | ----------- | --------- | ---------- | ------------- |
| String (1) |             | `Num`       | `Date`    | `Time`     | `Bool`        |
| Número (2) | `String`    |             |           |            | `Bool`        |
| Date                          | `String`    |             |           |            | `Bool`        |
| Hora                          | `String`    |             |           |            | `Bool`        |
| Parâmetros                    |             | `Num`       |           |            |               |

(1) As cadeias de caracteres formatadas em JSON podem ser convertidas em dados escalares, objetos ou coleções, usando o comando `JSON Parse`.

(2) Os valores de tempo podem ser tratados como números.

**Nota:** Além das conversões de dados listadas nesta tabela, as conversões de dados mais sofisticadas podem ser obtidas combinando operadores e outros comandos.
