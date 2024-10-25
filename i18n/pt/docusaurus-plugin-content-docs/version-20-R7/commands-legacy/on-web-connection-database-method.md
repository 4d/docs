---
id: on-web-connection-database-method
title: On Web Connection database method
slug: /commands/on-web-connection-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Connection database method.Syntax-->$1, $2, $3, $4, $5, $6 -> On Web Connection database method<!-- END REF-->
<!--REF #_command_.On Web Connection database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $1 | Texto | &#8592; | URL |
| $2 | Texto | &#8592; | cabeçalho HTTP + corpo HTTP |
| $3 | Texto | &#8592; | Endereço IP do navegador |
| $4 | Texto | &#8592; | Endereço IP do servidor |
| $5 | Texto | &#8592; | Nome de usuário |
| $6 | Texto | &#8592; | Senha |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### 

<!--REF #_command_.On Web Connection database method.Summary-->O On Web Connection database method pode ser chamado nos seguintes casos:  

* o servidor web recebe uma petição que começa pelo URL *4DCGI*.<!-- END REF-->
* o servidor web recebe uma petição inválida.

Para maior informação, consulte a continuação o parágrafo “Chamadas ao Método de banco On Web Connection”.  
  
**Nota de compatibilidade**: o método banco também se chama em caso de criação de um contexto em modo contextual (modo obsoleto pode ser utilizado em bancos 4D convertidos.  
  
A petição deve ter sido aceita previamente pelo [On Web Authentication database method](on-web-authentication-database-method.md) (se existir) e o servidor web deve ser lançado.  
  
O método de banco On Web Connection database method recebe seis parâmetros de tipo texto, passados por 4D ($1, $2, $3, $4, $5 e $6). Os conteúdos desses parâmetros são os seguintes:

| **Parâmetros** | **Tipo** | **Descrição**                                       |
| -------------- | -------- | --------------------------------------------------- |
| $1             | Texto    | URL                                                 |
| $2             | Texto    | Cabeçalho HTTP + corpo HTTP (até o limite de 32 kb) |
| $3             | Texto    | endereço IP do Web client (browser)                 |
| $4             | Texto    | endereço IP do servidor                             |
| $5             | Texto    | nome de usuário                                     |
| $6             | Texto    | Senha                                               |

Você deve declarar esses parâmetros da seguinte maneira: 

```4d
  // On Web Connection Database Method
 
 var $1;$2;$3;$4;$5;$6 : Text
 
  // Código para o método
```

* **Dados extra da URL**  
O primeiro parâmetro (*$1*) é a URL introduzida pelo usuário na área de localização de seu navegador web, menos a direção local.  
Usemos o exemplo de uma conexão de Intranet. Suponhamos que o endereço IP de sua máquina servidor web 4D é *123.45.67.89*. A tabela seguinte mostra os valores de *$1* dependendo da URL introduzida no navegador web:  
    
| **URL introduzida no navegador**            | **Valor do parâmetro $1**       |  
| ------------------------------------------- | ------------------------------- |  
| 123.45.67.89                                | /                               |  
| http://123.45.67.89                         | /                               |  
| 123.45.67.89/Clientes                       | /Clientes                       |  
| http://123.45.67.89/Clientes                | /Clientes                       |  
| http://123.45.67.89/Clientes/Adicionar      | /Clientes/Adicionar             |  
| 123.45.67.89/Faça\_Isso/Se\_OK/Faça\_Aquilo | /Faça\_Isso/Se\_OK/Faça\_Aquilo |  
    
Note que você é livre para usar este parâmetro quando quiser. 4D simplesmente ignora os valores passados além da parte local da URL.  
 Por exemplo, pode estabelecer uma convenção onde o valor "*/Clientes/Adicionar*" signifique “ir diretamente a adicionar um novo registro na tabela *\[Clientes\]*.” Fornecendo aos usuários web de seu banco uma lista de possíveis valores e/ou marcadores por padrão, pode oferecer atalhos as diferentes partes de sua aplicação. Desta forma, os usuários web podem acessar rapidamente aos recursos de seu site sem ter que navegar cada vez que se conectem a seu banco.

**Advertência**: para evitar que um usuário acesse diretamente a um banco com um marcador criado durante uma sessão anterior, 4D intercepta toda URL que corresponda a uma das URLs padrão de 4D.

* **Cabeçalho de petição de HTTP seguida por corpo HTTP**  
 O segundo parâmetro (*$2*) é o cabeçalho e o corpo da petição HTTP enviada pelo navegador web. Note que esta informação se passa a seu **On Web Connection database method** tal como está. O conteúdo varia em função do tipo de navegador web que estiver tentando a conexão.  
    
Com Safari rodando em Mac OS, pode receber um cabeçalho similar a este:  
```RAW  
GET /favicon.ico HTTP/1.1Referer: http://123.45.67.89/4dcgi/testUser-Agent:  Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr-fr) AppleWebKit/523.10.3  (KHTML, like Gecko) Version/3.0.4 Safari/523.10Cache-Control: max-age=0Accept: */*Accept-Language: fr-frAccept-Encoding: gzip, deflateConnection: keep-aliveHost: 123.45.67.89  
```  
Com Microsoft Internet Explorer 8 rodando em Windows, pode receber um cabeçalho similar a este:  
```RAW  
GET / HTTP/1.1Accept: image/jpeg, application/x-ms-application,  image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap,  application/vnd.ms-powerpoint, application/vnd.ms-excel,  application/msword, */*Accept-Language: fr-FRUser-Agent:  Mozilla/4.0 (compatível; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2;  .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center  PC 6.0; .NET4.0C)Accept-Encoding: gzip, deflateHost: 123.45.67.89Connection: Keep-Alive  
```  
Se sua aplicação manipula esta informação, é sua decisão analizar o cabeçalho e o corpo.  
**Nota**: por razões de rendimento, o tamanho desses dados não pode ser maior que 32 KB. Se o tamanho for maior, os dados são truncados pelo servidor 4D HTTP.
* **Endereço IP do Web client**  
O parâmetro *$3* recebe o endereço IP da máqina de navegador. Esta informação pode permitir que diferencie entre conexões Internet e Intranet.
* **Endereço IP do servidor**  
O parâmetro *$4* recebe o endereço IP para o qual a petição HTTP foi enviada. 4D permite para multi-homing, o que permite explorar máquinas com mais de um endereço IP. Para maior informação, consulte *Web Server Settings*.
* **Nome de usuário e Senha**  
Os parâmetros *$5* e *$6* recebem o nome de usuário e senha inseridos pelo usuário na caixa de diálogo de identificação exibida pelo navegador. Essa caixa de diálogo aparece para qualquer conexão, se a opção Usar Senhas tiver sido selecionada na caixa de diálogo Preferências de Banco, ver *Conexões de Segurança*).

**Nota:** se o nome de usuário enviado pelo navegador existir em 4D, o parâmetro *$6* (a senha do usuário) não é retornado por razões de segurança.

#### On Web Connection Database Method Calls 

O On Web Connection database method pode ser utilizado como ponto de entrada para o servidor web 4D, seja para usar a URL especial *4DCGI*, ou utilizando as URLs de comando personalizados.

**Advertência**: a chamada de um comando 4D que mostra um elemento de interface ([DIALOG](dialog.md), [ALERT](alert.md)...) termina o processamento do método.  
  
O On Web Connection database method é chamado nos seguintes casos:

* Quando 4D recebe a *URL /4DCGI*. O método banco se chama com a URL */4DCGI/* em *$1*.
* Quando uma página web chamada com uma URL de tipo *<rota>/<arquivo>* não for encontrada. O método de banco se chama com a URL (\*).
* Quando uma página web for chama com uma URL do tipo <file>/ e nenhuma página tiver sido definida como padrão. O método de banco se chama com a URL
