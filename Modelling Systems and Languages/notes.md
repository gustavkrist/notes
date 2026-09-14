# Modelling systems and languages exam notes

## Introduction

### Reasons for model driven software engineering (MDSE)

- Modern software challenges
  - Modern software has increased size/complexity/hetegoreneity
  - Non-programmers have to code
  - Business logic encoded in legacy programs
  - Outdated tech
  - Hard to audit AI code
- Goals of MDSE
  - Offload some SD from software engineers
  - Enable non-programmers to program in their domain
  - Decouple business logic from programming language

### Defining Characteristics of a Model

- Projecting - represents an original
- Abstracting
  - Doesn't contain all details
  - May simplify attributes
- Pragmatic - May replace original

### Model-Driven / Model-Based

- Model-Driven Development
  - Model is the **primary artifact** and central element for development
  - Model is the **specification for implementation**
  - E.g. EMF Ecore
- Model-Based development
  - Model is a **secondary artifact** and an additional element for development
  - Model is often out-of-sync with implementation
  - E.g. UML Modeling

### Languages

- Systems to communicate ideas
- Several modalities
  - Can be spoken, written, textual, graphical, etc.
- Several parts
  - Syntax, semantics, pragmatics
- Domain-specific languages are like a next step of abstraction on top of general purpose
programming languages, closer to natural language
  - Specific tool with a specific purpose to fulfill efficiently and effectively
  - E.g. SQL, Scratch, HTML, GLSL - *textual*
  - Can be graphical, i.e. circuit diagrams, molecule structure diagrams, sheet music
  - Can be executable
    - Directly (interpretation) - SQL, Scratch, etc.
    - Indirectly (generation)
    - Data Specification (input) - HTML, diagrams, note sheets
    - Not a sharp definition
  - Advantages
    - Easier to analyze
    - Safer
    - Meaningful errors
    - Easier to port
    - Easier to learn
  - Disadvantages
    - Have to learn new languages
    - Language lock-in
      - Also vendor lock-in for IDE (except with LSP, maybe less so)
    - Not flexible/expressive enough
      - Can be fixed with larger scope and design

![[Pasted image 20260623182735.png]]

- Metamodel defines the concepts and structure a model can have
- Model contains specific information
- DSL allows for high-level definition of concepts, which can be represented as a model
  - Metamodel also defines concepts and structure of a DSL (when a concrete syntax is added)

### Langium and EMF

- Langium
  - DSL framework
  - Can generate IDEs/Plugins in VSCode, Eclips Theia, ...
  - Uses LSP as backend
  - No *true* metamodel

- EMF
  - Most common framework for model-first approaches
  - Genereates tree-based editor
  - Part of toolkit in Eclipse is dated and messy

## Metamodels

![[Pasted image 20260623183908.png]]

- Higher level models are platform independent
  - No technology details
  - Pure domain concepts
- Lower level abstractions are platform dependent
  - Need tech details for generation
  - E.g. generation language, package names

- Traditional software manually transforms from requirements to code.
- MDSE does semi/(semi)automatic translations
  - Manual creation of domain specific artifact from requirements
  - Fully automatic code generation from DSL
- Software system consists of individual code, schematic repetitive code, and generic code
  - Individual code is unique to the project and must be hand written
  - Generic code is reusable across projects
  - Schematic code is like boilerplate code that can be generated
  - Use MDSE when
    - Individual code can be captured in a model/DSL
    - Schematic repetitive code is a significant portion of the software system
    - Generic code can be reused
- In MDSE, big overlap between work of domain experts and software engineers
- DSL solves this by having the domain experts design the domain specific artifact
- Separates business logic and its technical realization, which resolves the overlap in responsibilities
- Domain experts involved in the design of the DSL by providing requirements
- Software engineers create the design and transformation of the DSL
- Domain experts use the DSL to develop applications

### Concepts in metamodeling

