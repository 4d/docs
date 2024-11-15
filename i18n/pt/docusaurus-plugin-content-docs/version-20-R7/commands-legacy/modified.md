---
id: modified
title: Modified
slug: /commands/modified
displayed_sidebar: docs
---

<!--REF #_command_.Modified.Syntax-->**Modified** ( *campo* ) : Boolean<!-- END REF-->
<!--REF #_command_.Modified.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo a provar |
| Resultado | Boolean | &#8592; | Verdadeiro se foi assinalado um novo valor ao campo, caso contrario Falso |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Modified.Summary-->**Modified** retorna [True](true.md "True") se um valor tiver sido atribuído por programação a *campo* ou se tiver sido modificado durante a entrada de dados.<!-- END REF--> O comando **Modified**deve ser utilizado unicamente em um método de formulário (ou uma subrotina chamada por um método de formulário).

Atenção, este comando só devolve um valor significativo dentro do mesmo ciclo de execução. Particularmente devolve [False](false.md "False") para todos os eventos de formulário que correspondam ao antigo ciclo de execução *\_o\_During*

Durante a entrada de dados, um campo é considerado modificado se o usuário edita o campo (sem importar se modifica o valor original) e logo passa a outro campo ou clicar num controle. Note que o fato de sair de um campo com a ajuda da tecla Tab não significa que **Modified** retorna [True](true.md "True"). O campo deve ser editado para que **Modified** seja [True](true.md "True").

Quando se executa um método, se considera que um campo foi modificado se lhe atribui um valor (diferente ou não).

**Nota:** **Modified** sempre devolve [True](true.md "True") depois da execução dos comandos [PUSH RECORD](push-record.md) e [POP RECORD](pop-record.md). 

Em todos os casos, utilize o comando [Old](old.md) para detectar se o valor do campo realmente foi modificado.

**Nota:** apesar de que **Modified** pode ser aplicado a todo tipo de campo, ele é utilizado com o comando \[#cmd id="35"/\], deve levar em conta as restrições que aplicam ao comando \[#cmd id="35"/\], Para mais detalhes, ver a descrição do comando \[#cmd id="35"/\],

Durante a entrada de dados, geralmente é mais fácil realizar operações em métodos de objeto com a ajuda do comando [Form event code](form-event-code.md) que utilizar **Modified** nos métodos de formulário. Como um método de objeto recebe o evento On Data Change quando se modifica um campo, o uso de um método de objeto é equivalente a utilizar **Modified** em um método de formulário.

**Nota:** para funcionar corretamente, o comando **Modified** deve ser utilizado unicamente em um método de formulário ou em um método chamado por um método de formulário.

#### Exemplo 1 

O seguinte exemplo prova se o campo *\[Ordens\]Quantidade* ou o campo *\[Ordens\]Preço* for modificado. Se alguns dos dois foi modificado, então o campo *\[Ordens\]Total* foi calculado novamente. 

```4d
 If((Modified([Ordens]Quantidade)|(Modified([Ordens]Preço))
    [Orders]Total :=[Ordens]Quantidade*[Ordens]Preço
 End if
```

Note que o mesmo resultado pode ser obtido utilizando a segunda linha como uma subrotina chamada pelos métodos de objeto dos campos *\[Ordens\]Quantidade* e *\[Ordens\]Preço* no evento de formulário On Data Change.

#### Exemplo 2 

Seleciona um registro para a tabela *\[umaTabela\]*, depois chama múltiplas subrotinas que podem ser modificadas o campo *\[umaTabela\]CampoImportante,* mas não salva o registro. Ao final do método principal, pode utilizar o comando Modified para determinar se o registro deve ser guardado: 

```4d
  // O registro foi selecionado como registro atual
  // Depois realiza ações utilizando subrotinas
 FAZER ALGO
 FAZER ALGO MAIS
 NÃO ESQUECER DE FAZER ISTO
  // ...
  // E depois você testa o campo para determinar se o registro deve ser guardado
 If(Modified([umaTabela]CampoImportante))
    SAVE RECORD([umaTabela])
 End if
```

#### Ver também 

[Form event code](form-event-code.md)  
[Old](old.md)  