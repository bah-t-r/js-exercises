public class Main {
    static int num = 20;
    public static void main(String[] args) {
        // showFirstMessage("Hello World!");
        // System.out.println(num);
        System.out.printf("%d\n%d\n%d\n", calc(5, 2), calc(5, 5), calc(5, 10));
    }
    static void showFirstMessage(String text) {
        System.out.println(text);
        num = 10;
        System.out.println(num);
    }
    static int calc(int a, int b) {
        return a + b;
    }
}