- Types of errors
  - Syntax - language concepts (vocab), permissible combinations of vocab (grammar)
  - Semantics - What are meaningful statements, what happens when executed
- Kinds of syntax
  - Concrete syntax
    - Notation to illustrate language intuitively
    - Textual, graphical, etc.
  - Abstract syntax
    - Represents language concepts internally
    - Not semantics
    - AST/abstract syntax graph
  - User interacts with concrete syntax, which is transformed to abstract syntax, which the
  computer interacts with
  - Metamodel defines the abstract syntax of the language

### Modeling the metamodel

- Metametamodel defines
  - Concepts to define metamodels
  - Elements like Class, Property, etc.
  - Metametamodel is defined in its own notation
- Tiers of models:
  - Metametamodel M3
  - Metamodel M2
  - Model M1
  - Instance M0
- VS Class Diagrams
  - Metamodels describe a domain and its terms, UML describes a software system
  - Metamodels specifies how to structure data, UML specifies how software should be structured
  - Metamodels can be used to generate data handling code and API for access, UML can be used to
  generate basic structure of software system
- Metamodels can reference other metamodels to use concepts defined there
  - May be done over multiple levels
  - Allows reuse by placing metamodel elements in separate metamodel reused by multiple other metamodels
- Multiple models can be instances of the same metamodel
- A model can also reference another model
  - Referencing model can conform to the same metamodel, or a different one

### What is a model

- Textual DSL
- Graphical DSL
- Abstract syntax editor - editor generated from the metamodel allowing only structurally valid
modifications
- Program - can create models as instances of metamodels by using generated factory

### Process of metamodeling

![[Pasted image 20260623191041.png]]

- Identify basic of metamodel/DSL
  - Purpose
    - Make language as small as possible/large as necessary
    - Determine adequate tools
    - Ask subject matter experts (customers)
  - Stakeholders
    - Helps identify terms, ideas, general concepts, level of abstractions
    - Helps determine type of syntax
    - Survey and categorize your potential users
  - Concepts
    - Enumerate important constructs - physical, structural/logical, abstract/concrete,
    operational/temporal
    - Direct input to first iteration of metamodel
    - Take special note of nouns
  - Properties and relations
    - Provides potential structures of models defined for the metamodel
    - Properties are similar to attributes
    - Relations connect multiple concepts
  - Examples
    - Prototype examples with prospective users
    - Systematic method for asking questions and documenting answers
- Example for FSM/MSQL

### Implementing metamodeling

- Metamodels
  - Tree-based editor, graphical Ecore diagram editor, Xcore, EMFatic
- Model semantics
  - Specifications of constraint as static semantics: OCL, Eclipse Validation Framework
  - Definition of interpreters and generators for operational semantics: Code
- Textual languages: Xtext, EMFText, Langium
- Graphical languages: GEF, GMF, Graphiti
- Model-to-text (M2T) transformation: Jet, Acceleo, Xtend, etc.
- Model-to-model (M2M) transformation
- Ecore
  - De-facto implementation of EMOF and the metamodeling notation (metametamodel) of EMF
  - Is defined in Ecore
  - Containment references are composition, i.e. the source element controls the life cycle of the
    referenced object
  - eOpposite inverse relations have automatically maintained integrity
  - Ecore GenModel specifies packages, naming conventions, etc. for generation
    - Makes metamodel platform dependent

## Textual Syntax

- Advantages of textual languages
  - Easy to work with (cut/copy/paste, diff/merge)
  - Efficient - typing father than clicking, common to programmers
  - Powerful editors "out of the box"
  - Interaction with standard tools (vc, patches, forums/email for help)

### MiniSQL

