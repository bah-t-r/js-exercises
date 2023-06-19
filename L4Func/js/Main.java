public class Main {
    static int num = 20;
    public static void main(String[] args) {
        showFirstMessage("Hello World!");
        System.out.println(num);
    }
    static void showFirstMessage(String text) {
        System.out.println(text);
        num = 10;
        System.out.println(num);
    }
}