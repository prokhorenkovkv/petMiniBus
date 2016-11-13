package com.minibus.services;

import com.minibus.entities.Stop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StopService {

    @Autowired
    private MongoOperations mongoOperations;

    public List<Stop> findAll() {
        return mongoOperations.findAll(Stop.class);
    }

    public Stop findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), Stop.class);
    }

    public List<Stop> findByStreet(String street) {
        return mongoOperations.find(Query.query(Criteria.where("street").is(street)), Stop.class);
    }

    public List<Stop> findByCityId(String cityId) {
        return mongoOperations.find(Query.query(Criteria.where("countryId").is(cityId)), Stop.class);
    }

    public void save(Stop stop) {
        mongoOperations.save(stop);
    }

    public void delete(String id) {
        mongoOperations.findAndRemove(Query.query(Criteria.where("id").is(id)), Stop.class);
    }
}
