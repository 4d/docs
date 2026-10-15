---
id: self
title: Self
slug: /commands/self
displayed_sidebar: docs
---

<!--REF #_command_.Self.Syntax-->**Self**  : Pointer<!-- END REF-->
<!--REF #_command_.Self.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Pointer to form object (if any) whose method is currently being executed. Otherwise Nil (->[]) if outside of context |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Nota de compatibilidade 

<!--REF #_command_.Self.Summary-->Este comando só é conservada por razões de compatibilidade.<!-- END REF--> A partir da versão 12 de 4D, é recomendado utilizar o comando OBJECT Get pointer.

## Descrição 

O comando Self devolve um ponteiro até o objeto cujo método de objeto se está executando. 

Self se utiliza para referenciar uma variável em seu próprio método de objeto. Devolve um ponteiro válido só quando é chamada desde dentro de um método de objeto ou desde um método de projeto que se chama direta ou indiretamente por um método de objeto. 

Se Self é chamada fora de contexto, devolve um ponteiro [Is nil pointer](../commands/is-nil-pointer) (*\->\[\]*).

**Dica:** Self é muito útil quando vários objetos em um formulário devem efetuar a mesma ação, operada sobre eles mesmos.

**Nota:** quando se utiliza no contexto de um list box, a função devolve:

* Para uma coluna associada a um campo, um ponteiro ao campo associado,
* Para uma coluna associada a uma variável, um ponteiro a variável,
* Para uma coluna associada a uma expressão, um ponteiro Nil.

## Exemplo 

Ver o exemplo do comando [RESOLVE POINTER](resolve-pointer.md "RESOLVE POINTER").

## Ver também 

[OBJECT Get pointer](../commands/object-get-pointer)  
[RESOLVE POINTER](../commands/resolve-pointer)  
[This ](../commands/this)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 308 |
| Thread-seguro | no |



