#include<stdio.h>
int main()
{
	int a[5],b[5],j,i,temp;
	printf("please enter the number:\n");
	for(i=0;i<5;i++){
		scanf("%d",&a[i]);
	}
	for(i=0;i<5;i++){
		for(j=i+1;j<5;j++){
			if(a[i]<a[j])
			{
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
				
			}
		}
	}
	printf("the number:\n");
	for(i=0;i<5;i++){
		printf("%d\n",a[i]);
	}
	return 0;
}