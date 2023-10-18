#include<stdio.h>
int main()
{
	float r,l,w,b,h,c;
	printf("--Area of circle--\n\n");
	printf("please enter the Radius\n");
	scanf("%f",&r);
	c=3.14*r*r;
	printf("The Area of Circle is %f\n\n",c);
	
	printf("--Area of circle--\n\n");
	printf("please enter the Length\n");
	scanf("%f",&l);
	printf("please enter the Width\n");
	scanf("%f",&w);
	c=l*w;
	printf("The Area of Circle is %f\n\n",c);
	
	printf("--Area of circle--\n\n");
	printf("please enter the Base\n");
	scanf("%f",&b);
	printf("please enter the Height\n");
	scanf("%f",&h);
	c=b*h/2;
	printf("The Area of Circle is %f\n\n",c);
	
	return 0;
}