#include<iostream>
using namespace std;

void demo(int area,int breadth)
{
	cout<<"Rectangle="<<breadth*area<<endl;
}

void demo(int area)
{
	cout<<"Circle="<<3.14*area*area<<endl;
}
void demo(int area,int breath ,int harf )
{
	cout<<"Triangle="<<area*breath*1/2;
}


int main()
{
	demo(25,36);
	demo(56);
	demo(36,14);
		
	
	return 0;
}