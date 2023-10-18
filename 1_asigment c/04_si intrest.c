#include<stdio.h>
int main()
{
	float p,r,n,t;
	printf("please enter the ammount:\n");
	scanf("%f",&p);
	printf("please enter the rate:\n");
	scanf("%f",&r);
	printf("please enter the time:\n");
	scanf("%f",&n);
	t=p*r*n/100;
	printf("the simaple intrest is the %f\n",t);
	
	return 0;
}