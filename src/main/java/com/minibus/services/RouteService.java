package com.minibus.services;

import com.minibus.entities.City;
import com.minibus.entities.Route;
import com.minibus.entities.Stop;
import com.minibus.entities.enums.RouteType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RouteService {
    @Autowired
    private MongoOperations mongoOperations;

    public List<Route> findAll() {
        return mongoOperations.findAll(Route.class);
    }

    public Route findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), Route.class);
    }

    public Route find(Route route) {
        return mongoOperations.findById(route, Route.class);
    }

    public Route findByType(RouteType type) {
        return mongoOperations.findOne(Query.query(Criteria.where("type").is(type)), Route.class);
    }

    public List<City> findByStop(Stop stop) {
        return mongoOperations.find(Query.query(Criteria.where("stop").is(stop)), City.class);
    }

    public List<City> findByCountryId(String countryId) {
        return mongoOperations.find(Query.query(Criteria.where("countryId").is(countryId)), City.class);
    }

    public void save(Route route) {
        mongoOperations.save(route);
    }

    public void delete(Route route) {
        mongoOperations.remove(route);
    }
}