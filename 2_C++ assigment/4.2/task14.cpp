#include<iostream>
using namespace std;

class demo{
	
	private:
		int a,b;
		public:
			void getdata()
			{
				
				cout<<"enter the two value"<<endl;
				cin>>a>>b;
			}
	friend void findmax(demo d);		
};
void findmax(demo d)
{
	if(d.a>d.b)
	{
		cout<<"a is largest";
	}
	else{
		cout<<"b is largest";
	}
}
int main()
{
	demo s;
	s.getdata();
	findmax(s);
	return 0;
}

