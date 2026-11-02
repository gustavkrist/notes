---
id: "Transmission Basics"
aliases: []
tags: []
---

## Basic Measurements

- **Frequency** in MHz or GHz
  - Physical frequency of electrical signal changes
- **Bandwidth** amount of data that could be transmitted during a given period of time
- **Throughput** amount of data actually transmitted during given period of time
- Bandwidth and throughput measured in **bits per second** (bps) or with prefixes, i.e. kbps, Mbps

## Transmission Flaws

Can have noise (measured in dB). Common sources include:
- EMI (Electromagnetic Interference)
  - power lines, televisions, copiers, fluorescent lights
- Cross-talk when the signal on one wire infringes on adjacent wire signal
  - Alien cross-talk between two cables
  - Near end cross-talk (NEXT) near source
  - Far end cross-talk (FEXT) at far end

**Attenuation** is the loss of signal strength as it travels away from the source.
Can be boosted using a **repeater**, which regenerates a digital signal in its original form.

**Latency is the delay between the signal sent and received
- May cause network transmission errors
- Affected by cable length, and any intervening devices (e.g. repeaters)

**RTT (round trip time)** is the time for packet to go from sender to receiver then back.

Packets with differing delay can arrive out of order (commonly called **jitter** or PDV (packet delay variation))

## Duplex, Half-Duplex and Simplex

- NIC settings for direction in which signals can travel and number of signals that can traverse at once
- Full-duplex - Signals travel in both directions simultaneously
- Half-duplex - Signals can travel in both directions but only in one direction at a time
- Simplex - Signals may travel in only one direction (sometimes called one-way or unidirectional communication)

### Multiplexing

Form of transmission that allows multiple signals to travel simultaneously over one medium. The medium's channel is logically converted into multiple smaller channels or sub-channels. A multiplexer (mux) is a device that combines many channel signals (required at the transmitting end of channel). Needs a demultiplexer (demux) at the receiving end. Three types are used on copper lines:
- TDM (Time Division Multiplexing) - divides channel into multiple time intervals (only one signal at a time)
- STDM (Statistical Time Division Multiplexing) - assigns slots to nodes according to priority and need (only one signal at a time)
- FDM (Frequency Division Multiplexing) - assigns different frequency band for each sub-channel (can send multiple signals at once)
  - Multiplexer modulates signals to send at different frequency and demultiplexer demodulates

Multiplexing for fiber-optic cables:
- WDM (Wavelength Division Multiplexing)
  - Carries multiple light signals simultaneously by dividing light beam into different wavelengths/colors at once
  - Uses amplifiers to keep signals strength strong
- DWDM (Dense Wavelength Division Multiplexing)
  - Increases number of channels provided by normal WDM
  - Used on high-bandwidth or long-distance links
- CWDM (Coarse Wavelength Division Multiplexing)
  - Lowers cost by spacing frequency bands wider apart to allow for cheaper transceiver equipment
  - Lower distance for signals
  - Doesn't use amplifiers
