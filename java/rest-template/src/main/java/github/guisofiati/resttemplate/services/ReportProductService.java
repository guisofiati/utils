package github.guisofiati.resttemplate.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import github.guisofiati.resttemplate.dto.PageDTO;
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
	
	// 3o parâmetro é o corpo da requisição
	public List<ProductDTO> findAll() {
		ParameterizedTypeReference<PageDTO<ProductDTO>> responseType = new ParameterizedTypeReference<PageDTO<ProductDTO>>() { };
		ResponseEntity<PageDTO<ProductDTO>> result = restTemplate.exchange(path, HttpMethod.GET, null, responseType);
		return result.getBody().getContent();
	}
	
	// para fazer insert, update e delete é necessário autenticação (na api que esta sendo consumida)
	// 3o parâmetro é o corpo da requisição
	public ProductDTO insert(ProductDTO dto, String bearenToken) {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", bearenToken);
		
		HttpEntity<ProductDTO> httpEntity = new HttpEntity<>(dto, headers);
		
		ResponseEntity<ProductDTO> result = restTemplate.exchange(path, HttpMethod.POST, httpEntity, ProductDTO.class);
		return result.getBody();
	}
	
	public ProductDTO update(Long id, ProductDTO dto, String bearenToken) {
		Map<String, String> uriParams = new HashMap<>();
		uriParams.put("id", id.toString());
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", bearenToken);
		
		HttpEntity<ProductDTO> httpEntity = new HttpEntity<>(dto, headers);
		
		ResponseEntity<ProductDTO> result = restTemplate.exchange(path + "/{id}", HttpMethod.PUT, httpEntity, ProductDTO.class, uriParams);
		return result.getBody();
	}
	
	public Integer delete(Long id, String bearenToken) {
		Map<String, String> uriParams = new HashMap<>();
		uriParams.put("id", id.toString());
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", bearenToken);
		
		HttpEntity<?> httpEntity = new HttpEntity<>(headers);
	
		ResponseEntity<Void> result = restTemplate.exchange(path + "/{id}", HttpMethod.DELETE, httpEntity, Void.class, uriParams);
	
		return result.getStatusCodeValue();
	}
}
