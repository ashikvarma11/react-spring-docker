package com.empmanage.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Employee {
	
	@Id
    @Column
    private String id;

    @Column
    private String firstName;
    
    @Column
    private String lastName;
    
    @Column
    private String email;

    public void setId(String id) {
        this.id = id;
    }
    public String getFirstName() {
        return this.firstName;
    }
    public String getLastName() {
        return this.lastName;
    }
    public String getEmail() {
        return this.email;
    }

    public void setFirstName(String fname) {
        this.firstName = fname;
    }
    public void setLastName(String lname) {
        this.lastName = lname;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return long return the id
     */
    public String getId() {
        return this.id;
    }

}

