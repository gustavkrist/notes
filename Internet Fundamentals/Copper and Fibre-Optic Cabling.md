---
id: "Copper and Fibre-Optic Cabling"
aliases: []
tags: []
---
Overview of cable types:

- Coaxial cable
  - Used for computer networks in 1980s
  - Outdated in modern day
- Twisted-pair cable
  - Ubiquitous in modern network
  - Inexpensive and easy to use
- Fibre-optics
  - Highest throughput, but more expensive and harder to use

## Twisted-Pair Cable

![[Pasted image 20260918160556.png]]

- Consists of color-coded insulated copper wire pairs
  - Each pair is twisted together to form pairs encased in a plastic sheath
- Contains four wire pairs
  - Fast Ethernet (100 Mbps) uses one pair to send data and one pair to receive data
  - Gigabit Ethernet uses all four pairs for both sending and receiving
- Common types include
  - Category (cat) 3, 5, 5e, 6, 6a, 7, 7a, and 8
  - Cat 5e or higher used in modern LANs
- Two classifications
  - Shielded twisted pair (STP)
  - Unshielded twisted pair (UTP)

### Shielded Twisted Pair (STP)

![[Pasted image 20260918160925.png]]

![[Pasted image 20260918160949.png]]

Wires in STP cables are individually insulated and may also be surrounded by foil. Shielding helps resist external electromagnetic forces. The shielding must be grounded to enhance its protective effects.
Effectiveness depends on:
- Level and type of environmental noise
- Thickness and material of shield
- Grounding mechanism
- Symmetry and consistency of shielding

New types of cable like Cat 8 incorporate more sophisticated shielding materials, more tightly twisted wires, and enable higher bandwidth. Can rival fibre-optic at short distances.

### Unshielded Twisted-Pair Cable (UTP)

![[Pasted image 20260918161322.png]]

- One or more insulated wire pairs encased in plastic sheath.
- Contains no additional shielding
  - Makes UTP less expensive and less noise resistant than STP
- Historically more popular than STP
  - Modern cable prices have dropped and now STP prices are more reasonable and may be seeing greater use

### STP and UTP comparison

- Transmit at same rate (throughput)
- Same connector (RJ-45 (Registered Jack 45))
- STP typically more expensive
- STP more noise resistant
- Same maximum segment length (100 meters)
  - Some STP categories require shorter segment lengths for maximum throughput

### Ethernet standards for Twisted-Pair Cable

- Cable category (Cat 5e or Cat 6) determines fastest supported network speed
  - Layer 1 characteristic
- A device's NIC is also rated for a max speed
  - Devices will auto-negotiate for the fastest common standard
- Fastest current Ethernet standard is 100GBASE-T
- Two new standards were recently ratified by IEEE:
  - 2.5GBASE-T
  - 5GBASE-T
  - Provide intermediate steps between Gigabit Ethernet and 10-Gigabit Ethernet

### Cable Pinouts

- TIA/EIA specifies two methods of inserting wires into RJ-45 plugs
  - TIA/EIA 568A
  - TIA/EIA 568B
- No functional difference
  - ==Use same standard on both ends of same cable and jacks==

![[Pasted image 20260918162254.png]]

## Fibre-Optic Cables

![[Pasted image 20260918170007.png]]

- Contains one or more glass or plastic fibres at its core
- Data is transmitted via pulsing light sent from laser or LED diode
- Layer of class or plastic called cladding surrounds the fibres
  - Cladding is less dense than the fibres, so it reflects light back to the core in patterns
  - Reflections allow the fibre to bend
- Outside the cladding there is a plastic buffer to protect the cladding and the core
  - Opaque, absorbs escaping light
  - Surrounded by Kevlar (polymeric fibre) strands

Benefits over copper-cabling:
- Extremely high through-put
- Very high noise resistance
- Excellent security
  - Cannot snip, terminate ends and insert a listening device like copper cables
- Able to carry signals for longer distanced

Drawbacks:
- More expensive than twisted-pair cable
- Require special equipment to splice

### SMF (Single Mode Fibre)

- Consists of narrow core (8-10 microns in diameter)
  - Laser light travels over one path with very little reflection
  - Light does not disperse as signal travels
- Can carry signals many miles before repeating is needed
- Rarely used for short connections due to high costs
- Internet backbone depends on SMF

![[Pasted image 20260918170754.png]]

### MMF (Multimode Fibre)

- Contains a core with larger diameter than SMF
  - Sizes are 50 or 62.5 microns commonly
- Laser or LED light pulses travel at different angles through MMF
- Greater attenuation of signals than in SMF cables
- Common uses:
  - Cables connecting routers, switches, and servers on network backbone
  - Cables connecting a desktop workstation to the network
- Transmission between SMF and MMF can ocur at an FDP (fibre distribution pane)

![[Pasted image 20260918171051.png]]

## Troubleshooting tools

- Check network connection LED status indicator lights
  - Steady light indicated connectivity
  - Blinking light indicated activity
  - Red or amber light might indicate problem

### Toner and Probe kit

![[Pasted image 20260918171308.png]]
- **Tone generator (toner)** issues a signal on a wire pair
- **Tone locator (probe)** is a device that emits a tone when electrical activity is detected
- Sold as a set
- Used to determine where wired pair terminates
  - Cannot be used to determine cable characteristics

### Multimeter

- Measures electric circuit resistance, voltage, and impedance
- Use to do:
  - Measure voltage to verify cable is conducting electricity
  - Check for the presence of noise
  - Test for short or open circuits
    - **Short circuit** is an unwanted connection
    - **Open circuit** is where a needed connection is missing

### Cable Continuity Tester

![[Pasted image 20260918171734.png]]

- Tests whether a cable carries a signal to its destination
- Copper-based cable tester has two parts
  - Base unit generates voltage
  - Remote unit detects voltage
- Most testers provide a series of lights and some emit a tone
  - They are used to signal pass/fail
- Some testers verify UTP, STP wires are paired correctly
  - Not reversed, crossed, or split
- Fibre-optic testers issue light pulses on the fibre and determine whether the pulses reach the other end
- Most testers are portable, lightweight, and inexpensive

### Cable Performance Tester

![[Pasted image 20260918172012.png]]

- Aka line tester, certifier
- Similar to continuity tester but can also:
    - Measure distance to a connectivity device, termination point, or cable fault
    - Measure attenuation
    - Measure NEXT
    - Measure termination resistance and impedance
    - Issue pass/fail ratings for Cat 3-7 standards
    - Store and print results or save to a computer database
    - Graphically depict attenuation and cross-talk

### OPM (Optical Power Meter)

- Also called light meter
- Measures amount of light power transmitted on a fibre-optic line
- Must be precisely calibrated, following highly accurate optical power standards
  - Affected by surrounding room temperature, connection type, and the skill of the technician
