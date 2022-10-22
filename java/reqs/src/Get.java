package src;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Get {

    public static void main(String[] args) throws IOException {
        System.out.println("Simple request with HttpUrlConnection API.");
        System.out.println("Not necessary the use of any additional libraries.\n");

        // json-server localhost - json-server --watch db.json
        URL url = new URL("http://localhost:3000/posts");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        int status = con.getResponseCode();
        System.out.println("Request status: " + status + "\n");

        BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream()));
        StringBuffer content = new StringBuffer();
        String line;
        while((line = br.readLine()) != null) {
            content.append(line).append("\n");
        }

        System.out.println(content);

        br.close();

        con.disconnect();
    }
}
