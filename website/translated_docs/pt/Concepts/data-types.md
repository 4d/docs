---
id: data-types
title: Tipos de dados
---

Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.

Apesar de geralmente serem equivalentes, alguns tipos de dados disponíveis no nível do banco de dados não estão diretamente disponíveis na linguagem e são convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados através da linguagem. A tabela lista todos os tipos de dados disponíveis e sua compatibilidade/declarações:

| Tipos de dados                                 | Suporte para o banco (1) | Suporte Linguagem       | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| ---------------------------------------------- | ------------------------ | ----------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alfanumérico](dt_string.md)                   | Sim                      | Convertido em texto     | -                                                       | -                                                                |
| [Texto](Concepts/dt_string.md)                 | Sim                      | Sim                     | `Texto`                                                 | `C_TEXT`, `ARRAY TEXTO`                                          |
| [Date](Concepts/dt_date.md)                    | Sim                      | Sim                     | `Date`                                                  | `C_DATE`, `ARRAY DATE`                                           |
| [Hora](Concepts/dt_time.md)                    | Sim                      | Sim                     | `Hora`                                                  | `C_TIME`, `ARRAY TIME`                                           |
| [Booleano](Concepts/dt_boolean.md)             | Sim                      | Sim                     | `Booleano`                                              | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)               | Sim                      | Convertido para longInt | `Integer`                                               | `ARRAY INTEGER`                                                  |
| [Inteiro longo](Concepts/dt_number.md)         | Sim                      | Sim                     | `Integer`                                               | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Inteiro longo 64 bits](Concepts/dt_number.md) | Yes (SQL)                | Convertido para real    | -                                                       | -                                                                |
| [Real](Concepts/dt_number.md)                  | Sim                      | Sim                     | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                           |
| [Indefinido](Concepts/dt_null_undefined.md)    | -                        | Sim                     | -                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)          | -                        | Sim                     | -                                                       | -                                                                |
| [Ponteiro](Concepts/dt_pointer.md)             | -                        | Sim                     | `Ponteiro`                                              | `C_POINTER`, `ARRAY POINTER`                                     |
| [Imagem](Concepts/dt_picture.md)               | Sim                      | Sim                     | `Imagem`                                                | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                    | Sim                      | Sim                     | `Blob`, `4D. Blob`                                      | `C_BLOB`, `ARRAY BLOB`                                           |
| [Objeto](Concepts/dt_object.md)                | Sim                      | Sim                     | `Objeto`                                                | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Coleção](Concepts/dt_collection.md)           | -                        | Sim                     | `Coleção`                                               | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2)           | -                        | Sim                     | `Variant`                                               | `C_VARIANT`                                                      |

(1) Note que ORDA maneja campos de bancos de dados através de objetos (entidades) e assim, só é compatível com tipos de dados disponíveis a esses objetos. Para saber mais, veja a descrição de tipo de dados [Object](Concepts/dt_object.md).

(2) Variante não é um tipo *data* mas um tipo *variável* que contém um valor de qualquer outro tipo de dados.

## Valor padrão

Quando as variáveis são introduzidas através de uma diretiva do compilador, recebem um valor padrão, que manterão durante a sessão enquanto não tenham sido atribuidas.

The default value depends on the variable type:

| Type          | Default value  |
| ------------- | -------------- |
| Booleano      | False          |
| Date          | 00-00-00       |
| Inteiro longo | 0              |
| Hora          | 00:00:00       |
| Imagem        | picture size=0 |
| Real          | 0              |
| Ponteiro      | Nil=true       |
| Texto         | ""             |
| Blob          | Blob size=0    |
| Objeto        | null           |
| Coleção       | null           |
| Variant       | indefinido     |


## Converting data types

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

| Data Type to Convert | to String | to Number | to Date | to Time | to Boolean |
| -------------------- | --------- | --------- | ------- | ------- | ---------- |
| String (1)           |           | `Num`     | `Date`  | `Hora`  | `Bool`     |
| Número (2)           | `String`  |           |         |         | `Bool`     |
| Date                 | `String`  |           |         |         | `Bool`     |
| Hora                 | `String`  |           |         |         | `Bool`     |
| Booleano             |           | `Num`     |         |         |            |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
