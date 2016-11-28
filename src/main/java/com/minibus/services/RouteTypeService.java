package com.minibus.services;

import com.minibus.entities.RouteType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RouteTypeService {
    @Autowired
    private MongoOperations mongoOperations;

    public List<RouteType> findAll() {
        return mongoOperations.findAll(RouteType.class);
    }

    public RouteType findById(String id) {
        return mongoOperations.findOne(Query.query(Criteria.where("id").is(id)), RouteType.class);
    }

    public RouteType find(RouteType route) {
        return mongoOperations.findById(route, RouteType.class);
    }

    public RouteType findByType(String type) {
        return mongoOperations.findOne(Query.query(Criteria.where("type").is(type)), RouteType.class);
    }

    public void save(RouteType routeType) {
        mongoOperations.save(routeType);
    }

    public void delete(RouteType routeType) {
        mongoOperations.remove(routeType);
    }
}
