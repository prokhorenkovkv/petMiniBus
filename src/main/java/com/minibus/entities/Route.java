package com.minibus.entities;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection="routes")
public class Route {
    @Id
    private String id;
    @DBRef
    private RouteType routeType;
    private String number;
    @DBRef
    private City city;
    @DBRef
    private ArrayList<Stop> stops;

    public Route() {

    }

    @PersistenceConstructor
    public Route(String id, RouteType routeType, String number, City city, ArrayList<Stop> stops) {
        this.id = id;
        this.routeType = routeType;
        this.number = number;
        this.city = city;
        this.stops = stops;
    }

    public String getId() {
        return id;
    }

    public RouteType getRouteType() {
        return routeType;
    }

    public void setRouteType(RouteType routeType) {
        this.routeType = routeType;
    }

    public String getNumber() {
        return number;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public ArrayList<Stop> getStops() {
        return stops;
    }

    public void setStops(ArrayList<Stop> stops) {
        this.stops = stops;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Route route = (Route) o;
        return new EqualsBuilder()
                .append(id, route.id)
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
                .append("routeType", routeType)
                .append("number", number)
                .append("city", city)
                .toString();
    }
}
