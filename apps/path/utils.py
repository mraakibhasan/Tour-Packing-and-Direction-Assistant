import heapq
from collections import defaultdict

def prim_algorithm(graph, start_vertex):
    """
    Implementation of Prim's Algorithm to find Minimum Spanning Tree (MST).
    
    :param graph: Dictionary representing adjacency list of graph. 
                  Example: {0: [(1, 4), (2, 1)], 1: [(0, 4), (2, 2)], 2: [(0, 1), (1, 2)]}
    :param start_vertex: Starting vertex for the algorithm
    :return: List of edges in the MST and the total cost of the MST
    """
    # Priority queue to store (weight, source_vertex, target_vertex)
    priority_queue = []
    visited = set()  # Set to keep track of visited vertices
    mst = []         # List to store edges of the MST
    total_cost = 0   # To store the cost of MST
    
    # Add all edges of the start_vertex to the priority queue
    visited.add(start_vertex)
    for neighbor, weight in graph[start_vertex]:
        heapq.heappush(priority_queue, (weight, start_vertex, neighbor))
    
    # Process the priority queue until all vertices are visited
    while priority_queue:
        weight, source, target = heapq.heappop(priority_queue)
        
        # If target is already visited, skip this edge
        if target in visited:
            continue
        
        # Add the edge to the MST
        visited.add(target)
        mst.append((source, target, weight))
        total_cost += weight
        
        # Add all edges of the newly visited vertex to the queue
        for neighbor, weight in graph[target]:
            if neighbor not in visited:
                heapq.heappush(priority_queue, (weight, target, neighbor))
    
    return mst, total_cost

# Example usage
if __name__ == "__main__":
    # Define a graph as an adjacency list
    graph = {
        0: [(1, 4), (2, 1)],
        1: [(0, 4), (2, 2), (3, 5)],
        2: [(0, 1), (1, 2), (3, 8)],
        3: [(1, 5), (2, 8)]
    }
    start_vertex = 0
    mst, total_cost = prim_algorithm(graph, start_vertex)
    print("Edges in MST:", mst)
    print("Total cost of MST:", total_cost)
