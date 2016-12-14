package com.minibus.services;

import com.minibus.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService{

    @Autowired
    private MongoOperations mongoOperations;

    public List<User> findAll() {
        return mongoOperations.findAll(User.class);
    }

    public  User findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), User.class);
    }

    /*public User findByEmail(String email) {
        return mongoOperations.findOne(Query.query(Criteria.where("email").is(email)), User.class);
    }

    public User findByPhone(String phone) {
        return mongoOperations.findOne(Query.query(Criteria.where("phone").is(phone)), User.class);
    }*/

    public void save(User user) {
        mongoOperations.save(user);
    }

    public void delete(String id) {
        mongoOperations.findAndRemove(Query.query(Criteria.where("id").is(id)), User.class);
    }
}