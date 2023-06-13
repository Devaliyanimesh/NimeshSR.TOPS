#include<iostream>
using namespace std;


class demo{
	public:
	int a[2][2],b[2][2],c,i,j;
	
	void c1();
	void c2();
	void operator-();
	void display();
};

void demo::c1()
{
	for(i=1;i<=2;i++)
	{
		for(j=1;j<=2;j++)
		{
			cout<<"please enter the value";
			cin>>a[i][j];
		}
	}
}
void demo::c2()
{
	for(i=1;i<=2;i++)
	{
		for(j=1;j<=2;j++)
		{
			cout<<"please enter the value";
			cin>>b[i][j];
		}
	}
}
void demo::display(){
	for(i=1;i<=2;i++)
	{
		for(j=1;j<=2;j++)
		{
			c=a[i][j]+b[i][j];
			cout<<""<<c<<endl;
		}
	}
}

void demo::operator-()
{
	for(i=1;i<=2;i++)
	{
		for(j=1;j<=2;j++)
		{
			c=a[i][j]+b[i][j];
			cout<<""<<c<<endl;
		}
	}
}

int main()
{
	demo obj;
	obj.c1();
	obj.c2();
	-obj;
	obj.display();
	return 0;
}