package com.minibus.services;

import com.minibus.entities.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private MongoOperations mongoOperations;

    public List<Country> findAll() {
        return mongoOperations.findAll(Country.class);
    }

    public Country findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), Country.class);
    }

    public Country find(Country country) {
        return mongoOperations.findById(country, Country.class);
    }

    public Country findByCountryName(String countryName) {
        return mongoOperations.findOne(Query.query(Criteria.where("countryName").is(countryName)), Country.class);
    }

    public void save(Country country) {
        mongoOperations.save(country);
    }

    public void delete(Country country) {
        mongoOperations.remove(country);
    }
}