---
id: on-web-authentication-database-method
title: On Web Authentication database method
slug: /commands/on-web-authentication-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Authentication database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Authentication database method : Boolean<!-- END REF-->
<!--REF #_command_.On Web Authentication database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $1 | Texto | &#8592; | URL |
| $2 | Texto | &#8592; | cabeçalho HTTP + corpo HTTP |
| $3 | Texto | &#8592; | Endereço IP do navegador |
| $4 | Texto | &#8592; | Endereço IP do servidor |
| $5 | Texto | &#8592; | Nome de usuário |
| $6 | Texto | &#8592; | Senha |
| Resultado | Boolean | &#8592; | Verdadeiro = pedido aceito, Falso = pedido recusado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.On Web Authentication database method.Summary-->O On Web Authentication database method administra o acesso ao motor do servidor web.<!-- END REF--> É chamado automaticamente por 4D ou 4D Server quando uma petição de um navegador web pedir a execução de um método 4D no servidor (chamada de um método através um URL *4DACTION* ou uma etiqueta *4DSCRIPT*, etc.).  

Este método recebe seis parâmetros de tipo Texto, passados por 4D: $1, $2, $3, $4, $5, e $6 e retorna um booleano, $0\. A descrição desses parâmetros é a seguinte:

| **Parâmetros** | **Tipo** | **Descrição**                                   |
| -------------- | -------- | ----------------------------------------------- |
| $1             | Texto    | URL                                             |
| $2             | Texto    | HTTP cabeçalho + corpo HTTP (32 KB máximo)      |
| $3             | Texto    | endereço IP do Web client (navegador)           |
| $4             | Texto    | endereço IP do servidor                         |
| $5             | Texto    | nome de usuário                                 |
| $6             | Texto    | Senha                                           |
| $0             | Booleano | True = petição aceita, False = petição recusada |

Deve declarar esses parâmetros desta forma:

```4d
  // On Web Authentication Database Method
 
 var $1;$2;$3;$4;$5;$6 : Text
 var $0 : Boolean
 
  // Código para o método
```

**Nota:** todos os parâmetros do Método de banco On Web Authentication não seriam preenchidos. A informação recebida pelo método de banco depende das opções que tiver selecionado previamente na caixa de diálogo de Propriedades do banco. Consulte a seção *Conexões de Segurança*.).

* **URL**

> O primeiro parâmetro ($1) é a URL introduzida pelo usuário na área localização de seu navegador web, do qual o endereço local foi removido.  
> 
> Tomemos o exemplo de uma conexão de Intranet. Suponhamos que o endereço IP de sua máquina servidor web 4D é *123.45.67.89*. A seguinte tabela mostra os valores de (*$1*) dependendo da URL introduzida no navegador web:

> | **URL inserida na área de localização do navegador** | **Valor do parâmetro $1**         |
> | ---------------------------------------------------- | --------------------------------- |
> | 123.45.67.89                                         | /                                 |
> | http://123.45.67.89                                  | /                                 |
> | 123.45.67.89/Clientes                                | /Clientes                         |
> | http://123.45.67.89/Clientes                         | /Customers                        |
> | http://123.45.67.89/Clientes/Adicionar               | /Clientes/Adicionar               |
> | 123.45.67.89/Fazer\_Isso/Se\_OK/Fazer\_Isso          | /Fazer\_Isso/Se\_OK/Fazer\_Aquilo |

* **Cabeçalho e corpo da petição HTTP**  
    
O segundo parâmetro (*$2*) é o cabeçalho e o corpo da petição HTTP enviada pelo navegador web. Note que esta informação se passa ao On Web Authentication database method tal como está. O conteúdo varia em função do tipo de navegador web que esteja tentando a conexão. Se sua aplicação manipular esta informação, é sua decisão se analisa o cabeçalho e o corpo.

**Notas:** 

* Por razões de rendimento, o tamanho dos dados que transita através do parâmetro $2 não deve superar os 32 KB. Do contrário serão truncados pelo servidor HTTP de 4D.
* Para mais informação sobre este parâmetro, consulte a descrição do [On Web Connection database method](on-web-connection-database-method.md).
* **Endereço IP do Web client**  
O terceiro parâmetro $3 recebe a direção IP do máquina navegador. Esta informação permite distinguir entre as conexões de Intranet e Internet.
* **Servidor de endereço IP**  
O quarto parâmetro $4 recebe o endereço IP utilizado para chamar ao servidor Web. 4D a partir da versão 6.5 autoriza o multi-homing, permitindo explorar máquinas com mais de um endereço IP. Para maior informação, consulte a seção [QR DELETE COLUMN](qr-delete-column.md).
* **NOme de usuário e Senha**  
    
Os parâmetros $5 e $6 recebem o nome de usuário e senha introduzidos pelo usuário na caixa de diálogo padrão de identificação mostrada pelo navegador. Esta caixa de diálogo aparece para cada conexão, se uma opção de gestão de senhas tiver sido selecionada nas Propriedades da banco (ver a seção *Conexões de Segurança*).

**Note:** se o nome de usuário enviado pelo navegador existir em 4D, o parâmetro $6 (a senha do usuário) não é retornada por razões de segurança.

