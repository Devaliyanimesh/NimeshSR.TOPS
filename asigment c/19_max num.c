#include<stdio.h>
int main()
{
	int a[10],i,max=0,min=0;
	printf("please enter the number\n");
	for(i=0;i<=4;i++){
		scanf("%d",&a[i]);
	}
	for(i=0;i<=4;i++){
		if(a[i]>max){
			max=a[i];
		}
		else{
			min=a[i];
		}
	}	
	printf("minimum number is %d\n",min);
	printf("maximum number is %d\n",max);
	return 0;
}