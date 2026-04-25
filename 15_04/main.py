def read_graph(filename):
    with open(filename, 'r') as file:
        lines: list[str] = file.read().split('\n')
    node_count: int = int(lines.pop(0))
    neighbors_list: list[list[int]] = []
    for line in lines:
        line: list[int] = list(map(int, line.split(' ')))
        line.pop(0)
        neighbors_list.append(line)
    return neighbors_list, node_count


def write_neighbors_list(neighbors_list):
    for i, j in enumerate(neighbors_list):
        nodes: str = ", ".join(map(str, j))
        print(f"Sąsiadami wierzchołka {i} są {nodes}")

def list_to_matrix(neighbors_list):
    matrix: list[list[int]] = []
    for i in range(len(neighbors_list)):
        matrix.append([])
        for j in range(len(neighbors_list)):
            if j in neighbors_list[i]: a=1
            else: a=0
            matrix[i].append(a)
    return matrix

def write_matrix(neighbors_matrix):
    for i in range (len(neighbors_matrix)):
        for j in range (len(neighbors_matrix)):
            print(neighbors_matrix[i][j], end=" ")
        print()

def main():
    filename="graph.txt"
    neighbors_list = read_graph(filename)[0]
    write_neighbors_list(neighbors_list)
    matrix = list_to_matrix(neighbors_list)
    write_matrix(matrix)

if __name__ == '__main__':
    main()