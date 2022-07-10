#include <stdio.h>
int factorial(int num);

void main()
{
    int n;
    printf("Enter a number ");
    scanf("%d", &n);
    printf("%d \n", factorial(n));
}

int factorial(int num)
{
    if (num == 0 || num == 1)
    {
        return 1;
    }
    else
    {
        return (num * factorial(num - 1));
    }
}
