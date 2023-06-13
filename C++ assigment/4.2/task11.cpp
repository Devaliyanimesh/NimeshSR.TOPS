#include<iostream>
using namespace std;

class demo{
	
	public:
	string w1,w2;
	
	void data()
	{
		cout<<"enter the string"<<endl;
		cin>>w1;
		cout<<"enter the string"<<endl;
		cin>>w2;
	}
	
	void display()
	{
		
		cout<<""<<w1<<endl;
		cout<<""<<w2<<endl;
			
	}
	
	
	void operator-();
	
	 
};

void demo::operator-()
{
	cout<<"concatenate:"<<w1+w2<<endl;
	
}


int main()
{
	demo obj;
	obj.data();
	obj.display();
	
	-obj;

	
	return 0;
}