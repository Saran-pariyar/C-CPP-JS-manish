#include<iostream>
#include <string>
using namespace std;
class CWH{
protected:
string title;
float rating;
public:
CWH(string t, float r){
    title = t;
    rating =r;
}
virtual void display(){
    cout<<"This is method of base class \n";
}
};
class CWHvid :public CWH{
protected:
int videolenght;
public:
CWHvid(string ti, float ra, int vid) :  CWH(ti,ra){  videolenght=vid; }
void display(){
    cout<<"The title  is "<< title <<endl;
    cout<<"The ratings  is "<<rating  <<endl;
    cout<<"The videolength  is "<< videolenght <<endl; 
}
};
class CWHtext : public CWH{
protected:
int words;
public:
CWHtext(string ti, float ra, int w) : CWH(ti,ra){  words=w; }
void display(){
    cout<<"The title  is "<< title <<endl;
    cout<<"The ratings  is "<<rating  <<endl;
    cout<<"The words  is "<< words <<endl; 
}
};
int main(){ 
     string title; float rating; int words; int videolength;
     title="C++ tutorial"; rating=3.5; videolength=44;
     CWHvid video(title,rating,videolength);
 
     //Now for the text
     title="C++ tutorial in text"; rating=4.5; words=500;
     CWHtext text(title,rating,words);
     
     CWH *pointer[2];
     pointer[0] = &video;
     pointer[1]=  &text;

     pointer[0]->display();
     pointer[1]->display();

return 0;
}
/*
     Notes of virtual function
1. They cannot be static 
2. They are accessed by object poiners
3. Virtual funstion can be friend fucntion of another class
4. A virtual function in the base class might not be used because compiler will call the function of derived class if we make the func of base class virtual
5. IF there is no similar function in the derived class then the virtual function will run
6.(own point) IF you feel thata your function will not run then make virtual func with similar behaviour and then you will be double sure that your program will run

*/