package com.minibus.entities;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection="users")
public class User {
    @Id
    private String id;
    private String firstName;
    private List<SubRoute> subRoutes;
    /*private String lastName;
    @Indexed(unique = true)
    private String phone;
    @Indexed(unique = true)
    private String email;
    private String password;*/

    public User() {

    }

    @PersistenceConstructor
    public User(String id, String firstName, List<SubRoute> subRoutes/*, String lastName, String phone, String email, String password*/) {
        this.id = id;
        this.firstName = firstName;
        this.subRoutes = subRoutes;
        /*this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;*/
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public List<SubRoute> getSubRoutes() {
        return subRoutes;
    }

    public void setSubRoutes(List<SubRoute> subRoutes) {
        this.subRoutes = subRoutes;
    }

    /*public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }*/

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return new EqualsBuilder()
                .append(id, user.id)
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(id)
                .toHashCode();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("firstName", firstName)
                /*.append("lastName", lastName)
                .append("phone", phone)
                .append("email", email)*/
                .toString();
    }
}