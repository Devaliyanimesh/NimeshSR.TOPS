#include<stdio.h>
int main()
{
	int num,a,b,sum=0;
	printf("Please Enter The Number\n");
	scanf("%d",&num);
	for(a=2;a<=num;a=a+2){
		printf("%d\n",a);
		sum=sum+a;
	}
	
	printf("%d",sum);
	return 0;
}