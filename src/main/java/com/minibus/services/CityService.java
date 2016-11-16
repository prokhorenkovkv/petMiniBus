package com.minibus.services;

import com.minibus.entities.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    @Autowired
    private MongoOperations mongoOperations;

    public List<City> findAll() {
        return mongoOperations.findAll(City.class);
    }

    public City findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), City.class);
    }

    public City findByZipCode(String zipCode) {
        return mongoOperations.findOne(Query.query(Criteria.where("zipCode").is(zipCode)), City.class);
    }

    public List<City> findByCityName(String cityName) {
        return mongoOperations.find(Query.query(Criteria.where("cityName").is(cityName)), City.class);
    }

    public List<City> findByCountryId(String countryId) {
        return mongoOperations.find(Query.query(Criteria.where("countryId").is(countryId)), City.class);
    }

    public void save(City city) {
        mongoOperations.save(city);
    }

    public void delete(String id) {
        mongoOperations.findAndRemove(Query.query(Criteria.where("id").is(id)), City.class);
    }
}