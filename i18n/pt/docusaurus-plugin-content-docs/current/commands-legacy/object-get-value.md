---
id: object-get-value
title: OBJECT Get value
slug: /commands/object-get-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get value.Syntax-->**OBJECT Get value** ( *nomObjeto* ) : any<!-- END REF-->
<!--REF #_command_.OBJECT Get value.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomObjeto | Text | &#8594;  | Nome do objeto |
| Resultado | any | &#8592; | Valor atual da fonte de dados do objeto formulário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT Get value.Summary-->O comando **OBJECT Get value** retorna o valor atual da fonte de dados para os objetos formulários determinados pelo parâmetro *nomObjeto*.<!-- END REF-->

No parâmetro *nomObjeto*, passe o nome de um objeto formulario (string). Se usar o caractere coringa (“@”) para múltiplos objetos, apenas o valor de outras fontes de dados do primeiro objeto formulário for retornado.

**Nota**: **OBJECT Get value** não está disponível em objetos colluna list box.

**Valor retornado**

Valor atual da fonte de dados do objeto formulário. 

**Notas**:

* Se a fonte de dados for um array, o comando retorna o índice do array
* Se a fonte de dados for uma expressão, o comando retorna o valor avaliado desde o último ciclo de execução

#### Exemplo 

Ver o exemplo para o comando [OBJECT SET VALUE](object-set-value.md). 

#### Ver também 

[OBJECT SET VALUE](object-set-value.md)  