#include<iostream>

using namespace std;
class temp 
{
 int x, y, q;
 public:
 void input() 
{
 cout << "Enter Two Numbers :";
 cin >> x>>y;
}
void display2(){
	 cout << "before Swap x is :"<< x<<endl;
 cout << "before Swap y is :" << y<<endl;
}
friend void swap(temp &t);
void display() 
{
 cout << "After Swap x is :" << x<<endl;
 cout << "After Swap y is :" << y<<endl;
}
};
void swap(temp &t) 
{
    t.q = t.x;
    t.x = t.y;
    t.y = t.q;
}
int main() 
{
    temp t1;
    t1.input();
    t1.display2();
    swap(t1);
    t1.display();
    return 0;
}
