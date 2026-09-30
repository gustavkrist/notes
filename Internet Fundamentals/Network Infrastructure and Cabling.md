---
id: "Network Infrastructure and Cabling"
aliases: []
tags: []
---
## Structured Cabling

- ANSI-TIA-568 standard
- Describes best way to install networking media to maximize performance and minimize upkeep
- Apply no matter which media, transmission tech, or networking speeds
- Based on hierarchical design and assumes a star topology
### From Demarc to Workstation
![[Pasted image 20260928100420.png|500]]
- Demarc separates concern of ISP and company
- IDF contains switches that connect with wires to the workstations

- EF (entrance facility): Location where the incoming network connects to the school/corporate network
- Demarc (Demarcation point): Device that marks ISP network ends and corpos network begins
- MDF (Main distribution frame): Centralized point of interconnection for orgs LAN/WAN
- Data room: Enclosed space holding network equipment
- Rack: Holds various network equipment
- Patch panel: Panel of ports which can be mounted to a wall or rack
    - Provides a central termination point

One or more data room may contain VoIP equipment.
- VoIP gateway
- VoIP PBX (private branch exchange)
- VoIP endpoints

![[Pasted image 20260928101138.png|500]]
- IDF (Intermediary Distribution Frame): Connects to MDF and end-user equipment on each floor and in each building
- Work areas: Encompasses workstations, printers, other network devices
- Wall jacks - ANSI/TIA standard calls for each wall jack to contain at least one voice and one data outlet (i.e. RJ11 and RJ45)

![[Pasted image 20260928101442.png|500]]

#### Rack Systems

- Two-post and four-post varieties
- Wall-mounted, ceiling-mounted, free-standing, or bolted to floor
- Consider when purchasing:
    - Height (measured in rack units (RU or U)), standard is 42U
    - Width (standard 19-inch wide frame)
    - Depth (varies)
- In data centers with multiple rows of racks, a hot aisle/cold aisle layout pulls cool air from vents in the floor or from low-lying wall vents into rows of racks

## Cable types

- Patch cable: Relatively short cable with connector in both ends
- Horizontal cabling: Connects workstations to closest data room and switches (runs through walls/ceiling)
- Backbone cabling: Cables/wireless links connecting EF and MDF or MDF and IDF
- Usually no more than 10m from workstation to data jack, and horizontal cable no more than 90m

## Cable management

- **Termination** (of TP cable): No more than 1 inch of untwisted cable (get crosstalk otherwise)
- **Bend radius**: Don't exceed cables rated bend radius (minimum arc which can be bent to without impairing data transmission)
- **Continuity**: Use a cable tester to verify each cable segment
- **Loosely cinch cables**
- Use cable coverings/conduits - no loose cables across the floor
- No cabling near EMI sources (fluorescent lights, etc.)
- If running cable in the plenum (area above ceiling tile/below sub-flooring), make sure cable sheath is plenum-rated
- **Grounding**
- Leave slack in cable runs
- Use cable trays
- Use patch panels to organize and connect lines
- Follow company standards and inventory
- Keep documentation
    - Of cable plant (cable ratings, etc.)
    - Label every jack/port, patch panel, and connector
    - Use color-coded cables for different purposes
    - Update documentation when making changes to network

