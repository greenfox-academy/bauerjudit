def fizz_buzz(minimum, maximum):
    n = minimum

    while n <= maximum:
        if n % 3 == 0:
            print("fizz")
        else:
            print(n)
        n+=1

fizz_buzz(0, 50)
