#include<stdio.h>
int main()
{
	int i,f=1,num;
	printf("please enter the number:\n");
	scanf("%d",&num);
	for(i=1;i<=num;i++){
		f=f*i;
	}
	printf("the number of %d is %d",num,f);
}