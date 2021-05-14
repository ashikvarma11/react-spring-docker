package com.empmanage.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.empmanage.backend.model.Employee;

@RepositoryRestResource()
public interface EmpRepository extends JpaRepository<Employee, String>, JpaSpecificationExecutor<Employee>, QuerydslPredicateExecutor<Employee> {}