- Simplification of SQL
- Separate metamodels for queries and database schema, query metamodel references the other
- Concrete and abstract syntax
  - For textual language, concrete syntax defined by grammar
    - Contains spelled out keywords, literals for values, comments, and whitespaces
  - Abstract syntax contains language constructs and their properties
    - In MDSE, definition of abstract syntax is in the metamodel
  - In MDSE, translating concrete into abstract syntax is called parsing
  - With an abstract syntax and a concrete syntax, we get a language definition
  - Abstract syntax can have more than one concrete syntax
  - In EMF metamodel + genmodel = abstract syntax
  - Translation from concrete to abstract syntax may require a compiler (lexer + parser)

### Lexers and parsers

- Lexers
  - Translates character stream into token stream
  - Turns stream of characters (including whitespace) into streams of tokens (more coarse grain units)
- Parsers
  - Translates a token stream into an AST
  - Typically scans the token stream
- In MDSE, the AST is a model

### Formal grammars

- Syntax diagrams
  - For visualization only
- Consists of terminals and non-terminals
  - Terminals
    - Tokens
    - Atomic language structures e.g. keywords, identifiers
    - Used by lexer
    - Specified as regex
    - Order of definition matters for lexer
  - Non-terminals
    - Syntax rules over terminals and other non-terminals
    - For complex language structures e.g. statements, expressions
    - Used by parser
    - Specified as EBNF (or similar)
- EBNF (Extended Backus-Naur Form)
  - Alternation `|`
  - Option `[...]`
  - Repetition `{...}`
  - Grouping `(...)`
  - Terminal string `"..."`
  - Has `?`, `*` and `+` from regex, and character ranges `"A"-"Z"`
- Terminals calls no further rules, is merely a regex
- Grammar combines information for both lexer and parser
- Comments can be discarded by the lexer, or be part of the AST for e.g. serialization or annotations

### Expressions

- Part of the language that can be evaluated to a value
  - Usually the value is associated with a type
  - Nested subexpressions

#### Parsing Strategies

- LL(k) parsers (Xtext, EMFText)
  - Top-down parsing
    - Look at grammar rules
    - Try to match them on input
  - Naming
    - Left-to-right input processing
    - Leftmost derivation first
    - Lookahead of k tokens
- LR parsers
  - Bottom-up parsing
    - Look at input
    - Try to match grammar rules
  - Naming
    - Left-to-right input processing
    - Rightmost derivation first
- LL(k) parsers enter infinite loops with left rule-expansions that don't consume characters or are
  recursive
  - Can left factor syntax to restructure it to eliminate left recursion
    - Changed AST and operator associativity
- Cannot deal with grammar ambiguity
  - Multiple ASTs can be constructed from a single input
  - Restructure grammar to only have one correct traversal order
    - Encode operator precedence in grammar

### Grammar-first vs Metamodel-first

- Grammar-first generates the metamodel from a grammar
  - Focus on language development
  - Faster prototype
  - Generates a metamodel that is not structured particularly well
    - Takes away the process of finding consensuses of common understanding of how the domain
    should be represented
    - All subsequent tools have to deal with the model, so a poorly structured metamodel makes
    processing steps more complicated
- Metamodel first has the metamodel as a basis of the grammar
  - Focus on metamodeling
  - Cleaner domain abstraction

### Graphical syntax

- Concrete syntax could be tabular, audible, graphical, etc.
- Can mix textual and graphical syntaxes to create languages with graphical elements where values
can be filled in
- Tabular languages have a primary structure that is a table that can be filled in
- Benefits of graphical languages
  - Use two dimensions and size
  - Some concepts easier to visualize
- Drawbacks
  - Visual complexity does not scale
    - Too many edges
    - Elements scattered
  - Reduced creation efficiency
  - Tool creation is more complicated
  - Some constructs cannot be visual, e.g. logical operations, regex
  - Better for explicit display of relations than textual syntax
  - Layout may include additional information
  - High information density
- Visual information and relation should invoke some similarity to the modeled thing
- Spatial relation and edges can be a metaphor
- Edges can be dependencies, connections, ...
- Top-down relation can be containment, ownership, dominance, ...

## Constraints

### Model semantics

