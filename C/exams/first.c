#include <stdio.h>
//demostrate div tag of css implemented in the webpage with example
// formula to find area of circle and simple interest
//exmplain any four finle handling function with syntax and example

int factorial(int n){
    if( n==1){
        return 1;
    }
    else{
        return (n*factorial(n-1));
    }
}
void using_pointer()
{
    int a, b, *pa, *pb, sum;
    printf("enter 2 numbers");
    scanf("%d %d", &a, &b);
    pa = &a;
    pb = &b;
    sum = *pa + *pb;
    printf("%d", sum);
}
    
void prime_composite(){
    int a,b=0;
    printf("Enter your number");
    scanf("%d",&a);
    for(int i=0; i<a; i++){
        if(a%i == 0){
            b= b+1;
        }
    }
    if(b==2){
        printf("Prime number");
    }
    else{
        printf("Composite number");
    }
} 
void main()
{
    // prime_composite();
int a ;
scanf("%d",&a);
    factorial(a);
}