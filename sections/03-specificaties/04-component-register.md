# Component: Register

Voor ieder {{Register}} met statische data over Dataverwerkingen gelden de volgende specificaties voor het gedrag en de interface.

## Gedrag

Het Register MOET iedere relevante wijziging van een Verwerkingsactiviteit opslaan als een nieuwe versie met tijdstip, zodat de `dpl.core.processing_activity_id` naar een eenduidige versie van de verwerkingsactiviteit verwijst in combinatie met het tijdstip.