- Syntax
  - Elements of the language, how they principally fit together
  - Structurally valid sentences
  - Defined in metamodel
- Semantics
  - Meaning of the language artifact
  - Meaning and well-formedness
  - Defined in constraints and operations
  - Different kinds of meaning require different formalisms
  - Static semantics
    - Well-formedness of the model
    - Checked without execution
    - Enforced via constraints
  - Operational semantics
    - Execution of the model via interpretation, compilation, etc.
    - Defined over well-formed models
- Metamodel cannot capture well-formedness
  - E.g. "Parent has to be older than child unless parent is dead"
- A Constraint is a well-formedness condition
  - A boolean expression
  - Checkable by a compute
  - Defined and evaluated on elements of a model
  - Does not change the model
  - Must hold for well-formedness condition to be satisfied
  - Restricts the set of valid models a metamodel permits

### OCL (Object Constraint Language)

- OCL is a declarative language for model constraints
  - Language execution without side effects
  - Evaluation of OCL expressions returns truth value
  - true, false, or undefined
  - Programmer-friendly syntax
  - Typed language - each OCL expression has a type
- Originally designed as constraint language for UML
- Go tool support
- Not a programming language
  - No programming logic or control flow
  - No setting of values, only queries
  - No invocation fo processes or non-query operations
  - Evaluation of constraints cannot fail

![[Pasted image 20260624150158.png]]

- Constraint context
  - Constraint formulates assumptions over context
  - Context defines names available in OCL expressions
  - Can be instance of a (meta) class, method, other things
  - Implicit `self` variable refers to the context object
  - Can be named for disambiguation
  - Can name constraint too
- Invariant constraint
  - Specifies a property that always holds
  - Weak invariants
    - Holds before and after method execution, but not necessarily during
- Effective constraints:
  - Avoid complex navigation expressions
  - Appropriate context
  - Avoid `allInstances()`
  - Split "and" constraints by writing multiple constraints


### Imperative constraints

#### Type systems

- Reduces inadvertent programming mistakes
- Allows to define and check interfaces
- Allows static checks
- More efficient implementation
- What is a type?
  - Type is an abstraction of runtime values at compile time
  - Every syntactic value needs to have a type assigned to it
  - A type system is a set of typing rules over syntax
  - A sound type system guarantees that if typing succeeds, certain kinds of errors do not occur at
    runtime
- Explicit or implicit types
- For MiniSQL, define an additional metamodel for types
- Can write static types as constraints
  - Constraint assures that the operation can operate on the respective input types

## Transformations

### Operational semantics

- Metamodels for data vs. metamodels for execution
- FSM example for running a model
  - Metamodel describes the domain of FSMs, not of FSM executions
  - Is an execution state a program?
    - Solution: introduce metamodel for execution state
      - Sometimes called runtime syntax
      - We use "runtime configuration"
  - Operational semantics define execution over runtime configurations
- Surface syntax is instance of grammar
  - Model is instance of domain metamodel and transformed from surface syntax
  - Initial runtime configuration transformed from model
    - Instance of runtime metamodel
    - Transforms into a new runtime configuration
- Operational semantics describe how a model is executed using reductions
  - Reduction substitutes a model element with another if some conditions match
- Execution terminates once no rule can be applied
- Not all terminating sequences are desirable
  - Solution:  a subset of states is considered *final for successful termination*
    - For expressions, only literals are final
- Type soundness connects type system and operational semantics
  - If $\Sigma \vdash P : T$ then $P$ terminates in a final configuration

### Operations in metamodels

- Metamodel is abstraction of domain
- Model is representation of data
- Operations should be used only for simple procedures, e.g. easier data access
  - Determining expression's type is sensible via operation
- Specifying operation bodies
  - Customize generated code
    - Write operation body
    - Mark code as `@generated NOT` (protected region)
    - Mixes manual and generated code
  - Annotate metamodel
    - Annotate operation with body
    - Code generator "weaves" body into generated code
    - Can be regenerated
  - Use advanced tools
    - Xcore can write operation bodies
    - Risk of using too many operations
    - Useful only when you know exactly what you are doing
