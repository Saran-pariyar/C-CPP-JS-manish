#include<iostream>
#include <string>
using namespace std;
//The class which is only made to derive it is called abstract base class
//Abstract base class is only made to make another class from them
//Abstract base class is only designed to make other class from it
//Avstract base class has at least one virtual function
class CWH{
protected:
string title;
float rating;
public:
CWH(string t, float r){
    title = t;
    rating =r;
}
virtual void display() = 0; //Thsi is an pure virtual function and it is only made to derive 
//Now if we dont make a function in a derived class then it will show us error
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