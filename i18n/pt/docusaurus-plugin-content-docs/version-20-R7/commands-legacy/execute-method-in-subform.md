---
id: execute-method-in-subform
title: EXECUTE METHOD IN SUBFORM
slug: /commands/execute-method-in-subform
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Syntax-->**EXECUTE METHOD IN SUBFORM** ( *objetoSubForm* ; *nomeMetodo* {; *retorno* {; *param*} {; *param2* ; ... ; *paramN*}} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objetoSubForm | Text | &#8594;  | Nome de objeto subformulário |
| nomeMetodo | Object, Text | &#8594;  | Nome do projeto de método a ser executado |
| retorno | *, Variable | &#8594;  | * Se método não retornar um valor |
| &#8592; | Valor retornado pelo método |
| param | Expression | &#8594;  | Parâmetros a passar ao método |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Summary-->O comando EXECUTE METHOD IN SUBFORM pode ser utilizado para executar o método de projeto *nomeMetodo no* contexto do sub formulário *objetoSubform*.<!-- END REF-->

  
O método de projeto chamado pode receber chamadas 1 a X parâmetros em *param* e devolver um valor em *retorno*. Passe *\** no parâmetro *retorno* se o método não devolve parâmetros. 

Em *formula*, determina o código 4D a ser executado no contexto de *subformObject*. Pode passar:

* um **formula object** (ver *Formula Objects*). Objetos Formula podem encapsular qualquer expressão executável, incluindo funções e métodos projetos;
* uma **string** contendo o nome de um método projeto.

O contexto de execução é conservado no método chamado, o que significa que o formulário atual e o evento formulário atual seguem definidos. Se o sub formulário provêm de um componente, o método deve pertencer ao componente e ter a propriedade "Compartilhado entre os componentes e o banco local".  
  
Este comando deve ser chamado no contexto do formulário pai (contém o objeto *objetoSubForm*), por exemplo via o método de formulário.  
  
**Nota:** O método *nomeMetodo* não é executado se *objetoSubForm* não se encontra na página atual ou se não foi instanciado.

#### Exemplo 1 

Dado o formulário "ContactDetail" utilizado como subformulário no formulário pai "Empresa". O objeto subformulário que contém o formulário ContactDetail é chamada "ContactSubform". Imagine que queremos modificar a aparência de certos elementos do subformulário de acordo ao valor dos campos da empresa (por exemplo, "nomcontact" deve passar a vermelho quando \[Empresa\]Cidad="Nova York" e a azul quando \[Empresa\]Cidade="San Diego"). Este mecanismo é implementado através do método SetToColor. Para poder obter este resultado, o método SetToColor não pode ser chamado diretamente desde o processo do evento de formulário "On Load" do formulário pai Empresa porque o objeto "contactname" não pertence ao formulário atual, mas ao formulário mostrado no objeto subformulário "ContactSubform". O método deve portanto ser executado utilizando o comando EXECUTE METHOD IN SUBFORM para que funcione corretamente.

```4d
 Case of
    :(Form event code=On Load)
       Case of
          :([Company]City="New York")
             $Color:=$Red
          :([Company]City="San Diego")
             $Color:=$Blue
          Else
             $Color:=$Black
       End case
       EXECUTE METHOD IN SUBFORM("ContactSubform";Formula(SetToColor);*;$Color)
 End case
```

#### Exemplo 2 

Suponha que esteja desenvolvendo um banco que será utilizado como componente. Inclui um formulário projeto compartilhado (chamado, por exemplo Calendar) que contém *variáveis dinâmicas* além de um método projeto público que permite ajustar o calendário: SetCalendarDate(varDate).

Se este método foi utilizado diretamente no método do formulário Calendar, pode chamar diretamente o evento "On Load": 

```4d
 SetCalendarDate(Current date)
```

 Mas, no contexto do banco local, imaginemos que um formulário projeto contém os dois subformulários "Calendar", nos objetos subformulário chamados "Cal1" e "Cal2". Deve definir a data de Cal1 em 01/01/10 e a data de Cal2 em 05/05/10\. Não pode chamar diretamente a SetCalendarDate porque o método não "sabe" que formulários e variáveis aplicar. Portanto, deve chamá-lo através do seguinte código: 

```4d
 EXECUTE METHOD IN SUBFORM("Cal1";"SetCalendarDate";*;!01/01/20!)
 EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)
```

#### Variáveis e conjuntos do sistema 

Se este comando é executado corretamente, a variável sistema OK toma o valor 1; do contrário toma o valor 0.


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1085 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


