---
id: load-list
title: Load list
slug: /commands/load-list
displayed_sidebar: docs
---

<!--REF #_command_.Load list.Syntax-->**Load list** ( *nomeLista* ) : Integer<!-- END REF-->
<!--REF #_command_.Load list.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeLista | Text | &#8594;  | Nome de uma lista criada no Editor de listas do ambiente Desenho |
| Resultado | Integer | &#8592; | Número de referência da lista criada recentemente |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Load list.Summary-->Load list cria uma lista hierárquica cujo conteúdo é copiado da lista passada em *nomeLista*.<!-- END REF--> Depois retorna o número de referência da lista criada recentemente. 

Para ter certeza de que a lista especificada por *nomeLista* existe, utilize a função [Is a list](is-a-list.md).

Note que a nova lista é uma cópia da lista definida no ambiente Desenho. Portanto, qualquer modificação realizada à nova lista não afetará a lista definida no ambiente Desenho. Da mesma maneira, toda modificação posterior à lista definida no ambiente Desenho não afetará a lista que acaba de criar.

Se modificar a lista criada recentemente e deseja guardar as mudanças de forma permanente, chame ao comando [SAVE LIST](save-list.md "SAVE LIST"). 

Lembre chamar [CLEAR LIST](clear-list.md "CLEAR LIST") para apagar a lista criada quando tenha terminado. Do contrário, permanecerá em memória até o final da sessão de trabalho ou até que o processo no qual foi criada termine ou seja abortado.

**Dica:** se associar uma lista a um objeto de formulário (lista hierárquica, aba, ou menu hierárquico) utilizando Lista de valores na janela de Lista de propriedades, não necessita chamar Load list ou [CLEAR LIST](clear-list.md "CLEAR LIST") no método do objeto. 4D carrega e apaga a lista automaticamente pra você.

#### Exemplo 

Você cria um banco para o mercado internacional e necessita mudar aos diferentes idiomas enquanto utiliza o banco. Em um formulário, apresenta uma lista hierárquica, chamada *hlList*, que oferece uma lista de opções padrão. No ambiente Desenho, você preparou várias listas, tais como “Opções EN” para a versão em inglês, “Opções FR” para a versão em francês, “Opções ES” para a versão em espanhol, etc. Adicionalmente, você mantém uma variável interprocesso chamada◊*gsIdiomaAtual*, onde armazena um código de linguagem de 2 caracteres, como “EN” para a versão em inglês, “FR” para a verão em francês, “ES” para a verão em espanhol, etc. Para ter certeza de que se carregue a lista correta utilizando o idioma selecionado atualmente, pode escrever:

```4d
  // Método de objeto da lista hierárquica hlList
 Case of
    :(FORM Event=On Load)
       var hlList : Integer
       hlList:=Load list("Std Options"+◊gsIdiomaAtual)
    :(FORM Event=On Unload)
       CLEAR LIST(hlList;*)
 End case
```

#### Ver também 

[CLEAR LIST](clear-list.md)  
[Is a list](is-a-list.md)  
[SAVE LIST](save-list.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 383 |
| Thread-seguro | &check; |
| Proibido no servidor ||


