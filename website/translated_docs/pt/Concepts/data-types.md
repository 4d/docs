---
id: data-types
title: Tipos de dados
---

Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.

Apesar de geralmente serem equivalentes, alguns tipos de dados disponíveis no nível do banco de dados não estão diretamente disponíveis na linguagem e são convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados através da linguagem. A tabela lista todos os tipos de dados disponíveis e sua compatibilidade/declarações:

| Tipos de dados                                 | Suporte para o banco (1) | Suporte Linguagem       | Declaração de variáveis      |
| ---------------------------------------------- | ------------------------ | ----------------------- | ---------------------------- |
| [Alfanumérico](dt_string.md)                   | Sim                      | Convertido em texto     | -                            |
| [Texto](Concepts/dt_string.md)                 | Sim                      | Sim                     | `C_TEXT`, `ARRAY TEXTO`      |
| [Data](Concepts/dt_date.md)                    | Sim                      | Sim                     | `C_DATE`, `ARRAY DATE`       |
| [Hora](Concepts/dt_time.md)                    | Sim                      | Sim                     | `C_TIME`, `ARRAY TIME`       |
| [Booleano](Concepts/dt_boolean.md)             | Sim                      | Sim                     | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [Inteiro](Concepts/dt_number.md)               | Sim                      | Convertido para longInt | `ARRAY INTEGER`              |
| [Inteiro longo](Concepts/dt_number.md)         | Sim                      | Sim                     | `C_LONGINT`, `ARRAY LONGINT` |
| [Inteiro longo 64 bits](Concepts/dt_number.md) | Yes (SQL)                | Convertido para real    | -                            |
| [Real](Concepts/dt_number.md)                  | Sim                      | Sim                     | `C_REAL`, `ARRAY REAL`       |
| [Indefinido](Concepts/dt_null_undefined.md)    | -                        | Sim                     | -                            |
| [Null](Concepts/dt_null_undefined.md)          | -                        | Sim                     | -                            |
| [Ponteiro](Concepts/dt_pointer.md)             | -                        | Sim                     | `C_POINTER`, `ARRAY POINTER` |
| [Imagem](Concepts/dt_picture.md)               | Sim                      | Sim                     | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)                    | Sim                      | Sim                     | `C_BLOB`, `ARRAY BLOB`       |
| [Objeto](Concepts/dt_object.md)                | Sim                      | Sim                     | `C_OBJECT`, `ARRAY OBJECT`   |
| [Coleção](Concepts/dt_collection.md)           | -                        | Sim                     | `C_COLLECTION`               |
| [Variant](Concepts/dt_variant.md)(2)           | -                        | Sim                     | `C_VARIANT`                  |

(1) Note que ORDA maneja campos de bancos de dados através de objetos (entidades) e assim, só é compatível com tipos de dados disponíveis a esses objetos. Para saber mais, veja a descrição de tipo de dados [Object](Concepts/dt_object.md).

(2) Variante não é um tipo *data* mas um tipo *variável* que contém um valor de qualquer outro tipo de dados.

## Valor padrão

Quando as variáveis são introduzidas através de uma diretiva do compilador, recebem um valor padrão, que manterão durante a sessão enquanto não tenham sido atribuidas.

O valor padrão depende do tipo variável e categoria, seu contexto de educação (interpretado ou compilado) assim como, para o modo compilado, as opções de compilação definidas na página Compilador das configurações de Banco de dados:

- Variáveis processo e interprocesso são sempre estabelecidas "para zero" (o que significa, dependendo do caso, "0", uma string vazia, um Blob vazio, um ponteiro Nil, uma data em branco (00-00-00), etc)
- Variáveis locais são estabelecidas:
    - em modo interpretado: em zero
    - em modo compilado, dependendo da opção **Initialize local variables** das configurações de banco de dados:
        - "em zero": em zero (ver acima),
        - "a um valor aleatório": 0x72677267 para números e horas, sempre True para booleanos, igual que "em zero" para os outros,
        - "no": no initialization, meaning whatever is in RAM is used for the variables, like values used before for other variables. **Note:** 4D recommends to use "to zero".

The following table illustrates these default values:

| Type          | Interprocess/Process (interpreted/compiled), Local (interpreted/compiled "to zero") | Local compiled "random" | Local compiled "no"          |
| ------------- | ----------------------------------------------------------------------------------- | ----------------------- | ---------------------------- |
| Boolean       | False                                                                               | True                    | True (varies)                |
| Date          | 00-00-00                                                                            | 00-00-00                | 00-00-00                     |
| Inteiro longo | 0                                                                                   | 1919382119              | 909540880 (varies)           |
| Hora          | 00:00:00                                                                            | 533161:41:59            | 249345:34:24 (varies)        |
| Imagem        | picture size=0                                                                      | picture size=0          | picture size=0               |
| Real          | 0                                                                                   | 1.250753659382e+243     | 1.972748538022e-217 (varies) |
| Ponteiro      | Nil=true                                                                            | Nil=true                | Nil=true                     |
| Texto         | ""                                                                                  | ""                      | ""                           |
| Blob          | Blob size=0                                                                         | Blob size=0             | Blob size=0                  |
| Objeto        | null                                                                                | null                    | null                         |
| Coleção       | null                                                                                | null                    | null                         |
| Variant       | indefinido                                                                          | indefinido              | indefinido                   |


## Converting data types

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

| Data Type to Convert | to String | to Number | to Date | to Time | to Boolean |
| -------------------- | --------- | --------- | ------- | ------- | ---------- |
| String (1)           |           | Num       | Date    | Hora    | Bool       |
| Number (2)           | String    |           |         |         | Bool       |
| Date                 | String    |           |         |         | Bool       |
| Hora                 | String    |           |         |         | Bool       |
| Booleano             |           | Num       |         |         |            |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
