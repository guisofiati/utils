package src;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main {

    public static void main(String[] args) throws IOException {
        System.out.println("Simple request with HttpUrlConnection API.");
        System.out.println("Not necessary the use of any additional libraries.\n");

        URL url = new URL("https://parallelum.com.br/fipe/api/v1/carros/marcas");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        int status = con.getResponseCode();
        System.out.println("Request status: " + status + "\n");

        BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream()));
        StringBuffer content = new StringBuffer();
        String line;
        while((line = br.readLine()) != null) {
            content.append(line);
            System.out.println(content);
        }

        br.close();

        con.disconnect();
    }
}
