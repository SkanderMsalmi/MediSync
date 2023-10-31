package com.medisync;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hospital")
public class controller {
	
	@Autowired
	serviceInterface serv;
	
	@GetMapping("/show/{nom}/{query}")
	public String show(@PathVariable String nom, @PathVariable  String query ) {
		return(serv.query(nom,query));
	}
	

}
