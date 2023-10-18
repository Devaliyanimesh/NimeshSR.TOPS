#include<iostream>
using namespace std;
 void add(int a,int b)
 {
 	cout<<"addition is "<<a+b<<endl;
 }
 void sub(int c,int d)
 {
 	cout<<"substraction is "<<c-d<<endl;
 }
 void mul(int e,int f)
 {
 	cout<<"multiplication is "<<e*f<<endl;
 }
 void div(int g,int h)
 {
 	cout<<"division is "<<g/h<<endl;
 }
 int main()
 {
 	add(10,20);
 	sub(20,10);
 	mul(10,20);
 	div(20,10);
 	return 0;
 }
