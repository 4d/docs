---
id: wp-set-data-context
title: WP SET DATA CONTEXT
slug: /WritePro/commands/wp-set-data-context
displayed_sidebar: docs
---

<!--REF #_command_.WP SET DATA CONTEXT.Syntax-->**WP SET DATA CONTEXT** ( *wpDoc* ; *contextoData* )<!-- END REF-->
<!--REF #_command_.WP SET DATA CONTEXT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| contextoData | Object | &#8594;  | Data a ser colocado em contexto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP SET DATA CONTEXT.Summary-->O Comando **WP SET DATA CONTEXT** estabelece o objeto *contextData* como contexto de dados do documento *wpDoc* 4D Write Pro para o processo atual.<!-- END REF--> Estabelecer um novo contexto no mesmo processo substitui qualquer contexto existene para o documento. 

Em *wpDoc*, passe o documento 4D Write Pro que vai receber o contexto de dados. 

Em *contextData*, passe um objeto que determine os conteúdos do contexto de dados. Pode passar qualquer tipo de objeto 4D, incluindo objetos pertencentes a classes ORDA, tais como 4D.Entity. Para resetar um contexto, passe um objeto *null*.

Um contexto de dados 4D Write Pro é volátil: 

* pode ser acessado dentro de um documento 4D Write Pro na execução.
* Se for salva no documento 4D Write Pro, diferente de outras propriedades 4D Write Pro.

Quando um contexto de dados for estabelecido, seus dados estarão disponíveis na área 4D Write Pro dentro do processo atual através da fórmula **This.data**.

**Nota**: fórmulas adicionais estão disponíveis através de **This** quando usar datasources de tabela, ver *Expressões com This*.

Um contexto de dados pode ser usados somente no processo onde foi definido:

Quando usar o contexto de dados em fórmulas computadas de um processo diferente, se for null e This.data é indefinido 

Se estabelecer um contexto de dados que já foi definido para o mesmo documento em outro processo, um erro é jogado 

Para computar fórmulas com contextos de dados diferentes em processos diferentes (ou seja, gera faturas diferentes do mesmo documento model), é recomendado para duplicar o documento usando [WP New](wp-new.md) em cada um desses processos para evitar qualquer erro. Note que o contexto de dados não é copiado quando duplicar um documento.

#### Exemplo 1 

Insere um objeto no contexto de documento 4D Write Pro e exibe sua informação na página: 

```4d
 var $person;$info: Object
 
  // Cria o objeto person
 $person:=New object()
 $person.firstName:="John"
 $person.lastName:="Doe"
 
  // Estabelece o contexto usando o objeto person
 WP SET DATA CONTEXT(WParea;$person)
 
  // Acesse dados de contexto com a palavra chave "This"
 $info:=Formula(This.data.firstName+" "+This.data.lastName)
 
  // Exibe contexto de dados na página
 WP INSERT FORMULA(WParea;$info;wk replace) // exibe "John Doe" na página.
```

Aqui está o resultado:

![](../../assets/en/WritePro/commands/pict5867255.pt.png)

#### Exemplo 2 

Quando trabalhar com um documento modelo, pode associar um contexto para preencher a página com dados. Isso é útil por exemplo para campanhas de email.

Quando se carregar um modelo e se estabelece o contexto de dados, um modelo de carta poderia ter o aspecto abaixo:

![](../../assets/en/WritePro/commands/pict5867835.en.png)

O exemplo abaixo recorre uma seleção de entidades e cria uma vista previa de impressão para cada entidade:

```4d
 var $person: 4D.Entity
 var $people: 4D.EntitySelection
 
 SET PRINT PREVIEW(True)
 $people:=ds.People.all()
 For each($person;$people)
    WP SET DATA CONTEXT(WParea;$person)
    WP PRINT(WParea)
 End for each
```

#### Ver também 

  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP Get data context](wp-get-data-context.md)  