### Interpreters vs. Compilers

- Execution with interpreter takes model and user data and generates a result
  - Perceive model as a navigable graph of model elements
  - Traverse model elements according to inference/reduction rules
  - Apply effect of inference/reduction rule of each model element
  - Terminate when no more rules apply
- Execution via compiler generates code from the model, then runs the generated code with user data
  to get a result

### Model-to-Model transformations (M2M)

- Idea: produce target models from source models
- Goal: (usually) convert all model elements to target model(s)
  - Exploit containment relation to iterate over all model elements
- Adhere to metamodels
- Application scenarios
  - Format conversions
  - Data import/export
  - Compilation
  - Optimization
- Source and target models can have same or different metamodels
- Can alter alter model in-place, while adhering to metamodel after
- Challenging:
  - Different naming/structure of source and target models
  - Entirely different notations for source and target models
  - Multiple rules for elements depending on content
  - Not all elements have to be transformed
  - Connection between source and target models may have to be captured
- Dedicated M2M technologies
  - Query-View-Transformation Operational (QVT-O)
  - Atlas Transformation Language (ATL)
  - Different syntax, paradigms, benefits/drawbacks
- Ecore as metametamodel is basis for M2M
- Trace Model
  - Keeps track of relation between source and target elements
  - Trace model enables cross reference resolution in target model
- Example GCC as M2M
  - Different frontends as input language, grammars as metamodel
  - Generic IR as interface from parser to middle-end
  - Gimple IR for graph-based optimizations
  - RTL IR for linear optimizations and codegen
  - Every supported backend is another metamodel
  - Compiler construction is mainly M2M pipelines - with very complex transformations and
  semantics, but rather simple metamodels
- ATL
  - M2M transformation language
  - Specified as metamodel and textual concrete syntax
  - Converts source model(s) to target model(s) and keeps traces
    - Source models are read-only
    - Target models are write-only
    - Rules convert between source and target model(s)
      - Two types of rules
        - Matched rules
          - Standard case, invoked implicitly, called at most once during automatic traversal of
          source model, can be declared lazy for manual calls
        - Called rules
          - Special case, have to be invoked explicitly, can be called multiple times, allows
          parameters to customize call
    - Trace model maintains connection between source and target model elements
  - Allows OCL constructs in from clause of rules to restrict applicability
  - Can define helper functions
    - Can be invoked from various constructs
    - Have no side effects
    - May be defined in a context which allows calling on elements of the context's type
  - Called rules permit imperative statements in (optional) do block
    - May have parameters and a dynamic return type
  - Benefits
    - Flexibility through hybrid approach
    - Automated application of transformation rules
    - Re-uses OCL for queries
    - Automatic trace model
  - Drawbacks
    - Peculiarities of concrete syntax
    - Very limited debugging support
    - Setup information hidden in Eclipse launch configs
    - Documentation hard to find

### Model-To-Text Transformations

- Printing:
  - Printing is inverted parsing
  - Printing needs a metamodel and grammar
  - Benefits
    - Ease: If grammar exists, printing is for free
    - Known technology: Can use M2M tech for performing the actual transformation
  - Drawbacks
    - Complexity: If target language is complicated, creating grammar is too
    - Overhead: Needs metamodel even if only small part of language is used for M2T
- M2T basics:
  - Idea: produce text from source models
  - Goal: use necessary information from models to create content of textual foramt
  - Application scenarios:
    - Code generation
    - Webpages
    - Reports
  - Templates are text with placeholders
  - M2T engines are an alternative to printing

## Knowledge Engineering

### Domain modelling beyond metamodels

