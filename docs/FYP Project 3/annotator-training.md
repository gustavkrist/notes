---
tags: [annotator, training]
---
# Annotator Training

- Let two or more annotators work in parallel

- We usually can't afford double annotation for the whole dataset
- No further IAA (intra-annotator agreement) are possible
- Difficult examples will still pop up!
- Discuss/adjudicate and refine guidelines if necessary
- Update previously annotated parts when guidelines change

## Release

- Do you have the necessary rights?
- Licensing
- Long-term storage (e.g. `https://lindat.mff.cuni.cz/`)
- Ethical aspects: Datasheets for Datasets
  `https://arxiv.org/abs/1803.09010`
    - Motivation
    - Composition
    - Collection process
    - Recommended uses

## Intra-Annotator Agreement

- Let annotators re-annotate a small portion after a while
    - Spaced out, in different color
    - Mixed with new examples
    - Or after a period of time has passed
- Check the *consistency* of annotations
- Reasons for low intra-annotator agreement:
    - Ill-defined guidelines
    - Priming effects
    - Insufficient information to make decisions

## Inter-Annotator Agreement

- Let all coders annotate a common portion of the dataset
- Check for discrepancies in the annotations
- Reasons for low iter-annotator agreement:
    - Incomplete or ambiguous guidelines
    - Diverging interpretations of the guidelines
    - Different annotator background  
      (expertise, language, proficiency)
    - Different understanding of the task
    - Or any of the reasons mentioned above
- Inter-Annotator Agreement gives an indication of how well-defined
  and reproducible the task is.
  
### Assumptions $S, \pi, \kappa$
  
$S$

:   If coders were operating by chance alone, we'd get a *uniform* distribution:
    
    $p(C_1 = k_i) = p(C_2 = k_j)$ for any two categories $k_i,k_j)

$\pi$

:   If coders were operating by chance alone, we'd get the *same* distribution
    for each coder

    $p(C_1=k)=p(C_2=k)$ for any category $k$

$\kappa$

:   If coders were operating by chance alone, we'd get a *separate*
    distribution for each coder.
    
- Inter-annotator agreement metrics are implemented in 
  `nltk.metrics.agreement.AnnotationTask`
