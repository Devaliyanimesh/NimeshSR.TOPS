#include<stdio.h>
int main()
{
	int a=0,b=1,c,d,num;
	printf("Please entre the number\n");
	scanf("%d",&num);
	printf("%d\n%d\n",a,b);
	for(c=2;c<=num;c++){
		d=a+b;
		printf("%d\n",d);
		a=b;
		b=d;
	}
	return 0;
}