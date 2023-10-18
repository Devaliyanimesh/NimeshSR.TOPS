#include<stdio.h>
int main()
{
	int num,i;
	printf("please enter the number\n");
	scanf("%d",&num);
	printf("--even number--");
	for(i=2;i<=num;i=i+2)
	{
	   printf("%d\n",i);
	}
	
	printf("--odd number--");
	for(i=1;i<=num;i=i+2)
	{
	   printf("%d\n",i);
	}
	return 0;
}