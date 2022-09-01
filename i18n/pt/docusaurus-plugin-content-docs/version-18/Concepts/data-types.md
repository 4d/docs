---
id: data-types
title: Tipos de dados
---

Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.

Apesar de geralmente serem equivalentes, alguns tipos de dados disponíveis no nível do banco de dados não estão diretamente disponíveis na linguagem e são convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados através da linguagem. A tabela lista todos os tipos de dados disponíveis e sua compatibilidade/declarações:

| Tipos de dados                                 | Suporte para o banco (1) | Suporte Linguagem       | Declaração de variáveis      |
| ---------------------------------------------- | ------------------------ | ----------------------- | ---------------------------- |
| [Alfanumérico](dt_string.md)                   | Sim                      | Convertido em texto     | -                            |
| [Text](Concepts/dt_string.md)                  | Sim                      | Sim                     | `C_TEXT`, `ARRAY TEXTO`      |
| [Date](Concepts/dt_date.md)                    | Sim                      | Sim                     | `C_DATE`, `ARRAY DATE`       |
| [Hora](Concepts/dt_time.md)                    | Sim                      | Sim                     | `C_TIME`, `ARRAY TIME`       |
| [Booleano](Concepts/dt_boolean.md)             | Sim                      | Sim                     | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [Integer](Concepts/dt_number.md)               | Sim                      | Convertido para longInt | `ARRAY INTEGER`              |
| [Longint](Concepts/dt_number.md)               | Sim                      | Sim                     | `C_LONGINT`, `ARRAY LONGINT` |
| [Inteiro longo 64 bits](Concepts/dt_number.md) | Yes (SQL)                | Convertido para real    | -                            |
| [Real](Concepts/dt_number.md)                  | Sim                      | Sim                     | `C_REAL`, `ARRAY REAL`       |
| [Indefinido](Concepts/dt_null_undefined.md)    | -                        | Sim                     | -                            |
| [Null](Concepts/dt_null_undefined.md)          | -                        | Sim                     | -                            |
| [Ponteiro](Concepts/dt_pointer.md)             | -                        | Sim                     | `C_POINTER`, `ARRAY POINTER` |
| [Imagem](Concepts/dt_picture.md)               | Sim                      | Sim                     | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)                    | Sim                      | Sim                     | `C_BLOB`, `ARRAY BLOB`       |
| [Objeto](Concepts/dt_object.md)                | Sim                      | Sim                     | `C_OBJECT`, `ARRAY OBJECT`   |
| [Collection](Concepts/dt_collection.md)        | -                        | Sim                     | `C_COLLECTION`               |
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
        - "no": nenhuma inicialização, significando o que quer que esteja na RAM é usado para as variáveis, como valores usados antes para outras variáveis. **Nota:** 4D recomenda a utilização de "a zero".

A tabela a seguir ilustra estes valores padrões:

| Tipo       | Interprocess/Process (interpreted/compiled), Local (interpreted/compiled "to zero") | Compilação local "aleatória | Compilação local "não       |
| ---------- | ----------------------------------------------------------------------------------- | --------------------------- | --------------------------- |
| Booleano   | False                                                                               | True                        | True (varía)                |
| Date       | 00-00-00                                                                            | 00-00-00                    | 00-00-00                    |
| Longint    | 0                                                                                   | 1919382119                  | 909540880 (varia)           |
| Hora       | 00:00:00                                                                            | 533161:41:59                | 249345:34:24 (varia)        |
| Imagem     | tamanho da imagem=0                                                                 | tamanho da imagem=0         | tamanho da imagem=0         |
| Real       | 0                                                                                   | 1.250753659382e+243         | 1.972748538022e-217 (varia) |
| Ponteiro   | Nil=true                                                                            | Nil=true                    | Nil=true                    |
| Text       | ""                                                                                  | ""                          | ""                          |
| Blob       | Tamanho do Blob =0                                                                  | Tamanho do Blob =0          | Tamanho do Blob =0          |
| Objeto     | null                                                                                | null                        | null                        |
| Collection | null                                                                                | null                        | null                        |
| Variant    | indefinido                                                                          | indefinido                  | indefinido                  |


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