- Many different domain models: ER diagrams, UML diagrams, Metamodels
- Each modeling technology targets a different class of use cases
- Common factors?
- Knowledge engineering
  - Can we express domain models independent of use case and technology
  - Discipline concerned with the commonalities between different conceptual modeling frameworks
  - What are general domain modeling principles?
  - How to scale domain modeling and introduce it into an organization?

#### Context and Semantics

- More "pure" form of domain modeling: Ontologies
  - Similar to metamodels
  - Most "pure" use case: semantic integration
    - Given several entities in an organization, each with different data bases and software
    applications, how to harmonize data?
    - Currently used as Semantic layers, Context Graphs, Digital Threads, ...

##### Semantic layers

- Transition layer
  - ... between multiple, independently managed data sources, or
  - ... on top of a data warehouse
- Allows business intelligence to use business terminology for data ccess
- Challenge: Multiple sources need to agree on common view for one user

![[Pasted image 20260624170100.png]]

##### Digital Thread

- Representation of a product through its whole life cycle
- Keeping track of designs, simulations, experiments, etc. in engineering projects
- Challenge: Multiple users need to agree on common view on artifact

![[Pasted image 20260624170218.png]]

##### Context Graph

- Digital thread of the executions of an agent, connected to its semantic context
- Challenge: Both multiple users and multiple sources

### Knowledge Organization Structures

- Building a conceptual domain model is a difficult and work-intense project
- Metamodel can be broken down according to structure
  - Sub-metamodels for reuse, 5 step methodology
- Or according to its complexity
  - A hierarchy of knowledge organization structures
- "A knowledge organization system is a scheme that models a structure of an organized set of knowledge"
  - E.g. the course database of LearnIT can be seen as a KOS

#### KOS Hierarchy

![[Pasted image 20260624170650.png]]

- Controlled vocabulary
  - List of authorized words
  - Makes sure users agree which words to use, and which to avoid
  - Focus: eliminate ambiguity
  - Basis for tagging systems, subject headers
- Glossary
  - Controlled vocab plus explanations
- Taxonomy
  - Controlled vocab with hierarchical structure
  - Only subset relation between concepts is allowed
  - Focus: Eliminate ambiguity, establishing hierarchy
  - Basis fro search systems, more precise tagging
- Synonym ring
  - Controlled vocab with equality structure
  - Only equality relation between concepts is allowed
  - Focus: Eliminate ambiguity, synonym control
  - Basis for search systems, more precise tagging
- Thesaurus
  - Taxonomy and synonym with additional associative relations between concepts
  - Antonyms, similarity, mutual exclusion, ...
  - Focus: Eliminate ambiguity, complex structure in general terms
  - Relations are not part of the domain
  - Basis for simple metamodel

##### Ontologies

- Thesaurus with additional domain-specific relations, i.e. an unrestricted domain model
- Ontologies and metamodels are not easily analyzed as KOS, but KOS hierarchy gives a methodology in
  iteratively developing them
- In our hierarchy: make the relations in a thesaurus more specific

![[Pasted image 20260624171243.png]]

- Definition: A formal, explicit specification of a shared conceptualization
  - Objects, concepts and other entities assumed to exist in some area and the relationships among
    them, agreed upon by multiple people, machine-readable and machine-interpretable
- Difference from metamodels
  - Historical and grounded in used languages
    - Metamodels are not necessarily shared, but most often they are
    - Ontologies focus on problem space, metamodels focus on solution space
      - Problem space is described with abstractions for the real-world context
      - Solution space is described with abstractions for the software implementation

### Competency Questions

- An up-front, user-defined question the model is supposed to answer
- Different kinds of CQs, each validating a different aspect of the model
- Ontological CQs focus on the metamodel in itself
  - Reuse, patterns, etc.
  - "Does the metamodel make some sense"
  - Heavily depends on the used methodology and tools
  - Foundational CQ
    - Aligns the concepts with more higher-level concepts from a reused metamodel/KOS
    - Examples: Can I count event(water)? Is a lecture a physical entity? Is a lecture an EClass?
  - Meta-property CQ
    - Classify concepts based on properties that holds across meta-models/KOS
    - Example: Is there one type of relation among identifiable parts of a lecture that makes a lecture whole?
