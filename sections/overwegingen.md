# Overwegingen

*Dit onderdeel is niet normatief.*

## Overwegingen voor bepalen van Acties om te loggen als Verantwoordelijke

De {{Verantwoordelijke}} moet zorgen dat de juiste {{Acties}} worden gelogd voor het afleggen van {{Verantwoording}}.
Het bepalen van de Acties die door een {{Applicatie}} worden uitgevoerd kan complex zijn.

Afhankelijk van de IT architectuur kan een Applicatie als één of meerdere softwarecomponenten worden gedefinieerd.
Een Applicatie kan een keten aan verschillende componenten bevatten die samenwerken om een {{Dataverwerking}} uit te voeren.
Deze keten kan componenten zoals servers, routers, loadbalancers, firewalls, caches bevatten.
Wanneer elke handeling door elk component in de keten als Actie wordt beschouwd, moet elke Actie worden gelogd en beheerd worden.
Dit kan leiden tot heel veel Logregels met mogelijke lange bewaartermijnen.

Afhankelijk van de situatie van de Verantwoordelijke, kan dit nodig zijn om verantwoording af te leggen.
Echter, in sommige gevallen is het niet nodig om elke handeling als Actie te loggen.
De Verantwoordelijke moet voor haar specifieke situatie en Dataverwerking bepalen welke logging nodig is om Verantwoording af te leggen.

<aside class="example">

Caching voorbeeld nog uitwerken... 

</aside>




## Oude opzet ##

De {{Verantwoordelijke}} definieert haar {{Applicaties}} in de context van deze standaard.
Afhankelijk van de IT Achitectuur kan dit één of meerdere softwarecomponenten bevatten.
Om {{Dataverwerkingen}} te doen voeren Applicaties {{Acties}} uit.
Als gevolg hiervan kunnen Acties verspreid over een IT landschap plaatsvinden.
Een keten van verschillende componenten kunnen samenwerken om een Dataverwerking uitvoeren.
Deze keten kan componenten zoals servers, routers, loadbalancers, firewalls, caches bevatten.
Het is mogelijk dat elke handeling door elke component in de keten als Actie wordt beschouwd.
In dat geval moet elke Actie worden gelogd, en de logs bewaard met het bijhorende bewaartermijn.
Indien elke handeling door bijvoorbeeld een router en cache worden beschouwd als Acties kan dit uit de klauwen lopen.

De Verantwoordelijke bepaald voor haar Applicatie welke Acties er plaatsvinden voor een Dataverwerking en logd deze volgens deze standaard.
Een cruciale afweging voor het bepalen van Acties is dat de Verantwoordelijke bepaald welke logging nodig is in haar situatie om {{Verantwoording}} af te leggen.
