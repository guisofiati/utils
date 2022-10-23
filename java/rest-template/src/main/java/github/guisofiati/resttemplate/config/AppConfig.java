package github.guisofiati.resttemplate.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
	
	// registrar o rest template, e em qualquer lugar podemos injeta-lo para usar.
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}

}
