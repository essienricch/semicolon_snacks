def decimal_equiv(binary_number):
    updated = str(binary_number)
    decimal = 0
    power = 0

    for digit in updated[::-1]:
        decimal += int(digit) * (2 ** power)
        power += 1

    print("Decimal equivalent:", decimal)


def merge_list(my_array_list, second_array):
    my_array_list.sort()
    second_array.sort()
    new_list = []
    for i in my_array_list:
        new_list.append(i)
    for i in second_array:
        new_list.append(i)
    print(new_list)


if __name__ == '__main__':
    value = 1010101011
    decimal_equiv(value)
    my_list = [1, 3, 4, 5]
    my_2list = [2, 6, 7, 8]
    merge_list(my_list, my_2list)