- Domain CQs focus on the relation of the metamodel to the domain
  - Correct use of terminology
  - "Does the meta-model make the right sense"
  - Does the metamodel model the domain? Can I use it for its intended purpose?
  - Scoping CQ
    - Define the scope and domain of the metamodel/KOS
    - Examples: What do lecturers teach? What role does Eduard have in course MoSyL?
  - Validation CQ
    - Verify accuracy of the metamodel/KOS
    - Examples: Is Eduard course manager of MoSyL? Does every course have a programme assigned? Is MoSyL a course?
- Relationship CQs
  - Between ontological and domain CQs
  - Investigate the characteristics of relationships
  - Examples: What is the domain of the "taught_by" relation? What are the entitites that are "part_of" a course?

#### CQs as test cases

- Some CQs, especially validation CQs, can be used along examples as test cases
- Use queries to formulate CQ and run it
- Typescript test cases in Langium
- OCL in ECore model

## Advanced Topics

### Language Server Protocol (LSP)

- LSP is push-based: during editing, editor notifies the server
- Provides generic capabilities corresponding to generic features
- Communication is on the level of syntax
- Messages are in JSON format
  - Initialization connects server and client, which inform each other about their capabilities
  - Also informs the server about the relevant workspace
- Synchronization:
  - Client informs the server about workspace
  - Server only has read access
  - When client opens a file
    - Server must be notified about changes until file is closed
    - In-memory version of the file is considered the truth
- Editing and capabilities:
  - Capability is a registered keyword and type, sent by the client and answered by the server
  - Server can send without explicit requests

### Variability

- Often have to manage related variants of the same system that share a core functionality
- Cause of frustration, hard to find bugs and awkward reuse patterns
  - E.g. linux kernel with many configuration variants, cars with different feature combinations
- Features:
  - Features are user-visible characteristics of a system
  - Part of problem space
  - Not directly part of the domain, but part of the usage domain
- Feature modeling
  - Features are connected and can be interdependent
  - Can be binary (on/off) or numerical (# of maximal users)
  - Typically are binary and constraints are encoded via feature models
  - Feature model is a graphical representation of a propositional logic formula

![[Pasted image 20260624174732.png]]

- Model variability is reuse on the model level
- Language variability is reuse on the DSL level

#### Activation conditions

- This connection of feature and feature modeling is called activation condition
- Add M2M transformation that takes the feature model, input model, then removes all parts of the
input model that is not activated by the feature model
- Advantage: Very clean MDE
- Disadvantage: Very specific to MDE, hard to scale especially for text
- Alternatives:
  - Clone-and-own
    - Clone variant is stored in a repository
    - Every new variant is cloned and must be kept up to date if the core changes
    - Process-heavy approach
    - Does not require additional model or infrastructure, does not require changes to language
    - Does not scale due to low automation
    - Fine if number of variants is low
  - Preprocessing
    - Embedding activation conditions into a programming language, e.g. `#ifdef #ifndef` directives or build system directives
    - Linux kernel way (Kconfig)
    - Does not require changes to the language (can use C preprocessor for non-C languages)
    - Feature model easily added
    - Requires discipline, messes with type systems and compilers
  - Deltas
    - Extend programming language with explicit reuse structures and feature model
    - Can work well with type systems, similar to traits
    - Feature model explicit, scales and integrates with static analysis
    - Unusual language feature may deter developers, not available for many languages

### Projectional Editing

![[Pasted image 20260624175353.png]]

- JetBrains MPS framework
- AS editors can be textual, but enforce that you cannot break structure

### External/Internal DSL

- External DSL
  - Standalone DSL
  - Free choice of syntax
- Internal DSL
  - Embedded DSL in another language
  - Syntax depends on host language
