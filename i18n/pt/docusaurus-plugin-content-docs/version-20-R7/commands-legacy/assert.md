---
id: assert
title: ASSERT
slug: /commands/assert
displayed_sidebar: docs
---

<!--REF #_command_.ASSERT.Syntax-->**ASSERT** ( *expressaoBool* {; *mensagemTexto*} )<!-- END REF-->
<!--REF #_command_.ASSERT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| expressaoBool | Boolean | &#8594;  | Expressão Booleana |
| mensagemText | Text | &#8594;  | Texto de mensagem de erro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ASSERT.Summary-->O comando **ASSERT** avalia a expressão *boolExpression* passa no parâmetro e, se retornar falso, para a execução do código com uma mensagem de erro .<!-- END REF-->O comando funciona em modo interpretado e compilado.

Se *boolExpression* for verdadeiro, nada acontece. Se for falso, o comando ativa o erro -10518 e exibe como padrão o texto da asserção preceidade pela mensagem "Assert failed:". Pode interceptar este erro via um método instalado usando o comando [ON ERR CALL](on-err-call.md), por exemplo para oferecer informação para um arquivo de log. 

Opcionalmente, pode pasar um parâmetro *messageText* para exibir uma mensagem de erro personalizada ao invés do texo da asserção. 

Uma asserção é uma instrução inserida no código que é responsável por detectar qualquer anomalia durante sua execução. O princípio consiste em verificar que uma expressão seja verdadeira em um dado momento e, caso não seja verdadeira, causar uma exceção. Asserções são usadas principalmente para detectar casos que nunca deveriam acontecer, principalmente para detectar bugs de programação. É possível ativar ou desativar globalmente3 todas as asserções de um aplicativo (por exemplo de acordo com o tipo de versão) via o comando [SET ASSERT ENABLED](set-assert-enabled.md) . Para saber mais sobre asserções em programação, veja o artigo na Wikipedia: [http://en.wikipedia.org/wiki/Assertion\_(computing)](http://en.wikipedia.org/wiki/Assertion%5F%28computing%29)

#### Exemplo 1 

Antes de realizar operações em um registro, o desenvolvedor deseja ter certeza de que está carregado em modo leitura/escritura:

```4d
 READ WRITE([Tabela 1])
 LOAD RECORD([Tabela 1])
 ASSERT(Not(Locked([Tabela 1])))
  // dispara o erro -10518 se o registro está bloqueado
```

#### Exemplo 2 

Uma asserção permite provar os parâmetros passados a um método de projeto para detectar os valores aberrantes. Neste exemplo, é utilizado uma mensagem de alerta personalizado.

```4d
  // Método que retorna o número de um cliente em função de seu nome passado em $1
 var $1 : Text // Nome do cliente
 ASSERT($1#"";"Pesquisa de um nome de cliente vazio")
  // Um nome vazio neste caso é um valor aberrante
  // Se a asserção é falsa, se mostrará na caixa de diálogo o erro:
  // "Asserção falhou: pesquisa de um nome de cliente vazia"
```

#### Ver também 

[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  