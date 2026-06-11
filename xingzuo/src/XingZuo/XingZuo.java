package XingZuo;

import java.util.Scanner;

public class XingZuo{
	public static void main(String[] args){
		Scanner s=new Scanner(System.in);	
		System.out.println("请输入男生的星座：");
		String manX=s.next();
		System.out.println("请输入女生的星座：");
		String womanX=s.next();
		Person manP = new Person(manX);
		Person womanP = new Person(womanX);
	}
}

class Person{
	String xingZuo;
	Person(String inXingZuo){
		this.xingZuo=inXingZuo;
	}
}