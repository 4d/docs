---
id: data-types
title: Tipos de dados
---

Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.

Apesar de geralmente serem equivalentes, alguns tipos de dados disponíveis no nível do banco de dados não estão diretamente disponíveis na linguagem e são convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados através da linguagem. A tabela lista todos os tipos de dados disponíveis e sua compatibilidade/declarações:

| Tipos de dados                                 | Suporte para o banco (1) | Suporte Linguagem       | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| ---------------------------------------------- | ------------------------ | ----------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alfanumérico](dt_string.md)                   | Sim                      | Convertido em texto     | -                                                       | -                                                                |
| [Text](Concepts/dt_string.md)                  | Sim                      | Sim                     | Text                                                    | `C_TEXT`, `ARRAY TEXTO`                                          |
| [Date](Concepts/dt_date.md)                    | Sim                      | Sim                     | Date                                                    | `C_DATE`, `ARRAY DATE`                                           |
| [Hora](Concepts/dt_time.md)                    | Sim                      | Sim                     | Hora                                                    | `C_TIME`, `ARRAY TIME`                                           |
| [Booleano](Concepts/dt_boolean.md)             | Sim                      | Sim                     | Booleano                                                | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)               | Sim                      | Convertido para longInt | Integer                                                 | `ARRAY INTEGER`                                                  |
| [Longint](Concepts/dt_number.md)               | Sim                      | Sim                     | Integer                                                 | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Inteiro longo 64 bits](Concepts/dt_number.md) | Yes (SQL)                | Convertido para real    | -                                                       | -                                                                |
| [Real](Concepts/dt_number.md)                  | Sim                      | Sim                     | Real                                                    | `C_REAL`, `ARRAY REAL`                                           |
| [Indefinido](Concepts/dt_null_undefined.md)    | -                        | Sim                     | -                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)          | -                        | Sim                     | -                                                       | -                                                                |
| [Ponteiro](Concepts/dt_pointer.md)             | -                        | Sim                     | Ponteiro                                                | `C_POINTER`, `ARRAY POINTER`                                     |
| [Imagem](Concepts/dt_picture.md)               | Sim                      | Sim                     | Imagem                                                  | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                    | Sim                      | Sim                     | Blob                                                    | `C_BLOB`, `ARRAY BLOB`                                           |
| [Objeto](Concepts/dt_object.md)                | Sim                      | Sim                     | Objeto                                                  | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Collection](Concepts/dt_collection.md)        | -                        | Sim                     | Collection                                              | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2)           | -                        | Sim                     | Variant                                                 | `C_VARIANT`                                                      |

(1) Note que ORDA maneja campos de bancos de dados através de objetos (entidades) e assim, só é compatível com tipos de dados disponíveis a esses objetos. Para saber mais, veja a descrição de tipo de dados [Object](Concepts/dt_object.md).

(2) Variante não é um tipo *data* mas um tipo *variável* que contém um valor de qualquer outro tipo de dados.

## Valor padrão

Quando as variáveis são introduzidas através de uma diretiva do compilador, recebem um valor padrão, que manterão durante a sessão enquanto não tenham sido atribuidas.

The default value depends on the variable type:

| Tipo       | Valor padrão        |
| ---------- | ------------------- |
| Booleano   | False               |
| Date       | 00-00-00            |
| Longint    | 0                   |
| Hora       | 00:00:00            |
| Imagem     | tamanho da imagem=0 |
| Real       | 0                   |
| Ponteiro   | Nil=true            |
| Text       | ""                  |
| Blob       | Tamanho do Blob =0  |
| Objeto     | null                |
| Collection | null                |
| Variant    | indefinido          |


## Conversão de tipos de dados

A linguagem 4D contém operadores e comandos para converter entre tipos de dados, onde tais conversões são significativas. A língua 4D obriga à verificação do tipo de dados. Por exemplo, não se pode escrever: "abc"+0.5+!12/25/96!-?00:30:45?. Isto irá gerar erros de sintaxe.

O quadro seguinte lista os tipos de dados básicos, os tipos de dados para os quais podem ser convertidos, e os comandos utilizados para o fazer:

| Tipo de dados a converter | para String | para Número | para Data | para Tempo | para Booleano |
| ------------------------- | ----------- | ----------- | --------- | ---------- | ------------- |
| String (1)                |             | Num         | Date      | Hora       | Bool          |
| Número (2)                | String      |             |           |            | Bool          |
| Date                      | String      |             |           |            | Bool          |
| Hora                      | String      |             |           |            | Bool          |
| Booleano                  |             | Num         |           |            |               |

(1) Strings formatadas em JSON podem ser convertidas em dados escalares, objetos ou coleções, usando o comando `JSON Parse`

(2) Os valores de tempo podem ser tratados como números.

**Nota:** Além das conversões de dados listadas nesta tabela. Conversões de dados mais sofisticadas podem ser obtidas combinando operadores e outros comandos.
