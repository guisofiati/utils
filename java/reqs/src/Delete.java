package src;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class Delete {

    public static void main(String[] args) throws IOException {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Simple request with HttpUrlConnection API.");
        System.out.println("Not necessary the use of any additional libraries.\n");

        System.out.print("ID to delete: ");
        int idToDelete = scanner.nextInt();
        System.out.println();

        URL url = new URL("http://localhost:3000/posts/" + idToDelete);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("DELETE");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Accept", "application/json");
        con.setDoOutput(true);

        int status = con.getResponseCode();
        System.out.println("Request status: " + status + "\n");

        con.disconnect();
    }
}
