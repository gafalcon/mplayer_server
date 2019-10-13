package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins="http://localhost:4200")
public class HomeController {

	@RequestMapping("/")
	public String home(){
		return "index.html";
	}
	
	@RequestMapping(value = "/{[path:[^\\.]*}")
	public String redirect() {
	  return "forward:/";
	}	
}
