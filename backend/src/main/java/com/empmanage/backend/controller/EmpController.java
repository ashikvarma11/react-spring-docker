package com.empmanage.backend.controller;

import java.util.List;
import java.util.Optional;

import com.empmanage.backend.links.Links;
import com.empmanage.backend.model.Employee;
import com.empmanage.backend.service.EmpService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin

@RequestMapping("/api")
public class EmpController {
    @Autowired
	EmpService empService;
	
	@GetMapping(path = Links.EMP_LIST)
    public ResponseEntity<?> listUsers() {
        List<Employee> resource = empService.getEmployees();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = Links.EMP_LIST)
	public Employee addEmployee(@RequestBody Employee employee) {
        System.out.println(employee);
        Employee resource = empService.saveEmployee(employee);
        return resource;
    }

    @GetMapping(path = Links.EMP_SINGLE)
	public Optional<Employee> getSinglEmployee(@PathVariable("id") String id) {
        Optional<Employee> resource = empService.getSingleEmployee(id);
        return resource;
    }

    @PostMapping(path = Links.EMP_SINGLE)
	public Employee updateSingleEmployee(@PathVariable("id") String id,@RequestBody Employee employee) {
        Employee resource = empService.updateSingleEmployee(id,employee);
        return resource;
    }

    @DeleteMapping(path = Links.EMP_SINGLE)
	public Boolean deleteSingleEmployee(@PathVariable("id") String id) {
        return empService.deleteSingleEmployee(id);
        
    }
}
