#include<iostream>
using namespace std;

class user{
	public:
	int account,balance;
	string name,type;
	
	void user_detail(){
		cout<<"Please enter the name "<<endl;
		cin>>name;
		cout<<"Please enter the 10 digit Account number "<<endl;
		cin>>account;
		cout<<"please enter the type of account "<<endl;
		cin>>type;
		cout<<"please enter the ammount you are deposit "<<endl;
		cin>>balance;
	}
	void display()
	{
		cout<<"The Depositer name is "<<name<<endl;
		cout<<"The Account Number is "<<account<<endl;
		cout<<"The Account type is "<<type<<endl;
		cout<<"The total Ammount is "<<balance<<endl;
	}
};
int main()
{
	user obj;
	obj.user_detail();
	obj.display();
	return 0;
}
