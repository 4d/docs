---
id: method-called-on-error
title: Method called on error
slug: /commands/method-called-on-error
displayed_sidebar: docs
---

<!--REF #_command_.Method called on error.Syntax-->**Method called on error** {( *scope* )} : Text<!-- END REF-->
<!--REF #_command_.Method called on error.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| scope | Integer | &#8594;  | Escopo/alcance do método de erro |
| Resultado | Text | &#8592; | Nome do método de chamada por erro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Method called on error.Summary-->O comando **Method called on error** retorna o nome do método instalado pelo comando [ON ERR CALL](on-err-call.md) para o processo atual ou o e*scope definido*.<!-- END REF-->

No parâmetro *scope*, passe o contexto de execução ao qual dseja obter o nome do método de manejo de erro. Pode usar uma das constantes abaixo:

| Constante                 | Valor |
| ------------------------- | ----- |
| ek errors from components | 2     |
| ek global                 | 1     |
| ek local                  | 0     |

Se nenhum método tiver sido instalado para *scope*, uma string vazia é retornada ("").

#### Exemplo 

Este comando é particularmente útil no contexto de componentes porque lhe permite modificar temporariamente e depois restaurar os métodos de gestão de erros:

```4d
 $metAtual:=Method called on error
 ON ERR CALL("NovoMetodo")
  // Se o documento não pode ser aberta, é gerado um erro
 $ref:=Open document("MeuDocumento")
  // Reinstalação do método anterior
 ON ERR CALL($metAtual)
```

#### Ver também 

*Error Handler*  
[ON ERR CALL](on-err-call.md)  