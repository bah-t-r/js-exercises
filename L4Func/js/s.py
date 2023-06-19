num = 20

def show_first_message(text):
    print(text)
    num = 10
    print(num)

show_first_message('Hello World!')
print(num)

def calc(a, b):
    return a + b

print(f'{calc(5, 2)}\n{calc(5, 5)}\n{calc(5, 10)}')
