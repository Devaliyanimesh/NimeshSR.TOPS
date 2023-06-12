#include<iostream>
using namespace std;

class demo{
	public:
	float guestt,serverr,c1,c2,CostForOneServer,minutes,TotalFoodCost,AverageCost,TotalCost,DepositAmount;
	
	string name,name1,wename;

	
	void weding()
	 {
		cout<<"*********Event Managment System**********"<<endl;
				}
			
	void first()
	{
		
		cout<<"Enter the name of event"<<endl;
		cin>>wename;
	}
		void second()
	{
		
		cout<<"Enter the name first and last name"<<endl;
		cin>>name;
	}
	void guest()
	{
		cout<<"enter  the guest for Event"<<endl;
		cin>>guestt;
	}
	void minute()
	{
		cout<<"number of minutes in the event"<<endl;
		cin>>minutes;
	}
	
	void server()
	{
		serverr=guestt/20;
		cout<<"number of server:"<<serverr<<endl;

	}
	void esti()
	{
		cout<<"***********Event estimate for:"<<name<<"***********"<<endl;
	}
	
	void cost1()
	{
		c1=minutes/60*18.50;
		c2=minutes/60*0.40;
		CostForOneServer=c1+c2;
		cout<<"The CostForOneServer="<<	CostForOneServer<<endl;
   }
   void cos2()
	{
		TotalFoodCost=guestt*20.70;
		cout<<"The Cost of food is="<<TotalFoodCost<<endl;
   }
   void avr()
   {
   	  AverageCost=TotalFoodCost/guestt;
   	  cout<<"Average cost per person:"<<AverageCost<<endl;
   }
   void tot()
   {
   	TotalCost=TotalFoodCost+(CostForOneServer*serverr);
   	cout<<"Total cost:"<<TotalCost<<endl;
   }
	
	void dis()
	{
		cout<<"Please deposite a 25% depodite to reserve the event"<<endl;
	}
	void depo()
	{
		DepositAmount=TotalCost*0.25;
		cout<<"The diposite needed is:"<<DepositAmount;
	}
	
};

int main()
{
 demo obj;
 obj.weding();
 obj.first();
 obj.second();
 obj.guest();
 obj.minute();
 obj.esti();
 obj.server();
 obj.cost1();
 obj.cos2();
 obj.avr();
 obj.tot();
 obj.dis();
 obj.depo();
	return 0;
}
