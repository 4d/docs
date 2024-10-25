---
id: throw
title: throw
slug: /commands/throw
displayed_sidebar: docs
---

<!--REF #_command_.throw.Syntax-->**throw** ( *errorCode* {; *descrição*} ) <br/>
*throw* {( *erroObj* )}<!-- END REF-->
<!--REF #_command_.throw.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| errorCode | Integer | &#8594;  | Um inteiro longo representando o código de erro |
| descrição | Text | &#8594;  | Um texto fornecendo uma descrição do erro |
| throw {( erroObj )} |
| Parâmetro | Tipo | Descrição |
| erroObj | Object | &#8594;  | Um objeto contendo propriedades para construir o erro |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.throw.Summary-->O comando **throw** cria um erro que será lançado inmediatamente ou quando o método que o chamar o devolva a seu chamador (modo diferido).<!-- END REF-->

Quando se encuentrar com uma situação em seu código 4D em que surja uma condição de erro, pode utilizar o comando throw para lançar explícitamente um erro e dar uma mensagem de erro específica ou um número de erro. Isso pode ser útil para assinalar condições excepcionais ou entradas inválidas.

Os erros lançados utilizando o comando **throw** são gestionados pelo runtime de 4D como qualquer erro normal: se mostrar o diálogo de erro padrão a menos que se tenha instalado um método de intercepção utilizando o comando [ON ERR CALL](on-err-call.md).

O comando admite três sintaxes:

##### **throw(errorCode{; description})**

Especifica o código de erro e um texto de descrição opcional, o erro se lança imediatamente.  
Se não indicar nenhuma descrição, se preenche com:

* Código de erro (errorCode): (host) na aplicação local
* Código de erro (errorCode): (C00x) em um componente

##### **throw(errorObj)**

O objeto *errorObj* permite obter informação de erro mais detalhada e controlar a gestão de erros. Pode conter as seguintes propriedades, assim como toda propriedade personalizada à que possa fazer referência à propriedade **message**.

Pode conter as seguintes propriedades, assim como toda propriedade personalizada a que possa fazer referência utilizando marcadores de posição dentro da propriedade message.

| **propriedade**    | **tipo<br/>** | **descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| componentSignature | text                  | Assinatura de quatro letras para identificar de forma única a origem do erro. Se não indicar **componentSignature**, o comando utilizar "host" para o banco de dados host, e "C001", "C002", ... para os componentes.                                                                                                                                                                                                                                                                    |
| errCode            | number                | Código de erro.<br/> Se não indicar **errCode**, o comando utiliza -1.                                                                                                                                                                                                                                                                                                                                                                                                           |
| message            | text                  | Descrição do erro.<br/> A **mensagem** pode conter marcadores de posição que serão substituídos por propriedades personalizadas adicionadas ao objeto errorObj. Cada marcador de posição deve especificar-se utilizando chaves {} terminando o nome da propriedade a utilizar. Se a **mensagem** não for indicada ou for uma string vazia, o comando buscará uma descrição nos arquivos xliff da base de dados atual com um renome construido assuim: ERR\_{component}\_{code}". |
| deferred           | boolean               | True se o erro deve diferir-se quando voltar o método atual. O valor por padrão é false.                                                                                                                                                                                                                                                                                                                                                                                                 |

Quando se utilizar esta sintaxe, o objeto *errorObj* se devolve em Últimos erros.

**Nota:** é possível chamar o comando várias vezes no mesmo projeto para gerar vários erros. Pode usar a opção diferida para enviar todos os erros de vez.

##### **throw** 

Lança todos os erros atuais em **modo diferido**, o que significa que se adicionarão a uma pilha e serão geridas quando voltar ao método que os chama. Isso se faz tipicamente desde dentro de uma retrochamada [ON ERR CALL](on-err-call.md).

* **Em uma aplicação**: quando se produz um erro, se adiciona à pilha de erros e se chama ao método [ON ERR CALL](on-err-call.md) da aplicação ao final do método atual. A função [Last errors](last-errors.md) devolve a pilha de erros.
* **Como consequência, em um componente:** a pilha de erros pode ser enviada à aplicação local e se chama ao método [ON ERR CALL](on-err-call.md) da aplicação local.

#### Exemplo 1 

```4d
 var $code : Integer
 var $description : text
 $code:=50042 //Código personalizado
 $description:=“This is a custom error”
 throw($code ;$description) //  Lança um erro com a mensagem "This is a custom error" e errCode = 50042
```

#### Example 2 

```4d
throw({errCode: 1; message: "This an error"}) // Lança um erro com a mensagem errCode = 1 e a mensagem "This an error"
```

#### Exemplo 3 

```4d
throw({errCode: 1}) // Lança um erro com  errCode = 1 e a mensagem "Error code: 1 (host)"
```

#### Example 4 

```4d
throw({message: "This an error"}) // Lança um erro com errCode = -1 e a mensagem "This is my error"
```

#### Example 5 

```4d
throw({message: "This is my error"; deferred: True}) // Lança um erro com a mensagem "This is my error" e errCode = -1 em modo diferido
```

#### Example 6 

```4d
throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// Lança um erro com a mensagem "File myFileName not found (myFilePath)" em modo diferido.
```

#### Ver também 

[ASSERT](assert.md)  
[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  