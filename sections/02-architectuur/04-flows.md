# Flows


## Wegschrijven van een logregel na een Dataverwerking

```mermaid
sequenceDiagram
    participant A as Applicatie
    participant L as Logboek
    Note over A, L: Dataverwerking in Applicatie
    A->>+L: Schrijf logregel in Logboek
    L-->>-A: ack
```

Deze transactie is geoptimaliseerd op eenvoud en snelheid, want deze heeft rechtstreeks invloed op de snelheid van Dataverwerkingen. Deze transactie moet schaalbaar zijn naar bijv. honderdduizenden transacties per seconde, o.a. omdat wanneer bij een enkele Dataverwerking meerdere Betrokkenen gerelateerd zijn, voor elk van deze Betrokkenen een logregel wordt weggeschreven.


## Tonen van informatie over een Dataverwerking

Voor het op betekenisvolle manier tonen van informatie over Dataverwerkingen aan bijvoorbeeld een Betrokkene is het nodig om data op te vragen uit zowel het Logboek als het Register. Deze flow mag wat complexer zijn, omdat deze niet voor alle vastgelegde data wordt uitgevoerd en het belang van de bevraging rechtvaardigt dat een bevraging wat langer kan duren.

```mermaid
sequenceDiagram
    participant F as Inzage Applicatie
    participant L as Logboek
    participant R as Register
    Note over F, R: Betrokkene vraagt om inzage
    F->>+L: Vraag logregels van Betrokkene
    Activate F
    L-->>-F: logregels
    F->>+R: Vraag Verwerkingsactiviteiten bij logregels
    R-->>-F: verwerkingsactiviteiten
    F-->>F: Combineeer
    Deactivate F
```