* **$0 parameter**  
On Web Authentication database method retorna um booleano em $0:  
   * Se $0 for **True**, a conexão é aceita.  
   * Se $0 for **False**, a conexão é recusada.

 O Método de banco [On Web Connection database method](on-web-connection-database-method.md) só é executado se a conexão tiver sido aceita por **On Web Authentication**.

**AVISO**: se não for passado nenhum valor em *$0* ou se *$0* não se define no On Web Authentication database method, a conexão se considerará como aceita e se executa o [On Web Connection database method](on-web-connection-database-method.md).  
  
**Notas**:  
* Não chame elementos de interface no On Web Authentication database method ([ALERT](alert.md), [DIALOG](../commands/dialog.md), etc.) porque do contrário sua execução será interrompida e a conexão será recusada. O mesmo acontece se for apresentado um erro durante seu processo.
* É possível evitar a execução por *4DACTION* ou *4DSCRIPT* de cada método de projeto com a ajuda da opção “Disponível através das etiquetas HTML e URLs. Para mais informação, consulte *Conexões de Segurança*.

#### On Web Authentication Database Method calls 

O On Web Authentication database method é chamada automaticamente, sem importar o modo, quando uma petição ou processo requisitar a execução de um método 4D. Também se chama quando o servidor web recebe uma URL estática inválida (por exemplo, se a página estática solicitada não existir).  

Portanto o On Web Authentication database method se chama nos seguintes casos:

* quando 4D recebe uma URL que começa por *4DACTION/*
* quando 4D recebe uma URL que começa por *4DCGI/*
* quando 4D recebe uma URL que começa por *4DSYNC/*
* quando 4D recebe uma URL solicitando uma página estática que não existe
* quando 4D recebe uma URL de acesso a raiz e não foi definida uma página de início nas propriedades da base ou por meio do comando [WEB SET HOME PAGE](web-set-home-page.md)
* quando 4D processa uma etiqueta *4DSCRIPT* em uma página semi dinâmica
* quando 4D processa uma etiqueta *4DLOOP* baseada em um método em uma página semi dinâmica.
**Nota de compatibilidade**: o método banco também se chama quando 4D recebe um URL que começa por *4DMETHOD*/. Esta URL é obsoleta e só se conserva por razões de compatibilidade.  

Note que o On Web Authentication database method NÃO se chama quando o servidor recebe uma URL solicitando uma página estática válida.

#### Exemplo 1 

Exemplo do On Web Authentication database method*Licenses* em modo BASIC: 

```4d
  //Método de banco On Web Authentication
 var $5;$6;$3;$4 : Text
 var $usuário;$senha;$IPNavegador;$IPServidor : Text
 var $4Dusuário : Boolean
 ARRAY TEXT($usuários;0)
 ARRAY LONGINT($nums;0)
 var $upos : Integer
 var $0 : Boolean
 
 $0:=False
 
 $usuário:=$5
 $senha:=$6
 $IPNavegador:=$3
 $IPServidor:=$4
 
  //Por razões de segurança, recusar nomes que contenham @
 If(WithWildcard($usuario)|WithWildcard($senha))
    $0:=False
  //O método WithWildcard é descrito abaixo
 Else
  //Verificar para ver se é um usuário 4D
    GET USER LIST($usuários;$nums)
    $upos:=Find in array($usuários;$usuário)
    If($upos >0)
       $usuario4D:=Not(Is user deleted($nums{$upos}))
    Else
       $usuario4D:=False
    End if
 
    If(Not($usuario4D))
  //Não é um usuário definido em 4D, procurar na tabela de usuários Web
       QUERY([UsuariosWeb];[UsuariosWeb]usuario=$usuario;*)
       QUERY([UsuariosWeb]; & [UsuariosWeb]senha=$senha)
       $0:=(Records in selection([UsuariosWeb])=1)
    Else
       $0:=True
    End if
 End if
  //Esta é uma conexão de intranet?
 If(Substring($IPNavegador;1;7)#"192.100.")
    $0:=False
 End if
```

#### Exemplo 2 

Exemplo do On Web Authentication database method em modo DIGEST:

```4d
  //Método de banco On Web Authentication
 var $1;$2;$5;$6;$3;$4 : Text
 var $usuario : Text
 var $0 : Boolean
 $0:=False
 $usuario:=$5
  //Por razões de segurança, recusar os nomes que contenham @
 If(WithWildcard($usuario))
    $0:=False
  //O método WithWildcard é descrito a seguir
 Else
    QUERY([UsuariosWeb];[UsuariosWeb]usuario=$usuario)
    If(OK=1)
       $0:=WEB Validate digest($usuario;[UsuariosWeb]senha)
    Else
       $0:=False //Usuário inexistente
    End if
 End if
 
 O método de projeto WithWildcardéo seguinte:
```

```4d
  //Método WithWildcard
  //WithWildcard ( String) -> Booleano
  //WithWildcard ( Nome ) -> Contém um caráctere arroba
 
 C_INTEGER($i)
 var $0 : Boolean
 var $1 : Text
 
 $0:=False
 For($i;1;Length($1))
    If(Character code(Substring($1;$i;1))=Character code("@"))
       $0:=True
    End if
 End for
```
