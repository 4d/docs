---
id: compute
title: $compute
---

Cálculo de atributos específicos (_e._, `Employee/salary/?$compute=sum)` o en el caso de un atributo Objeto (_por ejemplo_, Employee/objectAtt.property1/?$compute=sum)

## Descrição

Este parâmetro permite-lhe efetuar cálculos sobre os seus dados.

Para efetuar um cálculo sobre um atributo, escreve-se o seguinte:

`GET  /rest/Employee/salary/?$compute=$all`

Se quiser passar um atributo de Objeto, tem de passar uma das suas propriedades. Por exemplo:

`GET  /rest/Employee/objectAtt.property1/?$compute=$all`

Pode utilizar qualquer uma das seguintes palavras-chave:

| Palavra-chave | Descrição                                                                                                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $all          | Um objeto JSON que define todas as funções para o atributo (média, contagem, mínimo, máximo e soma para atributos do tipo Número e contagem, mínimo e máximo para atributos do tipo Cadeia |
| average       | Obter a média de um atributo numérico                                                                                                                                                                         |
| count         | Obter o número total na coleção ou na classe de dados (em ambos os casos há que especificar um atributo)                                                                                   |
| min           | Obter o valor mínimo num atributo numérico ou o valor mais baixo num atributo do tipo String                                                                                                                  |
| max           | Obter o valor máximo num atributo numérico ou o valor mais alto num atributo do tipo String                                                                                                                   |
| sum           | Obter a soma de um atributo numérico                                                                                                                                                                          |

## Exemplo

Se quiser obter todos os cálculos para um atributo do tipo Número, pode escrever:

`GET  /rest/Employee/salary/?$compute=$all`

**Response**:

```
{
    "salary": {
        "count": 4,
        "sum": 335000,
        "average": 83750,
        "min": 70000,
        "max": 99000
    }
}
```

Se quiser obter todos os cálculos para um atributo do tipo String, pode escrever:

`GET  /rest/Employee/firstName/?$compute=$all`

**Response**:

```
{
    "salary": {
        "count": 4,
        "min": Anne,
        "max": Victor
    }
}
```

Se pretender obter apenas um cálculo num atributo, pode escrever o seguinte:

`GET  /rest/Employee/salary/?$compute=sum`

**Response**:

`235000`

Se pretender efetuar um cálculo num atributo de um objeto, pode escrever o seguinte:

`GET  /rest/Employee/objectAttribute.property1/?$compute=sum`

Responsa:

`45`
