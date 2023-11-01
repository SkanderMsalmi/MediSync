package com.medisync.controller;

import com.medisync.interfaces.ServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/hospital")
public class Controller {
	
	@Autowired
	ServiceInterface serv;

	@GetMapping("/show/{nom}/{query}")
	public String show(@PathVariable String nom, @PathVariable  String query ) {
		return(serv.query(nom,query));
	}


}
