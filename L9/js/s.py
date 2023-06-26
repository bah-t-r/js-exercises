students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam']

def sortStudentsByGroups(arr):
    students.sort()
    a, b, c, rest = [], [], [], []
    for i in range(len(students)):
        if i < 3: a.append(students[i])
        elif i < 6: b.append(students[i])
        elif i < 9: c.append(students[i])
        else: rest.append(students[i])
    rest = (', '.join(rest), '-')[len(rest) == 0]
    return [a, b, c, f'Оставшиеся студенты: {rest}']

print(sortStudentsByGroups(students))