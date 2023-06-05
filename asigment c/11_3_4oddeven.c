#include<stdio.h>
int main()
{
	int num,i;
	printf("Please Enter The Number\n");
	scanf("%d",&num);
	printf("---- Even number -----");
	for(i=2;i<=num;i=i+2){
		printf("%d\n",i);
	}
	printf("----- odd number -----");
	for(i=1;i<=num;i=i+2){
		printf("%d\n",i);
	}
	return 0;
}