---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* ; *vSchema* ) : Object<!-- END REF-->
<!--REF #_command_.JSON Validate.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| vJson | Object | &#8594;  | objeto JSON a validar |
| vSchema | Object | &#8594;  | Schema JSON usada para validar objetos JSON |
| Resultado | Object | &#8592; | Estado da validação e erros (se houver) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.JSON Validate.Summary-->O comando **JSON Validate** verifica a conformidade do conteúdo JSON *vJson* com as regras definidas no esquema JSON *vSchema*.<!-- END REF--> Se o JSON não for válido, o comando devolve uma descrição detalhada dos erros.

Passe em *vJson* um objeto JSON que contenha o conteúdo JSON a validar.

**Nota:** a validação de uma string JSON consiste em comprovar que segue as regras definidas em um esquema JSON. Isto é diferente de comprovar que o JSON esteja bem formado, o que faz o comando [JSON Parse](json-parse.md). 

Passe em *vSchema* o esquema JSON a utilizar para a validação. Para maior informação sobre como criar um esquema JSON, pode consultar o website [json-schema.org](http://json-schema.org/).

**Nota:** para validar um objeto JSON, 4D utiliza a norma descrita no documento [JSON Schema Validation](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) (este rascunho ainda está sendo escrito e pode evoluir no futuro).  
  
Se o esquema JSON não for válido, 4D devolve um objeto [Null](null.md) e lança um erro que pode ser detectado mediante um método de chamada de erro.

**JSON Validate** devolve um objeto que oferece o estado da validação. Este objeto pode conter as seguintes propriedades:

| **Nome de propriedad**e | **Tipo**           | **Descrição**                                                                                                |
| ----------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| *success*               | Booleano           | True se *vJson* for validado, false em caso contrário. Se for false, a propriedade errors também é devolvida |
| *errors*                | Coleção de objetos | Lista de objetos de erro em caso de *vJson* não estar validado (ver abaixo)                                  |

Cada objeto de erro da coleção *errors* contém as propriedades abaixo:

| **Nome de propriedade** | **Tipo** | **Descrição**                                                                                                                                                                                            |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *code*                  | Número   | Código de erro                                                                                                                                                                                           |
| *jsonPath*              | Text   | Rota JSON que não pode ser validada em *vJson*                                                                                                                                                           |
| *line*                  | Número   | Número de linha de erro no arquivo JSON. Esta propriedade é preenchida se o JSON tiver sido analisado por [JSON Parse](json-parse.md) com o parâmetro *\**. Do contrario, a propriedad é omitida.        |
| *message*               | Text   | Mensagem de erro                                                                                                                                                                                         |
| *offset*                | Número   | Deslocamento de linha de erro no arquivo JSON. Esta propriedade é preenchida se o JSON tiver sido analisado por [JSON Parse](json-parse.md) com o parâmetro *\**. Do contrário, a propriedade é omitida. |
| *schemaPaths*           | Text   | Rota JSON no esquema que causa o erro de validação                                                                                                                                                       |

##### Gestão de erros 

Os erros abaixo podem ser retornados  

| **Code** | **JSON Palavra chave** | **Mensagem**                                                                                     |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| 2        | multipleOf             | Erro enquanto validando contra uma chave 'multipleOf'.                                           |
| 3        | maximum                | O valor ofereico não deve ser maior que o especificado no schema ("{s1}").                       |
| 4        | exclusiveMaximum       | O valor ofereico não deve ser menor que o especificado no schema ("{s1}").                       |
| 5        | minimum                | O valor oferecido não deve ser menor que o especificado no schema ("{s1}").                      |
| 6        | exclusiveMinimum       | O valor oferecido deve ser maior que especificado no schema ("{s1}").                            |
| 7        | maxLength              | O string é mais longo que o especificado no schema.                                              |
| 8        | minLength              | O string é mais curto que o especificado no schema.                                              |
| 9        | pattern                | A string "{s1}" não combina com o padrão no schema:{s2}.                                         |
| 10       | additionalItems        | Erro durante a validação do array. JSON contém mais elementos que os especificados no schema.    |
| 11       | maxItems               | O array contém mais itens que os especificados no schema.                                        |
| 12       | minItems               | O array contém menos itens que os especificados no schema.                                       |
| 13       | uniqueItems            | Erro ao validar um array. Elementos não são únicos. Outra instância de "{s1}" já está no array.  |
| 14       | maxProperties          | O número de propriedades é maior que o especificado no schema.                                   |
| 15       | minProperties          | O número de propriedades é maior que o especificado no schema.                                   |
| 16       | required               | A propriedade exigida "{s1}" está faltando.                                                      |
| 17       | additionalProperties   | Nenhuma propriedade adicional é permitida pelo schema. As propriedades {s1} devem ser removidas. |
| 18       | dependencies           | A propriedade "{s1}" exige a propriedade "{s2}".                                                 |
| 19       | enum                   | Erro ao validar contra chave 'enum' "{s1}" não combina com nenhum elemento enum no schema.       |
| 20       | type                   | Tipo incorreto. Valor esperado é: {s1}                                                           |
| 21       | oneOf                  | O JSON combina com mais de um valor.                                                             |
| 22       | oneOf                  | O JSON não combina com nenhum valor.                                                             |
| 23       | not                    | O JSON é válido contra o valor de 'not'.                                                         |
| 24       | format.                | A string não combina ("{s1}")                                                                    |

#### Exemplo 

Se quiser validar um objeto JSON com um esquema e obter a lista de erros de validação, se houver. Deseja armazenar linhas de erro e mensagens em uma variável de texto:

```4d
 var $oResult : Object
 $oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)
 If($oResult.success) //validação exitosa
    ...
 Else //Validação falhou
    var $vLNbErr : Integer
    var $vTerrLine : Text
    $vLNbErr:=$oResult.errors.length ///obter o número de erros
    ALERT(String($vLNbErr)+" validation error(s) found.")
    For($i;0;$vLNbErr)
       $vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return
    End for
 End if
```

**Nota:** este exemplo exige que a notação de objeto esteja ativada (ver o parágrafo *Página Compatibilidade*). 

#### Ver também 

  
  
[JSON Parse](json-parse.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1456 |
| Thread-seguro | &check; |


