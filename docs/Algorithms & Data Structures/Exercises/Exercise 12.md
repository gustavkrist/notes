---
tags: [MST, prims, kruskal]
---

## 1 { style="color:lightgreen" }

Hand-run Prim's, Kruskal's and Dijkstra's algorithm on the small example
graph below, and write down the order in which the edges of the graph are explored.

![Graph](assets/Exercise%2012_2022-04-27-21-40-08.png){ width="50%" }

### Prim's algorithm

```markdown
A-B
B-C
C-D
D-E
# A-D
```

### Kruskal's algorithm

```markdown
D-E
B-C
C-D
A-B
# A-D
```

### Dijkstra's algorithm

```markdown
A-B
A-D
D-E
B-C
# C-D
```

## 4.3.1 { style="color:lightgreen" }

Prove that you can rescale the weights by adding a positive constant to all of
them or by multiplying them all by a positive constant without affecting the MST.

Any spanning tree of the graph will have exactly $V-1$ edges, meaning that any
constant added to all edges in the graph will increase the weight of all spanning
trees by the same amount. The same goes for multiplying all edges by a constant,
then the sum of weights of all trees will be multiplied by the same constant, and
the MST will still be the MST.

## 4.3.7 { style="color:lightgreen" }

Describe how you would find a maximum spanning tree of an edge-weighted graph.

Do the reverse of either Prim's or Kruskal's algorithm.

Prim's: Use a max-PQ instead of a min-PQ.

Kruskal's: Sort the edges in descending order instead.

Nice way: Multiply all weights by $-1$

## 4.3.12 { style="color:lightgreen" }

Suppose that a graph has distinct edge weights. Does its shortest edge have to
belong to the MST? Can its longest edge belong to the MST? Does a min-weight edge
on every cycle have to belong to the MST? Argue for your answer to each question
or give a counterexample.

By extension of the correctness of Kruskal's algorithm, the shortest edge will
always examined first and will never create a cycle, as it is the first edge
to be put in the MST, so it will always belong to the MST.

The longest edge can belong to the MST, if removing it from the graph would result
in the graph no longer being connected.

The min-weight edge in every cycle does not have to be in the MST.  
Counter-example:

![Cycle counter-example](assets/Exercise%2012_2022-04-28-14-32-14.png){ width="50%" }

## 4.3.3 { style="color:gold" }

Show that if a graph's edges all have distinct weights, the MST is unique.

By extension of the correctness proof of Kruskal's algorithm. With only unique
weights, Kruskal's algorithm will always examine the edges in the same order and
find the MST. Any other order would result in a spanning tree with a higher weight.

## 4.3.4 { style="color:gold" }

Consider the assertion that an edge-weighted graph has a unique MST only if its
edge weights are distinct. Give a proof or a counterexample.

Counterexample:

![Counterexample](assets/Exercise%2012_2022-04-27-22-25-28.png){ width="50%" }

However if the graph is already a tree, it will have a unique MST despite
identical edge weights.

## 4.3.14 { style="color:gold" }

Given an MST for an edge-weighted graph G, suppose that an edge in G that does
not disconnect G is deleted. Describe how to find an MST of the new graph in
time proportional to E.

DFS or BFS to find a connected components in the MST.
Go through all edges in the graph and find the minimum edge that connects the two parts
of the MST.

## Exam 190820 4.A { style="color:gold" }

```py
G = Graph()
A = B = None
for hex in T[c]:
    if hex == 0:
        if A == None:
            A = 0
            edge_weight = 0
        else:
            B = A + 1
            G.add((A, B, edge_weight))
            A = B
            edge_weight = 0
    else:
        if hex == -1:
            hex = Inf
        edge_weight = max(edge_weight, hex)
if min(edge_weights) == Inf:
    print("impossible")
else:
    print(diameter(G))
```

## 4.3.32 { style="color:tomato" }

*Specified set*. Given a connected edge-weighted graph G and a specified set of
edges S (having no cycles), describe a way to find a minimum-weight spanning
tree of G that contains all the edges in S.

Run a modified version of Kruskal's algorithm that first examines the edges in
S and then examines the remaining edges in the graph in sorted order.

## Exam 190820 4.B { style="color:tomato" }
