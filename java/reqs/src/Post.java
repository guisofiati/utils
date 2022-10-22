package src;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class Post {

    public static void main(String[] args) throws IOException {
        System.out.println("Simple request with HttpUrlConnection API.");
        System.out.println("Not necessary the use of any additional libraries.\n");

        URL url = new URL("http://localhost:3000/posts");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Accept", "application/json");
        con.setDoOutput(true);

        String jsonNewPost = "{\"title\": \"Lorem ipsum\", \"author\": \"Iperiums\", \"id\": 3}";

        try(OutputStream os = con.getOutputStream()) {
            byte[] input = jsonNewPost.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }

        int status = con.getResponseCode();
        System.out.println("Request status: " + status + "\n");

        con.disconnect();
    }
}
