public class main {
public static void main(String[] args) {
int a = 8;
  for (int b = 1; b <= a; b++){
    for (int c = 7; c >= b; c--) {
    System.out.print(' ');
    }
    for (int d = 1; d <= b; d++){
    System.out.print('*');
    }
    System.out.println();
  }
}
}