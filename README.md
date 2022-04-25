# BackEnd-Ralph
Uitwerking van oefensprint 2:
backend verzamelapplicatie in Express

## Auteur
Ralph van der Have

## URLs
Azure: https://backend-ralph.azurewebsites.net

## Test

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/19959358-53d53373-1415-4ac2-8879-f0efb32c3ab8?action=collection%2Ffork&collection-url=entityId%3D19959358-53d53373-1415-4ac2-8879-f0efb32c3ab8%26entityType%3Dcollection%26workspaceId%3Da879b4e2-ce14-4378-8f0c-cae7808d17d2)

## Versiegeschiedenis

- 0.1: 'de default' applicatie
- 0.2:  deployen op Azure
- 0.3.1 eerste endpoints (GET) met tests in browser
- 0.3.2 eerste endpoints (GET) met tests in Postman
- 0.4 endpoints POST met tests in Postman
- 0.4 databaseconnectie met test door admin
- 0.5 database initialiseren door admin
- 0.6 endpoints voor CR(U)D op database, postman-tests met knop in readme

## endpoints
- GET ~/ admin/check
- POST ~/ admin/init
- GET ~/ (root)
- GET ~/kite (collection)
- GET ~/kite /:id (specific kite)
- POST ~/ (root)
- Update ~/

## Status
- 60% gereed van eindversie

## Vervolgstappen
- Ruilen
- Duplicaten verkomen

## Problemen
Door het niet ontvangen van feedback en ook geen moment hebben betreft het stellen van vragen is het niet gelukt om het ruilen en voorkomen van een dubbele items te implementeren. De  kites krijgen een uniek id, maar er kunnen wel identieke toevoegingen gedaan worden. 

Bij toevoegen op id:1 wordt de kite netjes toegevoegd, echter na verwijderen en weer toevoegen van dezelfde kite krijgt deze id:2.

## Verholpen problemen
Bij post request met postman worden gegevens wel toegevoegd aan de page zoals te zien in de screenshot. Echter postman geeft een timed out error/bad gateway. Dit weet ik niet te verhelpen. Eerder gaf postman wel direct zijn foutmelding mee, laatste driekwartier krijg ik de timed out error.

Error bleek veroorzaakt door het niet geinstalleerd hebben body-parser. Na installatie hiervan gaf postman geen gateway error. 
