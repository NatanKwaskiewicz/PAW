def zad4_1():
    with open("sygnaly.txt","r") as file:
        counter = 0
        result = ""
        for line in file:
            counter += 1
            if counter % 40==0:
                result += line[9]
    print(result)

def zad4_2():
    with open("sygnaly.txt","r") as file:
        max = 0
        word = ""
        for line in file:
            if(max < len(set(line))-1):
                max = len(set(line))-1
                word = line
        result = word[:-1] + " " + str(max)
        print(result)

def zad4_3():
    result_array=[]
    with open("sygnaly.txt","r") as file:
        for line in file:
            line = line.strip()
            possible = True
            for i in range(len(line)):
                for j in range(i, len(line)):
                    char1 = ord(line[i])
                    char2 = ord(line[j])
                    max_char = max(char1, char2)
                    min_char = min(char1, char2)
                    diff = abs(max_char - min_char)
                    if(diff > 10):
                        possible = False
                        break
                if (possible == False):
                    break
            if(possible == True):
                result_array.append(line)

    for i in result_array:
        print(i)
zad4_3()