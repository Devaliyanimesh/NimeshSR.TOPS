#include<stdio.h>
int main()
{
	int i,num;
	printf("please enter the number whose table you print ?\n");
	scanf("%d",&num);
	for(i=1;i<=10;i++){
		printf("%d X %d = %d\n",num,i,num*i);
	}
	return 0;
}