---
id: undefined
title: Undefined
slug: /commands/undefined
displayed_sidebar: docs
---

<!--REF #_command_.Undefined.Syntax-->**Undefined** ( *variavel* : Expression ) : Boolean<!-- END REF-->
<!--REF #_command_.Undefined.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| variavel | Expression | &#8594; | Variável a testar |
| Resultado | Boolean | &#8592; | TRUE=Variável é atualmente indefinida; FALSE= Variável é atualmente definida |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16 R4|Modificado|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.Undefined.Summary-->Undefined retorna True se não for definida *variavel* e False se *variavel* não for definida.<!-- END REF-->   
  
* Uma variável está definida se tiver sido criada através de uma diretiva de compilação ou se lhe atribui um valor. Está indefinida em todos os demais casos. Se o banco tiver sido compilado, a função Undefined retorna False para todas as variáveis
* Uma propriedade de objeto é indefinida se não existir no objeto
* A função Undefined sempre retorna False para referências de campo.

**Nota:** lembre que **Undefined** avalia a *expressão*. As declarações abaixo são equivalentes:  

```4d
 $result:=Undefined($exp)
  // mesmo resultado:
 $result:=(Value type($exp)=Is undefined)
```

  
Em alguns casos, é possível que não queira que o parâmetro seja avaliado (por exemplo, quando utilizar um ponteiro a uma variável para verificar se a variável está definida). Então, deve escrever:  

```4d
 $result:=(Type($ptr->)=Is undefined) //true se a variável apontada não existir (sem erro)
```

.

## Exemplo 

Abaixo os diferentes resultados do comando [Undefined](../commands/undefined) assim como do comando [Null](../commands/null) com propriedades de objeto, dependendo do contexto:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Undefined(vEmp.name) // False
 $null:=(vEmp.name=Null) //False
 
 $undefined:=Undefined(vEmp.children) // False
 $null:=(vEmp.children=Null) //True
 
 $undefined:=Undefined(vEmp.parent) // True
 $null:=(vEmp.parent=Null) //True
```

## Ver também 

[CLEAR VARIABLE](../commands/clear-variable)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 82 |
| Thread-seguro | yes |


