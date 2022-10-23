package github.guisofiati.resttemplate.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import github.guisofiati.resttemplate.dto.ProductDTO;

@Service
public class ReportProductService {
	
	@Autowired
	private RestTemplate restTemplate;
	
	private String host = "http://localhost:8080";
	
	private String path = host + "/products";
	
	public ProductDTO findById(Long id) {
		Map<String, String> uriParams = new HashMap<>();
		uriParams.put("id", id.toString()); // ex: /products/1
		
		System.out.println(path + "/" + id);
		
		ResponseEntity<ProductDTO> result = restTemplate.getForEntity(path + "/{id}", ProductDTO.class, uriParams);
		return result.getBody();
	}
}
