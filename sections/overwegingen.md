# Overwegingen

Dit hoofdstuk geeft een overzicht van extra overwegingen waar {{Verantwoordelijken}} aan moeten denken.

## Overwegingen voor bepalen van Acties om te loggen als Verantwoordelijke

De {{Verantwoordelijke}} moet zorgen dat de juiste {{Acties}} worden gelogd voor het afleggen van verantwoording.
Het bepalen van de Acties die door een {{Applicatie}} worden uitgevoerd kan complex zijn.

Afhankelijk van de IT architectuur kan een Applicatie als één of meerdere softwarecomponenten worden gedefinieerd.
Een Applicatie kan een keten aan verschillende componenten bevatten die samenwerken om een {{Dataverwerking}} uit te voeren.
Deze keten kan componenten zoals servers, routers, loadbalancers, firewalls, caches bevatten.
Als elke handeling door elk component in de keten als Actie zou worden beschouwd, dan is het gevolg dat elke Actie moet worden gelogd en beheerd worden.
Dit kan leiden tot heel veel {{Logregels}} met mogelijke lange bewaartermijnen.
Afhankelijk van de situatie van de Verantwoordelijke, kan dit nodig zijn om verantwoording af te leggen.

Echter, in sommige gevallen is het niet nodig om elke handeling als Actie te loggen.
De Verantwoordelijke moet voor haar specifieke situatie en Dataverwerking(en) bepalen welke logging nodig is om verantwoording af te leggen.

<aside class="example">

Een Verantwoordelijke heeft een Dataverwerking waar data wordt opgehaald, verwerkt en doorgestuurd.
Om deze Dataverwerking uit te voeren heeft de Verantwoordelijke een Applicatie welke een router, server en cache bevat.
De Dataverwerking bestaat uit 4 handelingen: Eerste wordt de data wordt opgehaald via de router, daarna wordt verwerkt op de server, opgeslagen in de cache en als laatst via de router weer doorgestuurd.
Indien de Dataverwerking persoonsgegevens betreft, moet er gekeken worden welke handelingen als aparte Acties moeten worden gelogd om aan de AVG Verantwoordingsplicht te voldoen.
Dat kunnen mogelijk alle handelingen zijn.
Als de Dataverwerking geen persoonsgegevens bevatten dan kan het voldoende zijn om de 4 de handelingen als 1 Actie te loggen en daarmee voldoende verantwoording aan gebruikers af te kunnen leggen.

</aside>

<aside class="example">
Een Verantwoordelijke heeft een Dataverwerking waar bestanden geautomatiseerd worden ingelezen, gecontroleerd en klaargezet voor interne analyse.
Om deze Dataverwerking uit te voeren heeft de Verantwoordelijke een Applicatie welke een SFTP-server, een validatie-engine en een database.
De Dataverwerking bestaat uit 4 handelingen: het bestand wordt door een partner geüpload naar de SFTP-server, de validatie-engine controleert het bestand op structuurfouten, het goedgekeurde bestand wordt opgeslagen in de database, en de validatie-engine stuurt een statusrapportage terug naar de partner.
Indien de Dataverwerking persoonsgegevens betreft, moet er gekeken worden welke handelingen als aparte Acties moeten worden gelogd om aan de AVG Verantwoordingsplicht te voldoen.
Dat kunnen mogelijk alle handelingen zijn.
Als het bestand geen persoonsgegevens bevat, bijvoorbeeld omgevingsmetingen, dan kan het voldoende zijn om de 4 de handelingen als 1 Actie te loggen en daarmee voldoende verantwoording aan gebruikers af te kunnen leggen.

</aside>
