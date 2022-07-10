/* // first program

#include <stdio.h>
int main(){
    printf("Hello world \n");
    for(int i = 0; i<10; i++){
        printf("hello world \n");
    }
    return 0;
}
*/
#include <stdio.h>
#define PI 3.14159 //defining a global constant

void format_specificer();
void goto_statement();
void typecasting();
int factorial(int num);
void array();
//main func
int main()
{
    // format_specificer();
    // goto_statement();
    //  typecasting();
    // printf("The factorial is %d \n", factorial(5));
    // array();
    return 0;
}

//other functions

void format_specificer()
{
    float a = 1.12345;
    printf("The value is %.3f ", a); //we gave .3f so that it will gives 3 number after the .
    printf("%f is a global constant ", PI);
}

void goto_statement()
{
//goto is mainly used in nested loops, try to avoid using it
label:
    printf("We are inside the label \n");
    goto end;
    printf("Hello world");
    goto label;
end:
    printf("This is end");
}

void typecasting()
{
    float b = 23.4;
    printf("The typecasted value of b is %d \n", (int)b); //it has been converted into a integer
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

void array()
{
    int marks[2][3] = {{12, 34, 54}, {34, 76, 89}};
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d", marks[i][j]);
        }
        printf("\n"); //now second array will print on another line 
    }
}

//This is for another func
