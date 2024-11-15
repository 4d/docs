---
id: focus-object
title: Focus object
slug: /commands/focus-object
displayed_sidebar: docs
---

<!--REF #_command_.Focus object.Syntax-->**Focus object**  : Pointer<!-- END REF-->
<!--REF #_command_.Focus object.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Ponteiro ao objeto que tem o foco |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Nota de compatibilidade 

<!--REF #_command_.Focus object.Summary-->Este comando só é conservado por razões de compatibilidade.<!-- END REF--> Começa com a versão 12 de 4D, recomenda-se que se use o comando [OBJECT Get pointer](object-get-pointer.md).

#### Descrição 

Focus object retorna um ponteiro ao objeto que tem o foco no formulário atual. Se nenhum objeto tiver o foco, o comando retorna [Is nil pointer](is-nil-pointer.md).. Pode utilizar Focus object para realizar uma ação em um área de formulário sem saber qual objeto está selecionado atualmente. Tenha certeza de testar se o objeto é do tipo correto, utilizando [Type](type.md),, antes de realizar uma ação.  

**Nota**: quando se utiliza com um list box de tipo array, a função Focus object retorna um ponteiro ao list box ou à coluna do list box dependendo do contexto. Para mais informação, veja a seção *Gestão de objetos List Box*  
  
Este comando não pode ser utilizado com campos em sub-formulários.  
  
**Nota**: este comando é utilizado apenas no contexto de entrada de dados, do contrário um erro é produzido

#### Exemplo 

O exemplo abaixo é um método de objeto para um botão. O método de objeto modifica os dados no objeto atual a maiúsculas. O objeto deve ser do tipo texto ou alfa (tipo 0 ou 24): 

  
```4d
 $vp :=Focus object //Obter o ponteiro ao último objeto
 Case of
    :(Nil($vp)) //Nenhum objeto tem o foco
       ...
    :((Type($vp->)=Is alpha field)|(Type($vp->)=Is string var)) //Se for um objeto de tipo texto ou alfa
       $vp->:=Uppercase($vp->) //Mudar os dados a maiúsculas
 End case
```

#### Ver também 

[OBJECT Get pointer](object-get-pointer.md)  