---
id: method-get-attributes
title: METHOD GET ATTRIBUTES
slug: /commands/method-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET ATTRIBUTES.Syntax-->**METHOD GET ATTRIBUTES** ( *caminho* ; *atributos* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET ATTRIBUTES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| caminho | Text, Text array | &#8594;  | Caminho do método |
| atributos | Object, Object array | &#8592; | Atributos para métodos selecionados |
| * | Operador | &#8594;  | se passado = comando aplica para banco de dados local quando executado a partir de um componente (parâmetro ignorado fora desse contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD GET ATTRIBUTES.Summary-->O novo comando **METHOD GET ATTRIBUTES** retorna, em *atributos*, o valor atual de todos os atributos para os métodos especificados no parâmetro *caminho*.<!-- END REF-->

Este comando só funciona com métodos de projeto. Se você passar um *caminho* inválido, um erro é gerado.

Em *caminho*, você pode passar seja um texto que contenha um caminho de método, ou um array de texto que contenha um array de caminhos. É necessário passar o mesmo tipo de parâmetro (variável ou array) em *atributos*, a fim de obter os atributos adequados.  
  
Em *atributos*, passe um objeto ou um array de objetos, dependendo do parâmetro passado em *caminho*. Todos os atributos para o método são retornados como propriedades do objeto com os valores de "True" / "False" para atributos booleanos e valores adicionais, se for necessário (por exemplo, "scope", "table" para a propriedade 4D Móvel ).

Se o comando for executado a partir de um componente, aplica-se por padrão para os métodos de componentes. Se você passar o parâmetro *\**, acessa os métodos do banco de dados local.  
  
**Nota**: a propriedade *published4DMobile* é obsoleta a partir de 4D v18.

#### Exemplo 

Se você quiser obter os atributos do método de projeto *sendMail*, pode escrever:

```4d
 var $att : Object
 METHOD GET ATTRIBUTES("sendMail";$att)
```

Depois da execução, $att contém, por exemplo:

```json
{
    "invisible":false,
    "publishedWeb":false,
    "publishedSoap":false,
    "publishedWsdl":false,
    "shared":false,
    "publishedSql":false,
    "executedOnServer":false,
    "published4DMobile":{
        "scope":"table",
        "table":"Table_1"
    }
}
```

#### Ver também 

[METHOD SET ATTRIBUTES](method-set-attributes.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1334 |
| Thread-seguro | &check; |


