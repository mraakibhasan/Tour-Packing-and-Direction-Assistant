# utils.py
def knapsack(items, capacity):
    """
    Solve the 0/1 Knapsack Problem.

    :param items: List of dictionaries, each containing 'name', 'cost', and 'weight'
    :param capacity: Maximum capacity of the knapsack
    :return: Maximum cost achievable and the selected item names
    """
    n = len(items)
    costs = [item['cost'] for item in items]
    weights = [item['weight'] for item in items]
    names = [item['name'] for item in items]
    
    # Create a 2D DP table
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    # Fill the DP table
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:  # Can include this item
                dp[i][w] = max(dp[i - 1][w], costs[i - 1] + dp[i - 1][w - weights[i - 1]])
            else:  # Cannot include this item
                dp[i][w] = dp[i - 1][w]
    
    # Backtrack to find selected items
    w = capacity
    selected_items = []
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:  # Item i-1 was included
            selected_items.append(names[i - 1])
            w -= weights[i - 1]
    
    return dp[n][capacity], selected_items
