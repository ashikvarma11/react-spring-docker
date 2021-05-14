package com.empmanage.backend.service;

import java.util.List;
import java.util.UUID;  
import java.util.Optional;
import java.util.Random;

import org.springframework.stereotype.Component;

import com.empmanage.backend.model.Employee;
import com.empmanage.backend.repository.EmpRepository;

@Component
public class EmpService {
	
	private EmpRepository empRepository;

    public EmpService(EmpRepository empRepository) {
        this.empRepository = empRepository;
    }

    public List<Employee> getEmployees() {
        return empRepository.findAll();
    }
    
    public Employee saveEmployee(Employee employee) {
        UUID uuid=UUID.randomUUID();
    	employee.setId(uuid.toString());
    	return empRepository.save(employee);
    }

    public Optional<Employee> getSingleEmployee(String id) {
    	return empRepository.findById(id);
    }

    public Employee updateSingleEmployee(String id,Employee employee) {
        
        Employee resource =  empRepository.findById(id).orElse(null);
        resource = employee;
        return empRepository.save(resource);
    }

    public Boolean deleteSingleEmployee(String id) {
        try {
            empRepository.deleteById(id); 
            return null;
        } catch (Exception e) {
            return false;
        }
    }

}
