# Overwegingen

*Dit onderdeel is niet normatief.*

## Overwegingen voor Verantwoordelijke die Acties bepalen

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



<aside class="example">

Caching ... 

</aside>

