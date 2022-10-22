package src;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class Update {

    public static void main(String[] args) throws IOException {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Simple request with HttpUrlConnection API.");
        System.out.println("Not necessary the use of any additional libraries.\n");

        System.out.print("ID to update: ");
        int idToUpdate = scanner.nextInt();
        System.out.println();

        URL url = new URL("http://localhost:3000/posts/" + idToUpdate);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("PUT");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Accept", "application/json");
        con.setDoOutput(true);

        String jsonUpdatePost = "{\"title\": \"Contrary to popular belief\", \"author\": \"Hampden-Sydney\", \"id\": " + idToUpdate + "}";

        try(OutputStream os = con.getOutputStream()) {
            byte[] input = jsonUpdatePost.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }

        int status = con.getResponseCode();
        System.out.println("Request status: " + status + "\n");

        con.disconnect();
    }
}
