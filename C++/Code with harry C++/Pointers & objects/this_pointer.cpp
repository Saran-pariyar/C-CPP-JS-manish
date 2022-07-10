#include<iostream>
using namespace std;
//Learn more about this pointer 
class you{
int a;
public:
void set(int a){
    this->a=a;
}
void getdata(){
    cout<<"The value of a is "<<a<<endl;
}

};
int main(){ 
     you p;
     p.set(20);
     p.getdata();
return 0;
}