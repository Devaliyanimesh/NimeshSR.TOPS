#include<stdio.h>
int main()
{
	int num,sum=0;
	printf("please enter the number");
	scanf("%d",&num);
	while(num!=0){
		sum=sum+num%10;
		num=num/10;
	}
	printf("sum addtion is = %d",sum);
	
	return 0;
}