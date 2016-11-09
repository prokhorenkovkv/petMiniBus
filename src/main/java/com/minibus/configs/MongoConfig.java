package com.minibus.configs;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories
@PropertySource("classpath:mongo.properties")
public class MongoConfig extends AbstractMongoConfiguration {

    @Autowired
    private Environment environment;
    @Override
    protected String getDatabaseName() {
        return environment.getProperty("mongo.db");
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient(environment.getProperty("mongo.host"),
                Integer.parseInt(environment.getProperty("mongo.port")));
    }
}