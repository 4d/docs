---
id: clean
title: $clean
---

既存のエンティティセットに基づいて、削除されたエンティティを除いたエンティティセットを新規作成します (例: `$clean=true`)

## 説明

`$clean`は、`entitySetID` と同じエンティティを含む新しいエンティティセットを作成しますが、その際に削除されたエンティティへの参照があれば取り除きます。

デフォルトでは、あるエンティティが [削除]($method.md#methoddelete) された場合、既存のエンティティセレクション内のこのエンティティへの参照は *undefined* になりますが、参照そのものは削除されません。 また、エンティティセットの "count" プロパティにも含まれたままです。 エンティティセットに対して `$clean` を呼び出すと、*undefined* なエンティティ参照が含まれない、最新のエンティティセットを新規に取得できます。

`$clean` の後に、[`$method=entityset`]($method.md#methodentityset) を追加すると、サーバー上に新しいエンティティセットを作成できます。

`/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset`

## 例題

1. エンティティセットを作成します:

`GET /rest/Speciality?$filter="ID<=3"&$method=entityset`

3つのエンティティを含む、エンティティセット `DF6903FB5879404A9A818884CFC6F62A` を取得します:

```json
{
  "__ENTITYSET": "/rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A",
  "__DATACLASS": "Speciality",
  "__entityModel": "Speciality",
  "__GlobalStamp": 0,
  "__COUNT": 3,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 1,
      "name": "Surgery",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[1]/infos?$expand=infos"
        }
      }
    },
    {
      "__KEY": "2",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 2,
      "name": "Otolaryngology",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[2]/infos?$expand=infos"
        }
      }
    },
    {
      "__KEY": "3",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 3,
      "name": "Dentist",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[3]/infos?$expand=infos"
        }
      }
    },
  ],
  "__SENT": 3
}
```

2. `KEY=2` のエンティティを削除し ([エンティティの削除]($method.md#methoddelete) 参照)、次に下のリクエストを送信します:

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A`

返されるエンティティセットには、まだ 3つのエンティティが含まれています。 削除されたエンティティに対応する、未定義のエンティティが 1つあります (__STAMP = 0):

```json
{
  "__DATACLASS": "Speciality",
  "__entityModel": "Speciality",
  "__GlobalStamp": 0,
  "__COUNT": 3,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 1,
      "name": "Surgery",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[1]/infos?$expand=infos"
        }
      }
    },
    {
      "__STAMP": 0
    },
    {
      "__KEY": "3",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 3,
      "name": "Dentist",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[3]/infos?$expand=infos"
        }
      }
    },
  ],
  "__SENT": 3
}
```

3. 次のリクエストを送信すると:

`GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset`

エンティティセット DF6903FB5879404A9A818884CFC6F62A が "掃除" され、削除されたエンティティを含まない新しいエンティティセット (エンティティセットD7BFBC49375B4FE5A94CDD17AA535F73) を受け取ります:

```json
{
  "__ENTITYSET": "/rest/Speciality/$entityset/D7BFBC49375B4FE5A94CDD17AA535F73",
  "__DATACLASS": "Speciality",
  "__entityModel": "Speciality",
  "__GlobalStamp": 0,
  "__COUNT": 2,
  "__FIRST": 0,
  "__ENTITIES": [
    {
      "__KEY": "1",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 1,
      "name": "Surgery",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[1]/infos?$expand=infos"
        }
      }
    },
    {
      "__KEY": "3",
      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",
      "__STAMP": 131,
      "ID": 3,
      "name": "Dentist",
      "infos": {
        "__deferred": {
          "uri": "/rest/Speciality[3]/infos?$expand=infos"
        }
      }
    }
  ],
  "__SENT": 2
}
```
