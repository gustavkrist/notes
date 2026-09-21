---
id: "Safety and Troubleshooting Network"
aliases: []
tags: []
---
## Safety

### Emergency Procedues

- Know the best escape route or emergency exit
- Fire suppression systems in data centres usually include:
  - Emergency alert system
  - Portable fire extinguishers (use class C for electrical fires)
    ![[Pasted image 20260918172530.png]]
  - Emergency power-off switch
- Fail open or fail close?
  - Fail open system allows access during a failure
    - Fire alert means all exit doors will stay unlocked so personnel can safely leave and firefighters can enter, despite this is a security risk for unauthorized entrance
  - Fail close denies access during a failure
    - May be used for firewall systems for sensitive data, i.e. credit card numbers
- SDS (safety data sheet) explains how to properly handle substances such as chemical solvents and how to dispose of them
  - Includes information like identification, first-aid measures, fire-fighting measures, accidental release measures, handling and storage guidelines, exposure controls, and physical and chemical properties

### Safety Procedures

- OSHA usually regulates electrical and tool safety
  - Guidelines for power tools
    - Wear PPE (personal protective equipment)
    - Kepp tools in good condition and store properly
    - Right tool for right job and operate according to instructions
    - Watch for trip hazards

#### Lifting heavy objects

- Decide which side of object to face so load is most balanced
- Stand close to the object with feet apart
- Lift with legs, arms, and shoulders (not back or stomach)
- Keep load close to body and avoid twisting body while holding it
- To put object down, keep back straight and lower object by bending knees

### Grounding

- Protecting against static electricity
  - Grounded computer components inside a case
- Sensitive components can be damaged by ESD (electrostatic discharge)
  - Can cause two types of damage
    - Catastrophic failure - destroyed beyond use
    - Upset failure - shorten the life of the component
  - Before touching component, ground by
    - Wearing ESD strap
    - Touching case before touching anything inside
    - Store component inside antistatic bag
- Also always shut down and unplug computer before working inside it

## Troubleshooting Network Problems

Steps used by most export networking troubleshooters:

1. Identify Problem
  - Gather information
  - Identify symptoms
  - Question users
  - Determine if anything has changed
    - New equipment, power surge, etc.
  - See if there are multiple problems - approach each individually
  - Try to reproduce problem
2. Establish theory of probably cause
  - Question the obvious
  - Look for patterns in symptoms
  - Work through layers of OSI models
    - Either bottom to top
      - Could be hardware issue, cable fault, something is not turned on
      - Move onto software issue
    - Or top to bottom - if software issue seems obvious
3. Test theory to determine cause
  - Want to verify problem before e.g. spending money on new equipment
  - If theory confirmed, determine next steps
  - If not confirmed, establish new theory or escalate
4. Establish action plan
  - If making changes to network, consider disruption to people's work
  - Consider scope of changes, how it affects users, applications, data, before making changes
  - Make changes when least people are affected if not an emergency
  - Might have to follow specific change management procedures in the company
    - May not needed for simple problems like a device that's turned off
5. Implement solution or escalate the problem
  - Before making changes:
    - Alert any affected users
    - Make backups of software and data
    - Save or write down current settings before changing them
    - Keep good notes so you can backtrack if needed
    - Make one change at a time and check it its working before moving onto the next step
    - Generally make major changes in stages
      - Make sure its working for a few users before making changes for all users
  - If its a very complex problem, may need to escalate it to someone with more resources/authority
6. Verify full functionality
  - Test the system for full functionality when implementing the solution
    - Come back in a few days to make sure its still working
  - Implement preventative measures if applicable
    - Consider what to do to make sure the problem doesn't come back
    - Is network monitoring software needed to discover the problem in the future if it comes back?
7. Document findings, actions, outcomes
  - Many companies use a case management system to track issues
  - May need to document contact information of the reporting person
    - When the call came in, problem, solution, name of technicians handling it, time spent solving the problem, etc.
  - Good idea to save the solution in a knowledge base so it can be used to solve the problem if it comes back again in the future

![[Pasted image 20260920200413.png]]
