package com.minibus.services;

import com.minibus.entities.SubRoute;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubRouteService {

    @Autowired
    private MongoOperations mongoOperations;

    public List<SubRoute> findAll() {
        return mongoOperations.findAll(SubRoute.class);
    }

    public SubRoute findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), SubRoute.class);
    }

    public List<SubRoute> findByUserId(String userId) {
        return mongoOperations.find(Query.query(Criteria.where("userId").is(userId)), SubRoute.class);
    }

    public List<SubRoute> findByRoute(String cityId) {
        return mongoOperations.find(Query.query(Criteria.where("countryId").is(cityId)), SubRoute.class);
    }

    public List<SubRoute> findByStartStopId(String startStopId) {
        return mongoOperations.find(Query.query(Criteria.where("startStopId").is(startStopId)), SubRoute.class);
    }

    public List<SubRoute> findByEndStopId(String endStopId) {
        return mongoOperations.find(Query.query(Criteria.where("endStopId").is(endStopId)), SubRoute.class);
    }

    public void save(SubRoute subRoute) {
        mongoOperations.save(subRoute);
    }

    public void delete(String id) {
        mongoOperations.findAndRemove(Query.query(Criteria.where("id").is(id)), SubRoute.class);
    }
}